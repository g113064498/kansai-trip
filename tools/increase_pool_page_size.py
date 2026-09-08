from pathlib import Path
p=Path('app.js')
s=p.read_text()
old='const itemsPerPage = 10;'
new='const itemsPerPage = 24;'
if old not in s:
    raise SystemExit('pool page size marker not found')
s=s.replace(old,new,1)
p.write_text(s)
