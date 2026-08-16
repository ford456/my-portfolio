import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import AnimatedContent from '../AnimatedContent';

function Heroproject({section}) {
  return (
    <div>
        <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 100, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={300}>
           <section
            className="relative min-h-[80vh] flex flex-col justify-center items-center px-margin-mobile md:px-gutter overflow-hidden">
            <div className="z-10 text-center max-w-4xl flex flex-col items-center">
                <span
                    className="font-label-caps text-label-caps text-electric-blue mb-4 block uppercase opacity-80"
                    >Projects</span>
                <h1 className="font-bold text-[32px] md:text-[48px] leading-16 mb-6 text-glow"
                   >
                    {section.title}
                </h1>
                <div className="flex flex-row items-center text-electric-blue gap-2 mt-2 md:mt-0 opacity-30">
                        <MdOutlineDateRange className=' size-4' />
                        <h6 className="cursor-default  text-md  text-justify "  > {section.date}</h6>
                    </div>
            </div>
        </section></AnimatedContent>
        <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 100, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={300}>
        <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto -mt-20 relative z-20">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                <img alt={section.title}
                    className=" w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                    src={section.thumbnail} />
            </div>
        </section></AnimatedContent>
        </div>
  )
}

export default Heroproject
