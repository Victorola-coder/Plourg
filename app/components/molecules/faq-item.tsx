type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="bg-white border border-[#E5E5E5] rounded-[12px] p-4">
      <summary className="cursor-pointer font-franklin text-base text-[#000000]">
        {question}
      </summary>
      <p className="pt-2 text-[#A3A3A3] text-sm leading-relaxed">{answer}</p>
    </details>
  );
}
