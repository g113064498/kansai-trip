from pathlib import Path
import re

p = Path('app.js')
s = p.read_text(encoding='utf-8')

# 1) itinerary / attractionPool must not be hardcoded runtime data.
s, n = re.subn(r'    itinerary: \{.*?\n    \},\n    attractionPool: \[.*?\n    \],\n    checklist:', '    itinerary: {},\n    attractionPool: [],\n    checklist:', s, count=1, flags=re.S)
if n != 1:
    raise SystemExit('initial itinerary/attractionPool block not found')

# 2) Replace loadFromRemote: Hexschool Articles + Products are the only source for itinerary/pool.
start = s.index('async function loadFromRemote() {')
end = s.index('\nasync function addNewPoolCandidate()', start)
new_load = r'''async function loadFromRemote() {
    try {
        setSyncStatus('syncing');

        // Runtime shell only. itinerary and attractionPool are populated exclusively from Hexschool /v2.
        db = JSON.parse(JSON.stringify(initialTripData));
        db.itinerary = {};
        db.attractionPool = [];
        if (!db.messages) db.messages = [];

        const makeEmptyItinerary = () => {
            const out = {};
            const start = new Date((db.startDate || '2026-11-04') + 'T00:00:00');
            const end = new Date((db.endDate || db.startDate || '2026-11-04') + 'T00:00:00');
            for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
                out[key] = [];
            }
            return out;
        };
        db.itinerary = makeEmptyItinerary();

        let [allArticles, allProducts] = await Promise.all([
            hexAPI.getArticles(),
            hexAPI.getProducts()
        ]);

        let masterData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MASTER)) || null;
        const msgData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MESSAGES)) || null;
        const souvData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.SOUVENIRS)) || null;
        if (masterData && !masterData.content) masterData = await hexAPI.getArticle(masterData.id).catch(() => masterData);

        let master = {};
        if (masterData && masterData.content) {
            try { master = JSON.parse(masterData.content) || {}; } catch { master = {}; }
        }
        lastSyncedMaster = JSON.parse(JSON.stringify(master));

        // Master article owns shared trip metadata, never initialTripData once present.
        if (masterData) {
            if (master.tripTitle) db.tripTitle = master.tripTitle;
            if (master.startDate) db.startDate = master.startDate;
            if (master.endDate) db.endDate = master.endDate;
            if (master.flights) db.flights = master.flights;
            if (master.hotels) db.hotels = master.hotels;
            if (master.budget) db.budget = master.budget;
            if (master.checklist) db.checklist = master.checklist;
            if (master.dayOrder) db.dayOrder = master.dayOrder;
            if (master.poolPhotos) db.poolPhotos = master.poolPhotos;
            if (master.deletedPoolItems) db.deletedPoolItems = master.deletedPoolItems;
            db.itinerary = makeEmptyItinerary();
        }

        const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
        const parseContent = (p) => { try { return JSON.parse(p.content || '{}'); } catch { return {}; } };

        // One-time migration: legacy master.customEvents -> normal Products.
        // After migration, ALL itinerary entries are Products and can be edited/deleted like pool items.
        const legacyEvents = master.customEvents && typeof master.customEvents === 'object' ? master.customEvents : {};
        const hasLegacyEvents = Object.values(legacyEvents).some(v => Array.isArray(v) && v.length);
        if (hasLegacyEvents) {
            let changed = false;
            for (const [day, events] of Object.entries(legacyEvents)) {
                for (const ev of (events || [])) {
                    const existing = allProducts.find(prod => {
                        if (prod.category !== '候選景點') return false;
                        const d = parseContent(prod);
                        return d.legacyEventId === ev.id || (normalizeTitle(prod.title) === normalizeTitle(ev.title) && (d.day === day || (prod.unit || '').startsWith(day + '|')));
                    });
                    if (existing) continue;
                    const content = {
                        city: ev.city || 'Other', desc: ev.desc || '', cost: ev.cost || 0,
                        category: ev.category || 'other', day, photos: ev.photos || [],
                        location: ev.location || '', time: ev.time || '', legacyEventId: ev.id || ''
                    };
                    await hexAPI.createProduct({
                        title: ev.title || '未命名行程', content: JSON.stringify(content), category: '候選景點',
                        origin_price: ev.cost || 0, price: 0,
                        unit: day + '|' + (ev.time || '10:00 - 12:00'), is_enabled: 1, num: 1
                    });
                    changed = true;
                }
            }
            if (changed) allProducts = await hexAPI.getProducts();

            // Clear legacy events only after products are safely present.
            if (masterData && masterData.id) {
                const migratedMaster = { ...master, customEvents: {}, customEventsMigratedToProducts: true };
                const now = Math.floor(Date.now() / 1000);
                await hexAPI.updateArticle(masterData.id, {
                    title: masterData.title || '主行程資料', content: JSON.stringify(migratedMaster),
                    tag: masterData.tag || [ARTICLE_TAGS.MASTER], isPublic: false,
                    create_at: masterData.create_at || now, author: masterData.author || 'admin'
                });
                master = migratedMaster;
                lastSyncedMaster = JSON.parse(JSON.stringify(master));
            }
        }

        // Products are the sole source for attractionPool and scheduled itinerary entries.
        const poolProducts = allProducts.filter(p => p.category === '候選景點');
        poolProducts.sort((a, b) => (parseInt(b.id, 10) || 0) - (parseInt(a.id, 10) || 0));
        const seen = new Set();
        const apiPoolItems = [];
        for (const prod of poolProducts) {
            const data = parseContent(prod);
            const norm = normalizeTitle(prod.title);
            // Only dedupe exact title duplicates; newest product wins.
            if (seen.has(norm)) continue;
            seen.add(norm);
            const unit = prod.unit || '';
            const unitDay = unit.includes('|') ? unit.split('|')[0] : '';
            const unitTime = unit.includes('|') ? unit.split('|')[1] : '';
            apiPoolItems.push({
                id: 'api-' + prod.id,
                city: data.city || 'Other',
                title: prod.title,
                desc: data.desc || '',
                cost: data.cost ?? prod.origin_price ?? 0,
                category: data.category || 'other',
                isEnabled: prod.is_enabled == 1 || prod.is_enabled === true,
                day: unitDay || data.day || '',
                time: unitTime || data.time || '',
                photos: data.photos || [],
                location: data.location || '',
                googleRating: data.googleRating || '',
                tabelogRating: data.tabelogRating || '',
                tabelogUrl: data.tabelogUrl || '',
                ratingChecked: data.ratingChecked || '',
                _productId: prod.id
            });
        }
        db.attractionPool = apiPoolItems;

        if (!db.poolPhotos) db.poolPhotos = {};
        if (!db.deletedPoolItems) db.deletedPoolItems = [];
        for (const item of db.attractionPool) {
            if (db.poolPhotos[item.id]) item.photos = db.poolPhotos[item.id];
        }

        db.scheduledItems = {};
        for (const item of db.attractionPool) {
            if (!item.isEnabled || !item.day || !db.itinerary[item.day]) continue;
            db.scheduledItems[item.id] = item.day + '|' + (item.time || '10:00 - 12:00');
            db.itinerary[item.day].push({
                id: item.id, _poolId: item.id, _productId: item._productId,
                time: item.time || '10:00 - 12:00', title: item.title,
                desc: item.desc || '', cost: item.cost || 0, category: item.category || 'other',
                photos: item.photos || [], location: item.location || ''
            });
        }

        // Preserve optional manual order from master, but never filter/delete API items.
        if (db.dayOrder) {
            for (const [day, order] of Object.entries(db.dayOrder)) {
                if (!db.itinerary[day] || !Array.isArray(order)) continue;
                const orderMap = new Map(order.map((id, i) => [id, i]));
                db.itinerary[day].sort((a, b) => (orderMap.get(a.id) ?? 9999) - (orderMap.get(b.id) ?? 9999));
            }
        }
        for (const day of Object.keys(db.itinerary)) db.itinerary[day] = sortItineraryByTime(db.itinerary[day]);

        db.messages = [];
        if (souvData && souvData.content) {
            try { const v = JSON.parse(souvData.content); db.souvenirs = Array.isArray(v) ? v : []; } catch { db.souvenirs = []; }
        } else if (!db.souvenirs) db.souvenirs = [];

        setSyncStatus('synced');
        return true;
    } catch (err) {
        console.warn('[Sync] 讀取 API 失敗:', err);
        setSyncStatus('offline');
        return false;
    }
}
'''
s = s[:start] + new_load + s[end:]

# 3) make sidebar/date math derive from DB dates, not hardcoded Nov 4 / 8 days.
old_sidebar = '''    for (let i = 0; i < 8; i++) {
        const d = new Date(2026, 10, 4 + i); // 2026-11-04 + i
        const dayStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');'''
new_sidebar = '''    const start = new Date((db.startDate || '2026-11-04') + 'T00:00:00');
    const end = new Date((db.endDate || db.startDate || '2026-11-04') + 'T00:00:00');
    const totalDays = Math.max(1, Math.round((end - start) / 86400000) + 1);
    for (let i = 0; i < totalDays; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const dayStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');'''
if old_sidebar not in s: raise SystemExit('sidebar marker not found')
s = s.replace(old_sidebar, new_sidebar, 1)

s = s.replace("    const base = new Date(2026, 10, 4); // 2026-11-04", "    const base = new Date((db.startDate || '2026-11-04') + 'T00:00:00');", 1)

# 4) saveEvent: every newly added itinerary entry is immediately a Product; no master.customEvents.
start = s.index('function saveEvent(e) {')
end = s.index('\n// MOVE EVENT (UP / DOWN)', start)
new_save = r'''async function saveEvent(e) {
    e.preventDefault();

    const id = document.getElementById('event-id').value;
    const dayStr = document.getElementById('event-day').value;
    const title = document.getElementById('event-title-input').value;
    const time = document.getElementById('event-time-input').value;
    const category = document.getElementById('event-category-select').value;
    const cost = parseInt(document.getElementById('event-cost-input').value) || 0;
    const location = document.getElementById('event-location-input').value;
    const desc = document.getElementById('event-desc-input').value;
    const photos = currentEventPhotos.length > 0 ? currentEventPhotos : [];

    showSyncOverlay();
    try {
        if (id) {
            const oldEntry = (db.itinerary[dayStr] || []).find(ev => ev.id === id);
            if (oldEntry && oldEntry._poolId) {
                const poolItem = db.attractionPool.find(p => p.id === oldEntry._poolId);
                if (!poolItem) throw new Error('找不到對應的 API 行程資料');
                Object.assign(poolItem, { title, time, category, cost, location, desc, photos, day: dayStr, isEnabled: true });
                const content = { city: poolItem.city || 'Other', desc, cost, category, day: dayStr, photos, location, time,
                    googleRating: poolItem.googleRating || '', tabelogRating: poolItem.tabelogRating || '', tabelogUrl: poolItem.tabelogUrl || '', ratingChecked: poolItem.ratingChecked || '' };
                await hexAPI.updateProduct(poolItem._productId, { title, content: JSON.stringify(content), category: '候選景點', origin_price: cost, price: 0, unit: dayStr + '|' + (time || '10:00 - 12:00'), is_enabled: 1, num: 1 });
            } else {
                // Legacy/direct entry: convert it to a normal API product on edit.
                const tmp = { id: 'new-' + Date.now(), city: 'Other', title, desc, cost, category, day: dayStr, time, photos, location, isEnabled: true };
                const pid = await ensurePoolProduct(tmp);
                if (!pid) throw new Error('無法建立 API 行程資料');
                await hexAPI.updateProduct(pid, { title, content: JSON.stringify({ city:'Other', desc, cost, category, day:dayStr, photos, location, time }), category:'候選景點', origin_price:cost, price:0, unit:dayStr+'|'+(time || '10:00 - 12:00'), is_enabled:1, num:1 });
            }
        } else {
            const newItem = { id: 'new-' + Date.now(), city: 'Other', title, desc, cost, category, day: dayStr, time, photos, location, isEnabled: true };
            const pid = await ensurePoolProduct(newItem);
            if (!pid) throw new Error('無法建立 API 行程資料');
            await hexAPI.updateProduct(pid, { title, content: JSON.stringify({ city:'Other', desc, cost, category, day:dayStr, photos, location, time }), category:'候選景點', origin_price:cost, price:0, unit:dayStr+'|'+(time || '10:00 - 12:00'), is_enabled:1, num:1 });
        }
        closeEventModal();
        await loadFromRemote();
        saveToLocalStorage();
        renderAllUI();
        selectDay(dayStr);
        showToast('已儲存到 Hexschool 資料庫！');
    } catch (err) {
        console.warn('[SaveEvent] 同步失敗:', err);
        showToast('儲存失敗：' + err.message, 3000);
    } finally {
        hideSyncOverlay();
    }
}
'''
s = s[:start] + new_save + s[end:]

# 5) Master no longer stores customEvents as itinerary source.
s = s.replace("        customEvents,\n        scheduledItems:", "        customEvents: {},\n        scheduledItems:")

p.write_text(s, encoding='utf-8')
print('patched app.js')
