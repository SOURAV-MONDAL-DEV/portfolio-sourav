"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import logoPic from "../../public/animation/wellcomesf.gif"
import ani3 from "../../public/animation/a3.gif"

export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const [showPage, setShowPage] = useState(false);


    function myFunction() {
        setShowPage(true)
        // alert('Hello');
    }

    useEffect(() => {
        setTimeout(myFunction, 1900);
        // console.log("first")
    }, [])

    if (showPage) {
        return (
            <nav className=" mx-10 md:mx-20 rounded-lg sticky top-3 z-10 shadow bg-white/[.07] backdrop-filter backdrop-blur-lg ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between  md:block">
                            <a href="javascript:void(0)">
                                <Image className=" w-32 md:w-32" src={logoPic} alt="my gif" height="auto" />
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border myshadow"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="#fff"
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
                                            className="w-6 h-6 "
                                            fill="#fff"
                                            viewBox="0 0 24 24"
                                            stroke="#fff"
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
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="">
                                    <Link href="/" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >Home</Link>
                                </li>
                                <li className="">
                                    <Link href="/" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >Projects</Link>
                                </li>
                                <li className="">
                                    <Link href="/about" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >About</Link>
                                </li>
                                <li className="">
                                    <Link href="/" className="  font-semi-bold px-2 py-1 myshadow transition ease-in-out duration-900 hover:scale-110 rounded-md" >Contact</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );

    } else {
        return (
            <div className=' flex flex-col items-center justify-center h-screen w-screen sticky top-0 z-10 bg-black' >
                {/* <h1>ok done</h1> */}
                <Image className="" src={ani3} alt="animation" />
            </div>
        )
    }

}