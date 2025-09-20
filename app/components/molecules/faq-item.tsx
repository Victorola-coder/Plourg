type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-[#D1D1D1] py-4">
      <h3 className="font-franklin font-semibold text-[16px] leading-[120%] tracking-[-2%] text-ink mb-2">
        {question}
      </h3>
      <p className="max-w-[718px] font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted">
        {answer}
      </p>
    </div>
  );
}
