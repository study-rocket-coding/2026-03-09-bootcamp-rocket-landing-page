import { Badge } from "@/components/ui/badge";
import { promoContent } from './data';

const PromoBubble = () => {
  const { year, highlight, textBefore, textAfter } = promoContent;

  return (
    <div className="promo-bubble-wrap relative notebook:absolute notebook:-top-3.75 notebook:left-15 mb-4 notebook:mb-0">
      <div className="promo-bubble relative inline-flex items-center px-4 py-4 bg-white border-2 border-neutral-700 rounded-xl whitespace-normal notebook:whitespace-nowrap">
        <span className="promo-bubble-text text-body4 text-neutral-700 leading-normal flex items-center gap-1">
          <Badge variant="secondary" className="bg-neutral-200 text-neutral-700 border-neutral-700 border font-bold h-auto py-1 px-2 text-body4">
            {year}
          </Badge>
          <span>{textBefore}</span>
          <Badge variant="default" className="bg-accent-orange text-neutral-700 border-neutral-700 border font-bold h-auto py-1 px-2 text-body4">
            {highlight}
          </Badge>
          <span>{textAfter}</span>
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
