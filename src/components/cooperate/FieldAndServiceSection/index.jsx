import { fieldItems, services, carouselImages } from './data';
import FieldSectionLabel from './FieldSectionLabel';
import FieldHardwareRow from './FieldHardwareRow';
import ServiceCard from './ServiceCard';
import FieldCarousel from './FieldCarousel';

const FieldAndServiceSection = () => {
  return (
    <section className="field-and-service-container py-20 notebook:px-0 px-12">
      <h2 className="text-[28px] notebook:text-[36px] font-bold text-center mb-15">場域說明</h2>

      {/* #硬體 */}
      <div className="mx-auto max-w-[1076px] mt-[60px] flex flex-col gap-7">
        <FieldSectionLabel> 硬體 </FieldSectionLabel>
        <div className="flex flex-col items-center gap-10 notebook:gap-9">
          {fieldItems.map((item, index) => (
            <FieldHardwareRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* #服務 */}
      <div className="mx-auto max-w-[1076px] mt-19 notebook:mt-[76px] flex flex-col gap-8 notebook:gap-8 pb-20">
        <FieldSectionLabel> 服務 </FieldSectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 notebook:grid-cols-3 gap-y-7 notebook:gap-y-12 gap-x-7 place-items-center">
          {services.map((s) => (
            <ServiceCard key={services.id} {...s} />
          ))}
        </div>
      </div>

      {/* Carousel 輪播組件 */}
      <FieldCarousel images={carouselImages} />
    </section>
  );
};

export default FieldAndServiceSection;
