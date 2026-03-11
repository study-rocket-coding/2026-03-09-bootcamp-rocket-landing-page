import icCoffee from '../../assets/icon/ic-coffee-lg.svg';
import icWifi from '../../assets/icon/ic-wifi-lg.svg';
import icChair from '../../assets/icon/ic-chair-lg.svg';
import icChat from '../../assets/icon/ic-chat-lg.svg';
import icTraffic from '../../assets/icon/ic-traffic-lg.svg';
import icFood from '../../assets/icon/ic-food-lg.svg';

import introRestLg from '../../assets/place-intro/intro-rest-lg-3x.png';
import introRestSm from '../../assets/place-intro/intro-rest-sm-3x.png';
import introDiscussLg from '../../assets/place-intro/intro-discuss-lg-3x.png';
import introDiscussSm from '../../assets/place-intro/intro-discuss-sm-3x.png';
import introWorkspaceLg from '../../assets/place-intro/intro-workspace-lg-3x.png';
import introWorkspaceSm from '../../assets/place-intro/intro-workspace-sm-3x.png';

// Carousel 圖片引入
import c1Lg from '../../assets/carousel/carousel1-lg.png';
import c1Sm from '../../assets/carousel/carousel1-sm.png';
import c2Lg from '../../assets/carousel/carousel2-lg.png';
import c2Sm from '../../assets/carousel/carousel2-sm.png';
import c3Lg from '../../assets/carousel/carousel3-lg.png';
import c3Sm from '../../assets/carousel/carousel3-sm.png';
import c4Lg from '../../assets/carousel/carousel4-lg.png';
import c4Sm from '../../assets/carousel/carousel4-sm.png';
import c5Lg from '../../assets/carousel/carousel5-lg.png';
import c5Sm from '../../assets/carousel/carousel5-sm.png';
import c6Lg from '../../assets/carousel/carousel6-lg.png';
import c6Sm from '../../assets/carousel/carousel6-sm.png';
import c7Lg from '../../assets/carousel/carousel7-lg.png';
import c7Sm from '../../assets/carousel/carousel7-sm.png';
import c8Lg from '../../assets/carousel/carousel8-lg.png';
import c8Sm from '../../assets/carousel/carousel8-sm.png';

const FieldAndServiceSection = () => {
  const fieldItems = [
    {
      id: 'rest',
      title: '很 chill 的休憩區',
      content: (
        <>
          我們貼心提供<span className="font-bold">飲水機、冰箱、微波爐、果汁機、膠囊咖啡機</span>
          及不定時茶包及小餅乾零食，我們想讓在工作認真打拼之餘的你也是需要中場休息補充能量，然後再輕鬆泡上一杯咖啡坐在吧台或懶骨頭放空冥想，讓自己chill
          一下轉換心情！
        </>
      ),
      imgLg: introRestLg,
      imgSm: introRestSm,
    },
    {
      id: 'sofa',
      title: '舒適沙發討論區',
      content: '如果你有想要與夥伴們討論事情這裡也很適合三、五人一起共同開會討論哦！',
      imgLg: introDiscussLg,
      imgSm: introDiscussSm,
    },
    {
      id: 'entering',
      title: '進駐者區域',
      content: (
        <>
          我們的目標是凝聚更多開發者，為他們提供一個充滿活力的交流空間。
          在這裡，開發者可以互相學習、分享，透過交流讓自己的技能和視野得到更快速的成長。
          我們相信，一個好的環境能夠激發創意，促進專業能力的提升。
          <br />
          <br />
          我們希望將這樣的場域擴展至高雄，誠摯地邀請您加入我們，
          一起為開發者打造一個交流與學習的樂園，讓大家在這裡彼此成長，共同推動科技產業的進步。
        </>
      ),
      imgLg: introWorkspaceLg,
      imgSm: introWorkspaceSm,
    },
  ];

  const services = [
    {
      id: 'coffee',
      icon: icCoffee,
      title: '咖啡、茶水',
      desc: '飲水機、冰箱、微波爐、果汁機、 膠囊咖啡機及不定時茶包及小餅乾零食',
    },
    {
      id: 'wifi',
      icon: icWifi,
      title: '超快速網路',
      desc: '使用 Wifi Mesh，讓你在場域中都有順暢的網路',
    },
    {
      id: 'chair',
      icon: icChair,
      title: '舒服的桌椅',
      desc: '白色辦公桌設計簡潔大方，搭配上人體工學椅，讓您的身體在長時間辦公後仍能保持舒適',
    },
    {
      id: 'chat',
      icon: icChat,
      title: '與火箭隊培訓營交流',
      desc: '進駐者能夠與開發團隊暢通無阻地交流，共同分享各自的專業知識和經驗。',
    },
    {
      id: 'traffic',
      icon: icTraffic,
      title: '便捷的交通',
      desc: '共享空間位於捷運信義國小站附近， 為您提供極佳的交通便利性。',
    },
    {
      id: 'food',
      icon: icFood,
      title: '超多美食在附近',
      desc: '無論你要日式、西式、台式， 各種美食應有盡有',
    },
  ];

  const carouselImages = [
    { lg: c1Lg, sm: c1Sm, alt: 'sofa image' },
    { lg: c2Lg, sm: c2Sm, alt: 'discuss image' },
    { lg: c3Lg, sm: c3Sm, alt: 'workspace image' },
    { lg: c4Lg, sm: c4Sm, alt: 'record image' },
    { lg: c5Lg, sm: c5Sm, alt: 'meeting image' },
    { lg: c6Lg, sm: c6Sm, alt: 'rest image' },
    { lg: c7Lg, sm: c7Sm, alt: 'window image' },
    { lg: c8Lg, sm: c8Sm, alt: 'book image' },
  ];

  return (
    <section className="field-and-service-container py-20 notebook:px-0 px-12">
      <h2 className="text-[28px] notebook:text-[36px] font-bold text-center mb-15">場域說明</h2>

      {/* #硬體 */}
      <div className="mx-auto max-w-[1076px] mt-[60px] flex flex-col gap-7">
        <h4 className="w-[53px] h-[30px] notebook:w-[74px] notebook:h-[42px] leading-normal bg-linear-to-b from-transparent from-50% to-accent-orange to-50% text-[20px] notebook:text-[28px] font-bold px-1">
          #硬體
        </h4>
        <div className="flex flex-col items-center gap-10 notebook:gap-9">
          {fieldItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col notebook:flex-row ${
                index % 2 === 1 ? 'notebook:flex-row-reverse' : ''
              } items-center gap-4 notebook:gap-10 w-full`}
            >
              {/* 圖片區域 */}
              <div className="w-full notebook:w-[526px] h-auto notebook:h-[388px] aspect-[332/222] notebook:aspect-auto">
                <picture>
                  <source media="(max-width: 1024px)" srcSet={item.imgSm} />
                  <img src={item.imgLg} alt={item.title} className="w-full h-full object-contain" />
                </picture>
              </div>

              {/* 文字區域 */}
              <div className="w-full notebook:w-[494px] flex flex-col items-start gap-2 notebook:gap-5">
                <div className="text-2xl notebook:text-2xl font-bold text-neutral-700">\\ {item.title} /</div>
                <div className="text-[14px] notebook:text-base text-neutral-600 leading-[150%] tracking-[0.02em] text-left">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* #服務 */}
      <div className="mx-auto max-w-[1076px] mt-19 notebook:mt-[76px] flex flex-col gap-8 notebook:gap-8 pb-20">
        <h4 className="w-[53px] h-[30px] notebook:w-[74px] notebook:h-[42px] leading-normal bg-linear-to-b from-transparent from-50% to-accent-orange to-50% text-[20px] notebook:text-[28px] font-bold px-1">
          #服務
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 notebook:grid-cols-3 gap-y-7 notebook:gap-y-12 gap-x-7 place-items-center">
          {services.map((s) => (
            <div
              key={s.id}
              className="w-full max-w-[332px] notebook:max-w-[340px] flex flex-row notebook:flex-col items-start notebook:items-center gap-4 notebook:gap-6"
            >
              <div className="w-12 h-12 notebook:w-30 notebook:h-30 flex-shrink-0 flex items-center justify-center">
                <img src={s.icon} alt={s.title} className="w-full h-full" />
              </div>
              <div className="text-left notebook:text-center">
                <h5 className="text-base notebook:text-[18px] font-bold text-neutral-700 mb-2 notebook:mb-1">{s.title}</h5>
                <p className="text-neutral-600 text-[14px] leading-[150%] max-w-none notebook:max-w-[244px] mx-auto">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel 輪播組件 */}
      <div className="carousel-container hidden notebook:flex gap-6 overflow-x-auto snap-x snap-mandatory mt-15 scrollbar-none">
        {carouselImages.map((img, idx) => (
          <div key={idx} className="carousel-photo h-[424px] py-4 flex-shrink-0 rounded-2xl overflow-hidden snap-start">
            <img src={img.lg} alt={img.alt} className="h-full w-auto object-cover" />
          </div>
        ))}
      </div>
      
      {/* Carousel 手機版 */}
      <div className="carousel-container-mb flex notebook:hidden gap-4 overflow-x-auto snap-x snap-mandatory mt-10 px-4 scrollbar-none">
        {carouselImages.map((img, idx) => (
          <div key={idx} className="carousel-photo-mb flex-shrink-0 w-[280px] h-[260px] rounded-xl overflow-hidden snap-start">
            <img src={img.sm} alt={img.alt} className="w-full h-full object-contain block" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FieldAndServiceSection;
