import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FieldHardwareRow = ({ item, index }) => {
  const isReverse = index % 2 === 1;
  const dynamicContentClassName = isReverse ? "notebook:flex-row-reverse" : "";

  return (
    <Card className="w-full border-none shadow-none bg-transparent">
      <CardContent className={cn(
        "p-0 flex flex-col notebook:flex-row items-center gap-4 notebook:gap-10 w-full",
        dynamicContentClassName
      )}>
        {/* 圖片區域 */}
        <div className="w-full notebook:w-[526px] h-auto notebook:h-[388px] aspect-[332/222] notebook:aspect-auto flex-shrink-0">
          <picture>
            <source media="(max-width: 1024px)" srcSet={item.imgSm} />
            <img src={item.imgLg} alt={item.title} className="w-full h-full object-contain" />
          </picture>
        </div>

        {/* 文字區域 */}
        <div className="w-full notebook:w-[494px] flex flex-col items-start gap-2 notebook:gap-5">
          <div className="text-2xl notebook:text-2xl font-bold text-neutral-700">\\ {item.title} /</div>
          <div className="text-[14px] notebook:text-base text-neutral-600 leading-[150%] tracking-[0.02em] text-left">
            {item.content}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FieldHardwareRow;
