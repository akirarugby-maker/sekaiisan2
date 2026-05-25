/*
========================================
🏛️ 世界遺産検定アプリ - ビルド進捗
========================================
フェーズ1:  プロジェクト基盤      [✅] 完了
フェーズ2:  データ①(日本遺産)     [ ] 未着手
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
最終更新: フェーズ1完了後
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
// 次フェーズ: フェーズ2「データ①(日本遺産)」
// ============================================================

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
