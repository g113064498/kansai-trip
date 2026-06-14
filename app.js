// TRIPS INITIAL DATA (PRELOADED)
// [INITIAL_DATA_START]
const initialTripData = {
    tripTitle: "關西雙人浪漫楓秋之旅 🍁",
    startDate: "2026-11-04",
    endDate: "2026-11-11",
    flights: [
        {
            id: "flight-1",
            type: "departure",
            number: "MM024 (樂桃航空)",
            airline: "Peach",
            from: "台北桃園 (TPE)",
            to: "大阪關西 (KIX)",
            depTime: "11/04 (三) 09:40",
            arrTime: "11/04 (三) 13:10",
            seats: "Standard",
            price: 10260,
            notes: "桃園機場第一航廈登機。票價含雙人行李額度。"
        },
        {
            id: "flight-2",
            type: "return",
            number: "MM027 (樂桃航空)",
            airline: "Peach",
            from: "大阪關西 (KIX)",
            to: "台北桃園 (TPE)",
            depTime: "11/11 (三) 15:25",
            arrTime: "11/11 (三) 17:55",
            seats: "Standard",
            price: 10260,
            notes: "大阪關西機場第二航廈登機。最晚需於 13:25 前抵達一航廈搭接駁公車去二航開櫃。"
        }
    ],
    hotels: [
        {
            id: "hotel-1",
            city: "Kyoto",
            name: "Hop Inn Kyoto Shijo Omiya (京都四條大宮霍普飯店)",
            checkIn: "2026-11-04",
            checkOut: "2026-11-07",
            nights: 3,
            price: 7316,
            link: "https://www.booking.com/hotel/jp/hop-inn-kyoto-shijo-omiya.zh-tw.html",
            address: "京都市中京区壬生坊城町18-1",
            notes: "從機場搭乘 JR Haruka 直達京都車站，再搭計程車 (約 ¥1500) 或公車前往飯店。鄰近阪急與嵐電，去嵐山跟河原町超方便。"
        },
        {
            id: "hotel-2",
            city: "Osaka",
            name: "Color Tsuruhashi / Cu Tennoji",
            checkIn: "2026-11-07",
            checkOut: "2026-11-11",
            nights: 4,
            price: 7174,
            link: "https://www.booking.com/hotel/jp/color-tsuruhashi-da-ban-fu1.zh-tw.html",
            address: "大阪市天王寺区筆ケ崎町5-30",
            notes: "預訂連結為 Color Tsuruhashi，請確認入住地點是鶴橋站還是天王寺站。附近有大阪環狀線，交通很方便，搭 Haruka 或是關空快速可直達機場。"
        }
    ],
    itinerary: {
        "2026-11-04": [
            { id: "s1", time: "09:40 - 13:10", title: "飛往大阪關西機場 (MM024) ✈️", desc: "桃園捷運 ➜ T1 樂桃櫃檯 ➜ 抵達關西二航廈", cost: 0, category: "transport", location: "Kansai International Airport" },
            { id: "s3", time: "16:00 - 16:30", title: "飯店 Check-in: Hop Inn Kyoto Shijo Omiya 🏨", desc: "京都車站搭公車（約 20 分鐘）或計程車（約 ¥1500）至四條大宮飯店寄物入住", cost: 0, category: "hotel", location: "Hop Inn Kyoto Shijo Omiya" }
        ],
        "2026-11-05": [],
        "2026-11-06": [],
        "2026-11-07": [
            { id: "s9", time: "12:30 - 13:00", title: "大阪飯店 Check-in / 寄行李 🏨", desc: "在 Color Tsuruhashi / Cu Tennoji 寄放行李後，開始大阪行程", cost: 0, category: "hotel", location: "Color Tsuruhashi" }
        ],
        "2026-11-08": [],
        "2026-11-09": [],
        "2026-11-10": [],
        "2026-11-11": [
            { id: "s12", time: "15:25 - 17:55", title: "搭乘 MM027 航班返台 ✈️", desc: "回到溫暖的家，結束美好旅程", cost: 0, category: "transport", location: "台北桃園 (TPE)" }
        ]
    },
    attractionPool: [
        // === 大阪京都.csv 景點 ===
        { id: "g1", city: "Kyoto", title: "Shijō Bridge (四條大橋)", desc: "鴨川上的四條大橋，下午日落時非常美麗，可以坐在河畔吹風放鬆。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g2", city: "Kyoto", title: "花見小路", desc: "祇園最具代表性的石板小路，兩旁是傳統茶屋與料亭，偶爾可見藝妓身影。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g3", city: "Kyoto", title: "安井金比羅宮（緣切緣結碑）", desc: "著名的斷惡緣、結良緣神社，參拜者需穿過石碑中央的洞。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g4", city: "Kyoto", title: "高台寺", desc: "09:00-17:30。參觀完清水寺後可順道前往，秋季夜間點燈極美。", cost: 800, category: "sightseeing", isEnabled: false },
        { id: "g5", city: "Kyoto", title: "慈照寺（銀閣寺）", desc: "08:30-17:00。世界文化遺產，枯山水庭園與銀沙灘著名，哲學之道起點。", cost: 1000, category: "sightseeing", isEnabled: false },
        { id: "g6", city: "Kyoto", title: "永觀堂（禪林寺）", desc: "09:00-16:00。秋季紅葉名所「紅葉的永觀堂」，寺廟內除花園外禁止拍照。", cost: 1000, category: "sightseeing", isEnabled: false },
        { id: "g7", city: "Kyoto", title: "金閣寺（鹿苑寺）", desc: "09:00-17:00。金碧輝煌的舍利塔倒映在鏡湖池，京都最具代表性地標之一。", cost: 500, category: "sightseeing", isEnabled: false },
        { id: "g8", city: "Kyoto", title: "賀茂御祖神社（下鴨神社）", desc: "10:00-16:00。世界文化遺產，京都最古老神社之一，附近有糺之森。", cost: 1000, category: "sightseeing", isEnabled: false },
        { id: "g9", city: "Osaka", title: "木津市場", desc: "大阪在地人愛去的平價市場，海鮮新鮮便宜，比黑門市場划算許多。", cost: 0, category: "food", isEnabled: false },
        { id: "g10", city: "Kyoto", title: "渡月橋", desc: "嵐山地標性木造橋樑，秋天楓紅滿山時景色絕美，是京都經典賞楓拍照景點。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g11", city: "Kyoto", title: "貴船神社", desc: "京都北郊山區的神社，以石階兩旁紅色獻燈與水占卜聞名，秋季楓葉隧道極浪漫。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g12", city: "Osaka", title: "難波八阪神社", desc: "06:30-17:00。巨大震撼的獅子頭舞台，能吸走厄運帶來好運。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g13", city: "Kyoto", title: "西本願寺", desc: "05:30-17:00，免費。世界文化遺產，擁有兩棵樹齡超 400 年的巨大御影堂銀杏。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g14", city: "Kyoto", title: "東寺（教王護國寺）", desc: "大門 05:00-17:00。日本最高木造五重塔，秋季夜間拜觀點燈極美。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g15", city: "Kyoto", title: "京都塔", desc: "京都車站前醒目白色地標，頂部觀景台可 360 度俯瞰京都市區與遠山。", cost: 900, category: "sightseeing", isEnabled: false },
        { id: "g16", city: "Kyoto", title: "二條城", desc: "08:45-16:00。德川家康在京都的寓所，二之丸御殿「鶯聲地板」聞名。", cost: 1300, category: "sightseeing", isEnabled: false },
        { id: "g17", city: "Kyoto", title: "京都御苑", desc: "24 小時開放，免費。皇室舊御花園，佔地廣大、環境清幽，秋季賞楓名所。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g18", city: "Kyoto", title: "伏見稻荷大社 🦊", desc: "24小時開放。千本鳥居非常壯觀，建議早上 7 點前抵達避開大量團體遊客。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g19", city: "Kyoto", title: "產寧坂（三年坂）", desc: "24小時開放。傳統石板坡道，古色古香，建議清晨去完全沒人，極好拍照。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g20", city: "Kyoto", title: "二寧坂（二年坂）", desc: "24小時開放。與三年坂相連的傳統坡道，沿路有許多特色小店。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g21", city: "Kyoto", title: "八坂神社", desc: "24小時開放。晚上會點燈，非常浪漫，適合夜間散步。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g22", city: "Kyoto", title: "平安神宮 ⛩️", desc: "06:00-17:00。擁有巨大的紅色大鳥居，庭園景色優美。", cost: 0, category: "sightseeing", isEnabled: false },
        { id: "g23", city: "Kyoto", title: "清水寺 🌸", desc: "06:00-18:00。京都最具代表性寺廟，主殿舞台景觀壯麗，推薦清晨前去避開人潮。", cost: 400, category: "sightseeing", isEnabled: false },
        { id: "g24", city: "Kyoto", title: "錦市場 🍢", desc: "京都的廚房，有各式海鮮、小吃。注意有店家不開放邊走邊吃。", cost: 0, category: "food", isEnabled: false },
        { id: "g25", city: "Osaka", title: "大阪日本橋電器街 🎮", desc: "11:00-19:00。類似東京秋葉原，充滿動漫、遊戲周邊與電子產品。", cost: 0, category: "shopping", isEnabled: false },
        { id: "g26", city: "Osaka", title: "大阪歷史博物館", desc: "常設展展出大阪的歷史變遷，與大阪城公園相鄰。", cost: 600, category: "sightseeing", isEnabled: false },
        { id: "g27", city: "Kyoto", title: "北野天滿宮 🍁", desc: "07:00-17:00。主祀學問之神菅原道真，秋天賞楓名所，御土居紅葉隧道極美。", cost: 1000, category: "sightseeing", isEnabled: false },
        { id: "g28", city: "Osaka", title: "大丸百貨心齋橋店 本館 🛍️", desc: "心齋橋地標百貨，與 PARCO 相連，購物美食一站滿足。", cost: 0, category: "shopping", isEnabled: false },
        { id: "g29", city: "Osaka", title: "購物中心 HEP FIVE 🛍️", desc: "梅田地標性紅色摩天輪商場，摩天輪可俯瞰大阪市中心夜景，適合情侶約會。", cost: 600, category: "shopping", isEnabled: false },
        { id: "g30", city: "Osaka", title: "大阪城公園 🏯", desc: "09:00-17:00。入園免費，上天守閣需門票（約 ¥600）。雄偉的大阪象徵。", cost: 600, category: "sightseeing", isEnabled: false },
        { id: "g31", city: "Osaka", title: "Os Drug 天滿店 🛍️", desc: "天神橋筋商店街內的超便宜藥妝店，只收現金，價格比連鎖退稅藥妝店便宜。", cost: 0, category: "shopping", isEnabled: false },
        { id: "g32", city: "Osaka", title: "勝尾寺 🔴", desc: "08:00-17:00。滿山滿谷紅色達摩。搭御堂筋線到「箕面萱野」轉30號公車。", cost: 500, category: "sightseeing", isEnabled: false },
        { id: "g33", city: "Osaka", title: "通天閣", desc: "傳統大阪老街風情，通天閣有滑梯。⚠️炸串聽說容易踩雷，請小心挑選。", cost: 1000, category: "sightseeing", isEnabled: false },
        { id: "g34", city: "Osaka", title: "四天王寺", desc: "08:30-16:00。日本最古老的官寺之一，步行 15 分鐘可達通天閣。", cost: 300, category: "sightseeing", isEnabled: false },
        { id: "g35", city: "Osaka", title: "唐吉訶德 道頓堀店 🛍️", desc: "24小時營業，藥妝、零食、伴手禮應有盡有，是採購與退稅首選。", cost: 0, category: "shopping", isEnabled: false },
        { id: "g36", city: "Osaka", title: "Shinsaibashi PARCO 🛍️", desc: "與大丸百貨相連的時尚商場，6樓有吉卜力共和國、卡普空等動漫專賣店。", cost: 0, category: "shopping", isEnabled: false },
        // === 大阪京都美食地圖.csv ===
        { id: "f1", city: "Kyoto", title: "松屋 四條大宮站前店", desc: "四條大宮站旁的平價日式牛丼連鎖店，深夜也營業，適合宵夜。", cost: 500, category: "food", isEnabled: false },
        { id: "f2", city: "Osaka", title: "PRESS BUTTER SAND 大阪高島屋", desc: "高島屋難波店的人氣奶油夾心餅乾專賣店，伴手禮首選。", cost: 1000, category: "food", isEnabled: false },
        { id: "f3", city: "Osaka", title: "Sugar Butter Tree 阪急梅田店", desc: "阪急梅田站的人氣甜點伴手禮店，奶油樹餅乾香酥可口。", cost: 800, category: "food", isEnabled: false },
        { id: "f4", city: "Osaka", title: "ÉCHIRÉ Marché au Beurre", desc: "法國高級奶油品牌 ÉCHIRÉ 的專賣店，招牌奶油可頌與費南雪極受歡迎。", cost: 1200, category: "food", isEnabled: false },
        { id: "f5", city: "Osaka", title: "grenier 梅田店", desc: "梅田的人氣麵包甜點店。", cost: 800, category: "food", isEnabled: false },
        { id: "f6", city: "Osaka", title: "SUKIYAKI FUJIMOTO", desc: "大阪的高評價壽喜燒專門店，肉質鮮美。", cost: 5000, category: "food", isEnabled: false },
        { id: "f7", city: "Kyoto", title: "Yasubee", desc: "京都的人氣居酒屋/餐廳。", cost: 2000, category: "food", isEnabled: false },
        { id: "f8", city: "Kyoto", title: "Kuchibashi Modern", desc: "京都的時尚現代日式餐廳。", cost: 2000, category: "food", isEnabled: false },
        { id: "f9", city: "Kyoto", title: "Yumemiya", desc: "京都的特色餐廳。", cost: 2000, category: "food", isEnabled: false },
        { id: "f10", city: "Kyoto", title: "麵屋練之助 🍜", desc: "需預約。京都高評價拉麵店。", cost: 1500, category: "food", isEnabled: false },
        { id: "f11", city: "Kyoto", title: "Mamemono and Taiyaki 🍴", desc: "嵐山超人氣鯛魚燒店，主打「賞味期限一分鐘」的牛油鯛魚燒。", cost: 500, category: "food", isEnabled: false },
        { id: "f12", city: "Kyoto", title: "Sukiyaki Kimura 🍲", desc: "12:00-20:30（週一、週五公休）。傳統平價壽喜燒老店。", cost: 3000, category: "food", isEnabled: false },
        { id: "f13", city: "Kyoto", title: "GION GOZU 四条店", desc: "祇園四條附近的精緻甜點烘焙店，主打宇治抹茶或水果乳酪蛋糕。", cost: 1000, category: "food", isEnabled: false },
        { id: "f14", city: "Kyoto", title: "Onimaru Kyoto Shijo Kawaramachi 🍙", desc: "精緻好吃的飯糰店，Threads 熱門打卡美食。", cost: 800, category: "food", isEnabled: false },
        { id: "f15", city: "Kyoto", title: "DONGURI Shijo-Omiya Store", desc: "四條大宮站附近的知名京都御好燒連鎖店，營業至深夜。", cost: 3000, category: "food", isEnabled: false },
        { id: "f16", city: "Kyoto", title: "麵屋 豬一 🍜", desc: "11:00-14:30 / 17:30-21:00。超人氣排隊拉麵店，不接受預約，湯頭清甜精緻。", cost: 1500, category: "food", isEnabled: false },
        { id: "f17", city: "Osaka", title: "お好み焼（大阪燒）千草", desc: "天滿站附近隱藏版老字號大阪燒店，曾獲米其林推薦。", cost: 1500, category: "food", isEnabled: false },
        { id: "f18", city: "Osaka", title: "可樂餅 中村屋", desc: "天神橋筋商店街內的人氣可樂餅老店。09:00-18:00，週日休。", cost: 300, category: "food", isEnabled: false },
        { id: "f19", city: "Osaka", title: "HARBS 心齋橋Parco店", desc: "心齋橋 Parco 百貨內，招牌水果千層蛋糕鮮奶油清爽不膩。", cost: 1200, category: "food", isEnabled: false },
        { id: "f20", city: "Osaka", title: "大阪燒 千房", desc: "道頓堀超知名大阪燒連鎖品牌，以美乃滋拉花特技聞名。", cost: 2000, category: "food", isEnabled: false },
        { id: "f21", city: "Osaka", title: "Kusaka Curry Namba DINING MAISON", desc: "高島屋難波店美食街的高評價日式咖哩店，炸豬排酥脆。", cost: 1500, category: "food", isEnabled: false },
        { id: "f22", city: "Osaka", title: "HARBS Namba Parks", desc: "難波 Parks 商場內的名店，招牌水果千層蛋糕，關西必吃甜點。", cost: 1200, category: "food", isEnabled: false },
        { id: "f23", city: "Osaka", title: "Shabuwara 壽喜燒 涮涮鍋 花月店", desc: "高評價日式火鍋餐廳，主打優質壽喜燒與涮涮鍋，適合情侶晚餐。", cost: 6000, category: "food", isEnabled: false },
        { id: "f24", city: "Osaka", title: "Shabucho", desc: "極受歡迎的個人/雙人涮涮鍋壽喜燒餐廳，湯頭清淡甘甜。", cost: 5000, category: "food", isEnabled: false },
    ],
    checklist: [
        { id: "c1", category: "both", item: "中華民國護照 (確認效期6個月以上) 🛂", done: false },
        { id: "c2", category: "both", item: "Visit Japan Web 申報 QR Code 截圖 📱", done: false },
        { id: "c3", category: "both", item: "日本上網 eSIM / 實體網卡購買 📶", done: false },
        { id: "c4", category: "both", item: "日圓現金 (多換些百圓與千圓面額) 💴", done: false },
        { id: "c5", category: "both", item: "ICOCA 卡 / 綁定 iPhone Apple Wallet 💳", done: false },
        { id: "c6", category: "both", item: "雙人投保海外旅遊平安險+不便險 🛡️", done: false },
        { id: "c7", category: "both", item: "登機手提行李秤重、打包防溢罐 🧳", done: false },
        { id: "c8", category: "boy", item: "刮鬍刀、個人換洗衣物、盥洗包 🪒", done: false },
        { id: "c9", category: "boy", item: "行動電源、各類充電線與豆腐頭 🔋", done: false },
        { id: "c10", category: "boy", item: "預訂門票確認信件彙整 (勝尾寺、Haruka等) 📄", done: false },
        { id: "c11", category: "girl", item: "保養品、化妝品、卸妝與個人護理用品 🧴", done: false },
        { id: "c12", category: "girl", item: "隱形眼鏡、常備藥品 (止痛、防蚊、暈車) 💊", done: false },
        { id: "c13", category: "girl", item: "美美拍照服裝、舒適好走的走路鞋 👟", done: false },
        { id: "c14", category: "boy", item: "內政部役男出境核准公文（線上申請並列印帶在身上） 🪖", done: false }
    ],
    messages: []
};
// [INITIAL_DATA_END]

// GLOBAL DATABASE STATE
// db starts as null; populated by initApp() which loads from API only
let db = null;
let activeTab = 'dashboard';
let currentSelectedDay = "2026-11-04";
let currentPoolFilter = 'Kyoto-sightseeing';
let currentPoolPage = 1;

// Clean up old localStorage data on page load
(function cleanupOldLocalStorage() {
    try {
        localStorage.removeItem('kansai_trip_db');
        localStorage.removeItem('kansai_trip_messages');
        localStorage.removeItem('kansai_trip_checklist_state');
        localStorage.removeItem('deletedPoolIds');
    } catch (e) { /* ignore */ }
})();

// ==========================================
// HEXSCHOOL API HELPER (六角學院 Vue3 課程 API)
// ==========================================
const API_BASE = 'https://vue3-course-api.hexschool.io/v2';
const API_PATH = 'kansai-trip';

const hexAPI = {
    async request(method, url, body) {
        const token = getToken();
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = token;
        const opts = { method, headers };
        if (body) opts.body = JSON.stringify(body);
        const res = await fetch(url, opts);
        const data = await res.json();
        if (res.status === 401) {
            clearToken();
            const modal = document.getElementById('login-modal');
            if (modal) modal.classList.add('open');
            throw new Error('登入已過期，請重新登入');
        }
        if (data.success === false) throw new Error(data.message || 'API 請求失敗');
        if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
        return data;
    },
    async login(email, password) {
        const res = await fetch(`${API_BASE}/admin/signin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password })
        });
        const data = await res.json();
        if (!data || !data.success) {
            throw new Error(data?.message || '登入失敗');
        }
        const token = data.token;
        if (!token) throw new Error('伺服器未回傳 token');
        const expired = data.expired;
        let expires;
        if (typeof expired === 'number') {
            expires = new Date(expired < 1e12 ? expired * 1000 : expired);
        } else if (typeof expired === 'string') {
            expires = new Date(expired);
        } else {
            expires = new Date(Date.now() + 86400000);
        }
        // 清除所有舊 hexToken（三種 path）
        for (const p of ['', '; path=/', '; path=/; SameSite=Lax']) {
            document.cookie = 'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC' + p;
        }
        document.cookie = `hexToken=${token}; expires=${expires.toUTCString()}; path=/`;
        return data;
    },
    async getArticles() {
        // 文章通常不超過 10 筆，單頁即可
        const data = await this.request('GET', `${API_BASE}/api/${API_PATH}/admin/articles`);
        return data.articles || [];
    },
    async getArticle(id) {
        const data = await this.request('GET', `${API_BASE}/api/${API_PATH}/admin/article/${id}`);
        return data.article || null;
    },
    async createArticle(payload) {
        const data = await this.request('POST', `${API_BASE}/api/${API_PATH}/admin/article`, { data: payload });
        return data;
    },
    async updateArticle(id, payload) {
        const data = await this.request('PUT', `${API_BASE}/api/${API_PATH}/admin/article/${id}`, { data: payload });
        return data;
    },
    // --- Products API ---
    async getProducts() {
        try {
            // 一次取得所有產品，避免多頁 API 分次請求，大幅提升載入速度
            const data = await this.request('GET', `${API_BASE}/api/${API_PATH}/admin/products/all`);
            const productsObj = data.products || {};
            // 相容性處理：六角學院 API 此端點可能回傳 Array 或 Object
            const products = Array.isArray(productsObj) ? productsObj : Object.values(productsObj);
            console.log(`[getProducts] 使用 products/all 載入完成：共 ${products.length} 個產品`);
            return products;
        } catch (err) {
            console.warn(`[getProducts] 使用 products/all 載入失敗，嘗試 fallback 到分頁載入:`, err);
            // Fallback 到原有分頁載入邏輯，確保極高容錯率
            const firstPageData = await this.request('GET', `${API_BASE}/api/${API_PATH}/admin/products?page=1`);
            let allProducts = firstPageData.products || [];
            const totalPages = (firstPageData.pagination && firstPageData.pagination.total_pages) || 1;
            
            if (totalPages > 1) {
                const promises = [];
                for (let page = 2; page <= totalPages; page++) {
                    promises.push(
                        this.request('GET', `${API_BASE}/api/${API_PATH}/admin/products?page=${page}`)
                            .then(d => d.products || [])
                            .catch(e => {
                                console.warn(`[getProducts] Fallback 載入第 ${page} 頁失敗:`, e);
                                return [];
                            })
                    );
                }
                const results = await Promise.all(promises);
                for (const products of results) {
                    allProducts = allProducts.concat(products);
                }
            }
            return allProducts;
        }
    },
    async getProduct(id) {
        const data = await this.request('GET', `${API_BASE}/api/${API_PATH}/admin/product/${id}`);
        return data.product || null;
    },
    async createProduct(payload) {
        const data = await this.request('POST', `${API_BASE}/api/${API_PATH}/admin/product`, { data: payload });
        return data;
    },
    async updateProduct(id, payload) {
        const data = await this.request('PUT', `${API_BASE}/api/${API_PATH}/admin/product/${id}`, { data: payload });
        return data;
    },
    async deleteProduct(id) {
        const data = await this.request('DELETE', `${API_BASE}/api/${API_PATH}/admin/product/${id}`);
        return data;
    },
    // --- Customer Products API (read-only, no auth) ---
    async getCustomerProducts() {
        const url = `${API_BASE}/api/${API_PATH}/products`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.success === false) throw new Error(data.message || 'API 請求失敗');
        return data.products || [];
    },
    async getCustomerProductsAll() {
        const url = `${API_BASE}/api/${API_PATH}/products/all`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.success === false) throw new Error(data.message || 'API 請求失敗');
        return data.products || [];
    },
};

function getToken() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; hexToken=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function clearToken() {
    document.cookie = 'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    document.cookie = 'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax';
}

function isTokenExpired() {
    return !getToken();
}

// ==========================================
// HEXSCHOOL API SYNC LAYER (跨裝置同步)
// ==========================================
// 使用六角學院 Vue3 課程 API (/v2/) 作為資料庫
// API Path: kansai-trip
// 使用 Articles API 存三類資料：每一天行程各一篇、留言板一篇、主資料一篇
// 離線時自動降級為僅 LocalStorage 本地儲存
let syncIndicatorEl = null;

const ARTICLE_TAGS = { MESSAGES: 'messages', MASTER: 'master', SOUVENIRS: 'souvenirs' };

function setSyncStatus(status) {
    if (!syncIndicatorEl) {
        syncIndicatorEl = document.getElementById('sync-status-indicator');
    }
    if (!syncIndicatorEl) return;
    const map = {
        idle:     { text: '已同步',       color: 'var(--accent-green)' },
        syncing:  { text: '同步中…',     color: '#e67e22' },
        synced:   { text: '已同步 ✓',     color: 'var(--accent-green)' },
        offline:  { text: '離線模式',     color: 'var(--text-muted)' },
        error:    { text: '同步失敗',     color: '#c0392b' },
    };
    const info = map[status] || map.idle;
    syncIndicatorEl.innerText = info.text;
    syncIndicatorEl.style.color = info.color;
}

function showSyncOverlay() {
    const overlay = document.getElementById('sync-overlay');
    if (overlay) overlay.style.display = 'flex';
}

function hideSyncOverlay() {
    const overlay = document.getElementById('sync-overlay');
    if (overlay) overlay.style.display = 'none';
}

function showToast(message, duration) {
    duration = duration || 1500;
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(function() { toast.classList.add('show'); });
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 300);
    }, duration);
}

function setCacheId(type, key, id) { localStorage.setItem(`${type}:${key}`, id); }
function getCacheId(type, key) { return localStorage.getItem(`${type}:${key}`); }
function removeCacheId(type, key) { localStorage.removeItem(`${type}:${key}`); }

async function ensureArticle(tag, title, content) {
    const now = Math.floor(Date.now() / 1000);
    const payload = { title, content, tag: [tag], isPublic: false, create_at: now, author: 'admin' };
    const cacheKey = `art:${tag}:${title}`;
    const existingId = getCacheId('art', cacheKey);
    if (existingId) {
        try { await hexAPI.updateArticle(existingId, payload); return existingId; } catch { removeCacheId('art', cacheKey); }
    }
    const all = await hexAPI.getArticles();
    const found = all.find(a => a.tag && a.tag.includes(tag) && a.title === title);
    if (found) { setCacheId('art', cacheKey, found.id); await hexAPI.updateArticle(found.id, payload); return found.id; }
    await hexAPI.createArticle(payload);
    const updated = await hexAPI.getArticles();
    const created = updated.find(a => a.tag && a.tag.includes(tag) && a.title === title);
    if (created) setCacheId('art', cacheKey, created.id);
    return created ? created.id : null;
}

async function ensureProduct(title, content) {
    const cacheKey = `prod:${title}`;
    const productData = {
        title,
        content,
        category: '行程',
        origin_price: 0,
        price: 0,
        unit: '天',
        is_enabled: 1,
        num: 1
    };

    // Try to update using cached ID
    const existingId = getCacheId('prod', cacheKey);
    if (existingId) {
        try {
            await hexAPI.updateProduct(existingId, productData);
            return existingId;
        } catch (e) {
            removeCacheId('prod', cacheKey);
        }
    }

    // Find by title from API list
    const all = await hexAPI.getProducts();
    const found = all.find(p => p.title === title);
    if (found) {
        try {
            await hexAPI.updateProduct(found.id, productData);
            setCacheId('prod', cacheKey, found.id);
            return found.id;
        } catch (e) {
            removeCacheId('prod', cacheKey);
            console.warn('[Product] 更新失敗:', title, e.message);
        }
    }

    // Create new product
    await hexAPI.createProduct(productData);
    const updated = await hexAPI.getProducts();
    const created = updated.find(p => p.title === title);
    if (created) setCacheId('prod', cacheKey, created.id);
    return created ? created.id : null;
}

async function ensurePoolProduct(item) {
    const productData = {
        title: item.title || '未命名景點',
        content: JSON.stringify({ city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '' }),
        category: '候選景點',
        origin_price: item.cost || 0,
        price: 0,
        unit: '景點',
        is_enabled: item.isEnabled ? 1 : 0,
        num: 1
    };
    const cacheKey = `pool:${item.id}`;
    const existingId = getCacheId('pool', cacheKey);
    if (existingId) {
        try { await hexAPI.updateProduct(existingId, productData); return existingId; } catch { removeCacheId('pool', cacheKey); }
    }
    const all = await hexAPI.getProducts();
    const found = all.find(p => p.title === item.title && p.category === '候選景點');
    if (found) { setCacheId('pool', cacheKey, found.id); await hexAPI.updateProduct(found.id, productData); return found.id; }
    await hexAPI.createProduct(productData);
    const updated = await hexAPI.getProducts();
    const created = updated.find(p => p.title === item.title && p.category === '候選景點');
    if (created) setCacheId('pool', cacheKey, created.id);
    return created ? created.id : null;
}

async function loadFromRemote() {
    try {
        setSyncStatus('syncing');

        db = JSON.parse(JSON.stringify(initialTripData));
        if (!db.messages) db.messages = [];

        // 平行載入：articles + products 同時發
        // 平行載入 articles + products（含自動分頁）
        const [allArticles, allProducts] = await Promise.all([
            hexAPI.getArticles(),
            hexAPI.getProducts()
        ]);

        // 文章列表已包含 content，直接使用不需額外 getArticle()
        const masterContent = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MASTER)) || null;
        const msgContent = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MESSAGES)) || null;
        const souvContent = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.SOUVENIRS)) || null;

        // 如果列表的 content 為空，才需要單獨取文章（少數 API 版本列表不含 content）
        const needFetch = [];
        if (masterContent && !masterContent.content) needFetch.push(hexAPI.getArticle(masterContent.id).catch(() => null));
        else needFetch.push(Promise.resolve(masterContent));
        if (msgContent && !msgContent.content) needFetch.push(hexAPI.getArticle(msgContent.id).catch(() => null));
        else needFetch.push(Promise.resolve(msgContent));
        if (souvContent && !souvContent.content) needFetch.push(hexAPI.getArticle(souvContent.id).catch(() => null));
        else needFetch.push(Promise.resolve(souvContent));
        const [masterData, msgData, souvData] = await Promise.all(needFetch);

        // 處理 master article
        if (masterData && masterData.content) {
            try {
                const m = JSON.parse(masterData.content);
                if (m.flights) db.flights = m.flights;
                if (m.hotels) db.hotels = m.hotels;
                if (m.budget) db.budget = m.budget;
                if (m.checklist) db.checklist = m.checklist;
                if (m.dayOrder) db.dayOrder = m.dayOrder;
                if (m.scheduledItems) db.scheduledItems = m.scheduledItems;
                if (m.poolPhotos) db.poolPhotos = m.poolPhotos;
                if (m.deletedPoolItems) db.deletedPoolItems = m.deletedPoolItems;
                if (m.customEvents) {
                    for (const [day, events] of Object.entries(m.customEvents)) {
                        if (db.itinerary.hasOwnProperty(day)) {
                            db.itinerary[day] = events || [];
                        }
                    }
                }
            } catch { /* skip corrupt master */ }
        }

        // 處理 messages
        db.messages = [];

        // 處理 souvenirs
        if (souvData && souvData.content) {
            try {
                const souv = JSON.parse(souvData.content);
                if (Array.isArray(souv)) db.souvenirs = souv;
            } catch { /* skip */ }
        }
        if (!db.souvenirs) db.souvenirs = [];

        // 處理 pool 產品
        const poolProducts = allProducts.filter(p => p.category === '候選景點');
        // 先以 ID 降冪排序，確保最新的產品（ID 較大）先被處理，使去重邏輯結果是確定性且最新的
        poolProducts.sort((a, b) => b.id.localeCompare(a.id));
        console.log('[DEBUG loadFromRemote] 從 API 載入的候選景點產品 (已排序):', poolProducts.map(p => ({ id: p.id, title: p.title, is_enabled: p.is_enabled, unit: p.unit })));

        // 標題正規化函式：去除 emoji、空白差異，用於比對去重
        const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();

        // API 產品本身也可能有重複（同名產品），以最新的為準
        const seenApiTitles = new Map();
        const dedupedPoolProducts = [];
        for (const p of poolProducts) {
            const norm = normalizeTitle(p.title);
            if (!seenApiTitles.has(norm)) {
                seenApiTitles.set(norm, true);
                dedupedPoolProducts.push(p);
            }
        }

        const apiPoolItems = dedupedPoolProducts.map(p => {
            const data = (() => { try { return JSON.parse(p.content || '{}'); } catch { return {}; } })();
            return {
                id: 'api-' + p.id,
                city: data.city || 'Kyoto',
                title: p.title,
                desc: data.desc || '',
                cost: data.cost || p.origin_price || 0,
                category: data.category || 'sightseeing',
                isEnabled: p.is_enabled == 1 || p.is_enabled === true,
                day: (p.is_enabled == 1 && p.unit && p.unit !== '景點') ? p.unit.split('|')[0] : '',
                time: (p.is_enabled == 1 && p.unit && p.unit !== '景點' && p.unit.includes('|')) ? p.unit.split('|')[1] : (data.time || ''),
                photos: data.photos || [],
                location: data.location || '',
                _productId: p.id
            };
        });

        // Merge with initial data — 用正規化標題比對，避免 emoji 差異造成重複
        if (!db.deletedPoolItems) db.deletedPoolItems = [];
        const apiNormTitles = new Set(apiPoolItems.map(i => normalizeTitle(i.title)));
        const initialOnly = (db.attractionPool || []).filter(p => 
            !apiNormTitles.has(normalizeTitle(p.title)) && 
            !db.deletedPoolItems.includes(p.id)
        );
        db.attractionPool = [...apiPoolItems, ...initialOnly];

        // 建立初始 ID 與 API ID 的對照表，解決舊版 dayOrder 的 ID 不相容問題
        const initialIdMap = {};
        for (const apiItem of apiPoolItems) {
            const match = initialTripData.attractionPool.find(initItem => normalizeTitle(initItem.title) === normalizeTitle(apiItem.title));
            if (match) {
                initialIdMap[match.id] = apiItem.id;
            }
        }

        // Merge poolPhotos from master article
        if (!db.poolPhotos) db.poolPhotos = {};
        for (const item of db.attractionPool) {
            if (db.poolPhotos[item.id]) {
                item.photos = db.poolPhotos[item.id];
            }
        }

        // Init scheduledItems: { poolId: "day|time", ... }
        if (!db.scheduledItems) db.scheduledItems = {};

        // Sync from scheduledItems, fall back to product is_enabled for backward compat
        console.log('[DEBUG loadFromRemote] scheduledItems 從 master article:', JSON.parse(JSON.stringify(db.scheduledItems)));
        let migrated = false;
        for (const item of db.attractionPool) {
            if (db.scheduledItems[item.id]) {
                const parts = db.scheduledItems[item.id].split('|');
                item.isEnabled = true;
                item.day = parts[0] || '';
                item.time = parts[1] || item.time || '10:00 - 12:00';
            } else if (item.isEnabled && item.day) {
                db.scheduledItems[item.id] = item.day + '|' + (item.time || '10:00 - 12:00');
                migrated = true;
            } else {
                item.isEnabled = false;
            }
        }
        // 清理 scheduledItems 中不在 attractionPool 的孤兒
        let cleaned = false;
        const poolIds = new Set(db.attractionPool.map(i => i.id));
        for (const sid of Object.keys(db.scheduledItems)) {
            if (!poolIds.has(sid)) {
                delete db.scheduledItems[sid];
                cleaned = true;
            }
        }
        // 合併 migration 與 cleanup 的存檔，只呼叫一次
        if (migrated || cleaned) saveItineraryToRemote();

        // Add scheduled pool items to itinerary by day
        console.log('[DEBUG loadFromRemote] 準備加入日程的 pool items:', db.attractionPool.filter(i => i.isEnabled && i.day).map(i => ({ id: i.id, title: i.title, day: i.day, isEnabled: i.isEnabled })));
        for (const item of db.attractionPool) {
            if (item.isEnabled && item.day && db.itinerary.hasOwnProperty(item.day)) {
                db.itinerary[item.day].push({
                    id: item.id,
                    _poolId: item.id,
                    time: item.time || '10:00 - 12:00',
                    title: item.title || '未命名景點',
                    desc: item.desc,
                    cost: item.cost || 0,
                    category: item.category,
                    photos: item.photos || [],
                    location: item.location || item.title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,''),
                    _productId: item._productId
                });
            }
        }

        // Filter itinerary by dayOrder from master article, and sort all by time
        if (db.dayOrder) {
            for (const [day, order] of Object.entries(db.dayOrder)) {
                if (db.itinerary[day] && Array.isArray(order)) {
                    const translatedOrder = order.map(id => initialIdMap[id] || id);
                    const orderMap = new Map(translatedOrder.map((id, i) => [id, i]));
                    // 僅保留在 dayOrder 中的項目，以過濾掉已刪除的項目，同時防範任何 API Pool 項目因 ID 不相容或同步時間差被意外過濾掉
                    db.itinerary[day] = db.itinerary[day].filter(item => 
                        orderMap.has(item.id) || 
                        !!item._poolId || 
                        !!item._productId || 
                        item.id.startsWith('api-')
                    );
                }
            }
        }
        // 依據時間自動排序所有日程項目
        for (const day of Object.keys(db.itinerary)) {
            db.itinerary[day] = sortItineraryByTime(db.itinerary[day]);
        }

        setSyncStatus('synced');
        return true;
    } catch (err) {
        console.warn('[Sync] 讀取 API 失敗:', err);
        setSyncStatus('offline');
        return false;
    }
}

async function addNewPoolCandidate() {
    const title = prompt('請輸入候選景點名稱：');
    if (!title || !title.trim()) return;
    const citySel = (prompt('城市（Kyoto / Osaka / Other）：', 'Kyoto') || '').trim();
    let city = 'Kyoto';
    if (citySel.toLowerCase() === 'osaka' || citySel === '大阪') {
        city = 'Osaka';
    } else if (citySel.toLowerCase() === 'other' || citySel === '其他') {
        city = 'Other';
    }
    const newItem = {
        id: 'new-' + Date.now(),
        city: city,
        title: title.trim(),
        desc: '',
        cost: 0,
        category: 'sightseeing',
        isEnabled: false,
        day: ''
    };
    db.attractionPool.push(newItem);
    renderPool();
    showSyncOverlay();
    try {
        const newId = await ensurePoolProduct(newItem);
        if (newId) {
            newItem._productId = newId;
            newItem.id = 'api-' + newId;
        }
        showToast('已新增候選景點！');
    } catch (e) {
        db.attractionPool = db.attractionPool.filter(p => p.id !== newItem.id);
        renderPool();
        alert('新增失敗：無法同步到伺服器');
    } finally {
        hideSyncOverlay();
    }
}

function openPoolEditModal(poolId) {
    const item = db.attractionPool.find(p => p.id === poolId);
    if (!item) return;
    document.getElementById('pool-modal-title').textContent = '編輯候選景點';
    document.getElementById('pool-edit-mode').value = 'edit';
    document.getElementById('pool-edit-id').value = poolId;
    document.getElementById('pool-edit-title').value = item.title || '';
    document.getElementById('pool-edit-desc').value = item.desc || '';
    document.getElementById('pool-edit-city').value = item.city || 'Kyoto';
    document.getElementById('pool-edit-category').value = item.category || 'sightseeing';
    document.getElementById('pool-edit-time').value = item.time || '';
    document.getElementById('pool-edit-location').value = item.location || '';
    document.getElementById('pool-edit-cost').value = item.cost || 0;
    const photos = (item.photos || []).join('\n');
    document.getElementById('pool-edit-photos').value = photos;
    updatePoolPhotoPreview();
    document.getElementById('pool-edit-modal').classList.add('open');
}

function openPoolAddModal() {
    document.getElementById('pool-modal-title').textContent = '新增候選景點';
    document.getElementById('pool-edit-mode').value = 'add';
    document.getElementById('pool-edit-id').value = '';
    document.getElementById('pool-edit-title').value = '';
    document.getElementById('pool-edit-desc').value = '';
    document.getElementById('pool-edit-city').value = 'Kyoto';
    document.getElementById('pool-edit-category').value = 'sightseeing';
    document.getElementById('pool-edit-time').value = '';
    document.getElementById('pool-edit-location').value = '';
    document.getElementById('pool-edit-cost').value = '';
    document.getElementById('pool-edit-photos').value = '';
    updatePoolPhotoPreview();
    document.getElementById('pool-edit-modal').classList.add('open');
}

function closePoolEditModal() {
    document.getElementById('pool-edit-modal').classList.remove('open');
}

function editPoolTime(poolId, itemId, el) {
    const item = db.attractionPool.find(p => p.id === poolId);
    if (!item) return;
    const current = item.time || '10:00 - 12:00';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = current;
    input.style.cssText = 'width:110px;font-size:0.8rem;padding:2px 6px;border:1px solid var(--primary);border-radius:4px;';
    el.replaceWith(input);
    input.focus();
    input.select();
    const save = async function() {
        const newTime = input.value.trim() || current;
        item.time = newTime;
        // Update local itinerary entry
        for (const events of Object.values(db.itinerary || {})) {
            const ev = events.find(e => e._poolId === poolId);
            if (ev) { ev.time = newTime; break; }
        }
        input.replaceWith(el);
        el.textContent = newTime;
        // Save to API
        if (item._productId) {
            try {
                const content = { city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '' };
                await hexAPI.updateProduct(item._productId, {
                    title: item.title || '未命名景點',
                    content: JSON.stringify(content),
                    category: '候選景點',
                    origin_price: item.cost || 0,
                    price: 0,
                    unit: '景點',
                    is_enabled: item.isEnabled ? 1 : 0,
                    num: 1
                });
            } catch (e) { console.warn('[EditTime] 同步失敗:', e.message); showToast('時間編輯失敗：' + e.message, 2000); }
        }
    };
    input.addEventListener('blur', save);
    input.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); input.blur(); } });
}

function updatePoolPhotoPreview() {
    const textarea = document.getElementById('pool-edit-photos');
    const preview = document.getElementById('pool-edit-photos-preview');
    const urls = (textarea.value || '').split('\n').map(s => s.trim()).filter(Boolean);
    preview.innerHTML = urls.map(url => `<img src="${url}" style="width:80px;height:80px;object-fit:cover;border-radius:6px;" onerror="this.style.display='none'">`).join('');
}

async function savePoolEdit(e) {
    e.preventDefault();
    const mode = document.getElementById('pool-edit-mode').value;
    const title = document.getElementById('pool-edit-title').value.trim();
    const desc = document.getElementById('pool-edit-desc').value.trim();
    const city = document.getElementById('pool-edit-city').value;
    const category = document.getElementById('pool-edit-category').value;
    const time = document.getElementById('pool-edit-time').value.trim();
    const location = document.getElementById('pool-edit-location').value.trim();
    const cost = parseInt(document.getElementById('pool-edit-cost').value) || 0;
    const photoText = document.getElementById('pool-edit-photos').value;
    const photos = (photoText || '').split('\n').map(s => s.trim()).filter(Boolean);

    if (mode === 'add') {
        const newItem = {
            id: 'new-' + Date.now(),
            city: city,
            title: title,
            desc: desc,
            cost: cost,
            category: category,
            time: time,
            location: location,
            photos: photos,
            isEnabled: false,
            day: ''
        };
        db.attractionPool.push(newItem);
        closePoolEditModal();
        renderPool();
        showSyncOverlay();
        try {
            const newId = await ensurePoolProduct(newItem);
            if (newId) {
                newItem._productId = newId;
                newItem.id = 'api-' + newId;
            }
            showToast('已新增候選景點！');
        } catch (err) {
            db.attractionPool = db.attractionPool.filter(p => p.id !== newItem.id);
            renderPool();
            showToast('新增失敗：' + err.message, 3000);
        } finally {
            hideSyncOverlay();
        }
        return;
    }

    // Edit mode
    const poolId = document.getElementById('pool-edit-id').value;
    const item = db.attractionPool.find(p => p.id === poolId);
    if (!item) return;

    item.title = title;
    item.desc = desc;
    item.city = city;
    item.category = category;
    item.time = time;
    item.location = location;
    item.cost = cost;
    item.photos = photos;
    if (!db.poolPhotos) db.poolPhotos = {};
    db.poolPhotos[item.id] = photos;

    closePoolEditModal();
    renderPool();
    showSyncOverlay();
    try {
        const content = { city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '' };
        const productData = {
            title: item.title,
            content: JSON.stringify(content),
            category: '候選景點',
            origin_price: item.cost || 0,
            price: 0,
            unit: item.isEnabled && item.day ? (item.day + '|' + (item.time || '10:00 - 12:00')) : '景點',
            is_enabled: item.isEnabled ? 1 : 0,
            num: 1
        };
        if (item._productId) {
            await hexAPI.updateProduct(item._productId, productData);
        } else {
            const newId = await ensurePoolProduct(item);
            if (newId) item._productId = newId;
        }
        // 更新每日日程顯示
        for (const [day, events] of Object.entries(db.itinerary || {})) {
            const ev = events.find(e => e._poolId === item.id);
            if (ev) {
                ev.title = item.title; ev.desc = item.desc; ev.cost = item.cost;
                ev.category = item.category; ev.time = item.time || ev.time;
                ev.location = item.location || ev.location; ev.photos = item.photos || [];
                // 依時間重新排序該天日程
                db.itinerary[day] = sortItineraryByTime(db.itinerary[day]);
            }
        }
        // 同步 scheduledItems 時間
        if (item.isEnabled && db.scheduledItems[item.id]) {
            db.scheduledItems[item.id] = item.day + '|' + (item.time || '10:00 - 12:00');
            await saveItineraryToRemote();
        }
        renderItineraryForDay(currentSelectedDay);
        showToast('已儲存！');
    } catch (err) {
        showToast('儲存失敗：' + err.message, 3000);
    } finally {
        hideSyncOverlay();
    }
}

// Hook up photo preview on input
document.addEventListener('DOMContentLoaded', function() {
    const photoInput = document.getElementById('pool-edit-photos');
    if (photoInput) {
        photoInput.addEventListener('input', updatePoolPhotoPreview);
    }
});

async function syncInitialPoolToAPI() {
    // For initial pool items (not from API), create products so they can be deleted
    if (!db || !db.attractionPool) return;
    for (const item of db.attractionPool) {
        if (item._productId || item.id.startsWith('api-')) continue; // Already from API
        // Check if product already exists
        const cacheKey = `pool:${item.id}`;
        if (getCacheId('pool', cacheKey)) continue; // Already synced
        try {
            await ensurePoolProduct(item);
        } catch (e) { /* skip */ }
    }
}


function cleanEvents(events) {
    return events.map(ev => {
        const e = { ...ev };
        if (e.photos) e.photos = e.photos.filter(p => !p.startsWith('data:'));
        return e;
    });
}

async function saveToRemote() {
    try { setSyncStatus('syncing'); if (!db) return; await saveAllToRemote(); setSyncStatus('synced'); }
    catch (err) { console.warn('[Sync] 寫入 API 失敗:', err); setSyncStatus('offline'); }
}

async function saveAllToRemote() {
    if (!db) return;
    removeCacheId('art', 'art:master:主行程資料');
    const dayOrder = {};
    const customEvents = {};
    for (const [day, events] of Object.entries(db.itinerary || {})) {
        dayOrder[day] = (events || []).map(e => e.id);
        customEvents[day] = (events || []).filter(e => !e._poolId && !e._productId && !e.id.startsWith('api-'));
    }
    await ensureArticle(ARTICLE_TAGS.MASTER, '主行程資料', JSON.stringify({ flights: db.flights, hotels: db.hotels, budget: db.budget, checklist: db.checklist, dayOrder: dayOrder, customEvents: customEvents, scheduledItems: db.scheduledItems || {}, poolPhotos: db.poolPhotos || {}, deletedPoolItems: db.deletedPoolItems || [] }));
    // 清空遠端留言板資料
    await ensureArticle(ARTICLE_TAGS.MESSAGES, '留言板資料', JSON.stringify([]));
}

async function saveMessagesToRemote() {
    if (!db) return;
    showSyncOverlay();
    try { setSyncStatus('syncing'); await ensureArticle(ARTICLE_TAGS.MESSAGES, '留言板資料', JSON.stringify(db.messages || [])); setSyncStatus('synced'); }
    catch (err) { console.warn('[Sync] 留言同步失敗:', err); setSyncStatus('offline'); }
    finally { hideSyncOverlay(); }
}

async function saveItineraryToRemote() {
    if (!db) return;
    showSyncOverlay();
    try {
        setSyncStatus('syncing');
        removeCacheId('art', 'art:master:主行程資料');
        const dayOrder = {};
        const customEvents = {};
        for (const [day, events] of Object.entries(db.itinerary || {})) {
            dayOrder[day] = (events || []).map(e => e.id);
            customEvents[day] = (events || []).filter(e => !e._poolId && !e._productId && !e.id.startsWith('api-'));
        }
        const masterPayload = { flights: db.flights, hotels: db.hotels, budget: db.budget, checklist: db.checklist, dayOrder: dayOrder, customEvents: customEvents, scheduledItems: db.scheduledItems || {}, poolPhotos: db.poolPhotos || {}, deletedPoolItems: db.deletedPoolItems || [] };
        console.log('[DEBUG saveItineraryToRemote] 儲存 scheduledItems:', JSON.parse(JSON.stringify(db.scheduledItems || {})));
        console.log('[DEBUG saveItineraryToRemote] 儲存 dayOrder:', JSON.parse(JSON.stringify(dayOrder)));
    await ensureArticle(ARTICLE_TAGS.MASTER, '主行程資料', JSON.stringify(masterPayload));
        setSyncStatus('synced');
    } catch (err) {
        console.warn('[Sync] 行程同步失敗:', err);
        setSyncStatus('offline');
        throw err;
    } finally {
        hideSyncOverlay();
    }
}

// LOGIN FLOW
function ensureLogin() {
    const token = getToken();
    if (!token || isTokenExpired()) {
        document.getElementById('login-modal').classList.add('open');
        return false;
    }
    return true;
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const errorEl = document.getElementById('login-error');
    const submitBtn = e.target.querySelector('button[type="submit"]');

    if (!email || !password) {
        errorEl.textContent = '請輸入 Email 與密碼';
        return;
    }

    try {
        errorEl.textContent = '';
        submitBtn.disabled = true;
        submitBtn.textContent = '登入中…';
        const result = await hexAPI.login(email, password);
        if (!result.success) throw new Error(result.message || '登入失敗');
        localStorage.setItem('kansai_trip_user_email', email);
        location.reload();
    } catch (err) {
        errorEl.textContent = err.message || '登入失敗，請檢查帳號密碼';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '登入';
    }
}

function updateLoginButton() {
    const btn = document.getElementById('login-btn');
    const token = getToken();
    const email = localStorage.getItem('kansai_trip_user_email');
    if (token && !isTokenExpired() && email) {
        btn.textContent = `使用者：${email.split('@')[0]}`;
        btn.title = '已登入';
    } else {
        btn.textContent = '🔑 登入';
        btn.title = '登入以同步資料';
    }
}

function handleLogout() {
    if (confirm('確定要登出嗎？登出後將無法同步資料到雲端。')) {
        // Clear all cached article IDs
        for (const key of Object.keys(localStorage)) {
            if (key.startsWith('article_id:')) localStorage.removeItem(key);
        }
        clearToken();
        localStorage.removeItem('kansai_trip_user_email');
        localStorage.removeItem('kansai_trip_db_cache');
        location.reload();
    }
}

// APP INITIALIZATION — loads from HexSchool API only
window.addEventListener('DOMContentLoaded', () => {
    initApp().then(() => { new MapleLeaves(); });
});

function renderAllUI() {
    if (!db.messages) db.messages = [];
    if (!db.attractionPool) db.attractionPool = [];
    if (!db.itinerary) db.itinerary = {};
    if (!db.deletedPoolItems) db.deletedPoolItems = [];

    updateCountdown();
    renderDashboard();
    renderDaysSidebar();
    renderItineraryForDay(currentSelectedDay);
    renderPool();
    renderChecklists();
    updateBudgetCalculations();
    renderSouvenirs();
}

async function initApp() {
    updateLoginButton();
    const loggedIn = ensureLogin();

    let cacheLoaded = false;
    if (loggedIn) {
        const cached = localStorage.getItem('kansai_trip_db_cache');
        if (cached) {
            try {
                db = JSON.parse(cached);
                cacheLoaded = true;
                console.log('[Init] 成功自 LocalStorage 快取載入資料，即時渲染 UI');
                renderAllUI();
            } catch (e) {
                console.warn('[Init] 解析快取資料失敗:', e);
            }
        }
    }

    if (!cacheLoaded) {
        db = JSON.parse(JSON.stringify(initialTripData));
        renderAllUI();
    }

    if (loggedIn) {
        // 若有快取，我們在背景默默進行 API 同步，不阻礙使用者操作；若無快取則顯示同步遮罩
        if (!cacheLoaded) {
            showSyncOverlay();
        }
        try {
            await loadFromRemote();
            // 同步完畢後儲存至本地快取並重新渲染 UI
            saveToLocalStorage();
            console.log('[Init] 從 API 同步資料成功，儲存快取並更新 UI');
            renderAllUI();
        } catch (e) {
            console.error('[Init] API 同步失敗:', e);
            // 若先前無快取且同步失敗，使用預設資料重新渲染以防萬一
            if (!cacheLoaded) {
                renderAllUI();
            }
        } finally {
            if (!cacheLoaded) {
                hideSyncOverlay();
            }
        }
    }
}

// SAVE STATE
// Stale-While-Revalidate caching: store db state in localStorage for instant loading
function saveToLocalStorage() {
    if (db) {
        try {
            localStorage.setItem('kansai_trip_db_cache', JSON.stringify(db));
        } catch (e) {
            console.warn('[Cache] 儲存至 LocalStorage 失敗:', e);
        }
    }
}

// TAB SWITCHER
function switchTab(tabId) {
    // Update tabs state
    activeTab = tabId;
    
    // Toggle visibility in DOM
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    // Update top nav highlight
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.outerHTML.includes(tabId)) {
            btn.classList.add('active');
        }
    });

    // Update bottom mobile nav highlight
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeMobileBtn = document.getElementById(`mob-nav-${tabId}`);
    if (activeMobileBtn) activeMobileBtn.classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// COUNTDOWN TIMER
function updateCountdown() {
    const startDateStr = db.startDate; // "2026-11-04"
    const targetDate = new Date(`${startDateStr}T00:00:00`);
    const today = new Date();
    
    // Set time portions to midnight to accurately count days
    targetDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const countdownEl = document.getElementById('countdown-days');
    const countdownBadge = document.getElementById('countdown-badge');
    
    if (diffDays > 0) {
        countdownEl.innerText = diffDays;
    } else if (diffDays === 0) {
        countdownEl.innerText = "0";
        countdownBadge.innerHTML = `<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg> 今天出發！✈️`;
        countdownBadge.style.background = 'rgba(46, 204, 113, 0.2)';
        countdownBadge.style.color = '#27ae60';
    } else {
        countdownEl.innerText = "已回國";
        countdownBadge.innerHTML = `🎉 旅途愉快結束！`;
        countdownBadge.style.background = 'rgba(30, 42, 56, 0.2)';
    }
}

// RENDER DASHBOARD
function renderDashboard() {
    // 1. Flights
    const flightsContainer = document.getElementById('flights-container');
    flightsContainer.innerHTML = '';
    
    db.flights.forEach(f => {
        const card = document.createElement('div');
        card.className = 'flight-card-inner';
        card.style.padding = '15px';
        card.style.background = 'var(--bg-base)';
        card.style.borderRadius = 'var(--radius-sm)';
        card.style.marginBottom = '15px';
        
        card.innerHTML = `
            <div class="flight-point">
                <h4>去程起飛</h4>
                <p class="airport">${f.from}</p>
                <p class="time">${f.depTime}</p>
            </div>
            <div class="flight-connector">
                <div>${f.number}</div>
                <div class="flight-line"></div>
                <div style="font-size:0.75rem; color:var(--text-muted)">座位類別：${f.seats}</div>
            </div>
            <div class="flight-point">
                <h4>到達降落</h4>
                <p class="airport">${f.to}</p>
                <p class="time">${f.arrTime}</p>
            </div>
            <div style="grid-column: 1 / -1; font-size:0.85rem; color:var(--text-muted); border-top:1px dashed rgba(0,0,0,0.05); padding-top:8px; margin-top:5px;">
                💡 備忘筆記：${f.notes} (去回航程總票價已列於預算中)
            </div>
        `;
        flightsContainer.appendChild(card);
    });

    // 2. Hotels
    const hotelsContainer = document.getElementById('hotels-container');
    hotelsContainer.innerHTML = '';
    
    db.hotels.forEach(h => {
        const item = document.createElement('div');
        item.className = 'hotel-item';
        
        item.innerHTML = `
            <div class="hotel-info-row">
                <span class="hotel-name">${h.name}</span>
                <span class="hotel-dates">${h.nights} 晚 • Check-in: ${h.checkIn.substring(5)}</span>
            </div>
            <div class="hotel-meta">
                📍 飯店地址: ${h.address} <br>
                ℹ️ 入住提示: ${h.notes}
            </div>
            <div>
                <a href="${h.link}" target="_blank" class="btn-link">在 Booking.com 開啟訂房頁面 ↗</a>
                &nbsp;&nbsp;
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.address)}" target="_blank" class="btn-link">開啟 Google 地圖導航 🗺️</a>
            </div>
        `;
        hotelsContainer.appendChild(item);
    });
}

// RENDER DAYS SIDEBAR
function renderDaysSidebar() {
    const sidebar = document.getElementById('days-sidebar');
    sidebar.innerHTML = '';
    
    for (let i = 0; i < 8; i++) {
        const d = new Date(2026, 10, 4 + i); // 2026-11-04 + i
        const dayStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
        const weekdayStr = ["日", "一", "二", "三", "四", "五", "六"][d.getDay()];
        const dayNum = i + 1;
        
        const btn = document.createElement('button');
        btn.className = `day-tab-btn ${dayStr === currentSelectedDay ? 'active' : ''}`;
        btn.onclick = () => selectDay(dayStr);
        
        btn.innerHTML = `
            <span class="day-title">Day ${dayNum}</span>
            <span class="day-date">${dayStr.substring(5)} (${weekdayStr})</span>
        `;
        
        sidebar.appendChild(btn);
    }
}

function parseStartTime(timeStr) {
    if (!timeStr) return 9999;
    const match = timeStr.match(/(\d{1,2}):(\d{2})/);
    if (match) {
        const hours = parseInt(match[1], 10);
        const minutes = parseInt(match[2], 10);
        return hours * 60 + minutes;
    }
    return 9999;
}

function sortItineraryByTime(dayEvents) {
    if (!dayEvents) return [];
    return dayEvents.sort((a, b) => {
        const timeA = parseStartTime(a.time);
        const timeB = parseStartTime(b.time);
        return timeA - timeB;
    });
}

function getDayNumber(dayStr) {
    const parts = dayStr.split('-').map(Number);
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    const base = new Date(2026, 10, 4); // 2026-11-04
    return Math.round((d - base) / 86400000) + 1;
}

function selectDay(dayStr) {
    currentSelectedDay = dayStr;
    renderDaysSidebar();
    
    const parts = dayStr.split('-').map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const weekdayStr = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
    const dayNum = getDayNumber(dayStr);
    
    document.getElementById('current-day-heading').innerHTML = `Day ${dayNum} - ${dayStr.replace(/-/g, '/')} (${weekdayStr})`;
    
    renderItineraryForDay(dayStr);
}

// RENDER ITINERARY FOR A DAY
function renderItineraryForDay(dayStr) {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';
    
    const items = db.itinerary[dayStr] || [];
    
    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <p>這天還沒有排入任何行程喔！</p>
                <p style="font-size:0.85rem; margin-top:5px;">您可以點選下方「景點候選池」快速加進來，或者手動新增項目。</p>
            </div>
        `;
        return;
    }

    // Display items in their stored order (manual reorder preserved)

    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        
        let categoryIcon = '📍';
        if (item.category === 'food') categoryIcon = '🍴';
        if (item.category === 'shopping') categoryIcon = '🛍️';
        if (item.category === 'transport') categoryIcon = '🚄';
        if (item.category === 'hotel') categoryIcon = '🏨';

        // Detect warnings or notes
        let warningHtml = '';
        if (item.desc.includes('⚠️') || item.desc.includes('踩雷') || item.desc.includes('宰客')) {
            warningHtml = `
                <div class="warning-tip" style="margin-top:8px; padding:6px 10px; font-size:0.8rem;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    <span>注意：${item.desc.substring(item.desc.indexOf('⚠️'))}</span>
                </div>
            `;
        }

        const hasPhotos = item.photos && item.photos.length > 0;
        const isPool = !!item._poolId;
        const editBtn = isPool
            ? `<button class="action-btn edit" title="編輯" onclick="openPoolEditModal('${item._poolId}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>`
            : `<button class="action-btn edit" title="編輯" onclick="openEditEventModal('${dayStr}', '${item.id}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>`;
        div.innerHTML = `
            <div class="timeline-card ${hasPhotos ? 'has-photo' : ''}">
                <div class="timeline-actions">
                    ${editBtn}
                    <button class="action-btn" title="刪除" onclick="deleteEvent('${dayStr}', '${item.id}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    </button>
                </div>
                <div class="timeline-card-body">
                    <div class="timeline-card-text">
                        <span class="timeline-time">${item.time}</span>
                        <h4 class="timeline-title">${categoryIcon} ${item.title}</h4>
                        <p class="timeline-desc">${item.desc}</p>
                        ${warningHtml}
                        <div class="timeline-meta">
                            ${item.location ? `
                                <div class="timeline-meta-item">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                    <a href="${item.location && item.location.startsWith('http') ? item.location : 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(item.location)}" target="_blank" style="color:inherit; text-decoration:none;">導航地圖</a>
                                </div>
                            ` : ''}
                            ${item.cost > 0 ? `
                                <div class="timeline-meta-item" style="color:var(--accent-green); font-weight:600;">
                                    💵 ¥ ${item.cost.toLocaleString()}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    ${hasPhotos ? `
                    <div class="timeline-card-photos">
                        ${item.photos.map(p => `
                            <div class="timeline-photo-item" onclick="openLightbox('${p.replace(/'/g, "\\'")}')">
                                <img src="${p}" alt="${item.title}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

// RENDER ATTRACTION POOL
function renderPool() {
    const container = document.getElementById('pool-items-container');
    container.innerHTML = '';

    let items = db.attractionPool;
    
    // Filter logic
    if (currentPoolFilter === 'Kyoto-sightseeing') {
        items = items.filter(i => i.city === 'Kyoto' && (i.category === 'sightseeing' || i.category === 'shopping'));
    } else if (currentPoolFilter === 'Kyoto-food') {
        items = items.filter(i => i.city === 'Kyoto' && i.category === 'food');
    } else if (currentPoolFilter === 'Osaka-sightseeing') {
        items = items.filter(i => i.city === 'Osaka' && (i.category === 'sightseeing' || i.category === 'shopping'));
    } else if (currentPoolFilter === 'Osaka-food') {
        items = items.filter(i => i.city === 'Osaka' && i.category === 'food');
    } else if (currentPoolFilter === 'Other') {
        items = items.filter(i => 
            (i.city !== 'Kyoto' && i.city !== 'Osaka') || 
            (i.category !== 'sightseeing' && i.category !== 'food' && i.category !== 'shopping')
        );
    }

    // 計算分頁
    const itemsPerPage = 10;
    const totalPages = Math.ceil(items.length / itemsPerPage) || 1;
    
    // 確保當前頁碼在有效範圍內
    if (currentPoolPage > totalPages) {
        currentPoolPage = totalPages;
    }
    if (currentPoolPage < 1) {
        currentPoolPage = 1;
    }

    const startIndex = (currentPoolPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);
    const pageItems = items.slice(startIndex, endIndex);

    if (items.length === 0) {
        container.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">無相符的候選項目</div>`;
        const paginationContainer = document.getElementById('pool-pagination');
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    pageItems.forEach(item => {
        const card = document.createElement('div');
        let cardClass = 'pool-card';
        if (item.category === 'food') {
            cardClass += ' food';
        } else if (item.category === 'other') {
            cardClass += ' other';
        } else if (item.city === 'Kyoto') {
            cardClass += ' kyoto';
        } else if (item.city === 'Osaka') {
            cardClass += ' osaka';
        } else {
            cardClass += ' other';
        }

        // Check warning flags
        let warningBanner = '';
        if (item.desc.includes('⚠️') || item.desc.includes('避坑') || item.desc.includes('踩雷')) {
            warningBanner = `<span class="tag" style="background:#FADBD8; color:#C0392B;">⚠️ 注意事項</span>`;
        }

        card.className = cardClass;
        
        const displayCity = item.city === 'Kyoto' ? '京都' : (item.city === 'Osaka' ? '大阪' : (item.city === 'Other' ? '其他' : (item.city || '其他')));
        const displayCategory = item.category === 'sightseeing' ? '景點' : (item.category === 'food' ? '美食' : (item.category === 'shopping' ? '購物' : '其他'));

        card.innerHTML = `
            <div class="pool-card-body">
                <div class="pool-card-info">
                    <div class="pool-card-header">
                        <h4 class="pool-card-title">${item.title}</h4>
                        <div class="pool-card-tags">
                            <span class="tag tag-city">${displayCity}</span>
                            <span class="tag tag-city">${displayCategory}</span>
                            ${item.cost > 0 ? `<span class="tag tag-cost">¥ ${item.cost.toLocaleString()}</span>` : ''}
                            ${warningBanner}
                        </div>
                    </div>
                    <p class="pool-card-desc">${item.desc}</p>
                    ${(item.photos && item.photos.length > 0) ? `<div class="pool-card-photos">${item.photos.map(p => `<img src="${p}" onerror="this.style.display='none'">`).join('')}</div>` : ''}
                </div>
            </div>
            <div class="pool-card-actions">
                <div style="font-size:0.8rem; color:var(--text-muted)">
                    狀態：${item.isEnabled && item.day ? '🟢 已排入行程' : '⚪ 候選未排'}
                </div>
                <div class="flex" style="gap:5px; justify-content:flex-end;"> 
                    <button class="btn btn-sm btn-outline" style="padding:5px 10px; font-size:0.78rem;" onclick="openPoolEditModal('${item.id}')">
                        編輯
                    </button>
                    <button class="btn btn-outline" style="padding:6px 12px; font-size:0.8rem;" onclick="deleteFromPool('${item.id}')">
                        刪除
                    </button>
                    <button class="btn btn-primary" style="padding:6px 12px; font-size:0.8rem;" onclick="addPoolItemToItinerary('${item.id}')">
                        排入日程
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // 渲染分頁控制器
    renderPoolPagination(totalPages);
}

// 渲染分頁控制器函式
function renderPoolPagination(totalPages) {
    const paginationContainer = document.getElementById('pool-pagination');
    if (!paginationContainer) return;

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let html = `
        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.85rem;" ${currentPoolPage === 1 ? 'disabled' : ''} onclick="changePoolPage(${currentPoolPage - 1})">
            ◀ 上一頁
        </button>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-main);">
            第 ${currentPoolPage} 頁 / 共 ${totalPages} 頁
        </span>
        <button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.85rem;" ${currentPoolPage === totalPages ? 'disabled' : ''} onclick="changePoolPage(${currentPoolPage + 1})">
            下一頁 ▶
        </button>
    `;
    paginationContainer.innerHTML = html;
}

// 切換頁碼函式
function changePoolPage(targetPage) {
    currentPoolPage = targetPage;
    renderPool();
    // 捲動回候選池頂部，方便閱讀
    const poolSection = document.getElementById('pool');
    if (poolSection) {
        poolSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function filterPool(category, btnEl) {
    currentPoolFilter = category;
    currentPoolPage = 1; // 重設分頁
    
    document.querySelectorAll('.filter-chip').forEach(btn => {
        btn.classList.remove('active');
    });
    btnEl.classList.add('active');
    
    renderPool();
}

// RENDER CHECKLISTS
function renderChecklists() {
    const boyContainer = document.getElementById('checklist-boy-container');
    const girlContainer = document.getElementById('checklist-girl-container');
    
    boyContainer.innerHTML = '';
    girlContainer.innerHTML = '';

    let totalBoy = 0;
    let doneBoy = 0;
    let totalGirl = 0;
    let doneGirl = 0;

    // Mini Dashboard checklist selector
    const miniChecklist = document.getElementById('mini-checklist-container');
    miniChecklist.innerHTML = '';
    let miniCount = 0;

    db.checklist.forEach(item => {
        const li = document.createElement('li');
        li.className = `checklist-item ${item.done ? 'checked' : ''}`;
        li.onclick = () => toggleChecklistItem(item.id);
        
        li.innerHTML = `
            <input type="checkbox" ${item.done ? 'checked' : ''} onclick="event.stopPropagation(); toggleChecklistItem('${item.id}')">
            <span>${item.item}</span>
        `;

        // Category allocation
        if (item.category === 'both' || item.category === 'boy') {
            boyContainer.appendChild(li);
            totalBoy++;
            if (item.done) doneBoy++;
        }
        
        if (item.category === 'both' || item.category === 'girl') {
            // Clone item for girl container if it is 'both'
            if (item.category === 'both') {
                const cloneLi = document.createElement('li');
                cloneLi.className = `checklist-item ${item.done ? 'checked' : ''}`;
                cloneLi.onclick = () => toggleChecklistItem(item.id);
                cloneLi.innerHTML = `
                    <input type="checkbox" ${item.done ? 'checked' : ''} onclick="event.stopPropagation(); toggleChecklistItem('${item.id}')">
                    <span>${item.item}</span>
                `;
                girlContainer.appendChild(cloneLi);
            } else {
                girlContainer.appendChild(li);
            }
            totalGirl++;
            if (item.done) doneGirl++;
        }

        // Add to Dashboard mini view (only first 4 undone items)
        if (!item.done && miniCount < 4) {
            const miniDiv = document.createElement('div');
            miniDiv.className = 'checklist-item';
            miniDiv.style.padding = '4px 0';
            miniDiv.onclick = () => { toggleChecklistItem(item.id); };
            miniDiv.innerHTML = `
                <input type="checkbox" onclick="event.stopPropagation(); toggleChecklistItem('${item.id}')">
                <span style="font-size:0.9rem;">${item.item}</span>
            `;
            miniChecklist.appendChild(miniDiv);
            miniCount++;
        }
    });

    if (miniCount === 0) {
        miniChecklist.innerHTML = `<div style="font-size:0.9rem; color:var(--accent-green); font-weight:600;">🎉 所有準備項目都打勾了！隨時可以出發！</div>`;
    }

    // Update Progress bars
    const progressBoyPercent = totalBoy > 0 ? (doneBoy / totalBoy) * 100 : 0;
    const progressGirlPercent = totalGirl > 0 ? (doneGirl / totalGirl) * 100 : 0;

    document.getElementById('pack-progress-label-boy').innerText = `進度：${doneBoy} / ${totalBoy} (${Math.round(progressBoyPercent)}%)`;
    document.getElementById('pack-progress-fill-boy').style.width = `${progressBoyPercent}%`;

    document.getElementById('pack-progress-label-girl').innerText = `進度：${doneGirl} / ${totalGirl} (${Math.round(progressGirlPercent)}%)`;
    document.getElementById('pack-progress-fill-girl').style.width = `${progressGirlPercent}%`;
}

function toggleChecklistItem(id) {
    const item = db.checklist.find(c => c.id === id);
    if (item) {
        item.done = !item.done;
        renderChecklists();
        saveItineraryToRemote().catch(err => {
            console.warn('[Checklist] 同步失敗:', err.message);
        });
    }
}

// UPDATE BUDGET TOTALS
function updateBudgetCalculations() {
    // Static values (單人費用需除以 2)
    const flightTotalTwd = db.flights.reduce((sum, f) => sum + f.price, 0) / 2;
    const hotelTotalTwd = db.hotels.reduce((sum, h) => sum + h.price, 0) / 2;
    const rate = 4.5;

    const flightTotalJpy = Math.round(flightTotalTwd * rate);
    const hotelTotalJpy = Math.round(hotelTotalTwd * rate);

    // Dynamic values from itinerary (原幣值為 JPY)
    let activityTotalJpy = 0;
    Object.values(db.itinerary).forEach(dayEvents => {
        dayEvents.forEach(e => {
            if (e.cost && !isNaN(e.cost)) {
                activityTotalJpy += parseInt(e.cost);
            }
        });
    });
    const activityTotalTwd = Math.round(activityTotalJpy / rate);

    const totalSumTwd = flightTotalTwd + hotelTotalTwd + activityTotalTwd;
    const totalSumJpy = flightTotalJpy + hotelTotalJpy + activityTotalJpy;

    document.getElementById('budget-flights').innerText = `NT$ ${flightTotalTwd.toLocaleString()}`;
    document.getElementById('budget-flights-jpy').innerText = `¥ ${flightTotalJpy.toLocaleString()}`;
    document.getElementById('budget-hotels').innerText = `NT$ ${hotelTotalTwd.toLocaleString()}`;
    document.getElementById('budget-hotels-jpy').innerText = `¥ ${hotelTotalJpy.toLocaleString()}`;
    document.getElementById('budget-activities').innerText = `NT$ ${activityTotalTwd.toLocaleString()}`;
    document.getElementById('budget-activities-jpy').innerText = `¥ ${activityTotalJpy.toLocaleString()}`;
    document.getElementById('budget-total').innerText = `NT$ ${totalSumTwd.toLocaleString()}`;
    document.getElementById('budget-total-jpy').innerText = `¥ ${totalSumJpy.toLocaleString()}`;
    document.getElementById('budget-sum').innerText = totalSumTwd.toLocaleString();
    document.getElementById('budget-sum-jpy').innerText = totalSumJpy.toLocaleString();
}

// EXPANDABLE BUDGET DETAILS
function toggleBudgetDetail() {
    const panel = document.getElementById('budget-detail-panel');
    if (!panel) return;
    if (panel.style.display === 'none' || panel.style.display === '') {
        renderBudgetDetail();
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}

function renderBudgetDetail() {
    const container = document.getElementById('budget-detail-content');
    if (!container) return;
    container.innerHTML = '';

    const rate = 4.5;

    // 1. Flights Section
    let flightHtml = '';
    let flightSumTwd = 0;
    db.flights.forEach(f => {
        const singlePriceTwd = f.price / 2;
        flightSumTwd += singlePriceTwd;
        const singlePriceJpy = Math.round(singlePriceTwd * rate);
        flightHtml += `
            <div class="budget-detail-item">
                <span class="item-label">✈️ ${f.number} (${f.from} ➔ ${f.to})</span>
                <span class="item-cost-jpy">¥ ${singlePriceJpy.toLocaleString()}</span>
                <span class="item-cost-twd">NT$ ${singlePriceTwd.toLocaleString()}</span>
            </div>
        `;
    });

    // 2. Hotels Section
    let hotelHtml = '';
    let hotelSumTwd = 0;
    db.hotels.forEach(h => {
        const singlePriceTwd = h.price / 2;
        hotelSumTwd += singlePriceTwd;
        const singlePriceJpy = Math.round(singlePriceTwd * rate);
        hotelHtml += `
            <div class="budget-detail-item">
                <span class="item-label">🏨 ${h.name} (${h.nights} 晚)</span>
                <span class="item-cost-jpy">¥ ${singlePriceJpy.toLocaleString()}</span>
                <span class="item-cost-twd">NT$ ${singlePriceTwd.toLocaleString()}</span>
            </div>
        `;
    });

    // 3. Activities Section
    let activityHtml = '';
    let activitySumJpy = 0;
    let activitySumTwd = 0;

    // Helper to get day number (Day 1, Day 2, etc.)
    const getDayNum = (dayStr) => {
        const parts = dayStr.split('-').map(Number);
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        const base = new Date(2026, 10, 4); // 2026-11-04
        return Math.round((d - base) / 86400000) + 1;
    };

    Object.entries(db.itinerary).forEach(([day, events]) => {
        const dayNum = getDayNum(day);
        events.forEach(e => {
            if (e.cost && !isNaN(e.cost) && parseInt(e.cost) > 0) {
                const costJpy = parseInt(e.cost);
                const costTwd = Math.round(costJpy / rate);
                activitySumJpy += costJpy;
                activitySumTwd += costTwd;
                activityHtml += `
                    <div class="budget-detail-item">
                        <span class="item-label">Day ${dayNum} - ${e.title}</span>
                        <span class="item-cost-jpy">¥ ${costJpy.toLocaleString()}</span>
                        <span class="item-cost-twd">NT$ ${costTwd.toLocaleString()}</span>
                    </div>
                `;
            }
        });
    });

    if (flightHtml === '') flightHtml = '<div class="budget-detail-empty">無航班費用</div>';
    if (hotelHtml === '') hotelHtml = '<div class="budget-detail-empty">無住宿費用</div>';
    if (activityHtml === '') activityHtml = '<div class="budget-detail-empty">無行程費用</div>';

    container.innerHTML = `
        <div class="budget-detail-section">
            <div class="budget-detail-section-header">
                <span>✈️ 航班費用 (單人)</span>
                <span>NT$ ${flightSumTwd.toLocaleString()}</span>
            </div>
            <div class="budget-detail-section-body">
                ${flightHtml}
            </div>
        </div>
        <div class="budget-detail-section">
            <div class="budget-detail-section-header">
                <span>🏨 住宿費用 (單人)</span>
                <span>NT$ ${hotelSumTwd.toLocaleString()}</span>
            </div>
            <div class="budget-detail-section-body">
                ${hotelHtml}
            </div>
        </div>
        <div class="budget-detail-section">
            <div class="budget-detail-section-header">
                <span>💵 行程費用 (單人)</span>
                <span>NT$ ${activitySumTwd.toLocaleString()}</span>
            </div>
            <div class="budget-detail-section-body">
                ${activityHtml}
            </div>
        </div>
    `;
}

// ==========================================
// PHOTO MANAGEMENT
// ==========================================
let currentEventPhotos = [];

function addPhotoByUrl() {
    const input = document.getElementById('event-photo-url');
    const url = input.value.trim();
    if (!url) return;
    currentEventPhotos.push(url);
    input.value = '';
    renderPhotoPreview();
}

function addPhotoByFile(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        currentEventPhotos.push(e.target.result);
        renderPhotoPreview();
        input.value = '';
    };
    reader.readAsDataURL(file);
}

function removePhotoFromModal(index) {
    currentEventPhotos.splice(index, 1);
    renderPhotoPreview();
}

function renderPhotoPreview() {
    const container = document.getElementById('photo-preview');
    container.innerHTML = currentEventPhotos.map((src, i) => `
        <div class="photo-preview-item">
            <img src="${src}" alt="照片 ${i+1}">
            <button type="button" class="photo-remove" onclick="removePhotoFromModal(${i})">&times;</button>
        </div>
    `).join('');
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    lb.classList.add('open');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
}

// ADD / EDIT MODAL OPEN
function openAddEventModal() {
    document.getElementById('modal-title-text').innerText = "新增行程項目";
    document.getElementById('event-form').reset();
    document.getElementById('event-id').value = '';
    document.getElementById('event-day').value = currentSelectedDay;
    currentEventPhotos = [];
    renderPhotoPreview();
    
    document.getElementById('event-modal').classList.add('open');
}

function openEditEventModal(dayStr, id) {
    const items = db.itinerary[dayStr] || [];
    const item = items.find(e => e.id === id);
    
    if (!item) return;

    document.getElementById('modal-title-text').innerText = "編輯行程項目";
    document.getElementById('event-id').value = item.id;
    document.getElementById('event-day').value = dayStr;
    document.getElementById('event-title-input').value = item.title;
    document.getElementById('event-time-input').value = item.time;
    document.getElementById('event-category-select').value = item.category || 'sightseeing';
    document.getElementById('event-cost-input').value = item.cost || '';
    document.getElementById('event-location-input').value = item.location || '';
    document.getElementById('event-desc-input').value = item.desc || '';
    currentEventPhotos = item.photos ? [...item.photos] : [];
    renderPhotoPreview();

    document.getElementById('event-modal').classList.add('open');
}

function closeEventModal() {
    document.getElementById('event-modal').classList.remove('open');
}

// SAVE EVENT (ADD OR UPDATE)
function saveEvent(e) {
    e.preventDefault();

    const id = document.getElementById('event-id').value;
    const dayStr = document.getElementById('event-day').value;
    const title = document.getElementById('event-title-input').value;
    const time = document.getElementById('event-time-input').value;
    const category = document.getElementById('event-category-select').value;
    const cost = parseInt(document.getElementById('event-cost-input').value) || 0;
    const location = document.getElementById('event-location-input').value;
    const desc = document.getElementById('event-desc-input').value;

    const photos = currentEventPhotos.length > 0 ? currentEventPhotos : [];

    if (id) {
        // Edit existing
        const items = db.itinerary[dayStr] || [];
        const itemIndex = items.findIndex(ev => ev.id === id);
        if (itemIndex > -1) {
            db.itinerary[dayStr][itemIndex] = { id, title, time, category, cost, location, desc, photos };
        }
    } else {
        // Add new
        const newId = 'evt-' + Date.now();
        if (!db.itinerary[dayStr]) {
            db.itinerary[dayStr] = [];
        }
        db.itinerary[dayStr].push({ id: newId, title, time, category, cost, location, desc, photos });
    }

    // 依時間自動排序
    db.itinerary[dayStr] = sortItineraryByTime(db.itinerary[dayStr]);

    closeEventModal();
    renderItineraryForDay(dayStr);
    updateBudgetCalculations();
    saveItineraryToRemote().catch(err => {
        console.warn('[SaveEvent] 同步失敗:', err.message);
    });
}

// MOVE EVENT (UP / DOWN)
async function moveEvent(dayStr, index, direction) {
    const items = db.itinerary[dayStr];
    if (!items) return;

    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= items.length) return;

    const temp = items[index];
    items[index] = items[targetIndex];
    items[targetIndex] = temp;

    renderItineraryForDay(dayStr);
    try {
        await saveItineraryToRemote();
    } catch (err) {
        // Rollback
        const t = items[index];
        items[index] = items[targetIndex];
        items[targetIndex] = t;
        renderItineraryForDay(dayStr);
        console.warn('[MoveEvent] 同步失敗:', err.message);
    }
}

// DELETE EVENT (pool items: set isEnabled=false; flights/hotels: remove from itinerary)
async function deleteEvent(dayStr, id) {
    if (!confirm("確定要將這個日程項目移除嗎？")) return;

    const items = db.itinerary[dayStr] || [];
    const item = items.find(e => e.id === id);

    if (item && item._poolId) {
        // Pool item: just set isEnabled to false
        const poolItem = db.attractionPool.find(p => p.id === item._poolId);
        console.log('[DEBUG deleteEvent] 移除 pool item:', { id, _poolId: item._poolId, poolItemFound: !!poolItem, _productId: poolItem?._productId });
        db.itinerary[dayStr] = items.filter(e => e.id !== id);
        if (poolItem) {
            poolItem.isEnabled = false;
            poolItem.day = '';
            if (db.scheduledItems) delete db.scheduledItems[item._poolId];
            console.log('[DEBUG deleteEvent] 刪除後 scheduledItems:', JSON.parse(JSON.stringify(db.scheduledItems || {})));
            if (poolItem._productId) {
                const content = { city: poolItem.city, desc: poolItem.desc, cost: poolItem.cost, category: poolItem.category, day: '', photos: poolItem.photos || [], location: poolItem.location || '', time: poolItem.time || '' };
                const updateData = {
                    title: poolItem.title || '未命名景點',
                    content: JSON.stringify(content),
                    category: '候選景點',
                    origin_price: poolItem.cost || 0,
                    price: 0,
                    unit: '景點',
                    is_enabled: 0,
                    num: 1
                };
                console.log('[DEBUG deleteEvent] 更新產品 is_enabled=0, productId:', poolItem._productId, updateData);
                try {
                    await hexAPI.updateProduct(poolItem._productId, updateData);
                    console.log('[DEBUG deleteEvent] 產品更新成功');
                } catch(e) { console.warn('[Delete] 更新 is_enabled 失敗:', e.message); }
            } else {
                console.warn('[DEBUG deleteEvent] poolItem 沒有 _productId，無法更新 API 產品');
            }
            await saveItineraryToRemote();
            console.log('[DEBUG deleteEvent] saveItineraryToRemote 完成');
        }
        renderItineraryForDay(dayStr);
        renderPool();
        showToast('已從行程中移除！');
    } else {
        // Flight/hotel: remove from itinerary and save master
        db.itinerary[dayStr] = items.filter(e => e.id !== id);
        saveToLocalStorage();
        try {
            await saveItineraryToRemote();
            renderItineraryForDay(dayStr);
            updateBudgetCalculations();
            showToast('刪除成功！');
        } catch (err) {
            db.itinerary[dayStr] = items;
            saveToLocalStorage();
            renderItineraryForDay(dayStr);
            updateBudgetCalculations();
            alert('刪除失敗：無法同步到伺服器');
        }
    }
}

// ADD POOL ITEM TO ITINERARY (set isEnabled=1 and day via API)
async function addPoolItemToItinerary(poolId) {
    const item = db.attractionPool.find(p => p.id === poolId);
    if (!item) return;

    const days = Object.keys(db.itinerary).sort();
    let promptText = "請輸入您想排入的天數數字：\n\n";
    days.forEach((dayStr, index) => {
        promptText += `[${index + 1}] Day ${index + 1} (${dayStr.substring(5)})\n`;
    });

    const userSelection = prompt(promptText, "1");
    if (userSelection === null) return;

    const selectionIndex = parseInt(userSelection, 10) - 1;
    if (isNaN(selectionIndex) || selectionIndex < 0 || selectionIndex >= days.length) {
        alert('請輸入有效的正整數（從 1 開始）');
        return;
    }
    const targetDay = days[selectionIndex];

    const prevEnabled = item.isEnabled;
    const prevDay = item.day;

    item.isEnabled = true;
    item.day = targetDay;

    const newEntry = {
        id: item.id,
        _poolId: item.id,
        time: item.time || '10:00 - 12:00',
        title: item.title,
        desc: item.desc,
        cost: item.cost || 0,
        category: item.category,
        photos: item.photos || [],
        location: item.location || item.title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,''),
        _productId: item._productId
    };
    db.itinerary[targetDay].push(newEntry);
    db.itinerary[targetDay] = sortItineraryByTime(db.itinerary[targetDay]);
    renderPool();
    selectDay(targetDay);
    showSyncOverlay();

    try {
        const content = { city: item.city, desc: item.desc, cost: item.cost, category: item.category, day: targetDay, photos: item.photos || [], location: item.location || '', time: item.time || '' };
        const productData = {
            title: item.title || '未命名景點',
            content: JSON.stringify(content),
            category: '候選景點',
            origin_price: item.cost || 0,
            price: 0,
            unit: targetDay + '|' + (item.time || '10:00 - 12:00'),
            is_enabled: 1,
            num: 1
        };
        // 用 ensurePoolProduct 確保產品存在（自動找或建）
        const pid = item._productId || await ensurePoolProduct(item);
        if (!pid) throw new Error('無法建立或找到產品');
        if (!item._productId) {
            item._productId = pid;
            const newApiId = 'api-' + pid;
            const oldId = item.id;
            item.id = newApiId;
            newEntry._productId = pid;
            newEntry.id = newApiId;
            if (db.scheduledItems[oldId]) {
                db.scheduledItems[newApiId] = db.scheduledItems[oldId];
                delete db.scheduledItems[oldId];
            }
        }
        removeCacheId('pool', `pool:${item.id}`);
        console.log('[DEBUG addPoolItemToItinerary] 更新產品 is_enabled=1, productId:', pid, productData);
        await hexAPI.updateProduct(pid, productData);
        console.log('[DEBUG addPoolItemToItinerary] 產品更新成功');
        if (!db.scheduledItems) db.scheduledItems = {};
        db.scheduledItems[item.id] = targetDay + '|' + (item.time || '10:00 - 12:00');
        console.log('[DEBUG addPoolItemToItinerary] scheduledItems 更新:', JSON.parse(JSON.stringify(db.scheduledItems)));
        await saveItineraryToRemote();
        console.log('[DEBUG addPoolItemToItinerary] saveItineraryToRemote 完成');
        updateBudgetCalculations();
        showToast(`已將「${item.title}」排入 Day ${selectionIndex + 1}！`, 2000);
    } catch (err) {
        item.isEnabled = prevEnabled;
        item.day = prevDay;
        db.itinerary[targetDay] = db.itinerary[targetDay].filter(e => e._poolId !== item.id);
        selectDay(targetDay);
        renderPool();
        showToast('加入失敗：' + err.message, 3000);
    } finally {
        hideSyncOverlay();
        saveToLocalStorage();
    }
}

// DELETE FROM POOL
async function deleteFromPool(id) {
    console.log('[DEBUG deleteFromPool] 開始刪除候選項目, id:', id);
    if (!confirm("確定要將這個候選景點從清單中完全移除嗎？")) {
        console.log('[DEBUG deleteFromPool] 使用者取消了刪除確認');
        return;
    }
    const item = db.attractionPool.find(p => p.id === id);
    console.log('[DEBUG deleteFromPool] 找到待刪除項目:', item ? { id: item.id, title: item.title, _productId: item._productId } : '未找到項目');

    if (!item) {
        console.warn('[DEBUG deleteFromPool] 找不到該項目，無法執行刪除');
        return;
    }

    const backup = [...db.attractionPool];
    const savedScheduled = (db.scheduledItems && item) ? db.scheduledItems[item.id] : null;
    const backupDeleted = db.deletedPoolItems ? [...db.deletedPoolItems] : [];

    console.log('[DEBUG deleteFromPool] 正在從記憶體 db.attractionPool 中移除項目...');
    db.attractionPool = db.attractionPool.filter(p => p.id !== id);

    if (!db.deletedPoolItems) db.deletedPoolItems = [];
    if (!db.deletedPoolItems.includes(id)) {
        console.log('[DEBUG deleteFromPool] 將項目 ID 紀錄到已刪除列表 (deletedPoolItems):', id);
        db.deletedPoolItems.push(id);
    }

    if (db.scheduledItems) {
        console.log('[DEBUG deleteFromPool] 正在從 scheduledItems 移除項目 ID:', item.id);
        delete db.scheduledItems[item.id];
    }
    if (db.poolPhotos) {
        console.log('[DEBUG deleteFromPool] 正在從 poolPhotos 移除項目 ID:', item.id);
        delete db.poolPhotos[item.id];
    }

    console.log('[DEBUG deleteFromPool] 正在從 db.itinerary 中排除與此項目關聯的行程事件...');
    for (const [day, events] of Object.entries(db.itinerary || {})) {
        const origLength = events.length;
        db.itinerary[day] = events.filter(e => e._poolId !== item.id);
        const removedCount = origLength - db.itinerary[day].length;
        if (removedCount > 0) {
            console.log(`[DEBUG deleteFromPool] 已從 Day ${day} 移除 ${removedCount} 個行程事件`);
        }
    }

    console.log('[DEBUG deleteFromPool] 重新渲染網頁候選池與行程表...');
    renderPool();
    renderItineraryForDay(currentSelectedDay);

    try {
        setSyncStatus('syncing');
        if (item._productId) {
            console.log('[DEBUG deleteFromPool] 項目有對應的遠端 _productId:', item._productId, '，呼叫 hexAPI.deleteProduct...');
            await hexAPI.deleteProduct(item._productId);
            console.log('[DEBUG deleteFromPool] hexAPI.deleteProduct 呼叫成功');
            removeCacheId('pool', `pool:${id}`);
        } else {
            console.log('[DEBUG deleteFromPool] 項目無 _productId，嘗試在遠端搜尋是否有同名產品...');
            const allProducts = await hexAPI.getProducts();
            const found = allProducts.find(p => p.title === item.title && p.category === '候選景點');
            if (found) {
                console.log('[DEBUG deleteFromPool] 找到同名遠端產品, ID:', found.id, '，開始執行刪除...');
                await hexAPI.deleteProduct(found.id);
                console.log('[DEBUG deleteFromPool] hexAPI.deleteProduct 呼叫成功');
                removeCacheId('pool', `pool:${id}`);
            } else {
                console.log('[DEBUG deleteFromPool] 遠端查無同名產品，無須呼叫刪除 API');
            }
        }

        console.log('[DEBUG deleteFromPool] 正在呼叫 saveItineraryToRemote 同步行程與排程狀態至遠端 Master...');
        await saveItineraryToRemote();
        console.log('[DEBUG deleteFromPool] saveItineraryToRemote 同步成功');

        setSyncStatus('synced');
        showToast('刪除成功！');
    } catch (e) {
        console.error('[DEBUG deleteFromPool] 刪除失敗或同步失敗:', e);
        db.attractionPool = backup;
        db.deletedPoolItems = backupDeleted;
        if (savedScheduled) db.scheduledItems[item.id] = savedScheduled;
        console.log('[DEBUG deleteFromPool] 已還原資料庫備份並重新渲染');
        renderPool();
        renderItineraryForDay(currentSelectedDay);
        setSyncStatus('offline');
        alert('刪除失敗：' + e.message);
    }
}

// EXPORT JSON DATA
function exportDataToJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(db, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "kansai_trip_itinerary.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// TRIGGER IMPORT FILE SELECT
function triggerImportFileInput() {
    document.getElementById('import-file-input').click();
}

// IMPORT JSON DATA
function importDataFromJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsedData = JSON.parse(e.target.result);
            
            // Simple validation structure
            if (parsedData.flights && parsedData.hotels && parsedData.itinerary) {
                db = parsedData;
                initApp().then(() => {
                    alert("行程資料已成功匯入！");
                }).catch(err => {
                    alert("匯入後初始化失敗：" + err.message);
                });
            } else {
                alert("匯入失敗：這似乎不是正確的日程 JSON 格式。");
            }
        } catch (err) {
            alert("匯入失敗，解析 JSON 時出錯：" + err.message);
        }
    };
    reader.readAsText(file);
}

// EXPORT SELF-CONTAINED HTML
// This is a premium function that serializes the current state back into the html file itself.
function exportSelfContainedHTML() {
    // Fetch current document HTML code
    const currentHTML = document.documentElement.outerHTML;
    
    const startMarker = "// [INITIAL_DATA_START]";
    const endMarker = "// [INITIAL_DATA_END]";
    
    const startIdx = currentHTML.indexOf(startMarker);
    const endIdx = currentHTML.indexOf(endMarker);
    
    if (startIdx === -1 || endIdx === -1 || startIdx >= endIdx) {
        alert("無法打包：標記區間未找到，請聯絡開發人員。");
        return;
    }
    
    // Extract content before and after the block
    const beforeBlock = currentHTML.substring(0, startIdx + startMarker.length);
    const afterBlock = currentHTML.substring(endIdx);
    
    // Format the current db as the new initial data
    const newInitialDataBlock = "\n        const initialTripData = " + JSON.stringify(db, null, 4) + ";\n        ";
    
    const updatedHTML = beforeBlock + newInitialDataBlock + afterBlock;
    
    const blob = new Blob([updatedHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", url);
    downloadAnchor.setAttribute("download", "index.html");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    
    alert("已成功下載「自帶最新數據」的 standalone 網頁檔案！您可以將此檔案覆蓋雲端硬碟的 index.html 或是用作備份。");
}


class MapleLeaves {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.leaves = [];
        this.maxLeaves = 10; // Reduced quantity to be less distracting
        this.colors = [
            'rgba(231, 76, 60, 0.35)',   // Soft translucent Red
            'rgba(230, 126, 34, 0.35)',  // Soft translucent Orange
            'rgba(241, 196, 15, 0.35)',  // Soft translucent Yellow/Gold
            'rgba(192, 57, 43, 0.35)',   // Translucent Deep Red
            'rgba(211, 84, 0, 0.35)'     // Translucent Rust Orange
        ];

        // Pre-render leaf templates for high performance
        this.leafTemplates = this.colors.map(color => {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = 64;
            tempCanvas.height = 64;
            const tempCtx = tempCanvas.getContext('2d');
            this.drawRawLeaf(tempCtx, 32, 32, 20, color);
            return tempCanvas;
        });
        
        // Setup canvas styles
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100vw';
        this.canvas.style.height = '100vh';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1'; // Send behind cards and text content so it doesn't block them
        document.body.appendChild(this.canvas);
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Initialize leaves
        for (let i = 0; i < this.maxLeaves; i++) {
            this.leaves.push(this.createLeaf(true));
        }
        
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createLeaf(randomY = false) {
        const templateIdx = Math.floor(Math.random() * this.colors.length);
        return {
            x: Math.random() * this.canvas.width,
            y: randomY ? Math.random() * this.canvas.height : -20,
            size: Math.random() * 8 + 8, // Smaller leaves (8px to 16px) to keep them subtle
            templateIdx: templateIdx,
            speedY: Math.random() * 1.0 + 0.5,
            speedX: Math.random() * 0.6 - 0.3,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 1.2 - 0.6,
            oscillationSpeed: Math.random() * 0.015 + 0.008,
            oscillationAngle: Math.random() * Math.PI,
            swayRange: Math.random() * 1.2 + 0.4
        };
    }

    drawRawLeaf(ctx, x, y, size, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = color;
        
        // Draw a simplified 5-pointed maple leaf shape
        ctx.beginPath();
        ctx.moveTo(0, -size);
        
        // Center lobe
        ctx.lineTo(size * 0.15, -size * 0.4);
        ctx.lineTo(size * 0.4, -size * 0.6);
        ctx.lineTo(size * 0.3, -size * 0.2);
        
        // Right top lobe
        ctx.lineTo(size * 0.7, -size * 0.1);
        ctx.lineTo(size * 0.35, size * 0.1);
        
        // Right bottom lobe
        ctx.lineTo(size * 0.55, size * 0.4);
        ctx.lineTo(size * 0.18, size * 0.25);
        
        // Bottom right detail
        ctx.lineTo(size * 0.25, size * 0.6);
        ctx.lineTo(0, size * 0.35);
        
        // Bottom left detail
        ctx.lineTo(-size * 0.25, size * 0.6);
        ctx.lineTo(-size * 0.18, size * 0.25);
        
        // Left bottom lobe
        ctx.lineTo(-size * 0.55, size * 0.4);
        ctx.lineTo(-size * 0.35, size * 0.1);
        
        // Left top lobe
        ctx.lineTo(-size * 0.7, -size * 0.1);
        ctx.lineTo(-size * 0.3, -size * 0.2);
        
        ctx.lineTo(-size * 0.4, -size * 0.6);
        ctx.lineTo(-size * 0.15, -size * 0.4);
        
        ctx.closePath();
        ctx.fill();
        
        // Stem
        ctx.beginPath();
        ctx.moveTo(0, size * 0.25);
        ctx.lineTo(0, size * 0.8);
        ctx.lineWidth = size * 0.08;
        ctx.strokeStyle = color;
        ctx.stroke();
        
        ctx.restore();
    }
    
    drawMapleLeaf(ctx, x, y, size, templateIdx, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);
        const template = this.leafTemplates[templateIdx];
        ctx.drawImage(template, -size / 2, -size / 2, size, size);
        ctx.restore();
    }
    
    animate() {
        if (document.visibilityState === 'hidden') {
            requestAnimationFrame(() => this.animate());
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.leaves.forEach(leaf => {
            // Update leaf position
            leaf.y += leaf.speedY;
            leaf.oscillationAngle += leaf.oscillationSpeed;
            leaf.x += leaf.speedX + Math.sin(leaf.oscillationAngle) * leaf.swayRange * 0.6;
            leaf.rotation += leaf.rotationSpeed;
            
            // Draw
            this.drawMapleLeaf(this.ctx, leaf.x, leaf.y, leaf.size, leaf.templateIdx, leaf.rotation);
            
            // Reset leaf when it goes off screen
            if (leaf.y > this.canvas.height + 25 || leaf.x < -25 || leaf.x > this.canvas.width + 25) {
                Object.assign(leaf, this.createLeaf(false));
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// FLOATING MESSAGE BOARD OPERATIONS (🍁)
// ==========================================
function toggleChatWidget() {
    const panel = document.getElementById('chat-panel');
    if (!panel) return;
    panel.classList.toggle('open');
}

function renderMessages() {
    const container = document.getElementById('messages-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Ensure messages array exists
    if (!db.messages) {
        db.messages = [
            { id: "msg-1", text: "歡迎來到您們的關西旅行備忘留言板！在這裡寫下備忘或貼心話吧 🍁", time: "6/1 21:00" }
        ];
    }
    
    db.messages.forEach(m => {
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        
        const deleteBtn = `<button class="message-delete-btn" onclick="deleteMessage('${m.id}')">刪除</button>`;
        
        bubble.innerHTML = `
            <div style="word-break: break-all; line-height: 1.4; color: var(--text-main);">${m.text}</div>
            <div class="message-meta">
                <span>${m.time}</span>
                ${deleteBtn}
            </div>
        `;
        
        container.appendChild(bubble);
    });
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

function submitMessage(e) {
    e.preventDefault();
    const input = document.getElementById('message-input');
    if (!input || !input.value.trim()) return;
    
    const now = new Date();
    const timeStr = `${now.getMonth()+1}/${now.getDate()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newMsg = {
        id: 'msg-' + Date.now(),
        text: input.value.trim(),
        time: timeStr
    };
    
    if (!db.messages) db.messages = [];
    db.messages.push(newMsg);
    renderMessages();
    input.value = '';

    saveMessagesToRemote().catch(err => {
        console.warn('[Message] 同步失敗:', err.message);
    });
}

function deleteMessage(id) {
    if (confirm("確定要刪除這條留言嗎？")) {
        db.messages = db.messages.filter(m => m.id !== id);
        renderMessages();
        saveMessagesToRemote().catch(err => {
            console.warn('[Message] 同步失敗:', err.message);
        });
    }
}

// SOUVENIRS
async function saveSouvenirsToRemote() {
    if (!db) return;
    try {
        setSyncStatus('syncing');
        await ensureArticle(ARTICLE_TAGS.SOUVENIRS, '伴手禮清單', JSON.stringify(db.souvenirs || []));
        setSyncStatus('synced');
    } catch (err) {
        console.warn('[Souvenir] 同步失敗:', err);
        setSyncStatus('offline');
        throw err;
    }
}

function renderSouvenirs() {
    const container = document.getElementById('souvenir-container');
    if (!container) return;
    container.innerHTML = '';
    let items = db.souvenirs || [];
    if (currentSouvenirFilter !== 'all') {
        items = items.filter(function(i) { return i.category === currentSouvenirFilter; });
    }
    if (items.length === 0) {
        container.innerHTML = '<div class="empty-state" style="grid-column:1/-1;">還沒有伴手禮，快來新增！</div>';
        return;
    }
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'souvenir-card' + (item.done ? ' done' : '');
        div.innerHTML = `
            <div class="souvenir-check" onclick="toggleSouvenir('${item.id}')">${item.done ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : ''}</div>
            <div class="souvenir-content">
                <div class="souvenir-info">
                    <div class="souvenir-name">${item.name} <span class="tag tag-city" style="font-size:0.7rem;">${item.category || '其他'}</span></div>
                    ${item.shop ? `<div class="souvenir-shop">📍 ${item.shop}</div>` : ''}
                    ${item.notes ? `<div class="souvenir-notes">${item.notes}</div>` : ''}
                </div>
                ${item.price ? `<div class="souvenir-price">¥${Number(item.price).toLocaleString()}</div>` : ''}
                <div class="souvenir-actions">
                    ${item.photo ? `<button class="souvenir-photo-btn" onclick="toggleSouvenirPhoto(this,'${item.photo.replace(/'/g, "\\\\'")}')" title="檢視照片"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></button>` : `<span class="souvenir-photo-btn" style="opacity:0.3;cursor:default;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>`}
                    <button class="souvenir-edit" onclick="editSouvenir('${item.id}')" title="編輯"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                    <button class="souvenir-del" onclick="deleteSouvenir('${item.id}')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function toggleSouvenirPhoto(btn, url) {
    openLightbox(url);
}

let editingSouvenirId = null;
function editSouvenir(id) {
    const item = (db.souvenirs || []).find(s => s.id === id);
    if (!item) return;
    editingSouvenirId = id;
    document.getElementById('souv-name').value = item.name;
    document.getElementById('souv-cat').value = item.category || '其他';
    document.getElementById('souv-shop').value = item.shop || '';
    document.getElementById('souv-price').value = item.price || '';
    document.getElementById('souv-photo').value = item.photo || '';
    document.getElementById('souv-notes').value = item.notes || '';
    document.querySelector('#souvenirs form button[type=submit]').textContent = '更新';
}

let currentSouvenirFilter = '超商';

async function addSouvenir(e) {
    e.preventDefault();
    const name = document.getElementById('souv-name').value.trim();
    if (!name) return;
    const cat = document.getElementById('souv-cat').value;
    const shop = document.getElementById('souv-shop').value.trim();
    const price = document.getElementById('souv-price').value;
    const photo = document.getElementById('souv-photo').value.trim();
    const notes = document.getElementById('souv-notes').value.trim();
    if (!db.souvenirs) db.souvenirs = [];

    const isEditing = !!editingSouvenirId;
    const backup = [...db.souvenirs];

    if (isEditing) {
        const item = db.souvenirs.find(s => s.id === editingSouvenirId);
        if (item) {
            item.name = name; item.category = cat; item.shop = shop;
            item.price = parseInt(price) || 0; item.photo = photo;
            item.notes = notes;
        }
        editingSouvenirId = null;
        document.querySelector('#souvenirs form button[type=submit]').textContent = '新增';
    } else {
        db.souvenirs.push({ id: 'souv-' + Date.now(), name, category: cat, shop, price: parseInt(price) || 0, photo, notes, done: false });
    }
    document.getElementById('souv-name').value = '';
    document.getElementById('souv-shop').value = '';
    document.getElementById('souv-price').value = '';
    document.getElementById('souv-photo').value = '';
    document.getElementById('souv-notes').value = '';
    renderSouvenirs();

    showSyncOverlay();
    try {
        await saveSouvenirsToRemote();
        showToast(isEditing ? '伴手禮更新成功！' : '伴手禮新增成功！');
    } catch (err) {
        db.souvenirs = backup;
        renderSouvenirs();
        showToast((isEditing ? '更新' : '新增') + '失敗：' + err.message, 3000);
    } finally {
        hideSyncOverlay();
    }
}

function filterSouvenirs(cat, el) {
    currentSouvenirFilter = cat;
    document.querySelectorAll('#souvenirs .filter-chip').forEach(function(c) { c.classList.remove('active'); });
    if (el) el.classList.add('active');
    renderSouvenirs();
}

function toggleSouvenir(id) {
    const item = (db.souvenirs || []).find(s => s.id === id);
    if (!item) return;
    item.done = !item.done;
    renderSouvenirs();
    saveSouvenirsToRemote().catch(function(){});
}

async function deleteSouvenir(id) {
    if (!confirm('確定刪除？')) return;
    const backup = [...db.souvenirs];
    db.souvenirs = (db.souvenirs || []).filter(s => s.id !== id);
    renderSouvenirs();

    showSyncOverlay();
    try {
        await saveSouvenirsToRemote();
        showToast('伴手禮已刪除！');
    } catch (err) {
        db.souvenirs = backup;
        renderSouvenirs();
        showToast('刪除失敗：' + err.message, 3000);
    } finally {
        hideSyncOverlay();
    }
}
