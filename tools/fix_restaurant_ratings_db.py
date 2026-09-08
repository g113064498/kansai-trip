from pathlib import Path
p=Path('app.js')
s=p.read_text()

# 1) Preserve existing DB ratings when importing an older JSON without rating fields.
old="""        if (!existing) existing = byTitle.get(normalizeTitle(payload.title)) || null;\n        if (existing) {\n            await hexAPI.updateProduct(existing.id, payload);"""
new="""        if (!existing) existing = byTitle.get(normalizeTitle(payload.title)) || null;\n        if (existing) {\n            // Older JSON exports may not contain rating metadata. Never erase newer DB ratings on import.\n            try {\n                const oldData = JSON.parse(existing.content || '{}');\n                if (!content.googleRating) content.googleRating = oldData.googleRating || '';\n                if (!content.tabelogRating) content.tabelogRating = oldData.tabelogRating || '';\n                if (!content.tabelogUrl) content.tabelogUrl = oldData.tabelogUrl || '';\n                if (!content.ratingChecked) content.ratingChecked = oldData.ratingChecked || '';\n                payload.content = JSON.stringify(content);\n            } catch (_) { /* keep imported values */ }\n            await hexAPI.updateProduct(existing.id, payload);"""
if old not in s:
    raise SystemExit('import preserve block not found')
s=s.replace(old,new,1)

# 2) One-time/self-healing DB backfill: verified ratings are written into Hexschool Products.
marker='async function loadFromRemote() {'
helper=r'''// Verified restaurant metadata migration. Values are persisted into Hexschool Products;
// the UI continues to read ratings only from API product content.
const VERIFIED_RESTAURANT_RATINGS = [
    { names:['松屋 四條大宮站前店','松屋 四条大宮駅前店'], t:'3.04' },
    { names:['PRESS BUTTER SAND 大阪高島屋'], t:'3.05' },
    { names:['Sugar Butter Tree 阪急梅田店','Sugar Butter Tree 阪急うめだ店'], t:'3.21' },
    { names:['ÉCHIRÉ Marché au Beurre','ECHIRE Marche au Beurre'], g:'4.0', t:'3.76' },
    { names:['grenier 梅田店'], t:'3.54', u:'https://tabelog.com/osaka/A2701/A270101/27130931/' },
    { names:['SUKIYAKI FUJIMOTO','すき焼き 藤もと'], t:'3.39' },
    { names:['Yasubee','やすべえ'], t:'3.36' },
    { names:['Kuchibashi Modern','くちばしモダン'], g:'4.6', t:'3.69', u:'https://tabelog.com/kyoto/A2601/A260201/26022582/' },
    { names:['Yumemiya','夢み家'], g:'4.6', t:'3.05' },
    { names:['麵屋練之助','麺屋 練之助','麵屋練之助 🍜'], t:'3.52' },
    { names:['Mamemono and Taiyaki','まめものとたい焼き'], g:'4.2', t:'3.50' },
    { names:['Sukiyaki Kimura','すき焼き キムラ'], t:'3.50' },
    { names:['GION GOZU 四条店','GION GOZU 四條店'], g:'4.5', t:'3.20' },
    { names:['Onimaru Kyoto Shijo Kawaramachi','ごちそう焼むすび おにまる 京都四条河原町店'], t:'3.06' },
    { names:['DONGURI Shijo-Omiya Store'], g:'4.2', t:'3.09' },
    { names:['麵屋 豬一','麺屋 猪一','麵屋 豬一 🍜'], t:'3.71' },
    { names:['お好み焼（大阪燒）千草','お好み焼 ( 大阪燒 ) 千草','お好み焼 千草'], t:'3.65' },
    { names:['可樂餅 中村屋','天神橋 中村屋'], t:'3.49' },
    { names:['HARBS 心齋橋Parco店','HARBS 心斎橋PARCO店'], g:'4.1', t:'3.09' },
    { names:['大阪燒 千房','千房 道頓堀支店','大阪燒 千房 🍴'], t:'3.16', u:'https://tabelog.com/osaka/A2701/A270202/27002622/' },
    { names:['Kusaka Curry Namba DINING MAISON','Kusaka Curry Namba DINING MAISON 🍴'], g:'4.7', t:'3.50', u:'https://tabelog.com/osaka/A2701/A270202/27145566/' },
    { names:['HARBS Namba Parks','HARBS Namba Parks 🍴'], t:'3.15' },
    { names:['Shabuwara 壽喜燒 涮涮鍋 花月店','しゃぶ笑 なんばグランド花月店'], t:'3.09' },
    { names:['Shabucho','Shabucho 🍴','しゃぶ亭 西梅田店'], t:'3.54' },
    { names:['飛騨牛一頭家 馬喰一代 KITTE大阪'], t:'3.58' },
    { names:['いかれたNOODLE Fishtons'], g:'4.0', t:'3.72' },
    { names:['すき焼きと牛まぶし ももしき'], t:'3.62' },
    { names:['お好み焼 美津の'], t:'3.56' }
];

async function backfillVerifiedRestaurantRatings(allProducts) {
    const normalize = (t) => (t || '')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '')
        .replace(/\s+/g, ' ').trim().toLowerCase();
    const ratingMap = new Map();
    for (const r of VERIFIED_RESTAURANT_RATINGS) for (const n of r.names) ratingMap.set(normalize(n), r);
    let changed = false;
    for (const prod of allProducts) {
        if (prod.category !== '候選景點') continue;
        const r = ratingMap.get(normalize(prod.title));
        if (!r) continue;
        let data = {};
        try { data = JSON.parse(prod.content || '{}'); } catch { data = {}; }
        let dirty = false;
        if (!data.googleRating && r.g) { data.googleRating = r.g; dirty = true; }
        if (!data.tabelogRating && r.t) { data.tabelogRating = r.t; dirty = true; }
        if (!data.tabelogUrl && r.u) { data.tabelogUrl = r.u; dirty = true; }
        if (!data.ratingChecked && (r.g || r.t)) { data.ratingChecked = '2026-09-08'; dirty = true; }
        if (!dirty) continue;
        await hexAPI.updateProduct(prod.id, {
            title: prod.title,
            content: JSON.stringify(data),
            category: prod.category || '候選景點',
            origin_price: prod.origin_price || 0,
            price: prod.price || 0,
            unit: prod.unit || '景點',
            is_enabled: prod.is_enabled == 1 || prod.is_enabled === true ? 1 : 0,
            num: prod.num || 1
        });
        prod.content = JSON.stringify(data);
        changed = true;
    }
    if (changed) console.log('[Ratings] 已把缺少的 Google/Tabelog 評分補寫到 Hexschool Products');
    return allProducts;
}

'''
if helper not in s:
    if marker not in s: raise SystemExit('loadFromRemote marker not found')
    s=s.replace(marker,helper+marker,1)

old2="""        if (createdFixedProduct) allProducts = await hexAPI.getProducts();\n\n        // Products are the sole source for attractionPool and scheduled itinerary entries."""
new2="""        if (createdFixedProduct) allProducts = await hexAPI.getProducts();\n\n        // Restore verified restaurant ratings into the API itself when older imports are missing them.\n        allProducts = await backfillVerifiedRestaurantRatings(allProducts);\n\n        // Products are the sole source for attractionPool and scheduled itinerary entries."""
if old2 not in s:
    raise SystemExit('ratings insertion point not found')
s=s.replace(old2,new2,1)

p.write_text(s)
