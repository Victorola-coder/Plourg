type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white/5 border border-white/10 rounded-[16px] p-6 ${
        className ?? ""
      }`}
    >
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="shrink-0 h-12 w-12 rounded-full grid place-content-center bg-[#00BA59] text-white">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-white font-semibold font-franklin text-lg tracking-tight">
            {title}
          </h3>
          <p className="text-white/70 mt-2 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
