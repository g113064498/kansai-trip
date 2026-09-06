from pathlib import Path

app = Path('app.js')
app_text = app.read_text(encoding='utf-8')

if '飛騨牛一頭家 馬喰一代 KITTE大阪' not in app_text:
    marker = '        { id: "f24", city: "Osaka", title: "Shabucho", desc: "極受歡迎的個人/雙人涮涮鍋壽喜燒餐廳，湯頭清淡甘甜。", cost: 5000, category: "food", isEnabled: false },\n'
    insert = '''        { id: "f25", city: "Osaka", title: "飛騨牛一頭家 馬喰一代 KITTE大阪 🥩", desc: "朋友去的是名古屋EAST；同品牌大阪分店位於 KITTE大阪 5F。想吃飛騨牛可安排在梅田購物日。", cost: 5000, category: "food", isEnabled: false, location: "飛騨牛一頭家 馬喰一代 KITTE大阪" },
        { id: "f26", city: "Osaka", title: "いかれたNOODLE Fishtons 🍜", desc: "大阪人氣沾麵店，西大橋站步行約2分鐘、四ツ橋站約3分鐘。營業時間目前為 11:00-15:00 / 18:00-22:00。", cost: 1500, category: "food", isEnabled: false, location: "大阪府大阪市西区新町1-25-18" },
        { id: "f27", city: "Other", title: "すき焼きと牛まぶし ももしき 🥩", desc: "奈良的大和牛壽喜燒／牛まぶし名店，近鐵奈良站步行約1分鐘。營業時間目前為 11:00-22:00。若之後安排奈良一日遊很適合當正餐。", cost: 5000, category: "food", isEnabled: false, location: "奈良県奈良市東向中町5-1 浅川ハーベストビル2F" },
        { id: "f28", city: "Osaka", title: "お好み焼 美津の 🍳", desc: "道頓堀老字號大阪燒，招牌有美津の焼、山芋焼。營業時間目前為 11:00-22:00（L.O.21:00），位於難波／日本橋步行範圍。", cost: 2000, category: "food", isEnabled: false, location: "大阪府大阪市中央区道頓堀1-4-15" },
'''
    if marker not in app_text:
        raise SystemExit('restaurant insertion marker not found')
    app_text = app_text.replace(marker, marker + insert, 1)

app_text = app_text.replace("div.className = 'timeline-item';", "div.className = `timeline-item category-${item.category || 'other'}`;", 1)
app_text = app_text.replace("<div class=\"timeline-card ${hasPhotos ? 'has-photo' : ''}\">", "<div class=\"timeline-card timeline-card-${item.category || 'other'} ${hasPhotos ? 'has-photo' : ''}\">", 1)
app.write_text(app_text, encoding='utf-8')

css = Path('style.css')
css_text = css.read_text(encoding='utf-8')
if 'ITINERARY CATEGORY COLORS' not in css_text:
    css_text += '''

/* ITINERARY CATEGORY COLORS */
.timeline-card { border-left-width: 5px; }
.timeline-card-sightseeing { background: #EEF6FF; border-left-color: #3B82F6; }
.timeline-card-food { background: #FFF2E8; border-left-color: #F97316; }
.timeline-card-shopping { background: #F5EEFF; border-left-color: #8B5CF6; }
.timeline-card-transport { background: #EAFBF4; border-left-color: #10B981; }
.timeline-card-hotel { background: #FFF8DC; border-left-color: #D4A017; }
.timeline-card-other { background: #F4F5F7; border-left-color: #6B7280; }
.timeline-item.category-sightseeing::before { border-color: #3B82F6; }
.timeline-item.category-food::before { border-color: #F97316; }
.timeline-item.category-shopping::before { border-color: #8B5CF6; }
.timeline-item.category-transport::before { border-color: #10B981; }
.timeline-item.category-hotel::before { border-color: #D4A017; }
.timeline-item.category-other::before { border-color: #6B7280; }
.itinerary-legend { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 10px; }
.itinerary-legend-item { display: inline-flex; align-items: center; gap: 5px; padding: 4px 9px; border-radius: 999px; font-size: 0.78rem; font-weight: 600; background: #fff; border: 1px solid var(--border-color); }
.itinerary-legend-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
.legend-sightseeing { background: #3B82F6; }
.legend-food { background: #F97316; }
.legend-shopping { background: #8B5CF6; }
.legend-transport { background: #10B981; }
.legend-hotel { background: #D4A017; }
.legend-other { background: #6B7280; }
'''
css.write_text(css_text, encoding='utf-8')

html = Path('index.html')
html_text = html.read_text(encoding='utf-8')
html_text = html_text.replace('style.css?v=53', 'style.css?v=54')
if 'itinerary-legend' not in html_text:
    marker = '                            <h3 id="current-day-heading" style="font-size:1.3rem; font-weight:800; color:var(--secondary)">Day 1 - 2026/11/04 (三)</h3>\n'
    legend = '''                            <div class="itinerary-legend">
                                <span class="itinerary-legend-item"><i class="itinerary-legend-dot legend-sightseeing"></i>景點</span>
                                <span class="itinerary-legend-item"><i class="itinerary-legend-dot legend-food"></i>餐廳</span>
                                <span class="itinerary-legend-item"><i class="itinerary-legend-dot legend-shopping"></i>購物</span>
                                <span class="itinerary-legend-item"><i class="itinerary-legend-dot legend-transport"></i>交通</span>
                                <span class="itinerary-legend-item"><i class="itinerary-legend-dot legend-hotel"></i>住宿</span>
                                <span class="itinerary-legend-item"><i class="itinerary-legend-dot legend-other"></i>其他</span>
                            </div>
'''
    if marker not in html_text:
        raise SystemExit('legend insertion marker not found')
    html_text = html_text.replace(marker, marker + legend, 1)
html.write_text(html_text, encoding='utf-8')
