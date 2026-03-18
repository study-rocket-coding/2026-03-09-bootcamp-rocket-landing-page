import rocketBtnLg from '@/assets/banner/banner-btn-rocket-lg.svg';

const RocketBadgeDesktop = () => {
  return (
    <div className="absolute bottom-[-50px] left-1/2 hidden h-[120px] w-[120px] -translate-x-1/2 items-center justify-center rounded-full bg-white lg:flex">
      <div
        className="bg-primary-blue-200 absolute inset-0 translate-y-[10px] rounded-full"
        style={{ clipPath: 'inset(50% 0 0 0)' }}
      />
      <img src={rocketBtnLg} alt="badge" className="relative z-10 h-full w-full" />
    </div>
  );
};

export default RocketBadgeDesktop;
