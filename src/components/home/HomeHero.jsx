import React from 'react';
import bannerBg from '../../assets/banner/banner-bg.png';
import rocketLogo from '../../assets/banner/banner-logo-rocket-lg.svg';
import coworkingLogo from '../../assets/banner/banner-logo-coworking-lg.svg';
import rocketBtnLg from '../../assets/banner/banner-btn-rocket-lg.svg';
import rocketBtnSm from '../../assets/banner/banner-btn-rocket-sm.svg';
import coworkingBtnLg from '../../assets/banner/banner-btn-coworking-lg.svg';
import coworkingBtnSm from '../../assets/banner/banner-btn-coworking-sm.svg';

const HomeHero = () => {
  return (
    <section 
      className="relative flex min-h-[757px] w-full flex-col items-center justify-center gap-12 bg-cover bg-center px-12 pt-[124px] pb-[88px] lg:flex-row lg:gap-16 lg:px-0 lg:pt-[92px] lg:pb-[122px]"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Rocket Card */}
      <div className="relative w-full max-w-[332px] px-3 lg:max-w-none lg:px-0">
        <a href="/" className="block text-inherit no-underline" aria-label="前往火箭隊">
          <div className="mx-auto flex h-[132px] w-full max-w-[294px] flex-row items-center justify-start rounded-2xl border-2 border-neutral-300 bg-white p-6 lg:h-[448px] lg:w-[440px] lg:max-w-none lg:flex-col lg:border-neutral-200 lg:p-0 lg:shadow-none">
            <hgroup className="z-10 flex flex-col items-start lg:-mt-10 lg:items-center">
              <h2 className="font-sans text-[32px] font-bold lg:text-[48px]">火箭隊</h2>
              <p className="mt-1 font-sans text-xl text-neutral-500 lg:mb-4 lg:text-2xl">Bootcamp Rocket</p>
            </hgroup>
            
            <div className="absolute top-[36%] left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full lg:static lg:mb-6 lg:h-[124px] lg:w-[124px] lg:translate-y-0">
              <img src={rocketLogo} alt="logo" className="h-12 w-12 object-contain lg:h-[100px] lg:w-[100px]" />
            </div>

            <div className="hidden flex-col gap-0 lg:flex">
              <p className="font-sans text-xl font-bold leading-[1.75] text-center"># 軟體工程師培訓營</p>
              <p className="font-sans text-xl font-bold leading-[1.75] text-center"># 全程免費的扎實訓練</p>
              <p className="font-sans text-xl font-bold leading-[1.75] text-center"># 帶你翻轉人生！</p>
            </div>

            {/* Desktop Badge */}
            <div className="absolute bottom-[-50px] left-1/2 hidden h-[120px] w-[120px] -translate-x-1/2 items-center justify-center rounded-full bg-white lg:flex">
              <div 
                className="absolute inset-0 translate-y-[10px] rounded-full bg-primary-blue-200" 
                style={{ clipPath: 'inset(50% 0 0 0)' }}
              />
              <img src={rocketBtnLg} alt="badge" className="relative z-10 h-full w-full" />
            </div>

            {/* Mobile Badge */}
            <div className="absolute top-1/2 right-5 flex h-[60px] w-[60px] translate-x-[70%] -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden">
              <div 
                className="absolute top-1/2 left-0 h-20 w-20 -translate-y-1/2 rounded-full bg-primary-blue-200"
                style={{ clipPath: 'inset(0 0 0 49%)' }}
              />
              <img src={rocketBtnSm} alt="badge" className="block h-[60px] w-[60px] translate-x-1.5" />
            </div>
          </div>
        </a>
      </div>

      <div className="hidden font-sans text-[48px] font-bold lg:block">X</div>

      {/* Coworking Card */}
      <div className="relative w-full max-w-[332px] px-3 lg:max-w-none lg:px-0">
        <a href="/coworking-space.html" className="block text-inherit no-underline" aria-label="前往共同空間">
          <div className="mx-auto flex h-[132px] w-full max-w-[294px] flex-row items-center justify-start rounded-2xl border-2 border-neutral-300 bg-white p-6 lg:h-[448px] lg:w-[440px] lg:max-w-none lg:flex-col lg:border-neutral-200 lg:p-0 lg:shadow-none">
            <hgroup className="z-10 flex flex-col items-start lg:-mt-10 lg:items-center">
              <h2 className="font-sans text-[32px] font-bold lg:text-[48px]">共同空間</h2>
              <p className="mt-1 font-sans text-xl text-neutral-500 lg:mb-4 lg:text-2xl">Co-working Space</p>
            </hgroup>

            <div className="absolute top-[36%] left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full lg:static lg:mb-6 lg:h-[124px] lg:w-[124px] lg:translate-y-0">
              <img src={coworkingLogo} alt="logo" className="h-12 w-12 object-contain lg:h-[100px] lg:w-[100px]" />
            </div>

            <div className="hidden flex-col gap-0 lg:flex">
              <p className="font-sans text-xl font-bold leading-[1.75] text-center"># 超 chill 的共同工作場域</p>
              <p className="font-sans text-xl font-bold leading-[1.75] text-center"># 餅乾、零食、咖啡應有盡有</p>
              <p className="font-sans text-xl font-bold leading-[1.75] text-center"># 等你來一同交流成長</p>
            </div>

            {/* Desktop Badge */}
            <div className="absolute bottom-[-50px] left-1/2 hidden h-[120px] w-[120px] -translate-x-1/2 items-center justify-center rounded-full bg-white lg:flex">
              <div 
                className="absolute inset-0 translate-y-[10px] rounded-full bg-primary-violet-200" 
                style={{ clipPath: 'inset(50% 0 0 0)' }}
              />
              <img src={coworkingBtnLg} alt="badge" className="relative z-10 h-full w-full" />
            </div>

            {/* Mobile Badge */}
            <div className="absolute top-1/2 right-5 flex h-[60px] w-[60px] translate-x-[70%] -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden">
              <div 
                className="absolute top-1/2 left-0 h-20 w-20 -translate-y-1/2 rounded-full bg-primary-violet-200"
                style={{ clipPath: 'inset(0 0 0 49%)' }}
              />
              <img src={coworkingBtnSm} alt="badge" className="block h-[60px] w-[60px] translate-x-1.5" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HomeHero;
