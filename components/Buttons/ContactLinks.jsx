import React from "react";
import facebook from "/public/images/facebook.png";
import instagramc from "/public/images/instagramc.png";
import linkedin from "/public/images/linkedin.png";
import youtube from "/public/images/youtube.png";
import twitter from "/public/images/twitter.png";

import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import Image from "next/image";

const ContactLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center w-fit">
      
      <div className="flex justify-center md:justify-start flex-wrap gap-2 md:gap-6 rounded-md ">
        <div className="flex flex-col items-center justify-center">
          <Image width="40" src={facebook}></Image>
          <p className="text-white text-xs">Facebook</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image width="40" src={youtube}></Image>
          <p className="text-white text-xs">Youtube</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Image width="40" src={linkedin}></Image>
          <p className="text-white text-xs">Linkedin</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image width="40" src={instagramc}></Image>
          <p className="text-white text-xs">Instagram</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image width="40" src={twitter}></Image>
          <p className="text-white text-xs">Twitter</p>
        </div>
      </div>


       <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mt-5 ">
        <a href="https://github.com/SOURAV-MONDAL-DEV" target="_blank" className="flex items-center justify-center text-white  px-4 py-1 text-center bg-gradient-to-r from-cyan-400 to-green-400 hover:bg-red-600 shadow-[0px_10px_30px_1px_#4fd1c5] rounded-md ">
          <FaGithub className="mr-2 text-gray-700 text-4xl" />
          <p className="text-black font-semibold text-lg">Github</p>
        </a>
        <a href="https://drive.google.com/uc?export=download&id=1BRovtgJhJzFIhc1pcp08a9DFjn9z0PoQ"  className="flex items-center justify-center text-white  px-4 py-1 text-center bg-gradient-to-r from-cyan-400 to-green-400 hover:bg-red-600 shadow-[0px_10px_30px_1px_#4fd1c5] rounded-md ">
          <FaFileDownload className="mr-2 text-gray-700 text-4xl" />
          <p className="text-black font-semibold text-lg">Resume</p>
        </a>
        
      </div>



    </div>
  );
};

export default ContactLinks;
