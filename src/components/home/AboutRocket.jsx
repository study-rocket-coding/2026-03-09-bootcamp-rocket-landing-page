import React from 'react';
import frontendImg from '../../assets/group/about-rocket-frontend.svg';
import backendImg from '../../assets/group/about-rocket-backend.svg';
import uiImg from '../../assets/group/about-rocket-ui.svg';

const AboutCard = ({ title, enTitle, badges, img }) => {
  return (
    <li className="font-sans shrink-0 scroll-snap-start w-full max-w-[636px] rounded-3xl bg-white p-9 md:p-12">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:gap-0">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-3 text-2xl font-bold md:text-3xl">{title}</h3>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span 
                  key={badge} 
                  className="inline-flex w-fit items-center rounded-full border-2 border-primary-blue-300 px-4 py-2 text-base font-bold text-primary-blue-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-xl font-medium text-neutral-500 md:text-2xl">{enTitle}</p>
        </div>
        <div className="flex h-[208px] w-full items-center justify-start overflow-visible rounded-3xl bg-neutral-200 sm:w-[169px] sm:mt-0 mt-[136px] sm:h-[208px] h-[60px] sm:rounded-3xl rounded-xl">
          <img 
            src={img} 
            alt={title} 
            className="sm:ml-[-51px] ml-0 sm:h-[160px] h-[160px] sm:mt-0 mt-[-116px] sm:block block mx-auto sm:mx-0" 
          />
        </div>
      </div>
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
    <section className="rounded-[40px] bg-primary-blue-100 md:rounded-3xl lg:rounded-[40px]">
      <div className="mx-auto max-w-[1296px] px-6 py-15 md:px-12 md:py-15 lg:px-0">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-8">
          <div className="flex-1">
            <p className="mb-4 text-lg font-medium text-neutral-500 md:text-base lg:text-xl">About Rocket</p>
            <hgroup className="font-sans">
              <h2 className="mb-6 text-3xl font-bold md:mb-4 md:text-[32px] lg:mb-10 lg:text-5xl">什麼是火箭隊</h2>
              <p className="mb-6 text-base font-normal md:mb-4 md:text-lg lg:mb-6 lg:text-xl">
                火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI 設計師職缺而設。
                為期<strong className="font-bold">七個月的免費課程</strong>，學員全程參與，<strong className="font-bold">僅需支付場地費</strong>。
              </p>
              <p className="mb-6 text-base font-normal md:mb-4 md:text-lg lg:mb-6 lg:text-xl text-neutral-700">
                火箭隊培育具備問題解決能力的專業人才，滿足企業需求。 透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。
                加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
              </p>
            </hgroup>
          </div>

          <ul className="m-0 flex h-auto max-w-full list-none flex-col gap-6 overflow-y-auto scroll-snap-y-mandatory p-0 md:h-auto md:gap-6 lg:h-[592px] lg:gap-8 lg:flex-shrink-0">
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
