import mapLg from '../../assets/map/map-lg.png';

const LocationSection = () => {
  return (
    <section className="location-section flex justify-center w-full px-4 notebook:px-0">
      {/* 使用 max-w 與 w-full 確保在不同寬度下都能自適應，不再卡死在 1440px */}
      <div className="location-card w-full max-w-[1440px] h-auto notebook:h-[540px] bg-primary-violet-200 rounded-2xl notebook:rounded-[40px] p-9 notebook:px-10 desktop:px-[72px] notebook:py-10 desktop:py-[60px] flex flex-col notebook:grid notebook:grid-cols-[minmax(0,636px)_minmax(0,500px)] notebook:gap-x-10 desktop:gap-x-[100px] items-center notebook:items-start gap-6 notebook:gap-0">
        
        {/* 地圖區域 - 使用 w-full 與 max-w 確保不溢出 */}
        <div className="location-map w-full notebook:max-w-[636px] h-[240px] notebook:h-[420px] rounded-2xl overflow-hidden order-2 notebook:order-1">
          <img src={mapLg} alt="Map" className="w-full h-full object-cover block" />
        </div>

        {/* 文字區域 - 寬度改為自適應 */}
        <div className="location-info w-full notebook:max-w-[500px] flex flex-col order-1 notebook:order-2">
          <span className="location-eyebrow text-[14px] notebook:text-[20px] leading-[150%] tracking-[0.02em] font-bold text-neutral-700 mb-2 notebook:mb-5">
            About us
          </span>
          <h2 className="location-title text-[28px] notebook:text-[36px] font-bold leading-[150%] tracking-[0.02em] mb-4 notebook:mb-10 text-neutral-700">
            共同空間簡介
          </h2>
          <p className="location-desc text-base leading-[150%] tracking-[0.02em] font-medium text-neutral-700">
            共同空間有近 100 坪的空間，在開放式的公共區域中有
            <strong className="font-bold">休憩區以及舒適沙發討論區</strong>，
            在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，
            並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
