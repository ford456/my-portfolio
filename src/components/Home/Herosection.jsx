import React from 'react'
import Link from 'next/link';
import { FaPaintBrush, FaLocationArrow } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";



export default function HeroSection() {
    return (
        <section className="relative min-h-screen  xl:max-h-[900px] pt-20 flex justify-center overflow-hidden bg-[#EEEDEF]">
            <div className="absolute inset-0 z-0 transition-all duration-1000 opacity-100 translate-y-0 ">
            </div>
            <div className="lg:max-w-[900px] xl:max-w-[1280px] 2xl:max-w-[1900px] mx-5 justify-items-center px-[20px] md:px-[24px] h-auto w-full grid grid-cols-1 md:grid-cols-12 2xl:grid-cols-16 gap-[8px] relative z-10 pt-[8px] transition-all duration-1000 opacity-100 translate-y-0">
                <div className="max-md:col-span-5 md:col-span-5 max-lg:col-span-6 2xl:col-span-8 flex flex-col gap-2 ">
                    <img src='https://res.cloudinary.com/dlt9egtdv/image/upload/v1783109637/Hello_plqati.png' alt='mypic' className='flow-root pointer-events-none w-fit h-16' height={1} />
                    <h1 className='flow-root md:pt-3  max-lg:text-[28px] lg:text-[28px] xl:text-3xl 2xl:text-7xl font-bold text-start md:leading-10 max-md:leading-8 lg:leading-12 max-lg:leading-12 2xl:leading-24'>I'm <span className='font-normal text-blue-700 underline max-md:underline-offset-2 md:underline-offset-6 '>Patcharadol Soimanee</span>, <br />Based in Bangkok,Thailand.</h1>
                    <a className='flow-root whitespace-pre-line max-w-md sm:text: max-md:text-[16px] md:text-[14px] lg:text-sm 2xl:text-2xl pt-1 indent-8' >Creative and detail-oriented multidisciplinary designer specializing in graphic design, motion graphics, and video editing. Committed to delivering high-quality visual solutions and continuous rofessional growth. </a>
                    <div className='flex justify-start 2xl:mt-5 4k:scale-110 max-lg:text-[9px] 2xl:text-2xl my-10'>
                        <Link href="/about" className="" target='_parent' >
                            <div className='text-center bg-none py-2 px-5 2xl:py-3 2xl:px-7 rounded-full outline-2 mx-5 hover:text-white hover:bg-blue-700 ease-in-out duration-400 hover:scale-110'> About Me </div>
                        </Link>
                        <Link href="/projects" className="" target='_parent' >
                            <div className='text-center bg-none py-2 px-5 2xl:py-3 2xl:px-7 rounded-full outline-2 mx-5 hover:text-white hover:bg-blue-700 ease-in-out duration-400 hover:scale-110'> Viwe Projects </div>
                        </Link>
                    </div>
                </div>
                <div className="max-md:col-span-6 md:col-span-8 max-lg:col-span-6 2xl:col-span-8 max-sm:col-start-0 md:col-start-7  relative mt-12 md:mt-0 flex ">
                    <div className="absolute max-sm:scale-55 max-lg:scale-60 max-xl:scale-75 xl:scale-100 2xl:scale-130 max-sm:-left-20 max-lg:-left-15 lg:-left-10 xl:-left-15 2xl:-left-0 top-1/2 z-30 floating-element ">
                        <div className='grid grid-cols-1 justify-items-end' >
                            <FaLocationArrow className='text-blue-700 text-2xl' />
                            <div className='bg-blue-700/90 backdrop-blur mx-3 px-6 py-3 rounded-full text-white font-bold max-2xl:text-base 2xl:text-lg flex items-center gap-2 shadow-xl border-7 border-[#ebebeb]'>
                                <FaPaintBrush className='material-symbols-outlined text-[18px]' />
                                Graphic Designer
                            </div>
                        </div>
                    </div>
                    <div className="absolute max-sm:scale-55 max-lg:scale-60 max-xl:scale-75 xl:scale-100 2xl:scale-130 -right-15 sm:-right-8 max-sm:-right-20 max-sm:top-4/7 max-lg:top-1/2 lg:top-4/7  z-30  floating-element delay-1s">
                        <div className='grid grid-cols-1 justify-items-start'>
                            <FaLocationArrow className='text-blue-700 text-2xl -scale-100 rotate-90' />
                            <div className="bg-blue-700/90 backdrop-blur mx-3 px-6 py-3 rounded-full text-white font-bold max-2xl:text-base 2xl:text-lg flex items-center gap-2 shadow-xl border-7 border-[#ebebeb]">
                                <MdAnimation className="material-symbols-outlined text-[18px]" />
                                Motion Graphic
                            </div>
                        </div>

                    </div>
                    <div className="absolute max-sm:scale-55 max-lg:scale-60 max-xl:scale-75 xl:scale-100 2xl:scale-130 max-sm:-left-10 sm:left-0 max-sm:top-5/7 sm:bottom-1/12 z-30 floating-element delay-2s">
                        <div className='grid grid-cols-1 justify-items-end'>
                            <FaLocationArrow className='text-blue-700 text-2xl' />
                            <div className=" bg-blue-700/90 backdrop-blur mx-3 px-6 py-3 rounded-full text-white font-bold max-2xl:text-base 2xl:text-lg flex items-center gap-2 shadow-xl border-7 border-[#ebebeb]">
                                <IoIosVideocam className="material-symbols-outlined text-[18px]" />
                                Video Editor
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full aspect-square 2xl:aspect-auto sm:max-w-[400px] md:max-w-[1000px] content-end">
                        <img alt="Patcharadol Soimanee Portfolio"
                            className="w-full h-auto object-cover rounded-2xl relative z-20"
                            src="https://res.cloudinary.com/donnu2idb/image/upload/v1785071926/%E0%B8%9B%E0%B8%81cover_2x_zivdnx.png" />
                        <div
                            className="absolute inset-0 bg-electric-blue rounded-full blur-[120px] opacity-10 -z-10 animate-pulse">
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}
