import React from "react";

export default function Hero() {
  return (
    <section className="bg-brand-pink mx-[20px] md:mx-[48px] rounded-[16px] md:rounded-[24px] py-[40px] md:py-[72px] px-[20px] md:px-[73px]">
      <div className="flex items-center justify-center">
        <h1 className="text-center font-franklin font-semibold text-[60px] md:text-hero text-white leading-[90%] md:leading-[100%] tracking-[-2%] md:tracking-[-3%]">
          SELL, CONNECT, EARN.
        </h1>
      </div>
    </section>
  );
}
