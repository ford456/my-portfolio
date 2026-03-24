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
        <div className=' grid grid-cols-12 grid-rows-6 gap-2 bg-[url(https://res.cloudinary.com/donnu2idb/image/upload/v1774361647/Home_Banner02_hdwdw5.jpg)] bg-center bg-cover bg-no-repeat h-[220px] sm:h-[400px] lg:h-[600px] 2xl:h-[900px] max-w-auto px-3 sm:px-3 lg:px-10 relative overflow-clip'>
            <div className=' col-start-3 sm:col-start-4 md:col-start-4 lg:col-start-4 col-span-5 sm:col-span-3 md:col-span-3 lg:col-span-3 row-start-5 flex items-center justify-center'>
                <div className='scale-45 sm:scale-55 md:scale-90 lg:scale-100 2xl:scale-150 '>
                    <Link href="/about" className="" target='_parent' onClick={() => setToggle(false)}>
                        <div className='text-center bg-none py-3 px-4 rounded-full outline-3 mt-5'> About Me </div>
                    </Link>
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