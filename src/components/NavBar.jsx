'use client'
import React, { useState, useEffect, useRef } from 'react';

import { CgClose } from "react-icons/cg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Link from 'next/link';


const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle)

    }

    const [showNav, setShowNav] = useState(true);

    const lastScrollY = useRef(0);
    const timerRef = useRef(null);
    const hoveringNav = useRef(false);

    const showNavbar = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        setShowNav(true);
    };

    const hideNavbar = () => {
        if (window.scrollY > 50 && !hoveringNav.current) {
            setShowNav(false);
        }
    };

    const hideNavbarLater = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            hideNavbar();
        }, 5000);
    };

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current < 50) {
                showNavbar();
            } else if (current > lastScrollY.current) {
                // Scroll ลง
                hideNavbar();
            } else {
                // Scroll ขึ้น
                showNavbar();
            }

            lastScrollY.current = current;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);

            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-16 z-40"
                onMouseEnter={showNavbar}
            />
            {/* Navbar แสดงเฉพาะบนหน้าจอใหญ่ (md ขึ้นไป) */}
            <div
                onMouseEnter={() => {
                    hoveringNav.current = true;
                    showNavbar();
                }}
                onMouseLeave={() => {
                    hoveringNav.current = false;
                    hideNavbarLater();
                }}
                className={`
        fixed top-0 left-0 w-full z-50
        hidden md:flex justify-center 
        transition-all duration-600 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full opacity-0"}
      `}
            >
                <nav className="content-center 2xl:text-2xl relative bg-[#ebebeb] rounded-xl  md:px-0 max-lg:px-[50px] lg:px-[100px]  xl:px-[140px] w-screen h-[56px] 2xl:h-[80px] 2xl:mx-[240px] max-2xl:mx-[50px] mt-[10px]">

                    <div className="container grid grid-cols-2 justify-self-center items-center w-full mx-[50px] ">
                        <div className="flex">
                            <Link href="/" target='_parent' className='flex flex-row gap-1 font-black text-2xl items-center'>
                            <img src="/PortLogoWhite.svg" alt="Logo" className='brightness-0 h-12 w-auto 2xl:h-15  ' /> Freindaly
                        </Link>
                        </div>
                        <ul className="flex flex-row max-xl:grid max-xl:grid-cols-6 gap-x-2 justify-end md:text-sm ">
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
                            <li className="mx-2 col-span-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                                <Link href="/contact" className="py-1 px-5 bg-blue-500 text-white rounded-xl outline-0 hover:outline-blue-500 hover:outline-2 hover:outline-offset-2 " target='_parent' >
                                    Hire Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Navbar สำหรับมือถือ (แสดงเฉพาะเมื่อ toggle เปิด) */}
            <div className="fixed top-0 left-0 w-full z-50 md:hidden">
                <div className='grid grid-cols-2 w-screen bg-[#ebebeb] h-[80px] bg-opacity-90 items-center mx-auto px-[50px] pt-5'>
                    <img src="/PortLogoWhite.svg" alt="Logo" className=' brightness-0 justify-items-start  h-12 w-12 ' />
                    <HiOutlineBars3
                        onClick={updateToggle}
                        className="cursor-pointer text-3xl justify-items-start ml-auto "
                    />
                </div>

            </div>


            {
                toggle && (
                    <div className="md:hidden fixed inset-x-0 top-0 z-100 transition-transform duration-300 ease-in-out bg-[#ebebeb] p-2 bg-opacity-90 flex flex-col justify-center items-center">
                        <ul className="m-5 mb-4 gap-x-5 gap-y-2 text-center flex flex-col space-y-6 items-center justify-center flex-wrap md:text-sm">
                            <li>
                                <Link href="/" className="  text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="  text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="  text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="  text-base hover:text-blue-500" target='_parent' onClick={() => setToggle(false)}>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className=" py-1 px-5 bg-blue-500 text-white rounded-xl outline-0 hover:outline-blue-500 hover:outline-2 hover:outline-offset-2 " target='_parent' onClick={() => setToggle(false)}>
                                    Hire Me
                                </Link>
                            </li>
                            <li>
                                <button className=" text-3xl" onClick={updateToggle}>
                                    <CgClose />
                                </button>
                            </li>
                        </ul>

                    </div>
                )
            }
        </>
    );
};

export default NavBar;