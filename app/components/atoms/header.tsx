import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between md:justify-around mx-[20px] md:mx-auto my-[16px] md:my-[32px]">
      <figure>
        <img
          src="/images/logo.svg"
          alt="Plourg"
          className="w-[120px] md:w-auto"
        />
      </figure>
      <button
        type="button"
        className="bg-[#00BA59] text-[#FFFFFF] font-medium font-franklin px-[16px] md:px-[24px] py-[8px] md:py-[10px] rounded-[99px] text-sm md:text-base"
      >
        Join our waitlist
      </button>
    </nav>
  );
}
