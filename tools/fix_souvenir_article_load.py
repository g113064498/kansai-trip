from pathlib import Path
p=Path('app.js')
s=p.read_text()
old="""        const souvData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.SOUVENIRS)) || null;\n        if (masterData && !masterData.content) masterData = await hexAPI.getArticle(masterData.id).catch(() => masterData);\n"""
new="""        let souvData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.SOUVENIRS)) || null;\n        if (masterData && !masterData.content) masterData = await hexAPI.getArticle(masterData.id).catch(() => masterData);\n        // Hexschool article list responses may omit content; fetch the full souvenir article before parsing it.\n        if (souvData && !souvData.content) souvData = await hexAPI.getArticle(souvData.id).catch(() => souvData);\n"""
if old not in s:
    raise SystemExit('target block not found')
s=s.replace(old,new,1)
p.write_text(s)
