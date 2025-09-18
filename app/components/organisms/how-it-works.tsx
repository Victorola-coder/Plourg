import StepCard from "../molecules/step-card";

export default function HowItWorks() {
  return (
    <section className="mx-[20px] md:mx-[48px] my-[64px]">
      <h2 className="text-[#000000] font-franklin text-[28px] md:text-[36px] mb-6">
        How plourg work for you.
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <StepCard
          title="Browse vendors and services on campus."
          description="Discover local vendors, explore products and services, and set up your page in minutes."
        />
        <StepCard
          title="Place your order or connect instantly."
          description="Get discovered by customers searching for what you sell. Our smart matching connects you with local buyers automatically."
        />
        <StepCard
          title="Buy, sell, or pick up with zero hassle."
          description="Process payments, manage orders, and build relationships with repeat customers. Keep more of your earnings with our low vendor fees."
        />
      </div>
    </section>
  );
}
