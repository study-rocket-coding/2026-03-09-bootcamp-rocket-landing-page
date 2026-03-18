const DesktopCoachTabs = ({ coaches, activeCoach, setActiveCoach }) => {
  return (
    <ul className="mb-8 hidden justify-between list-none md:flex gap-6">
      {coaches.map((coach) => {
        const isActive = activeCoach === coach.id;
        const dynamicStyles = isActive ? 'bg-primary-blue-100' : '';
      
        return (
          <li key={coach.id} className="w-full max-w-[251px]">
            <button 
              onClick={() => setActiveCoach(coach.id)}
              className={`relative block h-[160px] w-full cursor-pointer rounded-xl border-2 border-neutral-700 bg-white transition-colors active:bg-primary-blue-100 ${dynamicStyles}`}
            >
              <div className="absolute bottom-0 left-0 z-10 h-[180px] w-[180px]">
                <img src={coach.src} alt={coach.name} className="h-full w-full object-contain" />
              </div>
              <div className="absolute top-[-24px] right-5 z-20 flex w-12 flex-col items-center justify-center rounded-xl border-2 border-neutral-700 bg-white p-4 shadow-[4px_4px_0_#363636] transition-transform hover:-translate-y-2.5 [writing-mode:vertical-rl]">
                <span className="text-base font-bold">{coach.name}</span>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  )
}

export default DesktopCoachTabs;