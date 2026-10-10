// TRIPS INITIAL DATA (PRELOADED)
// [INITIAL_DATA_START]
const initialTripData = {
    "tripTitle": "關西雙人浪漫楓秋之旅 🍁",
    "startDate": "2026-11-04",
    "endDate": "2026-11-11",
    "flights": [
        {
            "id": "flight-1",
            "type": "departure",
            "number": "MM024 (樂桃航空)",
            "airline": "Peach",
            "from": "台北桃園 (TPE)",
            "to": "大阪關西 (KIX)",
            "depTime": "11/04 (三) 09:40",
            "arrTime": "11/04 (三) 13:10",
            "seats": "Standard",
            "price": 10260,
            "notes": "桃園機場第一航廈登機。抵達關西機場第二航廈後，直接從T2搭機場利木津巴士前往京都站八条口（目前單程¥2,800/人），再前往京都四條大宮住宿。"
        },
        {
            "id": "flight-2",
            "type": "return",
            "number": "MM027 (樂桃航空)",
            "airline": "Peach",
            "from": "大阪關西 (KIX)",
            "to": "台北桃園 (TPE)",
            "depTime": "11/11 (三) 15:25",
            "arrTime": "11/11 (三) 17:55",
            "seats": "Standard",
            "price": 10260,
            "notes": "Peach國際線由關西機場第二航廈出發。退房後由Cu Tennoji前往近鐵上本町2F巴士總站，搭機場利木津巴士直達T2；目前時刻表建議11:40發、12:42抵達T2。MM027 15:25起飛，國際線須最晚於起飛前50分鐘完成報到。出發前再確認最新巴士時刻。"
        }
    ],
    "hotels": [
        {
            "id": "hotel-1",
            "city": "Kyoto",
            "name": "Hop Inn Kyoto Shijo Omiya (京都四條大宮霍普飯店)",
            "checkIn": "2026-11-04",
            "checkOut": "2026-11-07",
            "nights": 3,
            "price": 7316,
            "link": "https://www.booking.com/hotel/jp/hop-inn-kyoto-shijo-omiya.zh-tw.html",
            "address": "京都市中京区壬生坊城町18-1",
            "notes": "從機場搭乘 JR Haruka 直達京都車站，再搭計程車 (約 ¥1500) 或公車前往飯店。鄰近阪急與嵐電，去嵐山跟河原町超方便。"
        },
        {
            "id": "hotel-2",
            "city": "Osaka",
            "name": "Cu Tennoji",
            "checkIn": "2026-11-07",
            "checkOut": "2026-11-11",
            "nights": 4,
            "price": 7174,
            "link": "",
            "address": "大阪府大阪市天王寺区味原町14-23",
            "notes": "已確認住宿為 Cu Tennoji。自助入住公寓，入住前約24小時提供房號與 self check-in instructions；位置靠近鶴橋站。"
        }
    ],
    "itinerary": {
        "2026-11-04": [
            {
                "id": "api--P10zstRlbhecFp1DO1U",
                "_poolId": "api--P10zstRlbhecFp1DO1U",
                "_productId": "-P10zstRlbhecFp1DO1U",
                "time": "09:40 - 13:10",
                "title": "MM024 (樂桃航空) 台北桃園 (TPE) → 大阪關西 (KIX) ✈️",
                "desc": "搭乘 06:07 的高鐵至桃園站（06:49 抵達），轉乘 A18 機場捷運至 A12 第一航廈，約 07:30 抵達 1F 出境大廳",
                "cost": 3000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [],
                "location": "關西國際機場 第2航廈"
            },
            {
                "id": "api--P10ztCne2UQWEWudnie",
                "_poolId": "api--P10ztCne2UQWEWudnie",
                "_productId": "-P10ztCne2UQWEWudnie",
                "time": "17:00 - 17:30",
                "title": "Hop Inn Kyoto Shijo Omiya (京都四條大宮霍普飯店) Check-in 🏨",
                "desc": "抵達關西機場第二航廈後，直接從T2搭機場利木津巴士前往京都站八条口（目前單程¥2,800/人，100分鐘），再搭計程車(約 ¥1500) 前往Hop Inn Kyoto Shijo Omiya。",
                "cost": 4000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": "京都市中京区壬生坊城町18-1"
            },
            {
                "id": "api--P2y2sn2WOryyOiBTVh1",
                "_poolId": "api--P2y2sn2WOryyOiBTVh1",
                "_productId": "-P2y2sn2WOryyOiBTVh1",
                "time": "18:45 - 19:30",
                "title": "宮川豚衛門",
                "desc": "已預約｜2026/11/4 18:45｜2人",
                "cost": 3500,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "food",
                "photos": [
                    "https://img.bigfang.tw/2025/02/1739972268-ae566253288191ce5d879e51dae1d8c3.jpg"
                ],
                "location": "https://maps.app.goo.gl/pCMuGB6yeqixSjGD9"
            },
            {
                "id": "api--OubeXXz7r2WWczz2F3q",
                "_poolId": "api--OubeXXz7r2WWczz2F3q",
                "_productId": "-OubeXXz7r2WWczz2F3q",
                "time": "20:00 - 20:30",
                "title": "二、三年坂 🏮",
                "desc": "24小時開放。\n大部份店家晚上沒營業，拍拍照散步。\n累的話可以跳過，去走花見小路。",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://letsgokyoto.com/wp-content/uploads/2024/06/IMG_2863-2.jpg"
                ],
                "location": ""
            },
            {
                "id": "api--OubgUg7XZBhksc3QfWV",
                "_poolId": "api--OubgUg7XZBhksc3QfWV",
                "_productId": "-OubgUg7XZBhksc3QfWV",
                "time": "21:00 - 21:30",
                "title": "八坂神社",
                "desc": "24小時開放。晚上會點燈，非常浪漫，適合夜間散步。",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://img.wenkaiin.com/1527040324-4b5798c495c592b1036e1821dda8437e.jpg"
                ],
                "location": ""
            },
            {
                "id": "api--OuYJ77bUK6_FxUYQhkp",
                "_poolId": "api--OuYJ77bUK6_FxUYQhkp",
                "_productId": "-OuYJ77bUK6_FxUYQhkp",
                "time": "21:30",
                "title": "GION GOZU 四条店 🍴",
                "desc": "13:00–22:00\n原味布丁大推 ¥600，好吃的話回程再買。",
                "cost": 600,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "food",
                "photos": [
                    "https://i0.wp.com/windiewang.com/wp-content/uploads/2025/10/IMG_5505.jpeg?w=1000&ssl=1"
                ],
                "location": "https://maps.app.goo.gl/BzkWZAF8YNw69TrZ8"
            }
        ],
        "2026-11-05": [
            {
                "id": "api--Ow7eH6Yl6MPT1Tc2YIr",
                "_poolId": "api--Ow7eH6Yl6MPT1Tc2YIr",
                "_productId": "-Ow7eH6Yl6MPT1Tc2YIr",
                "time": "09:00 – 09:45",
                "title": "晴明神社",
                "desc": "建議停留時間為 30 至 60 分鐘\n御朱印帳￥3000\n御朱印帳￥500",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://img.bigfang.tw/2023/04/1680594454-62bf1edb36141f114521ec4bb4175579.jpg"
                ],
                "location": ""
            },
            {
                "id": "api--OuLyfxzS2IrqquYvJJP",
                "_poolId": "api--OuLyfxzS2IrqquYvJJP",
                "_productId": "-OuLyfxzS2IrqquYvJJP",
                "time": "10:30 - 12:30",
                "title": "下鴨神社&河合神社 ⛩️",
                "desc": "10:00-16:00。世界文化遺產，京都最古老神社之一。\n季節限定御守¥1500\n建議停留時間為 1.5 至 2 小時",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://tw.wamazing.com/media/wp-content/uploads/sites/4/2019/07/shimogamojinja_pixta_94294698_M-853x569.jpg.webp"
                ],
                "location": ""
            },
            {
                "id": "api--Ov6BJQlJi4JV-ohJS53",
                "_poolId": "api--Ov6BJQlJi4JV-ohJS53",
                "_productId": "-Ov6BJQlJi4JV-ohJS53",
                "time": "12:45 - 13:30",
                "title": "DAY2 午餐",
                "desc": "午餐候選\n▸鴨町拉麵 ¥1000",
                "cost": 1500,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--Ow2xCwWk3m3laQ9ajZX",
                "_poolId": "api--Ow2xCwWk3m3laQ9ajZX",
                "_productId": "-Ow2xCwWk3m3laQ9ajZX",
                "time": "14:30",
                "title": "DAY2 晚餐候選&逛新京極商店街",
                "desc": "▸mina：unqlo、GU、loft\n▸bal ：muji\n▸MY ONLY FRAGRANCE SHINKYOGOKU ( 需預約 )\n\n晚餐候選\n▸麵匠 Taka松 ¥1000",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P22E7mCI-KIQpHhRQ1k",
                "_poolId": "api--P22E7mCI-KIQpHhRQ1k",
                "_productId": "-P22E7mCI-KIQpHhRQ1k",
                "time": "15:30 - 16:30",
                "title": "MY ONLY FRAGRANCE SHINKYOGOKU",
                "desc": "11:00–20:00\n可以調自己的香水，需預約 沒預約隨緣\n停留時間大概 30 分鐘到 1 小時",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [],
                "location": ""
            }
        ],
        "2026-11-06": [
            {
                "id": "api--OuYIrqpWmVn_nb7bHKg",
                "_poolId": "api--OuYIrqpWmVn_nb7bHKg",
                "_productId": "-OuYIrqpWmVn_nb7bHKg",
                "time": "06:15 - 08:00",
                "title": "清水寺 🌸",
                "desc": "06:00-18:00。門票￥400\n御朱印8:00-8:30開始\n從大宮搭公車207 ( 5:52 的車次 ¥230 )\n清水道可以拍到八坂之塔",
                "cost": 630,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg?utm_source=zh.wikipedia.org&utm_campaign=index&utm_content=original"
                ],
                "location": ""
            },
            {
                "id": "api--P1zm4hTqXmTBSN8xfxT",
                "_poolId": "api--P1zm4hTqXmTBSN8xfxT",
                "_productId": "-P1zm4hTqXmTBSN8xfxT",
                "time": "08:30",
                "title": "一寸法師",
                "desc": "08:00–20:30\n拉麵 有早餐拉麵\n鹽味比醬油好吃",
                "cost": 500,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "food",
                "photos": [],
                "location": "https://maps.app.goo.gl/EKkGdRAurSwcmgmy6"
            },
            {
                "id": "api--OubtGrN98QDcEq8e7kw",
                "_poolId": "api--OubtGrN98QDcEq8e7kw",
                "_productId": "-OubtGrN98QDcEq8e7kw",
                "time": "09:30 - 11:00",
                "title": "二、三年坂 🏮早上",
                "desc": "大部份店家都10點過後才開，可以買伴手禮或喝個茶再繼續下個行程。\n\n▸京都辣油香鬆 ¥600",
                "cost": 4000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a0/cd/a5/caption.jpg?w=900&h=500&s=1"
                ],
                "location": ""
            },
            {
                "id": "api--Ow8Svp2irYD3UqlQ70C",
                "_poolId": "api--Ow8Svp2irYD3UqlQ70C",
                "_productId": "-Ow8Svp2irYD3UqlQ70C",
                "time": "11:30 - 13:30",
                "title": "DAY3 午餐候選",
                "desc": "午餐候選\n▸錦市場\n▸Onimaru ¥350\n▸Mamemono ¥500\n▸Apple Pie Lab ¥600",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--Ow1xX5OHs2aJKWM5mi0",
                "_poolId": "api--Ow1xX5OHs2aJKWM5mi0",
                "_productId": "-Ow1xX5OHs2aJKWM5mi0",
                "time": "11:30 - 12:30",
                "title": "八坂神社 day3",
                "desc": "建議停留時間 1 小時\n累的話可跳過去吃午餐\n御朱印￥500",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://static.gltjp.com/glt/data/article/21000/20409/20251120_221812_a1149194_w1920.webp"
                ],
                "location": ""
            },
            {
                "id": "api--Ow3TZdbXyelE7IBVtR5",
                "_poolId": "api--Ow3TZdbXyelE7IBVtR5",
                "_productId": "-Ow3TZdbXyelE7IBVtR5",
                "time": "14:00 - 16:00",
                "title": "DAY3 回去補眠休息",
                "desc": "",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--Ow3lRP4J8nm5JXz1u4Y",
                "_poolId": "api--Ow3lRP4J8nm5JXz1u4Y",
                "_productId": "-Ow3lRP4J8nm5JXz1u4Y",
                "time": "17:30",
                "title": "DAY3 晚餐候選",
                "desc": "旅館附近\n▸炭焼 極 ¥1800",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--OubXJZGaoH5ak9ghZuJ",
                "_poolId": "api--OubXJZGaoH5ak9ghZuJ",
                "_productId": "-OubXJZGaoH5ak9ghZuJ",
                "time": "19:30 - 20:30",
                "title": "東寺(教王護國寺) 📍",
                "desc": "秋季會開放限定的夜間特別拜觀與紅楓點燈。\n夜間點燈：18:00 - 21:30，最晚入場21:00\n門票 ￥ 1000\n建議停留時間為 1 小時",
                "cost": 1000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [
                    "https://d1grca2t3zpuug.cloudfront.net/2026/05/kyoto-toji-202605-001-1920x1281.webp"
                ],
                "location": ""
            }
        ],
        "2026-11-07": [
            {
                "id": "api--P10ztL12Q1-XoNkLhyN",
                "_poolId": "api--P10ztL12Q1-XoNkLhyN",
                "_productId": "-P10ztL12Q1-XoNkLhyN",
                "time": "08:00 - 08:30",
                "title": "Hop Inn Kyoto Shijo Omiya (京都四條大宮霍普飯店) Check-out 🧳",
                "desc": "退房\n搭阪急京都線到日本橋（預計8:26）\n搭千日前線到鶴橋",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [],
                "location": "京都市中京区壬生坊城町18-1"
            },
            {
                "id": "api--OvuRaouWMxtuEQrU_bI",
                "_poolId": "api--OvuRaouWMxtuEQrU_bI",
                "_productId": "-OvuRaouWMxtuEQrU_bI",
                "time": "10:30",
                "title": "Cu Tennoji 放行李",
                "desc": "寄放行李；入住時間下午 4:00 至 12:00。",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": "大阪府大阪市天王寺区味原町14-23"
            },
            {
                "id": "api--OuYIzXMejSuoy-G5tt6",
                "_poolId": "api--OuYIzXMejSuoy-G5tt6",
                "_productId": "-OuYIzXMejSuoy-G5tt6",
                "time": "11:00 - 12:30",
                "title": "大阪城公園 🏯",
                "desc": "以大阪城公園、天守外觀與豐國神社為主，不強制進天守。",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [],
                "location": "大阪城公園"
            },
            {
                "id": "api--Ow8sxlHZOVOOLVbbIRe",
                "_poolId": "api--Ow8sxlHZOVOOLVbbIRe",
                "_productId": "-Ow8sxlHZOVOOLVbbIRe",
                "time": "12:30 - 13:30",
                "title": "DAY4 午餐候選",
                "desc": "▸Zenyatanimachi 2 Chometen ¥1500",
                "cost": 2500,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--OxQ-k4ZXhy1azrf7wqf",
                "_poolId": "api--OxQ-k4ZXhy1azrf7wqf",
                "_productId": "-OxQ-k4ZXhy1azrf7wqf",
                "time": "14:00",
                "title": "LUCUA & LUCUA1100",
                "desc": "10:30 - 20:30\n年輕人服飾美妝\nLUCUA\nB1 ▸ PRESS BUTTER SAND\n3F ▸ Beams、FREAK'S STORE\n6F ▸ Lowrys farm\n7F ▸ FREAK'S STORE ( 男裝 ) \n8F ▸ 3COINS +plus\n9F ▸ loft\n10F ▸ 美食餐廳\n\nLUCUA1100\n2F ▸ bijumam\n3F ▸ @cosme\n6F ▸ montbell、keen、ABC-MART GRAND STAGE",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "shopping",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P16GVipe4Af1yS434VC",
                "_poolId": "api--P16GVipe4Af1yS434VC",
                "_productId": "-P16GVipe4Af1yS434VC",
                "time": "17:00",
                "title": "GRAND FRONT OSAKA",
                "desc": "11:00 - 21:00\n戶外運動潮牌\n北館\n3F ▸關西最大muji\n\n南館\n2F ▸ AUX PARADIS\n始祖鳥、mammut",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "shopping",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--OwsT_H93L6ymkCk0zCw",
                "_poolId": "api--OwsT_H93L6ymkCk0zCw",
                "_productId": "-OwsT_H93L6ymkCk0zCw",
                "time": "18:00",
                "title": "DAY4 晚餐後選",
                "desc": "GRAND FRONT 南館\n7F ▸ 美食餐廳\n\nLinks & 友都八喜\n8F ▸ 美食餐廳",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P16Gasz2RONb5qCjL46",
                "_poolId": "api--P16Gasz2RONb5qCjL46",
                "_productId": "-P16Gasz2RONb5qCjL46",
                "time": "19:30",
                "title": "Links",
                "desc": "10:00 - 21:00\n每層都相通友都八喜\nB1 ▸ 小吃\n1F  ▸ uniqlo旗艦店\n3F ▸ GU",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "shopping",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P16EP0EkU_uj1rvGwlv",
                "_poolId": "api--P16EP0EkU_uj1rvGwlv",
                "_productId": "-P16EP0EkU_uj1rvGwlv",
                "time": "20:30",
                "title": "友都八喜",
                "desc": "09:30 - 22:00\n5F ▸ 扭蛋\n7F ▸ asics Walking",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "shopping",
                "photos": [],
                "location": ""
            }
        ],
        "2026-11-08": [
            {
                "id": "api--P111qj-fzy6J9L3yjEx",
                "_poolId": "api--P111qj-fzy6J9L3yjEx",
                "_productId": "-P111qj-fzy6J9L3yjEx",
                "time": "07:15 - 18:30",
                "title": "天橋立＋伊根舟屋一日團 🚌",
                "desc": "Klook 天橋立路線：天橋立＋伊根舟屋。\n實際集合地點、集合時間與導遊資訊，請以前一天 Klook／供應商通知為準。\n至少提早 15 分鐘抵達集合點。\n已預訂｜Klook 丹後鐵道路線｜單人 NT$1,973（已付款）",
                "cost": 0,
                "costTwd": 1973,
                "paymentStatus": "paid",
                "bookingPlatform": "Klook",
                "category": "sightseeing",
                "photos": [],
                "location": "天橋立・伊根舟屋"
            },
            {
                "id": "api--P10Qu6NN5ZCSzqt4rsF",
                "_poolId": "api--P10Qu6NN5ZCSzqt4rsF",
                "_productId": "-P10Qu6NN5ZCSzqt4rsF",
                "time": "12:00",
                "title": "DAY5 午餐候選",
                "desc": "",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P10R-abYHaEUm50dqTu",
                "_poolId": "api--P10R-abYHaEUm50dqTu",
                "_productId": "-P10R-abYHaEUm50dqTu",
                "time": "19:00",
                "title": "DAY5 晚餐候選",
                "desc": "",
                "cost": 3000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            }
        ],
        "2026-11-09": [
            {
                "id": "api--OuYJ4Bkt394eUgwFW-s",
                "_poolId": "api--OuYJ4Bkt394eUgwFW-s",
                "_productId": "-OuYJ4Bkt394eUgwFW-s",
                "time": "9:30 - 10:00",
                "title": "難波八阪神社 🦁️",
                "desc": "06:30-17:00。巨大震撼的獅子頭舞台，能吸走厄運帶來好運，求籤熱門地。\n扇子籤 ¥500",
                "cost": 500,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--OuYJ-kfiny5CJsJNrPt",
                "_poolId": "api--OuYJ-kfiny5CJsJNrPt",
                "_productId": "-OuYJ-kfiny5CJsJNrPt",
                "time": "10:30 - 17:30",
                "title": "心齋橋 & 道頓堀 🛍️",
                "desc": "▸ Shinsaibashi PARCO\n▸大丸百貨\n▸Uniqlo\n▸Daiso\n▸唐吉訶德\n▸跑跑人招牌\n▸HOKA",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "shopping",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P1cRG9Uu3uZHJGaTF3A",
                "_poolId": "api--P1cRG9Uu3uZHJGaTF3A",
                "_productId": "-P1cRG9Uu3uZHJGaTF3A",
                "time": "11:00 - 12:00",
                "title": "DAY6 午餐候選",
                "desc": "▸Shabucho 午餐¥3000 ( 11:30開 須排隊 )\n▸豚涮 蒸籠蒸 ( 12開  )",
                "cost": 3000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P10IOr0gG2A1NpXgkEe",
                "_poolId": "api--P10IOr0gG2A1NpXgkEe",
                "_productId": "-P10IOr0gG2A1NpXgkEe",
                "time": "17:30",
                "title": "DAY6 晚餐候選",
                "desc": "▸Ikareta Noodle Fishtons ¥1500",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            }
        ],
        "2026-11-10": [
            {
                "id": "api--P323qqfLHK7yRCq5jPF",
                "_poolId": "api--P323qqfLHK7yRCq5jPF",
                "_productId": "-P323qqfLHK7yRCq5jPF",
                "time": "09:30 - 12:00",
                "title": "勝尾寺 🎋",
                "desc": "建議07:45左右由大阪出發，先到箕面萱野站；官方直行巴士09:00起約每10分鐘一班。\n箕面萱野站～勝尾寺直行巴士成人單程¥800；2026/10/1起完全無現金，可用ICOCA／Suica／PiTaPa等，車內不能儲值。\n入山¥500＋巴士來回¥1,600",
                "cost": 2100,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [],
                "location": "勝尾寺"
            },
            {
                "id": "api--OwsT4QinNvc-S-V5sk7",
                "_poolId": "api--OwsT4QinNvc-S-V5sk7",
                "_productId": "-OwsT4QinNvc-S-V5sk7",
                "time": "13:30 - 14:30",
                "title": "DAY6 午餐後選",
                "desc": "阪急百貨\nB1、B2\nF12、F13",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--P16EugbRJWer4_qCQ62",
                "_poolId": "api--P16EugbRJWer4_qCQ62",
                "_productId": "-P16EugbRJWer4_qCQ62",
                "time": "14:30",
                "title": "阪急百貨",
                "desc": "10:00 - 20:00\n都精品\nB1 ▸Sugar Butter Tree ( 要排隊 可以平日再去買 )",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "shopping",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--OubXO5586wzieOFnciE",
                "_poolId": "api--OubXO5586wzieOFnciE",
                "_productId": "-OubXO5586wzieOFnciE",
                "time": "15:00",
                "title": "購物中心 HEP FIVE 🛍️",
                "desc": "11:00 - 20:00\n年輕流行服飾\n1F ▸ Beams、niko and\n6F ▸ 3COINS",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "shopping",
                "photos": [],
                "location": ""
            },
            {
                "id": "api--OxPv9IZusf2S_L-bd6Z",
                "_poolId": "api--OxPv9IZusf2S_L-bd6Z",
                "_productId": "-OxPv9IZusf2S_L-bd6Z",
                "time": "18:30 - 20:30",
                "title": "焼肉ごりちゃん お初天神店",
                "desc": "已預約｜2026/11/10 18:30｜2人",
                "cost": 2000,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "food",
                "photos": [],
                "location": "https://maps.app.goo.gl/s6MwFF5yx34d3SR9A"
            }
        ],
        "2026-11-11": [
            {
                "id": "api--P10ztbQFEZUEHFV_g5f",
                "_poolId": "api--P10ztbQFEZUEHFV_g5f",
                "_productId": "-P10ztbQFEZUEHFV_g5f",
                "time": "09:30 - 10:00",
                "title": "Cu Tennoji Check-out 🧳",
                "desc": "上午10:00 前需退房。",
                "cost": 0,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "sightseeing",
                "photos": [],
                "location": "大阪府大阪市天王寺区味原町14-23"
            },
            {
                "id": "api--P10zt2_B5k859m671Pz",
                "_poolId": "api--P10zt2_B5k859m671Pz",
                "_productId": "-P10zt2_B5k859m671Pz",
                "time": "15:25 - 17:55",
                "title": "MM027 (樂桃航空) 大阪關西 (KIX) → 台北桃園 (TPE) ✈️",
                "desc": "Cu Tennoji退房後前往近鐵上本町2F巴士總站，搭機場利木津巴士直達關西機場第2航廈。目前時刻表建議11:40發→12:42抵達T2；MM027 15:25起飛。Peach國際線報到在T2 1F，最晚起飛前50分鐘完成。出發前再確認最新時刻。",
                "cost": 4500,
                "costTwd": 0,
                "paymentStatus": "",
                "bookingPlatform": "",
                "category": "other",
                "photos": [],
                "location": "關西國際機場 第2航廈"
            }
        ]
    },
    "attractionPool": [
        {
            "id": "api--OuLyfxzS2IrqquYvJJP",
            "city": "Kyoto",
            "title": "下鴨神社&河合神社 ⛩️",
            "desc": "10:00-16:00。世界文化遺產，京都最古老神社之一。\n季節限定御守¥1500\n建議停留時間為 1.5 至 2 小時",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-05",
            "time": "10:30 - 12:30",
            "photos": [
                "https://tw.wamazing.com/media/wp-content/uploads/sites/4/2019/07/shimogamojinja_pixta_94294698_M-853x569.jpg.webp"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuLyfxzS2IrqquYvJJP"
        },
        {
            "id": "api--OuYIrqpWmVn_nb7bHKg",
            "city": "Kyoto",
            "title": "清水寺 🌸",
            "desc": "06:00-18:00。門票￥400\n御朱印8:00-8:30開始\n從大宮搭公車207 ( 5:52 的車次 ¥230 )\n清水道可以拍到八坂之塔",
            "cost": 630,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "06:15 - 08:00",
            "photos": [
                "https://upload.wikimedia.org/wikipedia/commons/a/ae/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg?utm_source=zh.wikipedia.org&utm_campaign=index&utm_content=original"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYIrqpWmVn_nb7bHKg"
        },
        {
            "id": "api--OuYItCuiq10u32x0LaA",
            "city": "Kyoto",
            "title": "伏見稻荷大社 🦊",
            "desc": "24小時開放，下午5點左右太陽下山，日落很漂亮。\n附近有很多攤位跟吉伊卡哇專門店。\n不上山太累了。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "15:00 - 17:00",
            "photos": [
                "https://d1grca2t3zpuug.cloudfront.net/2025/07/inari00-870x500-1752805331.webp"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYItCuiq10u32x0LaA"
        },
        {
            "id": "api--OuYIv7tybF-5M2AR9BD",
            "city": "Kyoto",
            "title": "鴨川 Shijō Bridge ➜ 花見小路附近走走",
            "desc": "從花見小路走路過鴨川",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "22:00 - 22:30",
            "photos": [
                "https://cdn.corner.inc/place-photo/AXQCQNR_kuTnkR_Scri9XlS6d6MbsYnkxEBpab8QlLO6w1zfaSwYyn9v2TTYLBUtKZwTKxvWSEgdKxODMfpSJ0TX5N5RWkn84KUh3lVWsBtIlpoJSnHlhxdpt4pK1XcyFpHi5wET8hQDlDFIHVAbHCGU5QNcYKwVtREKs_Jl9z9bLWRPv-c0qQ2f9iAYTkV0gj8Gu1ppdQPKxU6lMePOryQ6Q1-cvkyQo8tXY62w7A7i6F_kZToERQWBY4JVOtqNsTsGdtdzkJBheTRmiOft9Sm1djO4OmC-7xDfp3xRP5HlnwS1-0Y1J7Echu0sksrNtIUbDB_jB0Rl1uWm9GE5Hr9x8k_kZ-8c9Mo-tvE0kqE5IXltuZpuvs-xqgTK46VePaKPXv08QzjIOXlFlc4x0umLN5AULeuYzycMi-5enocYJbmrraQ0NKK6VTzXLE6QndrEtMHvaiIAulIxZMf7sold7U_hhcqhoCEPK__sd8Way3xguJwzk_oWX7kxk1HHjD1_JJYh0BahVOkhFeOk61c5H-tFzPMYOYjR_xdhN4O53Yh0L8CCdwJZAQtyEAQVLSS6dMFK5Qp0C2_hC7vho9g_NucCYLpUrQQHb-olAIBdrHICB0p83Vw6nUFWNkUPC1pTxO0taG-I.jpeg"
            ],
            "location": "https://maps.app.goo.gl/ppFSmTdgLinNcxEy8",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYIv7tybF-5M2AR9BD"
        },
        {
            "id": "api--OuYIwvih-UvarXnh42q",
            "city": "Kyoto",
            "title": "錦市場 🍢",
            "desc": "京都的廚房，有各式海鮮、小吃。注意有店家不開放邊走邊吃。\n有去過就好的地方。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "13:30 - 15:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYIwvih-UvarXnh42q"
        },
        {
            "id": "api--OuYIxgjZ-IpEr4qBRV-",
            "city": "Kyoto",
            "title": "Onimaru Kyoto Shijo Kawaramachi 🍙",
            "desc": "精緻好吃的飯糰店，Threads 熱門打卡美食。",
            "cost": 800,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "3.06",
            "tabelogUrl": "",
            "ratingChecked": "2026-09-08",
            "_productId": "-OuYIxgjZ-IpEr4qBRV-"
        },
        {
            "id": "api--OuYIzXMejSuoy-G5tt6",
            "city": "Osaka",
            "title": "大阪城公園 🏯",
            "desc": "以大阪城公園、天守外觀與豐國神社為主，不強制進天守。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "11:00 - 12:30",
            "photos": [],
            "location": "大阪城公園",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYIzXMejSuoy-G5tt6"
        },
        {
            "id": "api--OuYJ-kfiny5CJsJNrPt",
            "city": "Osaka",
            "title": "心齋橋 & 道頓堀 🛍️",
            "desc": "▸ Shinsaibashi PARCO\n▸大丸百貨\n▸Uniqlo\n▸Daiso\n▸唐吉訶德\n▸跑跑人招牌\n▸HOKA",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": true,
            "day": "2026-11-09",
            "time": "10:30 - 17:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYJ-kfiny5CJsJNrPt"
        },
        {
            "id": "api--OuYJ0T2Tyst4cpgP6ot",
            "city": "Osaka",
            "title": "大阪日本橋電器街 🎮",
            "desc": "11:00-19:00。類似東京秋葉原，充滿動漫、遊戲周邊與電子產品。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYJ0T2Tyst4cpgP6ot"
        },
        {
            "id": "api--OuYJ4Bkt394eUgwFW-s",
            "city": "Osaka",
            "title": "難波八阪神社 🦁️",
            "desc": "06:30-17:00。巨大震撼的獅子頭舞台，能吸走厄運帶來好運，求籤熱門地。\n扇子籤 ¥500",
            "cost": 500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-09",
            "time": "9:30 - 10:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYJ4Bkt394eUgwFW-s"
        },
        {
            "id": "api--OuYJ4h7oMC7joMAf1i4",
            "city": "Osaka",
            "title": "天滿市場 & 天神橋筋商店街 🛍️",
            "desc": "日本最長商店街！\n▸OS藥妝（極便宜，只收現金不能退稅）\n▸中村屋可樂餅 ¥160\n▸お好み焼 ( 大阪燒 ) 千草 ¥1200",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "11:30 - 14:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYJ4h7oMC7joMAf1i4"
        },
        {
            "id": "api--OuYJ5OK87tTJEprbYlT",
            "city": "Osaka",
            "title": "大阪天滿宮 ⛩️",
            "desc": "關西求學業、事業最知名的神社，主祀天神菅原道真。\n參觀完後逛街",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "11:00-11:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYJ5OK87tTJEprbYlT"
        },
        {
            "id": "api--OuYJ77bUK6_FxUYQhkp",
            "city": "Kyoto",
            "title": "GION GOZU 四条店 🍴",
            "desc": "13:00–22:00\n原味布丁大推 ¥600，好吃的話回程再買。",
            "cost": 600,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": true,
            "day": "2026-11-04",
            "time": "21:30",
            "photos": [
                "https://i0.wp.com/windiewang.com/wp-content/uploads/2025/10/IMG_5505.jpeg?w=1000&ssl=1"
            ],
            "location": "https://maps.app.goo.gl/BzkWZAF8YNw69TrZ8",
            "googleRating": "4.5",
            "tabelogRating": "3.20",
            "tabelogUrl": "",
            "ratingChecked": "2026-09-08",
            "_productId": "-OuYJ77bUK6_FxUYQhkp"
        },
        {
            "id": "api--OuYJ7xMh_faoyKJGY13",
            "city": "Osaka",
            "title": "HARBS Namba Parks 🍴",
            "desc": "位於難波 Parks 商場內的名店，招牌「水果千層蛋糕（Mille Crepes）」鮮奶油清爽不膩，搭配豐富新鮮水果，是關西必吃的甜點。",
            "cost": 1200,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [
                "https://leemider.com/wp-content/uploads/20190709234707_51.jpg"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "3.15",
            "tabelogUrl": "",
            "ratingChecked": "2026-09-08",
            "_productId": "-OuYJ7xMh_faoyKJGY13"
        },
        {
            "id": "api--OuYJ9qOfTx_HMYpcEI_",
            "city": "Kyoto",
            "title": "Mamemono and Taiyaki 🍴",
            "desc": "主打「賞味期限一分鐘」的牛油鯛魚燒。現烤外皮酥脆，裡面夾著冰涼的厚牛油與紅豆餡。",
            "cost": 500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [],
            "location": "",
            "googleRating": "4.2",
            "tabelogRating": "3.50",
            "tabelogUrl": "",
            "ratingChecked": "2026-09-08",
            "_productId": "-OuYJ9qOfTx_HMYpcEI_"
        },
        {
            "id": "api--OuYJB8zT1fC-eg64S3-",
            "city": "Osaka",
            "title": "Shabucho 🍴",
            "desc": "11:30–13:30\n17:30–22:00\ndcard多人在推，提供美味的國產牛、豬。\n\n午餐：\n【特選黑毛和牛壽喜燒】標準：4,800日圓\n【豬肉壽喜燒】標準：1,500日圓",
            "cost": 3000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [
                "https://tasting-japan.com/wp-content/uploads/2026/04/image-80-1024x574.webp"
            ],
            "location": "",
            "googleRating": "4.5",
            "tabelogRating": "3.54",
            "tabelogUrl": "",
            "ratingChecked": "2026-09-08",
            "_productId": "-OuYJB8zT1fC-eg64S3-"
        },
        {
            "id": "api--OuYJH6_OlZZfpqpE4Pe",
            "city": "Kyoto",
            "title": "北野天滿宮 🍁",
            "desc": "07:00-17:00。主祀學問之神菅原道真，秋天也是賞楓名所。御土居紅葉隧道極美。\n也有夜間點燈 ~ 20:00，門票 ￥ 1200。\n建議停留時間 1 小時",
            "cost": 1200,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "17:00 - 18:00",
            "photos": [
                "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/01/05/13/04/01/Kitano-tenmangu-shrine.jpg"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYJH6_OlZZfpqpE4Pe"
        },
        {
            "id": "api--OuYJLSrvmg4n-6ddX2p",
            "city": "Kyoto",
            "title": "東寺（教王護國寺） 🗼",
            "desc": "大門 05:00-17:00，一般參拜免費。\n JR「京都車站」八條口步行15分鐘。\n近鐵京都線「東寺車站」步行10分鐘。\n預計停留時間1小時",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [
                "https://d1grca2t3zpuug.cloudfront.net/2026/05/kyoto-toji-202605-001-1920x1281-1777937736.webp"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OuYJLSrvmg4n-6ddX2p"
        },
        {
            "id": "api--Ou_SgEWwKCU2H-9HlIJ",
            "city": "Kyoto",
            "title": "高台寺 🏮",
            "desc": "09:00-17:30。\n建議停留時間約為 45 至 60 分鐘\n累的話直接去下一個景點，可略過。\n門票￥800 \n御朱印￥300",
            "cost": 1100,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "12:00 - 13:00",
            "photos": [
                "https://www.bring-you.info/imgs/2015/08/kodaiji-7.jpg"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ou_SgEWwKCU2H-9HlIJ"
        },
        {
            "id": "api--Ou_stvvh-1huntDbKCX",
            "city": "Kyoto",
            "title": "金閣寺（鹿苑寺） ✨",
            "desc": "09:00-17:00。金碧輝煌的舍利塔倒映在鏡湖池，京都最具代表性的地標之一。\n建議停留時間約為 40 到 60 分鐘",
            "cost": 500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFh8t7StxF_3YjfUrwoVBknByjok2Ogr9xpA&s"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ou_stvvh-1huntDbKCX"
        },
        {
            "id": "api--OubXJZGaoH5ak9ghZuJ",
            "city": "Kyoto",
            "title": "東寺(教王護國寺) 📍",
            "desc": "秋季會開放限定的夜間特別拜觀與紅楓點燈。\n夜間點燈：18:00 - 21:30，最晚入場21:00\n門票 ￥ 1000\n建議停留時間為 1 小時",
            "cost": 1000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "19:30 - 20:30",
            "photos": [
                "https://d1grca2t3zpuug.cloudfront.net/2026/05/kyoto-toji-202605-001-1920x1281.webp"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OubXJZGaoH5ak9ghZuJ"
        },
        {
            "id": "api--OubXO5586wzieOFnciE",
            "city": "Osaka",
            "title": "購物中心 HEP FIVE 🛍️",
            "desc": "11:00 - 20:00\n年輕流行服飾\n1F ▸ Beams、niko and\n6F ▸ 3COINS",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": true,
            "day": "2026-11-10",
            "time": "15:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OubXO5586wzieOFnciE"
        },
        {
            "id": "api--OubeXXz7r2WWczz2F3q",
            "city": "Kyoto",
            "title": "二、三年坂 🏮",
            "desc": "24小時開放。\n大部份店家晚上沒營業，拍拍照散步。\n累的話可以跳過，去走花見小路。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-04",
            "time": "20:00 - 20:30",
            "photos": [
                "https://letsgokyoto.com/wp-content/uploads/2024/06/IMG_2863-2.jpg"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OubeXXz7r2WWczz2F3q"
        },
        {
            "id": "api--OubgUg7XZBhksc3QfWV",
            "city": "Kyoto",
            "title": "八坂神社",
            "desc": "24小時開放。晚上會點燈，非常浪漫，適合夜間散步。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-04",
            "time": "21:00 - 21:30",
            "photos": [
                "https://img.wenkaiin.com/1527040324-4b5798c495c592b1036e1821dda8437e.jpg"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OubgUg7XZBhksc3QfWV"
        },
        {
            "id": "api--OubtGrN98QDcEq8e7kw",
            "city": "Kyoto",
            "title": "二、三年坂 🏮早上",
            "desc": "大部份店家都10點過後才開，可以買伴手禮或喝個茶再繼續下個行程。\n\n▸京都辣油香鬆 ¥600",
            "cost": 4000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "09:30 - 11:00",
            "photos": [
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a0/cd/a5/caption.jpg?w=900&h=500&s=1"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OubtGrN98QDcEq8e7kw"
        },
        {
            "id": "api--Ov1O2wRLdPiYs-QRraP",
            "city": "Kyoto",
            "title": "東福寺",
            "desc": "09:00-16:00。\n聯票 ¥1000/每人",
            "cost": 1000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "13:30 - 15:00",
            "photos": [
                "https://asset.japan.travel/image/upload/v1646651273/kyoto/M_00172_001.jpg"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ov1O2wRLdPiYs-QRraP"
        },
        {
            "id": "api--Ov3iropWr4bH-uPgjUD",
            "city": "Kyoto",
            "title": "本能寺",
            "desc": "09:00-17:00\n建議停留時間 30 至 60 分鐘\n御朱印帳很好看！買",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "15:00 - 15:30",
            "photos": [
                "https://kavana.tw/wp-content/uploads/thumb_20200828122447_94.jpg"
            ],
            "location": "https://maps.app.goo.gl/f5r3L5uhfx9nBz7b8",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ov3iropWr4bH-uPgjUD"
        },
        {
            "id": "api--Ov4WbY3fGM9fucMzSpT",
            "city": "Kyoto",
            "title": "錦天滿宮",
            "desc": "08:00-20:00。\n建議停留 15 分鐘",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": false,
            "day": "",
            "time": "10:30 - 10:45",
            "photos": [
                "https://d1grca2t3zpuug.cloudfront.net/2017/03/nishikiichiba-11-1750837911.webp"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ov4WbY3fGM9fucMzSpT"
        },
        {
            "id": "api--Ov6BJQlJi4JV-ohJS53",
            "city": "Kyoto",
            "title": "DAY2 午餐",
            "desc": "午餐候選\n▸鴨町拉麵 ¥1000",
            "cost": 1500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-05",
            "time": "12:45 - 13:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ov6BJQlJi4JV-ohJS53"
        },
        {
            "id": "api--OvuRaouWMxtuEQrU_bI",
            "city": "Osaka",
            "title": "Cu Tennoji 放行李",
            "desc": "寄放行李；入住時間下午 4:00 至 12:00。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "10:30",
            "photos": [],
            "location": "大阪府大阪市天王寺区味原町14-23",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OvuRaouWMxtuEQrU_bI"
        },
        {
            "id": "api--Ow1xX5OHs2aJKWM5mi0",
            "city": "Kyoto",
            "title": "八坂神社 day3",
            "desc": "建議停留時間 1 小時\n累的話可跳過去吃午餐\n御朱印￥500",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "11:30 - 12:30",
            "photos": [
                "https://static.gltjp.com/glt/data/article/21000/20409/20251120_221812_a1149194_w1920.webp"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ow1xX5OHs2aJKWM5mi0"
        },
        {
            "id": "api--Ow2xCwWk3m3laQ9ajZX",
            "city": "Kyoto",
            "title": "DAY2 晚餐候選&逛新京極商店街",
            "desc": "▸mina：unqlo、GU、loft\n▸bal ：muji\n▸MY ONLY FRAGRANCE SHINKYOGOKU ( 需預約 )\n\n晚餐候選\n▸麵匠 Taka松 ¥1000",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-05",
            "time": "14:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ow2xCwWk3m3laQ9ajZX"
        },
        {
            "id": "api--Ow3TZdbXyelE7IBVtR5",
            "city": "Kyoto",
            "title": "DAY3 回去補眠休息",
            "desc": "",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "14:00 - 16:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ow3TZdbXyelE7IBVtR5"
        },
        {
            "id": "api--Ow3lRP4J8nm5JXz1u4Y",
            "city": "Kyoto",
            "title": "DAY3 晚餐候選",
            "desc": "旅館附近\n▸炭焼 極 ¥1800",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "17:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ow3lRP4J8nm5JXz1u4Y"
        },
        {
            "id": "api--Ow7eH6Yl6MPT1Tc2YIr",
            "city": "Kyoto",
            "title": "晴明神社",
            "desc": "建議停留時間為 30 至 60 分鐘\n御朱印帳￥3000\n御朱印帳￥500",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-05",
            "time": "09:00 – 09:45",
            "photos": [
                "https://img.bigfang.tw/2023/04/1680594454-62bf1edb36141f114521ec4bb4175579.jpg"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ow7eH6Yl6MPT1Tc2YIr"
        },
        {
            "id": "api--Ow8Svp2irYD3UqlQ70C",
            "city": "Kyoto",
            "title": "DAY3 午餐候選",
            "desc": "午餐候選\n▸錦市場\n▸Onimaru ¥350\n▸Mamemono ¥500\n▸Apple Pie Lab ¥600",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "11:30 - 13:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ow8Svp2irYD3UqlQ70C"
        },
        {
            "id": "api--Ow8sxlHZOVOOLVbbIRe",
            "city": "Osaka",
            "title": "DAY4 午餐候選",
            "desc": "▸Zenyatanimachi 2 Chometen ¥1500",
            "cost": 2500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "12:30 - 13:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-Ow8sxlHZOVOOLVbbIRe"
        },
        {
            "id": "api--OwsT4QinNvc-S-V5sk7",
            "city": "Osaka",
            "title": "DAY6 午餐後選",
            "desc": "阪急百貨\nB1、B2\nF12、F13",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-10",
            "time": "13:30 - 14:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OwsT4QinNvc-S-V5sk7"
        },
        {
            "id": "api--OwsT_H93L6ymkCk0zCw",
            "city": "Osaka",
            "title": "DAY4 晚餐後選",
            "desc": "GRAND FRONT 南館\n7F ▸ 美食餐廳\n\nLinks & 友都八喜\n8F ▸ 美食餐廳",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "18:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OwsT_H93L6ymkCk0zCw"
        },
        {
            "id": "api--OxPv9IZusf2S_L-bd6Z",
            "city": "Osaka",
            "title": "焼肉ごりちゃん お初天神店",
            "desc": "已預約｜2026/11/10 18:30｜2人",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": true,
            "day": "2026-11-10",
            "time": "18:30 - 20:30",
            "photos": [],
            "location": "https://maps.app.goo.gl/s6MwFF5yx34d3SR9A",
            "googleRating": "",
            "tabelogRating": "3.51",
            "tabelogUrl": "https://tabelog.com/osaka/A2701/A270101/27148234/",
            "ratingChecked": "2026-09-25",
            "_productId": "-OxPv9IZusf2S_L-bd6Z"
        },
        {
            "id": "api--OxQ-k4ZXhy1azrf7wqf",
            "city": "Osaka",
            "title": "LUCUA & LUCUA1100",
            "desc": "10:30 - 20:30\n年輕人服飾美妝\nLUCUA\nB1 ▸ PRESS BUTTER SAND\n3F ▸ Beams、FREAK'S STORE\n6F ▸ Lowrys farm\n7F ▸ FREAK'S STORE ( 男裝 ) \n8F ▸ 3COINS +plus\n9F ▸ loft\n10F ▸ 美食餐廳\n\nLUCUA1100\n2F ▸ bijumam\n3F ▸ @cosme\n6F ▸ montbell、keen、ABC-MART GRAND STAGE",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "14:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-OxQ-k4ZXhy1azrf7wqf"
        },
        {
            "id": "api--P10IOr0gG2A1NpXgkEe",
            "city": "Other",
            "title": "DAY6 晚餐候選",
            "desc": "▸Ikareta Noodle Fishtons ¥1500",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-09",
            "time": "17:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10IOr0gG2A1NpXgkEe"
        },
        {
            "id": "api--P10Qu6NN5ZCSzqt4rsF",
            "city": "Osaka",
            "title": "DAY5 午餐候選",
            "desc": "",
            "cost": 2000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-08",
            "time": "12:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10Qu6NN5ZCSzqt4rsF"
        },
        {
            "id": "api--P10R-abYHaEUm50dqTu",
            "city": "Osaka",
            "title": "DAY5 晚餐候選",
            "desc": "",
            "cost": 3000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-08",
            "time": "19:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10R-abYHaEUm50dqTu"
        },
        {
            "id": "api--P10zstRlbhecFp1DO1U",
            "city": "Osaka",
            "title": "MM024 (樂桃航空) 台北桃園 (TPE) → 大阪關西 (KIX) ✈️",
            "desc": "搭乘 06:07 的高鐵至桃園站（06:49 抵達），轉乘 A18 機場捷運至 A12 第一航廈，約 07:30 抵達 1F 出境大廳",
            "cost": 3000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-04",
            "time": "09:40 - 13:10",
            "photos": [],
            "location": "關西國際機場 第2航廈",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10zstRlbhecFp1DO1U"
        },
        {
            "id": "api--P10zt2_B5k859m671Pz",
            "city": "Other",
            "title": "MM027 (樂桃航空) 大阪關西 (KIX) → 台北桃園 (TPE) ✈️",
            "desc": "Cu Tennoji退房後前往近鐵上本町2F巴士總站，搭機場利木津巴士直達關西機場第2航廈。目前時刻表建議11:40發→12:42抵達T2；MM027 15:25起飛。Peach國際線報到在T2 1F，最晚起飛前50分鐘完成。出發前再確認最新時刻。",
            "cost": 4500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-11",
            "time": "15:25 - 17:55",
            "photos": [],
            "location": "關西國際機場 第2航廈",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10zt2_B5k859m671Pz"
        },
        {
            "id": "api--P10ztCne2UQWEWudnie",
            "city": "Other",
            "title": "Hop Inn Kyoto Shijo Omiya (京都四條大宮霍普飯店) Check-in 🏨",
            "desc": "抵達關西機場第二航廈後，直接從T2搭機場利木津巴士前往京都站八条口（目前單程¥2,800/人，100分鐘），再搭計程車(約 ¥1500) 前往Hop Inn Kyoto Shijo Omiya。",
            "cost": 4000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-04",
            "time": "17:00 - 17:30",
            "photos": [],
            "location": "京都市中京区壬生坊城町18-1",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10ztCne2UQWEWudnie"
        },
        {
            "id": "api--P10ztL12Q1-XoNkLhyN",
            "city": "Other",
            "title": "Hop Inn Kyoto Shijo Omiya (京都四條大宮霍普飯店) Check-out 🧳",
            "desc": "退房\n搭阪急京都線到日本橋（預計8:26）\n搭千日前線到鶴橋",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "08:00 - 08:30",
            "photos": [],
            "location": "京都市中京区壬生坊城町18-1",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10ztL12Q1-XoNkLhyN"
        },
        {
            "id": "api--P10ztUuJmxWgSWAHZcA",
            "city": "Other",
            "title": "Cu Tennoji Check-in 🏨",
            "desc": "已確認住宿為 Cu Tennoji。自助入住公寓，入住前約24小時提供房號與入住說明。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "hotel",
            "isEnabled": false,
            "day": "",
            "time": "15:00 - 16:00",
            "photos": [],
            "location": "大阪府大阪市天王寺区味原町14-23",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10ztUuJmxWgSWAHZcA"
        },
        {
            "id": "api--P10ztbQFEZUEHFV_g5f",
            "city": "Other",
            "title": "Cu Tennoji Check-out 🧳",
            "desc": "上午10:00 前需退房。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-11",
            "time": "09:30 - 10:00",
            "photos": [],
            "location": "大阪府大阪市天王寺区味原町14-23",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P10ztbQFEZUEHFV_g5f"
        },
        {
            "id": "api--P111FQsOkR-yZzqlzVu",
            "city": "Osaka",
            "title": "grenier 梅田店",
            "desc": "10:00–20:00\n梅田的人氣麵包甜點店。",
            "cost": 800,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkX3Q7Eo3KGtAqRJpWF3w49Fz0BDWGPmMlJv7RIDW2Oyom3AM4Xxlb4TI&s=10"
            ],
            "location": "",
            "googleRating": "",
            "tabelogRating": "3.54",
            "tabelogUrl": "https://tabelog.com/osaka/A2701/A270101/27130931/",
            "ratingChecked": "2026-09-08",
            "_productId": "-P111FQsOkR-yZzqlzVu"
        },
        {
            "id": "api--P111qj-fzy6J9L3yjEx",
            "city": "Other",
            "title": "天橋立＋伊根舟屋一日團 🚌",
            "desc": "Klook 天橋立路線：天橋立＋伊根舟屋。\n實際集合地點、集合時間與導遊資訊，請以前一天 Klook／供應商通知為準。\n至少提早 15 分鐘抵達集合點。\n已預訂｜Klook 丹後鐵道路線｜單人 NT$1,973（已付款）",
            "cost": 0,
            "costTwd": 1973,
            "paymentStatus": "paid",
            "bookingPlatform": "Klook",
            "bookingMarker": "2026-10-02-klook-amanohashidate-ine",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-08",
            "time": "07:15 - 18:30",
            "photos": [],
            "location": "天橋立・伊根舟屋",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P111qj-fzy6J9L3yjEx"
        },
        {
            "id": "api--P16E5cL0QBYfKgYShvK",
            "city": "Osaka",
            "title": "大丸百貨 梅田",
            "desc": "10:00 - 20:00",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "13:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P16E5cL0QBYfKgYShvK"
        },
        {
            "id": "api--P16EP0EkU_uj1rvGwlv",
            "city": "Osaka",
            "title": "友都八喜",
            "desc": "09:30 - 22:00\n5F ▸ 扭蛋\n7F ▸ asics Walking",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "20:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P16EP0EkU_uj1rvGwlv"
        },
        {
            "id": "api--P16Edn7GhNxAAP-KWBJ",
            "city": "Osaka",
            "title": "阪神百貨",
            "desc": "10:00 - 20:00\n7F ▸ muji",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "13:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P16Edn7GhNxAAP-KWBJ"
        },
        {
            "id": "api--P16EugbRJWer4_qCQ62",
            "city": "Osaka",
            "title": "阪急百貨",
            "desc": "10:00 - 20:00\n都精品\nB1 ▸Sugar Butter Tree ( 要排隊 可以平日再去買 )",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": true,
            "day": "2026-11-10",
            "time": "14:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P16EugbRJWer4_qCQ62"
        },
        {
            "id": "api--P16GVipe4Af1yS434VC",
            "city": "Osaka",
            "title": "GRAND FRONT OSAKA",
            "desc": "11:00 - 21:00\n戶外運動潮牌\n北館\n3F ▸關西最大muji\n\n南館\n2F ▸ AUX PARADIS\n始祖鳥、mammut",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "17:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P16GVipe4Af1yS434VC"
        },
        {
            "id": "api--P16Gasz2RONb5qCjL46",
            "city": "Osaka",
            "title": "Links",
            "desc": "10:00 - 21:00\n每層都相通友都八喜\nB1 ▸ 小吃\n1F  ▸ uniqlo旗艦店\n3F ▸ GU",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": true,
            "day": "2026-11-07",
            "time": "19:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P16Gasz2RONb5qCjL46"
        },
        {
            "id": "api--P16VdifFYzp5XbKB7FI",
            "city": "Kyoto",
            "title": "京都高島屋",
            "desc": "10:30 - 20:00\n5F keen 便宜",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "18:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P16VdifFYzp5XbKB7FI"
        },
        {
            "id": "api--P1BZz8D6Z-ltJcH1urU",
            "city": "Osaka",
            "title": "GARIGUETTE Osaka",
            "desc": "11:00 - 19:00\n千層酥好吃\n在GRAND FRONT OSAKA 廣場",
            "cost": 1400,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [
                "https://tblg.k-img.com/restaurant/images/Rvw/162987/640x640_rect_0080c8ce7d8a51b14a068493d1f1e290.jpg"
            ],
            "location": "",
            "googleRating": "4.1",
            "tabelogRating": "3.54",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P1BZz8D6Z-ltJcH1urU"
        },
        {
            "id": "api--P1E4MAmDa87xDlGxxS9",
            "city": "Osaka",
            "title": "GRAND GREEN OSAKA",
            "desc": "精品、精緻\n可以不用去",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P1E4MAmDa87xDlGxxS9"
        },
        {
            "id": "api--P1cRG9Uu3uZHJGaTF3A",
            "city": "Osaka",
            "title": "DAY6 午餐候選",
            "desc": "▸Shabucho 午餐¥3000 ( 11:30開 須排隊 )\n▸豚涮 蒸籠蒸 ( 12開  )",
            "cost": 3000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": true,
            "day": "2026-11-09",
            "time": "11:00 - 12:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P1cRG9Uu3uZHJGaTF3A"
        },
        {
            "id": "api--P1uv0WOYaKG_R7LHwOe",
            "city": "Kyoto",
            "title": "炭焼 極",
            "desc": "17:30–23:00\n燒鳥 在飯店附近",
            "cost": 1800,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [],
            "location": "37 Sagarimatsucho, Shimogyo Ward, Kyoto, 600-8381日本",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P1uv0WOYaKG_R7LHwOe"
        },
        {
            "id": "api--P1zm4hTqXmTBSN8xfxT",
            "city": "Kyoto",
            "title": "一寸法師",
            "desc": "08:00–20:30\n拉麵 有早餐拉麵\n鹽味比醬油好吃",
            "cost": 500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": true,
            "day": "2026-11-06",
            "time": "08:30",
            "photos": [],
            "location": "https://maps.app.goo.gl/EKkGdRAurSwcmgmy6",
            "googleRating": "4.7",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P1zm4hTqXmTBSN8xfxT"
        },
        {
            "id": "api--P22E7mCI-KIQpHhRQ1k",
            "city": "Kyoto",
            "title": "MY ONLY FRAGRANCE SHINKYOGOKU",
            "desc": "11:00–20:00\n可以調自己的香水，需預約 沒預約隨緣\n停留時間大概 30 分鐘到 1 小時",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-05",
            "time": "15:30 - 16:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P22E7mCI-KIQpHhRQ1k"
        },
        {
            "id": "api--P23s6jUzz4s53hr55Px",
            "city": "Kyoto",
            "title": "DAY2 晚餐",
            "desc": "",
            "cost": 3000,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "other",
            "isEnabled": false,
            "day": "",
            "time": "17:30 - 18:30",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P23s6jUzz4s53hr55Px"
        },
        {
            "id": "api--P2LtaxXZEdTNzp4BTJD",
            "city": "Osaka",
            "title": "梅田百貨補逛 & 採買 🛍️",
            "desc": "把前幾天漏逛／漏買的東西補齊。\n17:45左右結束購物準備去吃晚餐。",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "",
            "photos": [],
            "location": "梅田・大阪駅",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P2LtaxXZEdTNzp4BTJD"
        },
        {
            "id": "api--P2y2sn2WOryyOiBTVh1",
            "city": "Kyoto",
            "title": "宮川豚衛門",
            "desc": "已預約｜2026/11/4 18:45｜2人",
            "cost": 3500,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "food",
            "isEnabled": true,
            "day": "2026-11-04",
            "time": "18:45 - 19:30",
            "photos": [
                "https://img.bigfang.tw/2025/02/1739972268-ae566253288191ce5d879e51dae1d8c3.jpg"
            ],
            "location": "https://maps.app.goo.gl/pCMuGB6yeqixSjGD9",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P2y2sn2WOryyOiBTVh1"
        },
        {
            "id": "api--P323qqfLHK7yRCq5jPF",
            "city": "Osaka",
            "title": "勝尾寺 🎋",
            "desc": "建議07:45左右由大阪出發，先到箕面萱野站；官方直行巴士09:00起約每10分鐘一班。\n箕面萱野站～勝尾寺直行巴士成人單程¥800；2026/10/1起完全無現金，可用ICOCA／Suica／PiTaPa等，車內不能儲值。\n入山¥500＋巴士來回¥1,600",
            "cost": 2100,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "sightseeing",
            "isEnabled": true,
            "day": "2026-11-10",
            "time": "09:30 - 12:00",
            "photos": [],
            "location": "勝尾寺",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P323qqfLHK7yRCq5jPF"
        },
        {
            "id": "api--P3MSk5MXXNYpWJ5kDvC",
            "city": "Osaka",
            "title": "阪急三番街",
            "desc": "10:00–21:00",
            "cost": 0,
            "costTwd": 0,
            "paymentStatus": "",
            "bookingPlatform": "",
            "bookingMarker": "",
            "category": "shopping",
            "isEnabled": false,
            "day": "",
            "time": "19:00",
            "photos": [],
            "location": "",
            "googleRating": "",
            "tabelogRating": "",
            "tabelogUrl": "",
            "ratingChecked": "",
            "_productId": "-P3MSk5MXXNYpWJ5kDvC"
        }
    ],
    "checklist": [
        {
            "id": "c1",
            "category": "both",
            "item": "中華民國護照 (確認效期6個月以上) 🛂",
            "done": true
        },
        {
            "id": "c2",
            "category": "both",
            "item": "Visit Japan Web 申報 QR Code 截圖 📱",
            "done": false
        },
        {
            "id": "c3",
            "category": "both",
            "item": "日本上網 eSIM / 實體網卡購買 📶",
            "done": false
        },
        {
            "id": "c4",
            "category": "both",
            "item": "日圓現金 (多換些百圓與千圓面額) 💴",
            "done": false
        },
        {
            "id": "c5",
            "category": "both",
            "item": "ICOCA 卡 / 綁定 iPhone Apple Wallet 💳",
            "done": false
        },
        {
            "id": "c6",
            "category": "both",
            "item": "雙人投保海外旅遊平安險+不便險 🛡️",
            "done": true
        },
        {
            "id": "c7",
            "category": "both",
            "item": "登機手提行李秤重、打包防溢罐 🧳",
            "done": false
        },
        {
            "id": "c8",
            "category": "boy",
            "item": "刮鬍刀、個人換洗衣物、盥洗包 🪒",
            "done": false
        },
        {
            "id": "c9",
            "category": "boy",
            "item": "行動電源、各類充電線與豆腐頭 🔋",
            "done": false
        },
        {
            "id": "c10",
            "category": "boy",
            "item": "預訂門票確認信件彙整 (勝尾寺、Haruka等) 📄",
            "done": false
        },
        {
            "id": "c11",
            "category": "girl",
            "item": "保養品、化妝品、卸妝與個人護理用品 🧴",
            "done": false
        },
        {
            "id": "c12",
            "category": "girl",
            "item": "隱形眼鏡、常備藥品 (止痛、防蚊、暈車) 💊",
            "done": false
        },
        {
            "id": "c13",
            "category": "girl",
            "item": "美美拍照服裝、舒適好走的走路鞋 👟",
            "done": false
        },
        {
            "id": "c14",
            "category": "boy",
            "item": "內政部役男出境核准公文（線上申請並列印帶在身上） 🪖",
            "done": false
        }
    ],
    "messages": [],
    "dayOrder": {
        "2026-11-04": [
            "api--P10zstRlbhecFp1DO1U",
            "api--P10ztCne2UQWEWudnie",
            "api--P2y2sn2WOryyOiBTVh1",
            "api--OubeXXz7r2WWczz2F3q",
            "api--OubgUg7XZBhksc3QfWV",
            "api--OuYJ77bUK6_FxUYQhkp"
        ],
        "2026-11-05": [
            "api--Ow7eH6Yl6MPT1Tc2YIr",
            "api--OuLyfxzS2IrqquYvJJP",
            "api--Ov6BJQlJi4JV-ohJS53",
            "api--Ow2xCwWk3m3laQ9ajZX",
            "api--P22E7mCI-KIQpHhRQ1k"
        ],
        "2026-11-06": [
            "api--OuYIrqpWmVn_nb7bHKg",
            "api--P1zm4hTqXmTBSN8xfxT",
            "api--OubtGrN98QDcEq8e7kw",
            "api--Ow8Svp2irYD3UqlQ70C",
            "api--Ow1xX5OHs2aJKWM5mi0",
            "api--Ow3TZdbXyelE7IBVtR5",
            "api--Ow3lRP4J8nm5JXz1u4Y",
            "api--OubXJZGaoH5ak9ghZuJ"
        ],
        "2026-11-07": [
            "api--P10ztL12Q1-XoNkLhyN",
            "api--OvuRaouWMxtuEQrU_bI",
            "api--OuYIzXMejSuoy-G5tt6",
            "api--Ow8sxlHZOVOOLVbbIRe",
            "api--OxQ-k4ZXhy1azrf7wqf",
            "api--P16GVipe4Af1yS434VC",
            "api--OwsT_H93L6ymkCk0zCw",
            "api--P16Gasz2RONb5qCjL46",
            "api--P16EP0EkU_uj1rvGwlv"
        ],
        "2026-11-08": [
            "api--P111qj-fzy6J9L3yjEx",
            "api--P10Qu6NN5ZCSzqt4rsF",
            "api--P10R-abYHaEUm50dqTu"
        ],
        "2026-11-09": [
            "api--OuYJ4Bkt394eUgwFW-s",
            "api--OuYJ-kfiny5CJsJNrPt",
            "api--P1cRG9Uu3uZHJGaTF3A",
            "api--P10IOr0gG2A1NpXgkEe"
        ],
        "2026-11-10": [
            "api--P323qqfLHK7yRCq5jPF",
            "api--OwsT4QinNvc-S-V5sk7",
            "api--P16EugbRJWer4_qCQ62",
            "api--OubXO5586wzieOFnciE",
            "api--OxPv9IZusf2S_L-bd6Z"
        ],
        "2026-11-11": [
            "api--P10ztbQFEZUEHFV_g5f",
            "api--P10zt2_B5k859m671Pz"
        ]
    },
    "poolPhotos": {
        "api--OuYIv7tybF-5M2AR9BD": [
            "https://cdn.corner.inc/place-photo/AXQCQNR_kuTnkR_Scri9XlS6d6MbsYnkxEBpab8QlLO6w1zfaSwYyn9v2TTYLBUtKZwTKxvWSEgdKxODMfpSJ0TX5N5RWkn84KUh3lVWsBtIlpoJSnHlhxdpt4pK1XcyFpHi5wET8hQDlDFIHVAbHCGU5QNcYKwVtREKs_Jl9z9bLWRPv-c0qQ2f9iAYTkV0gj8Gu1ppdQPKxU6lMePOryQ6Q1-cvkyQo8tXY62w7A7i6F_kZToERQWBY4JVOtqNsTsGdtdzkJBheTRmiOft9Sm1djO4OmC-7xDfp3xRP5HlnwS1-0Y1J7Echu0sksrNtIUbDB_jB0Rl1uWm9GE5Hr9x8k_kZ-8c9Mo-tvE0kqE5IXltuZpuvs-xqgTK46VePaKPXv08QzjIOXlFlc4x0umLN5AULeuYzycMi-5enocYJbmrraQ0NKK6VTzXLE6QndrEtMHvaiIAulIxZMf7sold7U_hhcqhoCEPK__sd8Way3xguJwzk_oWX7kxk1HHjD1_JJYh0BahVOkhFeOk61c5H-tFzPMYOYjR_xdhN4O53Yh0L8CCdwJZAQtyEAQVLSS6dMFK5Qp0C2_hC7vho9g_NucCYLpUrQQHb-olAIBdrHICB0p83Vw6nUFWNkUPC1pTxO0taG-I.jpeg"
        ],
        "api--OuYIrqpWmVn_nb7bHKg": [
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg?utm_source=zh.wikipedia.org&utm_campaign=index&utm_content=original"
        ],
        "api--OuYJLSrvmg4n-6ddX2p": [
            "https://d1grca2t3zpuug.cloudfront.net/2026/05/kyoto-toji-202605-001-1920x1281-1777937736.webp"
        ],
        "api--OubtGrN98QDcEq8e7kw": [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a0/cd/a5/caption.jpg?w=900&h=500&s=1"
        ],
        "api--Ou_SgEWwKCU2H-9HlIJ": [
            "https://www.bring-you.info/imgs/2015/08/kodaiji-7.jpg"
        ],
        "api--OubgUg7XZBhksc3QfWV": [
            "https://img.wenkaiin.com/1527040324-4b5798c495c592b1036e1821dda8437e.jpg"
        ],
        "api--OuYIwvih-UvarXnh42q": [],
        "api--OubeXXz7r2WWczz2F3q": [
            "https://letsgokyoto.com/wp-content/uploads/2024/06/IMG_2863-2.jpg"
        ],
        "api--OuYItCuiq10u32x0LaA": [
            "https://d1grca2t3zpuug.cloudfront.net/2025/07/inari00-870x500-1752805331.webp"
        ],
        "api--Ov1O2wRLdPiYs-QRraP": [
            "https://asset.japan.travel/image/upload/v1646651273/kyoto/M_00172_001.jpg"
        ],
        "api--Ov3iropWr4bH-uPgjUD": [
            "https://kavana.tw/wp-content/uploads/thumb_20200828122447_94.jpg"
        ],
        "api--Ov4WbY3fGM9fucMzSpT": [
            "https://d1grca2t3zpuug.cloudfront.net/2017/03/nishikiichiba-11-1750837911.webp"
        ],
        "api--OuYJ77bUK6_FxUYQhkp": [
            "https://i0.wp.com/windiewang.com/wp-content/uploads/2025/10/IMG_5505.jpeg?w=1000&ssl=1"
        ],
        "api--OuYJH6_OlZZfpqpE4Pe": [
            "https://s3-ap-northeast-1.amazonaws.com/thegate/2021/01/05/13/04/01/Kitano-tenmangu-shrine.jpg"
        ],
        "api--OuLyfxzS2IrqquYvJJP": [
            "https://tw.wamazing.com/media/wp-content/uploads/sites/4/2019/07/shimogamojinja_pixta_94294698_M-853x569.jpg.webp"
        ],
        "api--OubXJZGaoH5ak9ghZuJ": [
            "https://d1grca2t3zpuug.cloudfront.net/2026/05/kyoto-toji-202605-001-1920x1281.webp"
        ],
        "api--OubWvWDtS0YofcrdqW0": [
            "https://d1grca2t3zpuug.cloudfront.net/2025/10/nijocastle_05-870x500.webp"
        ],
        "api--Ou_stvvh-1huntDbKCX": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFh8t7StxF_3YjfUrwoVBknByjok2Ogr9xpA&s"
        ],
        "api--Ov6BJQlJi4JV-ohJS53": [],
        "api--OuYJ4h7oMC7joMAf1i4": [],
        "api--OuYJ5OK87tTJEprbYlT": [],
        "api--OuYIzXMejSuoy-G5tt6": [],
        "api--OvuRaouWMxtuEQrU_bI": [],
        "api--Ow2xCwWk3m3laQ9ajZX": [],
        "api--Ow3TZdbXyelE7IBVtR5": [],
        "api--Ow1xX5OHs2aJKWM5mi0": [
            "https://static.gltjp.com/glt/data/article/21000/20409/20251120_221812_a1149194_w1920.webp"
        ],
        "api--Ow7eH6Yl6MPT1Tc2YIr": [
            "https://img.bigfang.tw/2023/04/1680594454-62bf1edb36141f114521ec4bb4175579.jpg"
        ],
        "api--Ow3lRP4J8nm5JXz1u4Y": [],
        "api--Ow8Svp2irYD3UqlQ70C": [],
        "api--OuYJ4Bkt394eUgwFW-s": [],
        "api--OwsSIxo8_WIBbtxRs3F": [],
        "api--OuYJ-kfiny5CJsJNrPt": [],
        "api--OwsT4QinNvc-S-V5sk7": [],
        "api--OwsT_H93L6ymkCk0zCw": [],
        "api--OubXO5586wzieOFnciE": [],
        "api--P10ztCne2UQWEWudnie": [],
        "api--P10ztL12Q1-XoNkLhyN": [],
        "api--P10zstRlbhecFp1DO1U": [],
        "api--P10zt2_B5k859m671Pz": [],
        "api--P111qj-fzy6J9L3yjEx": [],
        "api--OuYJ9qOfTx_HMYpcEI_": [],
        "api--OxQ-k4ZXhy1azrf7wqf": [],
        "api--P16Edn7GhNxAAP-KWBJ": [],
        "api--P16EugbRJWer4_qCQ62": [],
        "api--P16GVipe4Af1yS434VC": [],
        "api--P16Gasz2RONb5qCjL46": [],
        "api--P16VdifFYzp5XbKB7FI": [],
        "api--P16EP0EkU_uj1rvGwlv": [],
        "api--P1BZz8D6Z-ltJcH1urU": [
            "https://tblg.k-img.com/restaurant/images/Rvw/162987/640x640_rect_0080c8ce7d8a51b14a068493d1f1e290.jpg"
        ],
        "api--P1E4MAmDa87xDlGxxS9": [],
        "api--P16E5cL0QBYfKgYShvK": [],
        "api--P1zm4hTqXmTBSN8xfxT": [],
        "api--OuYJB8zT1fC-eg64S3-": [
            "https://tasting-japan.com/wp-content/uploads/2026/04/image-80-1024x574.webp"
        ],
        "api--P111FQsOkR-yZzqlzVu": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkX3Q7Eo3KGtAqRJpWF3w49Fz0BDWGPmMlJv7RIDW2Oyom3AM4Xxlb4TI&s=10"
        ],
        "api--P1cRG9Uu3uZHJGaTF3A": [],
        "api--OuYJ7xMh_faoyKJGY13": [
            "https://leemider.com/wp-content/uploads/20190709234707_51.jpg"
        ],
        "api--P1uv0WOYaKG_R7LHwOe": [],
        "api--P22E7mCI-KIQpHhRQ1k": [],
        "api--P10IOr0gG2A1NpXgkEe": [],
        "api--P2y2sn2WOryyOiBTVh1": [
            "https://img.bigfang.tw/2025/02/1739972268-ae566253288191ce5d879e51dae1d8c3.jpg"
        ],
        "api--P2LtaxXZEdTNzp4BTJD": [],
        "api--Ow8sxlHZOVOOLVbbIRe": [],
        "api--OxPv9IZusf2S_L-bd6Z": [],
        "api--P10R-abYHaEUm50dqTu": [],
        "api--P323qqfLHK7yRCq5jPF": [],
        "api--P10ztbQFEZUEHFV_g5f": [],
        "api--P3MSk5MXXNYpWJ5kDvC": []
    },
    "deletedPoolItems": [
        "g20",
        "g19",
        "g1",
        "api--OuLy_bmJdX1M34jV1jS",
        "g2",
        "api--OubXKebti0I8VcIznJ6",
        "g10",
        "api--OuYIhtUi6ipcl_HLQsR",
        "api--OuaSgsePWh5zJxzvveP",
        "g11",
        "api--OuYJAPeIbMEnQ9KAWDP",
        "api--OuYJ62C3qKdpHhXaMRU",
        "api--OuYJ-B6c975rvYWE7LD",
        "api--OuYJEMP0XHBtxtrWDJJ",
        "api--P111q6WvQ6uxgbPjLZ3",
        "-P111q6WvQ6uxgbPjLZ3",
        "飯店 Check-in: Hop Inn Kyoto Shijo Omiya 🏨",
        "飯店 Check-in: Hop Inn Kyoto Shijo Omiya",
        "api--P111qRWPaUrOJFA2SPK",
        "-P111qRWPaUrOJFA2SPK",
        "京都飯店 Check-out ",
        "京都飯店 Check-out",
        "api--P111r70hbFCBBLLyjki",
        "-P111r70hbFCBBLLyjki",
        "搭乘 MM027 航班返台 ✈️",
        "搭乘 MM027 航班返台",
        "api--P111pcI2IMnmIzgfOH-",
        "-P111pcI2IMnmIzgfOH-",
        "飛往大阪關西機場 (MM024) ✈️",
        "飛往大阪關西機場 (MM024)",
        "api--P1113aOrLP6VksdUGRM",
        "-P1113aOrLP6VksdUGRM",
        "黑門市場 ⚠️",
        "黑門市場",
        "api--P111BVkSHpANKxw89yN",
        "-P111BVkSHpANKxw89yN",
        "木津市場",
        "api--P111ENsxcVegWABXVT-",
        "-P111ENsxcVegWABXVT-",
        "PRESS BUTTER SAND 大阪高島屋",
        "api--P111Ehpl2Z7c-M3pa1M",
        "-P111Ehpl2Z7c-M3pa1M",
        "Sugar Butter Tree 阪急梅田店",
        "api--P111oknL6g6lr0Gd2Xk",
        "-P111oknL6g6lr0Gd2Xk",
        "お好み焼（大阪燒）千草",
        "api--P111-2E-akIled88aWW",
        "-P111-2E-akIled88aWW",
        "大阪燒 千房 🍴",
        "大阪燒 千房",
        "api--OuYJBexvoCKIkU_5ODM",
        "-OuYJBexvoCKIkU_5ODM",
        "Shabuwara 壽喜燒 涮涮鍋 花月店",
        "api--P110vZ7RKtl2uJfN_XB",
        "-P110vZ7RKtl2uJfN_XB",
        "法善寺",
        "api--P1112ckbZf55ZSRd0r_",
        "-P1112ckbZf55ZSRd0r_",
        "梅田藍天大樓 🌌",
        "梅田藍天大樓",
        "api--P111-OdutyTsVTkAGXf",
        "-P111-OdutyTsVTkAGXf",
        "唐吉訶德 道頓堀店 🛍️",
        "唐吉訶德 道頓堀店",
        "api--P1113H0YHVNWzax0ytg",
        "-P1113H0YHVNWzax0ytg",
        "勝尾寺 🔴",
        "勝尾寺",
        "api--P1113-eXCFf9EN9QD6G",
        "-P1113-eXCFf9EN9QD6G",
        "橘子街 (Orange Street) 🍊",
        "橘子街 (Orange Street)",
        "api--P1113wSQDK92NaOw7jy",
        "-P1113wSQDK92NaOw7jy",
        "通天閣 & 新世界 🗼",
        "通天閣 & 新世界",
        "api--P11185QP28FbRRCm5Cg",
        "-P11185QP28FbRRCm5Cg",
        "心齋橋PARCO 🛍️",
        "心齋橋PARCO",
        "api--P111CLKa-CXiRA0x55e",
        "-P111CLKa-CXiRA0x55e",
        "大阪歷史博物館",
        "api--P111Ck1W3bZJA8Gw-Gi",
        "-P111Ck1W3bZJA8Gw-Gi",
        "大丸百貨心齋橋店 本館 🛍️",
        "大丸百貨心齋橋店 本館",
        "api--P111D1uQf0GioEZRwBU",
        "-P111D1uQf0GioEZRwBU",
        "Os Drug 天滿店 🛍️",
        "Os Drug 天滿店",
        "api--P111DPRUQ9DXWolHhNB",
        "-P111DPRUQ9DXWolHhNB",
        "通天閣",
        "api--P111DlhsfZ1z1ZL6k5L",
        "-P111DlhsfZ1z1ZL6k5L",
        "Shinsaibashi PARCO 🛍️",
        "Shinsaibashi PARCO",
        "api--Ou_rp2lztiwVH_7hzec",
        "-Ou_rp2lztiwVH_7hzec",
        "永觀堂（禪林寺） 🍁",
        "永觀堂（禪林寺）",
        "api--Ou_SgqgyTYYY52UN0By",
        "-Ou_SgqgyTYYY52UN0By",
        "慈照寺（銀閣寺） 🍁",
        "慈照寺（銀閣寺）",
        "api--Ov0c14scPJKgDAixyhD",
        "-Ov0c14scPJKgDAixyhD",
        "安井金比羅宮（緣切緣結碑）",
        "api--OubXLWs9MOGjLTc_9ZK",
        "-OubXLWs9MOGjLTc_9ZK",
        "西本願寺 📍",
        "西本願寺",
        "api--P1118PyKR7ixPCz36hS",
        "-P1118PyKR7ixPCz36hS",
        "二條城 🏯",
        "二條城",
        "api--P111BDhNTe-OKbaiitg",
        "-P111BDhNTe-OKbaiitg",
        "賀茂御祖神社（下鴨神社）",
        "api--P111BsPtqPu6_65XBAH",
        "-P111BsPtqPu6_65XBAH",
        "京都塔",
        "api--Ov1Pgi8kuc9kbZwgVi4",
        "-Ov1Pgi8kuc9kbZwgVi4",
        "光明院",
        "api--OuYItrPZWzonKjoH97K",
        "-OuYItrPZWzonKjoH97K",
        "平安神宮 ⛩️",
        "平安神宮",
        "api--P1118lDkE-hYwoSZNrt",
        "-P1118lDkE-hYwoSZNrt",
        "京都御苑 🌲",
        "京都御苑",
        "api--OuYJ6bgB44qD477Vr0Q",
        "-OuYJ6bgB44qD477Vr0Q",
        "DONGURI Shijo-Omiya Store 🍴",
        "DONGURI Shijo-Omiya Store",
        "api--OuYIyGLl3mCocoA9AYA",
        "-OuYIyGLl3mCocoA9AYA",
        "Sukiyaki Kimura 🍲",
        "Sukiyaki Kimura",
        "api--P111E3-kSowmPmb7d2J",
        "-P111E3-kSowmPmb7d2J",
        "松屋 四條大宮站前店",
        "api--P111AZGofAtHXEa95Yq",
        "-P111AZGofAtHXEa95Yq",
        "四天王寺 🛕",
        "四天王寺",
        "api--OuYIysMX0Nae721yFSM",
        "-OuYIysMX0Nae721yFSM",
        "麵屋 豬一 🍜",
        "麵屋 豬一",
        "api--P111FzeoLnnUmPoI8Rr",
        "-P111FzeoLnnUmPoI8Rr",
        "Yasubee",
        "api--P111oNIVupmnkiuaSmE",
        "-P111oNIVupmnkiuaSmE",
        "麵屋練之助 🍜",
        "麵屋練之助",
        "api--P111o1XnD8Sbn2ibzFv",
        "-P111o1XnD8Sbn2ibzFv",
        "Yumemiya",
        "api--OuYJ8ZV08GfVwfa16oM",
        "-OuYJ8ZV08GfVwfa16oM",
        "HARBS 心齋橋Parco店 🍴",
        "HARBS 心齋橋Parco店",
        "api--P111-k61jdYQYEGyP7b",
        "-P111-k61jdYQYEGyP7b",
        "お好み焼 ( 大阪燒 ) 千草 🍴",
        "お好み焼 ( 大阪燒 ) 千草",
        "api--P1110_HvI3bVSnHzIfr",
        "-P1110_HvI3bVSnHzIfr",
        "Kusaka Curry Namba DINING MAISON 🍴",
        "Kusaka Curry Namba DINING MAISON",
        "api--P10U__vpfGBVDXripL2",
        "-P10U__vpfGBVDXripL2",
        "SUKIYAKI FUJIMOTO",
        "api--P111p3UdSw80HscvQdC",
        "-P111p3UdSw80HscvQdC",
        "可樂餅 中村屋",
        "api--P111F6hBvEHTSmAru9f",
        "-P111F6hBvEHTSmAru9f",
        "ÉCHIRÉ Marché au Beurre",
        "api--P111GLAVWa7IRDie1R0",
        "-P111GLAVWa7IRDie1R0",
        "Kuchibashi Modern",
        "api--Ouq_EUmSa3JbPinNVjI",
        "-Ouq_EUmSa3JbPinNVjI",
        "DAY1 晚餐候選"
    ],
    "scheduledItems": {
        "api--OuLyfxzS2IrqquYvJJP": "2026-11-05|10:30 - 12:30",
        "api--OuYIrqpWmVn_nb7bHKg": "2026-11-06|06:15 - 08:00",
        "api--OuYIzXMejSuoy-G5tt6": "2026-11-07|11:00 - 12:30",
        "api--OuYJ-kfiny5CJsJNrPt": "2026-11-09|10:30 - 17:30",
        "api--OuYJ4Bkt394eUgwFW-s": "2026-11-09|9:30 - 10:00",
        "api--OuYJ77bUK6_FxUYQhkp": "2026-11-04|21:30",
        "api--OubXJZGaoH5ak9ghZuJ": "2026-11-06|19:30 - 20:30",
        "api--OubXO5586wzieOFnciE": "2026-11-10|15:00",
        "api--OubeXXz7r2WWczz2F3q": "2026-11-04|20:00 - 20:30",
        "api--OubgUg7XZBhksc3QfWV": "2026-11-04|21:00 - 21:30",
        "api--OubtGrN98QDcEq8e7kw": "2026-11-06|09:30 - 11:00",
        "api--Ov6BJQlJi4JV-ohJS53": "2026-11-05|12:45 - 13:30",
        "api--OvuRaouWMxtuEQrU_bI": "2026-11-07|10:30",
        "api--Ow1xX5OHs2aJKWM5mi0": "2026-11-06|11:30 - 12:30",
        "api--Ow2xCwWk3m3laQ9ajZX": "2026-11-05|14:30",
        "api--Ow3TZdbXyelE7IBVtR5": "2026-11-06|14:00 - 16:00",
        "api--Ow3lRP4J8nm5JXz1u4Y": "2026-11-06|17:30",
        "api--Ow7eH6Yl6MPT1Tc2YIr": "2026-11-05|09:00 – 09:45",
        "api--Ow8Svp2irYD3UqlQ70C": "2026-11-06|11:30 - 13:30",
        "api--Ow8sxlHZOVOOLVbbIRe": "2026-11-07|12:30 - 13:30",
        "api--OwsT4QinNvc-S-V5sk7": "2026-11-10|13:30 - 14:30",
        "api--OwsT_H93L6ymkCk0zCw": "2026-11-07|18:00",
        "api--OxPv9IZusf2S_L-bd6Z": "2026-11-10|18:30 - 20:30",
        "api--OxQ-k4ZXhy1azrf7wqf": "2026-11-07|14:00",
        "api--P10IOr0gG2A1NpXgkEe": "2026-11-09|17:30",
        "api--P10Qu6NN5ZCSzqt4rsF": "2026-11-08|12:00",
        "api--P10R-abYHaEUm50dqTu": "2026-11-08|19:00",
        "api--P10zstRlbhecFp1DO1U": "2026-11-04|09:40 - 13:10",
        "api--P10zt2_B5k859m671Pz": "2026-11-11|15:25 - 17:55",
        "api--P10ztCne2UQWEWudnie": "2026-11-04|17:00 - 17:30",
        "api--P10ztL12Q1-XoNkLhyN": "2026-11-07|08:00 - 08:30",
        "api--P10ztbQFEZUEHFV_g5f": "2026-11-11|09:30 - 10:00",
        "api--P111qj-fzy6J9L3yjEx": "2026-11-08|07:15 - 18:30",
        "api--P16EP0EkU_uj1rvGwlv": "2026-11-07|20:30",
        "api--P16EugbRJWer4_qCQ62": "2026-11-10|14:30",
        "api--P16GVipe4Af1yS434VC": "2026-11-07|17:00",
        "api--P16Gasz2RONb5qCjL46": "2026-11-07|19:30",
        "api--P1cRG9Uu3uZHJGaTF3A": "2026-11-09|11:00 - 12:00",
        "api--P1zm4hTqXmTBSN8xfxT": "2026-11-06|08:30",
        "api--P22E7mCI-KIQpHhRQ1k": "2026-11-05|15:30 - 16:30",
        "api--P2y2sn2WOryyOiBTVh1": "2026-11-04|18:45 - 19:30",
        "api--P323qqfLHK7yRCq5jPF": "2026-11-10|09:30 - 12:00"
    },
    "souvenirs": [
        {
            "id": "souv-1781008392031",
            "name": "PRESS BUTTER SAND",
            "category": "零食",
            "shop": "大丸京都/LUCUA",
            "price": 2000,
            "photo": "https://megapx-assets.dcard.tw/images/f4822c4a-88d6-4668-9b37-eb12a2e3bd33/orig.jpeg",
            "done": true,
            "notes": "LUCUA B1"
        },
        {
            "id": "souv-1781288301765",
            "name": "化妝品",
            "category": "美妝",
            "shop": "藥妝店",
            "price": 4000,
            "photo": "",
            "notes": "CEZANNE\n▸濾鏡提亮粉餅01 ¥700\n▸柔潤腮紅01/04 ¥550\n▸小顏修修筆02 ¥660\n▸混色修容盤  ( 全3色,01 ) ¥781\n\nCANMAKE\n▸激細滑順眼線膠筆 ( 直徑1.5MM ) ¥700\n\n▸Rosy Rosa 多用途粉撲2入 ¥638",
            "done": true
        },
        {
            "id": "souv-1782526352446",
            "name": "本能寺",
            "category": "其他",
            "shop": "",
            "price": 3000,
            "photo": "",
            "notes": "御朱印帳+御朱印約 ¥ 3000",
            "done": false
        },
        {
            "id": "souv-1783936272292",
            "name": "清水寺",
            "category": "其他",
            "shop": "",
            "price": 900,
            "photo": "",
            "notes": "御朱印8:00-8:30開始 御朱印 ¥ 300\n御朱印位置：\n14、15跟17之間、20對面",
            "done": false
        },
        {
            "id": "souv-1788351851141",
            "name": "ululis髮油",
            "category": "美妝",
            "shop": "藥妝店",
            "price": 1400,
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfx3pz2qCyBqAEkPdlEywglR5asBlkon3BujLeLhDh5FAWQLfjm1RKqw&s=10",
            "notes": "ululis髮油 100ml NT$280 ¥1,400\n黃色or黑色",
            "done": true
        },
        {
            "id": "souv-1788353102939",
            "name": "星巴克焙茶拿鐵",
            "category": "超商",
            "shop": "星巴克",
            "price": 600,
            "photo": "https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/723934629_17971078857117523_3655949315668813659_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzkyMjk5NTY5NDcwMDk3NTM4OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=EVVlLfPFdBAQ7kNvwEp0FEH&_nc_oc=Adr-BRQFjnMSkhX6J5Zfoj6f10TAz37WAiBy99fOsZnynzJyC6sybtzXXxhBNd27XMw&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=H2IdIlNRC6V0Qs0iXmHwVA&_nc_ss=7b2a8&oh=00_AQIoUYNcKGt0M3_Kgmok_aBt2wS1b7xCt-EeOYwux_BcyQ&oe=6A9DE5D9",
            "notes": "拿照片給店員看就好 NT$120",
            "done": true,
            "meDone": true
        },
        {
            "id": "souv-1788353406724",
            "name": "舞妓辣仙貝",
            "category": "零食",
            "shop": "京都清水寺",
            "price": 500,
            "photo": "https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/650928842_17951416038101585_5608922067390107101_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=Mzg1MDkwNDQ1NTQ2NjY4NTU2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTAwMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=xNPdnpTgMWkQ7kNvwHMbtJj&_nc_oc=AdpQzGBfnbSo-MUM57c_LIsgYtAN_-w6Jw4H8dOnNqVRRqqT-CSjPaw790RPmNcYjqo&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=1kcW3QG15vSjiiCPIqPdvg&_nc_ss=7b2a8&oh=00_AQKsyCwCfUqOuncCC1i-VJprTK4Kja-8q37bOY_OZhRRwA&oe=6A9DE512",
            "notes": "舞妓激辛咖哩仙貝（舞妓はんひぃ〜ひぃ〜カレーせんべい）NT$100",
            "done": true
        },
        {
            "id": "souv-1788359692073",
            "name": "齒磨殿堂美白牙膏",
            "category": "美妝",
            "shop": "藥妝店",
            "price": 3000,
            "photo": "https://scontent-tpe1-1.cdninstagram.com/v/t51.82787-15/572241421_17933732427102460_6521866035692214748_n.jpg?stp=cp6_dst-jpegr_e35_tt6&_nc_cat=107&ig_cache_key=Mzc1MTkzNjc0ODE3MjgzMzcyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=EMN5YEVAJ8UQ7kNvwF492TY&_nc_oc=AdpK73kRgPy2waiZle1h6QWQ7vsw8KMA4-fR69jb5oPVKO5uq19V7Sw9IM6Z3zzAn1o&_nc_zt=23&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_gid=ageVQAnyuahVNd-i860d6w&_nc_ss=7b2a8&oh=00_AQLCxy-_9W-_DNxWj7EmHvM9NrlKUWs9JN48V0hDd-Hc6Q&oe=6A9DEC29",
            "notes": "NT$600\n藍色：去垢淨白\n深藍：3倍淨白\n綠色：清新淨白（預防口臭）",
            "done": true,
            "meDone": true,
            "girlDone": false
        },
        {
            "id": "souv-1788408751573",
            "name": "TAKAMI",
            "category": "美妝",
            "shop": "藥妝店",
            "price": 5000,
            "photo": "https://www.takami-labo.com/assets/img/products/skinpeel/product_320px@2x.webp",
            "notes": "30ml NT$1000\n\nKyoto LOFT / 大阪梅田cosme 買的到",
            "done": false,
            "meDone": false,
            "girlDone": false
        },
        {
            "id": "souv-1788891046614",
            "name": "Sugar Butter Tree",
            "category": "零食",
            "shop": "阪急梅田店",
            "price": 3000,
            "photo": "",
            "notes": "",
            "done": true,
            "girlDone": true,
            "meDone": false
        },
        {
            "id": "souv-1788891182753",
            "name": "晴明神社",
            "category": "其他",
            "shop": "",
            "price": 3500,
            "photo": "",
            "notes": "御朱印帳￥3000\n御朱印￥500",
            "done": true
        },
        {
            "id": "souv-1788891197567",
            "name": "下鴨神社&河合神社",
            "category": "其他",
            "shop": "",
            "price": 1500,
            "photo": "",
            "notes": "季節限定御守¥1500",
            "done": true
        },
        {
            "id": "souv-1789448823509",
            "name": "HOKA",
            "category": "服飾",
            "shop": "",
            "price": 25000,
            "photo": "",
            "notes": "▸STINSON BREEZE ¥25300 NT$5000\n▸BONDI MARY JANE BLACK ¥28,600 NT$5700\n▸HOKA Ora Primo EXT 台灣賣4500\n▸HOKA Mafate",
            "done": true,
            "meDone": true
        },
        {
            "id": "souv-1789619950431",
            "name": "KUBOMI 棉花糖餅乾",
            "category": "零食",
            "shop": "關西機場",
            "price": 2000,
            "photo": "https://img.feebee.tw/i/AK0NOMc4MQCsvAuGyjCT5srDJZ_VRDZdTPn8PFaZkdM/372/aHR0cHM6Ly9jZi5zaG9wZWUudHcvZmlsZS90dy0xMTEzNDIwNy04MjBsNy1tbXZkdG5yb2Zkdm4yZg.webp",
            "notes": "KUBOMI 棉花糖餅乾12入 NT$400",
            "done": true
        },
        {
            "id": "souv-1789631138599",
            "name": "Lawson",
            "category": "超商",
            "shop": "",
            "price": 2000,
            "photo": "",
            "notes": "▸醜麵包 ( 也三顆星都是日本投票過好吃的麵包 ) ¥118\n▸炸雞君 ¥278\n▸生乳捲 ¥214\n▸紅豆奶油銅鑼燒 ( 冷凍櫃 ) ¥214\n▸LAWSON 一燈拉麵 ¥348",
            "done": true,
            "meDone": true
        },
        {
            "id": "souv-1789813720025",
            "name": "muji",
            "category": "超商",
            "shop": "",
            "price": 10000,
            "photo": "",
            "notes": "▸司康 ¥190\n▸藥用抗老霜面膜 ¥2490 \n▸梅子軟糖 ¥120",
            "done": true,
            "meDone": false
        },
        {
            "id": "souv-1789831395123",
            "name": "各處有賣 超商等",
            "category": "超商",
            "shop": "唐吉訶德",
            "price": 3000,
            "photo": "",
            "notes": "▸Premium Hichew ¥160  NT$35\n▸泡麵 鴨to蔥  ¥292\n▸泡麵 凄台系列 背脂  ¥300 ( 超推一定要買 )\n▸草莓pocky ¥198",
            "done": true,
            "meDone": true
        },
        {
            "id": "souv-1789838950443",
            "name": "合利他命NIGHT RECOVER",
            "category": "藥品",
            "shop": "",
            "price": 5220,
            "photo": "https://sugiphotoblob.blob.core.windows.net/photo/4987910003665/4987910003665_1.webp",
            "notes": "合利他命NIGHT RECOVER 160錠 NT$1000\n好睡覺 睡醒不會累",
            "done": true
        },
        {
            "id": "souv-1790010581020",
            "name": "全家",
            "category": "超商",
            "shop": "",
            "price": 1000,
            "photo": "",
            "notes": "▸辣味炸雞 ¥258\n▸炸雞君 ¥278",
            "done": true
        },
        {
            "id": "souv-1790011261661",
            "name": "7-11",
            "category": "超商",
            "shop": "",
            "price": 1500,
            "photo": "",
            "notes": "▸甜甜圈卡士達奶油球 ¥140\n▸砂糖樹餅乾 ¥289\n▸7-11 蒙古拉麵 ¥259\n▸7-11 蒙古泡飯 ¥257",
            "done": true
        },
        {
            "id": "souv-1790533991340",
            "name": "尿素20%乳霜",
            "category": "藥品",
            "shop": "",
            "price": 1000,
            "photo": "",
            "notes": "",
            "done": true
        },
        {
            "id": "souv-1790654286274",
            "name": "EVE止痛藥",
            "category": "藥品",
            "shop": "",
            "price": 1000,
            "photo": "",
            "notes": "",
            "done": true
        },
        {
            "id": "souv-1790660278702",
            "name": "SS製藥 暈車藥 10粒",
            "category": "藥品",
            "shop": "",
            "price": 2000,
            "photo": "https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.82787-15/642530532_17934447327190381_6443182079022333909_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzg0NDc1NjkyNjA2OTA5MTc3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTMyMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=7jlbCkTjLIEQ7kNvwFnnl3z&_nc_oc=AdoMBk82YHQAXAMul-5izTmb5JhdpL3Aa6Sv3gqJj3y3HeFJzQE6RB6jq_L1MOJPpRc&_nc_zt=23&_nc_ht=instagram.ftpe8-3.fna&_nc_gid=jv8RGPhitwRRahIKrmDSog&_nc_ss=7b2a8&oh=00_AQOh3jlf8xJvEsQzcJnwaeqjmt1Qm6BEqkwl7eBBUCNIaA&oe=6AC11203",
            "notes": "10粒/包 ¥1000 \n買兩包\n很有用且不昏睡",
            "done": true
        },
        {
            "id": "souv-1790661248113",
            "name": "樂敦製藥 曼秀雷敦 Medi Quick E 耳內止癢藥液 30mL",
            "category": "藥品",
            "shop": "",
            "price": 1200,
            "photo": "https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.82787-15/573105278_17928597240114660_3019918330691750889_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzc1MjA2NDg1MzMxNTE0NDM4OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNDQ3LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=IBuokRJ2q-kQ7kNvwE63RB3&_nc_oc=AdqQ2Nv-KIu1Px3eU2qBBXUEZukB_84mK9-_nuGlfw3iK4O4Fzv1wujaylimakQs5zU&_nc_zt=23&_nc_ht=instagram.ftpe8-3.fna&_nc_gid=7dVaYfKMdwJ8ezasolTOFg&_nc_ss=7b2a8&oh=00_AQObSyK_iA-fK38iRSV8A54ZZXiEwNn8vbjNYeFuWs6mqQ&oe=6AC13F2A",
            "notes": "油耳耳朵癢\n有類固醇不建議長期使用\n棉花棒耳朵內擦一圈保證不癢",
            "done": true
        },
        {
            "id": "souv-1791046916578",
            "name": "Gyutto質感整形髮膜 200g",
            "category": "美妝",
            "shop": "",
            "price": 1500,
            "photo": "https://i7.momoshop.com.tw/1772024729/goodsimg/TP000/8311/0002/100/TP00083110002100_R_m.jpg",
            "notes": "",
            "done": true,
            "meDone": false,
            "girlDone": true
        },
        {
            "id": "souv-1791047693704",
            "name": "MY ONLY FRAGRANCE",
            "category": "美妝",
            "shop": "MY ONLY FRAGRANCE SHINKYOGOKU",
            "price": 8000,
            "photo": "",
            "notes": "調自己的香水   NT$1600",
            "done": true,
            "meDone": false,
            "girlDone": true
        },
        {
            "id": "souv-1791208796416",
            "name": "unqlo",
            "category": "服飾",
            "shop": "",
            "price": 8000,
            "photo": "",
            "notes": "▸發熱衣 ¥1290 ( 與台灣價差兩倍 )\n▸保暖褲 ¥1500\n▸AIRism 防紫外線緊身褲 ¥1500\n▸無鋼圈內衣 ¥1990 ( 與台灣價差兩倍 )",
            "done": true,
            "meDone": false,
            "girlDone": true
        }
    ]
};
// [INITIAL_DATA_END]

// GLOBAL DATABASE STATE
// db starts as null; populated by initApp() which loads from API only
let db = null;
let activeTab = 'dashboard';
let currentSelectedDay = "2026-11-04";
let currentPoolFilter = 'Kyoto-sightseeing';
let currentPoolPage = 1;
const JPY_TO_TWD_RATE = 0.20;

const CURRENT_CACHE_VERSION = '20261008_v3_user_json';
// Clean up old localStorage data on page load
(function cleanupOldLocalStorage() {
    try {
        localStorage.removeItem('kansai_trip_db');
        localStorage.removeItem('kansai_trip_messages');
        localStorage.removeItem('kansai_trip_checklist_state');
        localStorage.removeItem('deletedPoolIds');
        if (localStorage.getItem('kansai_trip_cache_version') !== CURRENT_CACHE_VERSION) {
            localStorage.removeItem('kansai_trip_db_cache');
            localStorage.setItem('kansai_trip_cache_version', CURRENT_CACHE_VERSION);
        }
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
let lastSyncedMaster = null; // last master snapshot read from HexSchool; used for conflict-safe merges

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
    const createRes = await hexAPI.createProduct(productData);
    const directId = createRes?.product?.id || createRes?.id;
    if (directId) {
        setCacheId('prod', cacheKey, directId);
        return directId;
    }
    const updated = await hexAPI.getProducts();
    const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
    const created = updated.find(p => p.title === title || normalizeTitle(p.title) === normalizeTitle(title));
    if (created) setCacheId('prod', cacheKey, created.id);
    return created ? created.id : null;
}

async function ensurePoolProduct(item) {
    const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
    const productData = {
        title: item.title || '未命名景點',
        content: JSON.stringify({
            city: item.city || 'Kyoto',
            desc: item.desc || '',
            cost: item.cost || 0,
            costTwd: item.costTwd || 0,
            paymentStatus: item.paymentStatus || '',
            bookingPlatform: item.bookingPlatform || '',
            bookingMarker: item.bookingMarker || '',
            category: item.category || 'sightseeing',
            day: item.day || '',
            photos: item.photos || [],
            location: item.location || '',
            time: item.time || '',
            googleRating: item.googleRating || '',
            tabelogRating: item.tabelogRating || '',
            tabelogUrl: item.tabelogUrl || '',
            ratingChecked: item.ratingChecked || '',
            scheduleMarker: item.scheduleMarker || 'user-edited'
        }),
        category: '候選景點',
        origin_price: item.cost || 0,
        price: 0,
        unit: item.day ? (item.day + '|' + (item.time || '10:00 - 12:00')) : '景點',
        is_enabled: 1,
        num: 1
    };
    const cacheKey = `pool:${item.id}`;
    const existingId = getCacheId('pool', cacheKey);
    if (existingId) {
        try {
            await hexAPI.updateProduct(existingId, productData);
            return existingId;
        } catch {
            removeCacheId('pool', cacheKey);
        }
    }
    const all = await hexAPI.getProducts();
    const norm = normalizeTitle(item.title);
    const found = all.find(p => p.category === '候選景點' && (p.title === item.title || normalizeTitle(p.title) === norm));
    if (found) {
        setCacheId('pool', cacheKey, found.id);
        await hexAPI.updateProduct(found.id, productData);
        return found.id;
    }

    const createRes = await hexAPI.createProduct(productData);
    const directId = createRes?.product?.id || createRes?.id;
    if (directId) {
        setCacheId('pool', cacheKey, directId);
        return directId;
    }

    const updated = await hexAPI.getProducts();
    const created = updated.find(p => p.category === '候選景點' && (p.title === item.title || normalizeTitle(p.title) === norm));
    if (created) {
        setCacheId('pool', cacheKey, created.id);
        return created.id;
    }
    throw new Error('雲端資料庫未能建立產品或未取得產品 ID');
}

// Verified restaurant metadata migration. Values are persisted into Hexschool Products;
// the UI continues to read ratings only from API product content.
const VERIFIED_RESTAURANT_RATINGS = [
    { names:['松屋 四條大宮站前店','松屋 四条大宮駅前店'], t:'3.04' },
    { names:['PRESS BUTTER SAND 大阪高島屋'], t:'3.05' },
    { names:['Sugar Butter Tree 阪急梅田店','Sugar Butter Tree 阪急うめだ店'], t:'3.21' },
    { names:['ÉCHIRÉ Marché au Beurre','ECHIRE Marche au Beurre'], g:'4.0', t:'3.76' },
    { names:['grenier 梅田店'], t:'3.54', u:'https://tabelog.com/osaka/A2701/A270101/27130931/' },
    { names:['SUKIYAKI FUJIMOTO','すき焼き 藤もと'], t:'3.39' },
    { names:['Yasubee','やすべえ'], t:'3.36' },
    { names:['Kuchibashi Modern','くちばしモダン'], g:'4.6', t:'3.69', u:'https://tabelog.com/kyoto/A2601/A260201/26022582/' },
    { names:['Yumemiya','夢み家'], g:'4.6', t:'3.05' },
    { names:['麵屋練之助','麺屋 練之助','麵屋練之助 🍜'], t:'3.52' },
    { names:['Mamemono and Taiyaki','まめものとたい焼き'], g:'4.2', t:'3.50' },
    { names:['Sukiyaki Kimura','すき焼き キムラ'], t:'3.50' },
    { names:['GION GOZU 四条店','GION GOZU 四條店'], g:'4.5', t:'3.20' },
    { names:['Onimaru Kyoto Shijo Kawaramachi','ごちそう焼むすび おにまる 京都四条河原町店'], t:'3.06' },
    { names:['DONGURI Shijo-Omiya Store'], g:'4.2', t:'3.09' },
    { names:['麵屋 豬一','麺屋 猪一','麵屋 豬一 🍜'], t:'3.71' },
    { names:['お好み焼（大阪燒）千草','お好み焼 ( 大阪燒 ) 千草','お好み焼 千草'], t:'3.65' },
    { names:['可樂餅 中村屋','天神橋 中村屋'], t:'3.49' },
    { names:['HARBS 心齋橋Parco店','HARBS 心斎橋PARCO店'], g:'4.1', t:'3.09' },
    { names:['大阪燒 千房','千房 道頓堀支店','大阪燒 千房 🍴'], t:'3.16', u:'https://tabelog.com/osaka/A2701/A270202/27002622/' },
    { names:['Kusaka Curry Namba DINING MAISON','Kusaka Curry Namba DINING MAISON 🍴'], g:'4.7', t:'3.50', u:'https://tabelog.com/osaka/A2701/A270202/27145566/' },
    { names:['HARBS Namba Parks','HARBS Namba Parks 🍴'], t:'3.15' },
    { names:['Shabuwara 壽喜燒 涮涮鍋 花月店','しゃぶ笑 なんばグランド花月店'], t:'3.09' },
    { names:['Shabucho','Shabucho 🍴','しゃぶ亭 西梅田店'], t:'3.54' },
    { names:['飛騨牛一頭家 馬喰一代 KITTE大阪'], t:'3.58' },
    { names:['いかれたNOODLE Fishtons'], g:'4.0', t:'3.72' },
    { names:['すき焼きと牛まぶし ももしき'], t:'3.62' },
    { names:['お好み焼 美津の'], t:'3.56' },
    { names:['焼肉ごりちゃん お初天神店','黒毛和牛タンとハラミ 焼肉ごりちゃん お初天神店'], t:'3.51', u:'https://tabelog.com/osaka/A2701/A270101/27148234/' }
];

async function backfillVerifiedRestaurantRatings(allProducts) {
    const normalize = (t) => (t || '')
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '')
        .replace(/\s+/g, ' ').trim().toLowerCase();
    const ratingMap = new Map();
    for (const r of VERIFIED_RESTAURANT_RATINGS) for (const n of r.names) ratingMap.set(normalize(n), r);
    let changed = false;
    for (const prod of allProducts) {
        if (prod.category !== '候選景點') continue;
        const r = ratingMap.get(normalize(prod.title));
        if (!r) continue;
        let data = {};
        try { data = JSON.parse(prod.content || '{}'); } catch { data = {}; }
        let dirty = false;
        if (!data.googleRating && r.g) { data.googleRating = r.g; dirty = true; }
        if (!data.tabelogRating && r.t) { data.tabelogRating = r.t; dirty = true; }
        if (!data.tabelogUrl && r.u) { data.tabelogUrl = r.u; dirty = true; }
        if (!data.ratingChecked && (r.g || r.t)) { data.ratingChecked = '2026-09-08'; dirty = true; }
        if (!dirty) continue;
        await hexAPI.updateProduct(prod.id, {
            title: prod.title,
            content: JSON.stringify(data),
            category: prod.category || '候選景點',
            origin_price: prod.origin_price || 0,
            price: prod.price || 0,
            unit: prod.unit || '景點',
            is_enabled: prod.is_enabled == 1 || prod.is_enabled === true ? 1 : 0,
            num: prod.num || 1
        });
        prod.content = JSON.stringify(data);
        changed = true;
    }
    if (changed) console.log('[Ratings] 已把缺少的 Google/Tabelog 評分補寫到 Hexschool Products');
    return allProducts;
}


// One-time migration for confirmed restaurant bookings.
// It only replaces the still-unconfirmed Day 7 dinner placeholder, so later manual edits are preserved.
async function migrateConfirmedRestaurantBookings(allProducts) {
    let changed = false;
    for (const prod of allProducts) {
        if (prod.category !== '候選景點') continue;
        let data = {};
        try { data = JSON.parse(prod.content || '{}'); } catch { data = {}; }
        const unit = prod.unit || '';
        const unitDay = unit.includes('|') ? unit.split('|')[0] : '';
        const day = unitDay || data.day || '';
        const isTargetPlaceholder =
            day === '2026-11-10' &&
            (prod.title === 'DAY6 晚餐後選' || prod.title === 'DAY7 晚餐後選');
        if (!isTargetPlaceholder) continue;

        const nextData = {
            ...data,
            city: 'Osaka',
            desc: '已預約｜2026/11/10 18:30｜2人',
            category: 'food',
            day: '2026-11-10',
            time: '18:30',
            location: '大阪府大阪市北区曾根崎2-14-7 グランデ曽根崎ビル 1F',
            tabelogRating: '3.51',
            tabelogUrl: 'https://tabelog.com/osaka/A2701/A270101/27148234/',
            ratingChecked: '2026-09-25'
        };
        await hexAPI.updateProduct(prod.id, {
            title: '焼肉ごりちゃん お初天神店',
            content: JSON.stringify(nextData),
            category: prod.category || '候選景點',
            origin_price: prod.origin_price || 0,
            price: prod.price || 0,
            unit: '2026-11-10|18:30',
            is_enabled: 1,
            num: prod.num || 1
        });
        changed = true;
    }
    return changed ? await hexAPI.getProducts() : allProducts;
}


async function migrateConfirmedNov8DayTrip(allProducts) {
    const parse = (p) => { try { return JSON.parse(p.content || '{}'); } catch { return {}; } };
    const dayItems = (allProducts || []).filter(p => {
        if (p.category !== '候選景點') return false;
        const data = parse(p);
        const unit = p.unit || '';
        const unitDay = unit.includes('|') ? unit.split('|')[0] : '';
        const day = unitDay || data.day || '';
        return day === '2026-11-08' && (p.is_enabled == 1 || p.is_enabled === true);
    });
    let candidates = dayItems.filter(p => {
        const data = parse(p);
        const text = [p.title, data.desc].filter(Boolean).join(' ');
        return /(天橋立|伊根|Amanohashidate|丹後|Ine)/i.test(text);
    });
    if (!candidates.length) {
        const likelyDayTours = dayItems.filter(p => {
            const data = parse(p);
            return !['food', 'transport', 'hotel'].includes(data.category || '');
        });
        if (likelyDayTours.length === 1) candidates = likelyDayTours;
    }
    if (!candidates.length) return allProducts;

    const score = (p) => {
        const data = parse(p);
        const text = [p.title, data.desc].filter(Boolean).join(' ');
        let s = 0;
        if (/(天橋立|Amanohashidate)/i.test(text)) s += 2;
        if (/(伊根|Ine)/i.test(text)) s += 2;
        if (/丹後/i.test(text)) s += 1;
        return s;
    };
    candidates.sort((a, b) => score(b) - score(a));
    const target = candidates[0];
    const data = parse(target);
    if (data.bookingMarker === '2026-10-02-klook-amanohashidate-ine') return allProducts;

    const bookingNote = '已預訂｜Klook 丹後鐵道路線｜單人 NT$1,973（已付款）';
    const currentDesc = data.desc || '';
    const nextDesc = currentDesc.includes('NT$1,973')
        ? currentDesc
        : (currentDesc ? currentDesc + '｜' + bookingNote : bookingNote);
    const nextData = {
        ...data,
        desc: nextDesc,
        cost: 0,
        costTwd: 1973,
        paymentStatus: 'paid',
        bookingPlatform: 'Klook',
        bookingMarker: '2026-10-02-klook-amanohashidate-ine'
    };

    await hexAPI.updateProduct(target.id, {
        title: target.title,
        content: JSON.stringify(nextData),
        category: target.category || '候選景點',
        origin_price: 0,
        price: target.price || 0,
        unit: target.unit || '2026-11-08|10:00 - 12:00',
        is_enabled: target.is_enabled == 1 || target.is_enabled === true ? 1 : 0,
        num: target.num || 1
    });
    return await hexAPI.getProducts();
}


async function migrateTripCorrections20260925(masterData, master, allProducts) {
    const HOTEL_ADDRESS = '大阪府大阪市天王寺区味原町14-23';
    let masterDirty = false;
    master = { ...(master || {}) };

    // Correct the confirmed Osaka accommodation.
    if (Array.isArray(master.hotels)) {
        master.hotels = master.hotels.map(h => {
            if (h.id !== 'hotel-2' && h.checkIn !== '2026-11-07') return h;
            const next = {
                ...h,
                city: 'Osaka',
                name: 'Cu Tennoji',
                address: HOTEL_ADDRESS,
                link: '',
                notes: '已確認住宿為 Cu Tennoji。自助入住公寓，入住前約24小時提供房號與 self check-in instructions；位置靠近鶴橋站。'
            };
            if (JSON.stringify(next) !== JSON.stringify(h)) masterDirty = true;
            return next;
        });
    }

    // Correct airport access for Peach flights using Terminal 2.
    if (Array.isArray(master.flights)) {
        master.flights = master.flights.map(f => {
            if (f.id === 'flight-1' || f.number === 'MM024 (樂桃航空)') {
                const notes = '桃園機場第一航廈登機。抵達關西機場第二航廈後，直接從T2搭機場利木津巴士前往京都站八条口（目前單程¥2,800/人），再前往京都四條大宮住宿。';
                if (f.notes !== notes) masterDirty = true;
                return { ...f, notes };
            }
            if (f.id === 'flight-2' || f.number === 'MM027 (樂桃航空)') {
                const notes = 'Peach國際線由關西機場第二航廈出發。退房後由Cu Tennoji前往近鐵上本町2F巴士總站，搭機場利木津巴士直達T2；目前時刻表建議11:40發、12:42抵達T2。MM027 15:25起飛，國際線須最晚於起飛前50分鐘完成報到。出發前再確認最新巴士時刻。';
                if (f.notes !== notes) masterDirty = true;
                return { ...f, notes };
            }
            return f;
        });
    }

    if (masterDirty && masterData && masterData.id) {
        const now = Math.floor(Date.now() / 1000);
        await hexAPI.updateArticle(masterData.id, {
            title: masterData.title || '主行程資料',
            content: JSON.stringify(master),
            tag: masterData.tag || [ARTICLE_TAGS.MASTER],
            isPublic: false,
            create_at: masterData.create_at || now,
            author: masterData.author || 'admin'
        });
    }

    const parse = p => { try { return JSON.parse(p.content || '{}'); } catch { return {}; } };
    const updateExisting = async (prod, title, dataPatch, unit) => {
        const data = { ...parse(prod), ...dataPatch };
        await hexAPI.updateProduct(prod.id, {
            title: title || prod.title,
            content: JSON.stringify(data),
            category: prod.category || '候選景點',
            origin_price: prod.origin_price || 0,
            price: prod.price || 0,
            unit: unit || prod.unit || '景點',
            is_enabled: prod.is_enabled == 1 || prod.is_enabled === true ? 1 : 0,
            num: prod.num || 1
        });
    };

    let productsDirty = false;
    for (const prod of allProducts) {
        if (prod.category !== '候選景點') continue;
        const data = parse(prod);
        const unitDay = (prod.unit || '').includes('|') ? prod.unit.split('|')[0] : '';
        const day = unitDay || data.day || '';

        if (data.sourceRef === 'flight:flight-1' || (day === '2026-11-04' && String(prod.title).includes('MM024'))) {
            const nextDesc = '搭乘 06:07 的高鐵至桃園站（06:49 抵達），轉乘 A18 機場捷運至 A12 第一航廈，約 07:30 抵達 1F 出境大廳';
            if (data.desc !== nextDesc) {
                await updateExisting(prod, prod.title, {
                    desc: nextDesc,
                    location: data.location || '關西國際機場 第2航廈'
                });
                productsDirty = true;
            }
        } else if (data.sourceRef === 'flight:flight-2' || (day === '2026-11-11' && String(prod.title).includes('MM027'))) {
            await updateExisting(prod, prod.title, {
                desc: 'Cu Tennoji退房後前往近鐵上本町2F巴士總站，搭機場利木津巴士直達關西機場第2航廈。目前時刻表建議11:40發→12:42抵達T2；MM027 15:25起飛。Peach國際線報到在T2 1F，最晚起飛前50分鐘完成。出發前再確認最新時刻。',
                location: '關西國際機場 第2航廈'
            });
            productsDirty = true;
        } else if (data.sourceRef === 'hotel-checkin:hotel-2' || String(prod.title).includes('Color Tsuruhashi / Cu Tennoji')) {
            const isCheckout = String(prod.title).includes('Check-out');
            await updateExisting(prod, 'Cu Tennoji ' + (isCheckout ? 'Check-out 🧳' : 'Check-in 🏨'), {
                desc: isCheckout
                    ? 'Cu Tennoji 退房。自助入住公寓，位置靠近鶴橋站。'
                    : '已確認住宿為 Cu Tennoji。自助入住公寓，入住前約24小時提供房號與入住說明。',
                location: HOTEL_ADDRESS
            });
            productsDirty = true;
        } else if (prod.title === 'Cu Tennoji 放行李') {
            if (!data.desc) {
                await updateExisting(prod, prod.title, {
                    desc: '大阪住宿已確認為 Cu Tennoji。可先寄放／處理行李；正式入住依住宿方自助入住說明。',
                    location: HOTEL_ADDRESS
                });
                productsDirty = true;
            }
        }
    }

    if (productsDirty) allProducts = await hexAPI.getProducts();

    // 2026-10-04: the old 11/10 Umeda catch-up block was retired.
    // Osaka Castle now sits on 11/7 before the existing Umeda shopping cluster,
    // while 11/10 is reserved for Katsuoji plus the confirmed 18:30 dinner.

    return { master, allProducts };
}


async function migrateOsakaCastleAndKatsuoji20261004(allProducts) {
    const parse = p => { try { return JSON.parse(p.content || '{}'); } catch { return {}; } };
    const enabled = p => p.is_enabled == 1 || p.is_enabled === true;
    const dayOf = p => {
        const data = parse(p);
        const unitDay = (p.unit || '').includes('|') ? p.unit.split('|')[0] : '';
        return unitDay || data.day || '';
    };
    const timeOf = p => {
        const data = parse(p);
        return (p.unit || '').includes('|') ? (p.unit.split('|')[1] || '') : (data.time || '');
    };
    const update = async (prod, patch, day, time, isEnabled = true) => {
        const data = { ...parse(prod), ...patch, day, time };
        await hexAPI.updateProduct(prod.id, {
            title: patch.title || prod.title,
            content: JSON.stringify(data),
            category: prod.category || '候選景點',
            origin_price: Number.isFinite(Number(data.cost)) ? Number(data.cost) : (prod.origin_price || 0),
            price: prod.price || 0,
            unit: isEnabled && day ? day + '|' + time : '景點',
            is_enabled: isEnabled ? 1 : 0,
            num: prod.num || 1
        });
    };

    let dirty = false;

    // Move Osaka Castle from Tue 11/10 to Sat 11/7, after luggage drop and before Umeda.
    const castleCandidates = (allProducts || []).filter(p =>
        p.category === '候選景點' &&
        /大阪城/.test(String(p.title || '')) &&
        (enabled(p) || dayOf(p) === '2026-11-10')
    );
    for (const prod of castleCandidates) {
        const data = parse(prod);
        if (data.scheduleMarker === '2026-10-04-osaka-castle-to-nov7' || dayOf(prod) === '2026-11-07') continue;
        const note = '11/7 京都退房後先處理大阪住宿行李，再前往大阪城。以大阪城公園、天守外觀與豐國神社為主，不強制進天守；逛完約12:30離開，下午前往梅田。';
        await update(prod, {
            ...data,
            title: prod.title,
            desc: data.desc || note,
            location: data.location || '大阪城公園',
            scheduleMarker: '2026-10-04-osaka-castle-to-nov7'
        }, '2026-11-07', '11:00 - 12:30', true);
        dirty = true;
    }

    // Push the existing Umeda shopping cluster later so it follows Osaka Castle.
    const umedaTitles = /(LINKS|GRAND FRONT OSAKA|阪急百貨|阪神百貨|友都八喜|HEP FIVE|大丸百貨\s*梅田|LUCUA)/i;
    for (const prod of (allProducts || [])) {
        if (prod.category !== '候選景點' || !enabled(prod) || dayOf(prod) !== '2026-11-07') continue;
        if (!umedaTitles.test(String(prod.title || ''))) continue;
        const currentTime = timeOf(prod);
        if (currentTime !== '12:00' && currentTime !== '12:00 - 17:30') continue;
        const data = parse(prod);
        if (data.scheduleMarker === '2026-10-04-umeda-after-castle') continue;
        await update(prod, {
            ...data,
            scheduleMarker: '2026-10-04-umeda-after-castle'
        }, '2026-11-07', '13:30', true);
        dirty = true;
    }

    // The old Day 7 catch-up block is no longer needed on 11/10; disable it rather than delete it.
    for (const prod of (allProducts || [])) {
        if (prod.category !== '候選景點' || prod.title !== '梅田百貨補逛 & 採買 🛍️') continue;
        const data = parse(prod);
        if (data.scheduleMarker === '2026-10-04-umeda-catchup-disabled') continue;
        await update(prod, {
            ...data,
            desc: data.desc || '',
            scheduleMarker: '2026-10-04-umeda-catchup-disabled'
        }, '', '', false);
        dirty = true;
    }

    // Use an existing Katsuoji candidate if present; otherwise create one.
    let katsuoji = (allProducts || []).find(p =>
        p.category === '候選景點' && /勝尾寺/.test(String(p.title || ''))
    );
    const katsuojiDesc = [
        '11/10 以勝尾寺為當天主行程。',
        '建議07:45左右由大阪出發，先到箕面萱野站；官方直行巴士09:00起約每10分鐘一班。',
        '平日參拜08:00–17:00（最終受付16:30），成人入山志納料¥500。',
        '箕面萱野站～勝尾寺直行巴士成人單程¥800；2026/10/1起完全無現金，可用ICOCA／Suica／PiTaPa等，車內不能儲值。',
        '此項預算先計入山¥500＋巴士來回¥1,600＝¥2,100／人；大阪市區鐵路與午餐另計。',
        '預計16:00前回到大阪市區，保留18:30焼肉ごりちゃん お初天神店訂位。'
    ].join('\n');
    if (katsuoji) {
        const data = parse(katsuoji);
        if (!data.day && !data.desc) {
            await update(katsuoji, {
                ...data,
                title: katsuoji.title || '勝尾寺 🎋',
                city: 'Osaka',
                desc: katsuojiDesc,
                cost: 2100,
                category: 'sightseeing',
                location: '勝尾寺',
                scheduleMarker: '2026-10-04-katsuoji-nov10'
            }, '2026-11-10', '07:45 - 16:00', true);
            dirty = true;
        }
    } else {
        const data = {
            city: 'Osaka',
            desc: katsuojiDesc,
            cost: 2100,
            category: 'sightseeing',
            day: '2026-11-10',
            photos: [],
            location: '勝尾寺',
            time: '07:45 - 16:00',
            scheduleMarker: '2026-10-04-katsuoji-nov10'
        };
        await hexAPI.createProduct({
            title: '勝尾寺 🎋',
            content: JSON.stringify(data),
            category: '候選景點',
            origin_price: 2100,
            price: 0,
            unit: '2026-11-10|07:45 - 16:00',
            is_enabled: 1,
            num: 1
        });
        dirty = true;
    }

    return dirty ? await hexAPI.getProducts() : allProducts;
}

async function loadFromRemote() {
    try {
        setSyncStatus('syncing');

        // Runtime shell only. itinerary and attractionPool are populated exclusively from Hexschool /v2.
        db = JSON.parse(JSON.stringify(initialTripData));
        db.itinerary = {};
        db.attractionPool = [];
        if (!db.messages) db.messages = [];

        const makeEmptyItinerary = () => {
            const out = {};
            const start = new Date((db.startDate || '2026-11-04') + 'T00:00:00');
            const end = new Date((db.endDate || db.startDate || '2026-11-04') + 'T00:00:00');
            for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
                out[key] = [];
            }
            return out;
        };
        db.itinerary = makeEmptyItinerary();

        let [allArticles, allProducts] = await Promise.all([
            hexAPI.getArticles(),
            hexAPI.getProducts()
        ]);

        let masterData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MASTER)) || null;
        const msgData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MESSAGES)) || null;
        let souvData = allArticles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.SOUVENIRS)) || null;
        if (masterData && !masterData.content) masterData = await hexAPI.getArticle(masterData.id).catch(() => masterData);
        // Hexschool article list responses may omit content; fetch the full souvenir article before parsing it.
        if (souvData && !souvData.content) souvData = await hexAPI.getArticle(souvData.id).catch(() => souvData);

        let master = {};
        if (masterData && masterData.content) {
            try { master = JSON.parse(masterData.content) || {}; } catch { master = {}; }
        }

        // Apply confirmed corrections for Osaka lodging, T2 airport access, and Day 7 Umeda shopping.
        const tripCorrections = await migrateTripCorrections20260925(masterData, master, allProducts);
        master = tripCorrections.master;
        allProducts = tripCorrections.allProducts;

        // 2026-10-04 itinerary decision: Osaka Castle on 11/7, Katsuoji as 11/10 main day.
        allProducts = await migrateOsakaCastleAndKatsuoji20261004(allProducts);

        lastSyncedMaster = JSON.parse(JSON.stringify(master));

        // Master article owns shared trip metadata, never initialTripData once present.
        if (masterData) {
            if (master.tripTitle) db.tripTitle = master.tripTitle;
            if (master.startDate) db.startDate = master.startDate;
            if (master.endDate) db.endDate = master.endDate;
            if (master.flights) db.flights = master.flights;
            if (master.hotels) db.hotels = master.hotels;
            if (master.budget) db.budget = master.budget;
            if (master.checklist) db.checklist = master.checklist;
            if (master.dayOrder) db.dayOrder = master.dayOrder;
            if (master.poolPhotos) db.poolPhotos = master.poolPhotos;
            if (master.deletedPoolItems) db.deletedPoolItems = master.deletedPoolItems;
            db.itinerary = makeEmptyItinerary();
        }

        const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
        const parseContent = (p) => { try { return JSON.parse(p.content || '{}'); } catch { return {}; } };

        // One-time migration: legacy master.customEvents -> normal Products.
        // After migration, ALL itinerary entries are Products and can be edited/deleted like pool items.
        const legacyEvents = master.customEvents && typeof master.customEvents === 'object' ? master.customEvents : {};
        const hasLegacyEvents = Object.values(legacyEvents).some(v => Array.isArray(v) && v.length);
        if (hasLegacyEvents) {
            let changed = false;
            for (const [day, events] of Object.entries(legacyEvents)) {
                for (const ev of (events || [])) {
                    const existing = allProducts.find(prod => {
                        if (prod.category !== '候選景點') return false;
                        const d = parseContent(prod);
                        return d.legacyEventId === ev.id || (normalizeTitle(prod.title) === normalizeTitle(ev.title) && (d.day === day || (prod.unit || '').startsWith(day + '|')));
                    });
                    if (existing) continue;
                    const content = {
                        city: ev.city || 'Other', desc: ev.desc || '', cost: ev.cost || 0,
                        category: ev.category || 'other', day, photos: ev.photos || [],
                        location: ev.location || '', time: ev.time || '', legacyEventId: ev.id || ''
                    };
                    await hexAPI.createProduct({
                        title: ev.title || '未命名行程', content: JSON.stringify(content), category: '候選景點',
                        origin_price: ev.cost || 0, price: 0,
                        unit: day + '|' + (ev.time || '10:00 - 12:00'), is_enabled: 1, num: 1
                    });
                    changed = true;
                }
            }
            if (changed) allProducts = await hexAPI.getProducts();

            // Clear legacy events only after products are safely present.
            if (masterData && masterData.id) {
                const migratedMaster = { ...master, customEvents: {}, customEventsMigratedToProducts: true };
                const now = Math.floor(Date.now() / 1000);
                await hexAPI.updateArticle(masterData.id, {
                    title: masterData.title || '主行程資料', content: JSON.stringify(migratedMaster),
                    tag: masterData.tag || [ARTICLE_TAGS.MASTER], isPublic: false,
                    create_at: masterData.create_at || now, author: masterData.author || 'admin'
                });
                master = migratedMaster;
                lastSyncedMaster = JSON.parse(JSON.stringify(master));
            }
        }

        // Convert master flights/hotels into ordinary Product records once.
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

        // Apply confirmed-booking migrations before rendering the itinerary.
        allProducts = await migrateConfirmedRestaurantBookings(allProducts);
        allProducts = await migrateConfirmedNov8DayTrip(allProducts);

        // Restore verified restaurant ratings into the API itself when older imports are missing them.
        allProducts = await backfillVerifiedRestaurantRatings(allProducts);

        // Products are the primary source for attractionPool and scheduled itinerary entries.
        const poolProducts = allProducts.filter(p => p.category === '候選景點');
        poolProducts.sort((a, b) => String(b.id || '').localeCompare(String(a.id || '')));
        const seen = new Set();
        const apiPoolItems = [];
        for (const prod of poolProducts) {
            const data = parseContent(prod);
            const norm = normalizeTitle(prod.title);

            // 檢查是否已被使用者刪除（若為 initialTripData 中明確保留的項目則不視為刪除）
            const isSpecificallyActive = (initialTripData.attractionPool || []).some(ip =>
                ip.id === 'api-' + prod.id || ip._productId === prod.id || ip.title === prod.title
            );
            const isDeleted = !isSpecificallyActive && (db.deletedPoolItems || []).some(d =>
                d === prod.id ||
                d === 'api-' + prod.id ||
                d === prod.title ||
                d === norm
            );
            if (isDeleted) continue;

            // Only dedupe exact title duplicates; newest product wins.
            if (seen.has(norm)) continue;
            seen.add(norm);
            const unit = prod.unit || '';
            const unitDay = unit.includes('|') ? unit.split('|')[0] : '';
            const unitTime = unit.includes('|') ? unit.split('|')[1] : '';

            // 如果 initialTripData 中有該項目的設定，且遠端產品尚未標記 user-edited，以 initialTripData 為主
            const initialItem = (initialTripData.attractionPool || []).find(ip =>
                ip.id === 'api-' + prod.id ||
                ip._productId === prod.id ||
                normalizeTitle(ip.title) === norm
            );

            const desc = (data.scheduleMarker === 'user-edited' || !initialItem) ? (data.desc || '') : (initialItem.desc || data.desc || '');
            const time = (data.scheduleMarker === 'user-edited' || !initialItem) ? (unitTime || data.time || '') : (initialItem.time || unitTime || data.time || '');
            const cost = data.cost ?? prod.origin_price ?? (initialItem ? initialItem.cost : 0);
            const location = (data.scheduleMarker === 'user-edited' || !initialItem) ? (data.location || '') : (initialItem.location || data.location || '');

            apiPoolItems.push({
                id: 'api-' + prod.id,
                city: data.city || (initialItem ? initialItem.city : 'Other'),
                title: prod.title,
                desc: desc,
                cost: cost,
                costTwd: data.costTwd || (initialItem ? initialItem.costTwd : 0) || 0,
                paymentStatus: data.paymentStatus || (initialItem ? initialItem.paymentStatus : '') || '',
                bookingPlatform: data.bookingPlatform || (initialItem ? initialItem.bookingPlatform : '') || '',
                bookingMarker: data.bookingMarker || (initialItem ? initialItem.bookingMarker : '') || '',
                category: data.category || (initialItem ? initialItem.category : 'other') || 'other',
                isEnabled: prod.is_enabled == 1 || prod.is_enabled === true,
                day: unitDay || data.day || (initialItem ? initialItem.day : '') || '',
                time: time,
                photos: (data.photos && data.photos.length) ? data.photos : (initialItem && initialItem.photos ? initialItem.photos : []),
                location: location,
                googleRating: data.googleRating || (initialItem ? initialItem.googleRating : '') || '',
                tabelogRating: data.tabelogRating || (initialItem ? initialItem.tabelogRating : '') || '',
                tabelogUrl: data.tabelogUrl || (initialItem ? initialItem.tabelogUrl : '') || '',
                ratingChecked: data.ratingChecked || (initialItem ? initialItem.ratingChecked : '') || '',
                scheduleMarker: data.scheduleMarker || (initialItem ? initialItem.scheduleMarker : '') || '',
                _productId: prod.id
            });
        }

        // 保留 initialTripData 中存在但遠端尚未建立產品的候選景點（不遺失候選名單）
        for (const initItem of (initialTripData.attractionPool || [])) {
            const isDel = (db.deletedPoolItems || []).some(d => d === initItem.id || d === initItem._productId);
            if (isDel) continue;
            const normInit = normalizeTitle(initItem.title);
            if (!seen.has(normInit)) {
                seen.add(normInit);
                apiPoolItems.push(JSON.parse(JSON.stringify(initItem)));
            }
        }

        db.attractionPool = apiPoolItems;

        if (!db.poolPhotos) db.poolPhotos = {};
        if (!db.deletedPoolItems) db.deletedPoolItems = [];
        for (const item of db.attractionPool) {
            if (db.poolPhotos[item.id]) item.photos = db.poolPhotos[item.id];
        }

        db.scheduledItems = {};
        for (const item of db.attractionPool) {
            if (!item.isEnabled || !item.day || !db.itinerary[item.day]) continue;
            db.scheduledItems[item.id] = item.day + '|' + (item.time || '10:00 - 12:00');
            db.itinerary[item.day].push({
                id: item.id, _poolId: item.id, _productId: item._productId,
                time: item.time || '10:00 - 12:00', title: item.title,
                desc: item.desc || '', cost: item.cost || 0, costTwd: item.costTwd || 0, paymentStatus: item.paymentStatus || '', bookingPlatform: item.bookingPlatform || '', category: item.category || 'other',
                photos: item.photos || [], location: item.location || ''
            });
        }

        // Preserve optional manual order from master, but never filter/delete API items.
        if (db.dayOrder) {
            for (const [day, order] of Object.entries(db.dayOrder)) {
                if (!db.itinerary[day] || !Array.isArray(order)) continue;
                const orderMap = new Map(order.map((id, i) => [id, i]));
                db.itinerary[day].sort((a, b) => (orderMap.get(a.id) ?? 9999) - (orderMap.get(b.id) ?? 9999));
            }
        }
        for (const day of Object.keys(db.itinerary)) db.itinerary[day] = sortItineraryByTime(db.itinerary[day]);

        db.messages = [];
        if (souvData && souvData.content) {
            try { const v = JSON.parse(souvData.content); db.souvenirs = Array.isArray(v) ? v : []; } catch { db.souvenirs = []; }
        } else if (!db.souvenirs) db.souvenirs = [];

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
    const loggedIn = getToken() && !isTokenExpired();
    if (!loggedIn) {
        document.getElementById('login-modal').classList.add('open');
        showToast('請先登入管理員帳號以新增候選項目', 3000);
        return;
    }
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
                const content = { city: item.city, desc: item.desc, cost: item.cost, costTwd: item.costTwd || 0, paymentStatus: item.paymentStatus || '', bookingPlatform: item.bookingPlatform || '', bookingMarker: item.bookingMarker || '', category: item.category, day: item.day || '', photos: item.photos || [], location: item.location || '', time: item.time || '', googleRating: item.googleRating || '', tabelogRating: item.tabelogRating || '', tabelogUrl: item.tabelogUrl || '', ratingChecked: item.ratingChecked || '' };
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
        const loggedIn = getToken() && !isTokenExpired();
        if (!loggedIn) {
            document.getElementById('login-modal').classList.add('open');
            showToast('請先登入管理員帳號以同步新增至雲端！', 3000);
            return;
        }

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
            day: '',
            scheduleMarker: 'user-edited'
        };

        const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
        const normTitle = normalizeTitle(title);
        if (db.deletedPoolItems) {
            db.deletedPoolItems = db.deletedPoolItems.filter(d => d !== title && d !== normTitle && d !== newItem.id);
        }

        closePoolEditModal();
        showSyncOverlay();
        setSyncStatus('syncing');
        try {
            const newId = await ensurePoolProduct(newItem);
            if (!newId) throw new Error('雲端建立產品失敗');

            newItem._productId = newId;
            newItem.id = 'api-' + newId;
            db.attractionPool.push(newItem);

            if (!db.poolPhotos) db.poolPhotos = {};
            if (photos.length) db.poolPhotos[newItem.id] = photos;

            saveToLocalStorage();
            await saveItineraryToRemote();

            renderPool();
            setSyncStatus('synced');
            showToast('已成功新增候選景點至雲端！');
        } catch (err) {
            setSyncStatus('offline');
            renderPool();
            showToast('新增失敗：' + err.message, 3500);
            console.error('[savePoolEdit] 新增失敗:', err);
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
        const content = {
            city: item.city,
            desc: item.desc,
            cost: item.cost,
            costTwd: item.costTwd || 0,
            paymentStatus: item.paymentStatus || '',
            bookingPlatform: item.bookingPlatform || '',
            bookingMarker: item.bookingMarker || '',
            category: item.category,
            day: item.day || '',
            photos: item.photos || [],
            location: item.location || '',
            time: item.time || '',
            googleRating: item.googleRating || '',
            tabelogRating: item.tabelogRating || '',
            tabelogUrl: item.tabelogUrl || '',
            ratingChecked: item.ratingChecked || '',
            scheduleMarker: item.scheduleMarker || 'user-edited'
        };
        const productData = {
            title: item.title,
            content: JSON.stringify(content),
            category: '候選景點',
            origin_price: item.cost || 0,
            price: 0,
            unit: item.isEnabled && item.day ? (item.day + '|' + (item.time || '10:00 - 12:00')) : '景點',
            is_enabled: 1,
            num: 1
        };
        const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
        const normTitle = normalizeTitle(item.title);
        if (db.deletedPoolItems) {
            db.deletedPoolItems = db.deletedPoolItems.filter(d => d !== item.id && d !== item._productId && d !== item.title && d !== normTitle);
        }
        const loggedIn = getToken() && !isTokenExpired();
        if (loggedIn) {
            if (item._productId) {
                await hexAPI.updateProduct(item._productId, productData);
            } else {
                const newId = await ensurePoolProduct(item);
                if (newId) item._productId = newId;
            }
        }
        // 更新每日日程顯示
        const isLinkedEvent = (e) => {
            if (!e) return false;
            if (e._poolId && (e._poolId === item.id || (item._productId && e._poolId === `api-${item._productId}`))) return true;
            if (e._productId && item._productId && e._productId === item._productId) return true;
            if (e.id === item.id || (item._productId && e.id === `api-${item._productId}`)) return true;
            if (item.title && e.title && (item.title === e.title || item.title.includes(e.title) || e.title.includes(item.title))) return true;
            return false;
        };
        for (const [day, events] of Object.entries(db.itinerary || {})) {
            let dayChanged = false;
            for (const ev of events) {
                if (isLinkedEvent(ev)) {
                    ev.title = item.title;
                    ev.desc = item.desc;
                    ev.cost = item.cost;
                    ev.category = item.category;
                    ev.time = item.time || ev.time;
                    ev.location = item.location || ev.location;
                    ev.photos = item.photos || [];
                    ev._poolId = item.id;
                    if (item._productId) ev._productId = item._productId;
                    dayChanged = true;
                }
            }
            if (dayChanged) {
                db.itinerary[day] = sortItineraryByTime(db.itinerary[day]);
            }
        }
        // 同步 scheduledItems 時間
        if (item.isEnabled && item.day) {
            if (!db.scheduledItems) db.scheduledItems = {};
            db.scheduledItems[item.id] = item.day + '|' + (item.time || '10:00 - 12:00');
            if (item._productId) {
                db.scheduledItems['api-' + item._productId] = item.day + '|' + (item.time || '10:00 - 12:00');
            }
            if (loggedIn) {
                await saveItineraryToRemote();
            }
        }
        saveToLocalStorage();
        renderPool();
        renderItineraryForDay(currentSelectedDay);
        showToast(loggedIn ? '已儲存！' : '已儲存至本機！');
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

function cloneJson(value) {
    return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

function jsonEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function isPlainObject(v) {
    return !!v && typeof v === 'object' && !Array.isArray(v);
}

// Three-way merge: remote changes are preserved when this browser did not change that field.
// If both users changed different nested fields, both survive. Only the exact same leaf is last-write-wins.
function mergeConcurrent(base, local, remote) {
    if (jsonEqual(local, base)) return cloneJson(remote);
    if (jsonEqual(remote, base)) return cloneJson(local);
    if (jsonEqual(local, remote)) return cloneJson(local);

    if (Array.isArray(base) && Array.isArray(local) && Array.isArray(remote)) {
        const maxLen = Math.max(base.length, local.length, remote.length);
        const out = [];
        for (let i = 0; i < maxLen; i++) {
            const bHas = i < base.length, lHas = i < local.length, rHas = i < remote.length;
            if (!lHas && !rHas) continue;
            if (!bHas) {
                if (lHas && rHas) out[i] = jsonEqual(local[i], remote[i]) ? cloneJson(local[i]) : cloneJson(local[i]);
                else out[i] = cloneJson(lHas ? local[i] : remote[i]);
                continue;
            }
            if (!lHas) {
                if (rHas && !jsonEqual(remote[i], base[i])) out[i] = cloneJson(remote[i]);
                continue;
            }
            if (!rHas) {
                if (!jsonEqual(local[i], base[i])) out[i] = cloneJson(local[i]);
                continue;
            }
            out[i] = mergeConcurrent(base[i], local[i], remote[i]);
        }
        return out.filter(v => v !== undefined);
    }

    if (isPlainObject(base) && isPlainObject(local) && isPlainObject(remote)) {
        const out = {};
        const keys = new Set([...Object.keys(base), ...Object.keys(local), ...Object.keys(remote)]);
        for (const key of keys) {
            const bHas = Object.prototype.hasOwnProperty.call(base, key);
            const lHas = Object.prototype.hasOwnProperty.call(local, key);
            const rHas = Object.prototype.hasOwnProperty.call(remote, key);
            if (!bHas) {
                if (lHas && rHas) out[key] = jsonEqual(local[key], remote[key]) ? cloneJson(local[key]) : cloneJson(local[key]);
                else if (lHas || rHas) out[key] = cloneJson(lHas ? local[key] : remote[key]);
                continue;
            }
            if (!lHas) {
                if (rHas && !jsonEqual(remote[key], base[key])) out[key] = cloneJson(remote[key]);
                continue;
            }
            if (!rHas) {
                if (!jsonEqual(local[key], base[key])) out[key] = cloneJson(local[key]);
                continue;
            }
            out[key] = mergeConcurrent(base[key], local[key], remote[key]);
        }
        return out;
    }

    // Both changed the exact same scalar/leaf: the current user's explicit save wins.
    return cloneJson(local);
}

async function fetchLatestMasterPayload() {
    const articles = await hexAPI.getArticles();
    let master = articles.find(a => a.tag && a.tag.includes(ARTICLE_TAGS.MASTER)) || null;
    if (master && !master.content) master = await hexAPI.getArticle(master.id).catch(() => master);
    if (!master || !master.content) return {};
    try { return JSON.parse(master.content); } catch { return {}; }
}

function buildLocalMasterPayload() {
    const dayOrder = {};
    const customEvents = {};
    for (const [day, events] of Object.entries(db.itinerary || {})) {
        dayOrder[day] = (events || []).map(e => e.id);
        customEvents[day] = (events || []).filter(e => !e._poolId && !e._productId && !e.id.startsWith('api-'));
    }
    return {
        tripTitle: db.tripTitle,
        startDate: db.startDate,
        endDate: db.endDate,
        flights: db.flights,
        hotels: db.hotels,
        budget: db.budget,
        checklist: db.checklist,
        dayOrder,
        customEvents: {},
        scheduledItems: db.scheduledItems || {},
        poolPhotos: db.poolPhotos || {},
        deletedPoolItems: db.deletedPoolItems || []
    };
}

async function saveMasterConflictSafe(localPayload) {
    // Read immediately before write so another editor's newer fields are not overwritten by a stale browser snapshot.
    const remotePayload = await fetchLatestMasterPayload();
    const basePayload = lastSyncedMaster || remotePayload || {};
    const mergedPayload = mergeConcurrent(basePayload, localPayload, remotePayload || {});
    removeCacheId('art', 'art:master:主行程資料');
    await ensureArticle(ARTICLE_TAGS.MASTER, '主行程資料', JSON.stringify(mergedPayload));
    // Baseline must remain what THIS browser last knew, not the merged remote result.
    // Otherwise a second save from a stale UI could accidentally revert another editor's newly merged value.
    lastSyncedMaster = cloneJson(localPayload);
    return mergedPayload;
}

async function saveAllToRemote() {
    if (!db) return;
    const localPayload = buildLocalMasterPayload();
    await saveMasterConflictSafe(localPayload);
    // 留言板仍獨立儲存，不與 master 混在同一筆資料。
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
        const localPayload = buildLocalMasterPayload();
        await saveMasterConflictSafe(localPayload);
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
        // 快取只用來秒開畫面；在拿到最新共享資料前一律鎖住編輯，避免用舊快取覆蓋另一位使用者。
        showSyncOverlay();
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
            hideSyncOverlay();
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

// TRAVEL CONTROL CENTER
function formatLocalDateKey(date) {
    return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
}

function openTripDay(dayStr) {
    if (!dayStr) return;
    currentSelectedDay = dayStr;
    switchTab('itinerary');
    selectDay(dayStr);
}

function getTripControlContext() {
    const now = new Date();
    const todayKey = formatLocalDateKey(now);
    const start = db.startDate || '2026-11-04';
    const end = db.endDate || start;

    if (todayKey < start) return { mode: 'preview', day: start, now };
    if (todayKey > end) return { mode: 'finished', day: end, now };
    return { mode: 'today', day: todayKey, now };
}

function buildMapUrl(location, title) {
    const query = location || title || '';
    if (!query) return '';
    if (String(query).startsWith('http')) return query;
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
}

function renderTravelTodayPanel() {
    const panel = document.getElementById('travel-today-panel');
    const badge = document.getElementById('travel-mode-badge');
    if (!panel || !badge || !db) return;

    const ctx = getTripControlContext();
    const day = ctx.day;
    const items = sortItineraryByTime([...(db.itinerary[day] || [])]);
    const dayNum = getDayNumber(day);
    const dateObj = new Date(day + 'T00:00:00');
    const weekday = ["日", "一", "二", "三", "四", "五", "六"][dateObj.getDay()];

    let modeTitle = '行前預覽';
    let intro = '先確認第一天的重要行程，出發後這裡會自動切換成「今天」。';
    if (ctx.mode === 'today') {
        modeTitle = '今天';
        intro = '依目前時間自動顯示下一站；不需要額外定位或交通 API。';
    } else if (ctx.mode === 'finished') {
        modeTitle = '旅程完成';
        intro = '顯示最後一天行程，方便回顧與整理。';
    }
    badge.textContent = modeTitle;

    let focusItem = items[0] || null;
    if (ctx.mode === 'today' && items.length) {
        const nowMinutes = ctx.now.getHours() * 60 + ctx.now.getMinutes();
        focusItem = items.find(item => parseStartTime(item.time) >= nowMinutes) || items[items.length - 1];
    }

    const mapUrl = focusItem ? buildMapUrl(focusItem.location, focusItem.title) : '';
    const upcomingItems = ctx.mode === 'today'
        ? items.filter(item => parseStartTime(item.time) >= (ctx.now.getHours() * 60 + ctx.now.getMinutes())).slice(0, 4)
        : items.slice(0, 4);

    panel.innerHTML = `
        <div class="travel-panel-heading">
            <div>
                <div class="travel-panel-label">${ctx.mode === 'today' ? '今日行程' : (ctx.mode === 'finished' ? '最後一天' : '第一天預覽')}</div>
                <h3>Day ${dayNum} · ${day.replace(/-/g, '/')}（${weekday}）</h3>
                <p>${intro}</p>
            </div>
            <button class="btn btn-outline travel-small-btn" onclick="openTripDay('${day}')">完整日程</button>
        </div>
        ${focusItem ? `
            <div class="next-stop-card">
                <span class="next-stop-label">${ctx.mode === 'today' ? '下一站' : '重點行程'}</span>
                <div class="next-stop-time">${focusItem.time || '時間未定'}</div>
                <div class="next-stop-title">${focusItem.title}</div>
                <div class="next-stop-meta">
                    ${focusItem.costTwd > 0 ? `<span>NT$ ${focusItem.costTwd.toLocaleString()}${focusItem.paymentStatus === 'paid' ? ' · 已付款' : ''}</span>` : (focusItem.cost > 0 ? `<span>¥ ${focusItem.cost.toLocaleString()}</span>` : '')}
                    ${focusItem.bookingPlatform ? `<span>${focusItem.bookingPlatform}</span>` : ''}
                </div>
                <div class="next-stop-actions">
                    ${mapUrl ? `<a class="btn btn-primary" href="${mapUrl}" target="_blank" rel="noopener noreferrer">開啟導航</a>` : ''}
                    <button class="btn btn-outline" onclick="copyItineraryField('${day}', '${focusItem.id}', 'title')">複製名稱</button>
                    ${focusItem.location ? `<button class="btn btn-outline" onclick="copyItineraryField('${day}', '${focusItem.id}', 'location')">複製地址</button>` : ''}
                    <button class="btn btn-outline" onclick="openTripDay('${day}')">查看這一天</button>
                </div>
            </div>
        ` : `
            <div class="travel-empty">這一天目前沒有排入行程。</div>
        `}
        ${upcomingItems.length ? `
            <div class="today-mini-list">
                ${upcomingItems.map(item => `
                    <div class="today-mini-item">
                        <span class="today-mini-time">${item.time || '--:--'}</span>
                        <span class="today-mini-title">${item.title}</span>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

function parseMonthDayFromText(text) {
    const m = String(text || '').match(/(\d{1,2})\/(\d{1,2})/);
    if (!m) return '';
    const year = String(db.startDate || '2026-11-04').slice(0, 4);
    return year + '-' + String(m[1]).padStart(2, '0') + '-' + String(m[2]).padStart(2, '0');
}

function collectConfirmedBookings() {
    const rows = [];

    // Important booking center intentionally excludes flights and accommodation.
    // Those already have dedicated sections on the dashboard.
    Object.entries(db.itinerary || {}).forEach(([day, events]) => {
        (events || []).forEach(item => {
            const desc = item.desc || '';
            const confirmed = item.paymentStatus === 'paid' || /(已預約|已訂位|已付款|已預訂)/.test(desc);
            if (!confirmed) return;
            rows.push({
                date: day,
                time: item.time || '',
                title: item.title,
                type: item.bookingPlatform || (item.category === 'food' ? '餐廳' : '行程'),
                status: item.paymentStatus === 'paid' || /已付款/.test(desc) ? '已付款' : '已預約',
                detail: item.costTwd > 0 ? 'NT$ ' + item.costTwd.toLocaleString() : (item.cost > 0 ? '¥ ' + item.cost.toLocaleString() : ''),
                day
            });
        });
    });

    const seen = new Set();
    return rows
        .filter(r => r.date)
        .filter(r => {
            const key = [r.date, r.title, r.type].join('|');
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        })
        .sort((a, b) => (a.date + ' ' + a.time).localeCompare(b.date + ' ' + b.time));
}

function renderReservationCenter() {
    const panel = document.getElementById('reservation-center');
    if (!panel || !db) return;
    const rows = collectConfirmedBookings();
    const ctx = getTripControlContext();
    const relevant = rows.filter(r => ctx.mode === 'finished' ? true : r.date >= formatLocalDateKey(ctx.now));
    const displayRows = (relevant.length ? relevant : rows).slice(0, 6);

    panel.innerHTML = `
        <div class="travel-panel-heading">
            <div>
                <div class="travel-panel-label">已預約中心</div>
                <h3>重要預訂一次看</h3>
                <p>由現有行程中的「已預約 / 已訂位 / 已付款」標記自動整理。</p>
            </div>
            <span class="reservation-count">${rows.length} 筆</span>
        </div>
        <div class="reservation-list">
            ${displayRows.length ? displayRows.map(row => `
                <button class="reservation-row" onclick="openTripDay('${row.day}')">
                    <span class="reservation-date">${row.date.substring(5).replace('-', '/')}</span>
                    <span class="reservation-main">
                        <strong>${row.title}</strong>
                        <small>${row.type}${row.time ? ' · ' + row.time : ''}${row.detail ? ' · ' + row.detail : ''}</small>
                    </span>
                    <span class="reservation-status ${row.status === '已付款' ? 'paid' : ''}">${row.status}</span>
                </button>
            `).join('') : '<div class="travel-empty">目前沒有可辨識的預約資料。</div>'}
        </div>
        <div class="reservation-note">不新增訂位服務串接；資料仍由你們目前的網站同步內容管理。</div>
    `;
}

// RENDER DASHBOARD
function renderDashboard() {
    renderTravelTodayPanel();
    renderReservationCenter();

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
                <a href="${h.link}" target="_blank" rel="noopener noreferrer" class="btn-link">在 ${h.bookingPlatform || '訂房網站'} 開啟訂房頁面 ↗</a>
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
    
    const start = new Date((db.startDate || '2026-11-04') + 'T00:00:00');
    const end = new Date((db.endDate || db.startDate || '2026-11-04') + 'T00:00:00');
    const totalDays = Math.max(1, Math.round((end - start) / 86400000) + 1);
    for (let i = 0; i < totalDays; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
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
    const base = new Date((db.startDate || '2026-11-04') + 'T00:00:00');
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

// QUICK COPY HELPERS
async function copyTextToClipboard(text, label) {
    if (!text) {
        showToast('沒有可複製的內容', 1600);
        return;
    }
    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand('copy');
            textarea.remove();
        }
        showToast((label || '內容') + '已複製！', 1400);
    } catch (err) {
        console.warn('[Copy] 複製失敗:', err);
        showToast('複製失敗，請長按文字手動複製', 2200);
    }
}

function getItineraryItem(dayStr, id) {
    return (db.itinerary[dayStr] || []).find(item => String(item.id) === String(id)) || null;
}

function copyItineraryField(dayStr, id, mode) {
    const item = getItineraryItem(dayStr, id);
    if (!item) return;

    if (mode === 'title') {
        copyTextToClipboard(item.title || '', '名稱');
        return;
    }
    if (mode === 'location') {
        copyTextToClipboard(item.location || '', '地址');
        return;
    }

    const lines = [
        item.title || '',
        item.time ? '時間：' + item.time : '',
        item.location ? '地點：' + item.location : '',
        item.bookingPlatform ? '平台：' + item.bookingPlatform : '',
        item.costTwd > 0 ? '費用：NT$ ' + item.costTwd.toLocaleString() + (item.paymentStatus === 'paid' ? '（已付款）' : '') : '',
        item.cost > 0 ? '費用：¥ ' + item.cost.toLocaleString() : '',
        item.desc ? '備註：' + item.desc : ''
    ].filter(Boolean);
    copyTextToClipboard(lines.join('\n'), '行程資訊');
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
        const isMealItem = item.category === 'food' || /(早餐|午餐|晚餐)/.test(item.title || '');
        const displayCategory = isMealItem ? 'food' : (item.category || 'other');
        div.className = `timeline-item category-${displayCategory}`;
        
        let categoryIcon = '📍';
        if (isMealItem) categoryIcon = '🍴';
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
            <div class="timeline-card timeline-card-${displayCategory} ${hasPhotos ? 'has-photo' : ''}">
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
                            ${item.costTwd > 0 ? `
                                <div class="timeline-meta-item" style="color:var(--accent-green); font-weight:600;">
                                    💵 NT$ ${item.costTwd.toLocaleString()}${item.paymentStatus === 'paid' ? '（已付款）' : ''}
                                </div>
                            ` : (item.cost > 0 ? `
                                <div class="timeline-meta-item" style="color:var(--accent-green); font-weight:600;">
                                    💵 ¥ ${item.cost.toLocaleString()}
                                </div>
                            ` : '')}
                            <div class="timeline-copy-actions">
                                <button type="button" class="quick-copy-btn" onclick="copyItineraryField('${dayStr}', '${item.id}', 'title')">複製名稱</button>
                                ${item.location ? `<button type="button" class="quick-copy-btn" onclick="copyItineraryField('${dayStr}', '${item.id}', 'location')">複製地址</button>` : ''}
                                ${(item.paymentStatus === 'paid' || /(已預約|已訂位|已付款|已預訂)/.test(item.desc || '')) ? `<button type="button" class="quick-copy-btn" onclick="copyItineraryField('${dayStr}', '${item.id}', 'info')">複製訂位資訊</button>` : ''}
                            </div>
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

// QUICK COPY FOR CANDIDATE CARDS
function copyPoolField(poolId, mode) {
    const item = (db.attractionPool || []).find(p => String(p.id) === String(poolId));
    if (!item) return;

    if (mode === 'title') {
        copyTextToClipboard(item.title || '', '名稱');
        return;
    }
    if (mode === 'location') {
        copyTextToClipboard(item.location || '', '地址');
        return;
    }

    const displayCity = item.city === 'Kyoto' ? '京都' : (item.city === 'Osaka' ? '大阪' : (item.city || '其他'));
    const lines = [
        item.title || '',
        '城市：' + displayCity,
        item.category ? '分類：' + (item.category === 'sightseeing' ? '景點' : item.category === 'food' ? '美食' : item.category === 'shopping' ? '購物' : '其他') : '',
        item.time ? '時間：' + item.time : '',
        item.location ? '地點：' + item.location : '',
        item.costTwd > 0 ? '費用：NT$ ' + item.costTwd.toLocaleString() : (item.cost > 0 ? '費用：¥ ' + item.cost.toLocaleString() : ''),
        item.desc ? '備註：' + item.desc : ''
    ].filter(Boolean);
    copyTextToClipboard(lines.join('\n'), '候選資訊');
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
    const itemsPerPage = 24;
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
        const mapQuery = item.location || `${item.title} ${displayCity} Japan`;
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
        card.innerHTML = `
            <div class="pool-card-body">
                <div class="pool-card-info">
                    <div class="pool-card-header">
                        <h4 class="pool-card-title">${item.title}</h4>
                        <div class="pool-card-tags">
                            <span class="tag tag-city">${displayCity}</span>
                            <span class="tag tag-city">${displayCategory}</span>
                            ${item.costTwd > 0 ? `<span class="tag tag-cost">NT$ ${item.costTwd.toLocaleString()}</span>` : (item.cost > 0 ? `<span class="tag tag-cost">¥ ${item.cost.toLocaleString()}</span>` : '')}
                            ${warningBanner}
                        </div>
                    </div>
                    <p class="pool-card-desc">${item.desc}</p>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;align-items:center;">
                        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-link" style="font-size:0.82rem;">🗺️ Google 地圖</a>
                        <button type="button" class="quick-copy-btn" onclick="copyPoolField('${item.id}', 'title')">複製名稱</button>
                        ${item.location ? `<button type="button" class="quick-copy-btn" onclick="copyPoolField('${item.id}', 'location')">複製地址</button>` : ''}
                        <button type="button" class="quick-copy-btn" onclick="copyPoolField('${item.id}', 'info')">複製資訊</button>
                    </div>
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

// HELPER TO IDENTIFY PREPAID ITINERARY ITEMS (行前已付款項目，計入行前必備開銷)
function isPrepaidItineraryItem(e) {
    if (!e) return false;
    if (e.paymentStatus === 'paid') return true;
    if (/(天橋立|伊根)/.test(e.title || '') && (e.costTwd > 0 || e.paymentStatus === 'paid')) return true;
    return false;
}

// UPDATE BUDGET TOTALS
function updateBudgetCalculations() {
    // 行前機票／住宿原始價格為雙人總額，這裡換算成每人。
    const flightTotalTwd = db.flights.reduce((sum, f) => sum + f.price, 0) / 2;
    const hotelTotalTwd = db.hotels.reduce((sum, h) => sum + h.price, 0) / 2;
    const rate = JPY_TO_TWD_RATE;

    // 行程費用視為每人費用；若為行前已付款項目（如一日團），計入行前必備開銷。
    let prepaidActivityTwd = 0;
    let activityTotalJpy = 0;
    let activityPaidTwd = 0;
    Object.values(db.itinerary).forEach(dayEvents => {
        dayEvents.forEach(e => {
            const directTwd = parseInt(e.costTwd) || 0;
            const jpyCost = parseInt(e.cost) || 0;
            if (isPrepaidItineraryItem(e)) {
                if (directTwd > 0) {
                    prepaidActivityTwd += directTwd;
                } else if (jpyCost > 0) {
                    prepaidActivityTwd += Math.round(jpyCost * rate);
                }
            } else {
                if (directTwd > 0) {
                    activityPaidTwd += directTwd;
                } else if (jpyCost > 0) {
                    activityTotalJpy += jpyCost;
                }
            }
        });
    });

    const flightHotelTotalTwd = flightTotalTwd + hotelTotalTwd + prepaidActivityTwd;
    const flightHotelTotalJpy = Math.round(flightHotelTotalTwd / rate);

    const activityTotalTwd = Math.round(activityTotalJpy * rate) + activityPaidTwd;
    const activityTotalJpyEquivalent = activityTotalJpy + Math.round(activityPaidTwd / rate);

    // 伴手禮由「我 / 女友」各自勾選、各自計入個人預算。
    // 舊資料的 done=true 會由 isSouvenirCheckedFor() 自動視為女友已勾。
    let mySouvenirJpy = 0;
    let girlfriendSouvenirJpy = 0;
    (db.souvenirs || []).forEach(s => {
        if (!s.price || isNaN(s.price)) return;
        const price = parseInt(s.price);
        if (isSouvenirCheckedFor(s, 'me')) mySouvenirJpy += price;
        if (isSouvenirCheckedFor(s, 'girl')) girlfriendSouvenirJpy += price;
    });
    const mySouvenirTwd = Math.round(mySouvenirJpy * rate);
    const girlfriendSouvenirTwd = Math.round(girlfriendSouvenirJpy * rate);

    const myLocalTwd = activityTotalTwd + mySouvenirTwd;
    const myLocalJpy = activityTotalJpyEquivalent + mySouvenirJpy;
    const girlfriendLocalTwd = activityTotalTwd + girlfriendSouvenirTwd;
    const girlfriendLocalJpy = activityTotalJpyEquivalent + girlfriendSouvenirJpy;

    const myTotalTwd = flightHotelTotalTwd + activityTotalTwd + mySouvenirTwd;
    const myTotalJpy = flightHotelTotalJpy + activityTotalJpyEquivalent + mySouvenirJpy;
    const girlfriendTotalTwd = flightHotelTotalTwd + activityTotalTwd + girlfriendSouvenirTwd;
    const girlfriendTotalJpy = flightHotelTotalJpy + activityTotalJpyEquivalent + girlfriendSouvenirJpy;

    document.getElementById('budget-flighthotel').innerText = `NT$ ${flightHotelTotalTwd.toLocaleString()}`;
    document.getElementById('budget-flighthotel-jpy').innerText = `¥ ${flightHotelTotalJpy.toLocaleString()}`;
    document.getElementById('budget-activities').innerText = `NT$ ${activityTotalTwd.toLocaleString()}`;
    document.getElementById('budget-activities-jpy').innerText = `¥ ${activityTotalJpyEquivalent.toLocaleString()}`;
    document.getElementById('budget-souvenirs-me').innerText = `NT$ ${mySouvenirTwd.toLocaleString()}`;
    document.getElementById('budget-souvenirs-me-jpy').innerText = `¥ ${mySouvenirJpy.toLocaleString()}`;
    document.getElementById('budget-souvenirs-girl').innerText = `NT$ ${girlfriendSouvenirTwd.toLocaleString()}`;
    document.getElementById('budget-souvenirs-girl-jpy').innerText = `¥ ${girlfriendSouvenirJpy.toLocaleString()}`;

    document.getElementById('budget-local-me').innerText = myLocalTwd.toLocaleString();
    document.getElementById('budget-local-me-jpy').innerText = myLocalJpy.toLocaleString();
    document.getElementById('budget-local-girl').innerText = girlfriendLocalTwd.toLocaleString();
    document.getElementById('budget-local-girl-jpy').innerText = girlfriendLocalJpy.toLocaleString();

    document.getElementById('budget-total-me').innerText = `NT$ ${myTotalTwd.toLocaleString()}`;
    document.getElementById('budget-total-me-jpy').innerText = `¥ ${myTotalJpy.toLocaleString()}`;
    document.getElementById('budget-total-girl').innerText = `NT$ ${girlfriendTotalTwd.toLocaleString()}`;
    document.getElementById('budget-total-girl-jpy').innerText = `¥ ${girlfriendTotalJpy.toLocaleString()}`;

    const exchangeRateDisplay = document.getElementById('exchange-rate-display');
    if (exchangeRateDisplay) exchangeRateDisplay.innerText = rate.toFixed(2);
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

    const rate = JPY_TO_TWD_RATE;

    // 1. Flights Section
    let flightHtml = '';
    let flightSumTwd = 0;
    db.flights.forEach(f => {
        const singlePriceTwd = f.price / 2;
        flightSumTwd += singlePriceTwd;
        const singlePriceJpy = Math.round(singlePriceTwd / rate);
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
        const singlePriceJpy = Math.round(singlePriceTwd / rate);
        hotelHtml += `
            <div class="budget-detail-item">
                <span class="item-label">🏨 ${h.name} (${h.nights} 晚)</span>
                <span class="item-cost-jpy">¥ ${singlePriceJpy.toLocaleString()}</span>
                <span class="item-cost-twd">NT$ ${singlePriceTwd.toLocaleString()}</span>
            </div>
        `;
    });

    // 3. Activities & Prepaid Items Section
    let prepaidActivityHtml = '';
    let prepaidActivitySumTwd = 0;
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
            const directTwd = parseInt(e.costTwd) || 0;
            const jpyCost = parseInt(e.cost) || 0;
            if (directTwd > 0 || jpyCost > 0) {
                const costTwd = directTwd > 0 ? directTwd : Math.round(jpyCost * rate);
                const costJpy = directTwd > 0 ? Math.round(directTwd / rate) : jpyCost;
                const itemHtml = `
                    <div class="budget-detail-item">
                        <span class="item-label">Day ${dayNum} - ${e.title}${directTwd > 0 ? '（台幣實付）' : ''}</span>
                        <span class="item-cost-jpy">${directTwd > 0 ? '≈ ' : ''}¥ ${costJpy.toLocaleString()}</span>
                        <span class="item-cost-twd">NT$ ${costTwd.toLocaleString()}</span>
                    </div>
                `;
                if (isPrepaidItineraryItem(e)) {
                    prepaidActivitySumTwd += costTwd;
                    prepaidActivityHtml += itemHtml;
                } else {
                    activitySumJpy += costJpy;
                    activitySumTwd += costTwd;
                    activityHtml += itemHtml;
                }
            }
        });
    });

    let flightHotelBody = flightHtml + hotelHtml + prepaidActivityHtml;
    if (flightHotelBody === '') {
        flightHotelBody = '<div class="budget-detail-empty">無行前必備開銷</div>';
    }

    if (activityHtml === '') activityHtml = '<div class="budget-detail-empty">無行程費用</div>';

    // 4. Souvenirs Section — split by person
    const buildSouvenirDetail = (person) => {
        let html = '';
        let sumJpy = 0;
        (db.souvenirs || []).filter(s => isSouvenirCheckedFor(s, person)).forEach(s => {
            if (s.price && !isNaN(s.price) && parseInt(s.price) > 0) {
                const costJpy = parseInt(s.price);
                const costTwd = Math.round(costJpy * rate);
                sumJpy += costJpy;
                html += `
                    <div class="budget-detail-item">
                        <span class="item-label">🎁 ${s.name} (${s.category || '其他'})</span>
                        <span class="item-cost-jpy">¥ ${costJpy.toLocaleString()}</span>
                        <span class="item-cost-twd">NT$ ${costTwd.toLocaleString()}</span>
                    </div>
                `;
            }
        });
        if (!html) html = '<div class="budget-detail-empty">目前沒有已勾選且有填價格的伴手禮</div>';
        return { html, sumJpy, sumTwd: Math.round(sumJpy * rate) };
    };

    const mySouvenirDetail = buildSouvenirDetail('me');
    const girlSouvenirDetail = buildSouvenirDetail('girl');

    container.innerHTML = `
        <div class="budget-detail-section">
            <div class="budget-detail-section-header">
                <span>✈️🏨 行前必備開銷 (單人)</span>
                <span>NT$ ${(flightSumTwd + hotelSumTwd + prepaidActivitySumTwd).toLocaleString()}</span>
            </div>
            <div class="budget-detail-section-body">
                ${flightHotelBody}
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
        <div class="budget-detail-section">
            <div class="budget-detail-section-header">
                <span>🎁 我的伴手禮</span>
                <span>NT$ ${mySouvenirDetail.sumTwd.toLocaleString()}</span>
            </div>
            <div class="budget-detail-section-body">
                ${mySouvenirDetail.html}
            </div>
        </div>
        <div class="budget-detail-section">
            <div class="budget-detail-section-header">
                <span>🎁 女友伴手禮</span>
                <span>NT$ ${girlSouvenirDetail.sumTwd.toLocaleString()}</span>
            </div>
            <div class="budget-detail-section-body">
                ${girlSouvenirDetail.html}
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
async function saveEvent(e) {
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

    showSyncOverlay();
    try {
        const loggedIn = getToken() && !isTokenExpired();
        if (loggedIn) {
            if (id) {
                const oldEntry = (db.itinerary[dayStr] || []).find(ev => ev.id === id);
                const poolId = oldEntry ? (oldEntry._poolId || (oldEntry.id && oldEntry.id.startsWith('api-') ? oldEntry.id : null)) : null;
                let poolItem = poolId ? db.attractionPool.find(p => p.id === poolId) : null;
                if (!poolItem && oldEntry) {
                    poolItem = db.attractionPool.find(p =>
                        (oldEntry._productId && p._productId === oldEntry._productId) ||
                        (p._productId && oldEntry.id === 'api-' + p._productId) ||
                        (p.title && oldEntry.title && p.title === oldEntry.title)
                    );
                }
                if (poolItem) {
                    Object.assign(poolItem, { title, time, category, cost, location, desc, photos, day: dayStr, isEnabled: true });
                    const content = {
                        city: poolItem.city || 'Other',
                        desc,
                        cost,
                        costTwd: poolItem.costTwd || 0,
                        paymentStatus: poolItem.paymentStatus || '',
                        bookingPlatform: poolItem.bookingPlatform || '',
                        bookingMarker: poolItem.bookingMarker || '',
                        category,
                        day: dayStr,
                        photos,
                        location,
                        time,
                        googleRating: poolItem.googleRating || '',
                        tabelogRating: poolItem.tabelogRating || '',
                        tabelogUrl: poolItem.tabelogUrl || '',
                        ratingChecked: poolItem.ratingChecked || '',
                        scheduleMarker: 'user-edited'
                    };
                    await hexAPI.updateProduct(poolItem._productId, {
                        title,
                        content: JSON.stringify(content),
                        category: '候選景點',
                        origin_price: cost,
                        price: 0,
                        unit: dayStr + '|' + (time || '10:00 - 12:00'),
                        is_enabled: 1,
                        num: 1
                    });
                } else {
                    const tmp = { id: 'new-' + Date.now(), city: 'Other', title, desc, cost, category, day: dayStr, time, photos, location, isEnabled: true };
                    const pid = await ensurePoolProduct(tmp);
                    if (!pid) throw new Error('無法建立 API 行程資料');
                    await hexAPI.updateProduct(pid, {
                        title,
                        content: JSON.stringify({ city: 'Other', desc, cost, category, day: dayStr, photos, location, time, scheduleMarker: 'user-edited' }),
                        category: '候選景點',
                        origin_price: cost,
                        price: 0,
                        unit: dayStr + '|' + (time || '10:00 - 12:00'),
                        is_enabled: 1,
                        num: 1
                    });
                }
            } else {
                const newItem = { id: 'new-' + Date.now(), city: 'Other', title, desc, cost, category, day: dayStr, time, photos, location, isEnabled: true };
                const pid = await ensurePoolProduct(newItem);
                if (!pid) throw new Error('無法建立 API 行程資料');
                await hexAPI.updateProduct(pid, { title, content: JSON.stringify({ city:'Other', desc, cost, category, day:dayStr, photos, location, time, scheduleMarker: 'user-edited' }), category:'候選景點', origin_price:cost, price:0, unit:dayStr+'|'+(time || '10:00 - 12:00'), is_enabled:1, num:1 });
            }
            closeEventModal();
            await loadFromRemote();
        } else {
            // 本機 / 離線模式儲存
            if (id) {
                const dayEvents = db.itinerary[dayStr] || [];
                const ev = dayEvents.find(e => e.id === id);
                if (ev) {
                    Object.assign(ev, { title, time, category, cost, location, desc, photos });
                }
                const poolItem = db.attractionPool.find(p => p.id === id || (ev && (p.id === ev._poolId || p._productId === ev._productId)));
                if (poolItem) {
                    Object.assign(poolItem, { title, time, category, cost, location, desc, photos, day: dayStr, isEnabled: true, scheduleMarker: 'user-edited' });
                }
            } else {
                const newId = 'local-' + Date.now();
                const newEv = { id: newId, title, time, category, cost, location, desc, photos, day: dayStr };
                if (!db.itinerary[dayStr]) db.itinerary[dayStr] = [];
                db.itinerary[dayStr].push(newEv);
                if (!db.attractionPool) db.attractionPool = [];
                db.attractionPool.push({ ...newEv, city: 'Other', isEnabled: true, scheduleMarker: 'user-edited' });
            }
            if (db.itinerary[dayStr]) {
                db.itinerary[dayStr] = sortItineraryByTime(db.itinerary[dayStr]);
            }
            closeEventModal();
        }
        saveToLocalStorage();
        renderAllUI();
        selectDay(dayStr);
        showToast(loggedIn ? '已儲存到 Hexschool 資料庫！' : '已儲存至本機！');
    } catch (err) {
        console.warn('[SaveEvent] 同步失敗:', err);
        showToast('儲存失敗：' + err.message, 3000);
    } finally {
        hideSyncOverlay();
    }
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
                const content = { city: poolItem.city, desc: poolItem.desc, cost: poolItem.cost, costTwd: poolItem.costTwd || 0, paymentStatus: poolItem.paymentStatus || '', bookingPlatform: poolItem.bookingPlatform || '', bookingMarker: poolItem.bookingMarker || '', category: poolItem.category, day: '', photos: poolItem.photos || [], location: poolItem.location || '', time: poolItem.time || '' };
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
        updateBudgetCalculations();
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
    const backupItinerary = JSON.parse(JSON.stringify(db.itinerary || {}));
    const savedScheduled = (db.scheduledItems && item) ? db.scheduledItems[item.id] : null;
    const backupDeleted = db.deletedPoolItems ? [...db.deletedPoolItems] : [];

    console.log('[DEBUG deleteFromPool] 正在從記憶體 db.attractionPool 中移除項目...');
    db.attractionPool = db.attractionPool.filter(p => p.id !== id);

    if (!db.deletedPoolItems) db.deletedPoolItems = [];
    const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
    const normTitle = normalizeTitle(item.title);
    
    [id, item._productId, item.title, normTitle].forEach(val => {
        if (val && !db.deletedPoolItems.includes(val)) {
            db.deletedPoolItems.push(val);
        }
    });

    if (db.scheduledItems) {
        delete db.scheduledItems[item.id];
        if (item._productId) delete db.scheduledItems['api-' + item._productId];
    }
    if (db.poolPhotos) {
        delete db.poolPhotos[item.id];
        if (item._productId) delete db.poolPhotos['api-' + item._productId];
    }

    const isLinkedItineraryEvent = (e) => {
        if (!e) return false;
        if (e._poolId) {
            return e._poolId === item.id ||
                (!!item._productId && e._poolId === `api-${item._productId}`);
        }
        return !!(e._productId && item._productId && e._productId === item._productId);
    };
    console.log('[DEBUG deleteFromPool] 正在從 db.itinerary 中排除與此項目關聯的行程事件...');
    for (const [day, events] of Object.entries(db.itinerary || {})) {
        const origLength = events.length;
        db.itinerary[day] = events.filter(e => !isLinkedItineraryEvent(e));
        const removedCount = origLength - db.itinerary[day].length;
        if (removedCount > 0) {
            console.log(`[DEBUG deleteFromPool] 已從 Day ${day} 移除 ${removedCount} 個行程事件`);
        }
    }

    console.log('[DEBUG deleteFromPool] 重新渲染網頁候選池與行程表...');
    renderPool();
    renderItineraryForDay(currentSelectedDay);

    try {
        const loggedIn = getToken() && !isTokenExpired();
        if (loggedIn) {
            setSyncStatus('syncing');
            // 在遠端搜尋所有同名或同 ID 的候選景點產品並全數刪除，避免舊版重複產品殘留
            const allProducts = await hexAPI.getProducts();
            const targets = allProducts.filter(p => 
                p.category === '候選景點' && 
                (p.id === item._productId || normalizeTitle(p.title) === normTitle || p.title === item.title)
            );

            if (targets.length > 0) {
                console.log(`[DEBUG deleteFromPool] 找到 ${targets.length} 個符合的遠端產品，開始全數刪除:`, targets.map(t => t.id));
                for (const target of targets) {
                    try {
                        await hexAPI.deleteProduct(target.id);
                        removeCacheId('pool', `pool:${target.id}`);
                    } catch (err) {
                        console.warn(`[DEBUG deleteFromPool] 刪除產品 ${target.id} 失敗:`, err.message);
                    }
                }
            } else {
                console.log('[DEBUG deleteFromPool] 遠端查無同名產品，無須呼叫刪除 API');
            }

            console.log('[DEBUG deleteFromPool] 正在呼叫 saveItineraryToRemote 同步行程與排程狀態至遠端 Master...');
            await saveItineraryToRemote();
            console.log('[DEBUG deleteFromPool] saveItineraryToRemote 同步成功');
            setSyncStatus('synced');
        }
        saveToLocalStorage();
        showToast('刪除成功！');
    } catch (e) {
        console.error('[DEBUG deleteFromPool] 刪除失敗或同步失敗:', e);
        db.attractionPool = backup;
        db.itinerary = backupItinerary;
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

// Upload an exported backup back into Hexschool. The JSON is only a migration source;
// after this finishes, Articles + Products are the source of truth.
async function syncImportedProductsToRemote(parsedData) {
    const normalizeTitle = (t) => (t || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu, '').trim();
    let products = await hexAPI.getProducts();
    const byId = new Map(products.map(p => [String(p.id), p]));
    const byTitle = new Map();
    for (const p of products) {
        if (p.category !== '候選景點') continue;
        const key = normalizeTitle(p.title);
        if (!byTitle.has(key)) byTitle.set(key, p);
    }

    const itineraryEntries = [];
    for (const [day, events] of Object.entries(parsedData.itinerary || {})) {
        for (const ev of (events || [])) itineraryEntries.push({ day, ev });
    }

    const represented = new Set();
    const upsert = async (item, forcedDay='', forcedEnabled=null) => {
        const productId = item._productId ? String(item._productId) : '';
        let scheduled = null;
        if (productId) scheduled = itineraryEntries.find(x => String(x.ev._productId || '') === productId) || null;
        if (!scheduled && item.id) scheduled = itineraryEntries.find(x => x.ev.id === item.id || x.ev._poolId === item.id) || null;
        if (!scheduled) scheduled = itineraryEntries.find(x => normalizeTitle(x.ev.title) === normalizeTitle(item.title)) || null;

        const day = forcedDay || item.day || (scheduled ? scheduled.day : '');
        const time = item.time || (scheduled ? scheduled.ev.time : '') || '';
        const enabled = forcedEnabled !== null ? forcedEnabled : (!!day && (item.isEnabled === true || !!scheduled));
        const content = {
            city: item.city || 'Other',
            desc: item.desc || '',
            cost: Number(item.cost) || 0,
            category: item.category || 'other',
            day: enabled ? day : '',
            photos: item.photos || [],
            location: item.location || '',
            time,
            googleRating: item.googleRating || '',
            tabelogRating: item.tabelogRating || '',
            tabelogUrl: item.tabelogUrl || '',
            ratingChecked: item.ratingChecked || ''
        };
        const payload = {
            title: item.title || '未命名行程',
            content: JSON.stringify(content),
            category: '候選景點',
            origin_price: Number(item.cost) || 0,
            price: 0,
            unit: enabled && day ? day + '|' + (time || '10:00 - 12:00') : '景點',
            is_enabled: enabled ? 1 : 0,
            num: 1
        };
        let existing = productId ? byId.get(productId) : null;
        if (!existing) existing = byTitle.get(normalizeTitle(payload.title)) || null;
        if (existing) {
            // Older JSON exports may not contain rating metadata. Never erase newer DB ratings on import.
            try {
                const oldData = JSON.parse(existing.content || '{}');
                if (!content.googleRating) content.googleRating = oldData.googleRating || '';
                if (!content.tabelogRating) content.tabelogRating = oldData.tabelogRating || '';
                if (!content.tabelogUrl) content.tabelogUrl = oldData.tabelogUrl || '';
                if (!content.ratingChecked) content.ratingChecked = oldData.ratingChecked || '';
                payload.content = JSON.stringify(content);
            } catch (_) { /* keep imported values */ }
            await hexAPI.updateProduct(existing.id, payload);
            represented.add(String(existing.id));
            represented.add(normalizeTitle(payload.title));
            return existing.id;
        }
        await hexAPI.createProduct(payload);
        products = await hexAPI.getProducts();
        const created = products.find(p => p.category === '候選景點' && normalizeTitle(p.title) === normalizeTitle(payload.title));
        if (created) {
            byId.set(String(created.id), created);
            byTitle.set(normalizeTitle(created.title), created);
            represented.add(String(created.id));
            represented.add(normalizeTitle(created.title));
            return created.id;
        }
        return null;
    };

    // Pool is the canonical set of candidate/scheduled Products in an export.
    for (const item of (parsedData.attractionPool || [])) await upsert(item);

    // Older exports can contain direct itinerary rows that were never in attractionPool.
    for (const {day, ev} of itineraryEntries) {
        const pid = String(ev._productId || '');
        const titleKey = normalizeTitle(ev.title);
        if ((pid && represented.has(pid)) || represented.has(titleKey)) continue;
        await upsert({
            ...ev,
            city: ev.city || 'Other',
            isEnabled: true,
            day,
            _productId: ev._productId || ''
        }, day, true);
    }
}

// IMPORT JSON DATA
function importDataFromJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const parsedData = JSON.parse(e.target.result);

            if (!(parsedData.flights && parsedData.hotels && parsedData.itinerary)) {
                alert("匯入失敗：這似乎不是正確的日程 JSON 格式。");
                return;
            }

            // Keep imported JSON as the current state.
            // Do NOT call initApp(): it reloads cache/API and overwrites imported data.
            db = parsedData;

            if (!db.messages) db.messages = [];
            if (!db.attractionPool) db.attractionPool = [];
            if (!db.itinerary) db.itinerary = {};
            if (!db.deletedPoolItems) db.deletedPoolItems = [];
            if (!db.scheduledItems) db.scheduledItems = {};
            if (!db.poolPhotos) db.poolPhotos = {};
            if (!db.souvenirs) db.souvenirs = [];

            saveToLocalStorage();
            renderAllUI();

            const loggedIn = ensureLogin();
            if (!loggedIn) {
                alert("行程資料已匯入到此瀏覽器。登入後再同步即可。");
                return;
            }

            showSyncOverlay();
            try {
                // Persist every section to Hexschool, including Products and the Souvenirs Article.
                await syncImportedProductsToRemote(parsedData);
                await saveAllToRemote();
                await saveSouvenirsToRemote();

                // Never keep the imported JSON as a second source of truth. Reload what the API actually stored.
                await loadFromRemote();
                saveToLocalStorage();
                renderAllUI();
                setSyncStatus('synced');
                alert("JSON 已完整匯入 Hexschool：行程、候選池、航班、住宿、清單與伴手禮都已寫入雲端資料庫！");
            } catch (syncErr) {
                console.error('[Import] 雲端同步失敗:', syncErr);
                setSyncStatus('offline');
                alert("JSON 已匯入到此瀏覽器，但同步雲端失敗：" + syncErr.message);
            } finally {
                hideSyncOverlay();
            }
        } catch (err) {
            alert("匯入失敗，解析 JSON 時出錯：" + err.message);
        } finally {
            event.target.value = '';
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

function isSouvenirCheckedFor(item, person) {
    if (!item) return false;
    if (person === 'me') return item.meDone === true;
    // Backward compatibility: legacy done=true means girlfriend already checked it.
    if (typeof item.girlDone === 'boolean') return item.girlDone;
    return item.done === true;
}

function syncLegacySouvenirDone(item) {
    if (!item) return;
    item.done = isSouvenirCheckedFor(item, 'me') || isSouvenirCheckedFor(item, 'girl');
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
        const meChecked = isSouvenirCheckedFor(item, 'me');
        const girlChecked = isSouvenirCheckedFor(item, 'girl');
        const div = document.createElement('div');
        div.className = 'souvenir-card' + (meChecked && girlChecked ? ' both-done' : '');
        div.innerHTML = `
            <div class="souvenir-owner-checks">
                <button type="button" class="souvenir-person-check ${meChecked ? 'checked' : ''}" onclick="toggleSouvenir('${item.id}', 'me')" title="我的伴手禮">
                    <span class="souvenir-person-box">${meChecked ? '✓' : ''}</span>
                    <span>我</span>
                </button>
                <button type="button" class="souvenir-person-check ${girlChecked ? 'checked' : ''}" onclick="toggleSouvenir('${item.id}', 'girl')" title="女友的伴手禮">
                    <span class="souvenir-person-box">${girlChecked ? '✓' : ''}</span>
                    <span>女友</span>
                </button>
            </div>
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
        db.souvenirs.push({ id: 'souv-' + Date.now(), name, category: cat, shop, price: parseInt(price) || 0, photo, notes, done: false, meDone: false, girlDone: false });
    }
    document.getElementById('souv-name').value = '';
    document.getElementById('souv-shop').value = '';
    document.getElementById('souv-price').value = '';
    document.getElementById('souv-photo').value = '';
    document.getElementById('souv-notes').value = '';
    renderSouvenirs();
    updateBudgetCalculations();

    showSyncOverlay();
    try {
        await saveSouvenirsToRemote();
        showToast(isEditing ? '伴手禮更新成功！' : '伴手禮新增成功！');
    } catch (err) {
        db.souvenirs = backup;
        renderSouvenirs();
        updateBudgetCalculations();
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

function toggleSouvenir(id, person) {
    const item = (db.souvenirs || []).find(s => s.id === id);
    if (!item) return;

    if (person === 'me') {
        item.meDone = !isSouvenirCheckedFor(item, 'me');
    } else {
        item.girlDone = !isSouvenirCheckedFor(item, 'girl');
    }
    syncLegacySouvenirDone(item);

    renderSouvenirs();
    updateBudgetCalculations();
    saveSouvenirsToRemote().catch(function(){});
}

async function deleteSouvenir(id) {
    if (!confirm('確定刪除？')) return;
    const backup = [...db.souvenirs];
    db.souvenirs = (db.souvenirs || []).filter(s => s.id !== id);
    renderSouvenirs();
    updateBudgetCalculations();

    showSyncOverlay();
    try {
        await saveSouvenirsToRemote();
        showToast('伴手禮已刪除！');
    } catch (err) {
        db.souvenirs = backup;
        renderSouvenirs();
        updateBudgetCalculations();
        showToast('刪除失敗：' + err.message, 3000);
    } finally {
        hideSyncOverlay();
    }
}
