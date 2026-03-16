import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const AboutCard = ({ title, badges, src }) => {
  return (
    <div className="shrink-0 snap-start w-full lg:max-w-[636px] rounded-3xl bg-white px-5 py-4 md:p-9">
      <div className="flex flex-col justify-between sm:flex-row sm:gap-7">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-2 text-[24px] font-bold sm:mb-3 sm:text-[32px]">{title['zh-tw']}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 sm:mb-3">
              {badges.map((badge) => (
                <Badge
                  variant="outline"
                  key={badge}
                  className={cn(
                    "rounded-full border-2 border-primary-blue-300 px-4 py-2",
                    "text-xs font-bold text-primary-blue-400 md:text-base",
                    "h-auto" // 覆蓋 base 的 h-5
                  )}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <p className="mt-4 text-xl font-bold text-neutral-500 sm:text-2xl">{title.en}</p>
        </div>
        <div className="relative flex h-[60px] w-full items-center justify-center rounded-xl bg-neutral-200 mt-[136px] sm:mt-0 sm:h-[208px] sm:w-[169px] sm:rounded-3xl sm:justify-start">
          <img
            src={src}
            alt={title.en}
            className="h-[160px] -mt-[116px] sm:mt-0 sm:ml-[-51px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;