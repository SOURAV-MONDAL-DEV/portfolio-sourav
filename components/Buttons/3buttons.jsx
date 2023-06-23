import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const ThreeButtons = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center gap-4 mt-3">
      <a href="https://github.com" className="">
          <FaGithub className="mr-2 text-white text-4xl" />
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          GitHub
        </button> */}
      </a>
      <a href="https://linkedin.com" className="">
          <FaLinkedin className="mr-2 text-white text-4xl" />
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          LinkedIn
        </button> */}
      </a>
      <a href="/resume.pdf" className="">
          <FaDownload className="mr-2 text-white text-4xl" />
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Resume
        </button> */}
      </a>
    </div>
  );
};

export default ThreeButtons;
