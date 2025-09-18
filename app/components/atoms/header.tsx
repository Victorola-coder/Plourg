import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-around mx-auto my-[32px]">
      <figure>
        <img src="/images/logo.svg" alt="Plourg" />
      </figure>
      <button
        type="button"
        className="bg-[#00BA59] text-white font-medium font-franklin px-[21px] py-[10px] rounded-[99px]"
      >
        Join waitlist
      </button>
    </nav>
  );
}
