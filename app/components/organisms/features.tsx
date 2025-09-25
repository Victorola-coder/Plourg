"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <motion.section
      // className="w-full mx-[20px] md:mx-[48px] lg:px-[308px] min-h-[300px] md:min-h-[400px] bg-cover bg-center bg-no-repeat rounded-[16px] md:rounded-[24px]"
      className=" px-[20px] md:px-[48px] w-full  min-h-[300px] md:min-h-[400px] bg-cover bg-center bg-no-repeat rounded-[16px] md:rounded-[24px] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/feat.png')" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
  {/* <div className="w-full md:w-[40%] flex items-start justify-center"> */}
      

<div className="w-full md:w-[60%] mx-auto ">


    
      <div>
        <div className="p-4 md:p-8 lg:p-12">
          <div className="">
            <h3 className="font-franklin font-semibold text-[24px] md:text-h2 text-ink mb-2 md:mb-4">
              Why Join Early
            </h3>
            <p className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-ink-muted">
              The platform designed specifically for local vendors like you
            </p>
          </div>
        </div>

        <motion.div
          className="bg-[#F7F7F7]  rounded-[16px] md:rounded-[24px] py-8 md:pl-[42px] md:pr-[77.7px] md:pt-[61px] md:pb-[70.63px] flex p-4 md:items-center items-start justify-start md:justify-end"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex   flex-col-reverse items-start justify-start  md:items-end  md:flex-row w-full    md:justify-between gap-4 md:gap-0">

          {/* <div className="flex w-full    justify-start items-start"> */}
            <div className="flex flex-col justify-center items-start ">

            <h3 className="font-franklin font-semibold text-[18px]  md:text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
              Early Access
            </h3>
            <p className="max-w-[281px] text-[#5C5C5C] font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%]">
              Be the first to try Plourg before public launch.
            </p>
            </div>
          {/* </div> */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="self-end"
            >
            <img
              src="/images/light.png"
              draggable={false}
              alt="Early Access"
              className="w-[60px] md:w-auto"
              />
          </motion.figure>
              </div>
        </motion.div>
        <div className=" mt-[16px] md:mt-[32px] flex flex-col md:flex-row gap-[16px] md:gap-[24px] justify-center">
          <div className="bg-[#F7F7F7] rounded-[16px] md:rounded-[24px] flex flex-col gap-[20px]   md:gap-[41.67px] p-4 md:px-[42px] md:pt-[30px] md:pb-[111px]">
            {/* <div className="mx-auto  items-center justify-between "> */}

            <figure className="self-end">
              <img
                src="/images/home.png"
                draggable={false}
                alt="Shape the Platform"
                className="w-[50px] md:w-auto"
                />
            </figure>
            <div className="flex flex-col justify-start">
              <h3 className="font-franklin font-semibold text-[18px] md:text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
                Shape the Platform
              </h3>
              <p className="text-[#5C5C5C] font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%]">
                Share feedback that influences features.
              </p>
                </div>
            {/* </div> */}
          </div>
          <div className="bg-[#F7F7F7] rounded-[16px] md:rounded-[24px] flex flex-col gap-[20px] md:gap-[41.67px] p-4 md:px-[42px] md:pt-[30px] md:pb-[111px]">
            <figure className="self-end">
              <img
                src="/images/wow.png"
                draggable={false}
                alt="Shape the Platform"
                className="w-[50px] md:w-auto"
              />
            </figure>
            <div>
              <h3 className="font-franklin font-semibold text-[18px] md:text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
                Exclusive Updates
              </h3>
              <p className="max-w-[313px] text-[#5C5C5C] font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%]">
                Stay in the loop with launch news and special perks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* how it works */}
      <div>
        <div className="p-4 md:p-8 lg:p-12">
          <div className="max-w-[500px]">
            <h3 className="font-franklin font-semibold text-[24px] md:text-h2 text-ink mb-2 md:mb-4">
              Why Join Early
            </h3>
            <p className="font-franklin font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%] text-ink-muted">
              The platform designed specifically for local vendors like you
            </p>
          </div>
        </div>

        <motion.div
          className="w-full bg-[#F7F7F7]  rounded-[16px] md:rounded-[24px] py-8 md:pl-[42px] md:pr-[77.7px] md:pt-[61px] md:pb-[70.63px] flex p-4 md:items-center items-start justify-start md:justify-end"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex   flex-col-reverse items-start justify-start  md:items-end  md:flex-row w-full    md:justify-between gap-4 md:gap-0">

          {/* <div className="flex w-full    justify-start items-start"> */}
            <div className="flex flex-col justify-center items-start ">

            <h3 className="font-franklin font-semibold text-[18px]  md:text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
            Browse vendors and services on campus.
            </h3>
            <p className="max-w-[281px] text-[#5C5C5C] font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%]">
            Create your vendor profile and upload your products in minutes. Our easy setup process gets you selling faster than any other platform.
            </p>
            </div>
          {/* </div> */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="self-end"
            >
            <img
              src="/images/light.png"
              draggable={false}
              alt="Early Access"
              className="w-[60px] md:w-auto"
              />
          </motion.figure>
              </div>
        </motion.div>
        <div className=" mt-[16px] md:mt-[32px] flex flex-col md:flex-row gap-[16px] md:gap-[24px] justify-center">
          <div className="w-full md:w-[50%] bg-[#F7F7F7] rounded-[16px] md:rounded-[24px] flex flex-col gap-[20px]   md:gap-[41.67px] p-4 md:px-[42px] md:pt-[30px] md:pb-[111px]">
            {/* <div className="mx-auto  items-center justify-between "> */}

            <figure className="self-end">
              <img
                src="/images/join.png"
                draggable={false}
                alt="Shape the Platform"
                className="w-[50px] md:w-auto"
                />
            </figure>
            <div className="flex flex-col justify-start">
              <h3 className="font-franklin font-semibold text-[18px] md:text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
              Place your order or connect instantly.
              </h3>
              <p className="text-[#5C5C5C] font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%]">
              Get discovered by local customers searching for exactly what you sell. Our smart matching connects you with your ideal buyers automatically.
              </p>
                </div>
            {/* </div> */}
          </div>
          <div className= "w-full md:w-[50%] bg-[#F7F7F7] rounded-[16px] md:rounded-[24px] flex flex-col gap-[20px] md:gap-[41.67px] p-4 md:px-[42px] md:pt-[30px] md:pb-[111px]">
            <figure className="self-end">
              <img
                src="/images/money.png"
                draggable={false}
                alt="Shape the Platform"
                className="w-[50px] md:w-auto"
              />
            </figure>
            <div>
              <h3 className="font-franklin font-semibold text-[18px] md:text-[24px] leading-[120%] tracking-[-3%] text-ink mb-1">
              Buy, sell, or pick up with zero hassle.
              </h3>
              <p className="max-w-[313px] text-[#5C5C5C] font-normal text-[14px] md:text-[16px] leading-[120%] tracking-[-2%]">
                Process secure payments, manage orders, and build relationships with repeat customers. Keep more of your earnings with our low vendor fees.
              </p>
            </div>
          </div>
          </div>
          </div>
        </div>
       
      {/* </div> */}
    </motion.section>
  );
}
