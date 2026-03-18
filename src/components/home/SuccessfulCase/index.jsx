import { row1, row2 } from './data';

const SuccessfulCase = () => {
  return (
    <section className="flex items-center justify-center bg-white px-12 pt-12 pb-[92px] min-[1440px]:px-[72px] min-[1440px]:pt-[92px] min-[1440px]:pb-[120px]">
      <div className="flex w-full max-w-[1296px] flex-col items-center justify-between gap-7">
        <h2 className="w-full text-center text-[28px] font-bold md:text-[36px]">成功案例</h2>

        <div className="scrollbar-none w-full overflow-x-auto overflow-y-hidden">
          <div className="mx-auto flex w-fit items-center gap-6">
            {row1.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="aspect-[240/160] h-auto w-[240px] min-w-[240px] min-[1440px]:aspect-[306/204] min-[1440px]:max-w-[306px]"
              />
            ))}
          </div>
        </div>

        <div className="scrollbar-none w-full overflow-x-auto overflow-y-hidden">
          <div className="mx-auto flex w-fit items-center gap-6">
            {row2.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="aspect-[240/160] h-auto w-[240px] min-w-[240px] min-[1440px]:aspect-[306/204] min-[1440px]:max-w-[306px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulCase;
