const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { hotelLink } = require('../trip-tools.js');
const official = 'https://www.hopinnhotel.com/our-hotels/hop-inn-kyoto-shijo-omiya';
const current = 'https://g113064498.github.io/kansai-trip/';

test('HOP INN Kyoto uses the owner-supplied official page, including stale valid URLs', () => {
    for (const name of ['Hop Inn Kyoto Shijo Omiya', 'HOP INN Kyoto Shijo-Omiya', 'Hop In Kyoto Shijo Omiya', 'HOP INN 京都四條大宮', 'HOP INN 京都四条大宮']) {
        for (const link of ['', '#', current, 'https://example.com/old-booking']) {
            const hotel = { name, link, notes: 'Keep my notes', price: 12345 };
            const before = JSON.stringify(hotel);
            assert.equal(hotelLink(hotel, current), official);
            assert.equal(JSON.stringify(hotel), before);
        }
    }
});

test('other HOP INN properties and Cu Tennoji retain their own URLs', () => {
    for (const name of ['HOP INN Tokyo Iidabashi', 'HOP INN Kyoto Other', 'Cu Tennoji']) {
        assert.equal(hotelLink({ name, link: 'https://example.com/keep' }, current), 'https://example.com/keep');
    }
    assert.equal(new URL(hotelLink({ name: 'Cu Tennoji', link: '' }, current)).hostname, 'www.booking.com');
});

test('dashboard hook updates the HOP INN label and link without touching trip data', () => {
    const hotel = { name: 'Hop Inn Kyoto Shijo Omiya', link: '', notes: 'Manual notes' };
    const link = { href: '', textContent: 'Old booking label', hidden: false, rel: '' };
    const data = { hotels: [hotel], souvenirs: [{ done: true }], itinerary: { '2026-11-08': [] } };
    const before = JSON.stringify(data);
    let renders = 0;
    const context = {
        db: data, location: { href: current },
        document: { querySelectorAll: () => [{ querySelector: () => link }], addEventListener() {} },
        renderDashboard: () => { renders++; }, switchTab() {}, hexAPI: {},
        URL, console
    };
    vm.runInNewContext(fs.readFileSync(require.resolve('../trip-tools.js'), 'utf8'), context);
    context.renderDashboard();
    assert.equal(renders, 1);
    assert.equal(link.href, official);
    assert.equal(link.textContent, 'HOP INN 官方網站 ↗');
    assert.equal(link.hidden, false);
    assert.equal(link.rel, 'noopener noreferrer');
    assert.equal(JSON.stringify(data), before);
});
