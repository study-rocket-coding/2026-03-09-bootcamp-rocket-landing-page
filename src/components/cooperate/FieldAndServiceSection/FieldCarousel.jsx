import React from 'react';
import CarouselList from '../FieldAndServiceSection/CarouselList';

const FieldCarousel = ({ images }) => {
  return (
    <>
      {/* Desktop */}
      <div className="carousel-container notebook:flex scrollbar-none mt-15 hidden snap-x snap-mandatory gap-6 overflow-x-auto">
        <CarouselList images={images} type="pc" />
      </div>

      {/* Mobile */}
      <div className="carousel-container-mb notebook:hidden scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4">
        <CarouselList images={images} type="mb" />
      </div>
    </>
  );
};

export default FieldCarousel;
