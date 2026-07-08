export type Category =
  | "food"
  | "animal"
  | "stationery"
  | "toy"
  | "sport"
  | "cartoon"
  | "place"
  | "daily";

export interface WordPair {
  id: number;
  category: Category;
  civilian: { zh: string; de: string };
  undercover: { zh: string; de: string };
}

export const WORD_PAIRS: WordPair[] = [
  // food (15)
  { id: 1, category: "food", civilian: { zh: "苹果", de: "Apfel" }, undercover: { zh: "梨", de: "Birne" } },
  { id: 2, category: "food", civilian: { zh: "西瓜", de: "Wassermelone" }, undercover: { zh: "哈密瓜", de: "Honigmelone" } },
  { id: 3, category: "food", civilian: { zh: "草莓", de: "Erdbeere" }, undercover: { zh: "树莓", de: "Himbeere" } },
  { id: 4, category: "food", civilian: { zh: "香蕉", de: "Banane" }, undercover: { zh: "芒果", de: "Mango" } },
  { id: 5, category: "food", civilian: { zh: "葡萄", de: "Weintraube" }, undercover: { zh: "蓝莓", de: "Heidelbeere" } },
  { id: 6, category: "food", civilian: { zh: "面包", de: "Brot" }, undercover: { zh: "蛋糕", de: "Kuchen" } },
  { id: 7, category: "food", civilian: { zh: "比萨", de: "Pizza" }, undercover: { zh: "汉堡", de: "Hamburger" } },
  { id: 8, category: "food", civilian: { zh: "薯条", de: "Pommes" }, undercover: { zh: "薯片", de: "Chips" } },
  { id: 9, category: "food", civilian: { zh: "巧克力", de: "Schokolade" }, undercover: { zh: "糖果", de: "Bonbon" } },
  { id: 10, category: "food", civilian: { zh: "冰淇淋", de: "Eiscreme" }, undercover: { zh: "酸奶", de: "Joghurt" } },
  { id: 11, category: "food", civilian: { zh: "牛奶", de: "Milch" }, undercover: { zh: "豆浆", de: "Sojamilch" } },
  { id: 12, category: "food", civilian: { zh: "米饭", de: "Reis" }, undercover: { zh: "面条", de: "Nudeln" } },
  { id: 13, category: "food", civilian: { zh: "饺子", de: "Jiaozi" }, undercover: { zh: "包子", de: "Baozi" } },
  { id: 14, category: "food", civilian: { zh: "鸡蛋", de: "Ei" }, undercover: { zh: "鸭蛋", de: "Entenei" } },
  { id: 15, category: "food", civilian: { zh: "番茄", de: "Tomate" }, undercover: { zh: "胡萝卜", de: "Karotte" } },

  // animal (15)
  { id: 16, category: "animal", civilian: { zh: "狗", de: "Hund" }, undercover: { zh: "狼", de: "Wolf" } },
  { id: 17, category: "animal", civilian: { zh: "猫", de: "Katze" }, undercover: { zh: "老虎", de: "Tiger" } },
  { id: 18, category: "animal", civilian: { zh: "兔子", de: "Hase" }, undercover: { zh: "松鼠", de: "Eichhörnchen" } },
  { id: 19, category: "animal", civilian: { zh: "马", de: "Pferd" }, undercover: { zh: "驴", de: "Esel" } },
  { id: 20, category: "animal", civilian: { zh: "牛", de: "Kuh" }, undercover: { zh: "羊", de: "Schaf" } },
  { id: 21, category: "animal", civilian: { zh: "鸡", de: "Huhn" }, undercover: { zh: "鸭", de: "Ente" } },
  { id: 22, category: "animal", civilian: { zh: "鸽子", de: "Taube" }, undercover: { zh: "麻雀", de: "Spatz" } },
  { id: 23, category: "animal", civilian: { zh: "鱼", de: "Fisch" }, undercover: { zh: "虾", de: "Garnele" } },
  { id: 24, category: "animal", civilian: { zh: "海豚", de: "Delfin" }, undercover: { zh: "鲸鱼", de: "Wal" } },
  { id: 25, category: "animal", civilian: { zh: "蝴蝶", de: "Schmetterling" }, undercover: { zh: "蜜蜂", de: "Biene" } },
  { id: 26, category: "animal", civilian: { zh: "青蛙", de: "Frosch" }, undercover: { zh: "蟾蜍", de: "Kröte" } },
  { id: 27, category: "animal", civilian: { zh: "大象", de: "Elefant" }, undercover: { zh: "犀牛", de: "Nashorn" } },
  { id: 28, category: "animal", civilian: { zh: "长颈鹿", de: "Giraffe" }, undercover: { zh: "斑马", de: "Zebra" } },
  { id: 29, category: "animal", civilian: { zh: "熊猫", de: "Panda" }, undercover: { zh: "考拉", de: "Koala" } },
  { id: 30, category: "animal", civilian: { zh: "猴子", de: "Affe" }, undercover: { zh: "猩猩", de: "Gorilla" } },

  // stationery (8)
  { id: 31, category: "stationery", civilian: { zh: "铅笔", de: "Bleistift" }, undercover: { zh: "钢笔", de: "Füller" } },
  { id: 32, category: "stationery", civilian: { zh: "橡皮", de: "Radiergummi" }, undercover: { zh: "修正带", de: "Korrekturband" } },
  { id: 33, category: "stationery", civilian: { zh: "尺子", de: "Lineal" }, undercover: { zh: "三角板", de: "Geodreieck" } },
  { id: 34, category: "stationery", civilian: { zh: "书包", de: "Schulranzen" }, undercover: { zh: "手提包", de: "Handtasche" } },
  { id: 35, category: "stationery", civilian: { zh: "本子", de: "Heft" }, undercover: { zh: "课本", de: "Schulbuch" } },
  { id: 36, category: "stationery", civilian: { zh: "蜡笔", de: "Wachsmalstift" }, undercover: { zh: "彩色铅笔", de: "Buntstift" } },
  { id: 37, category: "stationery", civilian: { zh: "剪刀", de: "Schere" }, undercover: { zh: "美工刀", de: "Cuttermesser" } },
  { id: 38, category: "stationery", civilian: { zh: "胶水", de: "Klebstoff" }, undercover: { zh: "胶带", de: "Klebeband" } },

  // toy (10)
  { id: 39, category: "toy", civilian: { zh: "乐高", de: "Lego" }, undercover: { zh: "积木", de: "Bauklötze" } },
  { id: 40, category: "toy", civilian: { zh: "洋娃娃", de: "Puppe" }, undercover: { zh: "毛绒玩具", de: "Plüschtier" } },
  { id: 41, category: "toy", civilian: { zh: "气球", de: "Luftballon" }, undercover: { zh: "泡泡", de: "Seifenblase" } },
  { id: 42, category: "toy", civilian: { zh: "风筝", de: "Drachen" }, undercover: { zh: "纸飞机", de: "Papierflieger" } },
  { id: 43, category: "toy", civilian: { zh: "拼图", de: "Puzzle" }, undercover: { zh: "魔方", de: "Zauberwürfel" } },
  { id: 44, category: "toy", civilian: { zh: "遥控车", de: "Ferngesteuertes Auto" }, undercover: { zh: "玩具火车", de: "Spielzeugzug" } },
  { id: 45, category: "toy", civilian: { zh: "滑板车", de: "Roller" }, undercover: { zh: "滑板", de: "Skateboard" } },
  { id: 46, category: "toy", civilian: { zh: "悠悠球", de: "Jojo" }, undercover: { zh: "陀螺", de: "Kreisel" } },
  { id: 47, category: "toy", civilian: { zh: "弹珠", de: "Murmel" }, undercover: { zh: "扭蛋", de: "Gashapon" } },
  { id: 48, category: "toy", civilian: { zh: "跳绳", de: "Springseil" }, undercover: { zh: "呼啦圈", de: "Hula-Hoop-Reifen" } },

  // sport (8)
  { id: 49, category: "sport", civilian: { zh: "足球", de: "Fußball" }, undercover: { zh: "篮球", de: "Basketball" } },
  { id: 50, category: "sport", civilian: { zh: "乒乓球", de: "Tischtennis" }, undercover: { zh: "羽毛球", de: "Badminton" } },
  { id: 51, category: "sport", civilian: { zh: "网球", de: "Tennis" }, undercover: { zh: "棒球", de: "Baseball" } },
  { id: 52, category: "sport", civilian: { zh: "游泳", de: "Schwimmen" }, undercover: { zh: "潜水", de: "Tauchen" } },
  { id: 53, category: "sport", civilian: { zh: "跑步", de: "Laufen" }, undercover: { zh: "竞走", de: "Gehen" } },
  { id: 54, category: "sport", civilian: { zh: "骑自行车", de: "Radfahren" }, undercover: { zh: "骑摩托", de: "Motorradfahren" } },
  { id: 55, category: "sport", civilian: { zh: "滑雪", de: "Skifahren" }, undercover: { zh: "溜冰", de: "Schlittschuhlaufen" } },
  { id: 56, category: "sport", civilian: { zh: "体操", de: "Turnen" }, undercover: { zh: "舞蹈", de: "Tanzen" } },

  // cartoon (7)
  { id: 57, category: "cartoon", civilian: { zh: "米老鼠", de: "Micky Maus" }, undercover: { zh: "唐老鸭", de: "Donald Duck" } },
  { id: 59, category: "cartoon", civilian: { zh: "蜘蛛侠", de: "Spider-Man" }, undercover: { zh: "蝙蝠侠", de: "Batman" } },
  { id: 60, category: "cartoon", civilian: { zh: "超人", de: "Superman" }, undercover: { zh: "钢铁侠", de: "Iron Man" } },
  { id: 61, category: "cartoon", civilian: { zh: "白雪公主", de: "Schneewittchen" }, undercover: { zh: "灰姑娘", de: "Aschenputtel" } },
  { id: 62, category: "cartoon", civilian: { zh: "小猪佩奇", de: "Peppa Pig" }, undercover: { zh: "海绵宝宝", de: "SpongeBob" } },
  { id: 63, category: "cartoon", civilian: { zh: "哈利波特", de: "Harry Potter" }, undercover: { zh: "霍比特人", de: "Hobbit" } },
  { id: 64, category: "cartoon", civilian: { zh: "艾莎", de: "Elsa" }, undercover: { zh: "安娜", de: "Anna" } },

  // place (8)
  { id: 65, category: "place", civilian: { zh: "学校", de: "Schule" }, undercover: { zh: "幼儿园", de: "Kindergarten" } },
  { id: 66, category: "place", civilian: { zh: "公园", de: "Park" }, undercover: { zh: "动物园", de: "Zoo" } },
  { id: 67, category: "place", civilian: { zh: "游乐场", de: "Spielplatz" }, undercover: { zh: "游乐园", de: "Freizeitpark" } },
  { id: 68, category: "place", civilian: { zh: "超市", de: "Supermarkt" }, undercover: { zh: "便利店", de: "Kiosk" } },
  { id: 69, category: "place", civilian: { zh: "医院", de: "Krankenhaus" }, undercover: { zh: "诊所", de: "Arztpraxis" } },
  { id: 70, category: "place", civilian: { zh: "图书馆", de: "Bibliothek" }, undercover: { zh: "书店", de: "Buchhandlung" } },
  { id: 71, category: "place", civilian: { zh: "海滩", de: "Strand" }, undercover: { zh: "湖边", de: "Seeufer" } },
  { id: 72, category: "place", civilian: { zh: "山", de: "Berg" }, undercover: { zh: "森林", de: "Wald" } },

  // daily (8)
  { id: 73, category: "daily", civilian: { zh: "牙刷", de: "Zahnbürste" }, undercover: { zh: "牙线", de: "Zahnseide" } },
  { id: 74, category: "daily", civilian: { zh: "肥皂", de: "Seife" }, undercover: { zh: "洗发水", de: "Shampoo" } },
  { id: 75, category: "daily", civilian: { zh: "毛巾", de: "Handtuch" }, undercover: { zh: "浴巾", de: "Badetuch" } },
  { id: 76, category: "daily", civilian: { zh: "雨伞", de: "Regenschirm" }, undercover: { zh: "雨衣", de: "Regenmantel" } },
  { id: 77, category: "daily", civilian: { zh: "帽子", de: "Mütze" }, undercover: { zh: "围巾", de: "Schal" } },
  { id: 78, category: "daily", civilian: { zh: "手套", de: "Handschuhe" }, undercover: { zh: "袜子", de: "Socken" } },
  { id: 79, category: "daily", civilian: { zh: "枕头", de: "Kissen" }, undercover: { zh: "被子", de: "Bettdecke" } },
  { id: 80, category: "daily", civilian: { zh: "钟", de: "Uhr" }, undercover: { zh: "闹钟", de: "Wecker" } },

  // food extra (id 81-100, 20 pairs)
  { id: 81, category: "food", civilian: { zh: "橙子", de: "Orange" }, undercover: { zh: "橘子", de: "Mandarine" } },
  { id: 82, category: "food", civilian: { zh: "桃子", de: "Pfirsich" }, undercover: { zh: "李子", de: "Pflaume" } },
  { id: 83, category: "food", civilian: { zh: "樱桃", de: "Kirsche" }, undercover: { zh: "番茄", de: "Tomate" } },
  { id: 84, category: "food", civilian: { zh: "菠萝", de: "Ananas" }, undercover: { zh: "椰子", de: "Kokosnuss" } },
  { id: 85, category: "food", civilian: { zh: "柠檬", de: "Zitrone" }, undercover: { zh: "酸橙", de: "Limette" } },
  { id: 86, category: "food", civilian: { zh: "黄瓜", de: "Gurke" }, undercover: { zh: "西葫芦", de: "Zucchini" } },
  { id: 87, category: "food", civilian: { zh: "土豆", de: "Kartoffel" }, undercover: { zh: "红薯", de: "Süßkartoffel" } },
  { id: 88, category: "food", civilian: { zh: "玉米", de: "Mais" }, undercover: { zh: "豌豆", de: "Erbse" } },
  { id: 89, category: "food", civilian: { zh: "蘑菇", de: "Pilz" }, undercover: { zh: "西兰花", de: "Brokkoli" } },
  { id: 90, category: "food", civilian: { zh: "洋葱", de: "Zwiebel" }, undercover: { zh: "大蒜", de: "Knoblauch" } },
  { id: 91, category: "food", civilian: { zh: "可乐", de: "Cola" }, undercover: { zh: "雪碧", de: "Sprite" } },
  { id: 92, category: "food", civilian: { zh: "果汁", de: "Saft" }, undercover: { zh: "汽水", de: "Limonade" } },
  { id: 93, category: "food", civilian: { zh: "茶", de: "Tee" }, undercover: { zh: "咖啡", de: "Kaffee" } },
  { id: 94, category: "food", civilian: { zh: "热狗", de: "Hotdog" }, undercover: { zh: "三明治", de: "Sandwich" } },
  { id: 95, category: "food", civilian: { zh: "甜甜圈", de: "Donut" }, undercover: { zh: "马芬", de: "Muffin" } },
  { id: 96, category: "food", civilian: { zh: "饼干", de: "Keks" }, undercover: { zh: "曲奇", de: "Cookie" } },
  { id: 97, category: "food", civilian: { zh: "蜂蜜", de: "Honig" }, undercover: { zh: "果酱", de: "Marmelade" } },
  { id: 98, category: "food", civilian: { zh: "黄油", de: "Butter" }, undercover: { zh: "奶酪", de: "Käse" } },
  { id: 99, category: "food", civilian: { zh: "寿司", de: "Sushi" }, undercover: { zh: "饭团", de: "Onigiri" } },
  { id: 100, category: "food", civilian: { zh: "煎饼", de: "Pfannkuchen" }, undercover: { zh: "华夫饼", de: "Waffel" } },

  // animal extra (id 101-120, 20 pairs)
  { id: 101, category: "animal", civilian: { zh: "狮子", de: "Löwe" }, undercover: { zh: "豹子", de: "Leopard" } },
  { id: 102, category: "animal", civilian: { zh: "鹿", de: "Hirsch" }, undercover: { zh: "麋鹿", de: "Elch" } },
  { id: 103, category: "animal", civilian: { zh: "袋鼠", de: "Känguru" }, undercover: { zh: "树袋熊", de: "Beutelbär" } },
  { id: 104, category: "animal", civilian: { zh: "鸵鸟", de: "Strauß" }, undercover: { zh: "孔雀", de: "Pfau" } },
  { id: 105, category: "animal", civilian: { zh: "企鹅", de: "Pinguin" }, undercover: { zh: "海豹", de: "Robbe" } },
  { id: 106, category: "animal", civilian: { zh: "螃蟹", de: "Krabbe" }, undercover: { zh: "龙虾", de: "Hummer" } },
  { id: 107, category: "animal", civilian: { zh: "海星", de: "Seestern" }, undercover: { zh: "水母", de: "Qualle" } },
  { id: 108, category: "animal", civilian: { zh: "鲨鱼", de: "Hai" }, undercover: { zh: "鳄鱼", de: "Krokodil" } },
  { id: 109, category: "animal", civilian: { zh: "蛇", de: "Schlange" }, undercover: { zh: "蜥蜴", de: "Eidechse" } },
  { id: 110, category: "animal", civilian: { zh: "乌龟", de: "Schildkröte" }, undercover: { zh: "蜗牛", de: "Schnecke" } },
  { id: 111, category: "animal", civilian: { zh: "蜻蜓", de: "Libelle" }, undercover: { zh: "瓢虫", de: "Marienkäfer" } },
  { id: 112, category: "animal", civilian: { zh: "蚂蚁", de: "Ameise" }, undercover: { zh: "蚊子", de: "Mücke" } },
  { id: 113, category: "animal", civilian: { zh: "刺猬", de: "Igel" }, undercover: { zh: "豪猪", de: "Stachelschwein" } },
  { id: 114, category: "animal", civilian: { zh: "老鼠", de: "Maus" }, undercover: { zh: "仓鼠", de: "Hamster" } },
  { id: 115, category: "animal", civilian: { zh: "蝙蝠", de: "Fledermaus" }, undercover: { zh: "猫头鹰", de: "Eule" } },
  { id: 116, category: "animal", civilian: { zh: "狐狸", de: "Fuchs" }, undercover: { zh: "浣熊", de: "Waschbär" } },
  { id: 117, category: "animal", civilian: { zh: "熊", de: "Bär" }, undercover: { zh: "树懒", de: "Faultier" } },
  { id: 118, category: "animal", civilian: { zh: "骆驼", de: "Kamel" }, undercover: { zh: "羊驼", de: "Alpaka" } },
  { id: 119, category: "animal", civilian: { zh: "海龟", de: "Meeresschildkröte" }, undercover: { zh: "海马", de: "Seepferdchen" } },
  { id: 120, category: "animal", civilian: { zh: "章鱼", de: "Krake" }, undercover: { zh: "鱿鱼", de: "Tintenfisch" } },

  // toy extra (id 121-135, 15 pairs)
  { id: 121, category: "toy", civilian: { zh: "玩具熊", de: "Teddybär" }, undercover: { zh: "玩偶", de: "Stoffpuppe" } },
  { id: 122, category: "toy", civilian: { zh: "小汽车", de: "Spielzeugauto" }, undercover: { zh: "小卡车", de: "Spielzeuglaster" } },
  { id: 123, category: "toy", civilian: { zh: "球", de: "Ball" }, undercover: { zh: "皮球", de: "Gummiball" } },
  { id: 124, category: "toy", civilian: { zh: "水枪", de: "Wasserpistole" }, undercover: { zh: "弹弓", de: "Schleuder" } },
  { id: 125, category: "toy", civilian: { zh: "玩具城堡", de: "Spielzeugburg" }, undercover: { zh: "娃娃屋", de: "Puppenhaus" } },
  { id: 126, category: "toy", civilian: { zh: "万花筒", de: "Kaleidoskop" }, undercover: { zh: "望远镜", de: "Fernglas" } },
  { id: 127, category: "toy", civilian: { zh: "口琴", de: "Mundharmonika" }, undercover: { zh: "笛子", de: "Flöte" } },
  { id: 128, category: "toy", civilian: { zh: "钢琴", de: "Klavier" }, undercover: { zh: "电子琴", de: "Keyboard" } },
  { id: 129, category: "toy", civilian: { zh: "鼓", de: "Trommel" }, undercover: { zh: "铃鼓", de: "Tamburin" } },
  { id: 130, category: "toy", civilian: { zh: "吉他", de: "Gitarre" }, undercover: { zh: "小提琴", de: "Geige" } },
  { id: 131, category: "toy", civilian: { zh: "彩泥", de: "Knete" }, undercover: { zh: "橡皮泥", de: "Spielknete" } },
  { id: 132, category: "toy", civilian: { zh: "贴纸", de: "Aufkleber" }, undercover: { zh: "印章", de: "Stempel" } },
  { id: 133, category: "toy", civilian: { zh: "小帐篷", de: "Spielzelt" }, undercover: { zh: "树屋", de: "Baumhaus" } },
  { id: 134, category: "toy", civilian: { zh: "蹦床", de: "Trampolin" }, undercover: { zh: "秋千", de: "Schaukel" } },
  { id: 135, category: "toy", civilian: { zh: "滑梯", de: "Rutsche" }, undercover: { zh: "跷跷板", de: "Wippe" } },

  // stationery extra (id 136-145, 10 pairs)
  { id: 136, category: "stationery", civilian: { zh: "马克笔", de: "Marker" }, undercover: { zh: "荧光笔", de: "Textmarker" } },
  { id: 137, category: "stationery", civilian: { zh: "圆珠笔", de: "Kugelschreiber" }, undercover: { zh: "中性笔", de: "Gelstift" } },
  { id: 138, category: "stationery", civilian: { zh: "卷笔刀", de: "Anspitzer" }, undercover: { zh: "订书机", de: "Hefter" } },
  { id: 139, category: "stationery", civilian: { zh: "笔袋", de: "Federmäppchen" }, undercover: { zh: "铅笔盒", de: "Stifteetui" } },
  { id: 140, category: "stationery", civilian: { zh: "便利贴", de: "Haftnotiz" }, undercover: { zh: "标签纸", de: "Etikett" } },
  { id: 141, category: "stationery", civilian: { zh: "白板", de: "Whiteboard" }, undercover: { zh: "黑板", de: "Tafel" } },
  { id: 142, category: "stationery", civilian: { zh: "粉笔", de: "Kreide" }, undercover: { zh: "板擦", de: "Tafelschwamm" } },
  { id: 143, category: "stationery", civilian: { zh: "回形针", de: "Büroklammer" }, undercover: { zh: "图钉", de: "Reißnagel" } },
  { id: 144, category: "stationery", civilian: { zh: "文件夹", de: "Ordner" }, undercover: { zh: "文件袋", de: "Mappe" } },
  { id: 145, category: "stationery", civilian: { zh: "日历", de: "Kalender" }, undercover: { zh: "记事本", de: "Notizbuch" } },

  // sport extra (id 146-160, 15 pairs)
  { id: 146, category: "sport", civilian: { zh: "排球", de: "Volleyball" }, undercover: { zh: "手球", de: "Handball" } },
  { id: 147, category: "sport", civilian: { zh: "高尔夫", de: "Golf" }, undercover: { zh: "板球", de: "Cricket" } },
  { id: 148, category: "sport", civilian: { zh: "保龄球", de: "Bowling" }, undercover: { zh: "台球", de: "Billard" } },
  { id: 149, category: "sport", civilian: { zh: "拳击", de: "Boxen" }, undercover: { zh: "跆拳道", de: "Taekwondo" } },
  { id: 150, category: "sport", civilian: { zh: "柔道", de: "Judo" }, undercover: { zh: "空手道", de: "Karate" } },
  { id: 151, category: "sport", civilian: { zh: "射箭", de: "Bogenschießen" }, undercover: { zh: "飞镖", de: "Darts" } },
  { id: 152, category: "sport", civilian: { zh: "攀岩", de: "Klettern" }, undercover: { zh: "蹦极", de: "Bungee-Jumping" } },
  { id: 153, category: "sport", civilian: { zh: "划船", de: "Rudern" }, undercover: { zh: "皮划艇", de: "Kanu" } },
  { id: 154, category: "sport", civilian: { zh: "冲浪", de: "Surfen" }, undercover: { zh: "帆板", de: "Windsurfen" } },
  { id: 155, category: "sport", civilian: { zh: "钓鱼", de: "Angeln" }, undercover: { zh: "捕虾", de: "Krabbenfischen" } },
  { id: 156, category: "sport", civilian: { zh: "瑜伽", de: "Yoga" }, undercover: { zh: "普拉提", de: "Pilates" } },
  { id: 157, category: "sport", civilian: { zh: "跳高", de: "Hochsprung" }, undercover: { zh: "跳远", de: "Weitsprung" } },
  { id: 158, category: "sport", civilian: { zh: "举重", de: "Gewichtheben" }, undercover: { zh: "健身", de: "Fitness" } },
  { id: 159, category: "sport", civilian: { zh: "马术", de: "Reiten" }, undercover: { zh: "赛马", de: "Pferderennen" } },
  { id: 160, category: "sport", civilian: { zh: "棒球", de: "Baseball" }, undercover: { zh: "垒球", de: "Softball" } },

  // cartoon extra (id 164-171, 8 pairs)
  { id: 164, category: "cartoon", civilian: { zh: "玩具总动员", de: "Toy Story" }, undercover: { zh: "海底总动员", de: "Findet Nemo" } },
  { id: 165, category: "cartoon", civilian: { zh: "汪汪队", de: "Paw Patrol" }, undercover: { zh: "迪迦队", de: "Mickey Maus Wunderhaus" } },
  { id: 166, category: "cartoon", civilian: { zh: "小马宝莉", de: "My Little Pony" }, undercover: { zh: "彩虹小马", de: "Pony" } },
  { id: 167, category: "cartoon", civilian: { zh: "冰雪奇缘", de: "Frozen" }, undercover: { zh: "海洋奇缘", de: "Vaiana" } },
  { id: 168, category: "cartoon", civilian: { zh: "小黄人", de: "Minion" }, undercover: { zh: "格鲁", de: "Gru" } },
  { id: 169, category: "cartoon", civilian: { zh: "功夫熊猫", de: "Kung Fu Panda" }, undercover: { zh: "马达加斯加", de: "Madagascar" } },
  { id: 170, category: "cartoon", civilian: { zh: "驯龙高手", de: "Drachenzähmen" }, undercover: { zh: "怪物史瑞克", de: "Shrek" } },
  { id: 171, category: "cartoon", civilian: { zh: "钢铁巨人", de: "Iron Giant" }, undercover: { zh: "大白", de: "Baymax" } },

  // place extra (id 176-188, 13 pairs)
  { id: 176, category: "place", civilian: { zh: "餐厅", de: "Restaurant" }, undercover: { zh: "食堂", de: "Kantine" } },
  { id: 177, category: "place", civilian: { zh: "电影院", de: "Kino" }, undercover: { zh: "剧院", de: "Theater" } },
  { id: 178, category: "place", civilian: { zh: "博物馆", de: "Museum" }, undercover: { zh: "美术馆", de: "Kunstgalerie" } },
  { id: 179, category: "place", civilian: { zh: "机场", de: "Flughafen" }, undercover: { zh: "火车站", de: "Bahnhof" } },
  { id: 180, category: "place", civilian: { zh: "公交站", de: "Bushaltestelle" }, undercover: { zh: "地铁站", de: "U-Bahn-Station" } },
  { id: 181, category: "place", civilian: { zh: "教室", de: "Klassenzimmer" }, undercover: { zh: "礼堂", de: "Aula" } },
  { id: 182, category: "place", civilian: { zh: "操场", de: "Schulhof" }, undercover: { zh: "体育馆", de: "Sporthalle" } },
  { id: 183, category: "place", civilian: { zh: "厨房", de: "Küche" }, undercover: { zh: "餐厅", de: "Esszimmer" } },
  { id: 184, category: "place", civilian: { zh: "卧室", de: "Schlafzimmer" }, undercover: { zh: "客厅", de: "Wohnzimmer" } },
  { id: 185, category: "place", civilian: { zh: "浴室", de: "Badezimmer" }, undercover: { zh: "厕所", de: "Toilette" } },
  { id: 186, category: "place", civilian: { zh: "花园", de: "Garten" }, undercover: { zh: "阳台", de: "Balkon" } },
  { id: 187, category: "place", civilian: { zh: "电梯", de: "Aufzug" }, undercover: { zh: "楼梯", de: "Treppe" } },
  { id: 188, category: "place", civilian: { zh: "游泳池", de: "Schwimmbad" }, undercover: { zh: "温泉", de: "Therme" } },

  // daily extra (id 189-200, 12 pairs)
  { id: 189, category: "daily", civilian: { zh: "杯子", de: "Becher" }, undercover: { zh: "碗", de: "Schüssel" } },
  { id: 190, category: "daily", civilian: { zh: "盘子", de: "Teller" }, undercover: { zh: "碟子", de: "Untertasse" } },
  { id: 191, category: "daily", civilian: { zh: "筷子", de: "Stäbchen" }, undercover: { zh: "勺子", de: "Löffel" } },
  { id: 192, category: "daily", civilian: { zh: "叉子", de: "Gabel" }, undercover: { zh: "刀", de: "Messer" } },
  { id: 193, category: "daily", civilian: { zh: "镜子", de: "Spiegel" }, undercover: { zh: "梳子", de: "Kamm" } },
  { id: 194, category: "daily", civilian: { zh: "眼镜", de: "Brille" }, undercover: { zh: "墨镜", de: "Sonnenbrille" } },
  { id: 195, category: "daily", civilian: { zh: "钱包", de: "Geldbörse" }, undercover: { zh: "卡包", de: "Kartenetui" } },
  { id: 196, category: "daily", civilian: { zh: "钥匙", de: "Schlüssel" }, undercover: { zh: "锁", de: "Schloss" } },
  { id: 197, category: "daily", civilian: { zh: "扫把", de: "Besen" }, undercover: { zh: "拖把", de: "Wischmopp" } },
  { id: 198, category: "daily", civilian: { zh: "垃圾桶", de: "Mülleimer" }, undercover: { zh: "垃圾袋", de: "Müllbeutel" } },
  { id: 199, category: "daily", civilian: { zh: "灯", de: "Lampe" }, undercover: { zh: "蜡烛", de: "Kerze" } },
  { id: 200, category: "daily", civilian: { zh: "电扇", de: "Ventilator" }, undercover: { zh: "空调", de: "Klimaanlage" } },
];
