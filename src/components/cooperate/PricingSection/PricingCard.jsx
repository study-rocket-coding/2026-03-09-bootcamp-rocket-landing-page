import React from 'react';
import { cn } from "@/lib/utils";

const PricingCard = ({ title, price, unit, features, isHighlighted = false }) => {
  const dynamicBorderClassName = isHighlighted 
    ? "border-2 border-neutral-700 shadow-none" 
    : "border-none shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]";

  return (
    <article className={cn(
      "pricing-card bg-white rounded-2xl p-4 notebook:px-20 notebook:py-12 flex flex-col w-full min-w-[calc(100vw-96px)] shrink-0 notebook:min-w-0 scroll-snap-start",
      dynamicBorderClassName
    )}>
      <h4 className="card-title text-center text-h4 font-bold mb-6">{title}</h4>
      
      <div className="card-price bg-neutral-200 py-7 px-6 flex items-baseline justify-center gap-2 mb-6">
        <span className="amount font-main font-bold text-body1 notebook:text-h4">$ {price}</span>
        <span className="unit text-body2">/ {unit}</span>
      </div>

      <ul className="card-list flex flex-col gap-4 items-start">
        {features.map((feature) => {
          const dynamicTextClassName = feature.isOriginalPrice 
            ? "text-neutral-600 opacity-50" 
            : "text-neutral-700 font-medium";
          
          const dynamicHighlightClassName = feature.isHighlighted 
            ? "bg-linear-to-b from-transparent from-50% to-accent-orange to-50%" 
            : "";

          return (
            <li key={feature.text} className={cn(
              "relative pl-7 leading-normal",
              "before:content-[''] before:absolute before:left-0 before:top-0.75 before:w-4.5 before:h-4.5 before:rounded-full before:border-[1.5px] before:border-neutral-700",
              "after:content-[''] after:absolute after:left-1 after:top-1.75 after:w-2.5 after:h-1.5 after:border-l-2 after:border-l-neutral-700 after:border-b-2 after:border-b-neutral-700 after:-rotate-45",
              dynamicTextClassName,
              dynamicHighlightClassName
            )}>
              {feature.text}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default PricingCard;
