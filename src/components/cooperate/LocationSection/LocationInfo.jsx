import { cn } from "@/lib/utils";

const LocationInfo = ({ eyebrow, title, description, className = "" }) => {
  return (
    <div className={cn("location-info w-full notebook:max-w-[500px] flex flex-col", className)}>
      <span className="location-eyebrow text-[14px] notebook:text-[20px] leading-[150%] tracking-[0.02em] font-bold text-neutral-700 mb-2 notebook:mb-5">
        {eyebrow}
      </span>
      <h2 className="location-title text-[28px] notebook:text-[36px] font-bold leading-[150%] tracking-[0.02em] mb-4 notebook:mb-10 text-neutral-700">
        {title}
      </h2>
      <div className="location-desc text-base leading-[150%] tracking-[0.02em] font-medium text-neutral-700">
        {description}
      </div>
    </div>
  );
};

export default LocationInfo;
