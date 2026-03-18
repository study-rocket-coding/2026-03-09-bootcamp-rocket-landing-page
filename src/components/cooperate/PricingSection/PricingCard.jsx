import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import checkIcon from '@/assets/icon/ic-check-sm.svg';

const PricingCard = ({ title, price, unit, features, isHighlighted = false }) => {
  const dynamicBorderClassName = isHighlighted
    ? 'border-2 border-neutral-700 shadow-none'
    : 'border-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]';
  return (
    <Card
      className={cn(
        'notebook:px-20 notebook:py-12 notebook:min-w-0 scroll-snap-start flex w-full min-w-[calc(100vw-96px)] shrink-0 flex-col rounded-2xl border-none bg-white p-4 shadow-none ring-0',
        dynamicBorderClassName
      )}
    >
      <CardHeader className="mb-6 p-0">
        <CardTitle className="text-h4 p-0 text-center font-bold">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="card-price mb-6 flex items-baseline justify-center gap-2 bg-neutral-200 px-6 py-7">
          <span className="amount font-main text-body1 notebook:text-h4 font-bold">$ {price}</span>
          <span className="unit text-body2">/ {unit}</span>
        </div>

        <ul className="card-list flex flex-col items-start gap-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                'relative flex items-start gap-2 pl-8 leading-normal',
                feature.isOriginalPrice ? 'text-neutral-600 opacity-50' : 'text-neutral-700',
                feature.isHighlighted &&
                  'to-accent-orange bg-linear-to-b from-transparent from-50% to-50%'
              )}
            >
              <img src={checkIcon} alt="check" className="mt-0.5 h-5 w-5 shrink-0" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
