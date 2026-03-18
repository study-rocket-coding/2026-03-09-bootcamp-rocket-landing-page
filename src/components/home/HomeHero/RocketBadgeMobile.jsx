import rocketBtnSm from '@/assets/banner/banner-btn-rocket-sm.svg';

const RocketBadgeMobile = () => {
  return (
    <div className="absolute top-1/2 right-5 flex h-[60px] w-[60px] translate-x-[70%] -translate-y-1/2 items-center justify-center rounded-full bg-white lg:hidden">
      <div
        className="bg-primary-blue-200 absolute top-1/2 left-0 h-20 w-20 -translate-y-1/2 rounded-full"
        style={{ clipPath: 'inset(0 0 0 49%)' }}
      />
      <img src={rocketBtnSm} alt="badge" className="block h-[60px] w-[60px] translate-x-1.5" />
    </div>
  );
};

export default RocketBadgeMobile;
