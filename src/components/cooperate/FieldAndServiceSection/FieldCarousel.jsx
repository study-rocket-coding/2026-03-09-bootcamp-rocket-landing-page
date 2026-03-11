import React from 'react';

const FieldCarousel = ({ images }) => {
  return (
    <>
      {/* Carousel 輪播組件 (桌機版) */}
      <div className="carousel-container hidden notebook:flex gap-6 overflow-x-auto snap-x snap-mandatory mt-15 scrollbar-none">
        {images.map((img, idx) => (
          <div key={idx} className="carousel-photo h-[424px] py-4 flex-shrink-0 rounded-2xl overflow-hidden snap-start">
            <img src={img.lg} alt={img.alt} className="h-full w-auto object-cover" />
          </div>
        ))}
      </div>
      
      {/* Carousel 手機版 (Mobile) */}
      <div className="carousel-container-mb flex notebook:hidden gap-4 overflow-x-auto snap-x snap-mandatory mt-10 px-4 scrollbar-none">
        {images.map((img, idx) => (
          <div key={idx} className="carousel-photo-mb flex-shrink-0 w-[280px] h-[260px] rounded-xl overflow-hidden snap-start">
            <img src={img.sm} alt={img.alt} className="w-full h-full object-contain block" />
          </div>
        ))}
      </div>
    </>
  );
};

export default FieldCarousel;
