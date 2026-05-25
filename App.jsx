/*
========================================
🏛️ 世界遺産検定アプリ - ビルド進捗
========================================
フェーズ1:  プロジェクト基盤      [✅] 完了
フェーズ2:  データ①(日本遺産)     [✅] 完了
フェーズ3:  データ②(世界前半)     [✅] 完了
フェーズ4:  データ③(世界後半)     [✅] 完了
フェーズ5:  共通コンポーネント    [✅] 完了
フェーズ6:  ホーム画面            [✅] 完了
フェーズ7:  ①基礎知識 前半       [✅] 完了
フェーズ8:  ①基礎知識 後半       [✅] 完了
フェーズ9:  ②地域別 前半         [✅] 完了
フェーズ10: ②地域別 後半         [✅] 完了
フェーズ11: ③時代別              [✅] 完了
フェーズ12: ④登録基準別          [✅] 完了
フェーズ13: ⑤苦手分析            [✅] 完了
フェーズ14: AI機能統合            [✅] 完了
フェーズ15: 仕上げ・結合          [✅] 完了
========================================
最終更新: フェーズ15完了（全フェーズ完了）
再開時はこのチェックリストを確認すること
========================================
*/

import { useState, useEffect, useCallback } from "react";
import {
  Search, Star, MapPin, Clock, BookOpen, BarChart2,
  Home, Globe, Calendar, ChevronRight, ChevronLeft,
  X, Check, RefreshCw, Youtube, Brain, Zap, Award,
  TrendingUp, AlertTriangle, Filter
} from "lucide-react";

// ============================================================
// 📍 CHECKPOINT: フェーズ1 完了
// 完了日時: 2026-05-25
// 実装済み: デザイントークン, グローバルstate, localStorage関数, App root
// ============================================================

// ============================================================
// 📍 CHECKPOINT: フェーズ2 完了
// 完了日時: 2026-05-25
// 実装済み: japanHeritageData (26件全件・examTips付き)
// ============================================================

// ============================================================
// 📍 CHECKPOINT: フェーズ3 完了
// 完了日時: 2026-05-25
// 実装済み: worldHeritageData 前半（ヨーロッパ45件・アジア35件 計80件）
// 次フェーズ: フェーズ4「データ③(世界後半+登録基準データ)」
// ============================================================

// ============================================================
// 📍 CHECKPOINT: フェーズ3 完了
// 完了日時: 2026-05-25
// 実装済み: worldHeritageDataPart1（ヨーロッパ40件・アジア30件 計70件）
// ============================================================

// ============================================================
// 📍 CHECKPOINT: フェーズ4 完了
// 完了日時: 2026-05-25
// 実装済み: worldHeritageDataPart2（アフリカ・中東・南北米・オセアニア 計115件）
//           criteriaData(i〜x), architectureStyles(8種), quizPatterns
//           worldHeritageData = Part1+Part2（計185件）
// 次フェーズ: フェーズ5「共通コンポーネント」
// ============================================================

// ─── 世界の世界遺産データ（前半：ヨーロッパ・アジア） ──────
const worldHeritageDataPart1 = [
  // ══════════════ ヨーロッパ ══════════════
  // ─ イタリア ─
  { id:"rome", name:"ローマ歴史地区", nameEn:"Historic Centre of Rome",
    country:"イタリア", countryFlag:"🇮🇹", region:"europe", relatedEra:"classical",
    year:1980, criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"コロッセオ・パンテオン・フォロ・ロマーノを含む古代ローマ文明の中心地。バチカン市国と共同登録。",
    examTips:["登録基準が5つ（最多クラス）","バチカン市国と共同登録","1980年登録・イタリア初","コロッセオ・パンテオンが代表建造物","古代ローマ帝国の首都"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome-April_2007-1-_copie_2B.jpg/800px-Colosseum_in_Rome-April_2007-1-_copie_2B.jpg",
    youtubeQuery:"ローマ歴史地区 コロッセオ 世界遺産", keywords:["ローマ","コロッセオ","古代","イタリア","帝国"] },
  { id:"venice", name:"ヴェネツィアとその潟", nameEn:"Venice and its Lagoon",
    country:"イタリア", countryFlag:"🇮🇹", region:"europe", relatedEra:"medieval",
    year:1987, criteria:["i","ii","iii","iv","v","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"アドリア海に浮かぶ水上都市。118の島と150以上の運河からなる中世の都市共和国。",
    examTips:["登録基準が6つ（イタリア最多）","水上都市・アドリア海の女王","2021年「危機遺産リスト」入り警告","オーバーツーリズムと高潮問題","中世の海洋共和国"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Piazza_San_Marco_with_the_Basilica_of_Saint_Mark_-_2012.jpg/800px-Piazza_San_Marco_with_the_Basilica_of_Saint_Mark_-_2012.jpg",
    youtubeQuery:"ヴェネツィア 水上都市 世界遺産", keywords:["水上都市","ゴンドラ","イタリア","運河","中世"] },
  { id:"florence", name:"フィレンツェ歴史地区", nameEn:"Historic Centre of Florence",
    country:"イタリア", countryFlag:"🇮🇹", region:"europe", relatedEra:"earlyModern",
    year:1982, criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"ルネサンス発祥の地。メディチ家の庇護のもとで芸術・建築が花開いた15世紀の文化都市。",
    examTips:["ルネサンス発祥の地","ウフィッツィ美術館・ドゥオーモが有名","メディチ家の庇護で文化が栄える","登録基準5つ","ダヴィンチ・ミケランジェロ・ボッティチェリの活動の場"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Firenze_veduta.jpg/800px-Firenze_veduta.jpg",
    youtubeQuery:"フィレンツェ ルネサンス ドゥオーモ 世界遺産", keywords:["ルネサンス","メディチ","美術","フィレンツェ","イタリア"] },
  { id:"pompeii", name:"ポンペイ・エルコラーノ・トッレ・アンヌンツィアータの考古地域",
    nameEn:"Archaeological Areas of Pompei, Herculaneum and Torre Annunziata",
    country:"イタリア", countryFlag:"🇮🇹", region:"europe", relatedEra:"classical",
    year:1997, criteria:["iii","iv","v"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"79年のヴェスヴィオ火山噴火で瞬時に埋没した古代ローマ都市。当時の生活をそのまま留める。",
    examTips:["79年ヴェスヴィオ火山噴火で埋没","古代ローマの都市生活の証拠","「都市計画の傑作」として評価","登録基準iii・iv・v","現在も発掘継続中"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Pompeii_amphitheatre.jpg/800px-Pompeii_amphitheatre.jpg",
    youtubeQuery:"ポンペイ 火山 埋没 世界遺産", keywords:["ポンペイ","火山","ローマ","遺跡","イタリア"] },
  { id:"pisa", name:"ピサのドゥオーモ広場", nameEn:"Piazza del Duomo, Pisa",
    country:"イタリア", countryFlag:"🇮🇹", region:"europe", relatedEra:"medieval",
    year:1987, criteria:["i","ii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"斜塔で有名なロマネスク建築の傑作群。大聖堂・洗礼堂・鐘楼（斜塔）・納骨堂の4棟が並ぶ。",
    examTips:["「ピサの斜塔」で有名だが正式名はドゥオーモ広場","ロマネスク様式の傑作","大聖堂・洗礼堂・斜塔・納骨堂の4棟","ガリレオ・ガリレイの落体実験の場（伝説）","1987年登録"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Leaning_Tower_of_Pisa_%28dsc03884%29.jpg/800px-Leaning_Tower_of_Pisa_%28dsc03884%29.jpg",
    youtubeQuery:"ピサ斜塔 ドゥオーモ ロマネスク 世界遺産", keywords:["斜塔","ロマネスク","ピサ","イタリア","鐘楼"] },
  { id:"amalfi", name:"アマルフィ海岸", nameEn:"Costiera Amalfitana",
    country:"イタリア", countryFlag:"🇮🇹", region:"europe", relatedEra:"medieval",
    year:1997, criteria:["ii","iv","v"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"急峻な崖に張り付く集落と段々畑が続く文化的景観。レモン栽培と中世の海洋共和国で知られる。",
    examTips:["急峻な崖と段々畑の文化的景観","文化的景観として登録","レモン栽培で有名","登録基準ii・iv・v","中世のアマルフィ共和国が起源"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amalfi_Coast_2013.jpg/800px-Amalfi_Coast_2013.jpg",
    youtubeQuery:"アマルフィ海岸 文化的景観 世界遺産", keywords:["アマルフィ","海岸","イタリア","段々畑","景観"] },
  // ─ フランス ─
  { id:"versailles", name:"ヴェルサイユの宮殿と庭園",
    nameEn:"Palace and Park of Versailles",
    country:"フランス", countryFlag:"🇫🇷", region:"europe", relatedEra:"earlyModern",
    year:1979, criteria:["i","ii","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"ルイ14世が造営した絶対王政の象徴。フランス式整形庭園と鏡の回廊で有名。",
    examTips:["ルイ14世が建造した絶対王政の象徴","フランス式整形庭園の代表","鏡の回廊が有名","登録基準i・ii・vi","フランス革命（1789年）の舞台"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Versailles_2008_N2.jpg/800px-Versailles_2008_N2.jpg",
    youtubeQuery:"ヴェルサイユ宮殿 ルイ14世 世界遺産", keywords:["ヴェルサイユ","フランス","絶対王政","ルイ14世","庭園"] },
  { id:"mont_saint_michel", name:"モン・サン＝ミシェルとその湾",
    nameEn:"Mont-Saint-Michel and its Bay",
    country:"フランス", countryFlag:"🇫🇷", region:"europe", relatedEra:"medieval",
    year:1979, criteria:["i","iii","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"干満差13mの海に浮かぶ修道院島。大天使ミカエルに捧げられた中世巡礼地の象徴。",
    examTips:["潮の満ち引きで陸続きになる修道院島","大天使ミカエルに捧げられた修道院","708年に建設開始","中世の巡礼地","登録基準i・iii・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mont_Saint-Michel_at_night.jpg/800px-Mont_Saint-Michel_at_night.jpg",
    youtubeQuery:"モン・サン・ミシェル 修道院 潮汐 世界遺産", keywords:["モン・サン・ミシェル","フランス","修道院","巡礼","潮"] },
  { id:"chartres", name:"シャルトル大聖堂", nameEn:"Chartres Cathedral",
    country:"フランス", countryFlag:"🇫🇷", region:"europe", relatedEra:"medieval",
    year:1979, criteria:["i","ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"ゴシック建築の最高傑作。ロイヤルポータルとブルーの巨大ステンドグラスが名高い。",
    examTips:["ゴシック建築の最高傑作","ステンドグラスが有名（ブルーが特徴的）","12〜13世紀建造","ロイヤルポータル（正面彫刻）が重要","登録基準i・ii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cathedrale.chartres.800px.jpg/800px-Cathedrale.chartres.800px.jpg",
    youtubeQuery:"シャルトル大聖堂 ゴシック ステンドグラス 世界遺産", keywords:["ゴシック","ステンドグラス","フランス","大聖堂","中世"] },
  { id:"avignon", name:"アヴィニョン歴史地区―教皇宮殿・司教建造物群及びアヴィニョン橋",
    nameEn:"Historic Centre of Avignon",
    country:"フランス", countryFlag:"🇫🇷", region:"europe", relatedEra:"medieval",
    year:1995, criteria:["i","ii","iv"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"14世紀にローマ教皇庁が置かれた「アヴィニョン捕囚」の地。教皇宮殿とサン・ベネゼ橋が残る。",
    examTips:["14世紀にローマ教皇庁が移転した場所（アヴィニョン捕囚）","「アヴィニョンの橋の上で踊ろう」で有名","教皇宮殿が代表建造物","登録基準i・ii・iv","1309〜1377年の間7代の教皇が在位"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Pont_Saint-B%C3%A9n%C3%A9zet2.jpg/800px-Pont_Saint-B%C3%A9n%C3%A9zet2.jpg",
    youtubeQuery:"アヴィニョン 教皇宮殿 世界遺産", keywords:["アヴィニョン","教皇","フランス","中世","橋"] },
  // ─ スペイン ─
  { id:"alhambra", name:"グラナダのアルハンブラ、ヘネラリーフェ、アルバイシン地区",
    nameEn:"Alhambra, Generalife and Albayzín, Granada",
    country:"スペイン", countryFlag:"🇪🇸", region:"europe", relatedEra:"medieval",
    year:1984, criteria:["i","iii","iv"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"ナスル朝イスラム王国の宮殿。アラベスク・幾何学装飾・ムカルナス（鍾乳石飾り）の極致。",
    examTips:["ナスル朝（イスラム）の宮殿","アラベスク装飾・幾何学模様・ムカルナス","レコンキスタ後もイスラム建築が保存","ヘネラリーフェ庭園","登録基準i・iii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Front_view_of_Patio_de_los_Leones.jpg/800px-Front_view_of_Patio_de_los_Leones.jpg",
    youtubeQuery:"アルハンブラ宮殿 イスラム 世界遺産", keywords:["アルハンブラ","イスラム","スペイン","ナスル朝","装飾"] },
  { id:"sagrada_familia", name:"アントニ・ガウディの建築作品群",
    nameEn:"Works of Antoni Gaudí",
    country:"スペイン", countryFlag:"🇪🇸", region:"europe", relatedEra:"modern",
    year:1984, criteria:["i","ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"バルセロナのガウディ建築7件。未完成のまま登録されたサグラダ・ファミリアが象徴的。",
    examTips:["サグラダ・ファミリアが代表（未完成のまま登録）","ガウディはバルセロナで活躍","カサ・ミラ・カサ・バトリョも含む","「自然をモチーフにした建築」","登録基準i・ii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sagrada_Familia_01.jpg/800px-Sagrada_Familia_01.jpg",
    youtubeQuery:"ガウディ サグラダファミリア 世界遺産", keywords:["ガウディ","サグラダファミリア","バルセロナ","スペイン","近代建築"] },
  { id:"burgos", name:"ブルゴスの大聖堂", nameEn:"Burgos Cathedral",
    country:"スペイン", countryFlag:"🇪🇸", region:"europe", relatedEra:"medieval",
    year:1984, criteria:["ii","iv","vi"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"スペイン・ゴシック建築の傑作。1221年着工、完成まで約300年を費やした巡礼路上の大聖堂。",
    examTips:["ゴシック建築・スペインの代表的大聖堂","サンティアゴ巡礼路上に位置","1221年着工","登録基準ii・iv・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Burgos_-_Catedral_-_20110904_101318.jpg/800px-Burgos_-_Catedral_-_20110904_101318.jpg",
    youtubeQuery:"ブルゴス大聖堂 ゴシック スペイン 世界遺産", keywords:["ゴシック","スペイン","巡礼","大聖堂","中世"] },
  // ─ イギリス ─
  { id:"stonehenge", name:"ストーンヘンジ、エーヴベリーと関連する遺跡群",
    nameEn:"Stonehenge, Avebury and Associated Sites",
    country:"イギリス", countryFlag:"🇬🇧", region:"europe", relatedEra:"ancient",
    year:1986, criteria:["i","ii","iii"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"紀元前2500年頃に建造された巨石遺跡群。夏至の日の出と一致する配置が天文的意味を示す。",
    examTips:["紀元前2500年頃建造・目的不明","夏至の日の出と一致する配置","建材をどう運んだか謎","新石器時代〜青銅器時代","登録基準i・ii・iii"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/800px-Stonehenge2007_07_30.jpg",
    youtubeQuery:"ストーンヘンジ 巨石 世界遺産", keywords:["ストーンヘンジ","巨石","イギリス","新石器","謎"] },
  { id:"tower_of_london", name:"ロンドン塔", nameEn:"Tower of London",
    country:"イギリス", countryFlag:"🇬🇧", region:"europe", relatedEra:"medieval",
    year:1988, criteria:["ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"1066年ウィリアム征服王が建造。王室の宝庫・監獄・処刑場として使われた中世の要塞。",
    examTips:["1066年ウィリアム1世が建造","王室の宝庫・監獄・処刑場として機能","ヨーマン（衛兵）が今も守る","登録基準ii・iv","ウェストミンスター宮殿と共同登録候補地"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TOL_white_tower.jpg/800px-TOL_white_tower.jpg",
    youtubeQuery:"ロンドン塔 中世 イギリス 世界遺産", keywords:["ロンドン塔","イギリス","城","中世","監獄"] },
  { id:"ironbridge", name:"アイアンブリッジ渓谷", nameEn:"Ironbridge Gorge",
    country:"イギリス", countryFlag:"🇬🇧", region:"europe", relatedEra:"modern",
    year:1986, criteria:["i","ii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"1779年完成の世界初の鉄橋。産業革命発祥の地として製鉄・製陶産業の遺産が残る。",
    examTips:["世界初の鉄橋（1779年完成）","産業革命発祥の地","鉄製品製造の中心","登録基準i・ii・iv・vi","「産業革命遺産」の代表格"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ironbridge_-_Shropshire.jpg/800px-Ironbridge_-_Shropshire.jpg",
    youtubeQuery:"アイアンブリッジ 産業革命 鉄橋 世界遺産", keywords:["産業革命","鉄橋","イギリス","鉄","工業"] },
  { id:"westminster", name:"ウェストミンスター宮殿、ウェストミンスター寺院及び聖マーガレット教会",
    nameEn:"Westminster Palace, Westminster Abbey and Saint Margaret's Church",
    country:"イギリス", countryFlag:"🇬🇧", region:"europe", relatedEra:"medieval",
    year:1987, criteria:["i","ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"イギリス議会の本拠地ウェストミンスター宮殿（ビッグベン含む）と中世の修道院。",
    examTips:["国会議事堂（ウェストミンスター宮殿）とビッグベン","歴代王の戴冠式・埋葬地のウェストミンスター寺院","ゴシック・リバイバル建築","登録基準i・ii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Westminster_Abbey_Exterior%2C_London%2C_UK_-_Diliff.jpg/800px-Westminster_Abbey_Exterior%2C_London%2C_UK_-_Diliff.jpg",
    youtubeQuery:"ウェストミンスター宮殿 ビッグベン 世界遺産", keywords:["ウェストミンスター","ビッグベン","議会","イギリス","ゴシック"] },
  // ─ ドイツ ─
  { id:"cologne", name:"ケルン大聖堂", nameEn:"Cologne Cathedral",
    country:"ドイツ", countryFlag:"🇩🇪", region:"europe", relatedEra:"medieval",
    year:1996, criteria:["i","ii","iv"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"1248年起工・1880年完成（632年かけた）のゴシック建築の最高峰。完成当時世界最高の建物。",
    examTips:["ゴシック建築の最高峰のひとつ","1248年起工・1880年に完成（632年）","高さ157m（完成当時世界一）","ライン川沿いに位置","一時危機遺産リスト入り（2004年）"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Koelner_Dom_Alter_Markt.jpg/800px-Koelner_Dom_Alter_Markt.jpg",
    youtubeQuery:"ケルン大聖堂 ゴシック ドイツ 世界遺産", keywords:["ゴシック","ケルン","ドイツ","大聖堂","中世"] },
  { id:"potsdam", name:"ポツダムとベルリンの宮殿群と公園群",
    nameEn:"Palaces and Parks of Potsdam and Berlin",
    country:"ドイツ", countryFlag:"🇩🇪", region:"europe", relatedEra:"earlyModern",
    year:1990, criteria:["i","ii","iv"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"フリードリヒ大王が造営したサンスーシ宮殿を中心とするプロイセンの宮廷文化の遺産群。",
    examTips:["サンスーシ宮殿がメイン（ロココ様式）","フリードリヒ大王（フリードリヒ2世）が造営","プロイセン王国の象徴","ポツダム宣言の地","登録基準i・ii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sanssouci_building.jpg/800px-Sanssouci_building.jpg",
    youtubeQuery:"ポツダム サンスーシ宮殿 ドイツ 世界遺産", keywords:["ポツダム","ロココ","ドイツ","宮殿","フリードリヒ"] },
  { id:"auschwitz", name:"アウシュビッツ・ビルケナウ ナチス・ドイツの強制・絶滅収容所",
    nameEn:"Auschwitz Birkenau",
    country:"ポーランド", countryFlag:"🇵🇱", region:"europe", relatedEra:"contemporary",
    year:1979, criteria:["vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"第二次世界大戦中にナチス・ドイツが運営した最大規模の強制・絶滅収容所。約110万人が犠牲に。",
    examTips:["登録基準viのみ（負の遺産の代表）","約110万人（主にユダヤ人）が犠牲","1940〜1945年に操業","「二度とこのような悲劇を繰り返さないために」登録","広島・長崎の原爆ドームと並ぶ負の遺産"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Auschwitz_I_Gate.jpg/800px-Auschwitz_I_Gate.jpg",
    youtubeQuery:"アウシュビッツ ホロコースト 負の遺産 世界遺産", keywords:["アウシュビッツ","ホロコースト","負の遺産","ポーランド","ナチス"] },
  // ─ ギリシャ ─
  { id:"acropolis", name:"アテネのアクロポリス", nameEn:"Acropolis, Athens",
    country:"ギリシャ", countryFlag:"🇬🇷", region:"europe", relatedEra:"classical",
    year:1987, criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"紀元前5世紀ペリクレス時代のパルテノン神殿を中心とする古代ギリシャ文明の頂点。",
    examTips:["パルテノン神殿が有名","紀元前5世紀建造","ペリクレス時代の建造","登録基準が5つ","エルギン・マーブルス問題（大英博物館が所蔵）"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Parthenon_Athens_Jan_2006.jpg/800px-Parthenon_Athens_Jan_2006.jpg",
    youtubeQuery:"アクロポリス パルテノン神殿 ギリシャ 世界遺産", keywords:["アクロポリス","パルテノン","ギリシャ","古代","神殿"] },
  { id:"delphi", name:"デルフィの聖域", nameEn:"Archaeological Site of Delphi",
    country:"ギリシャ", countryFlag:"🇬🇷", region:"europe", relatedEra:"classical",
    year:1987, criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"「世界のへそ」と呼ばれたアポロン神殿と神託所。古代ギリシャの精神的中心地。",
    examTips:["「世界のへそ（オンファロス）」と呼ばれた","アポロン神殿と神託で有名","古代の政治・宗教的中心地","4年ごとのピューティア競技会の地","登録基準i〜vi（5つ）"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Temple_of_Apollo_at_Delphi_-_Greece.jpg/800px-Temple_of_Apollo_at_Delphi_-_Greece.jpg",
    youtubeQuery:"デルフィ アポロン神殿 神託 ギリシャ 世界遺産", keywords:["デルフィ","神託","ギリシャ","アポロン","遺跡"] },
  // ─ その他ヨーロッパ ─
  { id:"dubrovnik", name:"ドゥブロヴニクの旧市街", nameEn:"Old City of Dubrovnik",
    country:"クロアチア", countryFlag:"🇭🇷", region:"europe", relatedEra:"medieval",
    year:1979, criteria:["i","iii","iv"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"アドリア海に突き出た「アドリア海の真珠」。完全に保存された中世の城壁都市。",
    examTips:["「アドリア海の真珠」の別名","完全保存された中世城壁都市","1991〜1992年のユーゴスラビア内戦で砲撃され危機遺産に","ゲーム・オブ・スローンズのロケ地","登録基準i・iii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Panorama_Dubrovnika_5021.JPG",
    youtubeQuery:"ドゥブロヴニク 城壁 アドリア海 世界遺産", keywords:["ドゥブロヴニク","クロアチア","城壁","アドリア海","中世"] },
  { id:"budapest", name:"ブダペストのドナウ河岸地域", nameEn:"Budapest, including the Banks of the Danube",
    country:"ハンガリー", countryFlag:"🇭🇺", region:"europe", relatedEra:"modern",
    year:1987, criteria:["ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"ドナウ川に架かるくさり橋と王宮の丘・国会議事堂が織りなすパノラマで知られる。",
    examTips:["「ドナウの真珠」の別名","王宮の丘・くさり橋・国会議事堂が代表","温泉都市としても有名","登録基準ii・iv","マジャール人の歴史の中心地"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Budapest_-_Hungarian_Parliament_building.jpg/800px-Budapest_-_Hungarian_Parliament_building.jpg",
    youtubeQuery:"ブダペスト ドナウ川 世界遺産", keywords:["ブダペスト","ドナウ","ハンガリー","王宮","くさり橋"] },
  { id:"prague", name:"プラハ歴史地区", nameEn:"Historic Centre of Prague",
    country:"チェコ", countryFlag:"🇨🇿", region:"europe", relatedEra:"medieval",
    year:1992, criteria:["i","ii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"「百塔の都」と呼ばれる中世ヨーロッパの保存状態が最も良い旧市街のひとつ。",
    examTips:["「百塔の都」「中欧の宝石」の別名","プラハ城・カレル橋・旧市街広場が代表","第二次大戦でほとんど破壊されなかった","登録基準i・ii・iv・vi","1992年登録"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Prague_-_Old_Town_Square.jpg/800px-Prague_-_Old_Town_Square.jpg",
    youtubeQuery:"プラハ 歴史地区 百塔の都 世界遺産", keywords:["プラハ","チェコ","中世","プラハ城","カレル橋"] },
  { id:"cesky_krumlov", name:"チェスキー・クルムロフ歴史地区", nameEn:"Historic Centre of Český Krumlov",
    country:"チェコ", countryFlag:"🇨🇿", region:"europe", relatedEra:"medieval",
    year:1992, criteria:["iv"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"ヴルタヴァ川の蛇行部に位置する中世の城と旧市街。ゴシックからバロックまで多様な建築様式が残る。",
    examTips:["川の蛇行に囲まれた城と旧市街","ゴシック・ルネサンス・バロック様式が混在","「チェコで最も美しい街」とも","登録基準ivのみ","1992年登録"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/View_over_%C4%8Cesk%C3%BD_Krumlov_in_2012.JPG",
    youtubeQuery:"チェスキークルムロフ 世界遺産", keywords:["チェコ","中世","城","川","バロック"] },
  { id:"vienna", name:"ウィーン歴史地区", nameEn:"Historic Centre of Vienna",
    country:"オーストリア", countryFlag:"🇦🇹", region:"europe", relatedEra:"modern",
    year:2001, criteria:["ii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"ハプスブルク帝国の首都として繁栄した「音楽の都」。王宮・国立歌劇場・リングシュトラーセが残る。",
    examTips:["ハプスブルク帝国の首都","「音楽の都」モーツァルト・ベートーヴェンゆかり","王宮（ホーフブルク）・国立歌劇場が代表","登録基準ii・iv・vi","2017年に危機遺産リスト入りの警告"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kunsthistorisches_Museum_Wien_2014_%28cropped%29.jpg/800px-Kunsthistorisches_Museum_Wien_2014_%28cropped%29.jpg",
    youtubeQuery:"ウィーン 音楽の都 ハプスブルク 世界遺産", keywords:["ウィーン","音楽","ハプスブルク","オーストリア","宮殿"] },
  { id:"hallstatt", name:"ハルシュタット・ダッハシュタイン・ザルツカンマーグート文化的景観",
    nameEn:"Hallstatt-Dachstein/Salzkammergut Cultural Landscape",
    country:"オーストリア", countryFlag:"🇦🇹", region:"europe", relatedEra:"ancient",
    year:1997, criteria:["iii","iv"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"湖畔に広がる塩の産地として3000年の歴史を持つ景観。先史時代の塩採掘文化の遺産。",
    examTips:["3000年以上前から塩の産地（世界最古の塩坑）","「ハルシュタット文化」の語源となった地","湖畔の絵画的な街並みが有名","中国・広東省にレプリカ建設（話題）","登録基準iii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hallstatt_2013.jpg/800px-Hallstatt_2013.jpg",
    youtubeQuery:"ハルシュタット 湖畔 オーストリア 世界遺産", keywords:["ハルシュタット","塩","オーストリア","湖","先史"] },
  { id:"st_petersburg", name:"サンクト・ペテルブルグ歴史地区と関連建造物群",
    nameEn:"Historic Centre of Saint Petersburg and Related Groups of Monuments",
    country:"ロシア", countryFlag:"🇷🇺", region:"europe", relatedEra:"earlyModern",
    year:1990, criteria:["i","ii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"ピョートル大帝が創建した「ヨーロッパへの窓」。エルミタージュ美術館・冬宮殿が代表。",
    examTips:["ピョートル大帝が1703年に建設","「ヨーロッパへの窓」「北のヴェネツィア」","エルミタージュ美術館（冬宮殿）が有名","300万点以上の美術品を収蔵","登録基準i・ii・iv・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hermitage_museum.jpg/800px-Hermitage_museum.jpg",
    youtubeQuery:"サンクトペテルブルク エルミタージュ 世界遺産", keywords:["サンクトペテルブルク","ロシア","エルミタージュ","宮殿","ピョートル"] },
  { id:"kremlin", name:"モスクワのクレムリンと赤の広場",
    nameEn:"Kremlin and Red Square, Moscow",
    country:"ロシア", countryFlag:"🇷🇺", region:"europe", relatedEra:"earlyModern",
    year:1990, criteria:["i","ii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"ロシア政治の中枢クレムリンと赤の広場。聖ワシリー大聖堂の玉ねぎドームが象徴的。",
    examTips:["ロシアの政治・宗教の中心","聖ワシリー大聖堂（玉ねぎドーム）が有名","イワン雷帝が完成に関わる","「クレムリン」は「城塞」の意","登録基準i・ii・iv・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Moscow_July_2011-14.jpg/800px-Moscow_July_2011-14.jpg",
    youtubeQuery:"クレムリン 赤の広場 ロシア 世界遺産", keywords:["クレムリン","赤の広場","ロシア","モスクワ","聖ワシリー"] },
  { id:"edinburgh", name:"エジンバラの旧市街と新市街", nameEn:"Old and New Towns of Edinburgh",
    country:"イギリス", countryFlag:"🇬🇧", region:"europe", relatedEra:"earlyModern",
    year:1995, criteria:["ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"低",
    description:"スコットランドの首都。火山岩の上のエジンバラ城と18世紀の計画都市（新市街）が対照的。",
    examTips:["旧市街（中世）と新市街（18世紀計画都市）が対比","エジンバラ城が旧市街の中心","スコットランドの首都","アーサー・コナン・ドイルの生誕地","登録基準ii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Edinburgh_Castle_from_the_North.JPG",
    youtubeQuery:"エジンバラ 城 スコットランド 世界遺産", keywords:["エジンバラ","スコットランド","城","英国","中世"] },
  { id:"tallinn", name:"タリン歴史地区（旧市街）", nameEn:"Historic Centre (Old Town) of Tallinn",
    country:"エストニア", countryFlag:"🇪🇪", region:"europe", relatedEra:"medieval",
    year:1997, criteria:["ii","iv"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"中世のハンザ同盟都市として繁栄したバルト海の商業都市。城壁・旧市庁舎が完存する。",
    examTips:["ハンザ同盟の商業都市","中世の城壁が最もよく残るヨーロッパの都市のひとつ","旧市庁舎広場が中心","「バルトの真珠」","登録基準ii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tallinn_vanalinn.jpg/800px-Tallinn_vanalinn.jpg",
    youtubeQuery:"タリン ハンザ同盟 エストニア 世界遺産", keywords:["タリン","ハンザ","エストニア","中世","城壁"] },
  { id:"krakow", name:"クラクフ歴史地区", nameEn:"Cracow's Historic Centre",
    country:"ポーランド", countryFlag:"🇵🇱", region:"europe", relatedEra:"medieval",
    year:1978, criteria:["iv"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"第二次世界大戦で奇跡的に破壊を免れたポーランド旧王都。ヴァヴェル城と中央広場が中心。",
    examTips:["ポーランドの旧王都（ワルシャワより古い）","第二次大戦で破壊されなかった","ヴァヴェル城・中央広場が代表","1978年の最初の世界遺産リスト12件のひとつ","登録基準ivのみ"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Rynek_Glowny_z_lotu_ptaka.jpg/800px-Rynek_Glowny_z_lotu_ptaka.jpg",
    youtubeQuery:"クラクフ 世界遺産 ポーランド", keywords:["クラクフ","ポーランド","城","中世","旧市街"] },
  { id:"amsterdam", name:"アムステルダムの17世紀環状運河地域",
    nameEn:"Seventeenth-Century Canal Ring Area of Amsterdam",
    country:"オランダ", countryFlag:"🇳🇱", region:"europe", relatedEra:"earlyModern",
    year:2010, criteria:["i","ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"低",
    description:"17世紀のオランダ黄金時代に整備された同心円状の運河網。計画的な都市拡張の傑作。",
    examTips:["17世紀オランダ黄金時代の都市計画","同心円状の運河と細長い運河沿いの家屋が特徴","東インド会社の本拠地","2010年登録（比較的新しい）","登録基準i・ii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Amsterdam_Jordaan.jpg/800px-Amsterdam_Jordaan.jpg",
    youtubeQuery:"アムステルダム 運河 オランダ 世界遺産", keywords:["アムステルダム","運河","オランダ","17世紀","黄金時代"] },
  { id:"cologne_area", name:"ライン渓谷中上流域", nameEn:"Upper Middle Rhine Valley",
    country:"ドイツ", countryFlag:"🇩🇪", region:"europe", relatedEra:"medieval",
    year:2002, criteria:["ii","iv","v"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"ローレライの岩・多くの古城・葡萄畑が織りなすライン川65kmの文化的景観。",
    examTips:["ローレライ伝説の舞台","40以上の古城が連なる景観","ワイン（リースリング）産地","文化的景観として登録","登録基準ii・iv・v"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Loreleyfelsen.JPG",
    youtubeQuery:"ライン渓谷 ローレライ ドイツ 世界遺産", keywords:["ライン","ドイツ","古城","ローレライ","ワイン"] },
  { id:"blenheim", name:"ブレナム宮殿", nameEn:"Blenheim Palace",
    country:"イギリス", countryFlag:"🇬🇧", region:"europe", relatedEra:"earlyModern",
    year:1987, criteria:["i","ii","iv"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"マールバラ公爵に贈られた英国唯一の非王族の宮殿。ウィンストン・チャーチルの出生地。",
    examTips:["チャーチルの出生地として有名","英国唯一の非王族の宮殿","バロック様式","18世紀初頭建造","登録基準i・ii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Blenheim_Palace_from_the_south.jpg/800px-Blenheim_Palace_from_the_south.jpg",
    youtubeQuery:"ブレナム宮殿 チャーチル イギリス 世界遺産", keywords:["ブレナム","チャーチル","宮殿","イギリス","バロック"] },
  { id:"bath", name:"バース市街", nameEn:"City of Bath",
    country:"イギリス", countryFlag:"🇬🇧", region:"europe", relatedEra:"classical",
    year:1987, criteria:["i","ii","iv"], type:"文化遺産", difficulty:2, examFrequency:"低",
    description:"ローマ時代の浴場施設と18世紀のジョージ王朝様式建築が共存する温泉都市。",
    examTips:["ローマ時代の温泉浴場（バース）が現存","「バース」という地名の語源","18世紀ジョージ王朝様式の街並み","ジェーン・オースティンゆかり","登録基準i・ii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Roman.baths.at.bath.exterior.arp.jpg",
    youtubeQuery:"バース ローマ浴場 世界遺産", keywords:["バース","ローマ","温泉","イギリス","ジョージ王朝"] },
  { id:"bruges", name:"ブルッヘ歴史地区", nameEn:"Historic Centre of Brugge",
    country:"ベルギー", countryFlag:"🇧🇪", region:"europe", relatedEra:"medieval",
    year:2000, criteria:["ii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"低",
    description:"中世ヨーロッパ最大の商業都市として栄えた「北のヴェネツィア」。運河と石畳が残る。",
    examTips:["「北のヴェネツィア」の別名","中世のハンザ同盟の貿易拠点","フランドル絵画（ヤン・ファン・エイク）の発祥地","ベギン会修道院が有名","登録基準ii・iv・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Bruges%2C_the_Dijver_canal%2C_view_to_the_Belfry.JPG",
    youtubeQuery:"ブルッヘ 中世 ベルギー 世界遺産", keywords:["ブルッヘ","ベルギー","運河","中世","ハンザ"] },
  { id:"toledo", name:"トレドの歴史都市", nameEn:"Historic City of Toledo",
    country:"スペイン", countryFlag:"🇪🇸", region:"europe", relatedEra:"medieval",
    year:1986, criteria:["i","ii","iii","iv"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"キリスト教・ユダヤ教・イスラム教の3宗教が共存した「三文化の都」。刀剣と大聖堂で名高い。",
    examTips:["「三文化の都」（キリスト・ユダヤ・イスラムが共存）","スペインの旧首都","トレド刀（最高級の鋼）で有名","エル・グレコが活躍した地","登録基準i・ii・iii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Puerta_del_Cambr%C3%B3n_-_Toledo_001.JPG",
    youtubeQuery:"トレド 三文化 スペイン 世界遺産", keywords:["トレド","スペイン","三文化","大聖堂","中世"] },
  { id:"mont_blanc", name:"ピレネー山脈―ペルデュ山", nameEn:"Pyrénées - Mont Perdu",
    country:"フランス・スペイン", countryFlag:"🇫🇷",region:"europe", relatedEra:"contemporary",
    year:1997, criteria:["iii","iv","v","vii","viii"], type:"複合遺産", difficulty:3, examFrequency:"低",
    description:"フランス・スペイン国境の山岳地帯。農牧文化の景観と地質学的価値を兼ね備えた複合遺産。",
    examTips:["フランス・スペイン国境の越境複合遺産","複合遺産（文化＋自然）","高山農牧文化の景観","登録基準iii・iv・v・vii・viii（5つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Monte_Perdido_desde_Soaso.jpg",
    youtubeQuery:"ピレネー山脈 世界遺産", keywords:["ピレネー","フランス","スペイン","山岳","複合遺産"] },
  // ══════════════ アジア（日本以外） ══════════════
  // ─ 中国 ─
  { id:"great_wall", name:"万里の長城", nameEn:"The Great Wall",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"classical",
    year:1987, criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"秦始皇帝が統合・整備した全長21,196km（明代以降累計）の防衛壁。中国文明の象徴。",
    examTips:["全長21,196km（明代以降の累計）","「宇宙から見える唯一の建造物」は俗説（実際は見えない）","秦の始皇帝が統合・整備","登録基準が5つ","2000年以上かけて建設"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
    youtubeQuery:"万里の長城 秦始皇帝 世界遺産", keywords:["万里の長城","中国","秦","始皇帝","防衛"] },
  { id:"forbidden_city", name:"北京と瀋陽の明・清朝の皇宮群",
    nameEn:"Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"earlyModern",
    year:1987, criteria:["i","ii","iii","iv"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"永楽帝が1406年に建造した故宮（紫禁城）。9,999室を持つ世界最大の宮殿群。",
    examTips:["故宮（紫禁城）が代表","1406年建造・明の永楽帝","9,999室（天の9,999に対して1室少ない）","登録基準i・ii・iii・iv","現在は博物院として公開"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Forbidden_City_1.jpg/800px-Forbidden_City_1.jpg",
    youtubeQuery:"故宮 紫禁城 北京 世界遺産", keywords:["故宮","紫禁城","中国","明朝","皇帝"] },
  { id:"terracotta", name:"秦の始皇帝陵と兵馬俑坑",
    nameEn:"Mausoleum of the First Qin Emperor",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"classical",
    year:1987, criteria:["i","iii","iv","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"8,000体以上の等身大の兵士・馬の陶器で知られる秦始皇帝の陵墓。1974年に農民が偶然発見。",
    examTips:["8,000体以上の等身大の兵士・馬の陶器","1974年に農民が偶然発見","紀元前210年の始皇帝の陵墓","「世界8番目の不思議」と称される","登録基準i・iii・iv・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Terracotta_Army_-_Battle_Formations.jpg/800px-Terracotta_Army_-_Battle_Formations.jpg",
    youtubeQuery:"兵馬俑 始皇帝陵 中国 世界遺産", keywords:["兵馬俑","始皇帝","陶器","中国","秦"] },
  { id:"potala", name:"ラサのポタラ宮の歴史的遺跡群",
    nameEn:"Historic Ensemble of the Potala Palace, Lhasa",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"earlyModern",
    year:1994, criteria:["i","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"チベット仏教の総本山。ダライ・ラマの居城として標高3,700mに建つ壮大な宮殿。",
    examTips:["チベット仏教の総本山","ダライ・ラマの宮殿（現在は亡命中）","標高3,700mに位置","7世紀に建造・17世紀に現在の形","登録基準i・iv・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Potala_palace_inner.jpg/800px-Potala_palace_inner.jpg",
    youtubeQuery:"ポタラ宮 チベット ダライ・ラマ 世界遺産", keywords:["ポタラ宮","チベット","仏教","ダライ・ラマ","中国"] },
  { id:"taishan", name:"泰山", nameEn:"Mount Taishan",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"ancient",
    year:1987, criteria:["i","ii","iii","iv","v","vi","vii"], type:"複合遺産", difficulty:2, examFrequency:"高",
    description:"「五嶽の首」と呼ばれる中国最高の聖山。登録基準が7つで世界最多クラスの複合遺産。",
    examTips:["複合遺産（文化＋自然）","登録基準が7つ（文化vi・自然vii含む）","「五嶽の首」中国最高の聖山","歴代皇帝が儀式を行った場所","1987年の最初の登録の一つ"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise_at_Mt_Tai.JPG",
    youtubeQuery:"泰山 中国 五嶽 世界遺産", keywords:["泰山","中国","聖山","皇帝","複合遺産"] },
  { id:"huangshan", name:"黄山", nameEn:"Mount Huangshan",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"earlyModern",
    year:1990, criteria:["ii","vii","x"], type:"複合遺産", difficulty:2, examFrequency:"中",
    description:"雲霧に浮かぶ奇岩・老松・温泉の「中国絵画の山」。松と霧の風景が中国山水画の原型。",
    examTips:["中国山水画のモデルとされる風景","奇岩・老松・雲海が特徴","複合遺産","登録基準ii・vii・x","「天下第一の奇山」の異名"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/HuangShan.JPG",
    youtubeQuery:"黄山 中国 奇岩 世界遺産", keywords:["黄山","中国","奇岩","霧","山水画"] },
  { id:"jiuzhaigou", name:"九寨溝の自然景観と歴史地区",
    nameEn:"Jiuzhaigou Valley Scenic and Historic Interest Area",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"contemporary",
    year:1992, criteria:["vii"], type:"自然遺産", difficulty:3, examFrequency:"中",
    description:"四川省の渓谷に連なる色鮮やかな多段の滝と湖。「人間仙境」と呼ばれる絶景の自然遺産。",
    examTips:["四川省に位置","登録基準viiのみ","エメラルドグリーンの多段の湖・滝が特徴","「人間仙境」の別名","2017年の地震で大きな被害"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Five_Flower_Lake%2C_Jiuzhaigou_Valley.jpg",
    youtubeQuery:"九寨溝 中国 四川省 世界遺産", keywords:["九寨溝","四川","中国","湖","滝"] },
  { id:"suzhou", name:"蘇州古典園林", nameEn:"Classical Gardens of Suzhou",
    country:"中国", countryFlag:"🇨🇳", region:"asia", relatedEra:"earlyModern",
    year:1997, criteria:["i","ii","iii","iv","v"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"「東洋のヴェネツィア」と呼ばれる水郷都市に残る中国式庭園の最高傑作群。",
    examTips:["中国庭園の最高傑作","「東洋のヴェネツィア」の水郷都市","拙政園・留園・網師園などが有名","江南式庭園の典型（山・水・建物の調和）","登録基準i〜v（5つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Suzhou%2C_Humble_Administrator%27s_Garden_%2803%29.JPG",
    youtubeQuery:"蘇州 古典庭園 中国 世界遺産", keywords:["蘇州","庭園","中国","水郷","江南"] },
  // ─ インド ─
  { id:"taj_mahal", name:"タージ・マハル", nameEn:"Taj Mahal",
    country:"インド", countryFlag:"🇮🇳", region:"asia", relatedEra:"earlyModern",
    year:1983, criteria:["i","ii"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"ムガル帝国皇帝シャー・ジャハーンが亡き妃のために建てた純白の大理石廟。イスラム建築の極致。",
    examTips:["ムガル帝国シャー・ジャハーンが妃のために建造","純白の大理石・イスラム建築","左右対称の完璧な設計","登録基準i・ii（iは芸術的傑作）","1631〜1653年建造"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/800px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    youtubeQuery:"タージ・マハル ムガル帝国 世界遺産", keywords:["タージ・マハル","インド","イスラム","ムガル","大理石"] },
  { id:"ajanta", name:"アジャンタ石窟群", nameEn:"Ajanta Caves",
    country:"インド", countryFlag:"🇮🇳", region:"asia", relatedEra:"classical",
    year:1983, criteria:["i","ii","iii","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"紀元前2世紀〜7世紀の仏教石窟壁画の傑作群。ヒンドゥーと仏教芸術の融合を示す。",
    examTips:["紀元前2世紀〜7世紀の仏教壁画","30の石窟に仏陀の生涯が描かれる","「インド美術の最高傑作」","エローラ石窟群と並ぶインドの代表遺産","登録基準i・ii・iii・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ajanta_cave9.jpg/800px-Ajanta_cave9.jpg",
    youtubeQuery:"アジャンタ石窟 インド 仏教壁画 世界遺産", keywords:["アジャンタ","インド","仏教","石窟","壁画"] },
  { id:"ellora", name:"エローラ石窟群", nameEn:"Ellora Caves",
    country:"インド", countryFlag:"🇮🇳", region:"asia", relatedEra:"classical",
    year:1983, criteria:["i","iii","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"仏教・ヒンドゥー教・ジャイナ教の3宗教の石窟が並ぶ宗教共存の場。カイラーサ寺院が傑作。",
    examTips:["仏教・ヒンドゥー・ジャイナ教の3宗教の石窟が共存","カイラーサ寺院（岩山を丸ごと削り出した神殿）が圧巻","34の石窟（仏教12・ヒンドゥー17・ジャイナ教5）","アジャンタと並ぶインドの代表遺産","登録基準i・iii・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Kailasha_temple_at_ellora.JPG",
    youtubeQuery:"エローラ石窟 カイラーサ寺院 インド 世界遺産", keywords:["エローラ","インド","石窟","ヒンドゥー","カイラーサ"] },
  { id:"khajuraho", name:"カジュラーホーの寺院群", nameEn:"Khajuraho Group of Monuments",
    country:"インド", countryFlag:"🇮🇳", region:"asia", relatedEra:"medieval",
    year:1986, criteria:["i","iii"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"10〜11世紀のチャンデーラ王朝のヒンドゥー・ジャイナ教寺院群。官能的な彫刻で有名。",
    examTips:["10〜11世紀チャンデーラ王朝","官能的な男女の彫刻（ミトゥナ像）で有名","ヒンドゥー建築のシカラ（塔）が特徴","宗教的な意味を持つ彫刻（性的エネルギーの象徴）","登録基準i・iii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/A_view_of_multiple_Khajuraho_temples_India.jpg",
    youtubeQuery:"カジュラーホー ヒンドゥー彫刻 インド 世界遺産", keywords:["カジュラーホー","インド","ヒンドゥー","シカラ","彫刻"] },
  // ─ 東南アジア ─
  { id:"angkor", name:"アンコール遺跡", nameEn:"Angkor",
    country:"カンボジア", countryFlag:"🇰🇭", region:"asia", relatedEra:"medieval",
    year:1992, criteria:["i","ii","iii","iv"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"クメール文明（9〜15世紀）の都城遺跡群。アンコール・ワットはヒンドゥー→仏教の複合寺院。",
    examTips:["クメール文明（9〜15世紀）の都城","アンコール・ワットはヒンドゥー・後に仏教の寺院","1992年に危機遺産登録→2004年に解除","スールヤヴァルマン2世が建造","登録基準i・ii・iii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Angkor_Wat%2C_Camboda.jpg/800px-Angkor_Wat%2C_Camboda.jpg",
    youtubeQuery:"アンコールワット カンボジア 世界遺産", keywords:["アンコール","カンボジア","クメール","ヒンドゥー","仏教"] },
  { id:"borobudur", name:"ボロブドゥール寺院遺跡群",
    nameEn:"Borobudur Temple Compounds",
    country:"インドネシア", countryFlag:"🇮🇩", region:"asia", relatedEra:"medieval",
    year:1991, criteria:["i","ii","vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"9世紀のシャイレーンドラ朝が建設した世界最大の仏教遺跡。曼荼羅の立体的表現。",
    examTips:["世界最大の仏教遺跡","9世紀シャイレーンドラ朝建設","仏教の宇宙観（曼荼羅）を立体的に表現","インドネシア・ジャワ島に位置","登録基準i・ii・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Borobudur-Nothwest-view.jpg/800px-Borobudur-Nothwest-view.jpg",
    youtubeQuery:"ボロブドゥール インドネシア 仏教遺跡 世界遺産", keywords:["ボロブドゥール","インドネシア","仏教","曼荼羅","ジャワ"] },
  { id:"prambanan", name:"プランバナン寺院遺跡群",
    nameEn:"Prambanan Temple Compounds",
    country:"インドネシア", countryFlag:"🇮🇩", region:"asia", relatedEra:"medieval",
    year:1991, criteria:["i","iv"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"9世紀のヒンドゥー教寺院群。シヴァ・ヴィシュヌ・ブラフマーの三神に捧げられた3主塔。",
    examTips:["9世紀のヒンドゥー教寺院群","ボロブドゥール（仏教）と同じジャワ島","3主塔はシヴァ・ヴィシュヌ・ブラフマーに捧げる","ロロ・ジョングラン（細身の美女）の伝説","登録基準i・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Main_shrine_of_Prambanan_temples.JPG",
    youtubeQuery:"プランバナン ヒンドゥー インドネシア 世界遺産", keywords:["プランバナン","インドネシア","ヒンドゥー","シヴァ","ジャワ"] },
  { id:"halong_bay", name:"ハロン湾", nameEn:"Ha Long Bay",
    country:"ベトナム", countryFlag:"🇻🇳", region:"asia", relatedEra:"contemporary",
    year:1994, criteria:["vii","viii"], type:"自然遺産", difficulty:2, examFrequency:"高",
    description:"1,969の島と岩礁が点在するトンキン湾の奇景。「海の桂林」とも称される石灰岩の絶景。",
    examTips:["1,969の島と岩礁","石灰岩のカルスト地形","「海の桂林」の別名","ベトナム北部のトンキン湾に位置","登録基準vii・viii"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Halong_Bay_-_panoramio_%282%29.jpg/800px-Halong_Bay_-_panoramio_%282%29.jpg",
    youtubeQuery:"ハロン湾 ベトナム 世界遺産", keywords:["ハロン湾","ベトナム","石灰岩","海","島"] },
  { id:"hoi_an", name:"ホイアンの古い町並み", nameEn:"Hoi An Ancient Town",
    country:"ベトナム", countryFlag:"🇻🇳", region:"asia", relatedEra:"earlyModern",
    year:1999, criteria:["ii","v"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"15〜19世紀の国際貿易港。日本・中国・西洋の建築様式が融合した独特の街並みが残る。",
    examTips:["15〜19世紀の国際貿易港","日本人町・中国人居住区が共存","日本橋（来遠橋）が有名","ランタン祭りで有名","登録基準ii・v"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Old_Town_Hoi_An_003.JPG",
    youtubeQuery:"ホイアン 古い町並み ベトナム 世界遺産", keywords:["ホイアン","ベトナム","日本橋","貿易港","ランタン"] },
  { id:"ayutthaya", name:"アユタヤの歴史都市", nameEn:"Historic City of Ayutthaya",
    country:"タイ", countryFlag:"🇹🇭", region:"asia", relatedEra:"medieval",
    year:1991, criteria:["iii"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"1351〜1767年に栄えたアユタヤ王朝の都城遺跡。日本人町があった国際都市だった。",
    examTips:["1351〜1767年のアユタヤ王朝の都","日本人町があった（山田長政で有名）","1767年にビルマ軍に破壊された","木に絡まった仏頭が有名","登録基準iiiのみ"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Ayutthaya_Thailand_Wat_Mahathat_Buddas_Head_in_Tree.JPG",
    youtubeQuery:"アユタヤ タイ 日本人町 世界遺産", keywords:["アユタヤ","タイ","日本人町","仏教","王朝"] },
  // ─ 中央・西アジア ─
  { id:"samarkand", name:"サマルカンド－文化の交差路",
    nameEn:"Samarkand – Crossroads of Cultures",
    country:"ウズベキスタン", countryFlag:"🇺🇿", region:"asia", relatedEra:"medieval",
    year:2001, criteria:["i","ii","iv"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"シルクロードの要衝。ティムール朝の都として14〜15世紀に繁栄した中央アジア最大の都市。",
    examTips:["シルクロードの中心都市","ティムール朝の首都（14〜15世紀）","レギスタン広場（3つのマドラサ）が代表","ティムールの霊廟（グル・エミール）","登録基準i・ii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Registan_Samarkand_Uzbekistan.JPG",
    youtubeQuery:"サマルカンド シルクロード ウズベキスタン 世界遺産", keywords:["サマルカンド","シルクロード","ティムール","中央アジア","ウズベキスタン"] },
  { id:"kathmandu", name:"カトマンズ盆地", nameEn:"Kathmandu Valley",
    country:"ネパール", countryFlag:"🇳🇵", region:"asia", relatedEra:"medieval",
    year:1979, criteria:["iii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"ヒンドゥー教・仏教の聖地が集まる盆地。7つの宗教的建造物群で構成。2015年地震で被害。",
    examTips:["7つの宗教的建造物群で構成","ヒンドゥー教・仏教の聖地","2015年の地震で大きな被害","パシュパティナート・スワヤンブナートが有名","登録基準iii・iv・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Boudhanath_Stupa_1.JPG",
    youtubeQuery:"カトマンズ盆地 ネパール 世界遺産", keywords:["カトマンズ","ネパール","ヒンドゥー","仏教","聖地"] },
  { id:"sigiriya", name:"シーギリヤ", nameEn:"Ancient City of Sigiriya",
    country:"スリランカ", countryFlag:"🇱🇰", region:"asia", relatedEra:"ancient",
    year:1982, criteria:["ii","iii","iv","v","vi"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"5世紀にカッサパ1世が建設した天空の宮殿。高さ200mの岩山の頂上に築かれた城塞。",
    examTips:["高さ200mの岩山の頂上に建つ宮殿","5世紀カッサパ王が建設","岩絵のシーギリヤ・レディが有名","「アジアの8番目の不思議」","登録基準ii・iii・iv・v・vi（5つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Sri_Lanka-Sigiriya-Rock.JPG",
    youtubeQuery:"シーギリヤ スリランカ 岩山 世界遺産", keywords:["シーギリヤ","スリランカ","岩山","宮殿","壁画"] },
  { id:"gyeongju", name:"慶州歴史地域", nameEn:"Gyeongju Historic Areas",
    country:"韓国", countryFlag:"🇰🇷", region:"asia", relatedEra:"classical",
    year:2000, criteria:["ii","iii"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"新羅王朝（57 BC〜935 AD）の都。古墳・仏国寺・石窟庵などが集積する「屋根のない博物館」。",
    examTips:["新羅王朝の都（「屋根のない博物館」）","仏国寺・石窟庵（UNESCO登録別件）が近郊","天馬塚など円墳が有名","2000年登録","登録基準ii・iii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Cheongsongdae.JPG",
    youtubeQuery:"慶州 新羅 韓国 世界遺産", keywords:["慶州","韓国","新羅","古墳","仏教"] },
  { id:"changdeokgung", name:"昌徳宮", nameEn:"Changdeokgung Palace Complex",
    country:"韓国", countryFlag:"🇰🇷", region:"asia", relatedEra:"earlyModern",
    year:1997, criteria:["ii","iii","iv"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"朝鮮王朝の別宮。自然地形に調和した「後苑（秘苑）」の美しい庭園が世界的評価を得る。",
    examTips:["朝鮮王朝（1405年建設）の別宮","「後苑（秘苑）」の庭園が評価","自然地形に溶け込む建築配置","韓国で最も美しい宮殿のひとつ","登録基準ii・iii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Changdeokgung.JPG",
    youtubeQuery:"昌徳宮 韓国 朝鮮王朝 世界遺産", keywords:["昌徳宮","韓国","朝鮮王朝","宮殿","庭園"] },
  { id:"luang_prabang", name:"ルアン・パバンの町", nameEn:"Town of Luang Prabang",
    country:"ラオス", countryFlag:"🇱🇦", region:"asia", relatedEra:"earlyModern",
    year:1995, criteria:["iv","v"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"メコン川沿いのラオスの旧王都。フランス植民地時代の建築とラオスの仏教寺院が融合する。",
    examTips:["ラオスの旧王都","フランス植民地建築と仏教寺院の融合","メコン川沿いに位置","托鉢（alms giving）の伝統が今も続く","登録基準iv・v"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Buddha_Statues_-_Wat_Xieng_Thong_-_Luang_Prabang_-_Laos.JPG",
    youtubeQuery:"ルアンパバーン ラオス 仏教 世界遺産", keywords:["ルアンパバーン","ラオス","仏教","フランス","メコン"] },
  { id:"bagan", name:"バガン", nameEn:"Bagan",
    country:"ミャンマー", countryFlag:"🇲🇲", region:"asia", relatedEra:"medieval",
    year:2019, criteria:["iii","iv","vi"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"9〜13世紀のパガン朝が建設した4,000以上の仏塔・寺院遺跡群。「東洋の夜明けに輝く塔の都」。",
    examTips:["9〜13世紀パガン朝の都","4,000以上の仏塔・寺院が平原に広がる","2016年の地震で損傷","「東洋の夜明けに輝く塔の都」","登録基準iii・iv・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/BaganMyanmar.JPG",
    youtubeQuery:"バガン ミャンマー 仏塔 世界遺産", keywords:["バガン","ミャンマー","仏塔","パガン朝","仏教"] },
  { id:"petra", name:"ペトラ", nameEn:"Petra",
    country:"ヨルダン", countryFlag:"🇯🇴", region:"asia", relatedEra:"classical",
    year:1985, criteria:["i","iii","iv"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"ナバタイ人が岩を刻んで作ったバラ色の砂岩都市。「失われた都市」として知られる。",
    examTips:["ナバタイ人が岩を刻んで作った都市","「バラ色の都市」「失われた都市」の別名","映画「インディ・ジョーンズ」の舞台","紀元前4世紀〜紀元後1世紀","登録基準i・iii・iv"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Treasury_petra_crop.jpg/800px-Treasury_petra_crop.jpg",
    youtubeQuery:"ペトラ ナバタイ ヨルダン 世界遺産", keywords:["ペトラ","ヨルダン","ナバタイ","岩窟","砂岩"] },
  { id:"jerusalem", name:"エルサレムの旧市街とその城壁",
    nameEn:"Old City of Jerusalem and its Walls",
    country:"ヨルダン推薦", countryFlag:"🏳️", region:"asia", relatedEra:"ancient",
    year:1981, criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"ユダヤ教・キリスト教・イスラム教の聖地。ヨルダンが推薦し1982年から危機遺産リストに登録中。",
    examTips:["ユダヤ教・キリスト教・イスラム教の聖地","ヨルダンが推薦（イスラエル管轄だが）","危機遺産リストに登録中（1982年〜）","嘆きの壁・聖墳墓教会・岩のドームが共存","登録基準が5つ"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Mount_of_olives_and_old_city_of_jerusalem.jpg/800px-Mount_of_olives_and_old_city_of_jerusalem.jpg",
    youtubeQuery:"エルサレム 旧市街 世界遺産 聖地", keywords:["エルサレム","ユダヤ教","キリスト教","イスラム","危機遺産"] },
  { id:"persepolis", name:"ペルセポリス", nameEn:"Persepolis",
    country:"イラン", countryFlag:"🇮🇷", region:"asia", relatedEra:"classical",
    year:1979, criteria:["i","iii","vi"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"アケメネス朝ペルシャ帝国（紀元前6〜4世紀）の儀式の都。アレクサンダー大王に焼かれた宮殿跡。",
    examTips:["アケメネス朝ペルシャ帝国の儀式の都","紀元前518年ダレイオス1世が建設","アレクサンダー大王が紀元前330年に焼却","「百柱の間」や「万国の門」が残る","登録基準i・iii・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Persepolis_%28Takht-e-Jamshid%29.jpg",
    youtubeQuery:"ペルセポリス ペルシャ帝国 イラン 世界遺産", keywords:["ペルセポリス","ペルシャ","イラン","アケメネス","古代"] },
  { id:"sukhothai", name:"スコータイと周辺の歴史都市群",
    nameEn:"Historic Town of Sukhothai and Associated Historic Towns",
    country:"タイ", countryFlag:"🇹🇭", region:"asia", relatedEra:"medieval",
    year:1991, criteria:["i","iii"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"タイ最初の王朝・スコータイ朝（13〜15世紀）の都城遺跡。タイ文字やタイ仏教建築の原型。",
    examTips:["タイ最初の統一王朝・スコータイ朝の都","タイ文字を制定したラームカムヘーン王で有名","13〜15世紀","登録基準i・iii","アユタヤより古い文化の源流"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/The_head_of_Buddha_in_Wat_Mahathat.JPG",
    youtubeQuery:"スコータイ タイ 最初の王朝 世界遺産", keywords:["スコータイ","タイ","最古","王朝","仏教"] },
  { id:"mohenjo_daro", name:"モヘンジョ・ダロの遺跡", nameEn:"Archaeological Ruins at Moenjodaro",
    country:"パキスタン", countryFlag:"🇵🇰", region:"asia", relatedEra:"ancient",
    year:1980, criteria:["ii","iii"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"紀元前2600〜1900年のインダス文明の最大都市。計画的な都市整備と下水道システムで知られる。",
    examTips:["インダス文明（紀元前2600〜1900年）の最大都市","計画的な街路と高度な下水道システム","「死者の丘」を意味する名称","インダス文字はまだ解読されていない","登録基準ii・iii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Mohenjo-daro.jpg",
    youtubeQuery:"モヘンジョダロ インダス文明 パキスタン 世界遺産", keywords:["モヘンジョダロ","インダス","パキスタン","古代","都市計画"] }
];

// ─── 日本の世界遺産データ（26件） ─────────────────────────
const japanHeritageData = [
  {
    id: "horyuji",
    name: "法隆寺地域の仏教建造物",
    nameEn: "Buddhist Monuments in the Horyu-ji Area",
    prefecture: "奈良県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1993,
    criteria: ["ii", "iv"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "ancient",
    difficulty: 1,
    examFrequency: "高",
    description: "7世紀に建立された世界最古の木造建築群。聖徳太子ゆかりの寺院で、飛鳥文化の傑作。",
    examTips: [
      "日本初の世界遺産（1993年・姫路城と同時登録）",
      "世界最古の木造建築群",
      "聖徳太子が建立",
      "飛鳥時代の建築様式",
      "登録基準はii・iv"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Horyu-ji_National_Treasure_World_heritage003.jpg/800px-Horyu-ji_National_Treasure_World_heritage003.jpg",
    youtubeQuery: "法隆寺 世界遺産 世界最古 木造",
    keywords: ["木造", "飛鳥", "聖徳太子", "奈良", "仏教"]
  },
  {
    id: "himeji",
    name: "姫路城",
    nameEn: "Himeji-jo",
    prefecture: "兵庫県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1993,
    criteria: ["i", "iv"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "earlyModern",
    difficulty: 1,
    examFrequency: "高",
    description: "白鷺城とも呼ばれる日本城郭建築の最高傑作。江戸時代初期の建造物がほぼ完存する。",
    examTips: [
      "日本初の世界遺産（法隆寺と同時登録）",
      "白鷺城の別名",
      "江戸時代初期・17世紀の建造",
      "登録基準はi・iv（iは珍しい＝芸術的傑作の証）",
      "城郭建築として登録された唯一の日本遺産"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Himeji_Castle_The_Keep_Towers.jpg/800px-Himeji_Castle_The_Keep_Towers.jpg",
    youtubeQuery: "姫路城 世界遺産 白鷺城",
    keywords: ["城", "江戸時代", "白鷺城", "兵庫"]
  },
  {
    id: "yakushima",
    name: "屋久島",
    nameEn: "Yakushima",
    prefecture: "鹿児島県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1993,
    criteria: ["vii", "ix"],
    type: "自然遺産",
    region: "asia",
    relatedEra: "contemporary",
    difficulty: 1,
    examFrequency: "高",
    description: "樹齢数千年の屋久杉が育つ亜熱帯から亜寒帯までの植生の垂直分布が見られる島。",
    examTips: [
      "日本最初の自然遺産（白神山地と同時・1993年）",
      "縄文杉が有名（推定樹齢2000〜7000年）",
      "「月のうち、35日は雨」と言われる多雨地域",
      "登録基準はvii・ix",
      "鹿児島県に属する島"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Yakusugi_Land_02.jpg/800px-Yakusugi_Land_02.jpg",
    youtubeQuery: "屋久島 屋久杉 縄文杉 世界遺産",
    keywords: ["自然", "屋久杉", "縄文杉", "鹿児島", "島"]
  },
  {
    id: "shirakami",
    name: "白神山地",
    nameEn: "Shirakami-Sanchi",
    prefecture: "青森県・秋田県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1993,
    criteria: ["ix"],
    type: "自然遺産",
    region: "asia",
    relatedEra: "contemporary",
    difficulty: 1,
    examFrequency: "高",
    description: "世界最大級のブナ原生林が広がる山地。人為的影響をほぼ受けていない貴重な生態系。",
    examTips: [
      "日本最初の自然遺産（屋久島と同時・1993年）",
      "世界最大級のブナの原生林",
      "青森県・秋田県にまたがる",
      "登録基準はixのみ（日本の自然遺産で最少）",
      "ニホンカモシカなど希少動物が生息"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Shirakami-Sanchi_1.JPG/800px-Shirakami-Sanchi_1.JPG",
    youtubeQuery: "白神山地 ブナ 原生林 世界遺産",
    keywords: ["自然", "ブナ", "原生林", "青森", "秋田"]
  },
  {
    id: "kyoto",
    name: "古都京都の文化財",
    nameEn: "Historic Monuments of Ancient Kyoto",
    prefecture: "京都府・滋賀県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1994,
    criteria: ["ii", "iv"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "medieval",
    difficulty: 1,
    examFrequency: "高",
    description: "794年の平安京遷都から明治維新まで日本の都だった京都の寺社仏閣17資産。",
    examTips: [
      "17の資産で構成される（金閣寺・銀閣寺・清水寺・二条城など）",
      "平安時代〜江戸時代の建造物",
      "滋賀県の延暦寺・日吉大社も含む",
      "登録基準はii・iv",
      "794年の平安遷都が背景"
    ],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG",
    youtubeQuery: "古都京都 世界遺産 金閣寺 銀閣寺",
    keywords: ["京都", "平安", "寺社", "金閣寺", "滋賀"]
  },
  {
    id: "shirakawa",
    name: "白川郷・五箇山の合掌造り集落",
    nameEn: "Historic Villages of Shirakawa-go and Gokayama",
    prefecture: "岐阜県・富山県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1995,
    criteria: ["iv", "v"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "earlyModern",
    difficulty: 2,
    examFrequency: "高",
    description: "豪雪地帯に適応した急勾配の茅葺き屋根「合掌造り」の集落。今も人々が生活する生きた遺産。",
    examTips: [
      "合掌造りの語源：両手を合わせた形に似ているから",
      "岐阜県白川村・富山県相倉・菅沼の3集落",
      "登録基準はiv・v（人間と環境の相互関係＝v）",
      "今も人が住む「生きている文化遺産」",
      "豪雪地帯の生活様式が評価された"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Ogimachi-Gassho-Shirakawa.jpg/800px-Ogimachi-Gassho-Shirakawa.jpg",
    youtubeQuery: "白川郷 合掌造り 世界遺産",
    keywords: ["合掌造り", "豪雪", "茅葺き", "岐阜", "富山"]
  },
  {
    id: "hiroshima",
    name: "広島平和記念碑（原爆ドーム）",
    nameEn: "Hiroshima Peace Memorial (Genbaku Dome)",
    prefecture: "広島県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1996,
    criteria: ["vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "contemporary",
    difficulty: 1,
    examFrequency: "高",
    description: "1945年8月6日の原爆投下を生き延びた建物。核兵器廃絶と恒久平和を訴えるシンボル。",
    examTips: [
      "登録基準viのみ（負の遺産の代表例）",
      "1996年登録時に米国・中国が反対票",
      "元はチェコ人設計の産業奨励館（1915年竣工）",
      "「負の世界遺産」の代表例",
      "厳島神社と同年（1996年）登録"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hiroshima_Peace_Memorial-0006.jpg/800px-Hiroshima_Peace_Memorial-0006.jpg",
    youtubeQuery: "原爆ドーム 広島 世界遺産 負の遺産",
    keywords: ["負の遺産", "原爆", "平和", "広島", "戦争"]
  },
  {
    id: "itsukushima",
    name: "厳島神社",
    nameEn: "Itsukushima Shinto Shrine",
    prefecture: "広島県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1996,
    criteria: ["i", "ii", "iv", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "medieval",
    difficulty: 2,
    examFrequency: "高",
    description: "瀬戸内海の宮島に建つ海上の神社。平清盛が現在の姿に整備した12世紀の建造物。",
    examTips: [
      "4つの登録基準（i・ii・iv・vi）＝日本最多タイ",
      "平安時代・平清盛が現在の形に整備",
      "海上に建つ大鳥居が特徴",
      "広島平和記念碑と同年（1996年）登録",
      "宮島全体が神域"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Itsukushima_Shrine_2019-11-02.jpg/800px-Itsukushima_Shrine_2019-11-02.jpg",
    youtubeQuery: "厳島神社 大鳥居 世界遺産",
    keywords: ["神社", "海上", "平清盛", "広島", "大鳥居"]
  },
  {
    id: "nara",
    name: "古都奈良の文化財",
    nameEn: "Historic Monuments of Ancient Nara",
    prefecture: "奈良県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1998,
    criteria: ["ii", "iii", "iv", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "ancient",
    difficulty: 2,
    examFrequency: "高",
    description: "710〜784年の奈良時代の都・平城京の寺社・宮殿跡。東大寺・興福寺・春日大社など8資産。",
    examTips: [
      "8資産で構成（東大寺・春日大社・春日山原始林など）",
      "奈良時代（710〜784年）の都",
      "登録基準はii・iii・iv・vi（4つ）",
      "東大寺の大仏・正倉院が有名",
      "中国・朝鮮からの文化交流の証拠（ii）"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Todaiji18s3200.jpg/800px-Todaiji18s3200.jpg",
    youtubeQuery: "古都奈良 東大寺 世界遺産 大仏",
    keywords: ["奈良", "東大寺", "大仏", "奈良時代", "平城京"]
  },
  {
    id: "nikko",
    name: "日光の社寺",
    nameEn: "Shrines and Temples of Nikko",
    prefecture: "栃木県",
    country: "日本", countryFlag: "🇯🇵",
    year: 1999,
    criteria: ["i", "iv", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "earlyModern",
    difficulty: 2,
    examFrequency: "高",
    description: "徳川家康を祀る東照宮を中心とした江戸時代初期の豪華絢爛な社寺建築群。",
    examTips: [
      "徳川家康・家光を祀る東照宮が中心",
      "「眠り猫」「三猿」「陽明門」が有名",
      "江戸時代初期（17世紀）の建造",
      "登録基準はi・iv・vi（3つ）",
      "103棟の建造物で構成"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Yomeimon_2014.jpg/800px-Yomeimon_2014.jpg",
    youtubeQuery: "日光東照宮 世界遺産 陽明門",
    keywords: ["東照宮", "徳川", "江戸", "栃木", "三猿"]
  },
  {
    id: "ryukyu",
    name: "琉球王国のグスク及び関連遺産群",
    nameEn: "Gusuku Sites and Related Properties of the Kingdom of Ryukyu",
    prefecture: "沖縄県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2000,
    criteria: ["ii", "iii", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "medieval",
    difficulty: 2,
    examFrequency: "高",
    description: "14〜17世紀に栄えた琉球王国の城（グスク）や聖地など9資産。",
    examTips: [
      "グスク＝琉球の城・聖地",
      "首里城・中城城・勝連城など9資産",
      "14〜17世紀の琉球王国時代",
      "登録基準はii・iii・vi",
      "2019年に首里城が火災で焼失（世界遺産登録には影響なし）"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Shuri-jo_Naha_Okinawa_Japan.jpg/800px-Shuri-jo_Naha_Okinawa_Japan.jpg",
    youtubeQuery: "琉球王国 首里城 グスク 世界遺産",
    keywords: ["琉球", "グスク", "首里城", "沖縄", "城"]
  },
  {
    id: "kii",
    name: "紀伊山地の霊場と参詣道",
    nameEn: "Sacred Sites and Pilgrimage Routes in the Kii Mountain Range",
    prefecture: "奈良県・三重県・和歌山県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2004,
    criteria: ["ii", "iii", "iv", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "medieval",
    difficulty: 2,
    examFrequency: "高",
    description: "吉野・大峯、熊野三山、高野山の3霊場と参詣道。神仏習合の精神文化を体現する。",
    examTips: [
      "3県にまたがる（奈良・三重・和歌山）",
      "3つの霊場：吉野・大峯 / 熊野三山 / 高野山",
      "参詣道（熊野古道）も登録対象",
      "登録基準はii・iii・iv・vi（4つ）",
      "「神仏習合」の文化が評価"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Nachi_falls.jpg/800px-Nachi_falls.jpg",
    youtubeQuery: "熊野古道 高野山 世界遺産 参詣道",
    keywords: ["熊野古道", "高野山", "神仏習合", "和歌山", "巡礼"]
  },
  {
    id: "shiretoko",
    name: "知床",
    nameEn: "Shiretoko",
    prefecture: "北海道",
    country: "日本", countryFlag: "🇯🇵",
    year: 2005,
    criteria: ["ix", "x"],
    type: "自然遺産",
    region: "asia",
    relatedEra: "contemporary",
    difficulty: 1,
    examFrequency: "高",
    description: "流氷が育む豊かな生態系。陸と海の生物連鎖が顕著な半島。ヒグマ・オジロワシが生息。",
    examTips: [
      "「地の果て」を意味するアイヌ語が語源",
      "流氷がもたらす豊かな生態系が評価",
      "ヒグマ・オジロワシ・シマフクロウが生息",
      "登録基準はix・x",
      "登録時に日本・ロシアの国境問題が議論された"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Shiretoko_National_Park_01.jpg/800px-Shiretoko_National_Park_01.jpg",
    youtubeQuery: "知床 世界遺産 流氷 ヒグマ",
    keywords: ["流氷", "ヒグマ", "北海道", "アイヌ", "生態系"]
  },
  {
    id: "iwami",
    name: "石見銀山遺跡とその文化的景観",
    nameEn: "Iwami Ginzan Silver Mine and its Cultural Landscape",
    prefecture: "島根県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2007,
    criteria: ["ii", "iii", "v"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "earlyModern",
    difficulty: 2,
    examFrequency: "中",
    description: "16〜20世紀に操業した世界最大級の銀山。日本の銀が世界の貿易に与えた影響が評価された。",
    examTips: [
      "16世紀に最盛期・日本の銀産出量が世界の約1/3",
      "登録基準はii・iii・v",
      "「文化的景観」として登録（鉱山＋周辺集落・街道）",
      "登録時にIUCNが反対（異例）",
      "大田市に位置"
    ],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Iwami_Ginzan_Silver_Mine%2C_Ryugenji_Mabu_Mine_Shaft_001.JPG",
    youtubeQuery: "石見銀山 世界遺産 島根",
    keywords: ["銀山", "鉱山", "島根", "貿易", "文化的景観"]
  },
  {
    id: "hiraizumi",
    name: "平泉―仏国土を表す建築・庭園及び考古学的遺跡群",
    nameEn: "Hiraizumi – Temples, Gardens and Archaeological Sites",
    prefecture: "岩手県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2011,
    criteria: ["ii", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "medieval",
    difficulty: 2,
    examFrequency: "高",
    description: "12世紀に奥州藤原氏が築いた浄土思想に基づく都市。中尊寺金色堂が象徴的。",
    examTips: [
      "2008年に一度「登録延期」→2011年に再推薦・登録",
      "中尊寺金色堂（藤原清衡造営）が代表",
      "奥州藤原氏の3代・約100年の栄華",
      "登録基準はii・vi",
      "浄土思想の庭園として評価"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Chuson-ji_Konjikido.jpg/800px-Chuson-ji_Konjikido.jpg",
    youtubeQuery: "平泉 中尊寺金色堂 世界遺産 奥州藤原",
    keywords: ["平泉", "中尊寺", "金色堂", "浄土", "岩手"]
  },
  {
    id: "ogasawara",
    name: "小笠原諸島",
    nameEn: "Ogasawara Islands",
    prefecture: "東京都",
    country: "日本", countryFlag: "🇯🇵",
    year: 2011,
    criteria: ["ix", "x"],
    type: "自然遺産",
    region: "asia",
    relatedEra: "contemporary",
    difficulty: 2,
    examFrequency: "高",
    description: "一度も大陸と陸続きになったことがない海洋島。固有種が多く「東洋のガラパゴス」と呼ばれる。",
    examTips: [
      "「東洋のガラパゴス」の別名",
      "一度も大陸と地続きになったことがない",
      "父島・母島が中心（東京から船で約24時間）",
      "登録基準はix・x",
      "固有種の比率が非常に高い"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Ogasawara_Islands.jpg/800px-Ogasawara_Islands.jpg",
    youtubeQuery: "小笠原諸島 世界遺産 固有種 東洋ガラパゴス",
    keywords: ["海洋島", "固有種", "東京", "ガラパゴス", "父島"]
  },
  {
    id: "fujisan",
    name: "富士山―信仰の対象と芸術の源泉",
    nameEn: "Fujisan, sacred place and source of artistic inspiration",
    prefecture: "静岡県・山梨県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2013,
    criteria: ["iii", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "earlyModern",
    difficulty: 1,
    examFrequency: "高",
    description: "古来より信仰の対象であり、葛飾北斎「富嶽三十六景」などの芸術を生んだ霊峰。",
    examTips: [
      "自然遺産ではなく文化遺産（重要！）",
      "登録名に「信仰」「芸術」が含まれる",
      "登録基準はiii・vi",
      "25構成資産（富士五湖・忍野八海など）",
      "三保の松原を含む形で登録（ユネスコの除外勧告を交渉で覆した）"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Fuji_from_Shinkansen_N3.jpg/800px-Fuji_from_Shinkansen_N3.jpg",
    youtubeQuery: "富士山 世界遺産 文化遺産 信仰",
    keywords: ["富士山", "信仰", "芸術", "文化遺産", "浮世絵"]
  },
  {
    id: "tomioka",
    name: "富岡製糸場と絹産業遺産群",
    nameEn: "Tomioka Silk Mill and Related Sites",
    prefecture: "群馬県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2014,
    criteria: ["ii", "iv"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "modern",
    difficulty: 2,
    examFrequency: "高",
    description: "1872年（明治5年）に設立された日本初の本格的な機械製糸工場。近代産業化を牽引した。",
    examTips: [
      "1872年（明治5年）設立・日本初の本格機械製糸場",
      "フランス人技師・ポール・ブリュナが設計",
      "群馬県富岡市に所在",
      "登録基準はii・iv",
      "富岡製糸場・田島弥平旧宅・高山社跡・荒船風穴の4資産"
    ],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tomioka_Silk_Mill_Main_Building.JPG",
    youtubeQuery: "富岡製糸場 世界遺産 明治 絹産業",
    keywords: ["製糸", "明治", "絹", "群馬", "産業革命"]
  },
  {
    id: "meiji",
    name: "明治日本の産業革命遺産",
    nameEn: "Sites of Japan's Meiji Industrial Revolution",
    prefecture: "岩手・静岡・山口・福岡・佐賀・長崎・熊本・鹿児島県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2015,
    criteria: ["ii", "iv"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "modern",
    difficulty: 2,
    examFrequency: "高",
    description: "19世紀後半〜20世紀初頭の急速な産業化を示す製鉄・製鋼・造船・石炭産業の遺産群。",
    examTips: [
      "8県・23資産で構成（最多の構成資産数）",
      "「非西洋国家として初めて産業革命を成し遂げた」点が評価",
      "軍艦島（端島炭鉱）が有名",
      "韓国との外交問題（朝鮮人労働者の記述）が議論に",
      "登録基準はii・iv"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hashima_island.jpg/800px-Hashima_island.jpg",
    youtubeQuery: "明治産業革命遺産 軍艦島 世界遺産",
    keywords: ["産業革命", "明治", "軍艦島", "製鉄", "造船"]
  },
  {
    id: "lecorbusier",
    name: "ル・コルビュジエの建築作品",
    nameEn: "The Architectural Work of Le Corbusier",
    prefecture: "東京都（上野）",
    country: "日本（7か国共同）", countryFlag: "🇯🇵",
    year: 2016,
    criteria: ["i", "ii", "vi"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "contemporary",
    difficulty: 3,
    examFrequency: "中",
    description: "近代建築の巨匠ル・コルビュジエの設計した建築物群（7か国17資産）。日本は国立西洋美術館。",
    examTips: [
      "7か国17資産（フランス・スイス・日本など）の越境遺産",
      "日本の資産は東京・上野の国立西洋美術館",
      "「近代建築の5原則」で有名",
      "登録基準はi・ii・vi",
      "ル・コルビュジエの弟子・前川國男・坂倉準三が施工担当"
    ],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/La_Porte_de_l%27enfer_-_National_Museum_of_Western_Art%2C_Tokyo_-_DSC08040.JPG",
    youtubeQuery: "ル・コルビュジエ 国立西洋美術館 世界遺産",
    keywords: ["近代建築", "ル・コルビュジエ", "東京", "美術館", "越境遺産"]
  },
  {
    id: "munakata",
    name: "「神宿る島」宗像・沖ノ島と関連遺産群",
    nameEn: "Sacred Island of Okinoshima and Associated Sites in the Munakata Region",
    prefecture: "福岡県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2017,
    criteria: ["ii", "iii"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "ancient",
    difficulty: 3,
    examFrequency: "中",
    description: "古代から大陸との交流の要衝だった沖ノ島を中心とする遺産群。女人禁制・持ち出し禁止の神聖な島。",
    examTips: [
      "沖ノ島は「女人禁制」「一般人上陸禁止」",
      "島から何も持ち出してはならない（葉っぱ一枚も禁止）",
      "4〜9世紀の「国家的祭祀」の遺物が現存",
      "登録基準はii・iii",
      "古代の日本・朝鮮・中国交流の証拠"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Okinoshima_Island_aerial_photo.jpg/800px-Okinoshima_Island_aerial_photo.jpg",
    youtubeQuery: "宗像 沖ノ島 神宿る島 世界遺産",
    keywords: ["沖ノ島", "女人禁制", "神聖", "福岡", "古代祭祀"]
  },
  {
    id: "nagasaki",
    name: "長崎と天草地方の潜伏キリシタン関連遺産",
    nameEn: "Hidden Christian Sites in the Nagasaki Region",
    prefecture: "長崎県・熊本県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2018,
    criteria: ["iii"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "earlyModern",
    difficulty: 2,
    examFrequency: "高",
    description: "禁教期（17〜19世紀）に信仰を隠し続けたキリシタンたちの文化的伝統の証拠となる12資産。",
    examTips: [
      "登録基準はiiiのみ（1つだけ）",
      "「潜伏」キリシタン＝禁教下で信仰を隠した人々",
      "12の構成資産（原城跡・平戸の聖地・天草の崎津集落など）",
      "2018年登録（「長崎の教会群」から名称変更）",
      "明治以降に「復活」したキリシタンは対象外"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ikitsuki-shimabara.jpg/800px-Ikitsuki-shimabara.jpg",
    youtubeQuery: "潜伏キリシタン 長崎 天草 世界遺産",
    keywords: ["キリシタン", "潜伏", "禁教", "長崎", "天草"]
  },
  {
    id: "mozu",
    name: "百舌鳥・古市古墳群",
    nameEn: "Mozu-Furuichi Kofun Group: Mounded Tombs of Ancient Japan",
    prefecture: "大阪府",
    country: "日本", countryFlag: "🇯🇵",
    year: 2019,
    criteria: ["iii", "iv"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "ancient",
    difficulty: 2,
    examFrequency: "高",
    description: "4〜5世紀の古墳時代を代表する大規模墳墓群。仁徳天皇陵（大山古墳）が最大。",
    examTips: [
      "4〜5世紀・古墳時代の墳墓群",
      "仁徳天皇陵（大山古墳）は世界最大級の墳墓",
      "大阪府堺市・藤井寺市・羽曳野市に所在",
      "登録基準はiii・iv",
      "49基の古墳で構成"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Daisen_Kofun_aerial_photograph_2016.jpg/800px-Daisen_Kofun_aerial_photograph_2016.jpg",
    youtubeQuery: "仁徳天皇陵 百舌鳥古市古墳群 世界遺産",
    keywords: ["古墳", "大阪", "仁徳天皇", "古墳時代", "墳墓"]
  },
  {
    id: "amami",
    name: "奄美大島、徳之島、沖縄島北部及び西表島",
    nameEn: "Amami-Oshima Island, Tokunoshima Island, Northern Part of Okinawa Island, and Iriomote Island",
    prefecture: "鹿児島県・沖縄県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2021,
    criteria: ["x"],
    type: "自然遺産",
    region: "asia",
    relatedEra: "contemporary",
    difficulty: 2,
    examFrequency: "高",
    description: "日本の南西部に連なる島々。アマミノクロウサギ・ヤンバルクイナなど固有種の宝庫。",
    examTips: [
      "登録基準はxのみ（生物多様性）",
      "アマミノクロウサギ・ヤンバルクイナ・イリオモテヤマネコが有名",
      "2021年登録（縄文遺跡群と同年）",
      "鹿児島・沖縄の2県にまたがる",
      "一度「登録延期」勧告を受けた経緯あり"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Amami_Oshima_Island.jpg/800px-Amami_Oshima_Island.jpg",
    youtubeQuery: "奄美大島 西表島 イリオモテヤマネコ 世界遺産",
    keywords: ["固有種", "奄美", "西表島", "イリオモテヤマネコ", "生物多様性"]
  },
  {
    id: "jomon",
    name: "北海道・北東北の縄文遺跡群",
    nameEn: "Jomon Prehistoric Sites in Northern Japan",
    prefecture: "北海道・青森県・岩手県・秋田県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2021,
    criteria: ["iii"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "ancient",
    difficulty: 2,
    examFrequency: "高",
    description: "農耕を行わずに定住した縄文人の文化・精神性を示す17の遺跡群。",
    examTips: [
      "登録基準はiiiのみ",
      "「農耕なしで定住・複雑な社会を形成」した点が世界的に珍しい",
      "4道県・17遺跡で構成",
      "三内丸山遺跡（青森）が最大・最有名",
      "2021年登録（奄美・沖縄と同年）"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sannai-Maruyama_site07s3200.jpg/800px-Sannai-Maruyama_site07s3200.jpg",
    youtubeQuery: "三内丸山遺跡 縄文 世界遺産 北海道",
    keywords: ["縄文", "三内丸山", "青森", "北海道", "農耕なし"]
  },
  {
    id: "sado",
    name: "佐渡島の金山",
    nameEn: "Sado Island Gold Mines",
    prefecture: "新潟県",
    country: "日本", countryFlag: "🇯🇵",
    year: 2024,
    criteria: ["ii", "iv"],
    type: "文化遺産",
    region: "asia",
    relatedEra: "earlyModern",
    difficulty: 2,
    examFrequency: "高",
    description: "江戸幕府の財政を支えた17〜19世紀の金銀山。伝統的な手工業採掘技術が評価された。",
    examTips: [
      "2024年登録・日本で最新の世界遺産",
      "江戸時代の手工業採掘技術が評価",
      "相川金銀山・西三川砂金山などで構成",
      "登録基準はii・iv",
      "韓国が「強制労働」を理由に反対していたが登録実現"
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sado_gold_mine_2.jpg/800px-Sado_gold_mine_2.jpg",
    youtubeQuery: "佐渡島 金山 世界遺産 2024",
    keywords: ["金山", "江戸", "佐渡", "採掘", "2024年"]
  }
];

// ─── 世界の世界遺産データ（後半：アフリカ・中東・南北米・オセアニア） ─
const worldHeritageDataPart2 = [
  // ══ アフリカ ══
  { id:"pyramids", name:"メンフィスとその墓地遺跡", nameEn:"Memphis and its Necropolis",
    country:"エジプト", countryFlag:"🇪🇬", region:"africa", relatedEra:"ancient", year:1979,
    criteria:["i","iii","vi"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"ギザの三大ピラミッドとスフィンクス。クフ王・カフラー王・メンカウラー王の陵墓。",
    examTips:["ギザの三大ピラミッド・スフィンクスが代表","クフ王・カフラー王・メンカウラー王の陵墓","紀元前2600年頃建造","七不思議で唯一現存する遺産","登録基準i・iii・vi"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/800px-Kheops-Pyramid.jpg", youtubeQuery:"ギザ ピラミッド 世界遺産", keywords:["ピラミッド","エジプト","古代","スフィンクス","七不思議"] },
  { id:"abu_simbel", name:"ヌビアの遺跡群－アブ・シンベルからフィラエまで", nameEn:"Nubian Monuments from Abu Simbel to Philae",
    country:"エジプト", countryFlag:"🇪🇬", region:"africa", relatedEra:"ancient", year:1979,
    criteria:["i","iii","vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"アスワン・ハイ・ダム建設時に国際救済活動で移設されたラムセス2世の大神殿。",
    examTips:["ラムセス2世が建設した大神殿","アスワンダム建設時にUNESCOが主導して移設（1960〜70年代）","春分・秋分に太陽光が内部を照らす","世界遺産制度誕生のきっかけとなった事例","登録基準i・iii・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/The_two_temples_of_Abu_simbel%2Cpanoramic_view..JPG", youtubeQuery:"アブシンベル ラムセス2世 世界遺産", keywords:["アブシンベル","エジプト","ラムセス","移設","ヌビア"] },
  { id:"goree", name:"ゴレ島", nameEn:"Island of Gorée",
    country:"セネガル", countryFlag:"🇸🇳", region:"africa", relatedEra:"modern", year:1978,
    criteria:["vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"大西洋奴隷貿易の主要拠点。「奴隷の家」が残るアフリカ最大の奴隷取引島。",
    examTips:["大西洋の奴隷貿易の拠点","「奴隷の家」が残る","登録基準viのみ（負の遺産）","ダカール沖の島","アフリカからアメリカへの奴隷船の発着点"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Goree_Island_Senegal.jpg/800px-Goree_Island_Senegal.jpg", youtubeQuery:"ゴレ島 奴隷 セネガル 世界遺産", keywords:["ゴレ島","奴隷","セネガル","負の遺産","大西洋"] },
  { id:"timbuktu", name:"ティンブクトゥ", nameEn:"Timbuktu",
    country:"マリ", countryFlag:"🇲🇱", region:"africa", relatedEra:"medieval", year:1988,
    criteria:["ii","iv","v"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"サハラ交易の要衝として繁栄したイスラム都市。「世界の果て」と呼ばれた伝説の黄金都市。",
    examTips:["サハラ砂漠の交易路の中心都市","「世界の果て」「黄金都市」と呼ばれた伝説","3つのモスクが有名","2012年に武装勢力が遺跡を破壊（危機遺産登録）","登録基準ii・iv・v"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Djinguereber_Mosque%2C_Timbuktu%2C_Mali.jpg", youtubeQuery:"ティンブクトゥ マリ 砂漠 世界遺産", keywords:["ティンブクトゥ","マリ","砂漠","イスラム","交易"] },
  { id:"great_zimbabwe", name:"グレート・ジンバブエの遺跡", nameEn:"Great Zimbabwe National Monument",
    country:"ジンバブエ", countryFlag:"🇿🇼", region:"africa", relatedEra:"medieval", year:1986,
    criteria:["i","iii","vi"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"11〜15世紀のショナ人が建設した石造りの都城。ジンバブエの国名の由来となった遺跡。",
    examTips:["11〜15世紀のショナ人文明の都城","「ジンバブエ」という国名の由来","石を積み重ねたモルタルなしの石垣建築","アフリカ最大の石造建築遺跡","登録基準i・iii・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Great-zim-aerial-looking-West.JPG", youtubeQuery:"グレートジンバブエ 石造 世界遺産", keywords:["ジンバブエ","石造","ショナ","アフリカ","城塞"] },
  { id:"victoria_falls", name:"モシ・オ・トゥニャ/ヴィクトリアの滝", nameEn:"Mosi-oa-Tunya / Victoria Falls",
    country:"ザンビア・ジンバブエ", countryFlag:"🇿🇲", region:"africa", relatedEra:"contemporary", year:1989,
    criteria:["vii","viii"], type:"自然遺産", difficulty:2, examFrequency:"高",
    description:"幅1,708m・最大落差108mのアフリカ最大の滝。リヴィングストンが命名。",
    examTips:["幅1,708m・最大落差108m","「モシ・オ・トゥニャ」はコロ語で「雷鳴轟く水煙」","リヴィングストンが「ヴィクトリアの滝」と命名","2国にまたがる越境遺産","登録基準vii・viii"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Victoria_Falls_-_2012-05-01_-_7.jpg/800px-Victoria_Falls_-_2012-05-01_-_7.jpg", youtubeQuery:"ヴィクトリア滝 アフリカ 世界遺産", keywords:["ヴィクトリア滝","アフリカ","滝","ザンビア","ジンバブエ"] },
  { id:"serengeti", name:"セレンゲティ国立公園", nameEn:"Serengeti National Park",
    country:"タンザニア", countryFlag:"🇹🇿", region:"africa", relatedEra:"contemporary", year:1981,
    criteria:["vii","x"], type:"自然遺産", difficulty:1, examFrequency:"高",
    description:"年間150万頭以上のヌーが大移動するアフリカ最大の野生生物保護区。",
    examTips:["年間150万頭以上のヌーの大移動が有名","ライオン・ヒョウ・チーター・ゾウ・サイ（BIG5）","登録基準vii・x","ンゴロンゴロ保全地域と隣接","タンザニア北部に位置"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Wildebeest_Migration_in_Serengeti_National_Park%2C_Tanzania.jpg", youtubeQuery:"セレンゲティ ヌーの大移動 タンザニア 世界遺産", keywords:["セレンゲティ","タンザニア","ヌー","大移動","サバンナ"] },
  { id:"ngorongoro", name:"ンゴロンゴロ保全地域", nameEn:"Ngorongoro Conservation Area",
    country:"タンザニア", countryFlag:"🇹🇿", region:"africa", relatedEra:"ancient", year:1979,
    criteria:["iv","vii","viii","ix","x"], type:"複合遺産", difficulty:3, examFrequency:"中",
    description:"世界最大のカルデラ（直径20km）に野生動物が集まる複合遺産。オルドバイ渓谷の人類化石も。",
    examTips:["世界最大の完全なカルデラ（直径20km）","オルドバイ渓谷で最古級の人類化石を発見","複合遺産（文化＋自然）","セレンゲティと隣接","登録基準iv・vii・viii・ix・x（5つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Ngoronogro_view.JPG", youtubeQuery:"ンゴロンゴロ カルデラ タンザニア 世界遺産", keywords:["ンゴロンゴロ","カルデラ","タンザニア","人類化石","野生動物"] },
  { id:"lalibela", name:"ラリベラの岩窟教会群", nameEn:"Rock-Hewn Churches, Lalibela",
    country:"エチオピア", countryFlag:"🇪🇹", region:"africa", relatedEra:"medieval", year:1978,
    criteria:["i","ii","iii"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"12〜13世紀にザグウェ朝が一枚岩から掘り出した11のキリスト教岩窟教会群。",
    examTips:["12〜13世紀ザグウェ朝の一枚岩掘削教会","11の岩窟教会が完存","「アフリカのエルサレム」の別名","今も現役の礼拝堂として使われる","登録基準i・ii・iii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Bet_Medhane_Alem_church_Lalibela.jpg", youtubeQuery:"ラリベラ 岩窟教会 エチオピア 世界遺産", keywords:["ラリベラ","エチオピア","岩窟教会","キリスト教","中世"] },
  { id:"robben_island", name:"ロベン島", nameEn:"Robben Island",
    country:"南アフリカ", countryFlag:"🇿🇦", region:"africa", relatedEra:"contemporary", year:1999,
    criteria:["iii","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"ネルソン・マンデラが27年間拘禁された政治犯収容所。アパルトヘイトの証言。",
    examTips:["ネルソン・マンデラが27年間拘禁（1964〜1990年）","アパルトヘイト政策の象徴的場所","「負の遺産」の代表例","現在は博物館","登録基準iii・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Nelson_Mandela%27s_prison_cell%2C_Robben_Island%2C_South_Africa.jpg", youtubeQuery:"ロベン島 マンデラ アパルトヘイト 世界遺産", keywords:["ロベン島","南アフリカ","マンデラ","アパルトヘイト","島"] },
  { id:"kilimanjaro", name:"キリマンジャロ国立公園", nameEn:"Kilimanjaro National Park",
    country:"タンザニア", countryFlag:"🇹🇿", region:"africa", relatedEra:"contemporary", year:1987,
    criteria:["vii"], type:"自然遺産", difficulty:2, examFrequency:"中",
    description:"赤道直下にあるアフリカ最高峰（5,895m）。万年雪が温暖化で急速に減少中。",
    examTips:["アフリカ最高峰（5,895m）","赤道直下にあるのに山頂は万年雪","温暖化で雪が急速に縮小中","タンザニアの象徴","登録基準viiのみ"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Kilimanjaro.jpg", youtubeQuery:"キリマンジャロ アフリカ最高峰 世界遺産", keywords:["キリマンジャロ","タンザニア","アフリカ最高峰","火山","雪"] },
  { id:"okavango", name:"オカバンゴ・デルタ", nameEn:"Okavango Delta",
    country:"ボツワナ", countryFlag:"🇧🇼", region:"africa", relatedEra:"contemporary", year:2014,
    criteria:["vii","ix","x"], type:"自然遺産", difficulty:3, examFrequency:"低",
    description:"海に流れ込まない内陸デルタ。乾季にアフリカ最大の野生動物の集積地となる。",
    examTips:["「海に流れ込まない」内陸デルタ","乾季に動物が集結する特異な生態系","ゾウの最大個体群が生息","2014年登録","登録基準vii・ix・x"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Vista_a%C3%A9rea_del_delta_del_Okavango%2C_Botsuana%2C_2018-08-01%2C_DD_25.jpg", youtubeQuery:"オカバンゴ デルタ ボツワナ 世界遺産", keywords:["オカバンゴ","ボツワナ","デルタ","野生動物","象"] },
  { id:"djenne", name:"ジェンネの旧市街", nameEn:"Old Towns of Djenné",
    country:"マリ", countryFlag:"🇲🇱", region:"africa", relatedEra:"medieval", year:1988,
    criteria:["iii","iv"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"世界最大の泥造建築（ムッドブリック）の都市。毎年修復される大モスクが象徴的。",
    examTips:["世界最大の泥造建築の大モスク","毎年雨季後に住民総出で補修する伝統","危機遺産リスト入り（2016年〜）","登録基準iii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Great_Mosque_of_Djenn%C3%A9_1.jpg", youtubeQuery:"ジェンネ 泥モスク マリ 世界遺産", keywords:["ジェンネ","マリ","泥建築","モスク","イスラム"] },
  // ══ 中東 ══
  { id:"gobekli_tepe", name:"ギョベクリ・テペ", nameEn:"Göbekli Tepe",
    country:"トルコ", countryFlag:"🇹🇷", region:"middleEast", relatedEra:"ancient", year:2018,
    criteria:["i","ii","iv"], type:"文化遺産", difficulty:3, examFrequency:"高",
    description:"紀元前9600年頃のT字型柱が並ぶ世界最古の宗教的建造物。定住以前の狩猟採集社会が建設。",
    examTips:["紀元前9600年頃＝世界最古の宗教的建造物","農耕・定住以前の狩猟採集民が建設","T字型の石柱が動物のレリーフで覆われる","「宗教が都市を生んだ」証拠として注目","登録基準i・ii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6bekli_Tepe_site_%281%29.JPG", youtubeQuery:"ギョベクリテペ 世界最古 トルコ 世界遺産", keywords:["ギョベクリテペ","トルコ","世界最古","神殿","石柱"] },
  { id:"ephesus", name:"エフェソス", nameEn:"Ephesus",
    country:"トルコ", countryFlag:"🇹🇷", region:"middleEast", relatedEra:"classical", year:2015,
    criteria:["iii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"古代ギリシャ・ローマ時代の大都市遺跡。ケルスス図書館と大劇場が代表的建造物。",
    examTips:["古代世界第3位の都市（人口25万人）","アルテミス神殿（七不思議）の所在地","ケルスス図書館・大劇場が有名","聖母マリアの晩年の住まいとされる地","登録基準iii・iv・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Library_of_Celsus.JPG", youtubeQuery:"エフェソス トルコ ローマ 世界遺産", keywords:["エフェソス","トルコ","ローマ","ギリシャ","図書館"] },
  { id:"pamukkale", name:"ヒエラポリス＝パムッカレ", nameEn:"Hierapolis-Pamukkale",
    country:"トルコ", countryFlag:"🇹🇷", region:"middleEast", relatedEra:"classical", year:1988,
    criteria:["iii","iv","vii"], type:"複合遺産", difficulty:2, examFrequency:"中",
    description:"石灰棚の白い段丘と古代ローマの温泉保養都市ヒエラポリスが融合する複合遺産。",
    examTips:["「綿の城」の意（白い石灰棚）","温暖な天然温泉と石灰棚が生み出す絶景","ローマ時代の温泉保養地","複合遺産（文化＋自然）","登録基準iii・iv・vii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Pamukkale_Hierapolis_Travertine_pools.JPG", youtubeQuery:"パムッカレ 石灰棚 トルコ 世界遺産", keywords:["パムッカレ","トルコ","石灰棚","温泉","ローマ"] },
  { id:"troy", name:"トロイの考古遺跡", nameEn:"Archaeological Site of Troy",
    country:"トルコ", countryFlag:"🇹🇷", region:"middleEast", relatedEra:"ancient", year:1998,
    criteria:["ii","iii","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"ホメロスの「イリアス」に登場するトロイア戦争の舞台。19世紀シュリーマンが発掘。",
    examTips:["ホメロス「イリアス」のトロイア戦争の舞台","1871年シュリーマンが発掘","9層の都市遺跡が重なる","「トロイの木馬」伝説の地","登録基準ii・iii・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Hisarl%C4%B1k_%28Ancient_City_of_Troy%29.jpg", youtubeQuery:"トロイ遺跡 トルコ イリアス 世界遺産", keywords:["トロイ","トルコ","ホメロス","シュリーマン","戦争"] },
  { id:"isfahan", name:"イスファハンのイマーム広場", nameEn:"Meidan Emam, Esfahan",
    country:"イラン", countryFlag:"🇮🇷", region:"middleEast", relatedEra:"earlyModern", year:1979,
    criteria:["i","v","vi"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"「イスファハンは世界の半分」と謳われたサファヴィー朝の都。巨大なモスクが広場を囲む。",
    examTips:["「イスファハンは世界の半分」のことわざ","サファヴィー朝（17世紀）の首都","イマーム・モスクが広場を囲む","ペルシャ建築の最高傑作","登録基準i・v・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Naghsh-e_Jahan_Square_Isfahan.JPG", youtubeQuery:"イスファハン サファヴィー朝 イラン 世界遺産", keywords:["イスファハン","イラン","サファヴィー","モスク","ペルシャ"] },
  { id:"babylon", name:"バビロン", nameEn:"Babylon",
    country:"イラク", countryFlag:"🇮🇶", region:"middleEast", relatedEra:"ancient", year:2019,
    criteria:["iii","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"「バビロンの空中庭園（七不思議）」で名高い古代メソポタミアの都市遺跡。ハンムラビ王の都。",
    examTips:["「バビロンの空中庭園」（七不思議だが現存せず）","ハンムラビ王（法典）の都","ネブカドネザル2世が整備","2019年登録（イラク初）","登録基準iii・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Ishtar_gate_Pergamon_Museum.JPG", youtubeQuery:"バビロン メソポタミア イラク 世界遺産", keywords:["バビロン","イラク","メソポタミア","ハンムラビ","古代"] },
  { id:"damascus", name:"ダマスクスの旧市街", nameEn:"Ancient City of Damascus",
    country:"シリア", countryFlag:"🇸🇾", region:"middleEast", relatedEra:"ancient", year:1979,
    criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"世界最古の継続居住都市のひとつ。ウマイヤ・モスクと「まっすぐな道」が残る。",
    examTips:["世界最古の継続居住都市のひとつ","ウマイヤ・モスク（705年建造）が代表","「まっすぐな道」（聖書にも登場）","2013年からシリア内戦で危機遺産登録","登録基準i〜vi（5つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Umayyad_Mosque%2C_Damascus%2C_Syria.JPG", youtubeQuery:"ダマスカス 旧市街 シリア 世界遺産", keywords:["ダマスカス","シリア","ウマイヤ","最古","モスク"] },
  { id:"hegra", name:"ヘグラ（マダイン・サーレハ）", nameEn:"Hegra Archaeological Site",
    country:"サウジアラビア", countryFlag:"🇸🇦", region:"middleEast", relatedEra:"classical", year:2008,
    criteria:["ii","iii"], type:"文化遺産", difficulty:3, examFrequency:"低",
    description:"ペトラと同じナバタイ人の岩窟墳墓群。サウジアラビア初の世界遺産。",
    examTips:["サウジアラビア初の世界遺産（2008年）","ペトラと同じナバタイ文明の岩窟墳墓群","111基の記念碑的墳墓が残る","登録基準ii・iii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Qasr_al_Farid.JPG", youtubeQuery:"ヘグラ サウジアラビア ナバタイ 世界遺産", keywords:["ヘグラ","サウジアラビア","ナバタイ","岩窟","砂漠"] },
  // ══ 北米 ══
  { id:"grand_canyon", name:"グランド・キャニオン国立公園", nameEn:"Grand Canyon National Park",
    country:"アメリカ", countryFlag:"🇺🇸", region:"northAmerica", relatedEra:"ancient", year:1979,
    criteria:["vii","viii","ix","x"], type:"自然遺産", difficulty:1, examFrequency:"高",
    description:"コロラド川が数百万年かけて侵食した深さ1,600mの大峡谷。地球の地質史を読む「書物」。",
    examTips:["コロラド川が数百万年かけて侵食","深さ約1,600m・幅最大29km","地球の地質史を読む「書物」","登録基準vii・viii・ix・x（4つ）","1919年に国立公園指定"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg/800px-Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg", youtubeQuery:"グランドキャニオン アメリカ 世界遺産", keywords:["グランドキャニオン","アメリカ","峡谷","コロラド川","地質"] },
  { id:"yellowstone", name:"イエローストーン国立公園", nameEn:"Yellowstone National Park",
    country:"アメリカ", countryFlag:"🇺🇸", region:"northAmerica", relatedEra:"contemporary", year:1978,
    criteria:["vii","viii","ix","x"], type:"自然遺産", difficulty:1, examFrequency:"高",
    description:"世界初の国立公園（1872年）。世界最大の間欠泉地帯と超巨大カルデラで知られる。",
    examTips:["世界初の国立公園（1872年指定）","世界最大の間欠泉地帯（オールドフェイスフル）","スーパーボルケーノ（巨大カルデラ）の上","1978年の最初の自然遺産登録12件のひとつ","登録基準vii・viii・ix・x"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Geyser_in_Yellowstone.jpg/800px-Geyser_in_Yellowstone.jpg", youtubeQuery:"イエローストーン 間欠泉 世界遺産", keywords:["イエローストーン","アメリカ","国立公園","間欠泉","火山"] },
  { id:"chichen_itza", name:"古代マヤ都市チチェン・イツァ", nameEn:"Pre-Hispanic City of Chichen-Itza",
    country:"メキシコ", countryFlag:"🇲🇽", region:"northAmerica", relatedEra:"medieval", year:1988,
    criteria:["i","ii","iii"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"マヤ・トルテカ文明の都市。エル・カスティージョ（ピラミッド）は春分・秋分に蛇の影が現れる。",
    examTips:["マヤ・トルテカ文明の複合都市","エル・カスティージョ（ピラミッド）が有名","春分・秋分の日の出で蛇の影が降りてくる","「新世界の七不思議」に選ばれた","登録基準i・ii・iii"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/800px-Chichen_Itza_3.jpg", youtubeQuery:"チチェンイツァ マヤ ピラミッド 世界遺産", keywords:["チチェンイツァ","メキシコ","マヤ","ピラミッド","天文"] },
  { id:"teotihuacan", name:"古代メキシコ都市テオティワカン", nameEn:"Pre-Hispanic City of Teotihuacan",
    country:"メキシコ", countryFlag:"🇲🇽", region:"northAmerica", relatedEra:"classical", year:1987,
    criteria:["i","ii","iii","iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"「神々の都市」と呼ばれる紀元前2世紀〜7世紀の計画都市。太陽のピラミッド・月のピラミッドが壮大。",
    examTips:["「神々の都市」の意","太陽のピラミッドと月のピラミッドが有名","「死者の道」中心の計画都市","建設者・崩壊理由ともに不明","登録基準i〜vi（5つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Pir%C3%A1mide_del_Sol%2C_Teotihuac%C3%A1n%2C_M%C3%A9xico.JPG", youtubeQuery:"テオティワカン ピラミッド メキシコ 世界遺産", keywords:["テオティワカン","メキシコ","ピラミッド","謎","古代都市"] },
  { id:"mesa_verde", name:"メサ・ヴェルデ国立公園", nameEn:"Mesa Verde National Park",
    country:"アメリカ", countryFlag:"🇺🇸", region:"northAmerica", relatedEra:"ancient", year:1978,
    criteria:["iii"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"6〜13世紀のアナサジ族（古プエブロ人）が崖の凹みに築いた崖上集落遺跡。",
    examTips:["6〜13世紀アナサジ族の崖上集落","崖の凹みを利用した独特の建築様式","1978年の最初の文化遺産登録のひとつ","登録基準iiiのみ"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Cliff_Palace_Mesa_Verde_National_Park_Colorado_USA.JPG", youtubeQuery:"メサヴェルデ アナサジ族 世界遺産", keywords:["メサヴェルデ","アメリカ","先住民","崖住居","プエブロ"] },
  { id:"independence_hall", name:"独立記念館", nameEn:"Independence Hall",
    country:"アメリカ", countryFlag:"🇺🇸", region:"northAmerica", relatedEra:"modern", year:1979,
    criteria:["vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"1776年の独立宣言と1787年の合衆国憲法が採択されたアメリカ民主主義の発祥地。",
    examTips:["独立宣言（1776年）と合衆国憲法（1787年）採択の地","フィラデルフィアに所在","「自由の鐘」が有名","登録基準viのみ"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Independence_Hall_Philly.JPG", youtubeQuery:"独立記念館 フィラデルフィア アメリカ 世界遺産", keywords:["独立記念館","アメリカ","独立宣言","民主主義","憲法"] },
  { id:"old_havana", name:"ハバナの旧市街とその要塞群", nameEn:"Old Havana and its Fortifications",
    country:"キューバ", countryFlag:"🇨🇺", region:"northAmerica", relatedEra:"earlyModern", year:1982,
    criteria:["iv","v"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"スペイン植民地時代の要塞都市。バロック・新古典主義建築と植民地文化が融合する。",
    examTips:["スペイン植民地時代の要塞都市","バロック建築と新古典主義が混在","「カリブ海の真珠」の別名","チェ・ゲバラ・フィデル・カストロゆかりの地","登録基準iv・v"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Havana_Old_square.JPG", youtubeQuery:"ハバナ旧市街 キューバ 世界遺産", keywords:["ハバナ","キューバ","スペイン","植民地","カリブ"] },
  { id:"palenque", name:"古代マヤ都市パレンケと国立公園", nameEn:"Pre-Hispanic City and National Park of Palenque",
    country:"メキシコ", countryFlag:"🇲🇽", region:"northAmerica", relatedEra:"classical", year:1987,
    criteria:["i","ii","iii","iv"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"密林に埋もれていたマヤ古典期（4〜9世紀）の都市。パカル王の石棺が大きな発見。",
    examTips:["マヤ古典期の都市（4〜9世紀）","1952年にパカル王の石棺・翡翠マスクが発見","「碑文の神殿」が代表","登録基準i・ii・iii・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Templo_del_Sol%2C_Palenque.JPG", youtubeQuery:"パレンケ マヤ 密林 世界遺産", keywords:["パレンケ","メキシコ","マヤ","密林","石棺"] },
  // ══ 南米 ══
  { id:"machu_picchu", name:"マチュ・ピチュの歴史的保護区", nameEn:"Historic Sanctuary of Machu Picchu",
    country:"ペルー", countryFlag:"🇵🇪", region:"southAmerica", relatedEra:"medieval", year:1983,
    criteria:["i","iii","vii","ix"], type:"複合遺産", difficulty:1, examFrequency:"高",
    description:"インカ帝国15世紀の山岳都市。「空中都市」「失われたインカの都」として世界的に有名。",
    examTips:["インカ帝国15世紀の山岳都市","複合遺産（文化＋自然）","「空中都市」「失われたインカの都」","1911年ハイラム・ビンガムが「発見」","登録基準i・iii・vii・ix（4つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Machu_Picchu_Peru.JPG", youtubeQuery:"マチュピチュ インカ ペルー 世界遺産", keywords:["マチュピチュ","ペルー","インカ","空中都市","複合遺産"] },
  { id:"galapagos", name:"ガラパゴス諸島", nameEn:"Galapagos Islands",
    country:"エクアドル", countryFlag:"🇪🇨", region:"southAmerica", relatedEra:"contemporary", year:1978,
    criteria:["vii","viii","ix","x"], type:"自然遺産", difficulty:1, examFrequency:"高",
    description:"ダーウィンの進化論のヒントになった固有種の宝庫。ゾウガメ・マリンイグアナが生息。",
    examTips:["ダーウィンの進化論のヒントになった島","固有種の宝庫（ゾウガメ・マリンイグアナ等）","1978年の最初の自然遺産登録12件のひとつ","一時危機遺産リスト入り（2007〜2010年）","登録基準vii・viii・ix・x（4つ）"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Galapagos_islands.jpg/800px-Galapagos_islands.jpg", youtubeQuery:"ガラパゴス 進化論 ダーウィン 世界遺産", keywords:["ガラパゴス","エクアドル","進化論","ダーウィン","固有種"] },
  { id:"iguazu", name:"イグアス国立公園", nameEn:"Iguazu National Park",
    country:"アルゼンチン・ブラジル", countryFlag:"🇦🇷", region:"southAmerica", relatedEra:"contemporary", year:1984,
    criteria:["vii","x"], type:"自然遺産", difficulty:2, examFrequency:"高",
    description:"幅2,700mにわたる275本の滝から成る世界最大の滝群。「悪魔の喉笛」が圧巻。",
    examTips:["世界最大の滝群（幅2,700m・275の滝）","アルゼンチンとブラジルの国境にまたがる","「悪魔の喉笛」が最大の滝","「哀れなナイアガラ」と呼ばれた逸話","登録基準vii・x"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Iguazu_Falls_%286038215352%29.jpg", youtubeQuery:"イグアスの滝 アルゼンチン ブラジル 世界遺産", keywords:["イグアス","アルゼンチン","ブラジル","滝","悪魔の喉笛"] },
  { id:"easter_island", name:"ラパ・ヌイ国立公園", nameEn:"Rapa Nui National Park",
    country:"チリ", countryFlag:"🇨🇱", region:"southAmerica", relatedEra:"medieval", year:1995,
    criteria:["i","iii","v"], type:"文化遺産", difficulty:2, examFrequency:"高",
    description:"南太平洋の孤島に900体以上のモアイ（巨石像）が点在するラパ・ヌイ文明の遺産。",
    examTips:["「イースター島」の一般名（正式名：ラパ・ヌイ）","900体以上のモアイが各地に点在","チリ領の南太平洋の孤島","登録基準i・iii・v"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Ahu_Tongariki_-_Rapa_Nui_%28Easter_Island%29.JPG", youtubeQuery:"イースター島 モアイ ラパヌイ 世界遺産", keywords:["イースター島","チリ","モアイ","太平洋","謎"] },
  { id:"cartagena", name:"カルタヘナの港・要塞・建造物群", nameEn:"Port, Fortresses and Group of Monuments, Cartagena",
    country:"コロンビア", countryFlag:"🇨🇴", region:"southAmerica", relatedEra:"earlyModern", year:1984,
    criteria:["iv","vi"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"16世紀スペインが築いた南米最大の植民地要塞都市。「カリブ海の宝石」と呼ばれる。",
    examTips:["16世紀スペインの植民地要塞都市","南米最大規模の植民地城壁","「カリブ海の宝石」の別名","登録基準iv・vi"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Cartagena_de_Indias.JPG", youtubeQuery:"カルタヘナ コロンビア 植民地 世界遺産", keywords:["カルタヘナ","コロンビア","スペイン","植民地","カリブ"] },
  { id:"brasilia", name:"ブラジリア", nameEn:"Brasília",
    country:"ブラジル", countryFlag:"🇧🇷", region:"southAmerica", relatedEra:"contemporary", year:1987,
    criteria:["i","iv"], type:"文化遺産", difficulty:2, examFrequency:"中",
    description:"1956〜60年に建設されたブラジルの計画首都。ルシオ・コスタ設計の飛行機型都市計画。",
    examTips:["1956〜1960年に建設された計画都市","建設から5年で世界遺産登録（当時最短）","ルシオ・コスタ（都市計画）・ニーマイヤー（建築）","「飛行機の形」の都市","登録基準i・iv"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Eixo_monumental_de_Bras%C3%ADlia_%2C_Esplanada_dos_Minist%C3%A9rios_e_Congresso_Nacional_-_panoramio.jpg", youtubeQuery:"ブラジリア 計画都市 世界遺産", keywords:["ブラジリア","ブラジル","計画都市","ニーマイヤー","近代"] },
  { id:"chan_chan", name:"チャン・チャン遺跡地帯", nameEn:"Chan Chan Archaeological Zone",
    country:"ペルー", countryFlag:"🇵🇪", region:"southAmerica", relatedEra:"medieval", year:1986,
    criteria:["i","iii"], type:"文化遺産", difficulty:3, examFrequency:"中",
    description:"チムー王国（900〜1470年）が建設した世界最大のアドベ（日干しレンガ）都市。",
    examTips:["チムー王国（インカ以前）の首都","世界最大のアドベ（日干しレンガ）都市","1986年から危機遺産リスト入り（浸食）","登録基準i・iii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Vast_Abobe_Ruins_at_Chan_Chan.JPG", youtubeQuery:"チャンチャン チムー ペルー 世界遺産", keywords:["チャンチャン","ペルー","チムー","日干しレンガ","インカ以前"] },
  // ══ オセアニア ══
  { id:"great_barrier_reef", name:"グレート・バリア・リーフ", nameEn:"Great Barrier Reef",
    country:"オーストラリア", countryFlag:"🇦🇺", region:"oceania", relatedEra:"contemporary", year:1981,
    criteria:["vii","viii","ix","x"], type:"自然遺産", difficulty:1, examFrequency:"高",
    description:"世界最大のサンゴ礁（約2,300km）。宇宙から見えるほど巨大な生物構造物。",
    examTips:["世界最大のサンゴ礁（約2,300km）","宇宙から見える唯一の生き物がつくった構造","温暖化による白化現象が深刻","「危機遺産リスト」入り議論（毎年）","登録基準vii・viii・ix・x"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Great_Barrier_Reef_Marine_Park.jpg/800px-Great_Barrier_Reef_Marine_Park.jpg", youtubeQuery:"グレートバリアリーフ サンゴ礁 オーストラリア 世界遺産", keywords:["グレートバリアリーフ","オーストラリア","サンゴ礁","温暖化","白化"] },
  { id:"sydney_opera", name:"シドニー・オペラハウス", nameEn:"Sydney Opera House",
    country:"オーストラリア", countryFlag:"🇦🇺", region:"oceania", relatedEra:"contemporary", year:2007,
    criteria:["i"], type:"文化遺産", difficulty:1, examFrequency:"高",
    description:"貝殻を重ねたような独創的な屋根で有名。ヨーン・ウツソン（デンマーク）設計の近代建築の傑作。",
    examTips:["登録基準iのみ（芸術的傑作）","ヨーン・ウツソン（デンマーク人）設計","1973年完成・設計は1956年コンペ優勝","20世紀建築の傑作","設計者は2003年プリツカー賞受賞"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Sydney_Opera_House.JPG", youtubeQuery:"シドニーオペラハウス 世界遺産", keywords:["シドニー","オペラハウス","オーストラリア","近代建築","デンマーク"] },
  { id:"uluru", name:"ウルル、カタ・ジュタ国立公園", nameEn:"Uluṟu-Kata Tjuṯa National Park",
    country:"オーストラリア", countryFlag:"🇦🇺", region:"oceania", relatedEra:"ancient", year:1987,
    criteria:["v","vi","vii","viii"], type:"複合遺産", difficulty:2, examFrequency:"高",
    description:"アボリジニの聖地エアーズロック。2019年に登山が正式禁止された複合遺産。",
    examTips:["アボリジニのアナング族の聖地","「エアーズロック」の旧称","複合遺産（文化＋自然）","2019年に一般観光客の登頂禁止","登録基準v・vi・vii・viii"],
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Uluru_morning.jpg/800px-Uluru_morning.jpg", youtubeQuery:"ウルル エアーズロック オーストラリア 世界遺産", keywords:["ウルル","エアーズロック","オーストラリア","アボリジニ","複合遺産"] },
  { id:"tongariro", name:"トンガリロ国立公園", nameEn:"Tongariro National Park",
    country:"ニュージーランド", countryFlag:"🇳🇿", region:"oceania", relatedEra:"ancient", year:1990,
    criteria:["vi","vii","viii"], type:"複合遺産", difficulty:3, examFrequency:"中",
    description:"マオリ族の聖なる火山群。映画「指輪物語」の「運命の山」ロケ地でも有名。",
    examTips:["マオリ族の聖地（文化基準viで複合遺産）","映画「指輪物語」の「運命の山（モルドール）」","3つの活火山が連なる","複合遺産（文化＋自然）","登録基準vi・vii・viii"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Mounds_Walk%2C_Tongariro_National_Park%2C_New_Zealand_%287%29.JPG", youtubeQuery:"トンガリロ 火山 ニュージーランド 世界遺産", keywords:["トンガリロ","ニュージーランド","マオリ","火山","指輪物語"] },
  { id:"kakadu", name:"カカドゥ国立公園", nameEn:"Kakadu National Park",
    country:"オーストラリア", countryFlag:"🇦🇺", region:"oceania", relatedEra:"ancient", year:1981,
    criteria:["i","vi","vii","ix","x"], type:"複合遺産", difficulty:3, examFrequency:"中",
    description:"5万年以上のアボリジニの岩絵が残るオーストラリア最大の国立公園。",
    examTips:["5万年以上のアボリジニの岩絵が残る","オーストラリア最大の国立公園","乾季と雨季で景観が激変","複合遺産（文化＋自然）","登録基準i・vi・vii・ix・x（5つ）"],
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Aboriginal_rock_art_-Ubirr_Art_Site%2C_Kakadu_National_Park%2C_Northern_Territory%2C_Australia-9June2012_%281%29.jpg", youtubeQuery:"カカドゥ アボリジニ 岩絵 オーストラリア 世界遺産", keywords:["カカドゥ","オーストラリア","アボリジニ","岩絵","湿地"] }
];

// ─── 統合遺産データ ───────────────────────────────────────
const worldHeritageData = [...worldHeritageDataPart1, ...worldHeritageDataPart2];
const allHeritageData = [...japanHeritageData, ...worldHeritageData];

// ─── 登録基準データ（i〜x） ────────────────────────────────
const criteriaData = [
  { id:"i", type:"文化", label:"人類の創造的傑作", color:"#FF8FAB",
    description:"人間の創造的才能の傑作を表すもの。建築・芸術・都市計画・景観設計における卓越した業績。",
    heritages:["タージ・マハル","シドニー・オペラハウス","姫路城","ヴェルサイユ宮殿","アクロポリス"],
    comparePair:{a:"タージ・マハル", b:"シドニー・オペラハウス"},
    examTips:["「芸術的傑作」を示す基準","シドニー・オペラハウスはiのみ（単基準は希少）","姫路城がiを持つことは出題頻度高い"] },
  { id:"ii", type:"文化", label:"文化・文明間の交流", color:"#A8D8EA",
    description:"ある期間または文化圏において、人類の価値観の重要な交流を示すもの。",
    heritages:["古都奈良","万里の長城","アンコール遺跡","タージ・マハル"],
    comparePair:{a:"古都奈良（日中朝の交流）", b:"万里の長城（中国文化の伝播）"},
    examTips:["文化の「交流」・「影響」がキーワード","奈良は基準iiで中国・朝鮮との交流を示す"] },
  { id:"iii", type:"文化", label:"文明・文化の証拠", color:"#B5EAD7",
    description:"現存するまたは消滅した文化的伝統や文明の証拠。",
    heritages:["アンコール遺跡","富士山","縄文遺跡群","マチュ・ピチュ","ポンペイ"],
    comparePair:{a:"マチュ・ピチュ（インカ文明）", b:"アンコール・ワット（クメール文明）"},
    examTips:["消滅した文明の「証拠」がキーワード","富士山はiiiとviで文化遺産として登録"] },
  { id:"iv", type:"文化", label:"建築・技術の傑作", color:"#FFD166",
    description:"人類の歴史の重要な段階を示す建造物・建築・技術・景観の優れた例。最も多くの遺産が持つ基準。",
    heritages:["姫路城","ケルン大聖堂","ヴェルサイユ宮殿","万里の長城","法隆寺"],
    comparePair:{a:"姫路城", b:"ヴェルサイユ宮殿"},
    examTips:["最も多くの遺産が持つ基準","「建造物の傑作」がキーワード","姫路城・ケルン大聖堂など城郭・聖堂に多い"] },
  { id:"v", type:"文化", label:"土地利用・人と環境の相互関係", color:"#C9B1FF",
    description:"傷つきやすい状態にある文化を代表する伝統的居住形態または土地・海洋利用の顕著な例。",
    heritages:["白川郷・五箇山","石見銀山","アマルフィ海岸"],
    comparePair:{a:"白川郷（豪雪への適応）", b:"石見銀山（鉱山と周辺景観）"},
    examTips:["「人と環境の関係」がキーワード","白川郷は合掌造りという「土地への適応」でv登録","「文化的景観」と深く関連する基準"] },
  { id:"vi", type:"文化", label:"信仰・芸術・文学との関連", color:"#FF8FAB",
    description:"顕著な普遍的価値を持つ出来事・伝統・信仰・芸術・文学と直接または実質的関連を持つもの。単独登録は例外的。",
    heritages:["広島平和記念碑","アウシュビッツ","富士山","厳島神社","ゴレ島"],
    comparePair:{a:"広島（平和の象徴）", b:"アウシュビッツ（戦争の証言）"},
    examTips:["「信仰・芸術・文学と関連」がキーワード","単独での登録は例外的（広島・ゴレ島など）","「負の遺産」はほぼ基準vi"] },
  { id:"vii", type:"自然", label:"地球の歴史・地形の傑作", color:"#B5EAD7",
    description:"ひときわ優れた自然美および美的要素を持つ最高の自然的現象または地域。",
    heritages:["屋久島","ハロン湾","グランドキャニオン","イエローストーン","ヴィクトリアの滝"],
    comparePair:{a:"ハロン湾（海の絶景）", b:"グランドキャニオン（陸の絶景）"},
    examTips:["「自然美・絶景」がキーワード","屋久島はviiとix","ハロン湾はviiとviii"] },
  { id:"viii", type:"自然", label:"地質・地形の形成過程", color:"#A8D8EA",
    description:"地球の歴史の主要な段階を示す顕著な例（生命の記録・地形形成の顕著な地質プロセスなど）。",
    heritages:["グレートバリアリーフ","グランドキャニオン","ガラパゴス","イエローストーン"],
    comparePair:{a:"グレートバリアリーフ（海洋地質）", b:"グランドキャニオン（侵食地形）"},
    examTips:["「地質プロセス・地形の形成」がキーワード","ガラパゴスはvii・viii・ix・x（4基準）"] },
  { id:"ix", type:"自然", label:"生態系・生物の進化", color:"#B5EAD7",
    description:"陸上・淡水・沿岸・海洋生態系の進化・発展において進行中の重要な生態学的・生物学的プロセスを示す顕著な例。",
    heritages:["白神山地","知床","ガラパゴス","屋久島","グレートバリアリーフ"],
    comparePair:{a:"白神山地（ブナ原生林の生態系）", b:"ガラパゴス（進化の現場）"},
    examTips:["「生態系・進化のプロセス」がキーワード","白神山地はixのみで登録（日本の自然遺産で最少）"] },
  { id:"x", type:"自然", label:"生物多様性・絶滅危惧種", color:"#FFD166",
    description:"生物多様性の保全のための最も重要な自然生息地（絶滅危惧種の生息地を含む）。",
    heritages:["知床","小笠原諸島","奄美大島","ガラパゴス","グレートバリアリーフ"],
    comparePair:{a:"知床（流氷の生態系）", b:"小笠原（海洋島の固有種）"},
    examTips:["「生物多様性・希少種の生息地」がキーワード","奄美・沖縄はxのみ","知床はix・x"] }
];

// ─── 建築様式データ（8種） ────────────────────────────────
const architectureStyles = [
  { id:"romanesque", name:"ロマネスク様式", era:"11〜12世紀",
    features:["半円アーチ","厚い壁・小窓","交差ヴォールト","重厚感"],
    examples:["ピサのドゥオーモ","カンタベリー大聖堂（初期）"],
    tips:"半円アーチ・厚壁が特徴。ゴシック以前。" },
  { id:"gothic", name:"ゴシック様式", era:"12〜16世紀",
    features:["尖頭アーチ","ステンドグラス","飛び梁（フライング・バットレス）","バラ窓"],
    examples:["ケルン大聖堂","シャルトル大聖堂","ウェストミンスター寺院"],
    tips:"尖頭アーチ・ステンドグラスが特徴。空に向かって高く。" },
  { id:"baroque", name:"バロック様式", era:"17〜18世紀",
    features:["豪華な装飾","楕円形空間","明暗のコントラスト","ダイナミックな動き"],
    examples:["ヴェルサイユ宮殿","サン・ピエトロ広場"],
    tips:"「豪華・動的・誇大」がキーワード。絶対王政の象徴。" },
  { id:"renaissance", name:"ルネサンス様式", era:"15〜17世紀",
    features:["左右対称","ドーム","柱廊（コロネード）","調和と比例"],
    examples:["フィレンツェ大聖堂（ドーム）","サン・ピエトロ大聖堂"],
    tips:"「古代の復興」「調和・比例」がキーワード。ドームが特徴。" },
  { id:"islamic", name:"イスラム建築", era:"7世紀〜",
    features:["ミナレット（尖塔）","アーチ型ドーム","アラベスク装飾","幾何学模様","ムカルナス"],
    examples:["アルハンブラ宮殿","タージ・マハル","コルドバのメスキータ"],
    tips:"ミナレット・アラベスク・幾何学模様。偶像禁止→抽象装飾。" },
  { id:"hindu", name:"ヒンドゥー建築", era:"4世紀〜",
    features:["シカラ（曲線の塔）","マンダパ（柱廊）","彫刻で覆われた外壁"],
    examples:["アンコール・ワット","カジュラーホー"],
    tips:"シカラ（塔）・マンダパ（柱廊）。彫刻が多い。" },
  { id:"buddhist", name:"仏教建築（東・東南アジア）", era:"3世紀〜",
    features:["仏塔（パゴダ）","ストゥーパ（半球形）","伽藍配置","多宝塔"],
    examples:["ボロブドゥール","法隆寺","バガン（ミャンマー）"],
    tips:"パゴダ（多層塔）・ストゥーパ（丸い仏塔）。ボロブドゥールは石の曼荼羅。" },
  { id:"japanese_castle", name:"日本の城郭建築", era:"16〜17世紀",
    features:["天守閣","石垣","堀","白漆喰の外壁"],
    examples:["姫路城（白鷺城）","松本城","彦根城"],
    tips:"姫路城が世界遺産。「白鷺城」「石垣・堀・天守」が試験頻出。" }
];

// ─── 頻出ひっかけ問題リスト ───────────────────────────────
const trickQuestions = [
  { id:"t1", trap:"富士山は「自然遺産」", correct:"富士山は「文化遺産」（登録基準iii・vi）" },
  { id:"t2", trap:"世界遺産条約採択は「1975年」", correct:"採択は1972年（1975年は条約発効年）" },
  { id:"t3", trap:"万里の長城は宇宙から見える", correct:"実際には宇宙から見えない（俗説）" },
  { id:"t4", trap:"日本初の世界遺産は「法隆寺のみ」", correct:"1993年に4件同時登録（法隆寺・姫路城・屋久島・白神山地）" },
  { id:"t5", trap:"ガラパゴス諸島はペルー領", correct:"ガラパゴスはエクアドル領" },
  { id:"t6", trap:"エルサレムの推薦国は「イスラエル」", correct:"推薦国はヨルダン（イスラエルは推薦していない）" },
  { id:"t7", trap:"屋久島の登録基準は「ix」のみ", correct:"屋久島の登録基準はvii・ix（2基準）" },
  { id:"t8", trap:"ル・コルビュジエは「フランス人」", correct:"スイス生まれ・後にフランス国籍取得" },
  { id:"t9", trap:"原爆ドームは1945年登録", correct:"広島平和記念碑の登録は1996年" },
  { id:"t10", trap:"「危機遺産」は世界遺産から外れる", correct:"危機遺産も世界遺産のまま（別管理だが登録継続）" }
];

// ─── 遺産データ便利関数 ──────────────────────────────────
const getHeritagesByRegion   = (region) => allHeritageData.filter(h => h.region === region);
const getHeritagesByCriteria = (c)      => allHeritageData.filter(h => h.criteria.includes(c));
const getHeritagesByEra      = (era)    => allHeritageData.filter(h => h.relatedEra === era);

// ─── デザイントークン ──────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --color-primary: #FF8FAB;
    --color-secondary: #A8D8EA;
    --color-accent: #FFD166;
    --color-mint: #B5EAD7;
    --color-lavender: #C9B1FF;
    --color-bg: #FFFFFF;
    --color-text: #3D3D3D;
    --color-text-light: #888888;
    --color-card-bg: #FFF9FA;
    --color-border: #FFE0E8;
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --shadow-sm: 0 2px 8px rgba(255,143,171,0.15);
    --shadow-md: 0 4px 16px rgba(255,143,171,0.2);
    --font-main: 'Noto Sans JP', sans-serif;
  }

  body {
    font-family: var(--font-main);
    background: var(--color-bg);
    color: var(--color-text);
    min-height: 100vh;
  }

  .app-wrapper {
    max-width: 768px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--color-bg);
  }

  /* ─── タブバー ─────────────────────────────── */
  .tab-bar {
    position: sticky;
    bottom: 0;
    background: #fff;
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: space-around;
    padding: 8px 0 12px;
    z-index: 100;
    box-shadow: 0 -2px 12px rgba(255,143,171,0.1);
  }

  .tab-bar-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: var(--radius-sm);
    color: var(--color-text-light);
    font-size: 10px;
    font-family: var(--font-main);
    transition: all 0.2s;
    min-width: 52px;
  }

  .tab-bar-btn.active {
    color: var(--color-primary);
    background: rgba(255,143,171,0.08);
  }

  .tab-bar-btn svg {
    width: 20px;
    height: 20px;
  }

  /* ─── コンテンツエリア ─────────────────────── */
  .tab-content {
    flex: 1;
    padding: 16px;
    padding-bottom: 80px;
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ─── 共通カード ───────────────────────────── */
  .card {
    background: var(--color-card-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 16px;
    box-shadow: var(--shadow-sm);
    margin-bottom: 12px;
  }

  .card-title {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 8px;
  }

  /* ─── ボタン共通 ───────────────────────────── */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: var(--radius-sm);
    border: none;
    cursor: pointer;
    font-family: var(--font-main);
    font-size: 13px;
    font-weight: 500;
    transition: all 0.2s;
  }

  .btn-primary {
    background: var(--color-primary);
    color: #fff;
  }
  .btn-primary:hover { filter: brightness(1.05); }

  .btn-secondary {
    background: var(--color-secondary);
    color: var(--color-text);
  }

  .btn-accent {
    background: var(--color-accent);
    color: var(--color-text);
  }

  .btn-ghost {
    background: rgba(255,143,171,0.1);
    color: var(--color-primary);
  }

  /* ─── ナビゲーションバー ────────────────────── */
  .nav-bar {
    position: sticky;
    top: 0;
    z-index: 90;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--color-border);
    padding: 8px 12px;
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    align-items: center;
  }

  .nav-link-btn {
    font-size: 11px;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid var(--color-border);
    background: var(--color-card-bg);
    color: var(--color-text);
    cursor: pointer;
    font-family: var(--font-main);
    white-space: nowrap;
    transition: all 0.18s;
  }
  .nav-link-btn:hover { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
  .nav-link-btn.current { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
  .nav-back-btn {
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 20px;
    border: none;
    background: rgba(255,143,171,0.12);
    color: var(--color-primary);
    cursor: pointer;
    font-family: var(--font-main);
  }

  /* ─── セクション見出し ──────────────────────── */
  .section-title {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-text);
    margin: 20px 0 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .section-title::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background: var(--color-primary);
    border-radius: 2px;
  }

  /* ─── バッジ ────────────────────────────────── */
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
  }

  .badge-culture { background: rgba(255,143,171,0.15); color: #d63873; }
  .badge-nature  { background: rgba(181,234,215,0.3);  color: #2e8b57; }
  .badge-mixed   { background: rgba(201,177,255,0.2);  color: #6a4ca8; }
  .badge-criteria { background: rgba(168,216,234,0.3); color: #2a7fa8; }

  /* ─── プログレスバー ────────────────────────── */
  .progress-bar-wrap {
    background: var(--color-border);
    border-radius: 8px;
    height: 8px;
    overflow: hidden;
    margin: 6px 0;
  }

  .progress-bar-fill {
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-lavender));
    transition: width 0.4s ease;
  }

  /* ─── モーダル ──────────────────────────────── */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 200;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    animation: fadeIn 0.2s ease;
  }

  .modal-panel {
    background: #fff;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    width: 100%;
    max-width: 768px;
    max-height: 90vh;
    overflow-y: auto;
    padding: 20px;
    animation: slideUp 0.25s ease;
  }

  @keyframes slideUp {
    from { transform: translateY(40px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }

  /* ─── AI応答エリア ──────────────────────────── */
  .ai-response {
    background: linear-gradient(135deg, rgba(201,177,255,0.1), rgba(168,216,234,0.1));
    border: 1px solid var(--color-lavender);
    border-radius: var(--radius-md);
    padding: 14px;
    font-size: 13px;
    line-height: 1.7;
    margin-top: 10px;
    white-space: pre-wrap;
  }

  /* ─── スピナー ──────────────────────────────── */
  @keyframes spin { to { transform: rotate(360deg); } }
  .spinner {
    width: 20px; height: 20px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
  }

  /* ─── 遺産カード ────────────────────────────── */
  .heritage-card {
    background: var(--color-card-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    margin-bottom: 12px;
    cursor: pointer;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .heritage-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
  .heritage-card-img {
    width: 100%;
    height: 210px;
    object-fit: cover;
    background: var(--color-border);
    display: block;
  }
  .heritage-card-body { padding: 12px; }
  .heritage-card-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
  .heritage-card-sub  { font-size: 12px; color: var(--color-text-light); margin-bottom: 8px; }
  .heritage-card-badges { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
  .badge-diff-1 { background: rgba(181,234,215,0.4); color: #2e8b57; }
  .badge-diff-2 { background: rgba(255,209,102,0.4); color: #a07800; }
  .badge-diff-3 { background: rgba(255,143,171,0.3); color: #c0365a; }
  .badge-freq-high { background: rgba(255,143,171,0.2); color: #c0365a; }
  .badge-freq-mid  { background: rgba(168,216,234,0.2); color: #2a7fa8; }
  .badge-freq-low  { background: rgba(201,177,255,0.2); color: #6a4ca8; }
  .heritage-card-tips { font-size: 11px; color: var(--color-text-light); line-height: 1.5; }

  /* ─── クイズコンポーネント ──────────────────── */
  .quiz-wrap { padding: 4px 0; }
  .quiz-question {
    font-size: 15px; font-weight: 700; line-height: 1.6;
    margin-bottom: 16px; color: var(--color-text);
  }
  .quiz-choices { display: flex; flex-direction: column; gap: 8px; }
  .quiz-choice-btn {
    text-align: left; padding: 12px 14px;
    border-radius: var(--radius-sm);
    border: 2px solid var(--color-border);
    background: #fff; cursor: pointer;
    font-family: var(--font-main); font-size: 13px;
    transition: all 0.18s; line-height: 1.5;
  }
  .quiz-choice-btn:hover:not(:disabled) { border-color: var(--color-primary); background: rgba(255,143,171,0.06); }
  .quiz-choice-btn.correct  { border-color: #2e8b57; background: rgba(181,234,215,0.25); color: #2e8b57; font-weight: 600; }
  .quiz-choice-btn.wrong    { border-color: #e05c7a; background: rgba(255,143,171,0.15); color: #e05c7a; }
  .quiz-choice-btn.reveal   { border-color: #2e8b57; background: rgba(181,234,215,0.12); color: #2e8b57; }
  .quiz-choice-btn:disabled { cursor: default; }
  .quiz-feedback {
    margin-top: 14px; padding: 12px 14px;
    border-radius: var(--radius-sm); font-size: 13px; line-height: 1.6;
  }
  .quiz-feedback.correct { background: rgba(181,234,215,0.2); border-left: 3px solid #2e8b57; color: #1e5e3a; }
  .quiz-feedback.wrong   { background: rgba(255,143,171,0.12); border-left: 3px solid #e05c7a; color: #8a1a35; }
  .quiz-next-btn {
    margin-top: 12px; width: 100%; padding: 12px;
    border-radius: var(--radius-sm); border: none;
    background: var(--color-primary); color: #fff;
    font-family: var(--font-main); font-size: 14px; font-weight: 600;
    cursor: pointer;
  }

  /* ─── YouTubeボタン・AIボタン ────────────────── */
  .youtube-btn {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 7px 13px; border-radius: var(--radius-sm);
    border: 1px solid #ff4444; background: rgba(255,68,68,0.08);
    color: #cc0000; font-family: var(--font-main); font-size: 12px;
    cursor: pointer; transition: all 0.18s; text-decoration: none;
  }
  .youtube-btn:hover { background: #ff4444; color: #fff; }

  .ai-btn {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 7px 13px; border-radius: var(--radius-sm);
    border: 1px solid var(--color-lavender);
    background: rgba(201,177,255,0.12);
    color: #6a4ca8; font-family: var(--font-main); font-size: 12px;
    cursor: pointer; transition: all 0.18s;
  }
  .ai-btn:hover { background: var(--color-lavender); color: #fff; }
  .ai-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .ai-loading {
    display: flex; align-items: center; gap: 8px;
    padding: 10px; font-size: 13px; color: var(--color-text-light);
    margin-top: 8px;
  }
  .ai-badge {
    display: inline-block; font-size: 11px; font-weight: 700;
    color: #6a4ca8; margin-bottom: 6px;
  }

  /* ─── ホーム画面 ────────────────────────────── */
  .home-header {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-lavender) 100%);
    border-radius: var(--radius-lg);
    padding: 20px;
    color: #fff;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }
  .home-header::after {
    content: "🏛️";
    position: absolute; right: 16px; top: 50%;
    transform: translateY(-50%);
    font-size: 56px; opacity: 0.25;
  }
  .home-header-title { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
  .home-header-sub   { font-size: 12px; opacity: 0.85; }

  .search-wrap { position: relative; margin-bottom: 16px; }
  .search-input {
    width: 100%; padding: 11px 14px 11px 38px;
    border-radius: var(--radius-md);
    border: 2px solid var(--color-border);
    font-family: var(--font-main); font-size: 14px;
    background: var(--color-card-bg); outline: none;
    transition: border-color 0.2s;
  }
  .search-input:focus { border-color: var(--color-primary); }
  .search-icon {
    position: absolute; left: 12px; top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-light); font-size: 16px;
    pointer-events: none;
  }
  .search-results {
    position: absolute; top: calc(100% + 4px); left: 0; right: 0;
    background: #fff; border: 1px solid var(--color-border);
    border-radius: var(--radius-md); z-index: 50;
    box-shadow: var(--shadow-md); max-height: 240px; overflow-y: auto;
  }
  .search-result-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 14px; cursor: pointer;
    border-bottom: 1px solid var(--color-border);
    font-size: 13px; transition: background 0.15s;
  }
  .search-result-item:last-child { border-bottom: none; }
  .search-result-item:hover { background: rgba(255,143,171,0.06); }
  .search-result-flag { font-size: 18px; flex-shrink: 0; }
  .search-result-name { font-weight: 600; }
  .search-result-sub  { font-size: 11px; color: var(--color-text-light); }

  .exam-card {
    background: linear-gradient(135deg, rgba(255,209,102,0.15), rgba(255,143,171,0.08));
    border: 1px solid var(--color-accent);
    border-radius: var(--radius-md);
    padding: 16px; margin-bottom: 16px;
  }
  .exam-card-label { font-size: 12px; color: var(--color-text-light); margin-bottom: 6px; }
  .exam-date-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .exam-date-input {
    border: 1px solid var(--color-border); border-radius: var(--radius-sm);
    padding: 6px 10px; font-family: var(--font-main); font-size: 13px;
    background: #fff; color: var(--color-text);
  }
  .exam-countdown {
    font-size: 22px; font-weight: 700; color: var(--color-primary);
    margin-top: 8px;
  }
  .exam-countdown-sub { font-size: 12px; color: var(--color-text-light); }

  .progress-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 16px; }
  .progress-table th {
    text-align: left; padding: 8px 10px;
    background: rgba(255,143,171,0.08); color: var(--color-text);
    font-weight: 600; border-bottom: 2px solid var(--color-border);
  }
  .progress-table td { padding: 9px 10px; border-bottom: 1px solid var(--color-border); vertical-align: middle; }
  .progress-table tr:last-child td { border-bottom: none; }
  .progress-mini-bar {
    height: 6px; border-radius: 4px;
    background: var(--color-border); overflow: hidden; min-width: 60px;
  }
  .progress-mini-fill {
    height: 100%; border-radius: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-lavender));
    transition: width 0.4s ease;
  }

  .history-item {
    display: flex; justify-content: space-between; align-items: center;
    padding: 10px 0; border-bottom: 1px solid var(--color-border); font-size: 13px;
  }
  .history-item:last-child { border-bottom: none; }
  .history-score { font-weight: 700; color: var(--color-primary); }
  .history-date  { font-size: 11px; color: var(--color-text-light); }

  .reset-btn {
    width: 100%; padding: 11px; border-radius: var(--radius-sm);
    border: 1px solid #fca5a5; background: rgba(252,165,165,0.1);
    color: #dc2626; font-family: var(--font-main); font-size: 13px;
    cursor: pointer; margin-top: 4px; transition: all 0.2s;
  }
  .reset-btn:hover { background: #dc2626; color: #fff; }

  /* ─── セクションタブ（基礎知識タブ内） ─────── */
  .section-tabs {
    display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;
  }
  .section-tab-btn {
    padding: 7px 14px; border-radius: 20px; border: 2px solid var(--color-border);
    background: var(--color-card-bg); color: var(--color-text-light);
    font-family: var(--font-main); font-size: 12px; font-weight: 600;
    cursor: pointer; transition: all 0.18s;
  }
  .section-tab-btn.active {
    background: var(--color-primary); color: #fff; border-color: var(--color-primary);
  }
  .section-tab-btn.done {
    border-color: #2e8b57; color: #2e8b57; background: rgba(181,234,215,0.2);
  }

  /* ─── クイズ結果サマリー ──────────────────── */
  .quiz-result-wrap {
    text-align: center; padding: 24px 16px;
    background: linear-gradient(135deg, rgba(255,143,171,0.08), rgba(201,177,255,0.08));
    border-radius: var(--radius-md); margin: 12px 0;
  }
  .quiz-result-score { font-size: 48px; font-weight: 700; color: var(--color-primary); }
  .quiz-result-label { font-size: 14px; color: var(--color-text-light); margin-top: 4px; }
  .quiz-result-msg   { font-size: 15px; font-weight: 600; margin-top: 12px; }

  /* ─── 登録基準カード ──────────────────────── */
  .criteria-card {
    border-radius: var(--radius-md); overflow: hidden;
    border: 1px solid var(--color-border); margin-bottom: 10px;
    box-shadow: var(--shadow-sm);
  }
  .criteria-card-header {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px; cursor: pointer;
    transition: background 0.15s;
  }
  .criteria-card-header:hover { filter: brightness(0.97); }
  .criteria-num {
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700; color: #fff; flex-shrink: 0;
  }
  .criteria-card-title { font-size: 14px; font-weight: 700; flex: 1; }
  .criteria-card-type  { font-size: 11px; opacity: 0.75; }
  .criteria-chevron    { font-size: 12px; color: var(--color-text-light); }
  .criteria-card-body  { padding: 14px; background: #fff; border-top: 1px solid var(--color-border); }
  .criteria-desc       { font-size: 13px; line-height: 1.7; margin-bottom: 10px; }
  .criteria-heritages  { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 10px; }
  .criteria-heritage-tag {
    font-size: 11px; padding: 3px 8px; border-radius: 12px;
    background: rgba(168,216,234,0.25); color: var(--color-text);
  }
  .criteria-tip {
    font-size: 12px; color: #6a4ca8;
    background: rgba(201,177,255,0.12); border-radius: var(--radius-sm);
    padding: 8px 10px; margin-bottom: 8px; line-height: 1.5;
  }

  /* ─── 地域別タブ ────────────────────────────── */
  .region-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;
  }
  .region-card {
    border-radius: var(--radius-md); padding: 16px 12px;
    cursor: pointer; text-align: center;
    border: 2px solid transparent;
    transition: all 0.2s; position: relative; overflow: hidden;
  }
  .region-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
  .region-card.done  { border-color: #2e8b57; }
  .region-card-emoji { font-size: 28px; margin-bottom: 6px; }
  .region-card-name  { font-size: 13px; font-weight: 700; }
  .region-card-count { font-size: 11px; opacity: 0.7; margin-top: 2px; }
  .region-card-done  {
    position: absolute; top: 6px; right: 8px;
    font-size: 12px; color: #2e8b57;
  }

  .heritage-list-header {
    display: flex; align-items: center; gap: 10px; margin-bottom: 16px;
  }
  .heritage-list-back {
    padding: 7px 12px; border-radius: 20px; border: none;
    background: rgba(255,143,171,0.12); color: var(--color-primary);
    font-family: var(--font-main); font-size: 12px; cursor: pointer;
  }
  .heritage-list-title { font-size: 16px; font-weight: 700; }

  .heritage-detail-img {
    width: 100%; height: 300px; object-fit: cover;
    border-radius: var(--radius-md); margin-bottom: 14px;
    background: var(--color-border); display: block;
  }
  .heritage-detail-name { font-size: 20px; font-weight: 700; margin-bottom: 4px; }
  .heritage-detail-sub  { font-size: 13px; color: var(--color-text-light); margin-bottom: 12px; }
  .heritage-detail-desc { font-size: 13px; line-height: 1.8; margin-bottom: 14px; }
  .heritage-detail-tips { margin-bottom: 14px; }
  .heritage-detail-tip  {
    font-size: 12px; padding: 6px 10px;
    background: rgba(255,209,102,0.15); border-radius: 6px;
    margin-bottom: 4px; color: var(--color-text);
  }
  .modal-close-btn {
    width: 100%; padding: 12px; border-radius: var(--radius-sm);
    border: 1px solid var(--color-border); background: var(--color-card-bg);
    font-family: var(--font-main); font-size: 14px; cursor: pointer; margin-top: 8px;
  }

  /* ─── 学習モードカード ──────────────────────── */
  .mode-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px; }
  .mode-card {
    border-radius: var(--radius-md); padding: 16px 12px; text-align: center;
    cursor: pointer; border: 2px solid var(--color-border);
    background: var(--color-card-bg); transition: all 0.2s;
  }
  .mode-card:hover { border-color: var(--color-primary); transform: translateY(-2px); box-shadow: var(--shadow-md); }
  .mode-card-emoji { font-size: 28px; margin-bottom: 6px; }
  .mode-card-title { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
  .mode-card-desc  { font-size: 11px; color: var(--color-text-light); line-height: 1.4; }

  .filter-row { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
  .filter-btn {
    padding: 5px 10px; border-radius: 16px; border: 1px solid var(--color-border);
    background: var(--color-card-bg); color: var(--color-text-light);
    font-family: var(--font-main); font-size: 11px; cursor: pointer; transition: all 0.15s;
  }
  .filter-btn.active { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }

  .story-card {
    background: var(--color-card-bg); border: 1px solid var(--color-border);
    border-radius: var(--radius-md); padding: 14px; margin-bottom: 10px;
    display: flex; gap: 12px; align-items: flex-start;
  }
  .story-card-img {
    width: 108px; height: 108px; border-radius: var(--radius-sm);
    object-fit: cover; flex-shrink: 0; background: var(--color-border);
  }
  .story-card-body { flex: 1; min-width: 0; }
  .story-card-name { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
  .story-card-sub  { font-size: 11px; color: var(--color-text-light); margin-bottom: 8px; }

  /* ─── 時代別タブ ────────────────────────────── */
  .timeline-scroll {
    display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 16px;
    scrollbar-width: none;
  }
  .timeline-scroll::-webkit-scrollbar { display: none; }
  .timeline-era-btn {
    flex-shrink: 0; padding: 10px 14px; border-radius: var(--radius-md);
    border: 2px solid var(--color-border); background: var(--color-card-bg);
    cursor: pointer; font-family: var(--font-main); text-align: center;
    transition: all 0.18s; min-width: 76px;
  }
  .timeline-era-btn.active { border-color: var(--color-primary); background: rgba(255,143,171,0.1); }
  .timeline-era-btn.done   { border-color: #2e8b57; }
  .timeline-era-emoji  { font-size: 20px; margin-bottom: 2px; }
  .timeline-era-label  { font-size: 12px; font-weight: 700; }
  .timeline-era-period { font-size: 10px; color: var(--color-text-light); }

  .era-header-card {
    border-radius: var(--radius-md); padding: 16px; margin-bottom: 14px; border: none;
  }
  .era-header-title  { font-size: 18px; font-weight: 700; margin-bottom: 4px; }
  .era-header-period { font-size: 12px; opacity: 0.75; margin-bottom: 8px; }
  .era-header-desc   { font-size: 13px; line-height: 1.7; }

  .era-heritage-count {
    font-size: 12px; color: var(--color-text-light); margin-bottom: 10px;
  }

  /* ─── 登録基準別タブ ────────────────────────── */
  .criteria-overview-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 16px;
  }
  .criteria-mini-card {
    border-radius: var(--radius-md); padding: 12px 10px; cursor: pointer;
    border: 2px solid transparent; transition: all 0.18s;
    position: relative; overflow: hidden;
  }
  .criteria-mini-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
  .criteria-mini-card.done  { border-color: #2e8b57; }
  .criteria-mini-num  { font-size: 22px; font-weight: 900; margin-bottom: 2px; }
  .criteria-mini-label{ font-size: 11px; font-weight: 700; line-height: 1.3; }
  .criteria-mini-type { font-size: 10px; opacity: 0.7; margin-top: 2px; }
  .criteria-done-mark { position:absolute; top:6px; right:8px; font-size:12px; color:#2e8b57; }

  .criteria-detail-header {
    border-radius: var(--radius-md); padding: 18px; margin-bottom: 14px;
  }
  .criteria-detail-num   { font-size: 32px; font-weight: 900; margin-bottom: 4px; }
  .criteria-detail-label { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .criteria-detail-desc  { font-size: 13px; line-height: 1.8; }

  .compare-box {
    background: rgba(255,209,102,0.12); border: 1px solid var(--color-accent);
    border-radius: var(--radius-sm); padding: 12px; margin-bottom: 12px;
  }
  .compare-box-label { font-size: 11px; font-weight: 700; color: #a07800; margin-bottom: 6px; }
  .compare-vs { display:flex; align-items:center; gap:8px; font-size:13px; }
  .compare-item { flex:1; text-align:center; font-weight:600; padding:6px; background:#fff; border-radius:6px; }
  .compare-separator { font-size:16px; font-weight:900; color:var(--color-accent); }

  /* ─── 苦手分析タブ ──────────────────────────── */
  .stat-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 16px; }
  .stat-card {
    border-radius: var(--radius-md); padding: 14px 10px; text-align: center;
    background: var(--color-card-bg); border: 1px solid var(--color-border);
  }
  .stat-num   { font-size: 26px; font-weight: 700; color: var(--color-primary); }
  .stat-label { font-size: 11px; color: var(--color-text-light); margin-top: 2px; }

  .bar-row {
    display: flex; align-items: center; gap: 8px; padding: 8px 0;
    border-bottom: 1px solid var(--color-border);
  }
  .bar-row:last-child { border-bottom: none; }
  .bar-label { font-size: 12px; width: 120px; flex-shrink: 0; line-height: 1.3; }
  .bar-track { flex: 1; height: 10px; background: var(--color-border); border-radius: 5px; overflow: hidden; }
  .bar-fill  { height: 100%; border-radius: 5px; transition: width 0.5s ease; }
  .bar-pct   { font-size: 12px; font-weight: 700; width: 36px; text-align: right; flex-shrink: 0; }

  .weak-rank-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 0; border-bottom: 1px solid var(--color-border);
  }
  .weak-rank-num { font-size: 18px; font-weight: 900; width: 28px; flex-shrink: 0; }
  .weak-rank-body { flex: 1; }
  .weak-rank-name { font-size: 13px; font-weight: 600; margin-bottom: 2px; }
  .weak-rank-sub  { font-size: 11px; color: var(--color-text-light); }
  .weak-rank-pct  { font-size: 14px; font-weight: 700; }

  .forgetting-row {
    display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px; margin-top: 10px;
    scrollbar-width: none;
  }
  .forgetting-row::-webkit-scrollbar { display: none; }
  .forget-card {
    flex-shrink: 0; width: 80px; text-align: center;
    padding: 10px 8px; border-radius: var(--radius-sm);
    border: 1px solid var(--color-border); background: var(--color-card-bg);
    font-size: 11px;
  }
  .forget-day  { font-size: 16px; font-weight: 700; color: var(--color-primary); }
  .forget-rate { font-size: 10px; color: var(--color-text-light); margin-top: 2px; }

  /* ─── 模擬試験 ──────────────────────────────── */
  .exam-screen {
    position: fixed; inset: 0; background: #fff; z-index: 300;
    display: flex; flex-direction: column; max-width: 768px;
    margin: 0 auto;
  }
  .exam-header {
    background: linear-gradient(135deg, var(--color-primary), var(--color-lavender));
    color: #fff; padding: 12px 16px;
    display: flex; justify-content: space-between; align-items: center;
    flex-shrink: 0;
  }
  .exam-timer {
    font-size: 20px; font-weight: 700; font-variant-numeric: tabular-nums;
  }
  .exam-timer.warning { color: #FFD166; }
  .exam-timer.danger  { color: #ff6b6b; animation: pulse 1s ease-in-out infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
  .exam-body { flex: 1; overflow-y: auto; padding: 16px; }
  .exam-intro {
    text-align: center; padding: 40px 20px; max-width: 480px; margin: 0 auto;
  }
  .exam-intro-title { font-size: 24px; font-weight: 700; margin-bottom: 12px; }
  .exam-intro-sub   { font-size: 14px; color: var(--color-text-light); margin-bottom: 24px; line-height: 1.6; }
  .exam-start-btn {
    width: 100%; padding: 16px; border-radius: var(--radius-md); border: none;
    background: linear-gradient(135deg, var(--color-primary), var(--color-lavender));
    color: #fff; font-family: var(--font-main); font-size: 18px; font-weight: 700;
    cursor: pointer; margin-bottom: 12px;
  }
  .exam-result-grade {
    font-size: 64px; font-weight: 900; margin-bottom: 8px;
  }
  .exam-pass  { color: #2e8b57; }
  .exam-fail  { color: #dc2626; }

  /* ─── ナビゲーションバー改善 ────────────────── */
  .nav-bar-title {
    font-size: 13px; font-weight: 700; color: var(--color-text);
    padding: 4px 0; margin-right: 4px; white-space: nowrap;
  }

  /* ─── レスポンシブ（最終調整） ─────────────── */
  @media (max-width: 390px) {
    .region-grid     { grid-template-columns: 1fr 1fr; }
    .criteria-overview-grid { grid-template-columns: 1fr 1fr; }
    .mode-grid       { grid-template-columns: 1fr 1fr; }
    .stat-grid       { grid-template-columns: 1fr 1fr 1fr; }
    .tab-content     { padding: 12px 10px; }
  }
  @media (max-width: 375px) {
    .tab-content { padding: 12px 8px; }
    .tab-bar-btn { font-size: 9px; min-width: 44px; }
    .modal-panel { padding: 14px; }
    .heritage-card-img { height: 110px; }
    .exam-intro-title { font-size: 20px; }
  }
`;

// ─── localStorageキー ──────────────────────────────────────
const STORAGE_KEY = "sekai-isan-app-data";

const DEFAULT_PROGRESS = {
  kisochishiki: { A: false, B: false, C: false, D: false, E: false },
  chiikibetsu: { asia: false, europe: false, africa: false, middleEast: false, northAmerica: false, southAmerica: false, oceania: false },
  jidaibetsu: { ancient: false, classical: false, medieval: false, earlyModern: false, modern: false, contemporary: false },
  kijunbetsu: { i: false, ii: false, iii: false, iv: false, v: false, vi: false, vii: false, viii: false, ix: false, x: false },
  nigatebun: { analyzed: false }
};

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // quota exceeded など
  }
}

// ─── タブ定義 ─────────────────────────────────────────────
const TABS = [
  { id: "home",         label: "ホーム",    icon: Home },
  { id: "kisochishiki", label: "①基礎",     icon: BookOpen },
  { id: "chiikibetsu",  label: "②地域",     icon: Globe },
  { id: "jidaibetsu",   label: "③時代",     icon: Clock },
  { id: "kijunbetsu",   label: "④基準",     icon: Star },
  { id: "nigatebun",    label: "⑤分析",     icon: BarChart2 },
];

// 📍 CHECKPOINT: フェーズ5 完了

// ─── モックAIデータ（GitHub Pages対応・APIキー不要） ────────
// TODO: 将来的にAnthropic APIを使う場合は getMockAIResponse を以下に差し替え
// const callClaudeAPI = async (prompt) => {
//   const response = await fetch("https://api.anthropic.com/v1/messages", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000,
//       messages: [{ role: "user", content: prompt }] })
//   });
//   const data = await response.json();
//   return data.content?.[0]?.text || "";
// };
// ※ GitHub Pages での利用時はAPIキーが露出するため注意
const mockAIData = {
  explanation: {
    "i":  "登録基準iは「人類の創造的傑作」です。建築・芸術・都市計画において、人間の創造性が頂点に達した作品に与えられます。姫路城は木造城郭建築として、シドニー・オペラハウスは20世紀建築として、それぞれ人類の創造力の証として認められています。",
    "ii": "登録基準iiは「文化・文明の交流」です。ある時代や地域を超えて、建築・技術・芸術・都市計画などが広まったことを示す遺産に与えられます。奈良の都は中国の都城制度が日本に伝わった証拠として評価されました。",
    "iii":"登録基準iiiは「文明・文化の証拠」です。現存または消滅した文明・文化の、唯一または希少な証拠となる遺産に与えられます。ポンペイは古代ローマの都市生活をそのまま今に伝える、かけがえない証拠です。",
    "iv": "登録基準ivは「建築・技術の傑作」です。人類の歴史における重要な時代を代表する建築様式や技術の卓越した例に与えられます。姫路城の木造軍事建築とヴェルサイユの宮廷建築は、まったく異なる文化の傑作として同じ基準で評価されています。",
    "v":  "登録基準vは「人と環境の関係」です。特定の文化を代表する伝統的な人間の居住地や土地利用の卓越した例に与えられます。白川郷の合掌造り集落は、豪雪地帯という厳しい自然環境に人間が適応した傑作として評価されました。",
    "vi": "登録基準viは「信仰・芸術・文学との関連」です。顕著な普遍的意義を持つ出来事・信仰・芸術作品と直接に関連する遺産に与えられます。広島の原爆ドームは核兵器廃絶と平和への誓いを象徴し、人類共通の記憶として登録されました。",
    "vii":"登録基準viiは「自然の美と景観」です。最高の自然美や美的な重要性を持つ卓越した自然現象や地域に与えられます。グランドキャニオンの圧倒的な峡谷景観やヴィクトリアの滝の雄大さが代表例です。",
    "viii":"登録基準viiiは「地球の歴史・地形」です。地球の歴史の主要な段階を示す卓越した例、または地形・地質学的プロセスを示す遺産に与えられます。ガラパゴスは海底火山からの島の形成過程を今も観察できる生きた地質学の教科書です。",
    "ix": "登録基準ixは「生態系・生物の進化」です。陸上・淡水・沿岸・海洋生態系の進化や発展において重要な継続中の生態学的プロセスを示す遺産に与えられます。知床は流氷がもたらす海の栄養が陸の生き物まで育む独自の生態系が評価されました。",
    "x":  "登録基準xは「生物多様性」です。絶滅危惧種を含む生物多様性の保全にとって最も重要な自然生息地に与えられます。小笠原諸島は一度も大陸と地続きになったことがなく、固有種の比率が極めて高い「東洋のガラパゴス」として評価されました。",
    "default": "この登録基準は、遺産が持つ顕著な普遍的価値を証明する重要な根拠です。世界遺産委員会は毎年、専門機関（ICOMOS・IUCN）の審査をもとに、登録基準への適合を厳密に審査しています。"
  },
  story: {
    "himeji":          "白鷺が翼を広げたような優美な姿から「白鷺城」と呼ばれる姫路城。1609年に完成したその姿は400年以上変わりません。戦国時代の激しい攻防を想定した複雑な縄張り、敵を迷わせる迷路のような城内構造、そして白漆喰の美しい外壁。戦うための城でありながら、これほどまでに美しい建造物を作り上げた先人たちの知恵と技術は、まさに人類の創造的傑作です。",
    "yakushima":       "屋久島には「ひと月に35日雨が降る」という言葉があります。この豊富な雨が、樹齢数千年の屋久杉を育ててきました。縄文時代から生き続ける縄文杉は推定樹齢2000〜7000年。亜熱帯から亜寒帯まで標高によって植生が垂直に変化するこの島は、一つの島で日本列島全体の自然を体験できる奇跡の場所です。",
    "hiroshima":       "1945年8月6日午前8時15分、人類初の原子爆弾が広島の空で炸裂しました。爆心地近くにあったこの建物だけが、奇跡的に骨組みを残して立ち続けました。かつては産業奨励館として人々が行き交った場所が、一瞬にして廃墟となった。その姿は核兵器の恐ろしさと、二度と繰り返してはならないという人類の誓いを今に伝えています。",
    "fuji":            "富士山が世界遺産に登録されたのは「自然遺産」としてではありません。「信仰の対象と芸術の源泉」という文化遺産としての登録です。古来より日本人は富士山を神聖な山として崇め、葛飾北斎は「富嶽三十六景」で世界中の芸術家に影響を与えました。単なる美しい山ではなく、日本人の精神文化そのものを体現した遺産です。",
    "angkor":          "9世紀から15世紀にかけて東南アジアに君臨したクメール帝国。アンコール・ワットは当初ヒンドゥー教の寺院として建てられ、後に仏教寺院へと変わりました。密林に飲み込まれ忘れられた都市が西洋人によって「発見」されたのは1860年代。しかし地元の人々は何世紀もの間、この場所を聖地として守り続けていたのです。",
    "machu_picchu":    "標高2,430mの山の尾根に突如現れる石造りの都市。インカ帝国が15世紀に建造したマチュ・ピチュは、スペインの征服者たちにすら発見されることなく400年以上密林に眠り続けました。鉄器も車輪も持たないインカの人々が、どうやってこれほど精巧な石組みを実現したのか。その謎は今も完全には解明されていません。",
    "great_wall":      "全長2万kmにも及ぶと言われる万里の長城。しかし実際に宇宙から見えるというのは俗説です。紀元前から各王朝が断続的に建設を続け、現在私たちが目にする姿は主に明代（14〜17世紀）のもの。延べ何百万人もの民衆が工事に動員され、その多くが命を落としたとされます。「中国最大の墓場」という側面も持つこの長城は、力と悲劇の両方を刻んだ遺産です。",
    "pyramids":        "4500年前、巨大な石灰岩を270万個以上積み上げて造られたギザの大ピラミッド。最大の「クフ王のピラミッド」は元々147mの高さを誇り、19世紀まで約4000年間、世界最高の建造物であり続けました。当初は純白の化粧石で覆われ、太陽の光に輝いていたとされます。どうやってこれほど精密に建造されたのか、現代の建築学者も驚嘆を隠せない謎の遺産です。",
    "taj_mahal":       "1631年、ムガル帝国の皇帝シャー・ジャハーンは愛妃ムムターズ・マハルを失いました。悲嘆に暮れた皇帝は最高の廟を建てることを決意。2万人の職人が22年をかけて完成させた純白の霊廟は、左右完全対称の美しさで今も人々を魅了します。皮肉にも皇帝は後に息子に幽閉され、宮殿の窓から愛妃の眠るタージ・マハルを眺めながら晩年を過ごしたとされます。",
    "galapagos":       "太平洋の赤道上に浮かぶガラパゴス諸島。ダーウィンが1835年に訪れ「種の起源」のヒントを得たこの島々では、本土から隔絶された環境でガラパゴスゾウガメ・ウミイグアナ・ダーウィンフィンチなど独自の進化を遂げた生物が今も生きています。vii・viii・ix・xという4つすべての自然基準を持つ稀有な遺産で、「生きた進化の教室」と呼ばれます。",
    "great_barrier_reef":"オーストラリア北東沖に広がる世界最大のサンゴ礁。全長2,300kmにおよぶこの海中の大陸には、1500種以上の魚類、4000種のサンゴ、250万羽の海鳥が暮らしています。しかし近年の海水温上昇によるサンゴの白化現象は深刻で、世界遺産委員会は「危機遺産」への登録を勧告するほど。この美しい海は、気候変動への警告を発し続けています。",
    "sydney_opera":    "1957年のデザインコンペで一人の無名のデンマーク人建築家が提出した斬新なスケッチ。ヨーン・ウツソンのその設計はあまりに革命的で、当初は「実現不可能」と言われました。16年の歳月と当初予算の14倍もの費用をかけて1973年に完成したシドニー・オペラハウス。ウツソン自身は工事途中に下ろされ、完成した建物を生涯一度も見ることはありませんでした。",
    "versailles":      "「朕は国家なり」と言ったとされるルイ14世が建設した絶対王政の象徴。ヴェルサイユ宮殿の鏡の間には73枚の鏡が並び、17の天窓から差し込む光が反射して、昼間でもシャンデリアが輝いているように見えます。庭園は幾何学的に設計され、王の権威が自然をも支配するという思想を体現。1919年にはここで第一次世界大戦のパリ講和条約が締結されました。",
    "default":         "この世界遺産は、人類が長い歴史の中で築き上げた、かけがえない文化・自然の遺産です。登録基準に示された顕著な普遍的価値は、国境や時代を超えて、すべての人々が共有すべき宝として世界遺産委員会に認められました。"
  },
  compare: {
    "i":  "タージ・マハルとシドニー・オペラハウスはどちらも登録基準i「人類の創造的傑作」です。タージ・マハルは17世紀ムガル帝国の皇帝が亡き妃への愛のために建てた純白の霊廟。シドニー・オペラハウスは20世紀の建築家ヨーン・ウツソンが設計した貝殻のような屋根の革命的建築。400年の時代差があっても、人類の創造性の頂点として並び称されます。",
    "ii": "古都奈良と万里の長城はどちらも登録基準ii「文化・文明の交流」です。奈良は中国・朝鮮半島の都城制度・仏教・芸術が日本に伝わった証拠として評価されました。万里の長城は中国北方の遊牧民族との境界線として、また農耕文明と遊牧文明の交流の場として機能しました。「交流」という基準でも、その性質は平和的交流と防衛線という対照的な側面を持ちます。",
    "iii":"マチュ・ピチュとアンコール・ワットはどちらも登録基準iii「文明・文化の証拠」です。マチュ・ピチュは15世紀インカ帝国の石造建築技術と都市計画の証拠。アンコール・ワットは9〜15世紀クメール帝国の建築と水利技術の証拠。どちらも現在は消滅した文明の遺産ですが、マチュ・ピチュは征服者に発見されず、アンコールは密林に覆われて—まったく異なる形で後世に残りました。",
    "iv": "姫路城とヴェルサイユ宮殿はどちらも登録基準iv「建築・技術の傑作」ですが、その価値はまったく異なります。姫路城は17世紀日本の木造軍事建築の最高傑作。白漆喰の防火外壁と複雑な縄張りが特徴です。一方ヴェルサイユはフランス絶対王政の権威を示す宮廷建築で、左右対称の整形庭園と豪華絢爛な内装が王の力を視覚化。同じ基準でも、目的と様式は正反対です。",
    "v":  "白川郷と石見銀山はどちらも登録基準v「人と環境の関係」です。白川郷の合掌造り集落は、豪雪地帯という厳しい自然環境に適応した傾斜60度の急勾配屋根が特徴。石見銀山は16〜17世紀に採掘最盛期を迎えた銀山で、採掘・精錬・輸出を支えた都市と周辺の自然景観が一体として評価されました。どちらも「人間が環境に根ざした生活様式を作り上げた」証拠として登録されています。",
    "vi": "広島の原爆ドームとアウシュビッツはどちらも登録基準vi「信仰・出来事との関連」の負の遺産です。原爆ドームは1945年8月6日の核爆発を生き延びた建物で核兵器廃絶のシンボル。アウシュビッツはナチス・ドイツによるホロコーストの現場で110万人以上が命を失いました。「二度と繰り返してはならない」という人類共通の誓いを刻んだ場所として、共に登録されています。",
    "himeji_versailles":  "姫路城とヴェルサイユ宮殿はどちらも登録基準ivに該当しますが、その価値はまったく異なります。姫路城は17世紀日本の木造軍事建築の最高傑作。ヴェルサイユはフランス絶対王政の権威を示す宮廷建築。「建築・技術の傑作」という同じ基準でも、目的と様式は正反対です。",
    "tajmahal_sydney":    "タージ・マハルとシドニー・オペラハウスはどちらも基準i「人類の創造的傑作」です。400年の時代差があっても、人類の創造性の頂点として並び称されます。",
    "hiroshima_auschwitz":"広島の原爆ドームとアウシュビッツはどちらも基準vi「負の遺産」です。核兵器とホロコーストという異なる惨劇を、共通の誓いで結びつけています。",
    "default":            "同じ登録基準に該当する遺産でも、文化的背景・時代・地域によって価値の現れ方はまったく異なります。「なぜ同じ基準なのか」を考えることで、世界遺産の本質的な価値への理解が深まります。登録基準は単なる分類ではなく、その遺産が人類にとって何を意味するかを示す言葉なのです。"
  },
  review: {
    "asia_weak":     "アジアの遺産が苦手なようです。まず日本の26件を完全制覇することを優先しましょう。次に中国の万里の長城・故宮・兵馬俑、インドのタージ・マハルを重点的に。登録基準と登録年をセットで覚えると記憶に定着しやすいですよ。",
    "europe_weak":   "ヨーロッパの遺産が苦手なようです。建築様式との紐付けが効果的です。ゴシック→ケルン大聖堂、バロック→ヴェルサイユ、ルネサンス→フィレンツェという形でセットで覚えましょう。",
    "criteria_weak": "登録基準の理解が不足しています。基準i〜xを「文化（i〜vi）」と「自然（vii〜x）」に分けて整理しましょう。特に基準ivは最も多くの遺産に適用される重要基準です。姫路城・ヴェルサイユ・ケルン大聖堂など具体例とセットで覚えると効果的です。",
    "modern_weak":   "近代・現代の遺産が苦手なようです。産業革命関連（アイアンブリッジ・富岡製糸場・明治産業革命）と負の遺産（原爆ドーム・アウシュビッツ）を重点的に復習しましょう。20世紀の遺産は登録年が比較的新しく、世界史と合わせて学ぶと理解しやすいです。",
    "default":       "苦手な分野を集中的に復習することで、効率よく得点アップが狙えます。特に間違えた問題の「なぜ間違えたか」を確認することが大切です。登録基準・所在国・登録年の3点セットを意識して復習しましょう。"
  }
};

// 📍 CHECKPOINT: フェーズ14 完了（AI統合・mockAIData全接続済み）
const getMockAIResponse = (type, id) => {
  const data = mockAIData[type]?.[id];
  return data || mockAIData[type]?.["default"] || "解説データを準備中です。";
};

const typewriterEffect = (text, setter, speed = 28) => {
  let i = 0;
  setter("");
  const timer = setInterval(() => {
    if (i < text.length) { setter(prev => prev + text[i]); i++; }
    else clearInterval(timer);
  }, speed);
};

// ─── 共通コンポーネント ─────────────────────────────────────

function HeritageCard({ heritage, onClick }) {
  const { name, nameEn, country, countryFlag, year, type, region,
          difficulty, examFrequency, image, examTips } = heritage;

  const typeClass = type === "文化遺産" ? "badge-culture"
                  : type === "自然遺産" ? "badge-nature" : "badge-mixed";
  const diffLabel = difficulty === 1 ? "★ 基本" : difficulty === 2 ? "★★ 標準" : "★★★ 難";
  const diffClass = `badge badge-diff-${difficulty}`;
  const freqClass = examFrequency === "高" ? "badge badge-freq-high"
                  : examFrequency === "中" ? "badge badge-freq-mid" : "badge badge-freq-low";

  return (
    <div className="heritage-card" onClick={() => onClick && onClick(heritage)}>
      {image && (
        <img
          className="heritage-card-img"
          src={image}
          alt={name}
          loading="lazy"
          onError={e => { e.target.style.display = "none"; }}
        />
      )}
      <div className="heritage-card-body">
        <div className="heritage-card-name">{countryFlag} {name}</div>
        <div className="heritage-card-sub">{nameEn} · {country} · {year}年登録</div>
        <div className="heritage-card-badges">
          <span className={`badge ${typeClass}`}>{type}</span>
          <span className={diffClass}>{diffLabel}</span>
          <span className={freqClass}>出題:{examFrequency}</span>
        </div>
        {examTips && examTips.length > 0 && (
          <div className="heritage-card-tips">💡 {examTips[0]}</div>
        )}
      </div>
    </div>
  );
}

function QuizComponent({ quiz, onResult }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleChoice = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === quiz.correctIndex;
    if (onResult) onResult(isCorrect);
  };

  return (
    <div className="quiz-wrap">
      <div className="quiz-question">{quiz.question}</div>
      <div className="quiz-choices">
        {quiz.choices.map((choice, idx) => {
          let cls = "quiz-choice-btn";
          if (answered) {
            if (idx === quiz.correctIndex) cls += " correct";
            else if (idx === selected)      cls += " wrong";
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleChoice(idx)}
              disabled={answered}
            >
              {String.fromCharCode(65 + idx)}. {choice}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`quiz-feedback ${selected === quiz.correctIndex ? "correct" : "wrong"}`}>
          {selected === quiz.correctIndex ? "✅ 正解！" : "❌ 不正解"}{" "}
          {quiz.explanation}
        </div>
      )}
      {answered && onResult === undefined && (
        <button className="quiz-next-btn" onClick={() => { setSelected(null); setAnswered(false); }}>
          もう一度
        </button>
      )}
    </div>
  );
}

function YouTubeButton({ query }) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  return (
    <a className="youtube-btn" href={url} target="_blank" rel="noopener noreferrer">
      ▶ YouTube
    </a>
  );
}

function AIButton({ type, id, label = "AI解説", delay = 800 }) {
  const [loading, setLoading] = useState(false);
  const [aiText, setAiText]   = useState("");

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    setAiText("");
    setTimeout(() => {
      const text = getMockAIResponse(type, id);
      setLoading(false);
      typewriterEffect(text, setAiText);
    }, delay);
  };

  return (
    <div>
      <button className="ai-btn" onClick={handleClick} disabled={loading}>
        🤖 {label}
      </button>
      {loading && (
        <div className="ai-loading">
          <span className="spinner" />
          <span>AI解説を生成中...</span>
        </div>
      )}
      {aiText && !loading && (
        <div className="ai-response">
          <div className="ai-badge">🤖 AI解説</div>
          <p>{aiText}</p>
        </div>
      )}
    </div>
  );
}

// 📍 CHECKPOINT: フェーズ6 完了

// ─── ホーム画面 ─────────────────────────────────────────────
function HomeTab({ onNavigate, globalProgress, setGlobalProgress, examDate, setExamDate, testHistory, setTestHistory, reviewStatus, setReviewStatus }) {
  const [query, setQuery]           = useState("");
  const [results, setResults]       = useState([]);
  const [selected, setSelected]     = useState(null);
  const [showReset, setShowReset]   = useState(false);
  const [showExam, setShowExam]     = useState(false);

  // ── 検索 ──────────────────────────────────────────────────
  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.trim().toLowerCase();
    const found = allHeritageData.filter(h =>
      h.name.includes(query.trim()) ||
      h.nameEn.toLowerCase().includes(q) ||
      h.country.includes(query.trim()) ||
      (h.keywords || []).some(k => k.includes(query.trim()))
    ).slice(0, 8);
    setResults(found);
  }, [query]);

  // ── 試験日カウントダウン ────────────────────────────────
  const daysLeft = (() => {
    if (!examDate) return null;
    const diff = new Date(examDate) - new Date(new Date().toDateString());
    return Math.ceil(diff / 86400000);
  })();

  // ── 進捗計算 ────────────────────────────────────────────
  const calcPct = (obj) => {
    const vals = Object.values(obj);
    const done = vals.filter(Boolean).length;
    return { done, total: vals.length, pct: Math.round(done / vals.length * 100) };
  };

  const progressRows = [
    { label: "①基礎知識", tab: "kisochishiki", ...calcPct(globalProgress.kisochishiki) },
    { label: "②地域別",   tab: "chiikibetsu",  ...calcPct(globalProgress.chiikibetsu) },
    { label: "③時代別",   tab: "jidaibetsu",   ...calcPct(globalProgress.jidaibetsu) },
    { label: "④登録基準", tab: "kijunbetsu",   ...calcPct(globalProgress.kijunbetsu) },
    { label: "⑤苦手分析", tab: "nigatebun",    ...calcPct(globalProgress.nigatebun) },
  ];
  const overallPct = Math.round(progressRows.reduce((s, r) => s + r.pct, 0) / progressRows.length);

  // ── リセット ────────────────────────────────────────────
  const handleReset = () => {
    setGlobalProgress({
      kisochishiki: { A: false, B: false, C: false, D: false, E: false },
      chiikibetsu:  { asia: false, europe: false, africa: false, middleEast: false, northAmerica: false, southAmerica: false, oceania: false },
      jidaibetsu:   { ancient: false, classical: false, medieval: false, earlyModern: false, modern: false, contemporary: false },
      kijunbetsu:   { i: false, ii: false, iii: false, iv: false, v: false, vi: false, vii: false, viii: false, ix: false, x: false },
      nigatebun:    { analyzed: false }
    });
    setTestHistory([]);
    setReviewStatus({});
    setExamDate("");
    setShowReset(false);
  };

  return (
    <div>
      {/* ヘッダー */}
      <div className="home-header">
        <div className="home-header-title">🌍 世界遺産検定 学習アプリ</div>
        <div className="home-header-sub">2級・準1級対策 · 全{allHeritageData.length}件収録</div>
        <div style={{ marginTop: 10, fontSize: 13, opacity: 0.9 }}>
          総合進捗 <strong>{overallPct}%</strong>
        </div>
        <div className="progress-bar-wrap" style={{ marginTop: 6, background: "rgba(255,255,255,0.3)" }}>
          <div className="progress-bar-fill" style={{ width: `${overallPct}%`, background: "rgba(255,255,255,0.8)" }} />
        </div>
      </div>

      {/* 検索バー */}
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder="遺産名・国名・キーワードで検索..."
          value={query}
          onChange={e => { setQuery(e.target.value); setSelected(null); }}
        />
        {results.length > 0 && (
          <div className="search-results">
            {results.map(h => (
              <div key={h.id} className="search-result-item" onClick={() => { setSelected(h); setQuery(""); setResults([]); }}>
                <span className="search-result-flag">{h.countryFlag}</span>
                <div>
                  <div className="search-result-name">{h.name}</div>
                  <div className="search-result-sub">{h.country} · {h.year}年 · {h.type}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 検索結果詳細 */}
      {selected && (
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{selected.countryFlag} {selected.name}</div>
            <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", color: "var(--color-text-light)" }}>✕</button>
          </div>
          <div style={{ fontSize: 12, color: "var(--color-text-light)", margin: "4px 0 8px" }}>
            {selected.country} · {selected.year}年 · {selected.type}
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 10 }}>{selected.description}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {selected.criteria.map(c => (
              <span key={c} className="badge badge-criteria">基準{c}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <YouTubeButton query={selected.youtubeQuery || selected.name} />
            <AIButton type="story" id={selected.id} label="AIストーリー" delay={1000} />
          </div>
        </div>
      )}

      {/* 試験日カード */}
      <div className="exam-card">
        <div className="exam-card-label">📅 試験日設定</div>
        <div className="exam-date-row">
          <input
            className="exam-date-input"
            type="date"
            value={examDate}
            onChange={e => setExamDate(e.target.value)}
          />
          {daysLeft !== null && (
            <div>
              {daysLeft > 0
                ? <div className="exam-countdown">あと{daysLeft}日</div>
                : daysLeft === 0
                  ? <div className="exam-countdown" style={{ color: "var(--color-accent)" }}>試験当日！</div>
                  : <div className="exam-countdown" style={{ color: "#888", fontSize: 16 }}>試験終了</div>
              }
            </div>
          )}
        </div>
        {!examDate && (
          <div className="exam-countdown-sub" style={{ marginTop: 6 }}>試験日を設定するとカウントダウンが表示されます</div>
        )}
      </div>

      {/* 進捗テーブル */}
      <div className="card">
        <div className="card-title">📊 学習進捗</div>
        <table className="progress-table">
          <thead>
            <tr>
              <th>タブ</th>
              <th>進捗</th>
              <th style={{ width: 80 }}>完了率</th>
            </tr>
          </thead>
          <tbody>
            {progressRows.map(r => (
              <tr key={r.tab} onClick={() => onNavigate(r.tab)} style={{ cursor: "pointer" }}>
                <td style={{ fontWeight: 600 }}>{r.label}</td>
                <td>
                  <div className="progress-mini-bar">
                    <div className="progress-mini-fill" style={{ width: `${r.pct}%` }} />
                  </div>
                </td>
                <td style={{ fontSize: 13, fontWeight: 700, color: r.pct === 100 ? "#2e8b57" : "var(--color-text)" }}>
                  {r.pct}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* テスト履歴 */}
      {testHistory.length > 0 && (
        <div className="card">
          <div className="card-title">📝 最近の学習履歴</div>
          {testHistory.slice(-5).reverse().map((h, i) => (
            <div key={i} className="history-item">
              <div>
                <div style={{ fontWeight: 600 }}>{h.section}</div>
                <div className="history-date">{new Date(h.date).toLocaleDateString("ja-JP")}</div>
              </div>
              <div className="history-score">
                {h.correct}/{h.total}問 ({Math.round(h.correct / h.total * 100)}%)
              </div>
            </div>
          ))}
        </div>
      )}

      {/* クイックリンク */}
      <div className="card">
        <div className="card-title">🚀 学習を始める</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { label: "①基礎知識", tab: "kisochishiki", emoji: "📖" },
            { label: "②地域別",   tab: "chiikibetsu",  emoji: "🗺️" },
            { label: "③時代別",   tab: "jidaibetsu",   emoji: "⏳" },
            { label: "④登録基準", tab: "kijunbetsu",   emoji: "⭐" },
          ].map(({ label, tab, emoji }) => (
            <button
              key={tab}
              className="btn btn-ghost"
              style={{ justifyContent: "flex-start", padding: "12px" }}
              onClick={() => onNavigate(tab)}
            >
              {emoji} {label}
            </button>
          ))}
        </div>
        <button
          className="btn btn-primary"
          style={{ width: "100%", marginTop: 12, justifyContent: "center", fontSize: 15, padding: "14px" }}
          onClick={() => setShowExam(true)}
        >
          📝 模擬試験（60問・60分）
        </button>
      </div>

      {/* 模擬試験モーダル */}
      {showExam && (
        <MockExam
          onClose={() => setShowExam(false)}
          setTestHistory={setTestHistory}
        />
      )}

      {/* リセット */}
      <div className="card">
        <div className="card-title" style={{ fontSize: 13, color: "var(--color-text-light)" }}>⚙️ データ管理</div>
        {!showReset ? (
          <button className="reset-btn" onClick={() => setShowReset(true)}>
            🗑️ 学習データをリセット
          </button>
        ) : (
          <div>
            <div style={{ fontSize: 13, marginBottom: 10, color: "#dc2626" }}>
              本当にリセットしますか？進捗・履歴・試験日がすべて削除されます。
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="reset-btn" style={{ flex: 1 }} onClick={handleReset}>
                削除する
              </button>
              <button
                className="btn btn-ghost"
                style={{ flex: 1, justifyContent: "center" }}
                onClick={() => setShowReset(false)}
              >
                キャンセル
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 📍 CHECKPOINT: フェーズ7 完了

// ─── セクションAクイズデータ（UNESCO基礎知識） ──────────────
const sectionAQuizzes = [
  { question: "世界遺産条約が採択されたのは何年？",
    choices: ["1960年", "1972年", "1975年", "1985年"], correctIndex: 1,
    explanation: "1972年にユネスコ総会（パリ）で採択。発効は1975年。「世界の文化遺産及び自然遺産の保護に関する条約」が正式名称。" },
  { question: "世界遺産委員会の委員国数は？",
    choices: ["15カ国", "18カ国", "21カ国", "25カ国"], correctIndex: 2,
    explanation: "21カ国で構成。世界遺産条約締約国の中から選出され、任期は4年（または6年）。" },
  { question: "文化遺産の審査を行う専門機関は？",
    choices: ["IUCN", "ICOMOS", "ICCROM", "UNESCO"], correctIndex: 1,
    explanation: "ICOMOS（国際記念物遺跡会議）が文化遺産を担当。自然遺産はIUCN（国際自然保護連合）が担当。" },
  { question: "世界遺産の総件数は？（2024年時点）",
    choices: ["900件", "1061件", "1199件", "1350件"], correctIndex: 2,
    explanation: "2024年現在1199件（文化遺産933件・自然遺産227件・複合遺産39件）。" },
  { question: "「顕著な普遍的価値」を英語で何という？",
    choices: ["OUV", "WHC", "UNESCO", "WHI"], correctIndex: 0,
    explanation: "Outstanding Universal Value（OUV）。世界遺産登録の核心となる概念。" },
  { question: "日本の世界遺産の件数は？（2024年時点）",
    choices: ["20件", "23件", "25件", "26件"], correctIndex: 3,
    explanation: "2024年現在26件（文化遺産21件・自然遺産5件）。" },
  { question: "危機遺産リストに登録される遺産とは？",
    choices: ["登録取消が決定した遺産", "保護が脅かされている遺産", "未来の世界遺産候補", "修復が完了した遺産"], correctIndex: 1,
    explanation: "「危機にさらされている世界遺産リスト（危機遺産リスト）」は、保護・保全が危機にある遺産を掲載。" },
  { question: "世界遺産から初めて登録取消された遺産は？",
    choices: ["バーミヤン渓谷", "ドレスデン・エルベ渓谷", "アラビアオリックス保護区", "リヴァプール港"], correctIndex: 2,
    explanation: "アラビアオリックス保護区（オマーン）が2007年に初の登録取消。保護区の大幅縮小が理由。" },
];

// 📍 CHECKPOINT: フェーズ8 完了

const sectionCQuizzes = [
  { question: "富士山の世界遺産種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "景観遺産"], correctIndex: 0,
    explanation: "富士山は「信仰の対象と芸術の源泉」として文化遺産（2013年登録・基準iii・vi）。自然遺産ではない点が頻出！" },
  { question: "屋久島の世界遺産種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "文化的景観"], correctIndex: 1,
    explanation: "屋久島は屋久杉の巨大な森が評価された自然遺産（1993年・基準vii・ix）。" },
  { question: "アンコール遺跡群の種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "文化的景観"], correctIndex: 0,
    explanation: "クメール帝国の建築・芸術の傑作として文化遺産（基準i〜iv）。" },
  { question: "タスマニア原生地域の種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "危機遺産"], correctIndex: 2,
    explanation: "アボリジニの文化的景観と優れた自然の両方が評価された複合遺産。" },
  { question: "白川郷・五箇山の種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "文化的景観"], correctIndex: 0,
    explanation: "合掌造り集落の伝統的居住形態として文化遺産（基準iv・v）。自然遺産ではない点に注意！" },
  { question: "マチュ・ピチュの種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "景観遺産"], correctIndex: 2,
    explanation: "インカ遺跡（文化）とアンデスの山岳景観（自然）の両方が評価された複合遺産。" },
  { question: "知床の種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "危機遺産"], correctIndex: 1,
    explanation: "流氷がもたらす豊かな生態系が評価された自然遺産（2005年・基準ix・x）。" },
  { question: "小笠原諸島の種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "文化的景観"], correctIndex: 1,
    explanation: "「東洋のガラパゴス」として固有種の多い生態系が評価された自然遺産（2011年・基準x）。" },
  { question: "ピレネー山脈のモン・ペルデュの種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "景観遺産"], correctIndex: 2,
    explanation: "フランス・スペイン共同登録の複合遺産。山岳景観と牧畜文化の両方が評価。" },
  { question: "ガラパゴス諸島の種別は？",
    choices: ["文化遺産", "自然遺産", "複合遺産", "危機遺産"], correctIndex: 1,
    explanation: "ダーウィンの進化論にも影響した独自の生態系が評価された自然遺産（基準vii〜x・全4基準）。" },
];

const sectionEQuizzes = [
  { question: "ケルン大聖堂の建築様式は？",
    choices: ["ロマネスク様式", "ゴシック様式", "バロック様式", "ルネサンス様式"], correctIndex: 1,
    explanation: "尖頭アーチ・ステンドグラス・飛び梁がゴシック様式の証。ケルン大聖堂は632年かけて完成。" },
  { question: "ヴェルサイユ宮殿の建築様式は？",
    choices: ["ゴシック様式", "ルネサンス様式", "バロック様式", "ロマネスク様式"], correctIndex: 2,
    explanation: "豪華な装飾・整形庭園・動的なデザインがバロック様式の特徴。絶対王政の権威の象徴。" },
  { question: "タージ・マハルの建築様式は？",
    choices: ["ヒンドゥー建築", "イスラム建築", "バロック様式", "仏教建築"], correctIndex: 1,
    explanation: "ミナレット・アーチドーム・アラベスク装飾がイスラム建築の特徴。ムガル帝国様式の最高傑作。" },
  { question: "アンコール・ワットの建築様式は？",
    choices: ["イスラム建築", "仏教建築", "ヒンドゥー建築", "バロック様式"], correctIndex: 2,
    explanation: "シカラ（曲線の塔）・マンダパ・彫刻に覆われた外壁がヒンドゥー建築の特徴。" },
  { question: "「飛び梁（フライング・バットレス）」はどの様式？",
    choices: ["バロック様式", "ロマネスク様式", "ゴシック様式", "ルネサンス様式"], correctIndex: 2,
    explanation: "飛び梁はゴシック様式の工法。外から壁を支え、薄い壁に大きなステンドグラスを可能にした。" },
  { question: "ボロブドゥール寺院の建築様式は？",
    choices: ["ヒンドゥー建築", "イスラム建築", "仏教建築（東南アジア）", "ロマネスク様式"], correctIndex: 2,
    explanation: "ストゥーパと仏像が並ぶ「石の曼荼羅」。仏教建築（東南アジア）の最高傑作。" },
  { question: "「ミナレット（尖塔）」はどの様式の特徴？",
    choices: ["ヒンドゥー建築", "仏教建築", "ゴシック様式", "イスラム建築"], correctIndex: 3,
    explanation: "ミナレットはモスクの尖塔。アザーン（礼拝の呼びかけ）に使われるイスラム建築の特徴。" },
  { question: "姫路城の建築様式は？",
    choices: ["バロック様式", "日本の城郭建築", "ルネサンス様式", "ゴシック様式"], correctIndex: 1,
    explanation: "石垣・堀・天守閣・白漆喰が日本城郭建築の特徴。姫路城は「白鷺城」とも呼ばれる。" },
];

// ─── ①基礎知識タブ ─────────────────────────────────────────
function KisochishikiTab({ onNavigate, globalProgress, setGlobalProgress, testHistory, setTestHistory }) {
  const [section, setSection] = useState("A");
  // Section A state
  const [quizIdx, setQuizIdx]       = useState(0);
  const [quizResults, setQuizResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  // Section B state
  const [openCriteria, setOpenCriteria] = useState(null);
  // Section C state
  const [quizCIdx, setQuizCIdx]       = useState(0);
  const [quizCRes, setQuizCRes]       = useState([]);
  const [showResC, setShowResC]       = useState(false);
  // Section D state
  const [showTrickAll, setShowTrickAll] = useState(false);
  const [trickIdx, setTrickIdx]         = useState(0);
  const [trickRes, setTrickRes]         = useState([]);
  const [showTrickRes, setShowTrickRes] = useState(false);
  // Section E state
  const [openStyle, setOpenStyle]   = useState(null);
  const [quizEIdx, setQuizEIdx]     = useState(0);
  const [quizERes, setQuizERes]     = useState([]);
  const [showResE, setShowResE]     = useState(false);
  const [eMode, setEMode]           = useState("study");

  const prog = globalProgress.kisochishiki;

  const markDone = (key) => {
    setGlobalProgress(prev => ({
      ...prev,
      kisochishiki: { ...prev.kisochishiki, [key]: true }
    }));
  };

  // ── Section A: UNESCO基礎知識 ─────────────────────────────
  const handleQuizResult = (isCorrect) => {
    const updated = [...quizResults, isCorrect];
    setQuizResults(updated);
    if (updated.length === sectionAQuizzes.length) {
      const correct = updated.filter(Boolean).length;
      setTestHistory(prev => [...prev, {
        section: "①基礎知識 A：UNESCO基礎",
        correct, total: sectionAQuizzes.length,
        date: Date.now()
      }]);
      markDone("A");
      setShowResult(true);
    } else {
      setTimeout(() => setQuizIdx(i => i + 1), 900);
    }
  };

  const resetSectionA = () => {
    setQuizIdx(0); setQuizResults([]); setShowResult(false);
  };

  const scoreA = quizResults.filter(Boolean).length;
  const pctA   = sectionAQuizzes.length ? Math.round(scoreA / sectionAQuizzes.length * 100) : 0;

  const resultMsg = pctA === 100 ? "🎉 満点！完璧です！"
                  : pctA >= 75  ? "👏 よくできました！"
                  : pctA >= 50  ? "📖 もう少し復習しましょう"
                                : "💪 繰り返し学習が大切です";

  const renderSectionA = () => (
    <div>
      <div className="section-title">🏛️ セクションA：UNESCO・世界遺産条約の基礎</div>
      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 12, color: "var(--color-text-light)", marginBottom: 8 }}>
          世界遺産検定2級で必須の基礎知識を確認します。全{sectionAQuizzes.length}問
        </div>
        {!showResult ? (
          <>
            <div style={{ fontSize: 12, color: "var(--color-text-light)", marginBottom: 12 }}>
              問題 {Math.min(quizIdx + 1, sectionAQuizzes.length)} / {sectionAQuizzes.length}
              &nbsp;·&nbsp;正解 {quizResults.filter(Boolean).length}問
            </div>
            <div className="progress-bar-wrap" style={{ marginBottom: 16 }}>
              <div className="progress-bar-fill" style={{ width: `${(quizIdx / sectionAQuizzes.length) * 100}%` }} />
            </div>
            <QuizComponent
              key={quizIdx}
              quiz={sectionAQuizzes[quizIdx]}
              onResult={handleQuizResult}
            />
          </>
        ) : (
          <div className="quiz-result-wrap">
            <div className="quiz-result-score">{scoreA}/{sectionAQuizzes.length}</div>
            <div className="quiz-result-label">正解数 ({pctA}%)</div>
            <div className="quiz-result-msg">{resultMsg}</div>
            <div style={{ marginTop: 16, display: "flex", gap: 8, justifyContent: "center" }}>
              <button className="btn btn-primary" onClick={resetSectionA}>もう一度</button>
              <button className="btn btn-ghost" onClick={() => setSection("B")}>次のセクションへ →</button>
            </div>
          </div>
        )}
      </div>

      {/* 重要数字まとめ */}
      <div className="card">
        <div className="card-title">📊 重要数字まとめ</div>
        {[
          ["条約採択", "1972年（パリ）"],
          ["条約発効", "1975年"],
          ["世界遺産総数", "1199件（2024年）"],
          ["文化遺産",     "933件"],
          ["自然遺産",     "227件"],
          ["複合遺産",     "39件"],
          ["委員国数",     "21カ国"],
          ["日本の件数",   "26件（文化21・自然5）"],
          ["初の取消",     "2007年アラビアオリックス保護区"],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid var(--color-border)", fontSize: 13 }}>
            <span style={{ color: "var(--color-text-light)" }}>{k}</span>
            <span style={{ fontWeight: 700 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // ── Section B: 登録基準 i〜x ────────────────────────────
  const handleCriteriaView = (id) => {
    setOpenCriteria(prev => prev === id ? null : id);
    const viewed = criteriaData.filter(c => c.id !== id || openCriteria !== c.id).length;
    if (criteriaData.every(c => c.id === id || openCriteria === c.id)) markDone("B");
  };

  const renderSectionB = () => (
    <div>
      <div className="section-title">⭐ セクションB：登録基準 i〜x</div>
      <div className="card" style={{ marginBottom: 12, fontSize: 13, lineHeight: 1.6 }}>
        登録基準は<strong>i〜vi が文化遺産</strong>、<strong>vii〜x が自然遺産</strong>。
        複合遺産は両方の基準を持ちます。各カードをタップして詳細を確認しましょう。
        <div style={{ marginTop: 8 }}>
          <button className="btn btn-primary" style={{ fontSize: 12 }} onClick={() => markDone("B")}>
            ✅ このセクション完了
          </button>
        </div>
      </div>

      {criteriaData.map(c => {
        const isOpen = openCriteria === c.id;
        const bgColor = c.type === "文化" ? "rgba(255,143,171,0.08)" : "rgba(181,234,215,0.12)";
        const numColor = c.color;
        return (
          <div key={c.id} className="criteria-card">
            <div
              className="criteria-card-header"
              style={{ background: bgColor }}
              onClick={() => handleCriteriaView(c.id)}
            >
              <div className="criteria-num" style={{ background: numColor }}>{c.id}</div>
              <div style={{ flex: 1 }}>
                <div className="criteria-card-title">{c.label}</div>
                <div className="criteria-card-type">{c.type}遺産基準</div>
              </div>
              <div className="criteria-chevron">{isOpen ? "▲" : "▼"}</div>
            </div>
            {isOpen && (
              <div className="criteria-card-body">
                <div className="criteria-desc">{c.description}</div>
                {c.examTips && c.examTips.map((t, i) => (
                  <div key={i} className="criteria-tip">💡 {t}</div>
                ))}
                <div style={{ marginBottom: 6, fontSize: 12, fontWeight: 600, color: "var(--color-text-light)" }}>代表的な遺産</div>
                <div className="criteria-heritages">
                  {c.heritages.map(h => (
                    <span key={h} className="criteria-heritage-tag">{h}</span>
                  ))}
                </div>
                {c.comparePair && (
                  <div style={{ fontSize: 12, background: "rgba(255,209,102,0.15)", padding: "8px 10px", borderRadius: "6px", marginBottom: 10 }}>
                    🔍 比較ポイント：<strong>{c.comparePair.a}</strong> vs <strong>{c.comparePair.b}</strong>
                  </div>
                )}
                <AIButton type="explanation" id={c.id} label={`基準${c.id}をAI解説`} delay={700} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // ── Section C: 遺産の分類クイズ ──────────────────────────
  const handleCResult = (ok) => {
    const updated = [...quizCRes, ok];
    setQuizCRes(updated);
    if (updated.length === sectionCQuizzes.length) {
      setTestHistory(prev => [...prev, {
        section: "①基礎知識 C：遺産分類",
        correct: updated.filter(Boolean).length, total: sectionCQuizzes.length,
        date: Date.now()
      }]);
      markDone("C");
      setShowResC(true);
    } else {
      setTimeout(() => setQuizCIdx(i => i + 1), 900);
    }
  };

  const renderSectionC = () => {
    const scoreC = quizCRes.filter(Boolean).length;
    const pctC   = sectionCQuizzes.length ? Math.round(scoreC / sectionCQuizzes.length * 100) : 0;
    return (
      <div>
        <div className="section-title">🏷️ セクションC：遺産の種別分類</div>
        <div className="card" style={{ marginBottom: 12, fontSize: 13 }}>
          文化遺産・自然遺産・複合遺産を見分けるクイズ。全{sectionCQuizzes.length}問
        </div>
        <div className="card">
          {!showResC ? (
            <>
              <div style={{ fontSize: 12, color: "var(--color-text-light)", marginBottom: 8 }}>
                問題 {Math.min(quizCIdx+1, sectionCQuizzes.length)} / {sectionCQuizzes.length}
              </div>
              <div className="progress-bar-wrap" style={{ marginBottom: 14 }}>
                <div className="progress-bar-fill" style={{ width: `${(quizCIdx / sectionCQuizzes.length) * 100}%` }} />
              </div>
              <QuizComponent key={quizCIdx} quiz={sectionCQuizzes[quizCIdx]} onResult={handleCResult} />
            </>
          ) : (
            <div className="quiz-result-wrap">
              <div className="quiz-result-score">{scoreC}/{sectionCQuizzes.length}</div>
              <div className="quiz-result-label">正解数 ({pctC}%)</div>
              <div className="quiz-result-msg">
                {pctC===100?"🎉 満点！": pctC>=70?"👏 よくできました！": "📖 もう少し復習しましょう"}
              </div>
              <div style={{ marginTop:14, display:"flex", gap:8, justifyContent:"center" }}>
                <button className="btn btn-primary" onClick={() => { setQuizCIdx(0); setQuizCRes([]); setShowResC(false); }}>
                  もう一度
                </button>
                <button className="btn btn-ghost" onClick={() => setSection("D")}>次へ →</button>
              </div>
            </div>
          )}
        </div>
        <div className="card">
          <div className="card-title">📌 種別の覚え方</div>
          {[
            ["文化遺産", "#FF8FAB", "建築・遺跡・芸術・信仰・産業 → 人間が作ったもの"],
            ["自然遺産", "#2e8b57", "自然美・地形・生態系・生物多様性 → 自然が作ったもの"],
            ["複合遺産", "#6a4ca8", "文化基準(i〜vi) + 自然基準(vii〜x) の両方を満たす"],
          ].map(([t, c, d]) => (
            <div key={t} style={{ display:"flex", gap:10, padding:"8px 0", borderBottom:"1px solid var(--color-border)", alignItems:"flex-start" }}>
              <span className="badge" style={{ background:`${c}20`, color:c, whiteSpace:"nowrap", marginTop:2 }}>{t}</span>
              <span style={{ fontSize:13, lineHeight:1.5 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ── Section D: 危機遺産・抹消遺産・ひっかけ ──────────────
  const trickQuizzes = trickQuestions.map((t, i) => ({
    question: `次のうち正しい記述はどれ？（問${i+1}）`,
    choices: [t.trap, t.correct, `どちらも正しい`, `どちらも誤り`],
    correctIndex: 1,
    explanation: `❌ よくある誤解「${t.trap}」→ ✅ 正しくは「${t.correct}」`
  }));

  const handleTrickResult = (ok) => {
    const updated = [...trickRes, ok];
    setTrickRes(updated);
    if (updated.length === trickQuizzes.length) {
      setTestHistory(prev => [...prev, {
        section: "①基礎知識 D：ひっかけ問題",
        correct: updated.filter(Boolean).length, total: trickQuizzes.length,
        date: Date.now()
      }]);
      markDone("D");
      setShowTrickRes(true);
    } else {
      setTimeout(() => setTrickIdx(i => i + 1), 900);
    }
  };

  const renderSectionD = () => {
    const scoreD = trickRes.filter(Boolean).length;
    const pctD   = trickQuizzes.length ? Math.round(scoreD / trickQuizzes.length * 100) : 0;
    return (
      <div>
        <div className="section-title">⚠️ セクションD：危機遺産・ひっかけ問題</div>

        {/* 危機遺産リスト */}
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card-title">🚨 注目の危機遺産・登録取消</div>
          {[
            { name:"アラビアオリックス保護区", country:"🇴🇲 オマーン", note:"2007年・初の登録取消（保護区縮小）", color:"#dc2626" },
            { name:"ドレスデン・エルベ渓谷", country:"🇩🇪 ドイツ", note:"2009年・登録取消（橋建設）", color:"#dc2626" },
            { name:"リヴァプール海商都市", country:"🇬🇧 イギリス", note:"2021年・登録取消（港湾開発）", color:"#dc2626" },
            { name:"コソボの中世建造物群", country:"🇽🇰 コソボ", note:"危機遺産継続中", color:"#f59e0b" },
            { name:"ウィーン歴史地区", country:"🇦🇹 オーストリア", note:"高層ビル建設で危機遺産入り", color:"#f59e0b" },
          ].map(item => (
            <div key={item.name} style={{ padding:"8px 0", borderBottom:"1px solid var(--color-border)", fontSize:13 }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <strong>{item.country} {item.name}</strong>
                <span style={{ fontSize:11, color:item.color, fontWeight:700 }}>{item.color==="#dc2626"?"❌ 取消":"⚠️ 危機"}</span>
              </div>
              <div style={{ fontSize:11, color:"var(--color-text-light)", marginTop:2 }}>{item.note}</div>
            </div>
          ))}
        </div>

        {/* ひっかけクイズ */}
        <div className="card">
          <div className="card-title">🪤 ひっかけ問題クイズ（全{trickQuizzes.length}問）</div>
          {!showTrickAll ? (
            <button className="btn btn-primary" onClick={() => setShowTrickAll(true)}>クイズを開始</button>
          ) : !showTrickRes ? (
            <>
              <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:8 }}>
                問題 {Math.min(trickIdx+1, trickQuizzes.length)} / {trickQuizzes.length}
              </div>
              <div className="progress-bar-wrap" style={{ marginBottom:14 }}>
                <div className="progress-bar-fill" style={{ width:`${(trickIdx/trickQuizzes.length)*100}%` }} />
              </div>
              <QuizComponent key={trickIdx} quiz={trickQuizzes[trickIdx]} onResult={handleTrickResult} />
            </>
          ) : (
            <div className="quiz-result-wrap">
              <div className="quiz-result-score">{scoreD}/{trickQuizzes.length}</div>
              <div className="quiz-result-label">正解数 ({pctD}%)</div>
              <div className="quiz-result-msg">
                {pctD===100?"🎉 ひっかけを全部見抜いた！": pctD>=70?"👏 惜しい！もう一度確認を": "⚠️ ひっかけに注意！"}
              </div>
              <div style={{ marginTop:14, display:"flex", gap:8, justifyContent:"center" }}>
                <button className="btn btn-primary" onClick={() => { setTrickIdx(0); setTrickRes([]); setShowTrickRes(false); }}>
                  もう一度
                </button>
                <button className="btn btn-ghost" onClick={() => setSection("E")}>次へ →</button>
              </div>
            </div>
          )}
        </div>

        {/* ひっかけ一覧 */}
        <div className="card">
          <div className="card-title">📋 ひっかけポイント一覧</div>
          {trickQuestions.map(t => (
            <div key={t.id} style={{ padding:"8px 0", borderBottom:"1px solid var(--color-border)", fontSize:13 }}>
              <div style={{ color:"#dc2626", fontSize:12 }}>❌ {t.trap}</div>
              <div style={{ color:"#2e8b57", fontSize:12, marginTop:2 }}>✅ {t.correct}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ── Section E: 建築様式 ────────────────────────────────────
  const handleEResult = (ok) => {
    const updated = [...quizERes, ok];
    setQuizERes(updated);
    if (updated.length === sectionEQuizzes.length) {
      setTestHistory(prev => [...prev, {
        section: "①基礎知識 E：建築様式",
        correct: updated.filter(Boolean).length, total: sectionEQuizzes.length,
        date: Date.now()
      }]);
      markDone("E");
      setShowResE(true);
    } else {
      setTimeout(() => setQuizEIdx(i => i + 1), 900);
    }
  };

  const renderSectionE = () => {
    const scoreE = quizERes.filter(Boolean).length;
    const pctE   = sectionEQuizzes.length ? Math.round(scoreE / sectionEQuizzes.length * 100) : 0;
    return (
      <div>
        <div className="section-title">🏛️ セクションE：建築様式</div>
        <div style={{ display:"flex", gap:8, marginBottom:14 }}>
          <button className={`section-tab-btn${eMode==="study"?" active":""}`} onClick={() => setEMode("study")}>📚 学習</button>
          <button className={`section-tab-btn${eMode==="quiz"?" active":""}`} onClick={() => setEMode("quiz")}>📝 クイズ</button>
        </div>

        {eMode === "study" && (
          <div>
            {architectureStyles.map(s => (
              <div key={s.id} className="criteria-card">
                <div
                  className="criteria-card-header"
                  style={{ background:"rgba(168,216,234,0.1)" }}
                  onClick={() => setOpenStyle(prev => prev===s.id ? null : s.id)}
                >
                  <div style={{ fontSize:24, width:36, textAlign:"center" }}>🏛️</div>
                  <div style={{ flex:1 }}>
                    <div className="criteria-card-title">{s.name}</div>
                    <div className="criteria-card-type">{s.era}</div>
                  </div>
                  <div className="criteria-chevron">{openStyle===s.id ? "▲" : "▼"}</div>
                </div>
                {openStyle === s.id && (
                  <div className="criteria-card-body">
                    <div className="criteria-tip">💡 試験ポイント：{s.tips}</div>
                    <div style={{ marginBottom:6, fontSize:12, fontWeight:600, color:"var(--color-text-light)" }}>特徴</div>
                    <div className="criteria-heritages" style={{ marginBottom:10 }}>
                      {s.features.map(f => <span key={f} className="criteria-heritage-tag">{f}</span>)}
                    </div>
                    <div style={{ marginBottom:6, fontSize:12, fontWeight:600, color:"var(--color-text-light)" }}>代表的な遺産</div>
                    <div className="criteria-heritages">
                      {s.examples.map(e => <span key={e} className="criteria-heritage-tag">{e}</span>)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {eMode === "quiz" && (
          <div className="card">
            <div className="card-title">建築様式識別クイズ（全{sectionEQuizzes.length}問）</div>
            {!showResE ? (
              <>
                <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:8 }}>
                  問題 {Math.min(quizEIdx+1, sectionEQuizzes.length)} / {sectionEQuizzes.length}
                </div>
                <div className="progress-bar-wrap" style={{ marginBottom:14 }}>
                  <div className="progress-bar-fill" style={{ width:`${(quizEIdx/sectionEQuizzes.length)*100}%` }} />
                </div>
                <QuizComponent key={quizEIdx} quiz={sectionEQuizzes[quizEIdx]} onResult={handleEResult} />
              </>
            ) : (
              <div className="quiz-result-wrap">
                <div className="quiz-result-score">{scoreE}/{sectionEQuizzes.length}</div>
                <div className="quiz-result-label">正解数 ({pctE}%)</div>
                <div className="quiz-result-msg">
                  {pctE===100?"🎉 建築様式マスター！": pctE>=75?"👏 よくできました！": "📖 様式の特徴を再確認しよう"}
                </div>
                <div style={{ marginTop:14, display:"flex", gap:8, justifyContent:"center" }}>
                  <button className="btn btn-primary" onClick={() => { setQuizEIdx(0); setQuizERes([]); setShowResE(false); }}>
                    もう一度
                  </button>
                  <button className="btn btn-ghost" onClick={() => setEMode("study")}>学習に戻る</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const sections = [
    { id: "A", label: "A：UNESCO基礎", done: prog.A },
    { id: "B", label: "B：登録基準",   done: prog.B },
    { id: "C", label: "C：分類",       done: prog.C },
    { id: "D", label: "D：危機遺産",   done: prog.D },
    { id: "E", label: "E：建築様式",   done: prog.E },
  ];

  return (
    <div>
      <div style={{ marginBottom: 4, fontSize: 12, color: "var(--color-text-light)" }}>
        完了: {Object.values(prog).filter(Boolean).length} / {Object.values(prog).length} セクション
      </div>
      <div className="section-tabs">
        {sections.map(s => (
          <button
            key={s.id}
            className={`section-tab-btn${section === s.id ? " active" : s.done ? " done" : ""}`}
            onClick={() => setSection(s.id)}
          >
            {s.done && section !== s.id ? "✅ " : ""}{s.label}
          </button>
        ))}
      </div>

      {section === "A" && renderSectionA()}
      {section === "B" && renderSectionB()}
      {section === "C" && renderSectionC()}
      {section === "D" && renderSectionD()}
      {section === "E" && renderSectionE()}
    </div>
  );
}

// 📍 CHECKPOINT: フェーズ9 完了

// ─── 地域定義 ─────────────────────────────────────────────
const REGIONS = [
  { id:"asia",         label:"アジア（日本含む）", emoji:"🌏", color:"rgba(255,143,171,0.15)",  border:"#FF8FAB" },
  { id:"europe",       label:"ヨーロッパ",         emoji:"🏰", color:"rgba(168,216,234,0.2)",   border:"#A8D8EA" },
  { id:"africa",       label:"アフリカ",            emoji:"🦁", color:"rgba(255,209,102,0.2)",   border:"#FFD166" },
  { id:"middleEast",   label:"中東",               emoji:"🕌", color:"rgba(201,177,255,0.2)",   border:"#C9B1FF" },
  { id:"northAmerica", label:"北米・中米",          emoji:"🗽", color:"rgba(181,234,215,0.2)",   border:"#B5EAD7" },
  { id:"southAmerica", label:"南米",               emoji:"🦜", color:"rgba(255,180,120,0.2)",   border:"#FFB478" },
  { id:"oceania",      label:"オセアニア",          emoji:"🦘", color:"rgba(160,220,180,0.2)",   border:"#A0DCB4" },
];

// ─── 遺産詳細モーダル ──────────────────────────────────────
function HeritageDetailModal({ heritage, onClose }) {
  if (!heritage) return null;
  const { name, nameEn, country, countryFlag, year, type, criteria,
          description, examTips, image, youtubeQuery } = heritage;
  const typeClass = type === "文化遺産" ? "badge-culture"
                  : type === "自然遺産" ? "badge-nature" : "badge-mixed";
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        {image && (
          <img
            className="heritage-detail-img"
            src={image}
            alt={name}
            onError={e => { e.target.style.display = "none"; }}
          />
        )}
        <div className="heritage-detail-name">{countryFlag} {name}</div>
        <div className="heritage-detail-sub">{nameEn} · {country} · {year}年登録</div>
        <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginBottom:12 }}>
          <span className={`badge ${typeClass}`}>{type}</span>
          {criteria.map(c => (
            <span key={c} className="badge badge-criteria">基準{c}</span>
          ))}
        </div>
        <div className="heritage-detail-desc">{description}</div>
        {examTips && examTips.length > 0 && (
          <div className="heritage-detail-tips">
            <div style={{ fontSize:12, fontWeight:700, color:"var(--color-text-light)", marginBottom:6 }}>📝 試験ポイント</div>
            {examTips.map((t, i) => (
              <div key={i} className="heritage-detail-tip">💡 {t}</div>
            ))}
          </div>
        )}
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:8 }}>
          <YouTubeButton query={youtubeQuery || name} />
          <AIButton type="story" id={heritage.id} label="AIストーリー" delay={1000} />
        </div>
        <button className="modal-close-btn" onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
}

// 📍 CHECKPOINT: フェーズ10 完了

// クイズ作成ヘルパー
const makeQuiz = (question, correct, wrongs, explanation) => {
  const pool = [correct, ...wrongs.filter(w => w !== correct).slice(0, 3)];
  while (pool.length < 4) pool.push("—");
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return { question, choices: shuffled, correctIndex: shuffled.indexOf(correct), explanation };
};

// ─── ②地域別タブ（フェーズ9+10統合版） ───────────────────────
function ChiikibetsuTab({ onNavigate, globalProgress, setGlobalProgress, testHistory, setTestHistory }) {
  const [selectedRegion,  setSelectedRegion]  = useState(null);
  const [selectedHeritage,setSelectedHeritage]= useState(null);
  const [sortBy,          setSortBy]          = useState("year");
  const [typeFilter,      setTypeFilter]      = useState("all");
  const [diffFilter,      setDiffFilter]      = useState(0);
  const [learningMode,    setLearningMode]    = useState(null);
  const [modeQuizzes,     setModeQuizzes]     = useState([]);
  const [modeIdx,         setModeIdx]         = useState(0);
  const [modeResults,     setModeResults]     = useState([]);
  const [modeShowResult,  setModeShowResult]  = useState(false);

  const prog = globalProgress.chiikibetsu;

  const markDone = (regionId) => {
    setGlobalProgress(prev => ({
      ...prev,
      chiikibetsu: { ...prev.chiikibetsu, [regionId]: true }
    }));
  };

  const getRegionData = (regionId) => {
    if (regionId === "asia") {
      return [...japanHeritageData, ...worldHeritageDataPart1.filter(h => h.region === "asia")];
    }
    return worldHeritageDataPart1.filter(h => h.region === regionId)
      .concat(worldHeritageDataPart2.filter(h => h.region === regionId));
  };

  const applyFilters = (list) => {
    let filtered = list;
    if (typeFilter !== "all") filtered = filtered.filter(h => h.type === typeFilter);
    if (diffFilter > 0)       filtered = filtered.filter(h => h.difficulty === diffFilter);
    if (sortBy === "year")       return [...filtered].sort((a,b) => a.year - b.year);
    if (sortBy === "difficulty") return [...filtered].sort((a,b) => b.difficulty - a.difficulty);
    if (sortBy === "freq") {
      const o = {"高":0,"中":1,"低":2};
      return [...filtered].sort((a,b) => o[a.examFrequency] - o[b.examFrequency]);
    }
    return filtered;
  };

  // クイズ生成（国名・登録年・種別・基準）
  const buildQuizzes = (list, mode) => {
    const allCountries = [...new Set(allHeritageData.map(h => h.country))];
    const allYears     = [...new Set(allHeritageData.map(h => String(h.year)))];
    const shuffle      = arr => [...arr].sort(() => Math.random() - 0.5);

    let pool = mode === "hard"
      ? list.filter(h => h.difficulty >= 2)
      : shuffle(list).slice(0, mode === "random" ? 10 : list.length);
    if (pool.length === 0) pool = list;

    return pool.map((h, i) => {
      const qType = mode === "hard"
        ? (i % 2 === 0 ? "criteria" : "year")
        : ["country","year","type","criteria"][i % 4];

      if (qType === "country") {
        const wrongs = shuffle(allCountries.filter(c => c !== h.country)).slice(0,3);
        return makeQuiz(`「${h.name}」の所在国は？`, h.country, wrongs,
          `${h.name}は${h.country}にある${h.type}（${h.year}年登録）。`);
      }
      if (qType === "year") {
        const yw = shuffle(allYears.filter(y => y !== String(h.year))).slice(0,3);
        return makeQuiz(`「${h.name}」の登録年は？`, String(h.year)+"年", yw.map(y=>y+"年"),
          `${h.name}は${h.year}年に${h.type}として登録（${h.country}）。`);
      }
      if (qType === "type") {
        return makeQuiz(`「${h.name}」の種別は？`, h.type,
          ["文化遺産","自然遺産","複合遺産"].filter(t=>t!==h.type),
          `${h.name}は${h.type}（登録基準：${h.criteria.join("・")}）。`);
      }
      // criteria
      const correctC = `基準${h.criteria[0]}`;
      const wrongCs  = shuffle(["i","ii","iii","iv","v","vi","vii","viii","ix","x"]
        .filter(c => !h.criteria.includes(c))).slice(0,3).map(c=>`基準${c}`);
      return makeQuiz(`「${h.name}」が持つ登録基準のひとつは？`, correctC, wrongCs,
        `${h.name}の登録基準は${h.criteria.map(c=>`基準${c}`).join("・")}。`);
    });
  };

  const startMode = (mode) => {
    const list = getRegionData(selectedRegion);
    setModeQuizzes(buildQuizzes(list, mode));
    setModeIdx(0); setModeResults([]); setModeShowResult(false);
    setLearningMode(mode);
  };

  const handleModeResult = (ok) => {
    const updated = [...modeResults, ok];
    setModeResults(updated);
    if (updated.length === modeQuizzes.length) {
      setTestHistory(prev => [...prev, {
        section: `②地域別 ${REGIONS.find(r=>r.id===selectedRegion)?.label}`,
        correct: updated.filter(Boolean).length, total: modeQuizzes.length,
        date: Date.now()
      }]);
      markDone(selectedRegion);
      setModeShowResult(true);
    } else {
      setTimeout(() => setModeIdx(i => i + 1), 900);
    }
  };

  const resetMode = () => { setModeIdx(0); setModeResults([]); setModeShowResult(false); };

  // ── 地域一覧ビュー ────────────────────────────────────────
  const renderRegionGrid = () => (
    <div>
      <div className="section-title">🗺️ 地域別に学ぶ</div>
      <div style={{ fontSize:13, color:"var(--color-text-light)", marginBottom:14 }}>
        地域をタップして遺産一覧を表示。全 {allHeritageData.length} 件収録。
      </div>
      <div className="region-grid">
        {REGIONS.map(r => {
          const list = getRegionData(r.id);
          const done = prog[r.id];
          return (
            <div key={r.id} className={`region-card${done?" done":""}`}
              style={{ background:r.color, borderColor:done?"#2e8b57":r.border }}
              onClick={() => { setSelectedRegion(r.id); setLearningMode(null); }}
            >
              {done && <span className="region-card-done">✅</span>}
              <div className="region-card-emoji">{r.emoji}</div>
              <div className="region-card-name">{r.label}</div>
              <div className="region-card-count">{list.length}件</div>
            </div>
          );
        })}
      </div>
      <div className="card">
        <div className="card-title">📊 地域別進捗</div>
        {REGIONS.map(r => {
          const list = getRegionData(r.id);
          return (
            <div key={r.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"6px 0", borderBottom:"1px solid var(--color-border)" }}>
              <span style={{ width:20, textAlign:"center" }}>{r.emoji}</span>
              <span style={{ flex:1, fontSize:13 }}>{r.label}</span>
              <span style={{ fontSize:12, color:"var(--color-text-light)" }}>{list.length}件</span>
              {prog[r.id] ? <span style={{ color:"#2e8b57", fontSize:12 }}>✅</span> : <span style={{ color:"var(--color-text-light)", fontSize:12 }}>未</span>}
            </div>
          );
        })}
      </div>
    </div>
  );

  // ── 学習モード選択 ────────────────────────────────────────
  const renderModeSelect = () => {
    const region = REGIONS.find(r => r.id === selectedRegion);
    const list   = getRegionData(selectedRegion);
    return (
      <div>
        <div className="heritage-list-header">
          <button className="heritage-list-back" onClick={() => setSelectedRegion(null)}>← 地域一覧</button>
          <div>
            <div className="heritage-list-title">{region.emoji} {region.label}</div>
            <div style={{ fontSize:11, color:"var(--color-text-light)" }}>{list.length}件</div>
          </div>
        </div>
        <div className="mode-grid">
          {[
            { id:"list",   emoji:"📋", title:"遺産一覧",         desc:"全遺産をカード表示・フィルタ" },
            { id:"random", emoji:"🎲", title:"ランダムクイズ",   desc:"10問・国名/年/種別/基準" },
            { id:"hard",   emoji:"🔥", title:"難問チャレンジ",   desc:"難易度★2以上・基準/年" },
            { id:"story",  emoji:"📖", title:"AIストーリー",     desc:"各遺産のAIナレーション" },
          ].map(m => (
            <div key={m.id} className="mode-card" onClick={() => {
              if (m.id === "list") setLearningMode("list");
              else startMode(m.id);
            }}>
              <div className="mode-card-emoji">{m.emoji}</div>
              <div className="mode-card-title">{m.title}</div>
              <div className="mode-card-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ── 遺産一覧（フィルタ付き） ──────────────────────────────
  const renderList = () => {
    const region = REGIONS.find(r => r.id === selectedRegion);
    const list   = applyFilters(getRegionData(selectedRegion));
    return (
      <div>
        <div className="heritage-list-header">
          <button className="heritage-list-back" onClick={() => setLearningMode(null)}>← モード選択</button>
          <div>
            <div className="heritage-list-title">{region.emoji} {region.label}</div>
            <div style={{ fontSize:11, color:"var(--color-text-light)" }}>{list.length}件</div>
          </div>
        </div>
        <div className="filter-row">
          {["all","文化遺産","自然遺産","複合遺産"].map(t => (
            <button key={t} className={`filter-btn${typeFilter===t?" active":""}`} onClick={() => setTypeFilter(t)}>
              {t === "all" ? "すべて" : t}
            </button>
          ))}
        </div>
        <div className="filter-row" style={{ marginBottom:8 }}>
          {[0,1,2,3].map(d => (
            <button key={d} className={`filter-btn${diffFilter===d?" active":""}`} onClick={() => setDiffFilter(d)}>
              {d === 0 ? "難易度：全" : "★".repeat(d)}
            </button>
          ))}
          <div style={{ marginLeft:"auto", display:"flex", gap:6 }}>
            {[["year","年順"],["freq","頻度"]].map(([v,l]) => (
              <button key={v} className={`filter-btn${sortBy===v?" active":""}`} onClick={() => setSortBy(v)}>{l}</button>
            ))}
          </div>
        </div>
        {list.length === 0
          ? <div style={{ textAlign:"center", padding:40, color:"var(--color-text-light)" }}>条件に合う遺産がありません</div>
          : list.map(h => <HeritageCard key={h.id} heritage={h} onClick={setSelectedHeritage} />)
        }
        <button className="btn btn-ghost" style={{ width:"100%", justifyContent:"center", marginTop:8 }} onClick={() => markDone(selectedRegion)}>
          ✅ このエリア学習完了
        </button>
      </div>
    );
  };

  // ── クイズ実行ビュー ──────────────────────────────────────
  const renderQuizRunner = (title) => {
    const score = modeResults.filter(Boolean).length;
    const pct   = modeQuizzes.length ? Math.round(score / modeQuizzes.length * 100) : 0;
    return (
      <div>
        <div className="heritage-list-header">
          <button className="heritage-list-back" onClick={() => setLearningMode(null)}>← モード選択</button>
          <div className="heritage-list-title">{title}</div>
        </div>
        <div className="card">
          {!modeShowResult ? (
            <>
              <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:8 }}>
                問題 {Math.min(modeIdx+1, modeQuizzes.length)} / {modeQuizzes.length}
                &nbsp;·&nbsp;正解 {modeResults.filter(Boolean).length}問
              </div>
              <div className="progress-bar-wrap" style={{ marginBottom:14 }}>
                <div className="progress-bar-fill" style={{ width:`${(modeIdx/modeQuizzes.length)*100}%` }} />
              </div>
              <QuizComponent key={modeIdx} quiz={modeQuizzes[modeIdx]} onResult={handleModeResult} />
            </>
          ) : (
            <div className="quiz-result-wrap">
              <div className="quiz-result-score">{score}/{modeQuizzes.length}</div>
              <div className="quiz-result-label">正解数 ({pct}%)</div>
              <div className="quiz-result-msg">
                {pct===100?"🎉 満点！":pct>=75?"👏 よくできました！":pct>=50?"📖 もう少し復習を":"💪 繰り返し練習しよう"}
              </div>
              <div style={{ marginTop:14, display:"flex", gap:8, justifyContent:"center" }}>
                <button className="btn btn-primary" onClick={() => { startMode(learningMode); }}>もう一度</button>
                <button className="btn btn-ghost" onClick={() => setLearningMode(null)}>モード選択へ</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ── AIストーリーモード ────────────────────────────────────
  const renderStoryMode = () => {
    const region = REGIONS.find(r => r.id === selectedRegion);
    const list   = getRegionData(selectedRegion).filter(h => h.difficulty >= 1).slice(0, 12);
    return (
      <div>
        <div className="heritage-list-header">
          <button className="heritage-list-back" onClick={() => setLearningMode(null)}>← モード選択</button>
          <div className="heritage-list-title">📖 AIストーリー — {region.label}</div>
        </div>
        <div className="card" style={{ marginBottom:12, fontSize:13, color:"var(--color-text-light)" }}>
          各遺産の「🤖 AIストーリー」ボタンをタップすると、その遺産のストーリーが語られます。
        </div>
        {list.map(h => (
          <div key={h.id} className="story-card">
            {h.image && (
              <img className="story-card-img" src={h.image} alt={h.name}
                onError={e => { e.target.style.display="none"; }} />
            )}
            <div className="story-card-body">
              <div className="story-card-name">{h.countryFlag} {h.name}</div>
              <div className="story-card-sub">{h.country} · {h.year}年 · {h.type}</div>
              <AIButton type="story" id={h.id} label="AIストーリー" delay={800} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {!selectedRegion                           && renderRegionGrid()}
      {selectedRegion && !learningMode           && renderModeSelect()}
      {selectedRegion && learningMode==="list"   && renderList()}
      {selectedRegion && learningMode==="random" && renderQuizRunner("🎲 ランダムクイズ")}
      {selectedRegion && learningMode==="hard"   && renderQuizRunner("🔥 難問チャレンジ")}
      {selectedRegion && learningMode==="story"  && renderStoryMode()}
      {selectedHeritage && (
        <HeritageDetailModal heritage={selectedHeritage} onClose={() => setSelectedHeritage(null)} />
      )}
    </div>
  );
}

// ─── プレースホルダータブ（後フェーズで実装） ──────────────
// 📍 CHECKPOINT: フェーズ11 完了

// ─── 時代定義 ─────────────────────────────────────────────
const ERAS = [
  { id:"ancient",     label:"古代",   period:"〜5世紀",        emoji:"🏛️",
    color:"rgba(255,209,102,0.2)",  border:"#FFD166",
    desc:"人類最古の文明の遺跡。メソポタミア・エジプト・ギリシャ・ローマ等の遺産。建造物の多くが宗教的・政治的権威の象徴として建てられた。",
    keyPoints:["ピラミッド群（エジプト）","パルテノン神殿（ギリシャ）","ポンペイ（ローマ）","万里の長城の基礎（中国）"] },
  { id:"classical",   label:"古典",   period:"5〜10世紀",      emoji:"🕌",
    color:"rgba(255,143,171,0.15)", border:"#FF8FAB",
    desc:"東アジアの仏教建築・イスラム建築の誕生・東ローマ帝国の最盛期。法隆寺・アンコール・ボロブドゥールはこの時代。",
    keyPoints:["法隆寺（推古朝・7世紀）","ボロブドゥール（8世紀）","イスファハン（7世紀〜）","カーブ・アル・アンバール"] },
  { id:"medieval",    label:"中世",   period:"10〜15世紀",     emoji:"⛪",
    color:"rgba(168,216,234,0.2)",  border:"#A8D8EA",
    desc:"ヨーロッパのゴシック大聖堂・アジアの寺院国家・アンコール王朝・十字軍時代の遺産。信仰と政治が交差した時代。",
    keyPoints:["ケルン大聖堂（1248年着工）","シャルトル大聖堂","アンコール・ワット（12世紀）","白川郷（中世〜近世）"] },
  { id:"earlyModern", label:"近世",   period:"15〜18世紀",     emoji:"🏯",
    color:"rgba(201,177,255,0.2)",  border:"#C9B1FF",
    desc:"ルネサンス・バロック・ムガル帝国・江戸時代。文化の爛熟期。ヴェルサイユ・タージ・マハル・姫路城はこの時代。",
    keyPoints:["姫路城（1609年完成）","タージ・マハル（1631〜53年）","ヴェルサイユ宮殿（17世紀）","フィレンツェ（15世紀〜）"] },
  { id:"modern",      label:"近代",   period:"18〜20世紀前半", emoji:"🏭",
    color:"rgba(181,234,215,0.2)",  border:"#B5EAD7",
    desc:"産業革命・世界大戦・植民地化と独立。富岡製糸場・明治産業革命遺産・原爆ドーム・アウシュビッツは近代遺産。",
    keyPoints:["アイアンブリッジ（1779年）","富岡製糸場（1872年）","広島平和記念碑（1945年）","アウシュビッツ（1940〜45年）"] },
  { id:"contemporary",label:"現代",   period:"1945年〜",       emoji:"🌆",
    color:"rgba(255,180,120,0.2)",  border:"#FFB478",
    desc:"核の脅威・環境問題・現代建築。シドニー・オペラハウス・ル・コルビュジエの建築作品群はこの時代の遺産。",
    keyPoints:["シドニー・オペラハウス（1973年完成）","ブラジリア（1960年）","ル・コルビュジエ建築群（国際登録2016年）"] },
];

// ─── ③時代別タブ ──────────────────────────────────────────
function JidaibetsuTab({ onNavigate, globalProgress, setGlobalProgress, testHistory, setTestHistory }) {
  const [selectedEra,  setSelectedEra]  = useState("ancient");
  const [quizMode,     setQuizMode]     = useState(false);
  const [quizzes,      setQuizzes]      = useState([]);
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizResults,  setQuizResults]  = useState([]);
  const [showResult,   setShowResult]   = useState(false);

  const prog = globalProgress.jidaibetsu;

  const markDone = (eraId) => {
    setGlobalProgress(prev => ({
      ...prev,
      jidaibetsu: { ...prev.jidaibetsu, [eraId]: true }
    }));
  };

  const eraList = (eraId) => allHeritageData.filter(h => h.relatedEra === eraId);

  // クイズ生成（時代判定・所属遺産識別）
  const buildEraQuizzes = (eraId) => {
    const era     = ERAS.find(e => e.id === eraId);
    const correct = eraList(eraId);
    const others  = ERAS.filter(e => e.id !== eraId);
    const shuffle  = arr => [...arr].sort(() => Math.random() - 0.5);

    const quizList = [];
    // Q1〜5: この遺産はどの時代？
    const sample = shuffle(correct).slice(0, 5);
    sample.forEach(h => {
      const wrongEras = shuffle(others).slice(0,3).map(e=>e.label+"（"+e.period+"）");
      quizList.push(makeQuiz(
        `「${h.name}」が属する時代は？`,
        era.label+"（"+era.period+"）",
        wrongEras,
        `${h.name}は${h.country}にある${h.type}で、${era.label}（${era.period}）に建てられた。`
      ));
    });
    // Q6〜10: この時代に属する遺産はどれ？
    const otherSamples = others.flatMap(e => eraList(e.id)).filter(Boolean);
    shuffle(correct).slice(0, 5).forEach((h, i) => {
      const wrongs = shuffle(otherSamples).slice(i*3, i*3+3).map(x => x.name);
      quizList.push(makeQuiz(
        `次のうち「${era.label}」に属する遺産はどれ？`,
        h.name,
        wrongs,
        `${h.name}は${h.country}の${h.type}で、${era.label}時代の遺産。`
      ));
    });
    return shuffle(quizList).slice(0, 10);
  };

  const startQuiz = () => {
    setQuizzes(buildEraQuizzes(selectedEra));
    setQuizIdx(0); setQuizResults([]); setShowResult(false);
    setQuizMode(true);
  };

  const handleQuizResult = (ok) => {
    const updated = [...quizResults, ok];
    setQuizResults(updated);
    if (updated.length === quizzes.length) {
      const era = ERAS.find(e => e.id === selectedEra);
      setTestHistory(prev => [...prev, {
        section: `③時代別 ${era?.label}`,
        correct: updated.filter(Boolean).length, total: quizzes.length,
        date: Date.now()
      }]);
      markDone(selectedEra);
      setShowResult(true);
    } else {
      setTimeout(() => setQuizIdx(i => i + 1), 900);
    }
  };

  const era     = ERAS.find(e => e.id === selectedEra);
  const list    = eraList(selectedEra);
  const score   = quizResults.filter(Boolean).length;
  const pct     = quizzes.length ? Math.round(score / quizzes.length * 100) : 0;

  if (quizMode) {
    return (
      <div>
        <div className="heritage-list-header">
          <button className="heritage-list-back" onClick={() => setQuizMode(false)}>← {era.label}に戻る</button>
          <div className="heritage-list-title">{era.emoji} {era.label}クイズ</div>
        </div>
        <div className="card">
          {!showResult ? (
            <>
              <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:8 }}>
                問題 {Math.min(quizIdx+1, quizzes.length)} / {quizzes.length}
                &nbsp;·&nbsp;正解 {quizResults.filter(Boolean).length}問
              </div>
              <div className="progress-bar-wrap" style={{ marginBottom:14 }}>
                <div className="progress-bar-fill" style={{ width:`${(quizIdx/quizzes.length)*100}%` }} />
              </div>
              <QuizComponent key={quizIdx} quiz={quizzes[quizIdx]} onResult={handleQuizResult} />
            </>
          ) : (
            <div className="quiz-result-wrap">
              <div className="quiz-result-score">{score}/{quizzes.length}</div>
              <div className="quiz-result-label">正解数 ({pct}%)</div>
              <div className="quiz-result-msg">
                {pct===100?"🎉 満点！":pct>=75?"👏 よくできました！":pct>=50?"📖 もう少し復習を":"💪 繰り返し練習しよう"}
              </div>
              <div style={{ marginTop:14, display:"flex", gap:8, justifyContent:"center" }}>
                <button className="btn btn-primary" onClick={startQuiz}>もう一度</button>
                <button className="btn btn-ghost" onClick={() => setQuizMode(false)}>遺産一覧に戻る</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* タイムラインスクロール */}
      <div className="timeline-scroll">
        {ERAS.map(e => (
          <button
            key={e.id}
            className={`timeline-era-btn${selectedEra===e.id?" active":""}${prog[e.id]?" done":""}`}
            style={selectedEra===e.id ? { background:e.color, borderColor:e.border } : {}}
            onClick={() => { setSelectedEra(e.id); setQuizMode(false); }}
          >
            <div className="timeline-era-emoji">{e.emoji}</div>
            <div className="timeline-era-label">{e.label}</div>
            <div className="timeline-era-period">{e.period}</div>
            {prog[e.id] && <div style={{ fontSize:10, color:"#2e8b57", marginTop:2 }}>✅</div>}
          </button>
        ))}
      </div>

      {/* 時代ヘッダーカード */}
      <div className="era-header-card" style={{ background:era.color, border:`1px solid ${era.border}` }}>
        <div className="era-header-title">{era.emoji} {era.label}時代</div>
        <div className="era-header-period">⏱️ {era.period}</div>
        <div className="era-header-desc">{era.desc}</div>
        {era.keyPoints && (
          <div style={{ marginTop:10 }}>
            {era.keyPoints.map((p,i) => (
              <div key={i} style={{ fontSize:12, padding:"3px 0", borderBottom:`1px solid ${era.border}40` }}>
                📍 {p}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* アクションボタン */}
      <div style={{ display:"flex", gap:8, marginBottom:16, flexWrap:"wrap" }}>
        <button className="btn btn-primary" onClick={startQuiz} disabled={list.length === 0}>
          📝 {era.label}クイズ（{Math.min(10, list.length*2)}問）
        </button>
        <button className="btn btn-ghost" onClick={() => markDone(selectedEra)}>
          {prog[selectedEra] ? "✅ 完了済み" : "完了にする"}
        </button>
      </div>

      {/* 遺産一覧 */}
      <div className="era-heritage-count">
        {era.label}時代の遺産：{list.length}件
        {list.length === 0 && " （データ準備中）"}
      </div>
      {list.map(h => (
        <HeritageCard
          key={h.id}
          heritage={h}
          onClick={(h) => {}}
        />
      ))}

      {/* 全時代進捗 */}
      <div className="card" style={{ marginTop:16 }}>
        <div className="card-title">📊 時代別進捗</div>
        {ERAS.map(e => {
          const cnt = eraList(e.id).length;
          return (
            <div key={e.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"6px 0", borderBottom:"1px solid var(--color-border)", cursor:"pointer" }}
              onClick={() => setSelectedEra(e.id)}
            >
              <span style={{ width:24, textAlign:"center" }}>{e.emoji}</span>
              <span style={{ flex:1, fontSize:13 }}>{e.label}<span style={{ fontSize:10, color:"var(--color-text-light)", marginLeft:6 }}>{e.period}</span></span>
              <span style={{ fontSize:12, color:"var(--color-text-light)" }}>{cnt}件</span>
              {prog[e.id]
                ? <span style={{ color:"#2e8b57", fontSize:12 }}>✅</span>
                : <span style={{ color:"var(--color-text-light)", fontSize:12 }}>未</span>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 📍 CHECKPOINT: フェーズ12 完了

// ─── ④登録基準別タブ ─────────────────────────────────────
function KijunbetsuTab({ onNavigate, globalProgress, setGlobalProgress, testHistory, setTestHistory }) {
  const [view,         setView]         = useState("overview"); // "overview" | "detail" | "quiz"
  const [selectedId,   setSelectedId]   = useState(null);
  const [quizzes,      setQuizzes]      = useState([]);
  const [quizIdx,      setQuizIdx]      = useState(0);
  const [quizResults,  setQuizResults]  = useState([]);
  const [showResult,   setShowResult]   = useState(false);

  const prog = globalProgress.kijunbetsu;

  const markDone = (id) => {
    setGlobalProgress(prev => ({
      ...prev,
      kijunbetsu: { ...prev.kijunbetsu, [id]: true }
    }));
  };

  // クイズ生成
  const buildQuizzes = () => {
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const allCriteriaIds = criteriaData.map(c => c.id);
    const quizList = [];

    // Q1〜5: この遺産の登録基準は？（allHeritageDataから出題）
    const heritagePool = shuffle(allHeritageData.filter(h => h.criteria.length > 0)).slice(0, 5);
    heritagePool.forEach(h => {
      const correct = `基準${h.criteria[0]}（${criteriaData.find(c=>c.id===h.criteria[0])?.label||""}）`;
      const wrongs  = shuffle(allCriteriaIds.filter(id => !h.criteria.includes(id)))
        .slice(0, 3).map(id => `基準${id}（${criteriaData.find(c=>c.id===id)?.label||""}）`);
      quizList.push(makeQuiz(
        `「${h.name}」が持つ登録基準のひとつは？`,
        correct, wrongs,
        `${h.name}の登録基準は ${h.criteria.map(c=>`基準${c}`).join("・")}（${h.country}・${h.year}年）。`
      ));
    });

    // Q6〜10: この基準に該当する遺産は？
    const criteriaPool = shuffle(criteriaData).slice(0, 5);
    criteriaPool.forEach(c => {
      const correct = c.heritages[0];
      const wrongs  = shuffle(criteriaData.filter(x=>x.id!==c.id).flatMap(x=>x.heritages)).slice(0,3);
      quizList.push(makeQuiz(
        `登録基準${c.id}「${c.label}」に該当する遺産は？`,
        correct, wrongs,
        `基準${c.id}は「${c.label}」。${c.type}遺産の基準で、${c.heritages.slice(0,3).join("・")}などが該当。`
      ));
    });
    return shuffle(quizList).slice(0, 10);
  };

  const startQuiz = () => {
    setQuizzes(buildQuizzes());
    setQuizIdx(0); setQuizResults([]); setShowResult(false);
    setView("quiz");
  };

  const handleQuizResult = (ok) => {
    const updated = [...quizResults, ok];
    setQuizResults(updated);
    if (updated.length === quizzes.length) {
      setTestHistory(prev => [...prev, {
        section: "④登録基準別クイズ",
        correct: updated.filter(Boolean).length, total: quizzes.length,
        date: Date.now()
      }]);
      setShowResult(true);
    } else {
      setTimeout(() => setQuizIdx(i => i + 1), 900);
    }
  };

  const score = quizResults.filter(Boolean).length;
  const pct   = quizzes.length ? Math.round(score / quizzes.length * 100) : 0;

  // ── クイズビュー ──────────────────────────────────────────
  if (view === "quiz") {
    return (
      <div>
        <div className="heritage-list-header">
          <button className="heritage-list-back" onClick={() => setView("overview")}>← 基準一覧</button>
          <div className="heritage-list-title">⭐ 登録基準クイズ</div>
        </div>
        <div className="card">
          {!showResult ? (
            <>
              <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:8 }}>
                問題 {Math.min(quizIdx+1, quizzes.length)} / {quizzes.length}
              </div>
              <div className="progress-bar-wrap" style={{ marginBottom:14 }}>
                <div className="progress-bar-fill" style={{ width:`${(quizIdx/quizzes.length)*100}%` }} />
              </div>
              <QuizComponent key={quizIdx} quiz={quizzes[quizIdx]} onResult={handleQuizResult} />
            </>
          ) : (
            <div className="quiz-result-wrap">
              <div className="quiz-result-score">{score}/{quizzes.length}</div>
              <div className="quiz-result-label">正解数 ({pct}%)</div>
              <div className="quiz-result-msg">
                {pct===100?"🎉 登録基準マスター！":pct>=75?"👏 よくできました！":pct>=50?"📖 もう少し復習を":"💪 繰り返し練習しよう"}
              </div>
              <div style={{ marginTop:14, display:"flex", gap:8, justifyContent:"center" }}>
                <button className="btn btn-primary" onClick={startQuiz}>もう一度</button>
                <button className="btn btn-ghost" onClick={() => setView("overview")}>一覧に戻る</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── 詳細ビュー ────────────────────────────────────────────
  if (view === "detail" && selectedId) {
    const c = criteriaData.find(x => x.id === selectedId);
    const typeColor = c.type === "文化" ? "rgba(255,143,171,0.12)" : "rgba(181,234,215,0.15)";
    const relatedHeritages = allHeritageData.filter(h => h.criteria.includes(c.id)).slice(0, 6);
    return (
      <div>
        <div className="heritage-list-header">
          <button className="heritage-list-back" onClick={() => setView("overview")}>← 基準一覧</button>
          <div className="heritage-list-title">{c.type}遺産 基準{c.id}</div>
        </div>

        <div className="criteria-detail-header" style={{ background:typeColor, border:`2px solid ${c.color}` }}>
          <div className="criteria-detail-num" style={{ color:c.color }}>基準 {c.id}</div>
          <div className="criteria-detail-label">{c.label}</div>
          <div className="criteria-detail-desc">{c.description}</div>
        </div>

        {/* 試験Tips */}
        <div className="card" style={{ marginBottom:12 }}>
          <div className="card-title">💡 試験ポイント</div>
          {c.examTips.map((t, i) => (
            <div key={i} className="criteria-tip" style={{ marginBottom:6 }}>📌 {t}</div>
          ))}
          <div style={{ marginTop:10 }}>
            <button className="btn btn-ghost" onClick={() => markDone(c.id)}>
              {prog[c.id] ? "✅ 学習済み" : "✅ 学習済みにする"}
            </button>
          </div>
        </div>

        {/* 比較ポイント */}
        {c.comparePair && (
          <div className="card" style={{ marginBottom:12 }}>
            <div className="card-title">🔍 比較ポイント</div>
            <div className="compare-box">
              <div className="compare-box-label">⚡ 同じ基準{c.id}でも…</div>
              <div className="compare-vs">
                <div className="compare-item">{c.comparePair.a}</div>
                <div className="compare-separator">VS</div>
                <div className="compare-item">{c.comparePair.b}</div>
              </div>
            </div>
            <AIButton type="compare" id={c.id} label="AI比較解説" delay={1200} />
          </div>
        )}

        {/* データ上の代表遺産 */}
        <div className="card" style={{ marginBottom:12 }}>
          <div className="card-title">🏛️ 基準{c.id}を持つ遺産（{relatedHeritages.length}件）</div>
          <div className="criteria-heritages" style={{ marginBottom:10 }}>
            {c.heritages.map(h => (
              <span key={h} className="criteria-heritage-tag">{h}</span>
            ))}
          </div>
          {relatedHeritages.length > 0 && (
            <div style={{ marginTop:8 }}>
              <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:8 }}>収録データより</div>
              {relatedHeritages.map(h => (
                <div key={h.id} style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom:"1px solid var(--color-border)", fontSize:13 }}>
                  <span>{h.countryFlag} {h.name}</span>
                  <span style={{ fontSize:11, color:"var(--color-text-light)" }}>{h.year}年</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <AIButton type="explanation" id={c.id} label={`基準${c.id}をAI解説`} delay={800} />
      </div>
    );
  }

  // ── 概要ビュー（基準一覧） ─────────────────────────────────
  const completedCount = Object.values(prog).filter(Boolean).length;
  return (
    <div>
      <div className="section-title">⭐ 登録基準 i〜x</div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
        <div style={{ fontSize:13, color:"var(--color-text-light)" }}>
          学習済み {completedCount}/10 基準
        </div>
        <button className="btn btn-primary" style={{ fontSize:12 }} onClick={startQuiz}>
          📝 基準クイズ（10問）
        </button>
      </div>

      {/* 文化遺産基準 */}
      <div style={{ fontSize:12, fontWeight:700, color:"#d63873", marginBottom:8 }}>🏛️ 文化遺産の基準（i〜vi）</div>
      <div className="criteria-overview-grid">
        {criteriaData.filter(c => c.type === "文化").map(c => (
          <div key={c.id} className={`criteria-mini-card${prog[c.id]?" done":""}`}
            style={{ background:`${c.color}20`, border:`2px solid ${prog[c.id]?"#2e8b57":c.color}` }}
            onClick={() => { setSelectedId(c.id); setView("detail"); }}
          >
            {prog[c.id] && <span className="criteria-done-mark">✅</span>}
            <div className="criteria-mini-num" style={{ color:c.color }}>基準{c.id}</div>
            <div className="criteria-mini-label">{c.label}</div>
            <div className="criteria-mini-type">文化遺産 · {c.heritages.length}遺産</div>
          </div>
        ))}
      </div>

      {/* 自然遺産基準 */}
      <div style={{ fontSize:12, fontWeight:700, color:"#2e8b57", marginBottom:8, marginTop:8 }}>🌿 自然遺産の基準（vii〜x）</div>
      <div className="criteria-overview-grid">
        {criteriaData.filter(c => c.type === "自然").map(c => (
          <div key={c.id} className={`criteria-mini-card${prog[c.id]?" done":""}`}
            style={{ background:`${c.color}20`, border:`2px solid ${prog[c.id]?"#2e8b57":c.color}` }}
            onClick={() => { setSelectedId(c.id); setView("detail"); }}
          >
            {prog[c.id] && <span className="criteria-done-mark">✅</span>}
            <div className="criteria-mini-num" style={{ color:"#2e8b57" }}>基準{c.id}</div>
            <div className="criteria-mini-label">{c.label}</div>
            <div className="criteria-mini-type">自然遺産 · {c.heritages.length}遺産</div>
          </div>
        ))}
      </div>

      {/* 重要ポイント */}
      <div className="card" style={{ marginTop:8 }}>
        <div className="card-title">📌 登録基準の重要ポイント</div>
        {[
          "基準ivは最も多くの遺産が持つ基準（建築・技術の傑作）",
          "基準viの単独登録は例外的（広島・ゴレ島のみ）",
          "複合遺産は文化基準(i〜vi)と自然基準(vii〜x)の両方を持つ",
          "ガラパゴスはvii・viii・ix・xの4基準すべてを持つ",
          "白神山地はixのみで登録（日本の自然遺産で唯一の単基準）",
        ].map((p, i) => (
          <div key={i} style={{ padding:"7px 0", borderBottom:"1px solid var(--color-border)", fontSize:13 }}>
            💡 {p}
          </div>
        ))}
      </div>
    </div>
  );
}

// 📍 CHECKPOINT: フェーズ13 完了

// ─── ⑤苦手分析タブ ─────────────────────────────────────────
function NigatebunTab({ globalProgress, setGlobalProgress, testHistory }) {

  // ── 統計計算 ─────────────────────────────────────────────
  const totalQ     = testHistory.reduce((s, h) => s + h.total, 0);
  const totalC     = testHistory.reduce((s, h) => s + h.correct, 0);
  const overallPct = totalQ > 0 ? Math.round(totalC / totalQ * 100) : 0;

  // セクション別正答率
  const sectionStats = {};
  testHistory.forEach(h => {
    if (!sectionStats[h.section]) sectionStats[h.section] = { correct:0, total:0, lastDate:0 };
    sectionStats[h.section].correct  += h.correct;
    sectionStats[h.section].total    += h.total;
    sectionStats[h.section].lastDate  = Math.max(sectionStats[h.section].lastDate, h.date);
  });

  const sectionList = Object.entries(sectionStats).map(([section, s]) => ({
    section,
    pct:      Math.round(s.correct / s.total * 100),
    correct:  s.correct,
    total:    s.total,
    lastDate: s.lastDate,
  })).sort((a, b) => a.pct - b.pct);

  // 弱点カテゴリ判定（AI復習提案のキー）
  const detectWeakArea = () => {
    if (sectionList.length === 0) return "default";
    const worst = sectionList[0].section;
    if (worst.includes("地域") && worst.includes("アジア")) return "asia_weak";
    if (worst.includes("地域") && worst.includes("ヨーロッパ")) return "europe_weak";
    if (worst.includes("登録基準") || worst.includes("基準")) return "criteria_weak";
    if (worst.includes("近代") || worst.includes("現代")) return "modern_weak";
    return "default";
  };

  const markAnalyzed = () => {
    setGlobalProgress(prev => ({
      ...prev,
      nigatebun: { analyzed: true }
    }));
  };

  // バーの色（正答率に応じて）
  const barColor = (pct) =>
    pct >= 80 ? "#2e8b57" : pct >= 60 ? "#FFD166" : pct >= 40 ? "#FF8FAB" : "#dc2626";

  // 忘却曲線タイミング
  const forgettingCurve = [
    { day:"翌日",   pct:"79%", tip:"1日後に復習で定着率2倍" },
    { day:"3日後",  pct:"58%", tip:"3日後に再確認" },
    { day:"1週後",  pct:"44%", tip:"1週間後が第3の復習タイミング" },
    { day:"1ヶ月",  pct:"21%", tip:"1ヶ月後で長期記憶に定着" },
    { day:"半年後", pct:"10%", tip:"試験2週間前に最終復習" },
  ];

  // ── データなし表示 ────────────────────────────────────────
  if (testHistory.length === 0) {
    return (
      <div>
        <div className="section-title">📊 苦手分析</div>
        <div style={{ textAlign:"center", padding:"48px 16px" }}>
          <div style={{ fontSize:48, marginBottom:12 }}>📝</div>
          <div style={{ fontSize:16, fontWeight:700, marginBottom:8 }}>まだ学習データがありません</div>
          <div style={{ fontSize:13, color:"var(--color-text-light)", marginBottom:20 }}>
            各タブでクイズに挑戦すると、ここに分析結果が表示されます。
          </div>
          <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
            <div style={{ fontSize:13, background:"rgba(255,143,171,0.1)", padding:"8px 14px", borderRadius:"20px" }}>①基礎知識でクイズ</div>
            <div style={{ fontSize:13, background:"rgba(168,216,234,0.1)", padding:"8px 14px", borderRadius:"20px" }}>②地域別でクイズ</div>
            <div style={{ fontSize:13, background:"rgba(181,234,215,0.1)", padding:"8px 14px", borderRadius:"20px" }}>③時代別でクイズ</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="section-title">📊 苦手分析ダッシュボード</div>

      {/* 総合スタッツ */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-num">{testHistory.length}</div>
          <div className="stat-label">テスト回数</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{totalQ}</div>
          <div className="stat-label">総問題数</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" style={{ color: barColor(overallPct) }}>{overallPct}%</div>
          <div className="stat-label">総合正答率</div>
        </div>
      </div>

      {/* 総合進捗バー */}
      <div className="card" style={{ marginBottom:14 }}>
        <div className="card-title">📈 セクション別正答率</div>
        {sectionList.map(s => (
          <div key={s.section} className="bar-row">
            <div className="bar-label">{s.section.replace("①基礎知識 ","").replace("②地域別 ","").replace("③時代別 ","").replace("④登録基準別","④基準")}</div>
            <div className="bar-track">
              <div className="bar-fill" style={{ width:`${s.pct}%`, background: barColor(s.pct) }} />
            </div>
            <div className="bar-pct" style={{ color: barColor(s.pct) }}>{s.pct}%</div>
          </div>
        ))}
      </div>

      {/* 弱点ランキング */}
      {sectionList.length > 0 && (
        <div className="card" style={{ marginBottom:14 }}>
          <div className="card-title">🎯 弱点ランキング（要復習）</div>
          {sectionList.slice(0, 5).map((s, i) => {
            const daysSince = Math.floor((Date.now() - s.lastDate) / 86400000);
            const needReview = daysSince >= (i === 0 ? 1 : i === 1 ? 3 : 7);
            return (
              <div key={s.section} className="weak-rank-item">
                <div className="weak-rank-num" style={{ color: i===0?"#dc2626":i===1?"#f59e0b":"#888" }}>
                  {i+1}位
                </div>
                <div className="weak-rank-body">
                  <div className="weak-rank-name">{s.section}</div>
                  <div className="weak-rank-sub">
                    {s.correct}/{s.total}問正解 · {daysSince === 0 ? "今日" : `${daysSince}日前`}学習
                    {needReview && <span style={{ color:"#dc2626", marginLeft:6 }}>⚠️ 復習推奨</span>}
                  </div>
                </div>
                <div className="weak-rank-pct" style={{ color: barColor(s.pct) }}>{s.pct}%</div>
              </div>
            );
          })}
        </div>
      )}

      {/* AI復習提案 */}
      <div className="card" style={{ marginBottom:14 }}>
        <div className="card-title">🤖 AI復習提案</div>
        <div style={{ fontSize:13, color:"var(--color-text-light)", marginBottom:10 }}>
          あなたの学習データをもとに、AIが復習方法をアドバイスします。
        </div>
        <AIButton
          type="review"
          id={detectWeakArea()}
          label="AI復習提案を見る"
          delay={1500}
        />
        <div style={{ marginTop:12 }}>
          <button className="btn btn-ghost" style={{ fontSize:12 }} onClick={markAnalyzed}>
            ✅ 分析完了（進捗に記録）
          </button>
        </div>
      </div>

      {/* 忘却曲線 */}
      <div className="card" style={{ marginBottom:14 }}>
        <div className="card-title">🧠 忘却曲線（エビングハウス）</div>
        <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:4 }}>
          復習しないと記憶はどんどん失われます。
        </div>
        <div className="forgetting-row">
          {forgettingCurve.map(f => (
            <div key={f.day} className="forget-card">
              <div className="forget-day">{f.day}</div>
              <div className="forget-rate">残存{f.pct}</div>
              <div style={{ fontSize:9, color:"var(--color-text-light)", marginTop:4, lineHeight:1.3 }}>{f.tip}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize:12, color:"var(--color-text-light)", marginTop:10, lineHeight:1.6 }}>
          💡 <strong>復習のタイミング</strong>：翌日・3日後・1週間後・1ヶ月後の4回が効果的。
          各タブで定期的にクイズに挑戦しましょう。
        </div>
      </div>

      {/* 最近の履歴 */}
      <div className="card">
        <div className="card-title">📋 最近の学習履歴（全{testHistory.length}件）</div>
        {[...testHistory].reverse().slice(0, 10).map((h, i) => {
          const p = Math.round(h.correct/h.total*100);
          return (
            <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:"1px solid var(--color-border)", fontSize:13 }}>
              <div>
                <div style={{ fontWeight:600, fontSize:12 }}>{h.section}</div>
                <div style={{ fontSize:11, color:"var(--color-text-light)" }}>
                  {new Date(h.date).toLocaleDateString("ja-JP")}
                </div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontWeight:700, color: barColor(p) }}>{h.correct}/{h.total}問</div>
                <div style={{ fontSize:11, color: barColor(p) }}>{p}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 📍 CHECKPOINT: フェーズ15 完了（仕上げ・結合・模擬試験）

// ─── 模擬試験クイズ生成 ────────────────────────────────────
const buildMockExam = () => {
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const pool    = shuffle(allHeritageData);
  const allC    = [...new Set(allHeritageData.map(h => h.country))];
  const allY    = [...new Set(allHeritageData.map(h => String(h.year)))];
  const allCrit = ["i","ii","iii","iv","v","vi","vii","viii","ix","x"];
  const qs = [];

  // 国名クイズ (15問)
  pool.slice(0, 15).forEach(h => {
    const ws = shuffle(allC.filter(c => c !== h.country)).slice(0,3);
    qs.push(makeQuiz(`「${h.name}」の所在国は？`, h.country, ws,
      `${h.name}は${h.country}にある${h.type}（${h.year}年登録）。`));
  });
  // 登録年クイズ (15問)
  pool.slice(15, 30).forEach(h => {
    const ws = shuffle(allY.filter(y => y !== String(h.year))).slice(0,3).map(y=>y+"年");
    qs.push(makeQuiz(`「${h.name}」の登録年は？`, h.year+"年", ws,
      `${h.name}は${h.year}年登録。${h.country}の${h.type}。`));
  });
  // 種別クイズ (10問)
  pool.slice(30, 40).forEach(h => {
    qs.push(makeQuiz(`「${h.name}」の種別は？`, h.type,
      ["文化遺産","自然遺産","複合遺産"].filter(t=>t!==h.type),
      `${h.name}は${h.type}（登録基準：${h.criteria.join("・")}）。`));
  });
  // 登録基準クイズ (10問)
  pool.slice(40, 50).filter(h=>h.criteria.length>0).slice(0,10).forEach(h => {
    const correct = `基準${h.criteria[0]}`;
    const ws = shuffle(allCrit.filter(c=>!h.criteria.includes(c))).slice(0,3).map(c=>`基準${c}`);
    qs.push(makeQuiz(`「${h.name}」が持つ登録基準のひとつは？`, correct, ws,
      `${h.name}の登録基準は${h.criteria.map(c=>`基準${c}`).join("・")}。`));
  });
  // ひっかけクイズ (10問)
  trickQuestions.forEach(t => {
    qs.push(makeQuiz("次のうち正しい記述はどれ？", t.correct,
      [t.trap, "どちらも正しい", "どちらも誤り"],
      `正しくは「${t.correct}」。よくある誤解：${t.trap}。`));
  });
  return shuffle(qs).slice(0, 60);
};

// ─── 模擬試験コンポーネント ────────────────────────────────
function MockExam({ onClose, setTestHistory }) {
  const TOTAL_TIME = 60 * 60;
  const [screen,   setScreen]   = useState("intro");
  const [questions,setQuestions]= useState([]);
  const [idx,      setIdx]      = useState(0);
  const [results,  setResults]  = useState([]);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [started,  setStarted]  = useState(false);
  const [finished, setFinished] = useState(false);
  const timeUsed = TOTAL_TIME - timeLeft;

  useEffect(() => {
    if (!started || finished || screen !== "exam") return;
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(t); setFinished(true); setScreen("result"); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [started, finished, screen]);

  const startExam = () => {
    setQuestions(buildMockExam());
    setStarted(true); setScreen("exam");
    setIdx(0); setResults([]); setTimeLeft(TOTAL_TIME);
  };

  const handleAnswer = (ok) => {
    const updated = [...results, ok];
    setResults(updated);
    if (updated.length >= questions.length) {
      const correct = updated.filter(Boolean).length;
      setTestHistory(prev => [...prev, {
        section: "模擬試験（60問）",
        correct, total: questions.length, date: Date.now()
      }]);
      setFinished(true); setScreen("result");
    } else {
      setTimeout(() => setIdx(i => i + 1), 900);
    }
  };

  const fmt = (s) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  const score   = results.filter(Boolean).length;
  const pct     = questions.length ? Math.round(score / questions.length * 100) : 0;
  const pass    = pct >= 70;

  if (screen === "intro") {
    return (
      <div className="exam-screen">
        <div className="exam-header">
          <span style={{ fontWeight:700 }}>📝 模擬試験</span>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", padding:"5px 10px", borderRadius:8, cursor:"pointer", fontFamily:"var(--font-main)", fontSize:12 }}>✕ 閉じる</button>
        </div>
        <div className="exam-body">
          <div className="exam-intro">
            <div style={{ fontSize:56, marginBottom:12 }}>🏛️</div>
            <div className="exam-intro-title">世界遺産検定 模擬試験</div>
            <div className="exam-intro-sub">
              全<strong>60問</strong> · 制限時間<strong>60分</strong><br/>
              70%（42問）以上正解で合格判定<br/><br/>
              国名・登録年・種別・登録基準・ひっかけ問題を出題。
              本番さながらの練習で実力を確認しよう！
            </div>
            <button className="exam-start-btn" onClick={startExam}>試験開始 →</button>
            <button onClick={onClose} className="btn btn-ghost" style={{ width:"100%", justifyContent:"center" }}>キャンセル</button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "result") {
    return (
      <div className="exam-screen">
        <div className="exam-header">
          <span style={{ fontWeight:700 }}>📊 試験結果</span>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", padding:"5px 10px", borderRadius:8, cursor:"pointer", fontFamily:"var(--font-main)", fontSize:12 }}>✕ 閉じる</button>
        </div>
        <div className="exam-body">
          <div style={{ textAlign:"center", padding:"32px 16px" }}>
            <div className={`exam-result-grade ${pass?"exam-pass":"exam-fail"}`}>{pass?"🎉":"📖"}</div>
            <div style={{ fontSize:22, fontWeight:700, marginBottom:4, color: pass?"#2e8b57":"#dc2626" }}>
              {pass ? "合格！" : "不合格"}
            </div>
            <div style={{ fontSize:14, color:"var(--color-text-light)", marginBottom:24 }}>
              合格ライン：70%（42問）以上
            </div>
            <div className="quiz-result-wrap">
              <div className="quiz-result-score" style={{ fontSize:56 }}>{score}<span style={{ fontSize:24 }}>/{questions.length}</span></div>
              <div className="quiz-result-label">正解数 ({pct}%)</div>
              <div style={{ fontSize:13, color:"var(--color-text-light)", marginTop:8 }}>
                所要時間：{fmt(timeUsed)}
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginTop:16, marginBottom:24 }}>
              {[
                ["正解", score+"問", "#2e8b57"],
                ["不正解", (questions.length-score)+"問", "#dc2626"],
                ["正答率", pct+"%", pass?"#2e8b57":"#dc2626"],
              ].map(([l,v,c]) => (
                <div key={l} style={{ background:`${c}10`, border:`1px solid ${c}40`, borderRadius:8, padding:"10px 8px", textAlign:"center" }}>
                  <div style={{ fontSize:18, fontWeight:700, color:c }}>{v}</div>
                  <div style={{ fontSize:11, color:"var(--color-text-light)" }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize:13, color:"var(--color-text-light)", marginBottom:20 }}>
              {pass
                ? "🎊 素晴らしい！この調子で本番も頑張りましょう。"
                : pct >= 60
                  ? "あと少し！苦手分野を重点的に復習しましょう。"
                  : "基礎から丁寧に復習しましょう。①基礎知識タブから始めるのがおすすめです。"
              }
            </div>
            <div style={{ display:"flex", gap:8, flexDirection:"column" }}>
              <button className="exam-start-btn" onClick={startExam}>もう一度受験</button>
              <button onClick={onClose} className="btn btn-ghost" style={{ width:"100%", justifyContent:"center" }}>タブに戻る</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 試験中
  const timerClass = timeLeft <= 300 ? "danger" : timeLeft <= 600 ? "warning" : "";
  const q = questions[idx];
  return (
    <div className="exam-screen">
      <div className="exam-header">
        <div>
          <div style={{ fontSize:11, opacity:0.8 }}>{idx+1} / {questions.length}問</div>
          <div className="progress-bar-wrap" style={{ width:120, background:"rgba(255,255,255,0.3)", marginTop:2 }}>
            <div className="progress-bar-fill" style={{ width:`${(idx/questions.length)*100}%`, background:"rgba(255,255,255,0.8)" }} />
          </div>
        </div>
        <div className={`exam-timer ${timerClass}`}>{fmt(timeLeft)}</div>
        <button onClick={() => { setFinished(true); setScreen("result"); }}
          style={{ background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", padding:"5px 10px", borderRadius:8, cursor:"pointer", fontFamily:"var(--font-main)", fontSize:12 }}>
          終了
        </button>
      </div>
      <div className="exam-body">
        <div style={{ fontSize:12, color:"var(--color-text-light)", marginBottom:4 }}>
          正解数：{results.filter(Boolean).length} / {results.length}問
        </div>
        {q && <QuizComponent key={idx} quiz={q} onResult={handleAnswer} />}
      </div>
    </div>
  );
}

function PlaceholderTab({ title }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--color-text-light)" }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>🏛️</div>
      <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 13, marginTop: 8 }}>このタブは近日実装予定です</div>
    </div>
  );
}

// ─── アプリ本体 ───────────────────────────────────────────
export default function App() {
  // ── グローバルstate ──────────────────────────────────────
  const [activeTab, setActiveTab] = useState("home");
  const [navigationStack, setNavigationStack] = useState([]);
  const [examDate, setExamDate] = useState("");
  const [progress, setProgress] = useState(DEFAULT_PROGRESS);
  const [testHistory, setTestHistory] = useState([]);
  const [reviewStatus, setReviewStatus] = useState({});

  // ── localStorage復元 ─────────────────────────────────────
  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) {
      if (saved.examDate)     setExamDate(saved.examDate);
      if (saved.progress)     setProgress(saved.progress);
      if (saved.testHistory)  setTestHistory(saved.testHistory);
      if (saved.reviewStatus) setReviewStatus(saved.reviewStatus);
    }
  }, []);

  // ── localStorage保存 ─────────────────────────────────────
  useEffect(() => {
    saveToStorage({ examDate, progress, testHistory, reviewStatus });
  }, [examDate, progress, testHistory, reviewStatus]);

  // ── タブ遷移（クロスナビゲーション対応） ─────────────────
  const handleNavigate = useCallback((tabId, keyword) => {
    setNavigationStack(prev => [...prev, { tab: activeTab, keyword: keyword || "" }]);
    setActiveTab(tabId);
  }, [activeTab]);

  const handleBack = useCallback(() => {
    setNavigationStack(prev => {
      if (prev.length === 0) return prev;
      const next = [...prev];
      const last = next.pop();
      setActiveTab(last.tab);
      return next;
    });
  }, []);

  // ── 共通props ─────────────────────────────────────────────
  const tabProps = {
    onNavigate: handleNavigate,
    globalProgress: progress,
    setGlobalProgress: setProgress,
    testHistory,
    setTestHistory,
    examDate,
    setExamDate,
    reviewStatus,
    setReviewStatus,
  };

  // ── タブコンテンツ描画 ────────────────────────────────────
  const renderTab = () => {
    switch (activeTab) {
      case "home":         return <HomeTab {...tabProps} />;
      case "kisochishiki": return <KisochishikiTab {...tabProps} />;
      case "chiikibetsu":  return <ChiikibetsuTab {...tabProps} />;
      case "jidaibetsu":   return <JidaibetsuTab {...tabProps} />;
      case "kijunbetsu":   return <KijunbetsuTab {...tabProps} />;
      case "nigatebun":    return <NigatebunTab {...tabProps} />;
      default:             return null;
    }
  };

  return (
    <>
      {/* グローバルCSS */}
      <style>{STYLES}</style>

      <div className="app-wrapper">
        {/* ナビゲーションバー（現タブ以外へのリンク） */}
        <div className="nav-bar">
          {navigationStack.length > 0 && (
            <button className="nav-back-btn" onClick={handleBack}>
              ← 戻る
            </button>
          )}
          {TABS.filter(t => t.id !== "home" && t.id !== activeTab).map(t => (
            <button
              key={t.id}
              className="nav-link-btn"
              onClick={() => handleNavigate(t.id)}
            >
              {t.label}へ
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        <div className="tab-content" key={activeTab}>
          {renderTab()}
        </div>

        {/* タブバー */}
        <nav className="tab-bar">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`tab-bar-btn${activeTab === id ? " active" : ""}`}
              onClick={() => setActiveTab(id)}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

// TODO: 準1級対応 - 遺産データを300件以上に拡充
// TODO: 1級対応 - 全遺産1199件データ追加、論述問題対応
// TODO: 音声読み上げ機能（Web Speech API）
// TODO: オフライン対応（Service Worker）
// TODO: 多言語対応（英語表記切替）
