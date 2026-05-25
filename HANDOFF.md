# 世界遺産検定アプリ — 新Sessionへの引継ぎ書
作成日: 2026-05-25

---

## プロジェクト概要

世界遺産検定2級対策のReact学習アプリ。  
全15フェーズのビルドが**完了済み**。GitHub Pagesで公開済み。

- **公開URL**: https://akirarugby-maker.github.io/sekaiisan2/
- **リポジトリ**: `akirarugby-maker/sekaiisan2`
- **開発ブランチ**: `claude/eloquent-carson-g8ORq`
- **メインファイル**: `App.jsx`（4904行、単一ファイルReact）

---

## ファイル構成

```
/home/user/sekaiisan2/
├── App.jsx              # メインソース（4904行）← 編集対象
├── main.jsx             # Viteエントリ（createRoot）
├── index.html           # Viteテンプレート
├── vite.config.js       # base: '/sekaiisan2/'
├── package.json         # React18 + lucide-react + Vite
├── package-lock.json
├── .gitignore           # node_modules/, dist/ を除外
└── .github/
    └── workflows/
        └── deploy.yml   # push → npm build → gh-pages自動デプロイ
```

---

## デプロイ方法

```bash
# 開発確認
npm run dev   # http://localhost:3000/sekaiisan2/

# 本番ビルド（確認用）
npm run build

# 変更をpushすれば GitHub Actions が自動ビルド → gh-pagesへデプロイ
git add App.jsx
git commit -m "変更内容"
git push -u origin claude/eloquent-carson-g8ORq
```

---

## App.jsx 構造サマリ

### 進捗チェックリスト（1〜24行目）
全15フェーズ完了済み ✅

### データ定数
| 定数名 | 内容 | 件数 |
|---|---|---|
| `japanHeritageData` | 日本の世界遺産 | 26件 |
| `worldHeritageDataPart1` | ヨーロッパ+アジア(非日本) | 70件 |
| `worldHeritageDataPart2` | アフリカ+中東+北米+南米+オセアニア | 42件 |
| `worldHeritageData` | Part1+Part2 | 112件 |
| `allHeritageData` | 日本+世界 | 138件合計 |
| `criteriaData` | 登録基準i〜x | 10件 |
| `architectureStyles` | 建築様式 | 8件 |
| `trickQuestions` | ひっかけ問題 | 10件 |

### 遺産データの型
```js
{
  id: "japan-001",
  name: "法隆寺地域の仏教建造物",
  nameEn: "Buddhist Monuments in the Horyu-ji Area",
  country: "日本", countryFlag: "🇯🇵",
  year: 1993,
  type: "文化遺産",   // "文化遺産"|"自然遺産"|"複合遺産"
  region: "asia",
  criteria: ["i","ii","iv","vi"],
  description: "...",
  keywords: ["飛鳥時代","木造建築",...],
  examTips: "...",
  youtubeQuery: "法隆寺 世界遺産",
}
```

### 主要ヘルパー関数
```js
// モックAI（Anthropic API不使用）
getMockAIResponse(type, id)
// type: "explanation"|"story"|"compare"|"review"
// id: 遺産ID・基準番号・地域名

// タイプライターアニメーション
typewriterEffect(text, setter, speed=28)

// クイズ生成（選択肢シャッフル）
makeQuiz(question, correct, wrongs, explanation)
// → { question, choices[4], correctIndex, explanation }
```

### CSSデザイントークン（STYLES定数内）
```css
--color-primary:  #FF8FAB  /* ピンク */
--color-secondary:#A8D8EA  /* 水色 */
--color-accent:   #FFD166  /* 黄色 */
--color-mint:     #B5EAD7  /* ミント */
--color-lavender: #C9B1FF  /* ラベンダー */
--font-main: 'Noto Sans JP', sans-serif
```
Google Fontsは `@import url(...)` でSTYLES定数内に含まれている。

### コンポーネント一覧
```
HeritageCard        遺産カード（名前・国旗・年・種別バッジ）
QuizComponent       4択クイズ（正解表示・解説）
YouTubeButton       YouTube検索リンクボタン
AIButton            モックAI解説ボタン（タイプライター演出）
HeritageDetailModal 遺産詳細モーダル（地域別タブで使用）
HomeTab             ホーム（検索・進捗・試験日・模擬試験起動）
KisochishikiTab     ①基礎知識（A:UNESCO/B:基準/C:分類/D:危機/E:建築）
ChiikibetsuTab      ②地域別（7地域・4学習モード）
JidaibetsuTab       ③時代別（6時代・タイムライン・クイズ）
KijunbetsuTab       ④登録基準別（i〜x詳細・比較・クイズ）
NigatebunTab        ⑤苦手分析（ダッシュボード・弱点ランキング）
MockExam            模擬試験（60問・60分タイマー・合否判定70%）
App                 ルート（グローバルstate・タブルーティング）
```

### グローバルstate（Appコンポーネント）
```js
activeTab        // "home"|"kisochishiki"|"chiikibetsu"|"jidaibetsu"|"kijunbetsu"|"nigatebun"
navigationStack  // 戻るボタン用スタック
examDate         // 試験日（ISO文字列）
progress         // DEFAULT_PROGRESS（各タブの完了状態）
testHistory      // クイズ結果履歴
reviewStatus     // 忘却曲線用ステータス
```
localStorageキー: `"sekai-isan-app-data"`

---

## 既知の修正済みバグ

1. **KijunbetsuTab compareボタンID不一致**（フェーズ14）  
   比較ボタンのIDを `タージ・マハル_シドニー・オペラハウス` → `c.id`（基準ID "i","iv"等）に修正済み

2. **GitHub Pages 403**  
   `gh-pages`ブランチは自動生成されるが、GitHubのSettings→Pages→Source を `gh-pages/root` に手動設定が必要。**設定済み・公開済み**。

---

## 未実装（将来対応のTODOコメントあり）

App.jsx末尾にコメントとして記載：
- 準1級対応：遺産データ300件以上に拡充
- 1級対応：全遺産1199件・論述問題
- 音声読み上げ（Web Speech API）
- オフライン対応（Service Worker）

---

## 新Sessionで作業する場合の注意

1. **必ずApp.jsxを先にReadすること**（4904行・大きい）
2. **Anthropic APIは使用禁止** → `getMockAIResponse`を使う
3. **ブランチ**: `claude/eloquent-carson-g8ORq` に push
4. **pushするだけで自動デプロイ**される（GitHub Actions）
5. `node_modules/`は`npm install`で再生成（gitignoreされている）
