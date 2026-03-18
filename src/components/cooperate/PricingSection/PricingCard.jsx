import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import checkIcon from "@/assets/icon/ic-check-sm.svg";

const PricingCard = ({ title, price, unit, features, isHighlighted = false }) => {
  const dynamicBorderClassName = isHighlighted 
    ? "border-2 border-neutral-700 shadow-none" 
    : "border-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]";

  return (
    <Card
      className={cn(
        "bg-white rounded-2xl p-4 notebook:px-20 notebook:py-12 flex flex-col w-full min-w-[calc(100vw-96px)] shrink-0 notebook:min-w-0 scroll-snap-start border-none shadow-none ring-0",
        isHighlighted ? "border-2 border-neutral-700" : "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
      )}
    >
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-center text-h4 font-bold p-0">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="card-price bg-neutral-200 py-7 px-6 flex items-baseline justify-center gap-2 mb-6">
          <span className="amount font-main font-bold text-body1 notebook:text-h4">$ {price}</span>
          <span className="unit text-body2">/ {unit}</span>
        </div>
        
        <ul className="card-list flex flex-col gap-4 items-start">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "relative pl-8 leading-normal flex items-start gap-2",
                feature.isOriginalPrice ? "text-neutral-600 opacity-50" : "text-neutral-700",
                feature.isHighlighted && "bg-linear-to-b from-transparent from-50% to-accent-orange to-50%"
              )}
            >
              <img src={checkIcon} alt="check" className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
