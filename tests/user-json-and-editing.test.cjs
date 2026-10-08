const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const appJsCode = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');

function createAppContext(extraMocks = {}) {
    const localStorageStore = {};
    const mockLocalStorage = {
        getItem: (k) => (k in localStorageStore ? localStorageStore[k] : null),
        setItem: (k, v) => { localStorageStore[k] = String(v); },
        removeItem: (k) => { delete localStorageStore[k]; },
        clear: () => { Object.keys(localStorageStore).forEach(k => delete localStorageStore[k]); }
    };

    const makeElement = () => ({
        value: '',
        innerText: '',
        innerHTML: '',
        style: {},
        classList: { add: () => {}, remove: () => {} },
        addEventListener: () => {},
        appendChild: () => {},
        removeChild: () => {},
        querySelector: () => null,
        querySelectorAll: () => [],
        remove: () => {}
    });

    const mockDocument = {
        cookie: '',
        getElementById: (id) => makeElement(),
        querySelectorAll: () => [],
        querySelector: () => null,
        createElement: (tag) => makeElement(),
        body: makeElement(),
        addEventListener: () => {}
    };

    const context = {
        console,
        setTimeout,
        clearTimeout,
        Date,
        JSON,
        Math,
        String,
        Number,
        Array,
        Object,
        Set,
        Map,
        RegExp,
        localStorage: mockLocalStorage,
        document: mockDocument,
        window: { addEventListener: () => {} },
        location: { href: 'https://localhost', reload: () => {} },
        fetch: async () => ({ ok: true, json: async () => ({ success: true }) }),
        alert: () => {},
        confirm: () => true,
        prompt: () => 'Test',
        requestAnimationFrame: (cb) => cb(),
        ...extraMocks
    };

    const wrapper = `
        ${appJsCode}
        globalThis.initialTripData = typeof initialTripData !== 'undefined' ? initialTripData : null;
        globalThis.setDb = (val) => { db = val; };
        globalThis.getDb = () => db;
        globalThis.initApp = typeof initApp !== 'undefined' ? initApp : null;
        globalThis.savePoolEdit = typeof savePoolEdit !== 'undefined' ? savePoolEdit : null;
        globalThis.saveEvent = typeof saveEvent !== 'undefined' ? saveEvent : null;
        globalThis.deleteFromPool = typeof deleteFromPool !== 'undefined' ? deleteFromPool : null;
        globalThis.renderPool = typeof renderPool !== 'undefined' ? renderPool : null;
        globalThis.renderAllUI = typeof renderAllUI !== 'undefined' ? renderAllUI : null;
        globalThis.renderItineraryForDay = typeof renderItineraryForDay !== 'undefined' ? renderItineraryForDay : null;
        globalThis.saveToLocalStorage = typeof saveToLocalStorage !== 'undefined' ? saveToLocalStorage : null;
        globalThis.loadFromRemote = typeof loadFromRemote !== 'undefined' ? loadFromRemote : null;
    `;

    vm.createContext(context);
    vm.runInContext(wrapper, context);
    return context;
}

test('initialTripData matches expected trip structure and key contents', () => {
    const ctx = createAppContext();
    const data = ctx.initialTripData;

    assert.ok(data, 'initialTripData should exist');
    assert.equal(data.tripTitle, '關西雙人浪漫楓秋之旅 🍁');
    assert.equal(data.startDate, '2026-11-04');
    assert.equal(data.endDate, '2026-11-11');
    assert.equal(data.flights.length, 2);
    assert.equal(data.hotels.length, 2);
    assert.equal(data.checklist.length, 14);
    assert.equal(data.souvenirs.length, 27);
    assert.equal(data.attractionPool.length, 70);

    // Verify Cu Tennoji 放行李
    const cuLuggage = data.attractionPool.find(p => p.title === 'Cu Tennoji 放行李');
    assert.ok(cuLuggage, 'Cu Tennoji 放行李 should exist in pool');
    assert.equal(cuLuggage.time, '10:30');
    assert.equal(cuLuggage.desc, '寄放行李；入住時間下午 4:00 至 12:00。');
    assert.equal(cuLuggage.location, '大阪府大阪市天王寺区味原町14-23');

    // Verify 大阪城公園
    const osakaCastle = data.attractionPool.find(p => p.title.includes('大阪城公園'));
    assert.ok(osakaCastle, '大阪城公園 🏯 should exist in pool');
    assert.equal(osakaCastle.time, '11:00 - 12:30');
    assert.equal(osakaCastle.desc, '以大阪城公園、天守外觀與豐國神社為主，不強制進天守。');

    // Verify 勝尾寺
    const katsuoji = data.attractionPool.find(p => p.title.includes('勝尾寺'));
    assert.ok(katsuoji, '勝尾寺 🎋 should exist in pool');
    assert.equal(katsuoji.time, '09:30 - 12:00');
    assert.ok(katsuoji.desc.includes('箕面萱野站～勝尾寺直行巴士成人單程¥800'));

    // Verify 8 days itinerary exist
    const days = Object.keys(data.itinerary);
    assert.equal(days.length, 8);
    assert.ok(days.includes('2026-11-04'));
    assert.ok(days.includes('2026-11-11'));
});

test('modifying Cu Tennoji 放行李 via savePoolEdit updates memory, itinerary and localStorage', async () => {
    const ctx = createAppContext();
    // Initialize lexical db
    ctx.setDb(JSON.parse(JSON.stringify(ctx.initialTripData)));
    const db = ctx.getDb();

    const item = db.attractionPool.find(p => p.title === 'Cu Tennoji 放行李');
    assert.ok(item);

    const baseGetElementById = ctx.document.getElementById;
    ctx.document.getElementById = (id) => {
        const map = {
            'pool-edit-id': { value: item.id },
            'pool-edit-title': { value: 'Cu Tennoji 放行李 (已修改)' },
            'pool-edit-city': { value: 'Osaka' },
            'pool-edit-category': { value: 'other' },
            'pool-edit-time': { value: '10:45' },
            'pool-edit-cost': { value: '0' },
            'pool-edit-location': { value: '大阪府大阪市天王寺区味原町14-23 (密碼確認)' },
            'pool-edit-desc': { value: '新寄放行李說明：密碼已取得。' }
        };
        const el = baseGetElementById(id);
        if (map[id]) Object.assign(el, map[id]);
        return el;
    };

    // Execute savePoolEdit
    const fakeEvent = { preventDefault: () => {} };
    await ctx.savePoolEdit(fakeEvent);

    // Verify pool updated
    assert.equal(item.title, 'Cu Tennoji 放行李 (已修改)');
    assert.equal(item.time, '10:45');
    assert.equal(item.desc, '新寄放行李說明：密碼已取得。');
    assert.equal(item.location, '大阪府大阪市天王寺区味原町14-23 (密碼確認)');

    // Verify itinerary event on 2026-11-07 updated
    const dayEvents = db.itinerary['2026-11-07'] || [];
    const ev = dayEvents.find(e => e.id === item.id || e._poolId === item.id);
    assert.ok(ev, 'Itinerary event should exist');
    assert.equal(ev.title, 'Cu Tennoji 放行李 (已修改)');
    assert.equal(ev.time, '10:45');
    assert.equal(ev.desc, '新寄放行李說明：密碼已取得。');

    // Verify localStorage cache was saved
    const cached = ctx.localStorage.getItem('kansai_trip_db_cache');
    assert.ok(cached, 'Cache should be saved in localStorage');
    const parsedCache = JSON.parse(cached);
    const cachedItem = parsedCache.attractionPool.find(p => p.id === item.id);
    assert.equal(cachedItem.title, 'Cu Tennoji 放行李 (已修改)');
});

test('modifying 勝尾寺 via saveEvent updates both itinerary and pool', async () => {
    const ctx = createAppContext();
    ctx.setDb(JSON.parse(JSON.stringify(ctx.initialTripData)));
    const db = ctx.getDb();

    const dayStr = '2026-11-10';
    const dayEvents = db.itinerary[dayStr];
    const katsuojiEv = dayEvents.find(e => e.title.includes('勝尾寺'));
    assert.ok(katsuojiEv);

    const baseGetElementById = ctx.document.getElementById;
    ctx.document.getElementById = (id) => {
        const map = {
            'event-id': { value: katsuojiEv.id },
            'event-day': { value: dayStr },
            'event-title-input': { value: '勝尾寺 🎋 (已修改)' },
            'event-time-input': { value: '10:00 - 13:00' },
            'event-category-select': { value: 'sightseeing' },
            'event-cost-input': { value: '2500' },
            'event-location-input': { value: '勝尾寺' },
            'event-desc-input': { value: '已預約達摩祈福活動。' }
        };
        const el = baseGetElementById(id);
        if (map[id]) Object.assign(el, map[id]);
        return el;
    };

    const fakeEvent = { preventDefault: () => {} };
    await ctx.saveEvent(fakeEvent);

    // Verify itinerary event updated
    const updatedEv = db.itinerary[dayStr].find(e => e.id === katsuojiEv.id);
    assert.equal(updatedEv.title, '勝尾寺 🎋 (已修改)');
    assert.equal(updatedEv.time, '10:00 - 13:00');
    assert.equal(updatedEv.cost, 2500);
    assert.equal(updatedEv.desc, '已預約達摩祈福活動。');

    // Verify attractionPool updated
    const poolItem = db.attractionPool.find(p => p.id === katsuojiEv.id || p.id === katsuojiEv._poolId);
    assert.ok(poolItem);
    assert.equal(poolItem.title, '勝尾寺 🎋 (已修改)');
    assert.equal(poolItem.time, '10:00 - 13:00');
    assert.equal(poolItem.cost, 2500);
    assert.equal(poolItem.desc, '已預約達摩祈福活動。');

    // Verify saved to localStorage
    const cached = JSON.parse(ctx.localStorage.getItem('kansai_trip_db_cache'));
    const cachedEv = cached.itinerary[dayStr].find(e => e.id === katsuojiEv.id);
    assert.equal(cachedEv.title, '勝尾寺 🎋 (已修改)');
});

test('deleting an item removes it from pool and itinerary and adds to deletedPoolItems', async () => {
    const ctx = createAppContext();
    ctx.setDb(JSON.parse(JSON.stringify(ctx.initialTripData)));
    const db = ctx.getDb();

    // Choose an event to delete
    const dayStr = '2026-11-04';
    const evToDelete = db.itinerary[dayStr].find(e => e.title.includes('八坂神社'));
    assert.ok(evToDelete);

    await ctx.deleteFromPool(evToDelete.id);

    // Verify removed from pool
    assert.ok(!db.attractionPool.some(p => p.id === evToDelete.id));

    // Verify removed from itinerary
    assert.ok(!db.itinerary[dayStr].some(e => e.id === evToDelete.id));

    // Verify added to deletedPoolItems
    assert.ok(db.deletedPoolItems.includes(evToDelete.id));

    // Verify saved to localStorage
    const cached = JSON.parse(ctx.localStorage.getItem('kansai_trip_db_cache'));
    assert.ok(!cached.attractionPool.some(p => p.id === evToDelete.id));
    assert.ok(!cached.itinerary[dayStr].some(e => e.id === evToDelete.id));
});

test('modifying 大阪城公園 🏯 via savePoolEdit updates both pool and itinerary without reverting', async () => {
    const ctx = createAppContext();
    ctx.setDb(JSON.parse(JSON.stringify(ctx.initialTripData)));
    const db = ctx.getDb();

    const item = db.attractionPool.find(p => p.title.includes('大阪城公園'));
    assert.ok(item);

    const baseGetElementById = ctx.document.getElementById;
    ctx.document.getElementById = (id) => {
        const map = {
            'pool-edit-id': { value: item.id },
            'pool-edit-title': { value: '大阪城公園 🏯 (已修改說明)' },
            'pool-edit-city': { value: 'Osaka' },
            'pool-edit-category': { value: 'sightseeing' },
            'pool-edit-time': { value: '11:15 - 12:45' },
            'pool-edit-cost': { value: '600' },
            'pool-edit-location': { value: '大阪城公園 豐國神社前' },
            'pool-edit-desc': { value: '參觀豐國神社並購買御守，不登天守閣。' }
        };
        const el = baseGetElementById(id);
        if (map[id]) Object.assign(el, map[id]);
        return el;
    };

    const fakeEvent = { preventDefault: () => {} };
    await ctx.savePoolEdit(fakeEvent);

    assert.equal(item.title, '大阪城公園 🏯 (已修改說明)');
    assert.equal(item.time, '11:15 - 12:45');
    assert.equal(item.cost, 600);
    assert.equal(item.desc, '參觀豐國神社並購買御守，不登天守閣。');

    const dayEvents = db.itinerary['2026-11-07'] || [];
    const ev = dayEvents.find(e => e.id === item.id || e._poolId === item.id);
    assert.ok(ev);
    assert.equal(ev.title, '大阪城公園 🏯 (已修改說明)');
    assert.equal(ev.time, '11:15 - 12:45');
    assert.equal(ev.desc, '參觀豐國神社並購買御守，不登天守閣。');
});

test('loadFromRemote preserves user baseline content, filters deleted items, and retains candidate pool', async () => {
    // Mock hexAPI articles and products
    const fakeProducts = [
        {
            id: '-OvuRaouWMxtuEQrU_bI',
            title: 'Cu Tennoji 放行李',
            category: '候選景點',
            unit: '2026-11-07|10:30',
            is_enabled: 1,
            content: JSON.stringify({
                city: 'Osaka',
                desc: '大阪住宿已確認為 Cu Tennoji。可先寄放／處理行李；正式入住依住宿方自助入住說明。', // old text in API
                cost: 0,
                day: '2026-11-07',
                time: '10:30'
            })
        },
        {
            id: '-P3MjeeAaF518zdz8PEk',
            title: '通天閣', // deleted item in user JSON
            category: '候選景點',
            unit: '2026-11-08|19:00',
            is_enabled: 1,
            content: JSON.stringify({
                city: 'Osaka',
                desc: '通天閣觀景',
                day: '2026-11-08',
                time: '19:00'
            })
        }
    ];

    const ctx = createAppContext({
        hexAPI: {
            getArticles: async () => [
                { id: 'master-1', tag: ['master'], content: JSON.stringify({ deletedPoolItems: ['通天閣', '-P3MjeeAaF518zdz8PEk'] }) }
            ],
            getArticle: async () => ({ id: 'master-1', tag: ['master'], content: JSON.stringify({ deletedPoolItems: ['通天閣', '-P3MjeeAaF518zdz8PEk'] }) }),
            getProducts: async () => fakeProducts,
            updateProduct: async () => {},
            createProduct: async () => {},
            deleteProduct: async () => {},
            updateArticle: async () => {}
        }
    });

    await ctx.loadFromRemote();
    const db = ctx.getDb();

    // 1. Deleted item '通天閣' must NOT be in attractionPool or itinerary
    assert.ok(!db.attractionPool.some(p => p.title === '通天閣'), 'Deleted item 通天閣 should not be in pool');
    assert.ok(!(db.itinerary['2026-11-08'] || []).some(e => e.title === '通天閣'), 'Deleted item 通天閣 should not be in itinerary');

    // 2. Cu Tennoji 放行李 must use user-defined description from initialTripData (not old API text)
    const cuItem = db.attractionPool.find(p => p.title === 'Cu Tennoji 放行李');
    assert.ok(cuItem, 'Cu Tennoji 放行李 should be in pool');
    assert.equal(cuItem.desc, '寄放行李；入住時間下午 4:00 至 12:00。');

    // 3. Candidates from initialTripData not in fakeProducts must be preserved in pool
    assert.ok(db.attractionPool.some(p => p.title.includes('伏見稻荷大社')), '伏見稻荷大社 candidate should be retained');
    assert.ok(db.attractionPool.some(p => p.title.includes('金閣寺')), '金閣寺 candidate should be retained');
    assert.ok(db.attractionPool.some(p => p.title.includes('勝尾寺')), '勝尾寺 should be in pool');
});

