'use client'

import React from 'react'

import { TypewriterEffectSmooth } from '../typewriter-effect';
import AnimatedContent from '../AnimatedContent';




export default function HeroAbout() {

    const words = [
        {
            text: "Patcharadol Soimanee",
        },

    ]

    return (
        <div className='cursor-default bg-linear-to-bl from-blue-800/55 to-black/55 h-[300px] lg:h-[700px] max-w-auto  px-3 sm:px-3 lg:px-10 pt-20 lg:pt-5 relative overflow-clip'>
            <div className='relative flex flex-row sm:right-0 md:right-15 lg:right-0 2xl:right-5 items-center justify-center md:justify-end lg:justify-center 2xl:justify-end h-full mx-auto px-5'>
                {/* รูปภาพด้านซ้าย */}
                <div className='absolute  -top-20 lg:left-100 lg:top-80 md:-left-40 md:-top-60 max-h-[300px] sm:max-h-[400px] md:max-h-[660px] lg:max-h-[600px] lg:scale-500 md:scale-40 md:transform md:translate-y-0 lg:transform lg:-translate-y-1/2 opacity-35 md:opacity-70 lg:opacity-35 2xl:opacity-70 overflow-clip'>
                    <img src='https://img2.pic.in.th/pic/mypic.png' alt='mypic' className=' h-auto  lg:max-h-[100px] lg:w-auto' />
                </div>
                <div className='flex flex-col gap-x-2 justify-items-start z-10 2xl:mr-10' >
                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="vertical"
                        reverse={true}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={200}>
                        <h1 className=' text-sm lg:text-xl 2xl:text-4xl leading-6 lg:leading-2 '>I am</h1>
                    </AnimatedContent>
                    <AnimatedContent
                    className=''
                    distance={80}
                    direction="vertical"
                    reverse={true}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={300}>
                      <TypewriterEffectSmooth
                        words={words}
                        className='text-blue-400 text-2xl lg:text-5xl 2xl:text-6xl leading-0.5 lg:leading-none'
                        cursorClassName=' bg-yellow-500 w-[4px] mt-1 lg:mt-3 2xl:mt-5 h-5 lg:h-12'
                    />  
                    </AnimatedContent>
                    

                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="vertical"
                        reverse={true}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={3000}>
                        <h2 className='text-blue-50/50 text-[10px] lg:text-lg 2xl:text-xl ' >Graphic Designer | Motion Graphic Designer | 3D Modeling Designer</h2>
                    </AnimatedContent>
                </div>
            </div>
        </div>
    )
}
