"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="bg-brand-pink mx-[20px] md:mx-[48px] rounded-[16px] md:rounded-[24px] py-[40px] md:py-[72px] px-[20px] md:px-[73px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center">
        <motion.h1
          className="text-center font-franklin font-semibold text-[60px] md:text-hero text-white leading-[90%] md:leading-[100%] tracking-[-2%] md:tracking-[-3%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          SELL, CONNECT, EARN.
        </motion.h1>
      </div>
    </motion.section>
  );
}
