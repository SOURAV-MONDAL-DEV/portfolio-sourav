"use client";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import logoPic from "../../public/animation/souravsf.gif"

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className=" mx-10 md:mx-20 rounded-xl sticky top-3 z-10 shadow bg-white/[.07] backdrop-filter backdrop-blur-lg ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between  md:block">
                        <a href="javascript:void(0)">
                        <Image className=" w-32 md:w-32" src={logoPic} alt="my gif" height="auto" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className=" text-amber-400 rounded hover:border-green-500">
                                <Link href="/" className="text-sm md:text-xl font-semi-bold px-2 py-1 hover:border rounded-md" >Home</Link>
                            </li>
                            <li className=" text-amber-400 rounded hover:border-green-500">
                                <Link href="/blog" className="text-sm md:text-xl font-semi-bold px-2 py-1 hover:border rounded-md " >Blog</Link>
                            </li>
                            <li className=" text-amber-400 rounded hover:border-green-500">
                                <Link href='/about' className="text-sm md:text-xl font-semi-bold px-2 py-1 hover:border rounded-md " >About Me</Link>
                            </li>
                            <li className=" text-amber-400 rounded hover:border-green-500">
                                <Link href="/contact" className="text-sm md:text-xl font-semi-bold px-2 py-1 hover:border rounded-md " >Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}