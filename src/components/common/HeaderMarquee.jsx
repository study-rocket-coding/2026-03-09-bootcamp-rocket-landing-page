import React from 'react';

const HeaderMarquee = () => {
  const marqueeContent = (
    <div className="flex items-center gap-6 shrink-0">
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="flex items-center gap-5 whitespace-nowrap font-bold">
            <span>Let&apos;s join</span>
            <div>- 火箭隊培訓營 Rocket -</div>
            <div>- 共同空間 Co-working space -</div>
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
