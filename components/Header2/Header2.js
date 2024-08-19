"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/animation/wellcomesf.gif";
import { MdHome } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Header2() {
  const [navbar, setNavbar] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("about");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className=" mx-auto fixed w-full bottom-3 z-10 transform origin-center ">
      <ul className="flex gap-10 items-center justify-center bg-white bg-opacity-10 rounded-[16px] shadow backdrop-filter backdrop-blur-sm w-fit mx-auto px-12 py-4">
        <li>
          <Link
            href="/"
            className="font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
          >
            <MdHome />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
          >
            <BsGridFill />
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
          >
            <FcAbout onClick={(e) => handleClick(e, "2nddiv")} />
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md"
          >
            <HiMenuAlt2 />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
