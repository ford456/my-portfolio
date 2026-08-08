import React from 'react'
import AnimatedContent from '../AnimatedContent';

import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { TbBolt } from "react-icons/tb";
import { MdOutlineAutoStories } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";


export default function Biographycontent() {
    return (
        <section className='bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop'>
            <div className='px-margin-mobile md:px-gutter max-w-container-max mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto'>
                    <div className='space-y-8'>
                        <h2 className="font-headline-lg text-headline-lg text-deep-navy">Character &amp; Habits</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <AnimatedContent
                                distance={10}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 80, friction: 30 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={200}

                            >
                                <div
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                                    <HiOutlineEmojiHappy className="text-2xl text-electric-blue" />
                                    <span className="text-body-md">Cheerful</span>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={10}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 80, friction: 30 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={300}

                            >
                                <div
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                                    <IoMdTime className="text-2xl text-electric-blue" />
                                    <span className="text-body-md">Punctual</span>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={10}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 80, friction: 30 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={400}

                            >
                                <div
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                                    <TbBolt className="text-2xl text-electric-blue" />
                                    <span className="text-body-md">Hard working</span>
                                </div>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={10}
                                direction="vertical"
                                reverse={false}
                                config={{ tension: 80, friction: 30 }}
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.2}
                                delay={500}

                            >
                                <div
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-outline-variant/30">
                                    <MdOutlineAutoStories className="text-2xl text-electric-blue" />
                                    <span className="text-body-md">Quick learner</span>
                                </div>
                            </AnimatedContent>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-label-caps text-label-caps text-deep-navy uppercase">Hobbies</h3>
                            <div className="flex flex-wrap gap-2">
                                <AnimatedContent
                                    distance={10}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 80, friction: 30 }}
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1}
                                    threshold={0.2}
                                    delay={200}

                                >
                                    <span className="px-4 py-2 bg-soft-gray/50 rounded-lg text-body-md">Drawing</span>
                                    <span className="px-4 py-2 bg-soft-gray/50 rounded-lg text-body-md">Gaming</span>
                                    <span className="px-4 py-2 bg-soft-gray/50 rounded-lg text-body-md">Movies</span>
                                    <span className="px-4 py-2 bg-soft-gray/50 rounded-lg text-body-md">Music</span>
                                </AnimatedContent>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h2 className="font-headline-lg text-headline-lg text-deep-navy">Education</h2>
                        <AnimatedContent
                            distance={10}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.2}
                            delay={600}

                        >
                            <div
                                className="p-6 bg-white rounded-xl shadow-sm border border-outline-variant/30 relative overflow-hidden group">
                                <div
                                    className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-25 transition-opacity duration-600 ease-in-out">
                                    <IoSchoolOutline className="text-secondary text-6xl" />
                                </div>
                                <span className="font-label-caps text-label-caps text-electric-blue mb-1 block">2021 -
                                    2025</span>
                                <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">University of Phayao</h3>
                                <p className="font-body-md text-outline mb-4">School of Information and Communication Technology
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="bg-primary/5 text-primary px-3 py-1 rounded font-bold text-sm">GPA
                                        3.66</span>
                                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded font-bold text-sm">First
                                        Class Honors</span>
                                </div>
                            </div>
                        </AnimatedContent>
                        <div className="space-y-4 pt-4 border-t border-soft-gray">
                            <h3 className="font-label-caps text-label-caps text-deep-navy uppercase">Language Skills</h3>
                            <div className="space-y-3">
                                <AnimatedContent
                                    distance={10}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1}
                                    threshold={0.2}
                                    delay={400}

                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-body-md">Thai</span>
                                        <span className="font-label-caps text-electric-blue">Native</span>
                                    </div>
                                </AnimatedContent>
                                <AnimatedContent
                                    distance={10}
                                    direction="vertical"
                                    reverse={false}
                                    config={{ tension: 80, friction: 20 }}
                                    initialOpacity={0}
                                    animateOpacity
                                    scale={1}
                                    threshold={0.2}
                                    delay={600}

                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-body-md">English</span>
                                        <span className="font-label-caps text-electric-blue">B1 (UP-STEP)</span>
                                    </div></AnimatedContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
