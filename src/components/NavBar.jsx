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

    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (event.clientY < 100) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Navbar แสดงเฉพาะบนหน้าจอใหญ่ (md ขึ้นไป) */}
            <div
                className={`fixed inset-x-0 -top-0 z-100 hidden md:flex justify-center transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <nav className="bg-black w-[600px] p-3 md:rounded-b-full border-10 border-black outline-5 outline-black shadow-blue-900 shadow-lg drop-shadow-lg">
                    <div className="container mx-auto flex justify-center">
                        <ul className="flex flex-row md:my-5 mt-5 mb-3 md:mx-10 justify-end">
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/" className="text-white hover:text-blue-500" target='_parent' >
                                    Home
                                </Link>
                            </li>
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/about" className="text-white hover:text-blue-500" target='_parent' >
                                    About
                                </Link>
                            </li>
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/projects" className="text-white hover:text-blue-500" target='_parent' >
                                    Projects
                                </Link>
                            </li>
                            <li className="mx-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/contact" className="text-white hover:text-blue-500" target='_parent' >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Navbar สำหรับมือถือ (แสดงเฉพาะเมื่อ toggle เปิด) */}
            <div className="md:hidden fixed mt-2 top-5 left-5 z-20">
                <HiOutlineBars3
                    onClick={updateToggle}
                    className="cursor-pointer text-3xl text-white"
                />
            </div>

            {toggle && (
                <div className="md:hidden fixed inset-x-0 top-0 z-100 transition-transform duration-300 ease-in-out bg-black p-2 bg-opacity-90 flex flex-col justify-center items-center">
                    <ul className="m-5 mb-4 gap-x-5 gap-y-2 text-center flex flex-row">
                        <li>
                            <Link href="/" className="text-white text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-white text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className="absolute z-110 mt-2 top-5 right-5 text-white text-3xl" onClick={updateToggle}>
                        <CgClose />
                    </button>
                </div>
            )}
        </>
    );
};

export default NavBar;