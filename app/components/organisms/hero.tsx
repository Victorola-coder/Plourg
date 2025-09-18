import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#FB41DC] text-white mx-[20px] md:mx-[48px] rounded-[24px] py-[72px] px-[24px] md:px-[73px]">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex items-center justify-between gap-6">
          <h1 className="font-franklin text-[48px] md:text-[96px] leading-[0.95] tracking-[-0.03em] font-semibold">
            SELL, CONNECT,
            <br />
            EARN.
          </h1>
          <figure className="hidden md:block">
            <img src="/images/Vector 1.png" alt="Plourg" className="max-w-[280px]" />
          </figure>
        </div>
      </div>
    </section>
  );
}


