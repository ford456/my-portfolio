'use client'
import React, { useState, useEffect } from 'react';

import { CgClose } from "react-icons/cg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Link from 'next/link';


const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle)

    }

    
    return (
        <>
            {/* Navbar แสดงเฉพาะบนหน้าจอใหญ่ (md ขึ้นไป) */}
            <div
                className=" fixed hidden md:flex z-30 justify-center transition-transform duration-300"

            >
                <nav className="relative bg-linear-to-b from-white to-0  w-screen px-15 py-[1em]  bg-opacity-90 backdrop-blur-sm">

                    <div className="container mx-auto grid grid-cols-2 items-center">
                        <img src="/PortLogoWhite.svg" alt="Logo" className='brightness-0 h-12 w-12 ' />
                        <ul className="flex flex-row md:my-5 mt-5 mb-3 md:mx-10 justify-end">
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/" className=" hover:text-blue-500" target='_parent' >
                                    Home
                                </Link>
                            </li>
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/about" className=" hover:text-blue-500" target='_parent' >
                                    About
                                </Link>
                            </li>
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/projects" className=" hover:text-blue-500" target='_parent' >
                                    Projects
                                </Link>
                            </li>
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/contact" className=" hover:text-blue-500" target='_parent' >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Navbar สำหรับมือถือ (แสดงเฉพาะเมื่อ toggle เปิด) */}
            <div className="md:hidden fixed z-30">
                <div className='grid grid-cols-2 w-screen bg-linear-to-b from-white to-0 bg-opacity-90 backdrop-blur-sm p-2 bg-opacity-90 items-center mx-auto px-5 pt-5'>
                    <img src="/PortLogoWhite.svg" alt="Logo" className=' brightness-0 justify-items-start ml-5  h-12 w-12 ' />
                    <HiOutlineBars3
                        onClick={updateToggle}
                        className="cursor-pointer text-3xl justify-items-start ml-auto mr-5 "
                    />
                </div>

            </div>


            {toggle && (
                <div className="md:hidden fixed inset-x-0 top-0 z-100 transition-transform duration-300 ease-in-out bg-linear-to-b from-white to-0 bg-opacity-90 backdrop-blur-sm p-2 bg-opacity-90 flex flex-col justify-center items-center">
                    <ul className="m-5 mb-4 gap-x-5 gap-y-2 text-center flex flex-row items-center justify-center flex-wrap">
                        <li>
                            <Link href="/" className=" text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className=" text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className=" text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className=" text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <button className=" text-3xl" onClick={updateToggle}>
                            <CgClose />
                        </button>
                            </li>
                    </ul>

                </div>
            )}
        </>
    );
};

export default NavBar;