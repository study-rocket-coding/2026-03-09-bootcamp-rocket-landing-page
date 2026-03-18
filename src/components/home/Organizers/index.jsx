import { organizersData } from './data';
import OrganizerCard from './OrganizerCard';

const Organizers = () => {
  return (
    <section className="relative w-full bg-neutral-200">
      <h3 className="absolute top-[-18px] left-12 z-10 px-2 text-2xl font-bold md:top-[-24px] md:left-[72px] md:text-[32px]">
        主辦、協辦單位
      </h3>
      <div className="scrollbar-none flex gap-6 overflow-x-auto px-12 pt-9 pb-4 md:px-[72px] md:pt-14 md:pb-10">
        {organizersData.map((card) => (
          <OrganizerCard key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Organizers;
