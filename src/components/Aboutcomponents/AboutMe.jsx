import React from 'react'
import AnimatedContent from '../AnimatedContent'
import Experiences from './Experiences'
import Link from 'next/link'
import Certipage from './Certipage';


export default function AboutMe() {
    return (
        <div className=' cursor-default bg-linear-to-b from-black to-none to-100% ' >
            <div className=' grid grid-cols-3 max-w-auto min-h-[400px] h-auto px-2 sm:px-5 2xl:px-15 pb-10 py-10 xl:py-30 lg:pb-30 justify-items-center '>
                <div className='flex flex-col items-center bg-none border-r-2 w-full p-2 sm:p-5 mb-4 max-w-lg overflow-clip' >

                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={300}>
                        {/* About me */}
                        <div className=' my-3 2xl:my-5'>
                            <h1 className='text-start font-bold text-sm md:text-lg lg:text-xl 2xl:text-4xl pb-3'>
                                About <span className='text-blue-500'>Me</span>
                            </h1>
                            <h2 className='text-start text-[9px] md:text-base 2xl:text-xl '>
                                NickName: Ford
                            </h2>
                            <h2 className='text-start text-[9px] md:text-base 2xl:text-xl '>
                                Date of Birth: April 20, 2002
                            </h2>
                            <h2 className='text-start text-[9px] md:text-base 2xl:text-xl '>
                                Nationality: Thai
                            </h2>
                        </div></AnimatedContent>
                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={400}>
                        {/* character */}
                        <div className=' my-3 2xl:my-5'>
                            <h2 className='text-start font-bold text-sm md:text-lg lg:text-xl 2xl:text-2xl'>
                                Characters
                            </h2>

                            <div className='grid grid-cols-1 gap-x-5 text-[9px] md:text-base 2xl:text-lg'>
                                <li>Cheerfull</li>
                                <li>Be punctual</li>
                                <li>Hard working</li>
                                <li>Learn quickly</li>
                                <li>Like to learn new things</li>
                            </div>
                        </div></AnimatedContent>
                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={400}>
                        {/* Hobbies */}
                        <div className=' my-3 2xl:my-5'>
                            <h2 className='text-start font-bold text-sm md:text-lg lg:text-xl 2xl:text-2xl'>
                                Hobbies
                            </h2>

                            <div className='grid grid-cols-1 lg:grid lg:grid-cols-2 gap-x-5 text-[9px] md:text-base 2xl:text-lg'>
                                <li>Drawing</li>
                                <li>Play games</li>
                                <li>Watch movies</li>
                                <li>Listen music</li>
                            </div>
                        </div></AnimatedContent>

                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={400}>
                        {/* Language */}
                        <div className=' my-3 2xl:my-5'>
                            <h2 className='text-start font-bold text-sm md:text-lg lg:text-xl 2xl:text-2xl pb-3'>
                                Language Skills
                            </h2>

                            <div className='grid grid-cols-1 gap-x-5 text-[9px] md:text-base 2xl:text-lg'>
                                <p>English CEFR (UP-STEP): B1</p>
                                <p>Thai : Native</p>
                            </div>
                        </div></AnimatedContent>

                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1.1}
                        threshold={0.2}
                        delay={400}>
                        {/* Educate */}
                        <div className=' my-3 2xl:my-5'>
                            <h2 className='text-start font-bold text-sm md:text-lg lg:text-xl 2xl:text-2xl pb-3'>
                                Educational
                            </h2>

                            <div className='grid grid-cols-1 pr-5 gap-x-5 text-[9px] md:text-base 2xl:text-lg'>
                                <p>School of Information and Communication Technology,
                                    University of Phayao : 2021 - 2025  , GPA: 3.66 | First Class Honors</p>

                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center my-3 2xl:my-5'>
                            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-[9px] md:text-base 2xl:text-lg py-2 px-4 rounded-full mt-5 mb-5">
                                <Link href='/PDF/CV.pdf' target='_blank' >Download Resume</Link>
                            </button>
                        </div>
                    </AnimatedContent>
                </div>
                <div className="bg-none  w-full p-3 col-span-2 overflow-clip">
                    <AnimatedContent
                        className=''
                        distance={80}
                        direction="horizontal"
                        reverse={true}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={300}>
                        <Experiences />
                    </AnimatedContent>
                </div>
                <div className='bg-none 2xl:mt-10 w-full p-3 col-span-3 border-t-2 overflow-clip' >
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
                        <div className=''>
                            <h2 className='text-center font-bold text-xl md:text-xl lg:text-2xl 2xl:text-5xl mt-5 pb-0 lg:pb-3'>Certificates </h2>
                        </div>
                        <Certipage />
                    </AnimatedContent>




                </div>

            </div>
        </div>
    )
}
