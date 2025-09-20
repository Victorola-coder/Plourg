"use client";

import React from "react";
import { motion } from "framer-motion";
import WaitlistForm from "../molecules/waitlist-form";

export default function WaitlistSection() {
  return (
    <motion.section
      className="mx-[20px] md:mx-[48px] my-[32px] md:my-[64px] flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="flex flex-col justify-center items-center gap-[12px] md:gap-[16px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="font-franklin font-semibold text-[24px] md:text-h2 text-center">
          Plourg is almost here!
        </h3>
        <p className="max-w-[320px] md:max-w-[432px] font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-center text-ink-muted">
          A platform that makes it easy to buy, sell, or find anything you need
          on and around campus—fast, simple, and stress-free.
          <span className="inline-block font-semibold mt-2 md:mt-3">
            {" "}
            Don't be left out.
          </span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <WaitlistForm />
      </motion.div>
    </motion.section>
  );
}
