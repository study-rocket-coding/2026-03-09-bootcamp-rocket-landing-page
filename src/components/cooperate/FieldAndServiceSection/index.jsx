import { fieldItems, services, carouselImages } from './data';
import FieldSectionLabel from './FieldSectionLabel';
import FieldHardwareRow from './FieldHardwareRow';
import ServiceCard from './ServiceCard';
import FieldCarousel from './FieldCarousel';

const FieldAndServiceSection = () => {
  return (
    <section className="field-and-service-container notebook:px-0 px-12 py-20">
      <h2 className="notebook:text-[36px] mb-15 text-center text-[28px] font-bold">場域說明</h2>

      {/* #硬體 */}
      <div className="mx-auto mt-[60px] flex max-w-[1076px] flex-col gap-7">
        <FieldSectionLabel> 硬體 </FieldSectionLabel>
        <div className="notebook:gap-9 flex flex-col items-center gap-10">
          {fieldItems.map((item, index) => (
            <FieldHardwareRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* #服務 */}
      <div className="notebook:mt-[76px] notebook:gap-8 mx-auto mt-19 flex max-w-[1076px] flex-col gap-8 pb-20">
        <FieldSectionLabel> 服務 </FieldSectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 notebook:grid-cols-3 gap-y-7 notebook:gap-y-12 gap-x-7 place-items-center">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>

      {/* Carousel 輪播組件 */}
      <FieldCarousel images={carouselImages} />
    </section>
  );
};

export default FieldAndServiceSection;
