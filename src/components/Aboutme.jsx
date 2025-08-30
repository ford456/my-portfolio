
import Link from 'next/link'
import React from 'react'

import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all';
import AnimatedContent from './AnimatedContent';

gsap.registerPlugin(ScrollTrigger)

export default function Aboutme() {
    return (
        <div className='bg-linear-to-b from-black via-0% to-black/90 '>
            <div className=' bg-linear-to-tl from-blue-500/10 via-blue-500/0  to-blue-500/10 max-w-auto min-h-[400px] h-auto px-5 pb-10 lg:py-30 lg:pb-30 overflow-clip ' >
                <div className='relative flex flex-col text-center mb-5 md:mb-5 md:mx-30 lg:mx-50 lg:mb-10 2xl:mx-100 '>
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={300}>
                        <AnimatedTitle
                            containerClass='text-4xl lg:text-7xl font-bold text-blue-500 mt-10 my-5 lg:mt-0 lg:my-10'
                            title="WHO AM I ?"
                        />
                    </AnimatedContent>
                    {/*<h1 className='text-5xl lg:text-7xl font-bold text-blue-500 my-10' >WHO AM I ?</h1>*/}
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={300}>
                        <p className='text-sm  md::text-base lg:text-xl pt-6 px-15' >I am a graphic designer and 3D modeling designer  who is <br /> passionate about creating graphics and motions with expertise.</p>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={300}>

                        <p className='text-sm md:text-base  lg:text-xl  pt-6 px-15' >Motion designs and 3D modelings are my passion. I constantly seek new techniques and information to improve my skills.</p>
                    </AnimatedContent>
                    <AnimatedContent
                        distance={150}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={300}>

                        <p className='text-sm md:text-base lg:text-xl  pt-6 px-15' >Additionally, I enjoy playing games, watching anime, and movies, as they help me have fun and relaxing!</p>
                    </AnimatedContent>

                </div>
                <AnimatedContent
                    distance={80}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                    delay={300}>
                    <ul className='text-center pt-5'>
                        <button className="bg-blue-500 p-3 px-5 rounded-full transition duration-300 hover:outline-2 outline-blue-500 outline-offset-0 hover:scale-110  hover:outline-blue-500 hover:outline-offset-4">
                            <Link href={'/about'} target='_parent'
                            >
                                SHOW MY ABOUT
                            </Link>
                        </button>

                    </ul>
                </AnimatedContent>

            </div>

        </div>
    )
}
