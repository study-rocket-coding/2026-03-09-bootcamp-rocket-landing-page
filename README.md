# 🚀 2026 火箭隊 Landing Page 現代化轉換專案

本專案旨在將傳統的 HTML/SCSS 網頁架構，全面轉換為現代化的 **React + Tailwind CSS v4** 框架。透過元件化開發 (Component-Based) 與原子化樣式 (Utility-First)，提升程式碼的複用性與開發效率。

---

## 🛠️ 技術堆疊 (Tech Stack)

專案採用當前主流的開發工具鏈，平衡開發速度與執行效能。

| 分類 | 技術工具 | 說明 |
| :--- | :--- | :--- |
| **建置工具** | [Vite](https://vitejs.dev/) | 極速的現代化前端建置工具 |
| **前端框架** | [React 19](https://react.dev/) | 用於建構使用者介面的 JavaScript 函式庫 |
| **樣式處理** | [Tailwind CSS v4](https://tailwindcss.com/) | 新一代高效能原子化 CSS 框架 |
| **UI 元件庫** | [Shadcn UI](https://ui.shadcn.com/) | 基於 Radix UI 的可自定義元件庫 (Phase 2) |
| **路由管理** | [React Router 7](https://reactrouter.com/) | 支援多頁面導覽與動態路由 (Phase 3) |
| **程式碼規範** | [ESLint](https://eslint.org/) | 確保程式碼品質與風格統一 |

---

## 📂 專案資料夾結構 (Directory Structure)

```text
src/
├── assets/          # 靜態資源（圖片、圖標等）
├── components/      # 元件存放處
│   ├── common/      # 共用元件（如 Footer, MainLayout）
│   ├── home/        # 首頁專用元件區
│   ├── cooperate/   # 合作頁面專用元件區
│   └── ui/          # Shadcn UI 基礎元件
├── lib/             # 公用函式與工具（如 utils.js）
├── pages/           # 頁面層級組件（Home, CooperatePage）
├── App.jsx          # 主要應用入口與路由配置
├── index.css        # 全域樣式與 Tailwind 主題設定
└── main.jsx         # 渲染入口點
```

---

## 📈 開發階段 (Development Phases)

專案開發分為三個階段，採取漸進式迭代策略。**每個階段的產出皆須由 Seon Kuraito 進行 Code Review 確保品質。**

### Phase 1：Vibe Coding 結構轉換
- **目標**：將原生 HTML/SCSS 完整轉換為 React 元件結構。
- **開發方式**：採用 **Vibe Coding** 模式，透過 **CLI 工具 (如 Gemini CLI)** 將設計規格與舊有代碼轉換為 Tailwind v4 + React 元件。
- **重點項目**：
  - **語意化元件拆分**：將頁面各區塊封裝為獨立元件。
  - **樣式解析與轉換**：解析舊有 SCSS 數值，精準對齊 Tailwind v4 原子化類別。
  - **靜態資源優化**：統一透過 `import` 方式管理與導入 Assets。

### Phase 2：UI 優化與 Shadcn UI 導入
- **目標**：以 [Shadcn UI](https://ui.shadcn.com/) 取代自定義的 UI 元素，提升一致性。
- **重點項目**：
  - **基礎元件導入**：已實際導入 **Button**、**Card**、**Badge**、**Carousel** 等 Shadcn 組件。
  - **元件重構**：使用 Shadcn 元件重寫現有的 UI 區塊（如 AboutCard, ServiceCard）。

### Phase 3：多頁面路由與狀態整合
- **目標**：實作單頁面應用 (SPA) 導覽並優化部署設定。
- **重點項目**：
  - **路由佈署最佳化**：配置 `BrowserRouter` 的 `basename` 以支援 GitHub Pages 部署。
  - **多頁面結構串接**：使用 React Router 整合首頁與合作頁面 (Cooperate Page)。

---

## 🌿 分支策略與流程 (Git Flow)

專案採用嚴謹的分支管理策略，確保程式碼的穩定性與部署的自動化。

### 分支規範：
- **`main`**：正式發佈分支，僅接受來自 `dev` 的合併請求。
- **`dev`**：開發主分支，所有 Feature 合併的目標。
- **`preparing`**：部署預備分支，此分支的任何變更將自動觸發 GitHub Pages 部署。
- **`feature/*`**：功能開發分支，命名範例：`feature/about-section`。
- **`fix/*`**：錯誤修復分支，命名範例：`fix/navbar-mobile-issue`。

---

## 👥 團隊角色與分工

根據實務開發紀錄與貢獻內容，團隊分工如下：

| 角色 | 貢獻者 | 職責 |
| :--- | :--- | :--- |
| **外部審核 (Reviewer)** | **Seon Kuraito** | 負責各階段 (Phase) 的關鍵 Code Review 與技術品質指導。 |
| **基礎架構與首頁開發** | **Chieh** | 負責專案基礎架構（CI/CD、React Router）、**Shadcn UI 環境建置**、首頁元件拆分與 **Shadcn 重構**。 |
| **元件開發與合作頁面** | **Sunset3777 (LYX)** | 主力開發與維護 UI 元件，負責 **Cooperate Page 轉換為 Shadcn** 以及多項 UI 樣式優化。 |

---

## 📦 部署與建置 (Deployment & Build)

本專案已整合 GitHub Actions，實現自動化持續部署 (CI/CD)。

- **部署環境**：[GitHub Pages](https://pages.github.com/)
- **觸發分支**：`preparing` 分支
- **自動化流程**：
  1. 偵測到 `preparing` 分支 Push 事件。
  2. 執行 `npm install` 與 `npm run build`。
  3. 自動產生 `dist` 資料夾並部署至專案 GitHub Pages。

---

## 🚀 快速開始

### 1. 複製專案
```bash
git clone https://github.com/study-rocket-coding/2026-03-09-bootcamp-rocket-landing-page.git
cd 2026-03-09-bootcamp-rocket-landing-page
```

### 2. 安裝依賴
```bash
npm install
```

### 3. 本地開發
```bash
npm run dev
```

### 4. 專案建置
```bash
npm run build
```
