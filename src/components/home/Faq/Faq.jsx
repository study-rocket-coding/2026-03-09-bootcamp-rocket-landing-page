import React from 'react';
import { feeFaqs, processFaqs } from './data';
import FaqItem from './FaqItem';

const Faq = () => {
  return (
    <section className="flex flex-col items-center px-12 pt-12 pb-[76px] md:py-31">
      <div className="flex w-full max-w-[856px] flex-col gap-15">
        <div className="w-full">
          <h3 className="border-b-2 border-neutral-200 text-2xl font-bold md:text-[32px]">培訓費用</h3>
            {feeFaqs.map((info) => (
              <FaqItem key={info.alt} {...info} />
            ))}
        </div>

        <div className="w-full">
          <h3 className="border-b-2 border-neutral-200 text-2xl font-bold md:text-[32px]">培訓流程</h3>
          {processFaqs.map((info) => (
            <FaqItem key={info.alt} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
