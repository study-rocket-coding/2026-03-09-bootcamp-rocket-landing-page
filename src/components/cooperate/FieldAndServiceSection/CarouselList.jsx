const CarouselList = ({ images, type }) => {
  return (
    <>
      {images.map((img) => {
        const src = type === "pc" ? img.lg : img.sm;
        const CarouselKey = `${src}-${img.alt}`;

        return (
          <div
            key={CarouselKey}
            className={
              type === "pc"
                ? "carousel-photo h-[424px] py-4 flex-shrink-0 rounded-2xl overflow-hidden snap-start"
                : "carousel-photo-mb flex-shrink-0 w-[280px] h-[260px] rounded-xl overflow-hidden snap-start"
            }
          >
            <img
              src={src}
              alt={img.alt}
              className={
                type === "pc"
                  ? "h-full w-auto object-cover"
                  : "w-full h-full object-contain block"
              }
            />
          </div>
        );
      })}
    </>
  );
};

export default CarouselList;