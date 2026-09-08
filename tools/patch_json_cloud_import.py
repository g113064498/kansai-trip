from pathlib import Path
p=Path('app.js')
s=p.read_text()
marker='// IMPORT JSON DATA\n'
helper=r'''// Upload an exported backup back into Hexschool. The JSON is only a migration source;
// after this finishes, Articles + Products are the source of truth.
async function syncImportedProductsToRemote(parsedData) {
    const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
    let products = await hexAPI.getProducts();
    const byId = new Map(products.map(p => [String(p.id), p]));
    const byTitle = new Map();
    for (const p of products) {
        if (p.category !== '候選景點') continue;
        const key = normalizeTitle(p.title);
        if (!byTitle.has(key)) byTitle.set(key, p);
    }

    const itineraryEntries = [];
    for (const [day, events] of Object.entries(parsedData.itinerary || {})) {
        for (const ev of (events || [])) itineraryEntries.push({ day, ev });
    }

    const represented = new Set();
    const upsert = async (item, forcedDay='', forcedEnabled=null) => {
        const productId = item._productId ? String(item._productId) : '';
        let scheduled = null;
        if (productId) scheduled = itineraryEntries.find(x => String(x.ev._productId || '') === productId) || null;
        if (!scheduled && item.id) scheduled = itineraryEntries.find(x => x.ev.id === item.id || x.ev._poolId === item.id) || null;
        if (!scheduled) scheduled = itineraryEntries.find(x => normalizeTitle(x.ev.title) === normalizeTitle(item.title)) || null;

        const day = forcedDay || item.day || (scheduled ? scheduled.day : '');
        const time = item.time || (scheduled ? scheduled.ev.time : '') || '';
        const enabled = forcedEnabled !== null ? forcedEnabled : (!!day && (item.isEnabled === true || !!scheduled));
        const content = {
            city: item.city || 'Other',
            desc: item.desc || '',
            cost: Number(item.cost) || 0,
            category: item.category || 'other',
            day: enabled ? day : '',
            photos: item.photos || [],
            location: item.location || '',
            time,
            googleRating: item.googleRating || '',
            tabelogRating: item.tabelogRating || '',
            tabelogUrl: item.tabelogUrl || '',
            ratingChecked: item.ratingChecked || ''
        };
        const payload = {
            title: item.title || '未命名行程',
            content: JSON.stringify(content),
            category: '候選景點',
            origin_price: Number(item.cost) || 0,
            price: 0,
            unit: enabled && day ? day + '|' + (time || '10:00 - 12:00') : '景點',
            is_enabled: enabled ? 1 : 0,
            num: 1
        };
        let existing = productId ? byId.get(productId) : null;
        if (!existing) existing = byTitle.get(normalizeTitle(payload.title)) || null;
        if (existing) {
            await hexAPI.updateProduct(existing.id, payload);
            represented.add(String(existing.id));
            represented.add(normalizeTitle(payload.title));
            return existing.id;
        }
        await hexAPI.createProduct(payload);
        products = await hexAPI.getProducts();
        const created = products.find(p => p.category === '候選景點' && normalizeTitle(p.title) === normalizeTitle(payload.title));
        if (created) {
            byId.set(String(created.id), created);
            byTitle.set(normalizeTitle(created.title), created);
            represented.add(String(created.id));
            represented.add(normalizeTitle(created.title));
            return created.id;
        }
        return null;
    };

    // Pool is the canonical set of candidate/scheduled Products in an export.
    for (const item of (parsedData.attractionPool || [])) await upsert(item);

    // Older exports can contain direct itinerary rows that were never in attractionPool.
    for (const {day, ev} of itineraryEntries) {
        const pid = String(ev._productId || '');
        const titleKey = normalizeTitle(ev.title);
        if ((pid && represented.has(pid)) || represented.has(titleKey)) continue;
        await upsert({
            ...ev,
            city: ev.city || 'Other',
            isEnabled: true,
            day,
            _productId: ev._productId || ''
        }, day, true);
    }
}

'''
if helper not in s:
    if marker not in s: raise SystemExit('import marker missing')
    s=s.replace(marker, helper+marker, 1)
old='''                await saveAllToRemote();\n                await saveSouvenirsToRemote();\n                saveToLocalStorage();\n                setSyncStatus('synced');\n                alert("行程資料已成功匯入並同步到雲端！");'''
new='''                // Persist every section to Hexschool, including Products and the Souvenirs Article.\n                await syncImportedProductsToRemote(parsedData);\n                await saveAllToRemote();\n                await saveSouvenirsToRemote();\n\n                // Never keep the imported JSON as a second source of truth. Reload what the API actually stored.\n                await loadFromRemote();\n                saveToLocalStorage();\n                renderAllUI();\n                setSyncStatus('synced');\n                alert("JSON 已完整匯入 Hexschool：行程、候選池、航班、住宿、清單與伴手禮都已寫入雲端資料庫！");'''
if old not in s: raise SystemExit('import sync block missing')
s=s.replace(old,new,1)
p.write_text(s)
# trigger
