'use client'

import React from 'react'

import SplitText from './SplitText '
import RotatingText from './Rotating'
import Link from 'next/link';


export default function HomeBanner() {
    return (
        // <Link href="/about" className="" target='_parent' onClick={() => setToggle(false)}>
        //     <div className=''>
        //         <div className='bg-[url(https://img5.pic.in.th/file/secure-sv1/Home-Bannera1931523a74c5f18.jpg)] bg-center bg-cover min-h-[280px] sm:h-[400px] lg:h-[600px] max-w-auto px-3 sm:px-3 lg:px-10 relative overflow-clip '>
        //         </div>
        //     </div>

        // </Link>

        <div className='bg-[#ebebeb] max-w-[1600px] 4k:max-w-[2200px] relative mx-auto'>

            {/* desktop view */}
            <div className=' hidden md:grid grid-cols-2 gap-[16px] md:mx-[90px] max-lg:mx-[140px] lg:mx-[140px] md:h-auto max-md:h-[420px] max-lg:h-[470px] lg:h-auto max-xl:h-[830px] max-2xl:h-[1080px] 2xl:h-[1080px] max-3xl:h-[1440px] max-w-auto relative content-end overflow-clip'>
                <div className='mt-[50px] 2xl:mt-[120px] cursor-default '>
                    {/* <div className="flex flex-col max-lg:items-center lg:items-start max-lg:text-center "> */}
                        <img src='https://res.cloudinary.com/dlt9egtdv/image/upload/v1783109637/Hello_plqati.png' alt='mypic' className='flow-root pointer-events-none h-1/11 lg:w-auto' />
                        <h1 className='flow-root md:pt-3 max-lg:text-[20px] lg:text-[28px] xl:text-3xl 2xl:text-7xl font-bold text-start md:leading-7 max-md:leading-8 lg:leading-12 max-lg:leading-12 2xl:leading-24'>I'm <span className='font-normal text-blue-700 underline max-md:underline-offset-2 md:underline-offset-6 '>Patcharadol Soimanee</span>, <br />Based in Bangkok,Thailand.</h1>
                        <text className='max-2xl:flow-root max-2xl:whitespace-pre-line max-w-md max-md:text-[7px] md:text-[10px] lg:text-sm 2xl:text-2xl pt-1' >Creative and detail-oriented multidisciplinary designer specializing in graphic design, motion graphics, and video editing. Committed to delivering high-quality visual solutions and continuous rofessional growth. </text>
                        <div className='flex justify-center max-md:scale-40 md:scale-60 max-lg:scale-80 lg:scale-80 xl:scale-90 2xl:scale-150 2xl:mt-5 4k:scale-110'>
                            <Link href="/about" className="" target='_parent' onClick={() => setToggle(false)}>
                                <div className='text-center bg-none py-2 px-5 rounded-full outline-2 mx-5 mt-2 hover:text-white hover:bg-blue-700'> About Me </div>
                            </Link>
                        </div>
                    {/* </div> */}
                </div>
                <div className='justify-items-center content-end'>
                    <img src='https://res.cloudinary.com/dlt9egtdv/image/upload/v1783119848/%E0%B8%9B%E0%B8%81cover_qeeizc.png' alt='mypic' className=' pointer-events-none h-auto lg:w-auto' />
                </div>
            </div>

            {/* Mobile View */}
            <div className='flex flex-col md:hidden pt-[20px] px-[50px] bg-none sm:h-auto md:h-auto max-w-auto relative overflow-clip'>
                <div className='flex flex-col items-center'>
                    <img src='https://res.cloudinary.com/dlt9egtdv/image/upload/v1783109637/Hello_plqati.png' alt='mypic' className='flow-root pointer-events-none max-md:h-[60px] lg:w-auto ' />
                    <h1 className='flow-root max-md:pt-3 max-md:text-3xl max-lg:text-[25px] font-bold text-start max-md:leading-8.5'>I'm <span className='font-normal text-blue-700 underline max-md:underline-offset-2 md:underline-offset-6 '>Patcharadol Soimanee</span>, <br />Based in Bangkok,Thailand.</h1>
                    <text className='flow-root whitespace-pre-line max-w-md max-md:text-[12px] pt-2' >Creative and detail-oriented multidisciplinary designer specializing in graphic design, motion graphics, and video editing. Committed to delivering high-quality visual solutions and continuous rofessional growth. </text>
                </div>
                <div className=' flex justify-center '>
                    <div className=''>
                        <Link href="/about" className="" target='_parent' onClick={() => setToggle(false)}>
                            <div className='text-center text-[12px] bg-none py-2 px-4 rounded-full outline-2 my-2 hover:text-white hover:bg-blue-700'> About Me </div>
                        </Link>
                    </div>
                </div>
                <div className='justify-items-center'>
                    <img src='https://res.cloudinary.com/dlt9egtdv/image/upload/v1783119848/%E0%B8%9B%E0%B8%81cover_qeeizc.png' alt='mypic' className=' pointer-events-none h-auto lg:w-auto max-h-[350px]' />
                </div>

            </div>
        </div>
        // <div className='cursor-default bg-linear-to-bl from-blue-800/55 to-black/55 h-[300px] lg:h-[700px] max-w-auto  px-3 sm:px-3 lg:px-10 pt-20 lg:pt-5 relative overflow-clip'>
        //     <div className='relative flex items-center justify-center lg:justify-start h-full mx-auto'>
        //         {/* รูปภาพด้านซ้าย */}
        //         <div className='absolute  -top-20 lg:left-100 lg:top-80 md:-left-40 md:-top-60 max-h-[300px] sm:max-h-[400px] md:max-h-[660px] lg:max-h-[600px] lg:scale-500 md:scale-40 md:transform md:translate-y-0 lg:transform lg:-translate-y-1/2 opacity-35 '>
        //             <img src='https://img2.pic.in.th/pic/mypic.png' alt='mypic' className=' h-auto  lg:max-h-[100px] lg:w-auto' />
        //         </div>

        //         {/* ข้อความด้านบนรูป */}
        //         <div className='relative z-10 flex flex-row lg:gap-5  mx-auto items-center lg:items-start text-center lg:text-left'>
        //             <h1 className='text-blue-200 text-xl md:text-3xl lg:text-7xl 2xl:text-8xl font-semibold lg:pb-0 lg:pt-3 2xl:pt-0 2xl:pb-10 '>
        //                 I Love
        //             </h1>
        //             <RotatingText
        //               texts={['Motion Designs', '3D Model Designs', 'Graphic Designs',]}
        //               mainClassName="px-2 sm:px-2 md:px-3 text-blue-200 text-xl md:text-3xl lg:text-6xl 2xl:text-7xl font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 lg:py-0 lg:pt-5 justify-center rounded-lg"
        //               staggerFrom={"last"}
        //               initial={{ y: "100%", opacity: 10}}
        //               animate={{ y: 0 }}
        //               exit={{ y: "-120%",opacity: 10 }}
        //               staggerDuration={0.025}
        //               splitLevelClassName="overflow-hidden pb-0.5 "
        //               transition={{ type: "spring", damping: 30, stiffness: 400 }}
        //               rotationInterval={3000}
        //             />

        //         </div>
        //     </div>
        // </div>
    )
}
/* <SplitText
                        text={[
                            'Motions Designer',
                            '3D Model Designer',
                            'Graphic Designer',
                        ]}
                        className='text-blue-200 text-xl lg:text-7xl font-semibold'
                        delay={50}
                        repeatDelay={5000}
                    />*/