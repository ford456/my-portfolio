import React from 'react'
import Link from 'next/link'
import AnimatedContent from './AnimatedContent'

export default function Showreel() {
    return (
        <div className='relative bg-none h-auto w-full py-15   max-w-[92.5rem] max-w-auto'>
            <div className=' flex flex-col items-center justify-center mx-auto'>
                <div className='2xl:hidden flex '>
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
                        <h1 className='text-2xl md:text-4xl font-semibold text-center py-10' >My
                            <span className='text-blue-500'> Showreel</span></h1>
                    </AnimatedContent>
                </div>
                <div className='grid grid-cols-1 2xl:grid-cols-3 gap-5 justify-items-center mt-5 mx-5 lg:mx-10 px-5'>
                    <div className='col-span-2 bg-none w-full justify-items-center overflow-clip'>

                        <AnimatedContent
                            distance={150}
                            direction="horizontal"
                            reverse={true}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={300}>
                            <iframe className='rounded-3xl max-w-[560px] max-h-[315px] md:max-w-[625px] md:max-h-[352px] lg:w-1280 lg:h-720 '
                                src="https://www.youtube.com/embed/fDwcXvyimLU?si=4cgotUUzdu-IFjGO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                        </AnimatedContent>
                    </div>
                    <div className=' flex flex-col px-5 overflow-clip '>
                        <div className='hidden 2xl:flex'>
                            <AnimatedContent
                                distance={150}
                                direction="horizontal"
                                reverse={false}
                                config={{ tension: 80, friction: 20 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1.1}
                                threshold={0.2}
                                delay={400}>
                                <h1 className='text-2xl md:text-4xl  font-semibold text-center pb-10' >My
                                    <span className='text-blue-500'> Showreel</span></h1>
                            </AnimatedContent>
                        </div>
                        <AnimatedContent
                            distance={100}
                            direction="horizontal"
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={500}>
                            <h3 className='indent-8'>This is my most proud achievement that I would like to showcase specially.</h3>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={80}
                            direction="horizontal"
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={300}>
                            <ul className='text-center lg:text-start pt-10'>
                                <button className="bg-blue-500 p-3 px-5 rounded-full transition duration-300 hover:outline-2 outline-blue-500 outline-offset-0 hover:scale-110  hover:outline-blue-500 hover:outline-offset-4">
                                    <Link href={'/projects'} target='_parent'
                                    >
                                        SHOW MY PROJECTS MORE
                                    </Link>
                                </button>

                            </ul>
                        </AnimatedContent>

                    </div>
                </div>


            </div>

        </div>

    )
}
