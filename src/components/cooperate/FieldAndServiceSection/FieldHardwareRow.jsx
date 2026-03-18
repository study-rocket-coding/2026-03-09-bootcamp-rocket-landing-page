import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const FieldHardwareRow = ({ item, index }) => {
  const isReverse = index % 2 === 1;
  const dynamicContentClassName = isReverse ? 'notebook:flex-row-reverse' : '';

  return (
    <Card className="w-full border-none bg-transparent shadow-none">
      <CardContent
        className={cn(
          'notebook:flex-row notebook:gap-10 flex w-full flex-col items-center gap-4 p-0',
          dynamicContentClassName
        )}
      >
        {/* 圖片區域 */}
        <div className="notebook:w-[526px] notebook:h-[388px] notebook:aspect-auto aspect-[332/222] h-auto w-full flex-shrink-0">
          <picture>
            <source media="(max-width: 1024px)" srcSet={item.imgSm} />
            <img src={item.imgLg} alt={item.title} className="h-full w-full object-contain" />
          </picture>
        </div>

        {/* 文字區域 */}
        <div className="notebook:w-[494px] notebook:gap-5 flex w-full flex-col items-start gap-2">
          <div className="notebook:text-2xl text-2xl font-bold text-neutral-700">
            \\ {item.title} /
          </div>
          <div className="notebook:text-base text-left text-[14px] leading-[150%] tracking-[0.02em] text-neutral-600">
            {item.content}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FieldHardwareRow;
