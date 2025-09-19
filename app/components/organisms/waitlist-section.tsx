import WaitlistForm from "../molecules/waitlist-form";

export default function WaitlistSection() {
  return (
    <section className="mx-[20px] md:mx-[48px] my-[64px] flex flex-col justify-center items-center">
      <div>
        <h3 className="font-franklin font-semibold text-h2 text-center">
          Plourg is almost here!
        </h3>
        <p className="text-franklin text-[16px] md:text-[18px]">
          A platform that makes it easy to buy, sell, or find anything you need
          on and around campus—fast, simple, and stress-free. Don’t be left out.
        </p>
      </div>

      {/* <WaitlistForm /> */}
    </section>
  );
}
