import { rocketData } from './data';
import AboutCard from './AboutCard';

const AboutRocket = () => {
  return (
    <section className="bg-primary-blue-100 relative z-2 -mt-3 rounded-[40px] md:rounded-3xl lg:rounded-[40px]">
      <div className="mx-auto max-w-[1296px] px-12 py-9 lg:px-0 lg:py-15">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-8">
          <div className="flex-1 text-neutral-700">
            <p className="mb-0 text-base leading-[1.5] font-bold tracking-[0.02em] lg:text-xl">
              About Rocket
            </p>
            <hgroup>
              <h2 className="mb-4 text-[32px] leading-[1.5] font-bold lg:mb-10 lg:text-5xl">
                什麼是火箭隊
              </h2>
              <p className="mb-4 text-base leading-[1.5] lg:mb-6 lg:text-xl">
                火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與 UI 設計師職缺而設。
                為期<strong className="font-bold">七個月的免費課程</strong>，學員全程參與，
                <strong className="font-bold">僅需支付場地費</strong>。
              </p>
              <p className="mb-4 text-base leading-[1.5] lg:mb-6 lg:text-xl">
                火箭隊培育具備問題解決能力的專業人才，滿足企業需求。
                透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。
                加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
              </p>
            </hgroup>
          </div>

          <div className="scrollbar-none m-0 flex h-auto max-w-full snap-y snap-mandatory flex-col gap-6 overflow-y-auto p-0 sm:h-full lg:h-[592px] lg:flex-shrink-0 lg:gap-8">
            {rocketData.map((card) => (
              <AboutCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRocket;
