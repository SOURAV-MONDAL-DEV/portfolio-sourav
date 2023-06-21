"use client"
import React from 'react'
import { motion } from "framer-motion"


function Hero() {
  return (
    <div className='text-gray-500'>

        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ x: 100, opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 4 }}
      >

        <div className='w-20 h-20 bg-red-500'></div>


        </motion.div>

    </div>
  )
}

export default Hero