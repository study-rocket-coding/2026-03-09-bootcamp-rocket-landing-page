import React from 'react';
import case1 from '../../assets/case/case1.png';
import case2 from '../../assets/case/case2.png';
import case3 from '../../assets/case/case3.png';
import case4 from '../../assets/case/case4.png';
import case5 from '../../assets/case/case5.png';
import case6 from '../../assets/case/case6.png';
import case7 from '../../assets/case/case7.png';
import case8 from '../../assets/case/case8.png';

const SuccessfulCase = () => {
  const row1 = [case1, case2, case3, case4];
  const row2 = [case5, case6, case7, case8];

  return (
    <section className="successful-case-container flex items-center justify-center bg-white px-0 py-12 min-[1440px]:py-[92px]">
      <div className="successful-case-box flex w-full max-w-[1296px] flex-col items-center justify-between gap-7">
        <h2 className="successful-case-box-title w-full text-center text-[32px] font-bold md:text-[36px]">成功案例</h2>
        
        <div className="successful-case-box-scroll w-full overflow-x-auto overflow-y-hidden scrollbar-none min-[1440px]:overflow-visible">
          <div className="successful-case-box-4pic flex w-fit items-center justify-start gap-6 px-12 min-[1440px]:w-full min-[1440px]:justify-center min-[1440px]:px-0">
            {row1.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`case-${index + 1}`} 
                className="h-auto w-[240px] min-w-[240px] aspect-[240/160] min-[1440px]:w-full min-[1440px]:max-w-[306px] min-[1440px]:aspect-[306/204]" 
              />
            ))}
          </div>
        </div>

        <div className="successful-case-box-scroll w-full overflow-x-auto overflow-y-hidden scrollbar-none min-[1440px]:overflow-visible">
          <div className="successful-case-box-4pic flex w-fit items-center justify-start gap-6 px-6 min-[1440px]:w-full min-[1440px]:justify-center min-[1440px]:gap-7 min-[1440px]:px-0">
            {row2.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`case-${index + 5}`} 
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
