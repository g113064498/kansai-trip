from pathlib import Path

p = Path('app.js')
s = p.read_text(encoding='utf-8')

# 1) Track the master snapshot last read from the database.
old = "const ARTICLE_TAGS = { MESSAGES: 'messages', MASTER: 'master', SOUVENIRS: 'souvenirs' };\n"
new = old + "let lastSyncedMaster = null; // last master snapshot read from HexSchool; used for conflict-safe merges\n"
assert old in s, 'ARTICLE_TAGS marker missing'
s = s.replace(old, new, 1)

# 2) Ensure candidate product updates never erase rating metadata.
old = "content: JSON.stringify({ city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '' }),"
new = "content: JSON.stringify({ city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '', googleRating: item.googleRating || '', tabelogRating: item.tabelogRating || '', tabelogUrl: item.tabelogUrl || '', ratingChecked: item.ratingChecked || '' }),"
assert old in s, 'ensurePoolProduct content marker missing'
s = s.replace(old, new, 1)

# 3) Database is authoritative once a master article exists. Do not merge hardcoded itinerary back in.
old = """                const m = JSON.parse(masterData.content);\n                if (m.flights) db.flights = m.flights;"""
new = """                const m = JSON.parse(masterData.content);\n                lastSyncedMaster = JSON.parse(JSON.stringify(m));\n                if (m.flights) db.flights = m.flights;"""
assert old in s, 'master parse marker missing'
s = s.replace(old, new, 1)

old = """                if (m.customEvents) {\n                    for (const [day, events] of Object.entries(m.customEvents)) {\n                        if (db.itinerary.hasOwnProperty(day)) {\n                            const initEvents = initialTripData.itinerary[day] || [];\n                            const mergedMap = new Map();\n                            initEvents.forEach(e => mergedMap.set(e.id, e));\n                            (events || []).forEach(e => mergedMap.set(e.id, e));\n                            db.itinerary[day] = Array.from(mergedMap.values());\n                        }\n                    }\n                }"""
new = """                if (m.customEvents) {\n                    // Once remote data exists it is the source of truth. GitHub initialTripData is seed-only.\n                    for (const day of Object.keys(db.itinerary || {})) db.itinerary[day] = [];\n                    for (const [day, events] of Object.entries(m.customEvents)) {\n                        if (db.itinerary.hasOwnProperty(day)) {\n                            db.itinerary[day] = Array.isArray(events) ? events : [];\n                        }\n                    }\n                }"""
assert old in s, 'customEvents merge marker missing'
s = s.replace(old, new, 1)

# 4) Never write to the database merely because load-time migration/cleanup noticed something.
old = """        // 合併 migration 與 cleanup 的存檔，只呼叫一次\n        if (migrated || cleaned) saveItineraryToRemote();"""
new = """        // Loading is read-only. Never overwrite shared remote data just because this client migrated/cleaned local state.\n        if (migrated || cleaned) {\n            console.log('[Sync] migration/cleanup applied locally; remote write deferred until an explicit user edit');\n        }"""
assert old in s, 'migration autosave marker missing'
s = s.replace(old, new, 1)

# 5) Add three-way merge helpers for shared master state.
marker = "async function saveAllToRemote() {\n"
assert marker in s, 'saveAllToRemote marker missing'
helpers = r'''function cloneJson(value) {
    return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function jsonEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function isPlainObject(v) {
    return !!v && typeof v === 'object' && !Array.isArray(v);
}

// Three-way merge: remote changes are preserved when this browser did not change that field.
// If both users changed different nested fields, both survive. Only the exact same leaf is last-write-wins.
function mergeConcurrent(base, local, remote) {
    if (jsonEqual(local, base)) return cloneJson(remote);
    if (jsonEqual(remote, base)) return cloneJson(local);
    if (jsonEqual(local, remote)) return cloneJson(local);

    if (Array.isArray(base) && Array.isArray(local) && Array.isArray(remote)) {
        const maxLen = Math.max(base.length, local.length, remote.length);
        const out = [];
        for (let i = 0; i < maxLen; i++) {
            const bHas = i < base.length, lHas = i < local.length, rHas = i < remote.length;
            if (!lHas && !rHas) continue;
            if (!bHas) {
                if (lHas && rHas) out[i] = jsonEqual(local[i], remote[i]) ? cloneJson(local[i]) : cloneJson(local[i]);
                else out[i] = cloneJson(lHas ? local[i] : remote[i]);
                continue;
            }
            if (!lHas) {
                if (rHas && !jsonEqual(remote[i], base[i])) out[i] = cloneJson(remote[i]);
                continue;
            }
            if (!rHas) {
                if (!jsonEqual(local[i], base[i])) out[i] = cloneJson(local[i]);
                continue;
            }
            out[i] = mergeConcurrent(base[i], local[i], remote[i]);
        }
        return out.filter(v => v !== undefined);
    }

    if (isPlainObject(base) && isPlainObject(local) && isPlainObject(remote)) {
        const out = {};
        const keys = new Set([...Object.keys(base), ...Object.keys(local), ...Object.keys(remote)]);
        for (const key of keys) {
            const bHas = Object.prototype.hasOwnProperty.call(base, key);
            const lHas = Object.prototype.hasOwnProperty.call(local, key);
            const rHas = Object.prototype.hasOwnProperty.call(remote, key);
            if (!bHas) {
                if (lHas && rHas) out[key] = jsonEqual(local[key], remote[key]) ? cloneJson(local[key]) : cloneJson(local[key]);
                else if (lHas || rHas) out[key] = cloneJson(lHas ? local[key] : remote[key]);
                continue;
            }
            if (!lHas) {
                if (rHas && !jsonEqual(remote[key], base[key])) out[key] = cloneJson(remote[key]);
                continue;
            }
            if (!rHas) {
                if (!jsonEqual(local[key], base[key])) out[key] = cloneJson(local[key]);
                continue;
            }
            out[key] = mergeConcurrent(base[key], local[key], remote[key]);
        }
        return out;
    }

    // Both changed the exact same scalar/leaf: the current user's explicit save wins.
    return cloneJson(local);
}

async function fetchLatestMasterPayload() {
    const articles = await hexAPI.getArticles();
    let master = articles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MASTER)) || null;
    if (master && !master.content) master = await hexAPI.getArticle(master.id).catch(() => master);
    if (!master || !master.content) return {};
    try { return JSON.parse(master.content); } catch { return {}; }
}

function buildLocalMasterPayload() {
    const dayOrder = {};
    const customEvents = {};
    for (const [day, events] of Object.entries(db.itinerary || {})) {
        dayOrder[day] = (events || []).map(e => e.id);
        customEvents[day] = (events || []).filter(e => !e._poolId && !e._productId && !e.id.startsWith('api-'));
    }
    return {
        flights: db.flights,
        hotels: db.hotels,
        budget: db.budget,
        checklist: db.checklist,
        dayOrder,
        customEvents,
        scheduledItems: db.scheduledItems || {},
        poolPhotos: db.poolPhotos || {},
        deletedPoolItems: db.deletedPoolItems || []
    };
}

async function saveMasterConflictSafe(localPayload) {
    // Read immediately before write so another editor's newer fields are not overwritten by a stale browser snapshot.
    const remotePayload = await fetchLatestMasterPayload();
    const basePayload = lastSyncedMaster || remotePayload || {};
    const mergedPayload = mergeConcurrent(basePayload, localPayload, remotePayload || {});
    removeCacheId('art', 'art:master:主行程資料');
    await ensureArticle(ARTICLE_TAGS.MASTER, '主行程資料', JSON.stringify(mergedPayload));
    lastSyncedMaster = cloneJson(mergedPayload);
    return mergedPayload;
}

'''
s = s.replace(marker, helpers + marker, 1)

# 6) Replace full overwrite saves with conflict-safe read-merge-write.
old_start = "async function saveAllToRemote() {\n    if (!db) return;\n    removeCacheId('art', 'art:master:主行程資料');\n"
assert old_start in s, 'saveAllToRemote old start missing'
# replace whole function using boundaries
start = s.index("async function saveAllToRemote() {")
end = s.index("\nasync function saveMessagesToRemote()", start)
new_func = '''async function saveAllToRemote() {
    if (!db) return;
    const localPayload = buildLocalMasterPayload();
    await saveMasterConflictSafe(localPayload);
    // 留言板仍獨立儲存，不與 master 混在同一筆資料。
    await ensureArticle(ARTICLE_TAGS.MESSAGES, '留言板資料', JSON.stringify([]));
}
'''
s = s[:start] + new_func + s[end:]

start = s.index("async function saveItineraryToRemote() {")
end = s.index("\n// LOGIN FLOW", start)
new_func = '''async function saveItineraryToRemote() {
    if (!db) return;
    showSyncOverlay();
    try {
        setSyncStatus('syncing');
        const localPayload = buildLocalMasterPayload();
        await saveMasterConflictSafe(localPayload);
        setSyncStatus('synced');
    } catch (err) {
        console.warn('[Sync] 行程同步失敗:', err);
        setSyncStatus('offline');
        throw err;
    } finally {
        hideSyncOverlay();
    }
}
'''
s = s[:start] + new_func + s[end:]

# 7) Cached UI may render instantly, but editing must be blocked until fresh DB state arrives.
old = """    if (loggedIn) {\n        // 若有快取，我們在背景默默進行 API 同步，不阻礙使用者操作；若無快取則顯示同步遮罩\n        if (!cacheLoaded) {\n            showSyncOverlay();\n        }\n        try {"""
new = """    if (loggedIn) {\n        // 快取只用來秒開畫面；在拿到最新共享資料前一律鎖住編輯，避免用舊快取覆蓋另一位使用者。\n        showSyncOverlay();\n        try {"""
assert old in s, 'init overlay start marker missing'
s = s.replace(old, new, 1)
old = """        } finally {\n            if (!cacheLoaded) {\n                hideSyncOverlay();\n            }\n        }\n    }"""
new = """        } finally {\n            hideSyncOverlay();\n        }\n    }"""
assert old in s, 'init overlay end marker missing'
s = s.replace(old, new, 1)

p.write_text(s, encoding='utf-8')
print('collaborative sync patch applied')
