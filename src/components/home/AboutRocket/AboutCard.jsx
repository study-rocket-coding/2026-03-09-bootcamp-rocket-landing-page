const AboutCard = ({ title, enTitle, badges, img }) => {
  return (
    <li className="font-sans shrink-0 snap-start w-full lg:max-w-[636px] rounded-3xl bg-white px-5 py-4 md:p-9">
      <div className="flex flex-col justify-between sm:flex-row sm:gap-7">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-3 text-[32px] font-bold sm:mb-2 md:text-[36px] lg:mb-3">{title}</h3>
            <div className="flex flex-wrap gap-3 sm:gap-2 mb-0 sm:mb-3 md:mb-0">
              {badges.map((badge) => (
                <span 
                  key={badge} 
                  className="inline-flex w-fit items-center rounded-full border-2 border-primary-blue-300 px-4 py-2 text-base font-bold text-primary-blue-400 sm:px-4 sm:py-2 sm:text-xs md:text-base"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-2xl font-bold text-neutral-500 sm:text-xl md:text-2xl">{enTitle}</p>
        </div>
        <div className="relative flex h-[60px] w-full items-center justify-center rounded-xl bg-neutral-100 mt-[136px] sm:mt-0 sm:h-[208px] sm:w-[169px] sm:rounded-3xl sm:justify-start">
          <img
            src={img}
            alt={title}
            className="h-[160px] -mt-[116px] sm:mt-0 sm:ml-[-51px]"
          />
        </div>
      </div>
    </li>
  );
};

export default AboutCard;