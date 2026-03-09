import React from 'react';
import rocket from '../../assets/organizer/organizer-rocket-lg.png';
import hexschool from '../../assets/organizer/organizer-hexschool-lg.png';
import goodidea from '../../assets/organizer/organizer-goodidea-lg.png';
import kdan from '../../assets/organizer/organizer-kdan-lg.png';
import titan from '../../assets/organizer/organizer-titan-lg.png';
import skw from '../../assets/organizer/organizer-skw-lg.png';
import wistron from '../../assets/organizer/organizer-wistron-lg.png';

const OrganizerCard = ({ img, role, name }) => {
  return (
    <div className="flex shrink-0 flex-col items-start gap-4">
      <div className="flex h-[120px] w-[156px] items-center justify-center rounded-xl bg-white md:h-[148px] md:w-[196px]">
        <img src={img} alt={name} className="max-h-full max-w-full p-4" />
      </div>
      <p className="text-sm text-neutral-700">
        <span className="block text-xs text-neutral-500">{role}</span>
        {name}
      </p>
    </div>
  );
};

const Organizers = () => {
  const data = [
    { img: rocket, role: '主辦單位', name: '火箭隊' },
    { img: hexschool, role: '協辦單位', name: '六角學院' },
    { img: goodidea, role: '協辦單位', name: '好想工作室' },
    { img: kdan, role: '合作招募廠商', name: '凱鈿行動科技' },
    { img: titan, role: '合作招募廠商', name: '鈦坦科技' },
    { img: skw, role: '合作招募廠商', name: '坂和企業' },
    { img: wistron, role: '合作招募廠商', name: '緯創資通' },
  ];

  return (
    <section className="relative w-full bg-neutral-200 py-10 md:py-14">
      <h3 className="absolute top-[-18px] left-12 bg-neutral-200 px-2 text-xl font-bold md:top-[-24px] md:left-[72px] md:text-2xl">
        主辦、協辦單位
      </h3>
      <div className="flex gap-6 overflow-x-auto px-12 pb-4 scrollbar-none md:px-[72px]">
        {data.map((item, index) => (
          <OrganizerCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Organizers;
