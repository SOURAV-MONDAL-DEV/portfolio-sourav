import Image from 'next/image'
import img1 from "/public/images/sourav-2.png";
import img2 from "/public/images/hex-c.gif";
import Intro from '@/components/Intro_textra/Intro';
import Intro_pose from '@/components/Intro_pose/Intro_pose';


import { motion } from "framer-motion"
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <main className=" mainClass z-10 flex min-h-screen flex-col items-center justify-between m-5">
      <Hero></Hero>
      <div className='m-10 text-white font-["Lobster"]'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
      <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
      <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHU</div>




    </main>
  )
}
