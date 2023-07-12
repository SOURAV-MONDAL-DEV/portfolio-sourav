"use client";
import React from "react";
import { motion } from "framer-motion";
import Intro_pose from "../Intro_pose/Intro_pose";
import Image from "next/image";
import img1 from "/public/images/sourav-2.png";
import img2 from "/public/images/hex-c.gif";
import ContactLinks from "../Buttons/ContactLinks";

function Hero() {
  return (
    <div className=" md:w-screen md:h-screen  md:flex items-center justify-center">
      <section className="md:grid grid-cols-2 gap-10 md:-mt-28 transform md:scale-[.8] origin-center">
        
      <motion.div
          className=" md:order-2"
          initial={{ opacity: 0.5, scale: 1, x:800 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ ease: "ease out", delay: 0, duration: 2, type: "spring", stiffness: 70 }}
        
        >
        <div className=" flex justify-center items-center mx-auto w-fit relative">
          <Image
            className=" opacity-[0.15] mx-auto xs:max-w-[320px] sm:min-w-[445px]"
            src={img2}
            height="auto"
          />
          <Image
            className=" absolute  mx-auto my-auto rotate-[30deg] xs:max-w-[200px] sm:max-w-[283px]"
            src={img1}
            height="auto"
            alt="img"
          ></Image>
        </div>
        </motion.div>

      <motion.div
          className=" md:order-1 mx-auto my-auto flex flex-col items-center justify-center"
          initial={{ opacity: 0.5, scale: 1, x:-800 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ ease: "ease out", delay: 0, duration: 2, type: "spring", stiffness: 70  }}
        >
            <div className="flex justify-center items-center  ">
              <div className="nameText mx-0 w-fit ">
                <h2>SOURAV</h2>
                <h2>SOURAV</h2>
              </div>
              <div>
                <p className=" text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 ">
                  M
                </p>
                <p className=" text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 ">
                  O
                </p>
                <p className=" text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 ">
                  N
                </p>
                <p className=" text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 ">
                  D
                </p>
                <p className=" text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 ">
                  A
                </p>
                <p className=" text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 ">
                  L
                </p>
              </div>
            </div>
            <Intro_pose className="flex justify-center items-center w-fit mx-auto"></Intro_pose>
            <ContactLinks></ContactLinks>
        </motion.div>


      </section>
    </div>
  );
}

export default Hero;