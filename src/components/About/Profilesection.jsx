import React from 'react'
import { MdFileDownload } from "react-icons/md";
import AnimatedContent from '../AnimatedContent';

import "../../styles/about.css"

export default function Profilesection() {
    return (
        <section className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                <div className='md:col-span-5 relative group'>
                    <AnimatedContent
                        distance={10}
                        direction="horizontal"
                        reverse={true}
                        config={{ tension: 50, friction: 30 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={300}

                    >
                        <div className='absolute -inset-4 bg-electric-blue/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500 ease-in-out'>
                        </div>
                        <div className='relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl bg-surface-container'>
                            <img className='w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700'
                                src="https://res.cloudinary.com/donnu2idb/image/upload/v1774361429/%E0%B8%A3%E0%B8%B8%E0%B8%9B_dfcso1.png" />
                        </div>
                    </AnimatedContent>
                </div>
                <div className='md:col-span-7 space-y-8'>
                    <AnimatedContent
                        distance={70}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 50, friction: 30 }}
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.2}
                        delay={500}

                    >
                        <div>
                            <span className='font-label-caps text-label-caps text-electric-blue uppercase tracking-widest block mb-4'>The
                                Designer</span>
                            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-deep-navy mb-6">
                                Patcharadol Soimanee
                            </h1>
                            <p className='font-body-lg text-body-lg text-outline leading-relaxed max-w-2xl'>
                                Creative and detail-oriented multidisciplinary designer specializing in graphic design,
                                motion graphics, and video editing. Committed to delivering high-quality visual solutions
                                and continuous professional growth.
                            </p>
                        </div>
                    </AnimatedContent>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-300'>
                        <AnimatedContent
                            distance={10}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 50, friction: 30 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={200}

                        >
                            <div>
                                <span className='font-label-caps text-label-caps text-deep-navy block'>Nickname</span>
                                <span className="font-body-md text-body-md text-outline">Ford</span>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={10}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 50, friction: 30 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={300}

                        >
                            <div>
                                <span className="font-label-caps text-label-caps text-deep-navy block">Birth Date</span>
                                <span className="font-body-md text-body-md text-outline">April 20, 2002</span>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={10}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 50, friction: 30 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={400}

                        >
                            <div>
                                <span className="font-label-caps text-label-caps text-deep-navy block">Nationality</span>
                                <span className="font-body-md text-body-md text-outline">Thai</span>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={10}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 50, friction: 30 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={500}

                        >
                            <div>
                                <span className="font-label-caps text-label-caps text-deep-navy block">Location</span>
                                <span className="font-body-md text-body-md text-outline">Bangkok, Thailand</span>
                            </div>
                        </AnimatedContent>
                    </div>
                    <AnimatedContent
                            distance={0}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 50, friction: 30 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={300}

                        >
                    <div className="pt-4">
                        <a className="bg-primary text-white font-label-caps text-label-caps px-10 py-4 rounded-lg hover:bg-electric-blue transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-electric-blue/20"
                            href="https://res.cloudinary.com/donnu2idb/image/upload/v1774361260/CV_xxxkvs.pdf"
                            target="_blank">
                            <MdFileDownload />
                            Download Resume
                        </a>
                    </div></AnimatedContent>
                </div>
            </div>
        </section>
    )
}
