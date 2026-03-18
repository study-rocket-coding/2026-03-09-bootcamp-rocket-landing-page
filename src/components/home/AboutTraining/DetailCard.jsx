import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const DetailCard = ({ title, about, requirement, learn, src, isReverse }) => {
  const dynamicStyles = isReverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <Card
      className={cn(
        'overflow-visible rounded-none border-2 border-neutral-200 shadow-none ring-0',
        '!bg-neutral-0 bg-training-pattern mt-8 flex flex-col',
        'pt-0 pr-12 pb-8 pl-12 md:rounded-2xl md:pr-20 md:pb-10 md:pl-12'
      )}
    >
      <CardContent className="flex flex-col p-0">
        <div className="-mt-8 mb-7 w-full md:mb-8">
          <h3 className="w-fit rounded-xl border-2 border-neutral-700 bg-white px-10 py-3 text-xl font-bold shadow-[4px_4px_0_#363636] md:text-2xl">
            {title}
          </h3>
        </div>
        <div className={cn('flex flex-col-reverse gap-7 md:gap-12 lg:gap-24', dynamicStyles)}>
          <div className="flex min-w-0 flex-1 flex-col gap-9">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">
                  {about.title}
                </h4>
                <p
                  className="text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: about.content }}
                />
              </div>
              {requirement && (
                <div className="flex flex-col gap-4">
                  <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">
                    {requirement.title}
                  </h4>
                  <ol className="list-inside list-decimal text-base leading-relaxed">
                    {requirement.items.map((item) => (
                      <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ol>
                </div>
              )}
              <div className="flex flex-col gap-4">
                <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">
                  {learn.title}
                </h4>
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
      </CardContent>
    </Card>
  );
};

export default DetailCard;
