import React from 'react';
import { row1, row2 } from './data';

const SuccessfulCase = () => {
  return (
    <section className="successful-case-container flex items-center justify-center bg-white px-12 pt-12 pb-[92px] min-[1440px]:px-[72px] min-[1440px]:pt-[92px] min-[1440px]:pb-[120px]">
      <div className="successful-case-box flex w-full max-w-[1296px] flex-col items-center justify-between gap-7">
        <h2 className="successful-case-box-title w-full text-center text-[28px] font-bold min-[1440px]:text-[36px]">成功案例</h2>
        
        <div className="successful-case-box-scroll w-full overflow-x-auto overflow-y-hidden scrollbar-none min-[1440px]:overflow-visible">
          <div className="successful-case-box-4pic flex w-fit items-center justify-start gap-6 min-[1440px]:w-full min-[1440px]:justify-center min-[1440px]:gap-6">
            {row1.map((img) => (
              <img 
                key={img.alt} 
                src={img.src} 
                alt={img.alt} 
                className="h-auto w-[240px] min-w-[240px] aspect-[240/160] min-[1440px]:w-full min-[1440px]:max-w-[306px] min-[1440px]:aspect-[306/204]" 
              />
            ))}
          </div>
        </div>

        <div className="successful-case-box-scroll w-full overflow-x-auto overflow-y-hidden scrollbar-none min-[1440px]:overflow-visible">
          <div className="successful-case-box-4pic flex w-fit items-center justify-start gap-6 min-[1440px]:w-full min-[1440px]:justify-center min-[1440px]:gap-6">
            {row2.map((img) => (
              <img 
                key={img.alt} 
                src={img.src} 
                alt={img.alt} 
                className="h-auto w-[240px] min-w-[240px] aspect-[240/160] min-[1440px]:w-full min-[1440px]:max-w-[306px] min-[1440px]:aspect-[306/204]" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulCase;
