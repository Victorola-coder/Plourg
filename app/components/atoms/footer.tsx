import { InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FB41DC] m-[48px] rounded-[24px] py-[95px] px-[73px] flex flex-row items-center gap-[220px]">
      <h2 className="font-franklin font-semibold text-[128px] leading-[100%] tracking-[-3%] text-white">
        Connect with us today.
      </h2>
      <div className="flex flex-col gap-[103px]">
        <div className="font-franklin whitespace-nowrap font-normal text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF] flex flex-col gap-2">
          <figure className="flex flex-row items-center gap-[13px]">
            <img src="/images/instagram.svg" alt="Instagram" />
            <figcaption>Instagram</figcaption>
          </figure>
          <figure className="flex flex-row items-center gap-[13px]">
            <img src="/images/twitter.svg" alt="Twitter" />
            <figcaption>Twitter</figcaption>
          </figure>
          <figure className="flex flex-row items-center gap-[13px]">
            <img src="/images/linkedin.svg" alt="LinkedIn" />
            <figcaption>Linkedin</figcaption>
          </figure>
          <figure className="flex flex-row items-center gap-[13px]">
            <img src="/images/facebook.svg" alt="LinkedIn" />
            <figcaption>Linkedin</figcaption>
          </figure>
        </div>
        <p className="font-franklin whitespace-nowrap font-normal text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF]">
          © All rights reserved. 2025, Plourg.
        </p>
      </div>
    </footer>
  );
}
