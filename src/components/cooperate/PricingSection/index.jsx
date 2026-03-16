import PricingCard from './PricingCard';
import PromoBubble from './PromoBubble';

// 明確從同目錄下的 data.jsx 引入所有資料
import { PRICING_PLANS, PRICING_HEADER, PRICING_CTA } from './data';

const PricingSection = () => {
  // 解構資料以供 JSX 使用
  const { title, description } = PRICING_HEADER;
  const { text: ctaText, href: ctaHref } = PRICING_CTA;

  return (
    <section className="pricing-section bg-primary-violet-200 py-20 px-6 notebook:px-0 flex flex-col items-center">
      <hgroup className="pricing-head max-w-269 w-full pt-0 notebook:pt-18 mb-6 notebook:mb-10 relative flex flex-col items-start">
        {/* 促銷氣泡會自己去 data.jsx 拿 PROMO_CONTENT */}
        <PromoBubble />
        
        <h2 className="pricing-title text-h2 font-bold mb-3 text-neutral-700">{title}</h2>
        <p className="pricing-desc text-body3 text-neutral-700 mb-10">
          {description}
        </p>
      </hgroup>

      <div className="pricing-grid max-w-269 w-full flex notebook:grid notebook:grid-cols-2 gap-4 notebook:gap-6 overflow-x-auto notebook:overflow-visible scroll-snap-x notebook:scroll-snap-none">
        {/* 渲染定價方案卡片 */}
        {PRICING_PLANS.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

      {/* 底部 Call to Action 按鈕 */}
      <a
        href={ctaHref}
        className="pricing-cta mt-14 notebook:mt-14 max-w-269 w-full h-16 flex items-center justify-center border-2 border-neutral-700 rounded-xl no-underline text-neutral-700 bg-primary-violet-100 text-body1 font-bold"
      >
        {ctaText}
      </a>
    </section>
  );
};

export default PricingSection;
