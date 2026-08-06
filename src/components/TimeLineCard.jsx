import { useRef, useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "motion/react";

import Timelinedot from './Timelinedot';
import AnimatedContent from './AnimatedContent'

export default function TimeLineCard({ data, reverse, active, setActiveId, }) {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [
            "start center",
            "center center",
        ],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // latest = 0 เมื่อขอบบนของ Card แตะกึ่งกลางจอ
        // latest = 1 เมื่อกึ่งกลาง Card ถึงกึ่งกลางจอ

        if (latest >= 0 && latest <= 1) {
            setActiveId(data.id);
        }
    });


    return (
        <div className={`cursor-default relative flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center mb-24 last:mb-0 timeline-item`}>

            <div className={`w-full md:w-1/2 mb-8 md:mb-0 hidden md:block ${reverse ? "md:text-left md:pl-24" : "md:text-right md:pr-24"}`}>
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

                ><span

                    className={`font-display-hero-mobile text-display-hero-mobile opacity-50 duration-700 ease-in-out hover:opacity-100 hover:text-electric-blue `}>{data.years}</span>
                </AnimatedContent>
            </div>

            <Timelinedot />

            <div className={`w-full md:w-1/2 ${reverse ? "md:pr-24" : "md:pl-24"}`}>
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
                        className="glass-card p-8 rounded-xl shadow-sm border border-outline-variant/30 hover:border-electric-blue/50 transition-all duration-300">
                        <span
                            className="md:hidden font-label-caps text-label-caps text-electric-blue mb-2 block">{data.years}</span>
                        <div className="flex flex-row gap-x-2">
                            {data?.img?.map((img) => (
                                <div key={img}
                                    className="relative w-full h-auto mb-4 bg-white rounded-lg p-2 shadow-sm border border-outline-variant/30 md:ml-auto">
                                    <img alt={`${data.title} Projects`} className="w-full h-full object-contain"
                                        src={img} />
                                </div>))}
                        </div>

                        <h3 className="font-headline-md text-headline-md text-deep-navy mb-1">{data.title}</h3>
                        <span className="font-label-caps text-label-caps text-outline mb-4 block">{data.position} | {data.ages}</span>
                        <p className="font-body-md text-body-md text-outline">{data.details}</p>
                    </div>
                </AnimatedContent>
            </div>

        </div>
    )

}
