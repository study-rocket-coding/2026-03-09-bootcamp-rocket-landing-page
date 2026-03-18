## 🚀 專案背景

本專案目標是將原生 HTML/SCSS 專案轉換為 React + Tailwind CSS v4 + Shadcn UI + React Router 架構，分三個 Phase 漸進推進。

---

## 📍 當前階段：Phase 1 - Vibe Coding 轉換

### 🎯 當前開發重點

- **主要任務**：將 `legacy-reference/index.html` 轉換為 `src/pages/Home.jsx`。
- **組件拆分**：將首頁各 `<section>` 拆為獨立元件，存放於 `src/components/home/`。
- **組合邏輯**：在 `Home.jsx` 中引用並組合這些首頁專用元件。

> ⚠️ Phase 2 將導入 Shadcn UI 取代現有 UI 元素，Phase 3 將導入 React Router 實作多頁面路由，開發時請避免過度依賴自定義結構。
> 

---

## 🛠️ 開發規範

### 語言偏好

所有回覆與程式碼註解請使用**繁體中文**。

### 核心技術

- React (Vite) + Tailwind CSS v4
- Phase 2：Shadcn UI
- Phase 3：React Router

### 樣式規範

- Tailwind 優先：完全使用 Tailwind v4 Utility Classes。
- 樣式來源：請優先解析 `legacy-reference/styles/main.css` 中的最終數值（如 Hex 色碼、px 間距），並轉換為對應的 Tailwind 類別。
- 嚴禁自定義樣式：禁止在 React 元件中寫死 CSS 或 Inline Styles。
- 主題擴充：若需定義專屬顏色或變數，請告知我修改 `src/index.css` 的 `@theme` 區塊。
### 元件規範

- 每個元件必須使用 `export default`。
- 使用 Functional Components 與 Hooks。
- 圖片路徑必須正確：統一存放於 `src/assets/`。

---

## 🖼️ 資源與路徑規範

- 統一使用 `import` 方式引入圖片（配合 `vite.config.js` 的 `base` 設定）：

```jsx
  import logo from '../assets/images/logo.png';
```

- 舊專案 `legacy-reference/assets/` 的圖片，現在皆位於 `src/assets/`。

---

## 📁 參考與產出路徑

| 類型 | 參考來源 | 產出目標 |
| --- | --- | --- |
| 首頁 | `legacy-reference/index.html` | `src/pages/Home.jsx` |
| 首頁專用元件 | legacy-reference 視覺邏輯 | `src/components/home/`（如 `HomeHero.jsx`、`About.jsx`） |
| 共用元件 | 跨頁出現的區塊 | `src/components/common/`（如 `Navbar.jsx`、`Footer.jsx`） |

---

## 🔍 Code Review 規則

當我請你進行 Code Review 時：

1. **精確定位**：說明建議是針對哪個檔案、哪一行。
2. **對齊設計**：檢查是否符合 `legacy-reference` 中的設計規範。
3. **對齊規範**：檢查是否符合本文件的開發規範（樣式、元件、命名）。
4. **Phase 相容性**：提醒是否有寫法會造成 Phase 2、3 改動困難。