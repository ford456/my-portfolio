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
        <div className='cursor-default flex sm:grid sm:grid-cols-2 h-[200px] sm:h-[300] lg:h-[700px] max-w-auto  px-3 sm:px-3 lg:px-10 pt-20 lg:pt-5 relative ml-5 items-center justify-items-center overflow-clip'>
            {/* รูปภาพด้านซ้าย */}
                <div className=''>
                    <img src='https://img5.pic.in.th/file/secure-sv1/e8be85d91ee07dc1d024b719f7bc12cb.png' alt='mypic' className=' h-auto w-[100px] sm:w-[200] sm:max-h-[600px] lg:w-auto' />
                </div>
            <div className='relative flex flex-row justify-items-start items-center h-full'>
                
                <div className='flex flex-col gap-x-2 2xl:mr-10 scale-75 sm:scale-90 lg:scale-100' >
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
                        className='text-blue-400 text-lg lg:text-5xl 2xl:text-6xl leading-0.5 lg:leading-none'
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
                        <h2 className=' text-[10px] lg:text-lg 2xl:text-xl ' >Graphic Designer | Motion Graphic Designer | 3D Modeling Designer</h2>
                    </AnimatedContent>
                </div>
            </div>
        </div>
    )
}
