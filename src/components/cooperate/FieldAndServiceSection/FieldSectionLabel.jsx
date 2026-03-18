import React from 'react';
import { Badge } from "@/components/ui/badge";

const FieldSectionLabel = ({ children }) => {
    return (
        <Badge variant="rocketLabel" asChild>
            <h4 className="w-fit h-[30px] notebook:h-[42px] whitespace-nowrap leading-normal bg-linear-to-b from-transparent from-50% to-accent-orange to-50% text-[20px] notebook:text-[28px] font-bold px-1">
                #{ children }
                </h4>
        </Badge>
    );
};

export default FieldSectionLabel;