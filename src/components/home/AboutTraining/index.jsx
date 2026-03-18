import { useState } from 'react';
import icGoRocket from '@/assets/icon/ic-go-rocket.svg';
import { trainings, coaches } from './data';
import DetailCard from './DetailCard';
import DesktopCoachTabs from './DesktopCoachTabs';
import DesktopCoachProfile from './DesktopCoachProfile';
import MobileSlider from './MobileSlider';

const AboutTraining = () => {
  const [activeCoach, setActiveCoach] = useState('weijie');

  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-[1076px]">
        <hgroup className="flex flex-col items-center">
          <h2 className="-mt-7 text-[32px] font-bold md:text-[36px]">關於培訓</h2>
          <div className="mt-3 mb-12 flex items-center rounded-[50px] bg-white px-5 py-3 shadow-[0_2px_4px_#e8e8e8] lg:px-6">
            <p className="mr-3 border-r-2 border-[#F0F0F0] pr-3 font-bold whitespace-nowrap text-sm md:text-base">近期梯次</p>
            <div className="flex max-w-[211px] overflow-hidden md:max-w-[507px]">
              <p className="whitespace-nowrap font-medium text-sm md:text-base animate-marquee-ticker-first md:animate-none">
                第十三梯 (2023/5/8~2023/11/30)<span className="hidden md:inline">、</span>
              </p>
              <p className="whitespace-nowrap font-medium text-sm md:text-base animate-marquee-ticker-second md:ml-0 md:animate-none ml-4">
                第十四梯 (2023/7/31~2024/2/28)
              </p>
            </div>
          </div>
        </hgroup>

        <ul className="mb-16 flex flex-col gap-12">
          {trainings.map((training) => (
            <DetailCard key={training.id} {...training} />
          ))}
        </ul>

        <div className="mb-12 md:mb-20 px-12 md:px-0">
          <h3 className="mb-7 text-[28px] font-bold md:mb-10">教練團</h3>

          <DesktopCoachTabs
            coaches={coaches}
            activeCoach={activeCoach}
            setActiveCoach={setActiveCoach}
          />

          <DesktopCoachProfile
            coaches={coaches}
            activeCoach={activeCoach}
          />

          <MobileSlider />
        </div>

        <div className="group relative flex h-20 items-center justify-center rounded-2xl border-2 border-neutral-700 bg-primary-blue-100 transition-all mx-12 translate-y-6 md:mx-auto md:h-24 md:translate-y-12 md:max-w-[1076px]">
          <a href="https://register.rocket-coding.com/" target="_blank" rel="noreferrer noopener" className="flex w-full items-center justify-center text-center text-inherit no-underline">
            <h3 className="text-2xl font-bold md:text-[32px]">馬上報名！</h3>
            <img src={icGoRocket} alt="go" className="ml-0 h-16 w-16 opacity-0 transition-all duration-500 group-hover:ml-5 group-hover:opacity-100 hidden md:block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutTraining;
