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

      <section className='md:grid grid-cols-2 gap-10 md:mt-3 transform scale-90 origin-center'>

        <div className='mx-2  my-auto'>
          <div className='flex justify-center md:justify-start items-center '>
            <div className="nameText mx-0 md:ml-0 w-fit ">
              <h2>SOURAV</h2>
              <h2>SOURAV</h2>
            </div>
            <div>
              <p className=' text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 '>M</p>
              <p className=' text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 '>O</p>
              <p className=' text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 '>N</p>
              <p className=' text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 '>D</p>
              <p className=' text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 '>A</p>
              <p className=' text-sky-400 text-[9px] sm:text-xs md:text-xs leading-[0.5rem] sm:leading-3 md:leading-3 brightness-200 '>L</p>
            </div>
          </div>

          <Intro_pose className="flex justify-center md:justify-start items-center w-fit"></Intro_pose>

          

          {/* <p className='text-white'>Hey, I'm Sourav Mondal. A junior front-end MERN stack web developer. And this is my personal portfolio website</p> */}
        </div>
        <div className=' flex justify-center items-center mx-auto w-fit relative'>
          <Image className=' opacity-[0.15] mx-auto xs:max-w-[320px] sm:min-w-[445px]' src={img2} height="auto" />
          <Image className=' absolute  mx-auto my-auto rotate-[30deg] xs:max-w-[200px] sm:max-w-[283px]' src={img1} height="auto" alt="img" ></Image>
        </div>

      </section>

      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHU</div>


      <Hero></Hero>


    </main>
  )
}
