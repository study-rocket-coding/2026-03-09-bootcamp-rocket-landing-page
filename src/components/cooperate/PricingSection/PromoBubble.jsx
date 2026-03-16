import { PROMO_CONTENT } from './data';

const PromoBubble = () => {
  const { year, highlight, textBefore, textAfter } = PROMO_CONTENT;

  return (
    <div className="promo-bubble-wrap relative notebook:absolute notebook:-top-3.75 notebook:left-15 mb-4 notebook:mb-0">
      <div className="promo-bubble relative inline-flex items-center px-4 py-4 bg-white border-2 border-neutral-700 rounded-xl whitespace-normal notebook:whitespace-nowrap">
        <span className="promo-bubble-text text-body4 text-neutral-700 leading-normal">
          <strong className="font-bold text-neutral-700">{year}</strong>
          {textBefore}
          <strong className="font-bold text-neutral-700">{highlight}</strong>
          {textAfter}
        </span>
        {/* 氣泡尾巴 - 電腦版 */}
        <span className="promo-bubble-tail absolute left-6.25 notebook:left-10 translate-x-[-50%] -bottom-3.5 w-0 h-0 border-l-15 border-l-transparent border-r-15 border-r-transparent border-t-15 border-t-neutral-700">
          <span className="promo-bubble-tail-inner absolute left-1/2 -top-4 translate-x-[-50%] w-0 h-0 border-l-13 border-l-transparent border-r-13 border-r-transparent border-t-13 border-t-white" />
        </span>
      </div>
    </div>
  );
};

export default PromoBubble;
