'use client'

import React from 'react'
import { SkillData } from '../datas/SkillData';
import ProgressBar from './ProgressBar';
import AnimatedContent from './AnimatedContent';

export default function Skills() {
    return (
        <header className=' w-auto min-h-[600px] h-auto  py-10 overflow-clip relative'>
            <div className='bg-[url(https://img5.pic.in.th/file/secure-sv1/BGBanner02.png)] bg-top bg-cover h-20 sm:h-40 md:h-50 lg:h-70 xl:h-90 2xl:h-120'></div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 mx-15 h-auto'>
                <AnimatedContent
                    distance={80}
                    direction="horizontal"
                    reverse={true}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={300}
                >
                    <div className=' bg-none justify-items-center '>
                        <img src="https://img2.pic.in.th/pic/IMG_Social.png" alt="Socials" className='' />
                    </div>
                </AnimatedContent>
                <div className='flex flex-col text-sm sm:text-lg lg:text-xl gap-y-5 lg:pt-10 '>
                    <AnimatedContent
                        distance={80}
                        direction="vertical "
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={500}
                    >
                        <h2 className='text-base indent-8'><span className='text-2xl'>I'm </span> a graphic designer, motion graphic designer and video editor based in Bangkok, Thailand. Creative and detail-oriented designer with nearly one year of experience in graphic design, motion graphics, and video editing. Skilled in teamwork, time management, and producing innovative visuals that enhance communication and drive sales performance. Open to new challenges, a fast learner, and committed to continuous professional growth.</h2>
                    </AnimatedContent>
                    <div className='grid grid-cols-2  lg:grid lg:grid-cols-2 gap-5 lg:gap-x-10 pt-5 items-center'>
                        {SkillData.map(item => (
                            <AnimatedContent
                                distance={80}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 80, friction: 20 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={600}
                                key={item.id}
                            >
                                <div

                                    data-id={item.id}
                                    className={` transition-scale duration-200 ease-in-out bg-none w-auto h-auto flex flex-col sm:flex-row items-center `}>
                                    <img
                                        src={item.img || "/default-image.png"}
                                        alt={item.Sname}
                                        className=' aspect-square w-auto h-15 sm:w-auto sm:h-[50px] rounded-lg sm:rounded-xl p-2 2xl:h-15 2xl:w-auto 2xl:rounded-3xl '
                                    />
                                    <ul className={`transition-transform duration-300 flex flex-col p-2`}>
                                        <h1 className=' text-xs lg:text-base mb-2 2xl:text-lg'>{item.Sname}</h1>
                                        <ProgressBar
                                            progress={item.quality}
                                            level={item.level}
                                            className='w-30 h-4 max-sm:max-w-15 sm:w-35 md:w-20 lg:w-33 xl:w-50 lg:h-4 2xl:w-50 2xl:h-6'
                                            FontZise='text-[10px] lg:text-xs 2xl:text-base'
                                        />
                                    </ul>
                                </div>
                            </AnimatedContent>
                        ))}

                    </div>
                </div>

            </div>


        </header >
    );
}

