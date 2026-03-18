import { cn } from '@/lib/utils';
import { locationData } from './data';

const LocationMap = ({ className = '' }) => {
  const { images } = locationData;

  return (
    <div
      className={cn(
        'notebook:max-w-[636px] notebook:h-[420px] h-[240px] w-full overflow-hidden rounded-2xl',
        className
      )}
    >
      <picture>
        <source media="(min-width: 1024px)" srcSet={images.lg} />
        <img
          src={images.sm}
          alt={images.alt}
          className="block h-full w-full object-cover"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default LocationMap;
