import { FeatureCard } from "../molecules";

export default function Features() {
  return (
    <section className="">
      <div>
        <h3 className="font-semibold text-h2">Why Join Early</h3>
        <p className="max-w-[397px]_  font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted">
          The platform designed specifically for local vendors like you
        </p>
      </div>

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
