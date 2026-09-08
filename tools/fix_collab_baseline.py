from pathlib import Path
p=Path('app.js')
s=p.read_text(encoding='utf-8')
old="""    await ensureArticle(ARTICLE_TAGS.MASTER, '主行程資料', JSON.stringify(mergedPayload));
    lastSyncedMaster = cloneJson(mergedPayload);
    return mergedPayload;"""
new="""    await ensureArticle(ARTICLE_TAGS.MASTER, '主行程資料', JSON.stringify(mergedPayload));
    // Baseline must remain what THIS browser last knew, not the merged remote result.
    // Otherwise a second save from a stale UI could accidentally revert another editor's newly merged value.
    lastSyncedMaster = cloneJson(localPayload);
    return mergedPayload;"""
assert old in s, 'baseline marker missing'
s=s.replace(old,new,1)
p.write_text(s,encoding='utf-8')
