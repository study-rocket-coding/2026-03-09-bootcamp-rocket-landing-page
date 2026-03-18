import { promoContent } from './data';

const PromoBubble = () => {
  const { year, highlight, textBefore, textAfter } = promoContent;

  return (
    <div className="promo-bubble-wrap notebook:absolute notebook:-top-3.75 notebook:left-15 notebook:mb-0 relative mb-4">
      <div className="promo-bubble notebook:whitespace-nowrap relative inline-flex items-center rounded-xl border-2 border-neutral-700 bg-white px-4 py-4 whitespace-normal">
        <span className="promo-bubble-text text-body4 leading-normal text-neutral-700">
          <strong className="font-bold text-neutral-700">{year}</strong>
          {textBefore}
          <strong className="font-bold text-neutral-700">{highlight}</strong>
          {textAfter}
        </span>
        {/* 氣泡尾巴 - 電腦版 */}
        <span className="promo-bubble-tail notebook:left-10 absolute -bottom-3.5 left-6.25 h-0 w-0 translate-x-[-50%] border-t-15 border-r-15 border-l-15 border-t-neutral-700 border-r-transparent border-l-transparent">
          <span className="promo-bubble-tail-inner absolute -top-4 left-1/2 h-0 w-0 translate-x-[-50%] border-t-13 border-r-13 border-l-13 border-t-white border-r-transparent border-l-transparent" />
        </span>
      </div>
    </div>
  );
};

export default PromoBubble;
