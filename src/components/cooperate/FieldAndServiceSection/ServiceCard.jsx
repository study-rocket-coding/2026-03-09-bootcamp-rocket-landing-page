import React from 'react';

const ServiceCard = ({ icon, title, desc }) => {
    return(
    
    <div className="w-full max-w-[332px] notebook:max-w-[340px] flex flex-row notebook:flex-col items-start notebook:items-center gap-4 notebook:gap-6">
        <div className="w-12 h-12 notebook:w-30 notebook:h-30 flex-shrink-0 flex items-center justify-center">
            <img src={icon} alt={title} className="w-full h-full" />
            </div>
            <div className="text-left notebook:text-center">
                <h5 className="text-base notebook:text-[18px] font-bold text-neutral-700 mb-2 notebook:mb-1">{title}</h5>
                <p className="text-neutral-600 text-[14px] leading-[150%] max-w-none notebook:max-w-[244px] mx-auto">
                    {desc}
                    </p>
        </div>
    </div>
);
};

export default ServiceCard;