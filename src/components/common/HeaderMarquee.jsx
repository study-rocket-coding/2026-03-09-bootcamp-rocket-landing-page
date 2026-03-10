import React from 'react';

const HeaderMarquee = () => {
  const marqueeItems = Array(6).fill(null);

  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-center overflow-hidden bg-white/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-center overflow-hidden">
        <div className="animate-track-fast flex shrink-0 items-center justify-start gap-6 will-change-transform">
          {marqueeItems.map((_, index) => (
            <div key={index} className="flex shrink-0 items-center justify-center gap-5 whitespace-nowrap font-bold">
              <span>Let's join</span>
              <div>- 火箭隊培訓營 Rocket -</div>
              <div>- 共同空間 Co-working space -</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderMarquee;
