import RocketCard from './RocketCard';
import CoworkingCard from './CoworkingCard';

const HomeHero = () => {
  return (
    <section 
      className="relative flex min-h-0 w-full flex-col items-center justify-center gap-12 bg-hero-banner pt-[124px] px-12 pb-[88px] lg:min-h-[757px] lg:flex-row lg:gap-9 min-[1440px]:gap-16 lg:px-0 lg:pt-[92px] lg:pb-[122px]">
      <RocketCard />
      <div className="hidden font-sans text-[48px] font-bold lg:block">X</div>
      <CoworkingCard />
    </section>
  );
};

export default HomeHero;
