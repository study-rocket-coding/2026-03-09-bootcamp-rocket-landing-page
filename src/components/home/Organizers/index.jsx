import { organizersData } from './data';
import OrganizerCard from './OrganizerCard'

const Organizers = () => {
  return (
    <section className="relative w-full bg-neutral-200">
      <h3 className="absolute top-[-18px] left-12 z-10 px-2 text-2xl font-bold md:top-[-24px] md:left-[72px] md:text-[32px]">
        主辦、協辦單位
      </h3>
      <div className="flex gap-6 overflow-x-auto pt-9 px-12 pb-4 scrollbar-none md:pt-14 md:px-[72px] md:pb-10">
        {organizersData.map((card) => (
          <OrganizerCard key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Organizers;
