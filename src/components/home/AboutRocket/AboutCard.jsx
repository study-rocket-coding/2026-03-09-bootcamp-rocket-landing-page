import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutCard = ({ title, badges, src }) => {
  return (
    <Card className={cn(
      "ring-0", // 覆蓋預設
      "shrink-0 snap-start w-full lg:max-w-[636px] rounded-3xl px-5 py-4 md:p-9"
    )}>
      <CardContent className="p-0">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-2 text-[24px] font-bold md:text-[32px] md:mb-3">{title['zh-tw']}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3 mb-3">
                {badges.map((badge) => (
                  <Badge
                    variant="outline"
                    key={badge}
                    className={cn(
                      "rounded-full border-2 border-primary-blue-300 px-4 py-2",
                      "text-xs font-bold text-primary-blue-400 md:text-base",
                      "h-auto"
                    )}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xl font-bold text-neutral-500 md:text-2xl">{title.en}</p>
          </div>
          <div className="relative flex h-[60px] w-full items-center justify-center rounded-xl bg-neutral-200 mt-[136px] sm:mt-0 sm:h-[208px] sm:w-[169px] sm:rounded-3xl sm:justify-start">
            <img
              src={src}
              alt={title.en}
              className="h-[160px] -mt-[116px] sm:mt-0 sm:ml-[-51px]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutCard;