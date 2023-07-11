"use client"
import Image from 'next/image'
import img1 from "/public/images/sourav-2.png";
import img2 from "/public/images/hex-c.gif";
import Intro from '@/components/Intro_textra/Intro';
import Intro_pose from '@/components/Intro_pose/Intro_pose';


import { motion } from "framer-motion"
import Hero from '@/components/Hero/Hero';
import Head from 'next/head';
import Link from 'next/link';
import About from './about/About';

export default function Home() {


  const handleClick = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <main className=" mainClass z-10 flex min-h-screen flex-col items-center justify-between m-5">
      <Head>
        <title>Home</title>
      </Head>
      <Hero></Hero>

      <Link className='text-white  ' href="#2nddiv">
        <button onClick={(e) => handleClick(e, "2nddiv")}>
          <svg class="arrows">
            <path class="a1" d="M0 0 L30 25 L60 0"></path>
            <path class="a2" d="M0 20 L30 45 L60 20"></path>
            <path class="a3" d="M0 40 L30 65 L60 40"></path>
          </svg>
        </button>
      </Link>



      <div id='2nddiv' className='mt-[230px]'>
        <div className='m-10 text-white font-["Lobster"]'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
        <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
        <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
        <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
        <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
        <div className='m-10 text-white'>fhDJFHAUFHU</div>
        <div className='m-10 text-white font-["Lobster"]'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
        <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
        <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
        <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
        <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
        <div className='m-10 text-white'>fhDJFHAUFHU</div>
      </div>




      <About></About>
      <div className='m-10 text-white font-["Lobster"]'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
      <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
      <div className='m-10 text-white'>Hi DJ FHAU FHUA DG UADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHUADGUADHFAUDS</div>
      <div className='m-10 text-white'>fhDJFHAUFHU</div>

    </main>
  )
}
