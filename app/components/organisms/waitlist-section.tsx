import WaitlistForm from "../molecules/waitlist-form";

export default function WaitlistSection() {
  return (
    <section className="mx-[20px] md:mx-[48px] my-[64px]">
      <div className="bg-black rounded-[24px] p-8 md:p-12 mb-8">
        <h2 className="text-white font-franklin text-[32px] md:text-[48px] font-semibold leading-tight mb-4">
          A platform that makes it easy to buy, sell, or find anything you need
          on and around campus—fast, simple, and stress-free.
        </h2>
        <p className="text-white font-franklin text-[20px] md:text-[24px]">
          Don't be left out.
        </p>
      </div>

      <WaitlistForm />
    </section>
  );
}
