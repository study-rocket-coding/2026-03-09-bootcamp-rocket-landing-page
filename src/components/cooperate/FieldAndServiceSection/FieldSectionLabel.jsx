import React from 'react';

const FieldSectionLabel = ({ children }) => {
    return (
        <h4 className="w-fit h-[30px] notebook:h-[42px] whitespace-nowrap leading-normal bg-linear-to-b from-transparent from-50% to-accent-orange to-50% text-[20px] notebook:text-[28px] font-bold px-1">
          #{ children }
        </h4>  
    );
};

export default FieldSectionLabel;