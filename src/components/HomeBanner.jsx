'use client'

import React from 'react'

import SplitText from './SplitText '
import RotatingText from './Rotating'


export default function HomeBanner() {
    return (
        <div className='cursor-default bg-linear-to-bl from-blue-800/55 to-black/55 h-[300px] lg:h-[700px] max-w-auto  px-3 sm:px-3 lg:px-10 pt-20 lg:pt-5 relative'>
            <div className='relative flex items-center justify-center lg:justify-start h-full mx-auto'>
                {/* รูปภาพด้านซ้าย */}
                <div className='absolute  -top-20 lg:left-100 lg:top-80 md:-left-40 md:-top-60 max-h-[300px] sm:max-h-[400px] md:max-h-[660px] lg:max-h-[600px] lg:scale-500 md:scale-40 md:transform md:translate-y-0 lg:transform lg:-translate-y-1/2 opacity-35 overflow-clip'>
                    <img src='/mypic.png' alt='mypic' className=' h-auto  lg:max-h-[100px] lg:w-auto' />
                </div>
                
                {/* ข้อความด้านบนรูป */}
                <div className='relative z-10 flex flex-row lg:gap-5  mx-auto items-center lg:items-start text-center lg:text-left'>
                    <h1 className='text-blue-200 text-xl md:text-3xl lg:text-7xl 2xl:text-8xl font-semibold lg:pb-0 lg:pt-3 2xl:pt-0 2xl:pb-10 '>
                        I Love
                    </h1>
                    <RotatingText
                      texts={['Motion Designs', '3D Model Designs', 'Graphic Designs',]}
                      mainClassName="px-2 sm:px-2 md:px-3 text-blue-200 text-xl md:text-3xl lg:text-6xl 2xl:text-7xl font-semibold overflow-hidden py-0.5 sm:py-1 md:py-2 lg:py-0 lg:pt-5 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={{ y: "100%", opacity: 10}}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%",opacity: 10 }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 "
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={3000}
                    />
              
                </div>
            </div>
        </div>
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