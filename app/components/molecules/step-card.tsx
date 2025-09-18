type StepCardProps = {
  title: string;
  description: string;
};

export default function StepCard({ title, description }: StepCardProps) {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-[16px] p-6">
      <h3 className="text-[#000000] font-franklin text-lg tracking-tight">
        {title}
      </h3>
      <p className="text-[#A3A3A3] mt-2 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
