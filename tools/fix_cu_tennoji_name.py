from pathlib import Path
p=Path('app.js')
s=p.read_text()
# Normalize legacy hotel display names when master data is loaded. This is a compatibility cleanup only;
# the corrected value is persisted back to Hexschool on the next normal save/edit.
needle="""        if (masterData) {\n            db = { ...db, ...masterData };\n"""
repl="""        if (masterData) {\n            db = { ...db, ...masterData };\n            // Legacy booking label cleanup: Booking.com confirmation uses Cu Tennoji.\n            if (Array.isArray(db.hotels)) {\n                db.hotels = db.hotels.map(h => ({\n                    ...h,\n                    name: /Color\\s*Tsuruhashi|Cu\\s*Tennoji/i.test(h.name || '') ? 'Cu Tennoji' : h.name\n                }));\n            }\n"""
if needle not in s: raise SystemExit('master load marker not found')
s=s.replace(needle,repl,1)
p.write_text(s)
