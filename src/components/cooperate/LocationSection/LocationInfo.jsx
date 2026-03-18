import { cn } from '@/lib/utils';

const LocationInfo = ({ eyebrow, title, description, className = '' }) => {
  return (
    <div className={cn('location-info notebook:max-w-[500px] flex w-full flex-col', className)}>
      <span className="location-eyebrow notebook:text-[20px] notebook:mb-5 mb-2 text-[14px] leading-[150%] font-bold tracking-[0.02em] text-neutral-700">
        {eyebrow}
      </span>
      <h2 className="location-title notebook:text-[36px] notebook:mb-10 mb-4 text-[28px] leading-[150%] font-bold tracking-[0.02em] text-neutral-700">
        {title}
      </h2>
      <div className="location-desc text-base leading-[150%] font-medium tracking-[0.02em] text-neutral-700">
        {description}
      </div>
    </div>
  );
};

export default LocationInfo;
