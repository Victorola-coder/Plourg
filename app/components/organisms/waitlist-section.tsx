import WaitlistForm from "../molecules/waitlist-form";

export default function WaitlistSection() {
  return (
    <section className="mx-[20px] md:mx-[48px] my-[32px] md:my-[64px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[12px] md:gap-[16px]">
        <h3 className="font-franklin font-semibold text-[24px] md:text-h2 text-center">
          Plourg is almost here!
        </h3>
        <p className="max-w-[320px] md:max-w-[432px] font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-center text-ink-muted">
          A platform that makes it easy to buy, sell, or find anything you need
          on and around campus—fast, simple, and stress-free.
          <span className="inline-block font-semibold mt-2 md:mt-3">
            {" "}
            Don't be left out.
          </span>
        </p>
      </div>

      <WaitlistForm />
    </section>
  );
}
