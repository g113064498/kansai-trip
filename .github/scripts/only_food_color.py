from pathlib import Path

css = Path('style.css')
css_text = css.read_text(encoding='utf-8')
start = css_text.find('/* ITINERARY CATEGORY COLORS */')
replacement_css = """

/* ITINERARY RESTAURANT HIGHLIGHT */
.timeline-card-food {
    background: #FFF2E8;
    border-left: 5px solid #F97316;
}
.timeline-item.category-food::before {
    border-color: #F97316;
}
.itinerary-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 10px;
}
.itinerary-legend-item {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 9px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 600;
    background: #fff;
    border: 1px solid var(--border-color);
}
.itinerary-legend-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
}
.legend-food { background: #F97316; }
"""
if start != -1:
    css_text = css_text[:start].rstrip() + replacement_css
elif 'ITINERARY RESTAURANT HIGHLIGHT' not in css_text:
    css_text += replacement_css
css.write_text(css_text, encoding='utf-8')

html = Path('index.html')
html_text = html.read_text(encoding='utf-8')
html_text = html_text.replace('style.css?v=54', 'style.css?v=55')
legend_start = html_text.find('                            <div class="itinerary-legend">')
if legend_start != -1:
    legend_end = html_text.find('                            </div>', legend_start)
    if legend_end != -1:
        legend_end += len('                            </div>')
        legend = (
            '                            <div class="itinerary-legend">\n'
            '                                <span class="itinerary-legend-item"><i class="itinerary-legend-dot legend-food"></i>餐廳</span>\n'
            '                            </div>'
        )
        html_text = html_text[:legend_start] + legend + html_text[legend_end:]
html.write_text(html_text, encoding='utf-8')
