const CarouselList = ({ images, type }) => {
  return (
    <>
      {images.map((img) => {
        const src = type === 'pc' ? img.lg : img.sm;
        const CarouselKey = `${src}-${img.alt}`;

        return (
          <div
            key={CarouselKey}
            className={
              type === 'pc'
                ? 'carousel-photo h-[424px] flex-shrink-0 snap-start overflow-hidden rounded-2xl py-4'
                : 'carousel-photo-mb h-[260px] w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-xl'
            }
          >
            <img
              src={src}
              alt={img.alt}
              className={
                type === 'pc' ? 'h-full w-auto object-cover' : 'block h-full w-full object-contain'
              }
            />
          </div>
        );
      })}
    </>
  );
};

export default CarouselList;
