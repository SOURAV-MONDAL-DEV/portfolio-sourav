"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import logoPic from "../../public/animation/wellcomesf.gif"

export default function Header2() {
    const [navbar, setNavbar] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById('about');
        targetElement.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <nav className=" mx-auto rounded-lg fixed w-full bottom-3 z-10 shadow backdrop-filter backdrop-blur-lg  transform scale-90 origin-center ">
            <div className=" ">
                <ul className="items-center justify-center space-y-8 flex md:space-x-6 md:space-y-0">
                                <li className="">
                                    <Link href="/" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >Home</Link>
                                </li>
                                <li className="">
                                    <Link href="/" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >Projects</Link>
                                </li>
                                <li className="">
                                    <Link href="#about" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >
                                        <button onClick={(e) => handleClick(e,"2nddiv")}>About</button>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >Contact</Link>
                                </li>

                </ul>
            </div>
        </nav>
    );

}