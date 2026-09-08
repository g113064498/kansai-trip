from pathlib import Path

app = Path('app.js')
s = app.read_text(encoding='utf-8')

replacements = [
    (
        '''            link: "https://www.booking.com/hotel/jp/hop-inn-kyoto-shijo-omiya.zh-tw.html",\n            address: "京都市中京区壬生坊城町18-1",''',
        '''            link: "https://www.hopinnhotel.com/our-hotels/hop-inn-kyoto-shijo-omiya",\n            bookingPlatform: "Hop Inn 官方網站",\n            address: "14-2 Mibubojocho, Nakagyo Ward, Kyoto, 604-8804, Japan",'''
    ),
    (
        '''            link: "https://www.booking.com/hotel/jp/color-tsuruhashi-da-ban-fu1.zh-tw.html",\n            address: "大阪市天王寺区筆ケ崎町5-30",''',
        '''            link: "https://www.booking.com/hotel/jp/color-tsuruhashi-da-ban-fu1.zh-tw.html",\n            bookingPlatform: "Booking.com",\n            address: "14-23 Ajiharacho, Tennoji-ku, Osaka, Japan",'''
    ),
    (
        '''                <a href="${h.link}" target="_blank" class="btn-link">在 Booking.com 開啟訂房頁面 ↗</a>''',
        '''                <a href="${h.link}" target="_blank" rel="noopener noreferrer" class="btn-link">在 ${h.bookingPlatform || '訂房網站'} 開啟訂房頁面 ↗</a>'''
    ),
    (
        '''                location: data.location || '',\n                _productId: p.id''',
        '''                location: data.location || '',\n                googleRating: data.googleRating || '',\n                tabelogRating: data.tabelogRating || '',\n                _productId: p.id'''
    ),
    (
        '''    document.getElementById('pool-edit-location').value = item.location || '';\n    document.getElementById('pool-edit-cost').value = item.cost || 0;''',
        '''    document.getElementById('pool-edit-location').value = item.location || '';\n    document.getElementById('pool-edit-google-rating').value = item.googleRating || '';\n    document.getElementById('pool-edit-tabelog-rating').value = item.tabelogRating || '';\n    document.getElementById('pool-edit-cost').value = item.cost || 0;'''
    ),
    (
        '''    document.getElementById('pool-edit-location').value = '';\n    document.getElementById('pool-edit-cost').value = '';''',
        '''    document.getElementById('pool-edit-location').value = '';\n    document.getElementById('pool-edit-google-rating').value = '';\n    document.getElementById('pool-edit-tabelog-rating').value = '';\n    document.getElementById('pool-edit-cost').value = '';'''
    ),
    (
        '''    const location = document.getElementById('pool-edit-location').value.trim();\n    const cost = parseInt(document.getElementById('pool-edit-cost').value) || 0;''',
        '''    const location = document.getElementById('pool-edit-location').value.trim();\n    const googleRating = document.getElementById('pool-edit-google-rating').value.trim();\n    const tabelogRating = document.getElementById('pool-edit-tabelog-rating').value.trim();\n    const cost = parseInt(document.getElementById('pool-edit-cost').value) || 0;'''
    ),
    (
        '''            location: location,\n            photos: photos,''',
        '''            location: location,\n            googleRating: googleRating,\n            tabelogRating: tabelogRating,\n            photos: photos,'''
    ),
    (
        '''    item.location = location;\n    item.cost = cost;''',
        '''    item.location = location;\n    item.googleRating = googleRating;\n    item.tabelogRating = tabelogRating;\n    item.cost = cost;'''
    ),
]

for old, new in replacements:
    if old not in s:
        raise SystemExit(f'Expected app.js pattern not found:\n{old[:120]}')
    s = s.replace(old, new, 1)

old_content = "const content = { city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '' };"
new_content = "const content = { city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '', googleRating: item.googleRating || '', tabelogRating: item.tabelogRating || '' };"
s = s.replace(old_content, new_content)

marker = '''        const displayCategory = item.category === 'sightseeing' ? '景點' : (item.category === 'food' ? '美食' : (item.category === 'shopping' ? '購物' : '其他'));\n\n        card.innerHTML = `'''
replacement = '''        const displayCategory = item.category === 'sightseeing' ? '景點' : (item.category === 'food' ? '美食' : (item.category === 'shopping' ? '購物' : '其他'));\n        const mapQuery = item.location || `${item.title} ${displayCity} Japan`;\n        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;\n        const tabelogUrl = `https://tabelog.com/rstLst/?sk=${encodeURIComponent(item.title)}`;\n        const foodRatingHtml = item.category === 'food' ? `\n            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;align-items:center;">\n                <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-link" style="font-size:0.82rem;">⭐ Google ${item.googleRating ? item.googleRating + ' / 5' : '查看即時評分'}</a>\n                <a href="${tabelogUrl}" target="_blank" rel="noopener noreferrer" class="btn-link" style="font-size:0.82rem;">🍽️ Tabelog ${item.tabelogRating ? item.tabelogRating + ' / 5' : '查看評分'}</a>\n            </div>` : '';\n\n        card.innerHTML = `'''
if marker not in s:
    raise SystemExit('renderPool marker not found')
s = s.replace(marker, replacement, 1)

old = '''                    <p class="pool-card-desc">${item.desc}</p>\n                    ${(item.photos && item.photos.length > 0) ?'''
new = '''                    <p class="pool-card-desc">${item.desc}</p>\n                    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">\n                        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-link" style="font-size:0.82rem;">🗺️ Google 地圖</a>\n                    </div>\n                    ${foodRatingHtml}\n                    ${(item.photos && item.photos.length > 0) ?'''
if old not in s:
    raise SystemExit('renderPool description marker not found')
s = s.replace(old, new, 1)
app.write_text(s, encoding='utf-8')

html = Path('index.html')
h = html.read_text(encoding='utf-8')
old = '''                <div class="form-group">\n                    <label for="pool-edit-cost">預估花費 (¥)</label>'''
new = '''                <div class="form-group" style="display:flex;gap:10px;">\n                    <div style="flex:1;">\n                        <label for="pool-edit-google-rating">Google 評分</label>\n                        <input type="number" id="pool-edit-google-rating" class="form-control" placeholder="例如 4.5" min="0" max="5" step="0.1">\n                    </div>\n                    <div style="flex:1;">\n                        <label for="pool-edit-tabelog-rating">Tabelog 評分</label>\n                        <input type="number" id="pool-edit-tabelog-rating" class="form-control" placeholder="例如 3.62" min="0" max="5" step="0.01">\n                    </div>\n                </div>\n                <div class="form-group">\n                    <label for="pool-edit-cost">預估花費 (¥)</label>'''
if old not in h:
    raise SystemExit('index.html pool cost marker not found')
h = h.replace(old, new, 1)
html.write_text(h, encoding='utf-8')

print('Patch completed successfully')
