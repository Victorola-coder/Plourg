import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-around mx-auto my-[32px]">
      <figure>
        <img src="/images/logo.svg" alt="Plourg" />
      </figure>
      <button
        type="button"
        className="bg-[#00BA59] text-[#FFFFFF] font-medium font-franklin px-[24px] py-[10px] rounded-[99px]"
      >
        Join our waitlist
      </button>
    </nav>
  );
}
