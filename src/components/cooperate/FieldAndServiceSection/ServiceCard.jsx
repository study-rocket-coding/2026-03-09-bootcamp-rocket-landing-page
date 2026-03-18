import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <Card className="notebook:max-w-[340px] notebook:flex-col notebook:items-center notebook:gap-6 flex w-full max-w-[332px] flex-row items-start gap-4">
      <CardContent className="notebook:flex-col notebook:items-center notebook:gap-6 flex flex-row items-start gap-4 p-0">
        <div className="notebook:w-30 notebook:h-30 flex h-12 w-12 flex-shrink-0 items-center justify-center">
          <img src={icon} alt={title} className="h-full w-full" />
        </div>
        <div className="notebook:text-center text-left">
          <h5 className="notebook:text-[18px] notebook:mb-1 mb-2 text-base font-bold text-neutral-700">
            {title}
          </h5>
          <p className="notebook:max-w-[244px] mx-auto max-w-none text-[14px] leading-[150%] text-neutral-600">
            {desc}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
