import { Link } from "react-router-dom";
import rocketLogo from '@/assets/banner/banner-logo-rocket-lg.svg';
import RocketBadgeDesktop from './RocketBadgeDesktop';
import RocketBadgeMobile from './RocketBadgeMobile';

const RocketCard = () => {
  return (
    <div className="relative w-full max-w-[332px] px-3 lg:max-w-none lg:px-0">
      <Link to="/" className="block text-inherit no-underline" aria-label="前往火箭隊">
        <div className="relative mx-auto flex h-[132px] w-full max-w-[294px] flex-row items-center justify-start rounded-2xl border-2 border-neutral-300 bg-white p-6 lg:h-[448px] lg:w-[440px] lg:max-w-none lg:flex-col lg:border-neutral-200 lg:p-0">
          <hgroup className="z-10 flex flex-col items-start lg:-mt-10 lg:items-center">
            <h2 className="text-[32px] font-bold lg:pl-0 pl-14 lg:text-[48px]">火箭隊</h2>
            <p className="mt-1 text-xl text-neutral-500 lg:pl-0 pl-14 lg:mb-4 lg:text-2xl">Bootcamp Rocket</p>
          </hgroup>
          
          <div className="absolute top-[36%] left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full lg:static lg:mb-6 lg:h-[124px] lg:w-[124px] lg:translate-y-0">
            <img src={rocketLogo} alt="logo" className="h-12 w-12 object-contain lg:h-[100px] lg:w-[100px]" />
          </div>

          <div className="hidden flex-col gap-0 lg:flex">
            <p className="text-xl font-bold leading-[1.75] text-center"># 軟體工程師培訓營</p>
            <p className="text-xl font-bold leading-[1.75] text-center"># 全程免費的扎實訓練</p>
            <p className="text-xl font-bold leading-[1.75] text-center"># 帶你翻轉人生！</p>
          </div>

          <RocketBadgeDesktop />

          <RocketBadgeMobile />
        </div>
      </Link>
    </div>
  )
}

export default RocketCard;