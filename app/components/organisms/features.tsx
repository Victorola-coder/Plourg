export default function Features() {
  return (
    <section
      className="px-[308px] min-h-[400px] bg-cover bg-center bg-no-repeat rounded-[24px]"
      style={{ backgroundImage: "url('/images/feat.png')" }}
    >
      <div>
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

        <div className="bg-[#F7F7F7] rounded-[24px] pl-[42px] pr-[77.7px] pt-[61px] pb-[70.63px] flex flex-row items-end justify-between">
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
                src="/images/wow.png"
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
      </div>

      {/* how it works */}
      <div>
        <div className="p-8 md:p-12">
          <div className="max-w-[500px]">
            <h3 className="font-franklin font-semibold text-h2 text-ink mb-4">
              How plourg work for you.
            </h3>
            <p className="font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted">
              Simple steps to start selling and earning more
            </p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-[24px] pl-[42px] pr-[77.7px] pt-[61px] pb-[70.63px] flex flex-row items-end justify-between">
          <div>
            <h3 className="max-w-[294px] font-franklin font-semibold text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
              Browse vendors and services on campus.
            </h3>
            <p className="max-w-[281px] text-[#5C5C5C] font-normal text-[16px] leading-[120%] tracking-[-2%]">
              Create your vendor profile and upload your products in minutes.
              Our easy setup process gets you selling faster than any other
              platform.
            </p>
          </div>
          <figure>
            <img src="/images/light.png" draggable={false} alt="Early Access" />
          </figure>
        </div>
        <div className="mt-[32px] flex flex-row items-center gap-[24px] justify-center">
          <div className="bg-[#F7F7F7] rounded-[24px] flex flex-col gap-[41.67px] px-[42px] pt-[30px] pb-[28px]">
            <figure className="self-end">
              <img
                src="/images/join.png"
                draggable={false}
                alt="Join the Waitlist"
              />
            </figure>
            <div>
              <h3 className="max-w-[294px] font-franklin font-semibold text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
                Place your order or connect instantly.
              </h3>
              <p className="max-w-[294px] text-[#5C5C5C] font-normal text-[16px] leading-[120%] tracking-[-2%]">
                Get discovered by local customers searching for exactly what you
                sell. Our smart matching connects you with your ideal buyers
                automatically.
              </p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] rounded-[24px] flex flex-col gap-[41.67px] px-[42px] pt-[30px] pb-[28px]">
            <figure className="self-end">
              <img
                src="/images/money.png"
                draggable={false}
                alt="Shape the Platform"
              />
            </figure>
            <div>
              <h3 className="max-w-[308px] font-franklin font-semibold text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
                ExBuy, sell, or pick up with zero hassle.
              </h3>
              <p className="max-w-[308px] text-[#5C5C5C] font-normal text-[16px] leading-[120%] tracking-[-2%]">
                Process secure payments, manage orders, and build relationships
                with repeat customers. Keep more of your earnings with our low
                vendor fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
