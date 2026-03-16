const DetailCard = ({ title, about, requirement, learn, src, isReverse }) => {
  return (
    <li className="mt-8 flex flex-col rounded-none border-2 border-[#F0F0F0] bg-white bg-training-pattern pt-0 pb-8 pl-12 pr-12 md:rounded-2xl md:pl-12 md:pr-20 md:pb-10">
      <div className="-mt-8 mb-7 w-full md:mb-8">
        <h3 className="w-fit rounded-xl border-2 border-neutral-700 bg-white px-10 py-3 text-xl font-bold shadow-[4px_4px_0_#363636] md:text-2xl">
          {title}
        </h3>
      </div>
      <div className={`flex flex-col-reverse gap-7 md:gap-12 lg:gap-24 ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="flex flex-1 flex-col gap-9 min-w-0">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">{about.title}</h4>
              <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: about.content }} />
            </div>
            {requirement && (
              <div className="flex flex-col gap-4">
                <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">{requirement.title}</h4>
                <ol className="list-inside list-decimal text-base leading-relaxed">
                  {requirement.items.map((item) => (
                    <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ol>
              </div>
            )}
            <div className="flex flex-col gap-4">
              <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">{learn.title}</h4>
              <ol className="list-inside list-decimal text-base leading-relaxed">
                {learn.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-center self-center">
          <img src={src} alt={title} className="max-w-full" />
        </div>
      </div>
    </li>
  );
};

export default DetailCard;