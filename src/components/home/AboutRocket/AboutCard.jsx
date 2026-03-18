import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const AboutCard = ({ title, badges, src }) => {
  return (
    <Card
      className={cn(
        'ring-0', // 覆蓋預設
        'w-full shrink-0 snap-start rounded-3xl px-5 py-4 md:p-9 lg:max-w-[636px]'
      )}
    >
      <CardContent className="p-0">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-2 text-[24px] font-bold md:mb-3 md:text-[32px]">
                {title['zh-tw']}
              </h3>
              <div className="mb-3 flex flex-wrap gap-2 md:gap-3">
                {badges.map((badge) => (
                  <Badge
                    variant="outline"
                    key={badge}
                    className={cn(
                      'border-primary-blue-300 rounded-full border-2 px-4 py-2',
                      'text-primary-blue-400 text-xs font-bold md:text-base',
                      'h-auto'
                    )}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xl font-bold text-neutral-500 md:text-2xl">{title.en}</p>
          </div>
          <div className="relative mt-[136px] flex h-[60px] w-full items-center justify-center rounded-xl bg-neutral-200 sm:mt-0 sm:h-[208px] sm:w-[169px] sm:justify-start sm:rounded-3xl">
            <img src={src} alt={title.en} className="-mt-[116px] h-[160px] sm:mt-0 sm:ml-[-51px]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
