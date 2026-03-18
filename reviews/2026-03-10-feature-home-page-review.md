# Code Review Report (2026-03-10)

**審查範圍**: `0cd9de0b..HEAD`
**專案階段**: Phase 1 - Vibe Coding 轉換

---

## 🔍 綜合審查摘要

本次變更主要針對首頁各元件（`AboutRocket`, `AboutTraining`, `FAQ`, `HomeHero`, `Organizers`, `SuccessfulCase`）進行了 RWD 尺寸修正與 Tailwind v4 樣式細調，使其更貼近 `legacy-reference` 的設計稿。

---

## 🛠️ 詳細審查建議

### 1. `src/components/home/AboutRocket.jsx`

- **精確定位**: L26-L32 (`AboutCard` 元件中的圖片容器)
- **對齊設計**: 已修正 Mobile-first 邏輯。行動版高度 `60px` 搭配 `mt-[136px]`，桌面版（`sm:`）回復 `208px` 且 `mt-0`。這完全符合 `_about-card.scss` 中的設計。
- **對齊規範**: 修正了 `AboutCard` 的 Padding (`px-5 py-4 md:p-9`)，使其在小螢幕下有更好的留白。
- **Phase 相容性**: 良好。結構清晰，利於 Phase 2 導入 Shadcn UI 時替換為 Card 組件。

### 2. `src/components/home/AboutTraining.jsx`

- **精確定位**: L13-L14 (背景圖處理)
- **對齊規範**: 移除了 `inline style` 的 `backgroundImage`，改用 `src/index.css` 定義的 `@theme` 變數 `bg-training-pattern`。符合「嚴禁自定義樣式」的規範。
- **對齊設計**: `DetailCard` 的佈局修正為 `flex-col-reverse` (Mobile)，確保在行動版時圖片位於文字上方（或依據反轉邏輯調整），更精確地對齊了原始設計。

### 3. `src/components/home/HomeHero.jsx`

- **精確定位**: L16, L60 (標題文字位移)
- **對齊規範**: 修正了行動版文字位移（`pl-14`），確保在行動版時標題不會被頭像圖標遮擋。
- **對齊設計**: 修正了 `min-h-0` 與 `lg:min-h-[757px]` 的切換，避免行動版出現過多留白。

### 4. `src/components/home/Organizers.jsx`

- **精確定位**: L36-L37 (`Organizers` 標題與容器間距)
- **對齊設計**: 修正了標題 `absolute` 定位（`top-[-18px]`）與滾動容器的內距（`pt-9 md:pt-14`），確保視覺上標題能完美橫跨在背景邊界上。

### 5. `src/components/home/SuccessfulCase.jsx`

- **精確定位**: L21, L33 (滾動容器)
- **對齊規範**: 加入了 `scrollbar-none` 與 `overflow-x-auto`，確保在行動版時可以水平滑動觀看案例圖片。
- **對齊設計**: 針對 1440px 以上螢幕（`min-[1440px]:`）進行了佈局優化，使圖片寬度與間距回歸設計稿數值。

### 6. `src/index.css`

- **精確定位**: L25-L30
- **對齊規範**: 正確地將背景圖片路徑（`--background-image-hero-banner` 等）與動畫延遲（`10s`）收納至 CSS 變數中，體現了 Tailwind v4 的主題擴充實作方式。

---

## ✅ 結論

本次變更顯著提升了 RWD 的表現，且嚴格遵守了 `GEMINI.md` 中關於 Tailwind v4 優先與路徑規範的要求。代碼品質優良，完全符合 Phase 1 的轉換目標。
