import FeatureCard from "../molecules/feature-card";

export default function Features() {
  return (
    <section className="mx-[20px] md:mx-[48px] my-[64px]">
      <div className="grid md:grid-cols-3 gap-4">
        <FeatureCard
          title="Early Access"
          description="Be the first to try Plourg before public launch."
          className="md:col-span-3"
        />
        <FeatureCard
          title="Shape the Platform"
          description="Share feedback that influences features."
        />
        <FeatureCard
          title="Exclusive Updates"
          description="Stay in the loop with launch news and special perks."
        />
      </div>
    </section>
  );
}


