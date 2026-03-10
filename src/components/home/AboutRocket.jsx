import React from 'react';
import frontendImg from '../../assets/group/about-rocket-frontend.svg';
import backendImg from '../../assets/group/about-rocket-backend.svg';
import uiImg from '../../assets/group/about-rocket-ui.svg';

const AboutCard = ({ title, enTitle, badges, img }) => {
  return (
    <li className="font-sans shrink-0 snap-start w-full lg:max-w-[636px] rounded-3xl bg-white px-5 py-4 md:p-9">
      <div className="flex flex-col justify-between sm:flex-row sm:gap-7">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-3 text-[32px] font-bold sm:mb-2 md:text-[36px] lg:mb-3">{title}</h3>
            <div className="flex flex-wrap gap-3 sm:gap-2 mb-0 sm:mb-3 md:mb-0">
              {badges.map((badge) => (
                <span 
                  key={badge} 
                  className="inline-flex w-fit items-center rounded-full border-2 border-primary-blue-300 px-4 py-2 text-base font-bold text-primary-blue-400 sm:px-4 sm:py-2 sm:text-xs md:text-base"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-2xl font-bold text-neutral-500 sm:text-xl md:text-2xl">{enTitle}</p>
        </div>
        <div className="relative flex h-[60px] w-full items-center justify-center rounded-xl bg-neutral-100 mt-[136px] sm:mt-0 sm:h-[208px] sm:w-[169px] sm:rounded-3xl sm:justify-start">
          <img
            src={img}
            alt={title}
            className="h-[160px] -mt-[116px] sm:mt-0 sm:ml-[-51px]"
          />
        </div>      </div>
    </li>
  );
};

const AboutRocket = () => {
  const cards = [
    {
      title: '前端工程師',
      enTitle: 'Front-end engineer',
      badges: ['HTML', 'CSS', 'JavaScript'],
      img: frontendImg,
    },
    {
      title: '後端工程師',
      enTitle: 'Back-end engineer',
      badges: ['C#', '.Net'],
      img: backendImg,
    },
    {
      title: 'UI 設計師',
      enTitle: 'UI designer',
      badges: ['Figma', 'HTML', 'CSS'],
      img: uiImg,
    },
  ];

  return (
    <section className="relative z-2 -mt-3 rounded-[40px] bg-primary-blue-100 lg:rounded-[40px] md:rounded-3xl">
      <div className="mx-auto max-w-[1296px] px-12 py-9 lg:px-0 lg:py-15">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-8">
          <div className="flex-1 text-neutral-700">
            <p className="mb-0 text-base font-bold tracking-[0.02em] leading-[1.5] lg:text-xl">About Rocket</p>
            <hgroup className="font-sans">
              <h2 className="mb-4 text-[32px] font-bold leading-[1.5] lg:mb-10 lg:text-5xl">什麼是火箭隊</h2>
              <p className="mb-4 text-base font-normal leading-[1.5] lg:mb-6 lg:text-xl">
                火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI 設計師職缺而設。
                為期<strong className="font-bold">七個月的免費課程</strong>，學員全程參與，<strong className="font-bold">僅需支付場地費</strong>。
              </p>
              <p className="mb-4 text-base font-normal leading-[1.5] lg:mb-6 lg:text-xl">
                火箭隊培育具備問題解決能力的專業人才，滿足企業需求。 透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。
                加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
              </p>
            </hgroup>
          </div>

          <ul className="m-0 flex h-auto max-w-full list-none flex-col gap-6 overflow-y-auto snap-y snap-mandatory p-0 sm:h-full lg:h-[592px] lg:flex-shrink-0 lg:gap-8 scrollbar-none">
            {cards.map((card) => (
              <AboutCard key={card.title} {...card} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutRocket;
