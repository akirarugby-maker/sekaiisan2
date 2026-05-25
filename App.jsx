/*
========================================
🏛️ 世界遺産検定アプリ - ビルド進捗
========================================
フェーズ1:  プロジェクト基盤      [✅] 完了
フェーズ2:  データ①(日本遺産)     [✅] 完了
フェーズ3:  データ②(世界前半)     [ ] 未着手
フェーズ4:  データ③(世界後半)     [ ] 未着手
フェーズ5:  共通コンポーネント    [ ] 未着手
フェーズ6:  ホーム画面            [ ] 未着手
フェーズ7:  ①基礎知識 前半       [ ] 未着手
フェーズ8:  ①基礎知識 後半       [ ] 未着手
フェーズ9:  ②地域別 前半         [ ] 未着手
フェーズ10: ②地域別 後半         [ ] 未着手
フェーズ11: ③時代別              [ ] 未着手
フェーズ12: ④登録基準別          [ ] 未着手
フェーズ13: ⑤苦手分析            [ ] 未着手
フェーズ14: AI機能統合            [ ] 未着手
フェーズ15: 仕上げ・結合          [ ] 未着手
========================================
最終更新: フェーズ2完了後
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
// 次フェーズ: フェーズ3「データ②(世界遺産前半)」
// ============================================================

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
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400",
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
    image: "https://images.unsplash.com/photo-1589996448606-27d38c70e37a?w=400",
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
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400",
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
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
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
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
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
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=400",
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
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400",
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
    image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400",
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
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400",
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
    image: "https://images.unsplash.com/photo-1580694777765-1c69b8c79e8c?w=400",
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
    image: "https://images.unsplash.com/photo-1610636961877-49a5af00e23d?w=400",
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
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400",
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
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
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
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=400",
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
    image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=400",
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
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400",
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
    image: "https://images.unsplash.com/photo-1534351450122-a2c5e5769a77?w=400",
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
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400",
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
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
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
    image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400",
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
    image: "https://images.unsplash.com/photo-1578320339921-5a3f3e04c9e8?w=400",
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
    image: "https://images.unsplash.com/photo-1579591919791-0e2ea1e2e5e8?w=400",
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
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400",
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
    image: "https://images.unsplash.com/photo-1591118539649-e9e2c3f5f84c?w=400",
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
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400",
    youtubeQuery: "佐渡島 金山 世界遺産 2024",
    keywords: ["金山", "江戸", "佐渡", "採掘", "2024年"]
  }
];

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

  /* ─── レスポンシブ ──────────────────────────── */
  @media (max-width: 375px) {
    .tab-content { padding: 12px; }
    .tab-bar-btn { font-size: 9px; min-width: 44px; }
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

// ─── プレースホルダータブ（後フェーズで実装） ──────────────
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
      case "home":         return <PlaceholderTab title="ホーム画面（フェーズ6で実装）" />;
      case "kisochishiki": return <PlaceholderTab title="①基礎知識タブ（フェーズ7・8で実装）" />;
      case "chiikibetsu":  return <PlaceholderTab title="②地域別タブ（フェーズ9・10で実装）" />;
      case "jidaibetsu":   return <PlaceholderTab title="③時代別タブ（フェーズ11で実装）" />;
      case "kijunbetsu":   return <PlaceholderTab title="④登録基準別タブ（フェーズ12で実装）" />;
      case "nigatebun":    return <PlaceholderTab title="⑤苦手分析タブ（フェーズ13で実装）" />;
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
