import React from 'react'
import Link from 'next/link'
import Projectdatas from '../../datas/ProjectData'
import { IoMdArrowForward } from "react-icons/io";

import AnimatedContent from '../AnimatedContent';

const [project26, project15, project23, project14] = ["26", "15", "31", "30"].map((id) =>
    Projectdatas.find((item) => item.id === id)
);


export default function Projectsection() {
    return (
        <section className="py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden" id="work">
            <div className="absolute inset-y-0 right-[-85%] w-[100%] bg-black/5 -skew-x-[10deg] -z-10">
            </div>
            <div
                className="max-w-container-max mx-auto px-margin-mobile md:px-gutter transition-all duration-1000 opacity-100 translate-y-0">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
                    <div>
                        <div
                            className="font-label-caps text-label-caps text-electric-blue mb-4 block uppercase tracking-widest">Portfolio
                            Selection</div>
                        <h2 className="font-display-hero-mobile md:font-headline-lg text-headline-lg text-deep-navy">
                            Featured Projects</h2>
                    </div>
                    <Link className="mt-4 md:mt-0 inline-flex items-center gap-2 font-label-caps text-label-caps text-electric-blue hover:scale-105 group duration-300 ease-in-out"
                        href="/projects">
                        <div className="">View All Work</div>
                        <IoMdArrowForward className="group-hover:translate-x-1 transition-transform text-2xl" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* <!-- Project 1 (Massive Kinetic Card) --> */}
                    <div className="md:col-span-8 group project-card relative">
                        <AnimatedContent
                            distance={70}
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
                                className="project-img-container relative overflow-hidden rounded-2xl aspect-[16/10] bg-surface-container shadow-xl">
                                <Link href={`/projects/${project26.id}`} target="_parent" rel="noopener noreferrer">
                                    <img className="w-full h-full object-cover " data-alt="Futuristic motion graphic preview"
                                        src={project26.img1} />
                                    <div className="overlay-kinetic absolute inset-0 flex flex-col justify-end p-8 text-white">

                                        <h3 className="font-headline-lg text-headline-md mb-2">{project26.title}</h3>

                                        <p className="font-body-md opacity-80 max-w-md truncate">{project26.description}</p>

                                    </div>
                                    <div
                                        className="absolute items-center top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white font-bold text-[12px]">
                                        2025</div>
                                </Link>
                            </div>
                            <div className="mt-6 md:hidden">
                                <h3 className="font-headline-md text-deep-navy">{project26.title}</h3>
                                <p className="text-on-surface-variant font-body-md max-w-md truncate">{project26.description}</p>
                            </div></AnimatedContent>
                    </div>

                    {/* <!-- Project 2 (Offset Tall Card) --> */}
                    <div className="md:col-span-4 group project-card md:mt-24">
                        <AnimatedContent
                            distance={70}
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
                                className="project-img-container relative overflow-hidden rounded-2xl h-[400px] md:h-[600px] bg-surface-container shadow-lg">
                                <Link href={`/projects/${project15.id}`} target="_parent" rel="noopener noreferrer">
                                <img className="w-full h-full object-cover" data-alt="Elegant minimalist posters"
                                    src={project15.img1} />
                                <div className="overlay-kinetic absolute inset-0 flex flex-col justify-end p-8 text-white">
                                    <h3 className="font-bold text-[24px]">{project15.title}</h3>
                                    <p className="font-body-md opacity-80 max-w-md truncate">{project15.description}</p>
                                </div></Link>
                                <div
                                    className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white font-bold text-[12px]">
                                    2025</div>
                               
                            </div>
                            <div className="mt-6 md:hidden">
                                <h3 className="font-headline-md text-deep-navy">{project15.title}</h3>
                                <p className="text-on-surface-variant font-body-md  max-w-md truncate">{project15.description}</p>
                            </div>
                        </AnimatedContent>
                    </div>
                    {/* <!-- Project 3 (Asymmetrical Smaller Card) --> */}
                    <div className="md:col-span-5 group project-card md:-mt-24">
                        <AnimatedContent
                            distance={70}
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
                                className="project-img-container relative overflow-hidden rounded-2xl aspect-square bg-surface-container shadow-lg">
                                <Link href={`/projects/${project23.id}`} target="_parent" rel="noopener noreferrer">
                                <img className="w-full h-full object-cover" data-alt="Dynamic video editing frame"
                                    src={project23.img1} />
                                <div className="overlay-kinetic absolute inset-0 flex flex-col justify-end p-8 text-white">
                                    <h3 className="font-bold text-[24px]">{project23.title}</h3>
                                    <p className="font-body-md opacity-80 max-w-md truncate">{project23.description}</p>
                                </div></Link>
                                <div
                                    className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-gray-300 font-bold text-[12px]">
                                    2025</div>
                            </div>
                            <div className="mt-6 md:hidden">
                                <h3 className="font-bold text-[24px] text-deep-navy">{project23.title}</h3>
                                <p className="text-on-surface-variant font-body-md max-w-md truncate">{project23.description}</p>
                            </div>
                        </AnimatedContent>
                    </div>
                    {/* <!-- Project 4 (Large Visual Balance) --> */}
                    <div className="md:col-span-7 group project-card">
                        <AnimatedContent
                            distance={70}
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
                                className="project-img-container relative overflow-hidden rounded-2xl aspect-video bg-surface-container shadow-xl">
                                <Link href={`/projects/${project14.id}`} target="_parent" rel="noopener noreferrer">
                                <img className="w-full h-full object-cover" data-alt="3D character design"
                                    src={project14.img1} />
                                <div className="overlay-kinetic absolute inset-0 flex flex-col justify-end p-8 text-white">
                                    <h3 className="font-bold text-headline-md">{project14.title}</h3>
                                    <p className="font-body-md opacity-80 max-w-md truncate">{project14.description}</p>
                                </div></Link>
                                <div
                                    className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white font-bold text-[12px]">
                                    2025</div>
                            </div>
                            <div className="mt-6 flex justify-between items-start md:hidden">
                                <div>
                                    <h3 className="font-bold text-headline-md text-deep-navy">{project14.title}</h3>
                                    <p className="text-on-surface-variant font-body-md mt-1 max-w-md truncate">{project14.description}</p>
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </div>
        </section>
    )
}
