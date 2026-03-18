const HeaderMarquee = () => {
  const marqueeData = {
    a: "Let&apos;s join" , 
    b:"- 火箭隊培訓營 Rocket -",
    c: "- 共同空間 Co-working space -"
  }
  const marqueeList = [
  { id: "m1" },
  { id: "m2" },
  { id: "m3" },
  { id: "m4" },
  { id: "m5" },
  { id: "m6" },
];
  const marqueeContent = (
    <div className="flex items-center gap-6 shrink-0">
      {marqueeList.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-5 whitespace-nowrap font-bold"
        >
          <span>{marqueeData.a}</span>
          <div>{marqueeData.b}</div>
          <div>{marqueeData.c}</div>
        </div>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 z-1000 w-full h-16 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="flex items-center overflow-hidden w-full h-full">
        <div className="flex items-center gap-6 animate-[track-fast_60s_linear_infinite] will-change-transform">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </header>
  );
};

export default HeaderMarquee;
