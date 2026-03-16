import { locationData } from './data';

const LocationMap = ({ className = "" }) => {
    const { images } = locationData;
    return(
    <div className={`w-full notebook:max-w-[636px] h-[240px] notebook:h-[420px] rounded-2xl overflow-hidden ${className}`}>
        <picture>
        <source media="(min-width: 1024px)" srcSet={images.lg} />

        <img
          src={images.sm}
          alt={images.alt}
          className="w-full h-full object-cover block"
          loading="lazy"
        />  
        </picture>
    </div>
    )
}

export default LocationMap;