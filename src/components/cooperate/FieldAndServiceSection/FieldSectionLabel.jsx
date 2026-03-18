import React from 'react';
import { Badge } from '@/components/ui/badge';

const FieldSectionLabel = ({ children }) => {
  return (
    <Badge variant="rocketLabel" asChild>
      <h4 className="notebook:h-[42px] to-accent-orange notebook:text-[28px] h-[30px] w-fit bg-linear-to-b from-transparent from-50% to-50% px-1 text-[20px] leading-normal font-bold whitespace-nowrap">
        #{children}
      </h4>
    </Badge>
  );
};

export default FieldSectionLabel;
