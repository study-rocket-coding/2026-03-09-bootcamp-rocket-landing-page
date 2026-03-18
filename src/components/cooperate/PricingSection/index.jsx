import { Button } from '@/components/ui/button';
import PricingCard from './PricingCard';
import PromoBubble from './PromoBubble';

// 明確從同目錄下的 data.jsx 引入所有資料
import { pricingPlans, pricingHeader, pricingCta } from './data';

const PricingSection = () => {
  // 解構資料以供 JSX 使用
  const { title, description } = pricingHeader;
  const { text: ctaText, href: ctaHref } = pricingCta;

  return (
    <section className="pricing-section bg-primary-violet-200 notebook:px-0 flex flex-col items-center px-6 py-20">
      <hgroup className="pricing-head notebook:pt-18 notebook:mb-10 relative mb-6 flex w-full max-w-269 flex-col items-start pt-0">
        {/* 促銷氣泡會自己去 data.jsx 拿 promoContent */}
        <PromoBubble />

        <h2 className="pricing-title text-h2 mb-3 font-bold text-neutral-700">{title}</h2>
        <p className="pricing-desc text-body3 mb-10 text-neutral-700">{description}</p>
      </hgroup>

      <div className="pricing-grid notebook:grid notebook:grid-cols-2 notebook:gap-6 notebook:overflow-visible scroll-snap-x notebook:scroll-snap-none flex w-full max-w-269 gap-4 overflow-x-auto">
        {/* 渲染定價方案卡片 */}
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>

      {/* 底部 Call to Action 按鈕 - 使用 Shadcn Button */}
      <Button
        asChild
        className="pricing-cta notebook:mt-14 bg-primary-violet-100 text-body1 hover:bg-primary-violet-300 mt-14 h-16 w-full max-w-269 rounded-xl border-2 border-neutral-700 font-bold text-neutral-700 transition-colors"
      >
        <a href={ctaHref}>{ctaText}</a>
      </Button>
    </section>
  );
};

export default PricingSection;
