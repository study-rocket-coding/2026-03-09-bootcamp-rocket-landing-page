const DesktopCoachProfile = ({ coaches, activeCoach }) => {
  const selectedCoach = coaches.find((coach) => coach.id === activeCoach);

  return (
    <div className="hidden min-h-[200px] md:block">
      {selectedCoach ? (
        <div className="animate-fadeIn">
          <p className="mb-3 text-2xl font-bold">{selectedCoach.title}</p>
          <ul className="list-inside list-disc pl-4 leading-relaxed">
            {selectedCoach.experiences.map((experience) => (
              <li key={experience} className="text-neutral-700">
                {experience}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center py-24 text-lg text-neutral-400">
          點擊上方教練卡片查看詳細資訊
        </div>
      )}
    </div>
  );
};

export default DesktopCoachProfile;
