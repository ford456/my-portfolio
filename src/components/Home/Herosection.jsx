import React from 'react'
import Link from 'next/link';
import { FaPaintBrush, FaLocationArrow } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import Image from 'next/image'



export default function HeroSection() {
    return (
        <section className="relative min-h-screen xl:max-h-[850px] min-lg:px-10 2xl:max-h-[800px] 3xl:max-h-[750px] flex justify-center overflow-hidden bg-[#EEEDEF]">

            <div className="max-w-container-max 3xl:max-w-[1900px] mx-auto px-margin-mobile md:px-gutter pt-23 xl:pt-5 2xl:pt-20 w-full grid grid-cols-1 lg:grid-cols-12 items-end max-md:justify-items-center gap-8 transition-all duration-1000 opacity-100 translate-y-0">
                <div className="relative z-30 lg:col-span-5 flex flex-col gap-2 md:self-center 3xl:self-end ">
                    <h1 className='flow-root md:pt-3 text-4xl 3xl:text-7xl font-bold text-start md:leading-12 max-md:leading-10 lg:leading-12 max-lg:leading-12 2xl:leading-24'>I'm <span className='font-normal text-blue-700 underline max-md:underline-offset-2 md:underline-offset-6 '>Patcharadol Soimanee</span>, <br />Based in Bangkok,Thailand.</h1>
                    <a className='flow-root whitespace-pre-line max-w-md sm:text: max-md:text-[16px] md:text-[14px] lg:text-sm 2xl:text-2xl pt-1 indent-8' >Creative and detail-oriented multidisciplinary designer specializing in graphic design, motion graphics, and video editing. Committed to delivering high-quality visual solutions and continuous rofessional growth. </a>
                    <div className='flex justify-start  gap-5 mt-7 2xl:mt-5 max-lg:text-[9px] 2xl:text-2xl y-10'>
                        <Link href="/about" className="" target='_parent' >
                            <div className='text-center bg-none py-2 px-5 2xl:py-3 2xl:px-7 rounded-full outline-2 mx-5 hover:text-white hover:bg-blue-700 ease-in-out duration-400 hover:scale-110'> About Me </div>
                        </Link>
                        <Link href="/projects" className="" target='_parent' >
                            <div className='text-center bg-none py-2 px-5 2xl:py-3 2xl:px-7 rounded-full outline-2 mx-5 hover:text-white hover:bg-blue-700 ease-in-out duration-400 hover:scale-110'> Viwe Projects </div>
                        </Link>
                    </div>
                </div>
                <div className="relative  lg:col-span-7  w-full  min-h-[500px]  lg:min-h-[850px] flex items-end justify-center ">
                    <div className="absolute max-sm:scale-55 max-lg:scale-65 max-xl:scale-75 xl:scale-100 2xl:scale-130 -left-2 sm:-left-8 max-sm:-left-10 max-lg:-left-20  max-sm:bottom-[35%] max-lg:bottom-[45%] lg:bottom-[30%] 2xl:bottom-[45%] 
                    floating-element
                    z-30 scale-75">
                        <div className='grid grid-cols-1 justify-items-end' >
                            <FaLocationArrow className='text-blue-700 text-2xl' />
                            <div className='bg-blue-700/90 backdrop-blur mx-3 px-6 py-3 rounded-full text-white font-bold max-2xl:text-base 2xl:text-lg flex items-center gap-2 shadow-xl border-7 border-[#ebebeb]'>
                                <FaPaintBrush className='material-symbols-outlined text-[18px]' />
                                Graphic Designer
                            </div>
                        </div>
                    </div>
                    <div className="absolute max-sm:scale-55 max-lg:scale-60 max-xl:scale-75 xl:scale-100 2xl:scale-130 -right-15 sm:-right-8 max-sm:-right-20 max-sm:top-4/7 max-lg:top-1/2 lg:bottom-[15%]  z-30  floating-element delay-1s">
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

                    <div className="relative lg:col-span-7 w-full  h-[430px]  sm:h-[500px] lg:h-[650px] xl:h-[1000px]  flex  items-end justify-center">
                        <Image alt="Patcharadol Soimanee Portfolio"
                            className="aspect-square rounded-2xl relative z-20 object-contain object-bottom"
                            src="https://res.cloudinary.com/donnu2idb/image/upload/v1785071926/%E0%B8%9B%E0%B8%81cover_2x_zivdnx.png"
                            fetchPriority="high"
                            fill
  sizes="(max-width: 768px) 100vw, 661px" />
                        <div
                            className="absolute inset-0 top-[50%] bg-electric-blue rounded-full blur-[120px] opacity-10 -z-10 animate-pulse">
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}
