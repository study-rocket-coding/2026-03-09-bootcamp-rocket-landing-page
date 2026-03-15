const OrganizerCard = ({ img, role, name }) => {
  return (
    <div className="flex shrink-0 flex-col items-start gap-4">
      <div className="flex h-[120px] w-[156px] items-center justify-center rounded-2xl bg-white md:h-[148px] md:w-[196px]">
        <img src={img} alt={name} className="max-h-full max-w-full p-4" />
      </div>
      <p className="text-sm leading-[1.5] text-neutral-700 md:text-base">
        <span className="block font-bold">{role}</span>
        {name}
      </p>
    </div>
  );
};

export default OrganizerCard;
