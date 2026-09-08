from pathlib import Path
import re
p=Path('app.js')
s=p.read_text(encoding='utf-8')

# Remove hardcoded flight/hotel/checklist runtime records as well; master API owns them.
s, n = re.subn(r'    flights: \[.*?\n    \],\n    hotels: \[.*?\n    \],\n    itinerary: \{\},\n    attractionPool: \[\],\n    checklist: \[.*?\n    \],', '    flights: [],\n    hotels: [],\n    itinerary: {},\n    attractionPool: [],\n    checklist: [],', s, count=1, flags=re.S)
if n != 1: raise SystemExit('initial master-backed blocks not found')

# Include trip metadata in master saves.
old = '''    return {
        flights: db.flights,
        hotels: db.hotels,'''
new = '''    return {
        tripTitle: db.tripTitle,
        startDate: db.startDate,
        endDate: db.endDate,
        flights: db.flights,
        hotels: db.hotels,'''
if old not in s: raise SystemExit('buildLocalMasterPayload marker missing')
s=s.replace(old,new,1)

# Insert DB-derived fixed item creation before Products are mapped.
marker = '''        // Products are the sole source for attractionPool and scheduled itinerary entries.
        const poolProducts = allProducts.filter(p => p.category === '候選景點');'''
insert = r'''        // Convert master flights/hotels into ordinary Product records once.
        // They are DB-derived (not hardcoded), appear under "Other", and remain fully editable afterwards.
        const sourceRefs = new Set(allProducts.filter(p => p.category === '候選景點').map(p => parseContent(p).sourceRef).filter(Boolean));
        let createdFixedProduct = false;
        const dateFromMonthDayText = (text) => {
            const m = String(text || '').match(/(\d{1,2})\/(\d{1,2})/);
            if (!m) return '';
            const year = String(db.startDate || '2026-11-04').slice(0,4);
            return year + '-' + String(m[1]).padStart(2,'0') + '-' + String(m[2]).padStart(2,'0');
        };
        const timeFromText = (text) => {
            const m = String(text || '').match(/(\d{1,2}:\d{2})/);
            return m ? m[1] : '';
        };
        const createFixedProduct = async ({sourceRef, title, desc, category, day, time, location}) => {
            if (!sourceRef || sourceRefs.has(sourceRef) || !day) return;
            const content = { city:'Other', desc:desc || '', cost:0, category:category || 'other', day,
                photos:[], location:location || '', time:time || '', sourceRef };
            await hexAPI.createProduct({ title, content:JSON.stringify(content), category:'候選景點', origin_price:0, price:0,
                unit:day + '|' + (time || '10:00 - 12:00'), is_enabled:1, num:1 });
            sourceRefs.add(sourceRef);
            createdFixedProduct = true;
        };

        for (const f of (db.flights || [])) {
            const day = dateFromMonthDayText(f.depTime);
            const dep = timeFromText(f.depTime);
            const arr = timeFromText(f.arrTime);
            const range = dep && arr ? dep + ' - ' + arr : (dep || '');
            await createFixedProduct({
                sourceRef:'flight:' + (f.id || f.number || day),
                title:(f.number || '航班') + ' ' + (f.from || '') + ' → ' + (f.to || '') + ' ✈️',
                desc:(f.notes || '') + (f.airline ? '｜航空公司：' + f.airline : ''), category:'transport', day, time:range, location:f.from || ''
            });
        }
        for (const h of (db.hotels || [])) {
            const inRef='hotel-checkin:' + (h.id || h.name || h.checkIn);
            const outRef='hotel-checkout:' + (h.id || h.name || h.checkOut);
            await createFixedProduct({ sourceRef:inRef, title:(h.name || '住宿') + ' Check-in 🏨', desc:h.notes || '', category:'hotel',
                day:h.checkIn || '', time:h.checkInTime || '15:00 - 16:00', location:h.address || h.name || '' });
            await createFixedProduct({ sourceRef:outRef, title:(h.name || '住宿') + ' Check-out 🧳', desc:'退房' + (h.notes ? '｜' + h.notes : ''), category:'hotel',
                day:h.checkOut || '', time:h.checkOutTime || '10:00 - 11:00', location:h.address || h.name || '' });
        }
        if (createdFixedProduct) allProducts = await hexAPI.getProducts();

        // Products are the sole source for attractionPool and scheduled itinerary entries.
        const poolProducts = allProducts.filter(p => p.category === '候選景點');'''
if marker not in s: raise SystemExit('product mapping marker missing')
s=s.replace(marker,insert,1)

p.write_text(s,encoding='utf-8')
print('patched fixed API items')
