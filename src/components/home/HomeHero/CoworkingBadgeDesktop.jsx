import coworkingBtnLg from '@/assets/banner/banner-btn-coworking-lg.svg';

const CoworkingBadgeDesktop = () => {
  return (
    <div className="absolute bottom-[-50px] left-1/2 hidden h-[120px] w-[120px] -translate-x-1/2 items-center justify-center rounded-full bg-white lg:flex">
      <div 
        className="absolute inset-0 translate-y-[10px] rounded-full bg-primary-violet-200" 
        style={{ clipPath: 'inset(50% 0 0 0)' }}
      />
      <img src={coworkingBtnLg} alt="badge" className="relative z-10 h-full w-full" />
    </div>
  )
}

export default CoworkingBadgeDesktop;