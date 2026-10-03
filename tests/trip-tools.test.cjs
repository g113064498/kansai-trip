const test = require('node:test');
const assert = require('node:assert/strict');
const C = require('../trip-tools.js');
const record = (id, currency, amount, payer = 'me', mode = 'equal', custom) => ({ schema: 1, id: 'test-id-' + id, date: '2026-11-08', createdAt: '2026-10-03T13:00:00Z', title: 'Test', note: '', kind: 'expense', currency, amount, payer, shares: C.shares(amount, payer, mode, custom) });
test('strict money parsing, no floating point fractions', () => {
    assert.equal(C.parseMoney('1973', 'TWD'), 197300);
    assert.equal(C.parseMoney('0.29', 'TWD'), 29);
    assert.equal(C.parseMoney('1973', 'JPY'), 1973);
    for (const s of ['1e3', '1,000', '-1', 'Infinity', '', '0', '1.01']) assert.throws(() => C.parseMoney(s, 'JPY'));
    assert.throws(() => C.parseMoney('1.123', 'TWD'));
    assert.equal(C.parseMoney('0', 'JPY', true), 0);
});
test('equal split puts indivisible remainder on payer', () => {
    assert.deepEqual(C.shares(1973, 'me', 'equal'), { me: 987, girl: 986 });
    assert.deepEqual(C.shares(1973, 'girl', 'equal'), { me: 986, girl: 987 });
});
test('custom, gift, and self expense allocation', () => {
    assert.deepEqual(C.shares(3000, 'me', 'custom', 800), { me: 800, girl: 2200 });
    assert.deepEqual(C.shares(3000, 'me', 'girl'), { me: 0, girl: 3000 });
    assert.deepEqual(C.shares(3000, 'girl', 'me'), { me: 3000, girl: 0 });
    assert.throws(() => C.shares(3000, 'me', 'custom', 3001));
});
test('two expenses net opposite payers without changing spend', () => {
    const result = C.calculate([record('a', 'JPY', 4000), record('b', 'JPY', 1000, 'girl')]);
    assert.equal(result.totals.JPY.expense, 5000);
    assert.equal(result.totals.JPY.balance, 1500);
    assert.equal(result.totals.JPY.shareMe, 2500);
});
test('repayments reduce debt without being counted as expenses', () => {
    const a = record('a', 'JPY', 4000);
    const repay = { ...a, id: 'test-id-repay', kind: 'settlement', payer: 'girl', amount: 500 };
    const t = C.calculate([a, repay]).totals.JPY;
    assert.equal(t.balance, 1500);
    assert.equal(t.expense, 4000);
    assert.equal(t.paidMe, 4000);
});
test('repayment by me clears negative balance', () => {
    const a = record('a', 'TWD', 394600, 'girl');
    const repay = { ...a, id: 'test-id-repay', kind: 'settlement', payer: 'me', amount: 197300 };
    assert.equal(C.calculate([a, repay]).totals.TWD.balance, 0);
});
test('JPY and TWD are never automatically netted', () => {
    const t = C.calculate([record('a', 'JPY', 2000), record('b', 'TWD', 40000, 'girl')]).totals;
    assert.equal(t.JPY.balance, 1000); assert.equal(t.TWD.balance, -20000);
});
test('idempotent duplicate submissions and independent appends', () => {
    const a = record('a', 'JPY', 1000), b = record('b', 'JPY', 2000);
    const result = C.calculate([a, clone(a), b]);
    assert.equal(result.events.length, 2); assert.equal(result.totals.JPY.expense, 3000);
});
function clone(value) { return JSON.parse(JSON.stringify(value)); }
test('immutable voids, including repeated voids and repayments', () => {
    const a = record('a', 'JPY', 1000), b = record('b', 'JPY', 2000);
    const v = { schema: 1, kind: 'void', id: 'test-id-void', date: '2026-11-09', target: a.id };
    const result = C.calculate([v, a, b, { ...v, id: 'test-id-void2' }]);
    assert.equal(result.totals.JPY.expense, 2000); assert.equal(result.rows.length, 2);
    assert.throws(() => C.calculate([v]));
});
test('corrupt or conflicting records fail closed', () => {
    const a = record('a', 'JPY', 1000);
    assert.throws(() => C.calculate([a, { ...a, amount: 2000 }]));
    assert.throws(() => C.calculate([{ ...a, date: '2026-02-30' }]));
    assert.throws(() => C.calculate([{ ...a, shares: { me: 100, girl: 100 } }]));
});
test('hotel resolves verified public listing and rejects broken links', () => {
    const base = 'https://g113064498.github.io/kansai-trip/';
    for (const link of ['', '#', 'javascript:alert(1)', base, 'relative.html']) {
        const url = C.hotelLink({ name: 'Cu Tennoji', link }, base);
        assert.equal(new URL(url).hostname, 'www.booking.com');
    }
    assert.equal(C.hotelLink({ name: 'Other', link: '' }, base), '');
    assert.equal(C.hotelLink({ name: 'Cu Tennoji', link: 'https://example.com/confirmed' }, base), 'https://example.com/confirmed');
});
test('all article pages are read so master is not lost after ten entries', async () => {
    const seen = [];
    const result = await C.allArticles({ request: async (_, url) => { seen.push(url); const n = Number(url.match(/page=(\d+)/)[1]); return { articles: [{ id: n === 3 ? 'master' : 'ledger-' + n }], pagination: { total_pages: 3 } }; } }, 'https://api.example', 'trip');
    assert.equal(seen.length, 3); assert.ok(result.some(a => a.id === 'master'));
});
test('repeated or incomplete article pages throw', async () => {
    await assert.rejects(C.allArticles({ request: async () => ({ articles: [{ id: 'same' }], pagination: { has_next: true } }) }, '', ''));
    await assert.rejects(C.allArticles({ request: async () => ({}) }, '', ''));
});
test('property check: exact money conservation over all split modes', () => {
    for (let n = 1; n < 3000; n++) for (const payer of ['me', 'girl']) for (const mode of ['equal', 'me', 'girl', 'custom']) {
        const a = record(String(n) + payer + mode, 'JPY', n, payer, mode, Math.floor(n / 3));
        const t = C.calculate([a]).totals.JPY;
        assert.equal(t.paidMe + t.paidGirl, n); assert.equal(t.shareMe + t.shareGirl, n);
        assert.equal(t.balance, t.paidMe - t.shareMe);
    }
});
