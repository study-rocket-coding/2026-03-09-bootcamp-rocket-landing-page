const HeaderMarquee = () => {
  const marqueeData = {
    a: 'Let&apos;s join',
    b: '- 火箭隊培訓營 Rocket -',
    c: '- 共同空間 Co-working space -',
  };
  const marqueeList = [
    { id: 'm1' },
    { id: 'm2' },
    { id: 'm3' },
    { id: 'm4' },
    { id: 'm5' },
    { id: 'm6' },
  ];
  const marqueeContent = (
    <div className="flex shrink-0 items-center gap-6">
      {marqueeList.map((item) => (
        <div key={item.id} className="flex items-center gap-5 font-bold whitespace-nowrap">
          <span>{marqueeData.a}</span>
          <div>{marqueeData.b}</div>
          <div>{marqueeData.c}</div>
        </div>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 z-1000 h-16 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
      <div className="flex h-full w-full items-center overflow-hidden">
        <div className="flex animate-[track-fast_60s_linear_infinite] items-center gap-6 will-change-transform">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </header>
  );
};

export default HeaderMarquee;
