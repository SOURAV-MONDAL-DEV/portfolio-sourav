import React from "react";
import facebook from "/public/images/facebook.png";
import instagramc from "/public/images/instagramc.png";
import linkedin from "/public/images/linkedin.png";
import youtube from "/public/images/youtube.png";
import twitter from "/public/images/twitter.png";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Image from "next/image";

const ThreeButtons = () => {
  return (
    <div>
      
      <div className="flex justify-center md:justify-start flex-wrap gap-6 rounded-md p-2 ">
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


       <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mt-3">
        <a href="https://github.com" className="">
          <FaGithub className="mr-2 text-white text-4xl" />
          
        </a>
        <a href="/resume.pdf" className="">
          <FaDownload className="mr-2 text-white text-4xl" />
          
        </a>
      </div>



    </div>
  );
};

export default ThreeButtons;
