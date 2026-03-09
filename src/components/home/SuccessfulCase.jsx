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
    <section className="flex items-center justify-center px-[72px] pt-[92px] pb-[120px] lg:px-12 lg:pt-12 lg:pb-[92px]">
      <div className="flex w-full max-w-[1296px] flex-col items-center justify-between gap-7 lg:h-[406px] h-auto">
        <h2 className="w-full text-center text-[36px] font-bold">成功案例</h2>
        
        <div className="w-full overflow-x-auto lg:overflow-visible">
          <div className="flex w-fit items-center justify-center gap-6 lg:w-full">
            {row1.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`case-${index + 1}`} 
                className="aspect-[306/204] w-full max-w-[306px] lg:aspect-[240/160] lg:w-[240px] lg:min-w-[240px]" 
              />
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-auto lg:overflow-visible">
          <div className="flex w-fit items-center justify-center gap-6 lg:w-full">
            {row2.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`case-${index + 5}`} 
                className="aspect-[306/204] w-full max-w-[306px] lg:aspect-[240/160] lg:w-[240px] lg:min-w-[240px]" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulCase;
