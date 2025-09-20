export default function CTAWaitlist() {
  return (
    <section className="bg-[#FB41DC] mx-[20px] md:mx-[48px] rounded-[24px] py-[72px] px-[24px] md:px-[73px] my-[64px]">
      <div className="flex items-center justify-between">
        <h2 className="font-franklin text-[128px] leading-[0.95] tracking-[-0.03em] font-semibold max-w-[820px] text-[#FFFFFF]">
          Join 1045 vendor's on our waitlist
        </h2>
        <div className="flex flex-col gap-[100px]">
          <p className="font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF]">
            Forward-thinking business owners are already preparing to grow their
            sales with Plourg.
          </p>
          <button
            type="button"
            className="w-fit bg-white text-[#000000] font-medium font-franklin px-[21px] py-[10px] rounded-[99px]"
          >
            Join our waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
