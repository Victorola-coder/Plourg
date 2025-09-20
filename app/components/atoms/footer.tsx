"use client";

import React from "react";
import { motion } from "framer-motion";
import { InstagramIcon, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#FB41DC] m-[20px] md:m-[48px] rounded-[16px] md:rounded-[24px] py-[40px] md:py-[95px] px-[20px] md:px-[73px] flex flex-col md:flex-row items-start md:items-center gap-[40px] md:gap-[220px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="font-franklin font-semibold max-w-[173px] md:max-w-max text-[40px] md:text-[128px] leading-[90%] md:leading-[100%] tracking-[-2%] md:tracking-[-3%] text-white text-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Connect with us today.
      </motion.h2>
      <motion.div
        className="flex flex-col gap-[20px] md:gap-[103px] items-start"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF] flex flex-col gap-2">
          {[
            {
              src: "/images/instagram.svg",
              alt: "Instagram",
              name: "Instagram",
            },
            { src: "/images/twitter.svg", alt: "Twitter", name: "Twitter" },
            { src: "/images/linkedin.svg", alt: "LinkedIn", name: "Linkedin" },
            { src: "/images/facebook.svg", alt: "Facebook", name: "Facebook" },
          ].map((social, index) => (
            <motion.figure
              key={social.name}
              className="flex flex-row items-center gap-[13px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={social.src}
                alt={social.alt}
                className="w-[20px] md:w-auto"
              />
              <figcaption>{social.name}</figcaption>
            </motion.figure>
          ))}
        </div>
        <motion.p
          className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF] text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          © All rights reserved. 2025, Plourg.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
