"use client";;
import { motion, useScroll, useTransform, } from "motion/react";
import { useRef, useState } from "react";
// import AnimatedContent from "./AnimatedContent";
import "../../styles/about.css"
import ExpDatas from './../../datas/ExpDatas';
import TimeLineCard from './../TimeLineCard';


export default function ExpTimeline() {

    const containerRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 30%", "end 70%"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

    const [activeId, setActiveId] = useState(null);

    return (
        <section ref={containerRef}
            className="py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto overflow-hidden">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-16 text-center">The Journey</h2>
            <div className="relative timeline-line" >
                <div
                    className="
                    absolute
                    inset-y-0
                    left-8
                    md:left-1/2
                    md:-translate-x-1/2
                    w-[2px]
                    overflow-hidden">
                    {/* เส้นพื้นหลัง */}
                    <div className="absolute inset-0 bg-neutral-200" />

                    {/* เส้นที่เติมตาม Scroll */}
                    <motion.div
                        style={{
                            scaleY,
                            opacity,
                            transformOrigin: "top",
                        }}
                        className="
                        absolute
                        inset-0
                        origin-top
                        rounded-full
                        bg-gradient-to-b
                        from-cyan-400
                        via-blue-500
                        to-purple-500
                    "
                    />
                </div>
                {/* <!-- MAIDER CO.,Ltd --> */}
                {ExpDatas.map((exp, i) => (
                    <TimeLineCard
                        key={exp.id}
                        data={exp}
                        reverse={i % 2 === 1}
                        active={activeId === exp.id}
                        setActiveId={setActiveId}
                    />
                ))}




            </div>
        </section>
    )
}
