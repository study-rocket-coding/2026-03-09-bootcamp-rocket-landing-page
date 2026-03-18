const FaqItem = ({ src, alt, question, answer }) => {
  return (
    <div className="flex gap-4 border-b-2 border-neutral-200 px-0 py-5 md:gap-8 md:px-5">
      <div className="shrink-0 pt-1 md:pt-0">
        <img src={src} alt={alt} className="h-5 w-5 md:h-6 md:w-6" />
      </div>
      <div className="text-base leading-relaxed md:text-lg">
        <p className="font-bold">Q：{question}</p>
        <p className="mt-1">A：{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
