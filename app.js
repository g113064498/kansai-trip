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
            { id: "s2", time: "14:15 - 15:30", title: "搭乘 JR Haruka 前往京都", desc: "從 KIX 購買 Haruka 自由席/指定席直達京都車站（約 75 分鐘）", cost: 3800, category: "transport", location: "京都駅" },
            { id: "s3", time: "16:00 - 16:30", title: "飯店 Check-in: Hop Inn Kyoto Shijo Omiya 🏨", desc: "京都車站搭公車（約 20 分鐘）或計程車（約 ¥1500）至四條大宮飯店寄物入住", cost: 0, category: "hotel", location: "Hop Inn Kyoto Shijo Omiya" },
            { id: "s4", time: "18:00 - 20:30", title: "晚餐：Sukiyaki Kimura (木村壽喜燒) 🍲", desc: "Threads 推薦壽喜燒老店 (12:00-20:30, 週一週五公休)。位置在河原町/錦市場附近", cost: 6000, category: "food", location: "Sukiyaki Kimura" }
        ],
        "2026-11-05": [
            { id: "s5", time: "06:00 - 08:30", title: "清晨清水寺避人潮參拜 🌸", desc: "06:00 清水寺就開門了，清晨人少空氣好，非常適合拍照。接著沿著二、三年坂散步。 (6點去比較沒人！)", cost: 400, category: "sightseeing", location: "清水寺" },
            { id: "s6", time: "09:00 - 11:30", title: "錦市場散策美食探索 串燒/玉子燒", desc: "京都的廚房，吃點章魚燒、玉子燒等在地小吃", cost: 2000, category: "food", location: "錦市場" },
            { id: "s7", time: "16:00 - 18:30", title: "鴨川散步 ➜ 花見小路 ➜ 八坂神社 🏮", desc: "傍晚日落時分鴨川河畔非常漂亮，接著散步去花見小路看祇園老街，最後到點燈後的八坂神社（晚上很美，24小時開放）", cost: 0, category: "sightseeing", location: "八坂神社" }
        ],
        "2026-11-06": [
            { id: "s13", time: "07:00 - 09:30", title: "伏見稻荷大社 🦊 千本鳥居", desc: "千本鳥居非常壯觀，24小時開放。建議早上 7 點前抵達避開大量團體遊客 (10點後人超多)", cost: 0, category: "sightseeing", location: "伏見稻荷大社" },
            { id: "s14", time: "11:30 - 13:00", title: "午餐：麵屋 豬一 🍜", desc: "11:00-14:30 / 17:30-21:00。超人氣排隊拉麵店，不接受預約，湯頭清甜精緻，Threads 熱推！", cost: 3500, category: "food", location: "麵屋 豬一" }
        ],
        "2026-11-07": [
            { id: "s8", time: "11:00 - 12:00", title: "從京都退房前往大阪", desc: "從四條大宮搭乘 Hankyu 阪急京都線至淡路或大阪梅田，轉乘 JR 大阪環狀線至鶴橋/天王寺", cost: 800, category: "transport", location: "Color Tsuruhashi" },
            { id: "s9", time: "12:30 - 13:00", title: "大阪飯店 Check-in / 寄行李 🏨", desc: "在 Color Tsuruhashi / Cu Tennoji 寄放行李後，開始大阪行程", cost: 0, category: "hotel", location: "Color Tsuruhashi" },
            { id: "s15", time: "14:00 - 18:00", title: "心齋橋 & 道頓堀 採購逛街 🛍️", desc: "逛逛 Shinsaibashi PARCO、大丸百貨、Uniqlo、Daiso、唐吉訶德，並與固力果跑跑人招牌拍照。晚餐可吃千房大阪燒！", cost: 10000, category: "shopping", location: "心齋橋" }
        ],
        "2026-11-08": [
            { id: "s16", time: "08:00 - 16:00", title: "達摩勝尾寺一日遊 🔴", desc: "08:00-17:00 (門票 ¥500)。滿山滿谷紅色達摩。交通：搭御堂筋線到終點站「箕面萱野」，8號月台搭30號直達車。⚠️注意：回程最後一班公車 17:05。計程車固定費率約 ¥3200。回程可在 箕面Q's MALL 吃飯。", cost: 4200, category: "sightseeing", location: "勝尾寺" }
        ],
        "2026-11-09": [
            { id: "s17", time: "09:30 - 11:30", title: "難波八阪神社 🦁️ 大獅子頭", desc: "06:30-17:00。巨大震撼的獅子頭舞台，能吸走厄運帶來好運，求籤熱門地", cost: 0, category: "sightseeing", location: "難波八阪神社" },
            { id: "s18", time: "13:00 - 17:00", title: "橘子街 (Orange Street) 潮牌探索", desc: "雲集了各大時尚潮牌與特色文青咖啡廳，適合逛街採購服飾", cost: 15000, category: "shopping", location: "Orange Street" },
            { id: "s19", time: "19:00 - 21:00", title: "梅田藍天大樓空中庭園看夜景 🌌", desc: "09:30-22:30（門票 ¥2000）。39樓售票，41樓為空中庭園展望台，看夜景極美。 (與 Harukas 300 擇一)", cost: 4000, category: "sightseeing", location: "梅田藍天大樓" }
        ],
        "2026-11-10": [
            { id: "s20", time: "09:00 - 12:00", title: "大阪城公園 🏯 散步", desc: "09:00-17:00。入園免費，上天守閣需要門票（約 ¥600）。雄偉的大阪象徵。", cost: 1200, category: "sightseeing", location: "大阪城天守閣" },
            { id: "s21", time: "13:00 - 16:30", title: "天神橋筋商店街 藥妝採買與中村屋可樂餅", desc: "最長商店街！可逛 OS Drug (極便宜只收現)、買中村屋可樂餅、吃千草大阪燒。", cost: 10000, category: "shopping", location: "天神橋筋商店街" }
        ],
        "2026-11-11": [
            { id: "s10", time: "10:00 - 12:30", title: "天王寺/阿倍野最後採買與午餐", desc: "阿倍野 Q's Mall 或近鐵百貨最後伴手禮採買，吃完午餐後回飯店拿行李", cost: 5000, category: "shopping", location: "天王寺" },
            { id: "s11", time: "13:00 - 13:45", title: "搭乘 Haruka 或是關空快速前往關西機場 🚄", desc: "從天王寺站搭乘直達關西機場，樂桃在第二航廈，最晚 13:25 前要到櫃台辦登機", cost: 2000, category: "transport", location: "KIX" },
            { id: "s12", time: "15:25 - 17:55", title: "搭乘 MM027 航班返台 ✈️", desc: "回到溫暖的家，結束美好旅程", cost: 0, category: "transport", location: "台北桃園 (TPE)" }
        ]
    },
    attractionPool: [
        { id: "p1", city: "Kyoto", title: "清水寺 🌸", desc: "06:00-18:00。京都最具代表性寺廟，主殿舞台景觀壯麗，推薦清晨前去避開人潮。", cost: 400, category: "sightseeing", status: "scheduled" },
        { id: "p2", city: "Kyoto", title: "二、三年坂 🏮", desc: "24小時開放。傳統石板坡道，古色古香。建議清晨 6 點去完全沒人，極好拍照。", cost: 0, category: "sightseeing", status: "scheduled" },
        { id: "p3", city: "Kyoto", title: "伏見稻荷大社 🦊", desc: "24小時開放。千本鳥居非常壯觀，建議早上 7 點前抵達避開大量團體遊客。", cost: 0, category: "sightseeing", status: "scheduled" },
        { id: "p4", city: "Kyoto", title: "平安神宮 ⛩️", desc: "06:00-17:00。擁有巨大的紅色大鳥居，庭園景色優美。", cost: 0, category: "sightseeing", status: "pool" },
        { id: "p5", city: "Kyoto", title: "八坂神社", desc: "24小時開放。晚上會點燈，非常浪漫，適合夜間散步。", cost: 0, category: "sightseeing", status: "scheduled" },
        { id: "p6", city: "Kyoto", title: "鴨川 Shijō Bridge 🌊", desc: "下午快日落時去非常美麗，可以坐在河畔吹風放鬆。", cost: 0, category: "sightseeing", status: "scheduled" },
        { id: "p7", city: "Kyoto", title: "北野天滿宮 🍁", desc: "07:00-20:00。主祀學問之神菅原道真，秋天也是賞楓名所。", cost: 0, category: "sightseeing", status: "pool" },
        { id: "p8", city: "Kyoto", title: "京都御苑 🌲", desc: "前皇室御花園，佔地廣大，散步極為舒服。", cost: 0, category: "sightseeing", status: "pool" },
        { id: "p9", city: "Kyoto", title: "錦市場 🍢", desc: "京都的廚房，有各式海鮮、小吃。注意有店家不開放邊走邊吃。", cost: 0, category: "food", status: "scheduled" },
        { id: "p10", city: "Kyoto", title: "Onimaru Kyoto Shijo Kawaramachi 🍙", desc: "精緻好吃的飯糰店，Threads 熱門打卡美食。", cost: 800, category: "food", status: "pool" },
        { id: "p11", city: "Kyoto", title: "Sukiyaki Kimura 🍲", desc: "12:00-20:30（週一、週五公休）。Threads 推薦的傳統平價壽喜燒老店。", cost: 3000, category: "food", status: "scheduled" },
        { id: "p12", city: "Kyoto", title: "麵屋 豬一 🍜", desc: "11:00-14:30 / 17:30-21:00。超人氣排隊拉麵店，不接受預約，湯頭清甜精緻。", cost: 1500, category: "food", status: "scheduled" },
        { id: "p13", city: "Osaka", title: "大阪城公園 🏯", desc: "09:00-17:00。入園免費，上天守閣需要門票（約 ¥600）。雄偉的大阪象徵。", cost: 600, category: "sightseeing", status: "scheduled" },
        { id: "p14", city: "Osaka", title: "大阪歷史博物館 🏛️", desc: "常設展展出大阪的歷史變遷，與大阪城公園相鄰。", cost: 600, category: "sightseeing", status: "pool" },
        { id: "p15", city: "Osaka", title: "心齋橋 & 道頓堀 🛍️", desc: "購物美食天堂。有 Shinsaibashi PARCO、大丸百貨、Uniqlo、Daiso、唐吉訶德與跑跑人招牌。晚餐可吃千房大阪燒。", cost: 0, category: "shopping", status: "scheduled" },
        { id: "p16", city: "Osaka", title: "大阪日本橋電器街 🎮", desc: "11:00-19:00。類似東京秋葉原，充滿動漫、遊戲周邊與電子產品。", cost: 0, category: "shopping", status: "pool" },
        { id: "p17", city: "Osaka", title: "通天閣 & 新世界 🗼", desc: "傳統大阪老街風情。可以在 Spaworld 門口樓梯拍照，通天閣有滑梯。⚠️備註：炸串聽說容易踩雷，請小心挑選。", cost: 1000, category: "sightseeing", status: "pool" },
        { id: "p18", city: "Osaka", title: "四天王寺 🛕", desc: "08:30-16:00. 日本最古老的官寺之一。步行 15 分鐘（1.1公里）可達通天閣。", cost: 300, category: "sightseeing", status: "pool" },
        { id: "p19", city: "Osaka", title: "黑門市場 ⚠️", desc: "⚠️避坑指南：近年海鮮價格高漲，專門宰觀光客，多數網友極不推薦去，建議改去木津市場或天滿市場。", cost: 0, category: "food", status: "pool" },
        { id: "p20", city: "Osaka", title: "勝尾寺 🔴", desc: "08:00-17:00。滿山滿谷紅色達摩。交通：搭御堂筋線到「箕面萱野」，轉8號月台30號公車（約 22 分鐘，單程 ¥800，最晚回程 17:05）。計程車單程約 ¥3200。回程可到 箕面Q's MALL 用餐。", cost: 500, category: "sightseeing", status: "scheduled" },
        { id: "p21", city: "Osaka", title: "橘子街 (Orange Street) 🍊", desc: "雲集了各大時尚潮牌與特色文青咖啡廳，適合逛街採購衣服鞋子。", cost: 0, category: "shopping", status: "scheduled" },
        { id: "p22", city: "Osaka", title: "梅田藍天大樓 🌌", desc: "09:30-22:30（門票 ¥2000）。39樓售票，41樓為空中庭園展望台，看夜景極美。⚠️與 Harukas 300 擇一即可。", cost: 2000, category: "sightseeing", status: "scheduled" },
        { id: "p23", city: "Osaka", title: "難波八阪神社 🦁️", desc: "06:30-17:00。巨大震撼的獅子頭舞台，能吸走厄運帶來好運，求籤熱門地。", cost: 0, category: "sightseeing", status: "scheduled" },
        { id: "p24", city: "Osaka", title: "天滿市場 & 天神橋筋商店街 🛍️", desc: "日本最長商店街！OS藥妝（10:00-17:45，極便宜，只收現金不能退稅）、中村屋可樂餅（09:00-18:00，週日休）、千草大阪燒（11:00-21:00，週二休）。", cost: 0, category: "shopping", status: "scheduled" },
        { id: "p25", city: "Osaka", title: "大阪天滿宮 ⛩️", desc: "關西求學業、事業最知名的神社，主祀天神菅原道真。", cost: 0, category: "sightseeing", status: "pool" },
        { id: "p26", city: "Osaka", title: "Abeno Harukas 300 展望台 🏙️", desc: "09:00-22:00。日本最高大樓的 360 度觀景台，看大阪市區夜景首選。⚠️與藍天大樓二選一。", cost: 2000, category: "sightseeing", status: "pool" },
        { id: "p27", city: "Kyoto", title: "DONGURI Shijo-Omiya Store 🍴", desc: "四條大宮站附近的知名京都御好燒（大阪燒/鐵板燒）連鎖店。店內裝潢有日式居酒屋風情，御好燒與炒麵味道濃郁，營業至深夜。", cost: 3000, category: "food", status: "pool" },
        { id: "p28", city: "Kyoto", title: "GION GOZU 四条店 🍴", desc: "位於祇園四條附近的精緻甜點烘焙店，主打以宇治抹茶或新鮮水果製作的乳酪蛋糕與法式糕點，非常適合外帶享用。", cost: 1000, category: "food", status: "pool" },
        { id: "p29", city: "Osaka", title: "HARBS Namba Parks 🍴", desc: "位於難波 Parks 商場內的名店，招牌「水果千層蛋糕（Mille Crepes）」鮮奶油清爽不膩，搭配豐富新鮮水果，是關西必吃的甜點。", cost: 1200, category: "food", status: "pool" },
        { id: "p30", city: "Osaka", title: "HARBS 心齋橋Parco店 🍴", desc: "位於心齋橋 Parco 百貨內，交通極為便利。逛街逛累時，非常適合進來享用一片招牌千層蛋糕與下午茶咖啡。", cost: 1200, category: "food", status: "pool" },
        { id: "p31", city: "Osaka", title: "Kusaka Curry Namba DINING MAISON 🍴", desc: "高島屋難波店美食街的高評價日式咖哩店，以濃郁滑順的特製熟成咖哩醬和酥脆的炸豬排聞名，口味層次豐富。", cost: 1500, category: "food", status: "pool" },
        { id: "p32", city: "Kyoto", title: "Mamemono and Taiyaki 🍴", desc: "位於嵐山的超人氣鯛魚燒店，主打「賞味期限一分鐘」的牛油鯛魚燒。現烤外皮酥脆，裡面夾著冰涼的厚牛油與紅豆餡，香濃美味。", cost: 500, category: "food", status: "pool" },
        { id: "p33", city: "Osaka", title: "Os Drug 天滿店 🛍️", desc: "天神橋筋商店街內的超便宜藥妝店。雖然店面小且只收現金，但許多熱門藥妝的價格比連鎖退稅藥妝店還要便宜許多！", cost: 0, category: "shopping", status: "pool" },
        { id: "p34", city: "Kyoto", title: "Shabucho 🍴", desc: "京都極受歡迎的個人或雙人涮涮鍋/壽喜燒餐廳。提供美味的國產牛與精緻配料，湯頭清淡甘甜，深受遊客與在地人喜愛。", cost: 5000, category: "food", status: "pool" },
        { id: "p35", city: "Kyoto", title: "Shabuwara 壽喜燒 涮涮鍋 花月店 🍴", desc: "位於四條大宮附近的高評價日式火鍋餐廳，主打優質的壽喜燒與涮涮鍋。肉質鮮美、服務貼心，適合情侶悠閒享用晚餐。", cost: 6000, category: "food", status: "pool" },
        { id: "p36", city: "Osaka", title: "お好み焼 ( 大阪燒 ) 千草 🍴", desc: "天滿站附近的隱藏版老字號大阪燒店，曾獲米其林推薦。招牌「千草燒」外皮焦香、內裡高麗菜清甜，醬汁濃郁美味。", cost: 1500, category: "food", status: "pool" },
        { id: "p37", city: "Kyoto", title: "ペアキーホルダー専門店 2/8b 京都三条店 🛍️", desc: "專門販售成雙成對皮製鑰匙圈與吊飾的文創雜貨鋪。可以現場客製化刻字，非常適合情侶挑選專屬的旅行紀念禮物。", cost: 3000, category: "shopping", status: "pool" },
        { id: "p38", city: "Kyoto", title: "二條城 📍", desc: "曾為德川家康在京都的寓所，二之丸御殿內以「鶯聲地板」聞名。庭園秋楓景色優美，且會舉辦數位藝術光雕夜間展演。", cost: 800, category: "sightseeing", status: "pool" },
        { id: "p39", city: "Kyoto", title: "京都塔 📍", desc: "京都車站前醒目的白色地標，頂部觀景台可 360 度俯瞰京都市區與遠山。塔下大樓內有美食街與豐富的伴手禮店。", cost: 900, category: "sightseeing", status: "pool" },
        { id: "p40", city: "Osaka", title: "唐吉訶德 道頓堀店 🛍️", desc: "道頓堀運河旁、醒目黃色惠比壽摩天輪的大型驚安殿堂。24小時營業，藥妝、零食、伴手禮應有盡有，是採購與退稅首選。", cost: 0, category: "shopping", status: "pool" },
        { id: "p41", city: "Osaka", title: "大阪燒 千房 🍴", desc: "道頓堀超知名大阪燒連鎖品牌，以美乃滋拉花特技聞名。用餐氣氛熱絡，食材新鮮，適合體驗道地大阪鐵板美食。", cost: 2000, category: "food", status: "pool" },
        { id: "p42", city: "Kyoto", title: "天橋立View Land 📍", desc: "日本三景之一「天橋立」的絕佳觀景樂園。從山上俯瞰，天橋立沙洲宛如一條飛龍。設有經典的「倒過來看」觀景台。", cost: 850, category: "sightseeing", status: "pool" },
        { id: "p43", city: "Osaka", title: "心齋橋PARCO 🛍️", desc: "與大丸百貨相連的時尚商場，6樓設有吉卜力共和國、卡普空與蠟筆小新等超人氣動漫角色專賣店，B2美食街氣氛極佳。", cost: 0, category: "shopping", status: "pool" },
        { id: "p44", city: "Kyoto", title: "東寺(教王護國寺) 📍", desc: "擁有日本最高木造五重塔的古老寺廟。秋季會開放限定的夜間特別拜觀與紅楓點燈，倒映在水池中的五重塔與紅葉美不勝收。", cost: 1000, category: "sightseeing", status: "pool" },
        { id: "p45", city: "Kyoto", title: "渡月橋 📍", desc: "嵐山地標性木造橋樑，背靠嵐山紅楓。秋天楓紅滿山時景色絕美，是京都最經典的賞楓與拍照景點之一。", cost: 0, category: "sightseeing", status: "pool" },
        { id: "p46", city: "Kyoto", title: "西本願寺 📍", desc: "世界文化遺產，寺內擁有兩棵樹齡超過400年的巨大「御影堂大銀杏」。秋天金黃大樹與古樸寺廟殿堂交織，景致極為壯觀。", cost: 0, category: "sightseeing", status: "pool" },
        { id: "p47", city: "Kyoto", title: "貴船神社 📍", desc: "位於京都北郊山區的神社，以石階兩旁的紅色獻燈與水占卜聞名。秋季楓葉隧道點燈非常浪漫，是祈求姻緣與戀愛運的聖地。", cost: 0, category: "sightseeing", status: "pool" },
        { id: "p48", city: "Osaka", title: "購物中心 HEP FIVE 🛍️", desc: "梅田地標性紅色摩天輪商場，主要客群為年輕流行服飾。摩天輪可在高空俯瞰大阪市中心夜景，非常適合情侶約會。", cost: 600, category: "shopping", status: "pool" },
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
    messages: [
        { id: "msg-1", text: "歡迎來到您們的關西旅行備忘留言板！在這裡寫下備忘或貼心話吧 🍁", time: "6/1 21:00" }
    ]
};
// [INITIAL_DATA_END]

// GLOBAL DATABASE STATE
// Try to load full database from localStorage first (persists all user edits)
const savedDb = JSON.parse(localStorage.getItem('kansai_trip_db'));
let db;

if (savedDb && savedDb.itinerary && savedDb.flights && savedDb.hotels) {
    db = savedDb;
} else {
    // First visit or no saved data — use hardcoded initial data
    db = JSON.parse(JSON.stringify(initialTripData));
}

// Ensure messages array exists
if (!Array.isArray(db.messages)) db.messages = [];
if (!Array.isArray(initialTripData.messages)) initialTripData.messages = [];
// Merge any new initial messages not yet in saved db
initialTripData.messages.forEach(m => {
    if (!db.messages.find(x => x.id === m.id)) {
        db.messages.push(m);
    }
});

// ==========================================
// NETLIFY BLOBS SYNC LAYER (跨裝置同步)
// ==========================================
// 待辦勾選狀態 + 留言 會自動同步到 Netlify Blobs，
// 另一裝置重新整理頁面即可看到最新內容。
// 沒網路時自動降級為僅 LocalStorage 本地儲存。
const SYNC_ENDPOINT = '/.netlify/functions/sync';
let syncIndicatorEl = null;

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

async function loadFromRemote() {
    try {
        setSyncStatus('syncing');
        const res = await fetch(SYNC_ENDPOINT, { method: 'GET', cache: 'no-store' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const remote = await res.json();

        // 合併遠端的待辦勾選狀態
        if (remote && remote.checklist && typeof remote.checklist === 'object') {
            db.checklist.forEach(item => {
                if (remote.checklist[item.id] !== undefined) {
                    item.done = remote.checklist[item.id];
                }
            });
        }
        // 合併遠端的留言（以「合併新訊息」方式而非整個覆蓋，避免覆蓋本地尚未同步的）
        if (Array.isArray(remote.messages)) {
            if (!Array.isArray(db.messages)) db.messages = [];
            const localIds = new Set(db.messages.map(m => m.id));
            remote.messages.forEach(m => {
                if (m && m.id && !localIds.has(m.id)) {
                    db.messages.push(m);
                }
            });
            // 依時間排序（依照 id 內的 timestamp）
            db.messages.sort((a, b) => String(a.id).localeCompare(String(b.id)));
        }

        // 行程資料不上傳覆蓋本機（本機 localStorage 優先）
        saveToLocalStorage();
        setSyncStatus('synced');
    } catch (err) {
        console.warn('[Sync] 讀取 Netlify Blobs 失敗，改用 LocalStorage:', err);
        setSyncStatus('offline');
    }
}

async function saveToRemote() {
    try {
        setSyncStatus('syncing');
        const checklistState = {};
        db.checklist.forEach(item => {
            checklistState[item.id] = item.done;
        });
        const body = {
            checklist: checklistState,
            messages: db.messages || [],
            itinerary: db.itinerary,
            attractionPool: db.attractionPool,
        };
        const res = await fetch(SYNC_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        setSyncStatus('synced');
    } catch (err) {
        console.warn('[Sync] 寫入 Netlify Blobs 失敗，僅存 LocalStorage:', err);
        setSyncStatus('offline');
    }
}

let activeTab = 'dashboard';
let currentSelectedDay = "2026-11-04";
let currentPoolFilter = 'all';

// APP INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
    initApp();
    new MapleLeaves(); // Start falling maple leaves
});

function initApp() {
    saveToLocalStorage();
    updateCountdown();
    renderDashboard();
    renderDaysSidebar();
    renderItineraryForDay(currentSelectedDay);
    renderPool();
    renderChecklists();
    updateBudgetCalculations();
    renderMessages(); // Load and display messages

    // 嘗試從 Netlify Blobs 拉取最新狀態（完成後重新渲染相關區塊）
    loadFromRemote().then(() => {
        renderDaysSidebar();
        renderItineraryForDay(currentSelectedDay);
        renderPool();
        renderChecklists();
        renderMessages();
        updateBudgetCalculations();
    });
}

// SAVE STATE
function saveToLocalStorage() {
    // Save checklist checkboxes to local storage
    const checklistState = {};
    db.checklist.forEach(item => {
        checklistState[item.id] = item.done;
    });
    localStorage.setItem('kansai_trip_checklist_state', JSON.stringify(checklistState));
    
    // Save messages to local storage
    localStorage.setItem('kansai_trip_messages', JSON.stringify(db.messages));
    
    // Still save the whole db for backward compatibility / standalone HTML backups
    localStorage.setItem('kansai_trip_db', JSON.stringify(db));
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
    
    const days = Object.keys(db.itinerary).sort();
    
    days.forEach((dayStr, index) => {
        const date = new Date(dayStr);
        const dayNum = index + 1;
        const weekdayStr = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
        
        const btn = document.createElement('button');
        btn.className = `day-tab-btn ${dayStr === currentSelectedDay ? 'active' : ''}`;
        btn.onclick = () => selectDay(dayStr);
        
        btn.innerHTML = `
            <span class="day-title">Day ${dayNum}</span>
            <span class="day-date">${dayStr.substring(5)} (${weekdayStr})</span>
        `;
        
        sidebar.appendChild(btn);
    });
}

function selectDay(dayStr) {
    currentSelectedDay = dayStr;
    renderDaysSidebar();
    
    const date = new Date(dayStr);
    const weekdayStr = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
    const daysList = Object.keys(db.itinerary).sort();
    const dayNum = daysList.indexOf(dayStr) + 1;
    
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

    // Sort items by time string loosely
    items.sort((a, b) => a.time.localeCompare(b.time));

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

        div.innerHTML = `
            <div class="timeline-card">
                <div class="timeline-title-row">
                    <div>
                        <span class="timeline-time">${item.time}</span>
                        <h4 class="timeline-title">${categoryIcon} ${item.title}</h4>
                    </div>
                    <div class="timeline-actions">
                        <button class="action-btn edit" title="編輯" onclick="openEditEventModal('${dayStr}', '${item.id}')">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="action-btn edit move" title="上移" onclick="moveEvent('${dayStr}', ${index}, -1)">
                            ▲
                        </button>
                        <button class="action-btn edit move" title="下移" onclick="moveEvent('${dayStr}', ${index}, 1)">
                            ▼
                        </button>
                        <button class="action-btn" title="刪除" onclick="deleteEvent('${dayStr}', '${item.id}')">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                        </button>
                    </div>
                </div>
                <p class="timeline-desc">${item.desc}</p>
                ${warningHtml}
                ${item.photos && item.photos.length ? `
                <div class="timeline-photos">
                    ${item.photos.map(p => `
                        <div class="timeline-photo-item" onclick="openLightbox('${p.replace(/'/g, "\\'")}')">
                            <img src="${p}" alt="${item.title}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                <div class="timeline-meta">
                    ${item.location ? `
                        <div class="timeline-meta-item">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.location)}" target="_blank" style="color:inherit; text-decoration:none;">導航地圖</a>
                        </div>
                    ` : ''}
                    ${item.cost > 0 ? `
                        <div class="timeline-meta-item" style="color:var(--accent-green); font-weight:600;">
                            💵 NT$ ${item.cost.toLocaleString()} 元
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
    if (currentPoolFilter === 'Kyoto') {
        items = items.filter(i => i.city === 'Kyoto');
    } else if (currentPoolFilter === 'Osaka') {
        items = items.filter(i => i.city === 'Osaka');
    } else if (currentPoolFilter === 'food') {
        items = items.filter(i => i.category === 'food');
    }

    if (items.length === 0) {
        container.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">無相符的候選項目</div>`;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        let cardClass = 'pool-card';
        if (item.category === 'food') {
            cardClass += ' food';
        } else if (item.city === 'Kyoto') {
            cardClass += ' kyoto';
        } else if (item.city === 'Osaka') {
            cardClass += ' osaka';
        }

        // Check warning flags
        let warningBanner = '';
        if (item.desc.includes('⚠️') || item.desc.includes('避坑') || item.desc.includes('踩雷')) {
            warningBanner = `<span class="tag" style="background:#FADBD8; color:#C0392B;">⚠️ 注意事項</span>`;
        }

        card.className = cardClass;
        card.innerHTML = `
            <div class="pool-card-header">
                <h4 class="pool-card-title">${item.title}</h4>
                <div class="pool-card-tags">
                    <span class="tag tag-city">${item.city === 'Kyoto' ? '京都' : '大阪'}</span>
                    ${item.cost > 0 ? `<span class="tag tag-cost">¥ ${item.cost.toLocaleString()}</span>` : ''}
                    ${warningBanner}
                </div>
            </div>
            <p class="pool-card-desc">${item.desc}</p>
            <div class="pool-card-actions">
                <div style="font-size:0.8rem; color:var(--text-muted)">
                    狀態：${item.status === 'scheduled' ? '🟢 已排入行程' : '⚪ 候選未排'}
                </div>
                <div class="flex" style="gap:5px;">
                    <button class="btn btn-outline" style="padding:6px 12px; font-size:0.8rem;" onclick="deleteFromPool('${item.id}')">
                        刪除
                    </button>
                    <button class="btn btn-primary" style="padding:6px 12px; font-size:0.8rem;" onclick="addPoolItemToItinerary('${item.id}')">
                        ➕ 排入日程
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterPool(category, btnEl) {
    currentPoolFilter = category;
    
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
        saveToLocalStorage();
        saveToRemote(); // 同步到 Netlify Blobs
        renderChecklists();
    }
}

// UPDATE BUDGET TOTALS
function updateBudgetCalculations() {
    // Static values
    const flightTotal = db.flights.reduce((sum, f) => sum + f.price, 0);
    const hotelTotal = db.hotels.reduce((sum, h) => sum + h.price, 0);

    // Dynamic values from itinerary
    let activityTotal = 0;
    Object.values(db.itinerary).forEach(dayEvents => {
        dayEvents.forEach(e => {
            if (e.cost && !isNaN(e.cost)) {
                activityTotal += parseInt(e.cost);
            }
        });
    });

    const totalSum = flightTotal + hotelTotal + activityTotal;

    document.getElementById('budget-flights').innerText = `NT$ ${flightTotal.toLocaleString()}`;
    document.getElementById('budget-hotels').innerText = `NT$ ${hotelTotal.toLocaleString()}`;
    document.getElementById('budget-activities').innerText = `NT$ ${activityTotal.toLocaleString()}`;
    document.getElementById('budget-total').innerText = `NT$ ${totalSum.toLocaleString()}`;
    document.getElementById('budget-sum').innerText = totalSum.toLocaleString();
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

    saveToLocalStorage();
    saveToRemote();
    closeEventModal();
    renderItineraryForDay(dayStr);
    updateBudgetCalculations();
}

// MOVE EVENT (UP / DOWN)
function moveEvent(dayStr, index, direction) {
    const items = db.itinerary[dayStr];
    if (!items) return;

    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= items.length) return; // Out of bounds

    // Swap
    const temp = items[index];
    items[index] = items[targetIndex];
    items[targetIndex] = temp;

    saveToLocalStorage();
    saveToRemote();
    renderItineraryForDay(dayStr);
}

// DELETE EVENT
function deleteEvent(dayStr, id) {
    if (confirm("確定要將這個日程項目移除嗎？")) {
        const items = db.itinerary[dayStr] || [];
        // If it was linked to the attraction pool, change status to 'pool'
        const item = items.find(e => e.id === id);
        if (item) {
            const poolItem = db.attractionPool.find(p => p.title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,'') === item.title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,''));
            if (poolItem) {
                poolItem.status = 'pool';
                renderPool();
            }
        }
        
        db.itinerary[dayStr] = items.filter(ev => ev.id !== id);
        saveToLocalStorage();
        saveToRemote();
        renderItineraryForDay(dayStr);
        updateBudgetCalculations();
    }
}

// ADD POOL ITEM TO ITINERARY
function addPoolItemToItinerary(poolId) {
    const item = db.attractionPool.find(p => p.id === poolId);
    if (!item) return;

    // Prompt day selection
    const days = Object.keys(db.itinerary).sort();
    let promptText = "請輸入您想排入的天數數字 (例如 1 代表 Day 1, 2 代表 Day 2)：\n\n";
    days.forEach((dayStr, index) => {
        promptText += `[${index + 1}] Day ${index + 1} (${dayStr.substring(5)})\n`;
    });

    const userSelection = prompt(promptText, "1");
    if (userSelection === null) return; // Cancel

    const selectionIndex = parseInt(userSelection) - 1;
    if (isNaN(selectionIndex) || selectionIndex < 0 || selectionIndex >= days.length) {
        alert("無效的數字，請重新輸入！");
        return;
    }

    const targetDay = days[selectionIndex];
    
    // Convert pool item to event
    const eventId = 'evt-p-' + Date.now();
    const newEvent = {
        id: eventId,
        time: "10:00 - 12:00", // Default time slot
        title: item.title,
        desc: item.desc,
        cost: 0, // Keep day budget separate (tickets generally prepaid or separate)
        category: item.category,
        location: item.title.replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g,'')
    };

    db.itinerary[targetDay].push(newEvent);
    item.status = 'scheduled';

    saveToLocalStorage();
    saveToRemote();
    renderItineraryForDay(currentSelectedDay);
    renderPool();
    updateBudgetCalculations();
    
    alert(`已成功將「${item.title}」排入 Day ${selectionIndex + 1} 的日程中！`);
}

// DELETE FROM POOL
function deleteFromPool(id) {
    if (confirm("確定要將這個候選景點從清單中完全移除嗎？")) {
        db.attractionPool = db.attractionPool.filter(p => p.id !== id);
        saveToLocalStorage();
        saveToRemote();
        renderPool();
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
                saveToLocalStorage();
                initApp();
                alert("行程資料已成功匯入！");
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


// ==========================================
// FALLING MAPLE LEAVES EFFECT (🍁)
// ==========================================
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
        return {
            x: Math.random() * this.canvas.width,
            y: randomY ? Math.random() * this.canvas.height : -20,
            size: Math.random() * 8 + 8, // Smaller leaves (8px to 16px) to keep them subtle
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            speedY: Math.random() * 1.0 + 0.5,
            speedX: Math.random() * 0.6 - 0.3,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 1.2 - 0.6,
            oscillationSpeed: Math.random() * 0.015 + 0.008,
            oscillationAngle: Math.random() * Math.PI,
            swayRange: Math.random() * 1.2 + 0.4
        };
    }
    
    drawMapleLeaf(ctx, x, y, size, color, rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation * Math.PI / 180);
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
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.leaves.forEach(leaf => {
            // Update leaf position
            leaf.y += leaf.speedY;
            leaf.oscillationAngle += leaf.oscillationSpeed;
            leaf.x += leaf.speedX + Math.sin(leaf.oscillationAngle) * leaf.swayRange * 0.6;
            leaf.rotation += leaf.rotationSpeed;
            
            // Draw
            this.drawMapleLeaf(this.ctx, leaf.x, leaf.y, leaf.size, leaf.color, leaf.rotation);
            
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

    saveToLocalStorage();
    saveToRemote(); // 同步到 Netlify Blobs
    renderMessages();

    input.value = '';
}

function deleteMessage(id) {
    if (confirm("確定要刪除這條留言嗎？")) {
        db.messages = db.messages.filter(m => m.id !== id);
        saveToLocalStorage();
        saveToRemote(); // 同步到 Netlify Blobs
        renderMessages();
    }
}
