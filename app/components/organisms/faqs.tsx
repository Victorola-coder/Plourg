"use client";

import React from "react";
import { motion } from "framer-motion";
import FAQItem from "../molecules/faq-item";

const faqs = [
  {
    q: "What exactly is Plourg?",
    a: "Plourg is a campus-focused marketplace that makes it easy to buy, sell, or find anything you need—food, services, or one-off items—from people on or around your campus.",
  },
  {
    q: "Do I need to be a student to use Plourg?",
    a: "No. While Plourg is designed for campus communities, anyone living or working around campus can join and use the platform.",
  },
  {
    q: "Is there a cost to join the waitlist?",
    a: "Nope. Joining the waitlist is completely free.",
  },
  {
    q: "How will I know when it's my turn to join?",
    a: "We'll notify you by SMS or email using the details you provided when it's time to onboard.",
  },
  {
    q: "I'm a vendor, how does Plourg help me?",
    a: "Plourg gives you a central place to showcase your products or services, manage orders efficiently, and connect with a steady stream of buyers without juggling random chats.",
  },
  {
    q: "Can I post second-hand items or things I'm no longer using?",
    a: "Yes! We're building Plourg Thrift for exactly that. Sell your unused items to others on or near campus.",
  },
  {
    q: "What if I need help or have feedback?",
    a: "You can reach out through our social media channels. We value your input and will respond as quickly as possible.",
  },
];

export default function FAQs() {
  return (
    <motion.section
      className="justify-center flex flex-col mx-[20px] md:mx-[48px] lg:mx-[308px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2
        className="text-[#000000] font-semibold font-franklin text-[24px] md:text-[28px] lg:text-[32px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        FAQs
      </motion.h2>
      <motion.p
        className="text-[#A3A3A3] text-[14px] md:text-[16px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Common questions from shoppers like you
      </motion.p>
      <motion.div
        className="grid gap-3 p-[20px] md:p-[40px] rounded-[16px] md:rounded-[24px] bg-[#F7F7F7] border-b border-[#E5E5E5] mt-[16px] md:mt-[32px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {faqs.map((f, index) => (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <FAQItem question={f.q} answer={f.a} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
