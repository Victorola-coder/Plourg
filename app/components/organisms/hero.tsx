"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="bg-brand-pink mx-[20px] md:mx-[48px] rounded-[16px] md:rounded-[24px] py-[40px] md:py-[72px] px-[20px] md:px-[73px] relative"
      
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}

    >

      <div className="absolute left-[-10%] top-[-10%] ">

      <img
               src="/images/vectorimg.svg"
               draggable={false}
               alt="Shape the Platform"
               className="w-[200px] md:w-auto"
               />
               </div>
               <div className="absolute top-5 left-5 md:top-24 md:left-16 transform -rotate-12 hover:rotate-0 transition-transform duration-300 hover:scale-110 cursor-pointer">
        <p className="bg-[#00BA59] font-franklin text-xl md:text-4xl  text-black font-medium px-4 py-3 md:px-8 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          Sell
        </p>
      </div>

     
      <div className="absolute bottom-1   left-5 md:bottom-16 md:left-52 transform -translate-y-1/2 rotate-6 hover:rotate-0 transition-transform duration-300 hover:scale-110 cursor-pointer">
      <p className="bg-[#FDECC0] font-franklin text-xl md:text-4xl  text-black font-medium px-4 py-3 md:px-8 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          Buy
        </p>
      </div>

      {/* Plourg Tag - Top Right */}
      <div className="absolute top-5 right-5 md:top-24 md:right-16 transform rotate-12 hover:rotate-0 transition-transform duration-300 hover:scale-110 cursor-pointer">
      <p className="bg-[#FDD100] font-franklin text-xl md:text-4xl  text-black font-medium px-4 py-3 md:px-8 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          Plourg
        </p>
      </div>

      {/* Connect Tag - Middle Right */}
      <div className="absolute bottom-1 right-5  md:bottom-16 md:right-52 transform -translate-y-1/2 -rotate-6 hover:rotate-0 transition-transform duration-300 hover:scale-110 cursor-pointer">
      <p className="bg-[#A8ED07] font-franklin text-xl md:text-4xl  text-black font-medium px-4 py-3 md:px-8 md:py-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          Connect
        </p>
      </div>
      <div className="flex items-center justify-center w-[50%] md:w-full mx-auto"
     
      >
        <motion.h1
          className="text-center  font-franklin font-semibold text-[60px] md:text-hero text-white leading-[90%] md:leading-[100%] tracking-[-2%] md:tracking-[-3%]"
         
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
