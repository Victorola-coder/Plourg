export default function Features() {
  return (
    <section
      className="px-[308px] min-h-[400px] bg-cover bg-center bg-no-repeat rounded-[24px]"
      style={{ backgroundImage: "url('/images/feat.png')" }}
    >
      <div className="p-8 md:p-12">
        <div className="max-w-[500px]">
          <h3 className="font-franklin font-semibold text-h2 text-ink mb-4">
            Why Join Early
          </h3>
          <p className="font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted">
            The platform designed specifically for local vendors like you
          </p>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-[24px] pl-[42px] pr-[77.7px] pt-[61px] pb-[70.63px] flex flex-row items-center justify-between">
        <div>
          <h3 className="font-franklin font-semibold text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
            Early Access
          </h3>
          <p className="max-w-[281px] text-[#5C5C5C] font-normal text-[16px] leading-[120%] tracking-[-2%]">
            Be the first to try Plourg before public launch.
          </p>
        </div>
        <figure>
          <img src="/images/light.png" draggable={false} alt="Early Access" />
        </figure>
      </div>
      <div className="mt-[32px] flex flex-row items-center gap-[24px] justify-center">
        <div className="bg-[#F7F7F7] rounded-[24px] flex flex-col gap-[41.67px] px-[42px] pt-[30px] pb-[111px]">
          <figure className="self-end">
            <img
              src="/images/home.png"
              draggable={false}
              alt="Shape the Platform"
            />
          </figure>
          <div>
            <h3 className="font-franklin font-semibold text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
              Shape the Platform
            </h3>
            <p className="text-[#5C5C5C] font-normal text-[16px] leading-[120%] tracking-[-2%]">
              Share feedback that influences features.
            </p>
          </div>
        </div>
        <div className="bg-[#F7F7F7] rounded-[24px] flex flex-col gap-[41.67px] px-[42px] pt-[30px] pb-[111px]">
          <figure className="self-end">
            <img
              src="/images/home.png"
              draggable={false}
              alt="Shape the Platform"
            />
          </figure>
          <div>
            <h3 className="font-franklin font-semibold text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
              Exclusive Updates
            </h3>
            <p className="max-w-[313px] text-[#5C5C5C] font-normal text-[16px] leading-[120%] tracking-[-2%]">
              Stay in the loop with launch news and special perks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
