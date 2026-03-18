import { useState } from 'react';
import { trainings, coaches } from './data';
import DetailCard from './DetailCard';
import DesktopCoachTabs from './DesktopCoachTabs';
import DesktopCoachProfile from './DesktopCoachProfile';
import MobileSlider from './MobileSlider';
import RegisterButton from './RegisterButton';

const AboutTraining = () => {
  const [activeCoach, setActiveCoach] = useState('weijie');

  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-[1076px]">
        <hgroup className="flex flex-col items-center">
          <h2 className="-mt-7 text-[32px] font-bold md:text-[36px]">關於培訓</h2>
          <div className="mt-3 mb-12 flex items-center rounded-[50px] bg-white px-5 py-3 shadow-[0_2px_4px_#e8e8e8] lg:px-6">
            <p className="mr-3 border-r-2 border-[#F0F0F0] pr-3 text-sm font-bold whitespace-nowrap md:text-base">
              近期梯次
            </p>
            <div className="flex max-w-[211px] overflow-hidden md:max-w-[507px]">
              <p className="animate-marquee-ticker-first text-sm font-medium whitespace-nowrap md:animate-none md:text-base">
                第十三梯 (2023/5/8~2023/11/30)<span className="hidden md:inline">、</span>
              </p>
              <p className="animate-marquee-ticker-second ml-4 text-sm font-medium whitespace-nowrap md:ml-0 md:animate-none md:text-base">
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

        <div className="mb-12 px-12 md:mb-20 md:px-0">
          <h3 className="mb-7 text-[28px] font-bold md:mb-10">教練團</h3>

          <DesktopCoachTabs
            coaches={coaches}
            activeCoach={activeCoach}
            setActiveCoach={setActiveCoach}
          />

          <DesktopCoachProfile coaches={coaches} activeCoach={activeCoach} />

          <MobileSlider />
        </div>

        <RegisterButton />
      </div>
    </section>
  );
};

export default AboutTraining;
