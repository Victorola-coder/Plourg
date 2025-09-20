export default function CTAWaitlist() {
  return (
    <section className="bg-[#FB41DC] mx-[20px] md:mx-[48px] rounded-[16px] md:rounded-[24px] py-[40px] md:py-[72px] px-[20px] md:px-[73px] my-[32px] md:my-[64px]">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        <h2 className="font-franklin text-[40px] md:text-[128px] leading-[90%] md:leading-[100%] tracking-[-2%] md:tracking-[-3%] font-semibold max-w-[820px] text-[#FFFFFF] text-center md:text-left">
          Join 1045 vendor's on our waitlist
        </h2>
        <div className="flex flex-col gap-[20px] md:gap-[100px] items-center md:items-start">
          <p className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF] text-center md:text-left">
            Forward-thinking business owners are already preparing to grow their
            sales with Plourg.
          </p>
          <button
            type="button"
            className="w-fit bg-white text-[#000000] font-medium font-franklin px-[16px] md:px-[21px] py-[8px] md:py-[10px] rounded-[99px] text-sm md:text-base"
          >
            Join our waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
