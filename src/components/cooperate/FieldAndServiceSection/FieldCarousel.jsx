import CarouselList from "../FieldAndServiceSection/CarouselList"

const FieldCarousel = ({ images }) => {
  return (
    <>
      {/* Desktop */}
      <div className="carousel-container hidden notebook:flex gap-6 overflow-x-auto snap-x snap-mandatory mt-15 scrollbar-none">
        <CarouselList images={images} type="pc" />
      </div>

      {/* Mobile */}
      <div className="carousel-container-mb flex notebook:hidden gap-4 overflow-x-auto snap-x snap-mandatory mt-10 px-4 scrollbar-none">
        <CarouselList images={images} type="mb" />
      </div>
    </>
  );
};

export default FieldCarousel;
