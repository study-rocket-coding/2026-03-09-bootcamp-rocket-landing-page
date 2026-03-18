import { coaches } from './data';

const MobileSlider = () => {
  return (
    <ul className="scrollbar-none flex snap-x snap-mandatory gap-7 overflow-x-auto pt-6 pb-6 md:hidden">
      {coaches.map((coach) => (
        <li key={coach.id} className="min-w-[calc(100vw-98px)] snap-start">
          <div className="relative mb-8 block h-[200px] w-full rounded-xl border-2 border-neutral-700 bg-white p-4">
            <div className="absolute bottom-0 left-0 z-10 h-[220px] w-[220px]">
              <img src={coach.src} alt={coach.name} className="h-full w-full object-contain" />
            </div>
            <div className="absolute top-[-24px] right-5 z-20 flex w-12 flex-col items-center justify-center rounded-xl border-2 border-neutral-700 bg-white p-4 shadow-[4px_4px_0_#363636] [writing-mode:vertical-rl]">
              <span className="text-base font-bold">{coach.name}</span>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xl font-bold">{coach.title}</p>
            <ul className="list-inside list-disc pl-4 leading-relaxed text-neutral-700">
              {coach.experiences.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MobileSlider;
