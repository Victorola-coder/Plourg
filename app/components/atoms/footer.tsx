import { InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FB41DC] m-[20px] md:m-[48px] rounded-[16px] md:rounded-[24px] py-[40px] md:py-[95px] px-[20px] md:px-[73px] flex flex-col md:flex-row items-start md:items-center gap-[40px] md:gap-[220px]">
      <h2 className="font-franklin font-semibold max-w-[173px] md:max-w-min text-[40px] md:text-[128px] leading-[90%] md:leading-[100%] tracking-[-2%] md:tracking-[-3%] text-white text-left">
        Connect with us today.
      </h2>
      <div className="flex flex-col gap-[20px] md:gap-[103px] items-start">
        <div className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF] flex flex-col gap-2">
          <figure className="flex flex-row items-center gap-[13px]">
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-[20px] md:w-auto"
            />
            <figcaption>Instagram</figcaption>
          </figure>
          <figure className="flex flex-row items-center gap-[13px]">
            <img
              src="/images/twitter.svg"
              alt="Twitter"
              className="w-[20px] md:w-auto"
            />
            <figcaption>Twitter</figcaption>
          </figure>
          <figure className="flex flex-row items-center gap-[13px]">
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="w-[20px] md:w-auto"
            />
            <figcaption>Linkedin</figcaption>
          </figure>
          <figure className="flex flex-row items-center gap-[13px]">
            <img
              src="/images/facebook.svg"
              alt="LinkedIn"
              className="w-[20px] md:w-auto"
            />
            <figcaption>Linkedin</figcaption>
          </figure>
        </div>
        <p className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF] text-center md:text-left">
          © All rights reserved. 2025, Plourg.
        </p>
      </div>
    </footer>
  );
}
