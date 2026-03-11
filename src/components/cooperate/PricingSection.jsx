const PricingSection = () => {
  return (
    <section className="pricing-section bg-primary-violet-200 py-20 px-6 notebook:px-0 flex flex-col items-center">
      <hgroup className="pricing-head max-w-269 w-full pt-0 notebook:pt-18 mb-6 notebook:mb-10 relative flex flex-col items-start">
        {/* 促銷氣泡 */}
        <div className="promo-bubble-wrap relative notebook:absolute notebook:-top-3.75 notebook:left-15 mb-4 notebook:mb-0">
          <p className="promo-bubble relative inline-flex items-center px-4 py-4 bg-white border-2 border-neutral-700 rounded-xl whitespace-normal notebook:whitespace-nowrap">
            <span className="promo-bubble-text text-body4 text-neutral-700 leading-normal">
              <strong className="font-bold text-neutral-700">2023</strong>{' '}
              年為試營運階段，進駐可享有
              <strong className="font-bold text-neutral-700">限定優惠價</strong>!
            </span>
            {/* 氣泡尾巴 - 電腦版 */}
            <span className="promo-bubble-tail absolute left-6.25 notebook:left-10 translate-x-[-50%] -bottom-3.5 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-15 border-t-neutral-700">
              <span className="promo-bubble-tail-inner absolute left-1/2 -top-4 translate-x-[-50%] w-0 h-0 border-l-13 border-l-transparent border-r-13 border-r-transparent border-t-13 border-t-white" />
            </span>
          </p>
        </div>

        <h2 className="pricing-title text-h2 font-bold mb-3 text-neutral-700">進駐費用</h2>
        <p className="pricing-desc text-body3 text-neutral-700 mb-10">
          進駐區域共分兩區塊：培訓區域及進駐區域，目前僅接受租期 1 個月以上，單日暫不開放。
        </p>
      </hgroup>

      <div className="pricing-grid max-w-269 w-full flex notebook:grid notebook:grid-cols-2 gap-4 notebook:gap-6 overflow-x-auto notebook:overflow-visible scroll-snap-x notebook:scroll-snap-none">
        {/* 卡片 1 */}
        <article className="pricing-card bg-white rounded-2xl border-2 border-neutral-700 p-4 notebook:px-20 notebook:py-12 flex flex-col w-full min-w-[calc(100vw-96px)] shrink-0 notebook:min-w-0 scroll-snap-start">
          <h4 className="card-title text-center text-h4 font-bold mb-6">進駐者</h4>
          <div className="card-price bg-neutral-200 py-7 px-6 flex items-baseline justify-center gap-2 mb-6">
            <span className="amount font-main font-bold text-body1 notebook:text-h4">$ 3,200</span>
            <span className="unit text-body2">/ Month</span>
          </div>
          <ul className="card-list flex flex-col gap-4 items-start">
            <li className="relative pl-7 text-neutral-700 bg-linear-to-b from-transparent from-50% to-accent-orange to-50% leading-normal before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              進駐區域
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              9:00-18:00 可使用
            </li>
            <li className="relative pl-7 text-neutral-700 bg-linear-to-b from-transparent from-50% to-accent-orange to-50% leading-normal before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              固定座位
            </li>
            <li className="relative pl-7 text-neutral-700 bg-linear-to-b from-transparent from-50% to-accent-orange to-50% leading-normal before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              專屬置物櫃
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              免費無線網路
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              免費咖啡茶水
            </li>
            <li className="relative pl-7 text-neutral-600 opacity-50 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              原價｜3,500 / Month
            </li>
          </ul>
        </article>

        {/* 卡片 2 */}
        <article className="pricing-card bg-white rounded-2xl border-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] p-4 notebook:px-20 notebook:py-12 flex flex-col w-full min-w-[calc(100vw-96px)] shrink-0 notebook:min-w-0 scroll-snap-start">
          <h4 className="card-title text-center text-h4 font-bold mb-6">單日使用（暫不提供）</h4>
          <div className="card-price bg-neutral-200 py-7 px-6 flex items-baseline justify-center gap-2 mb-6">
            <span className="amount font-main font-bold text-body1 notebook:text-h4">$ 300</span>
            <span className="unit text-body2">/ Day</span>
          </div>
          <ul className="card-list flex flex-col gap-4 items-start">
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              培訓區域
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              9:00-18:00 可使用
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              非固定座位
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              共用置物櫃
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              免費無線網路
            </li>
            <li className="relative pl-7 text-neutral-700 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              免費咖啡茶水
            </li>
            <li className="relative pl-7 text-neutral-600 opacity-50 before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700 after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45">
              原價｜300 / Day
            </li>
          </ul>
        </article>
      </div>

      <a
        href="/something"
        className="pricing-cta mt-14 notebook:mt-14 max-w-269 w-full h-16 flex items-center justify-center border-2 border-neutral-700 rounded-xl no-underline text-neutral-700 bg-primary-violet-100 text-body1 font-bold"
      >
        馬上填表單！
      </a>
    </section>
  );
};

export default PricingSection;
