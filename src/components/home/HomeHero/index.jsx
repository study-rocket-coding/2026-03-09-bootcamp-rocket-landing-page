import RocketCard from './RocketCard';
import CoworkingCard from './CoworkingCard';

const HomeHero = () => {
  return (
    <section className="bg-hero-banner relative flex min-h-0 w-full flex-col items-center justify-center gap-12 px-12 pt-[124px] pb-[88px] min-[1440px]:gap-16 lg:min-h-[757px] lg:flex-row lg:gap-9 lg:px-0 lg:pt-[92px] lg:pb-[122px]">
      <RocketCard />
      <div className="hidden text-[48px] font-bold lg:block">X</div>
      <CoworkingCard />
    </section>
  );
};

export default HomeHero;
