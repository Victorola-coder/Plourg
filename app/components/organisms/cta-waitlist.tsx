"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CTAWaitlist() {
  return (
    <motion.section
      className="bg-[#FB41DC] mx-[20px] md:mx-[48px] rounded-[16px] md:rounded-[24px] py-[40px] md:py-[72px] px-[20px] md:px-[73px] my-[32px] md:my-[64px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
        <motion.h2
          className="font-franklin text-[40px] md:text-[128px] leading-[90%] md:leading-[100%] tracking-[-2%] md:tracking-[-3%] font-semibold max-w-[820px] text-[#FFFFFF] text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Join 1045 vendor's on our waitlist
        </motion.h2>
        <motion.div
          className="flex flex-col gap-[20px] md:gap-[100px] items-center md:items-start"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-[#FFFFFF] text-center md:text-left">
            Forward-thinking business owners are already preparing to grow their
            sales with Plourg.
          </p>
          <motion.button
            type="button"
            className="w-fit bg-white text-[#000000] font-medium font-franklin px-[16px] md:px-[21px] py-[8px] md:py-[10px] rounded-[99px] text-sm md:text-base hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Join our waitlist
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
