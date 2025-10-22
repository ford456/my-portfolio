"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import AnimatedContent from "./AnimatedContent";

export const Timeline = ({
    data
}) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);
    
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full md:px-10"
            ref={containerRef}>
            <div className="max-w-5xl mx-auto py-5 sm:py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 font-bold  max-w-4xl">
                    Changelog from <br /><span className=" text-blue-500">my journey</span>
                </h2>
                <p
                    className=" text-[10px] md:text-base max-w-sm">
                    I&apos;ve been working on job and Internship for Less than 1 Year. Here&apos;s
                    a timeline of my journey.
                </p>
            </div>
            <div ref={ref} className="relative max-w-5xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div
                            className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div
                                className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                                <div className="absolute z-0  h-3 w-3 rounded-full animate-ping bg-sky-400 border border-blue-300 dark:border-b-blue-900 p-2" />
                                <div
                                    className=" h-4 w-4 z-10 rounded-full bg-blue-500 border border-blue-300 dark:border-b-blue-900 p-2" />

                            </div>
                            <h3
                                onFocus={() => setActiveIndex(index)}
                                className={`hidden md:block text-xl md:pl-20 md:text-2xl lg:text-3xl font-bold ${activeIndex === index ? "text-blue-100" : "text-blue-500"
                                    }`}>
                                {item.title} 
                            </h3>
                        </div>
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
                            delay={400}
                        >
                            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                                <h3
                                    className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                    {item.title}
                                </h3>
                                {item.content}{" "}
                            </div></AnimatedContent>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>
    );
};
