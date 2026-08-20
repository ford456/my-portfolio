import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import AnimatedContent from '../AnimatedContent';

export default function Dynamicmap() {
    return (
        <section className="h-[600px] grid grid-cols-1 place-content-center w-full relative justify-items-center group ">
            <div className=" absolute w-full h-full bg-[url(https://res.cloudinary.com/donnu2idb/image/upload/v1786219618/images_khixun.jpg)]
            bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 cursor-default"
                alt="A cinematic, low-angle photograph of a modern glass office building at twilight in Bangkok. The city lights create a vibrant blur in the background, with deep blues and teals dominating the color palette. Sharp geometric lines of the architecture reflect the soft, ethereal light from the setting sun. The mood is professional, sophisticated, and urban."
            >
            </div>
            <AnimatedContent
                distance={30}
                direction="vertical"
                reverse={false}
                config={{ tension: 100, friction: 50 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={200}

            >
                <div className='relative group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-in-out'>
                    <div
                        className="w-10 h-10 left-5 top-5 rounded-full border-2 border-electric-blue animate-ping absolute -inset-0 opacity-30">
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center relative">
                        <IoLocationSharp className="material-symbols-outlined text-electric-blue text-4xl"
                        />
                    </div>
                </div>
            </AnimatedContent>
            <AnimatedContent
                distance={30}
                direction="vertical"
                reverse={false}
                config={{ tension: 100, friction: 50 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={500}

            >
                <p className="font-label-caps text-label-caps text-white bg-primary/80 backdrop-blur drop-shadow-md px-4 py-2 rounded-full inline-block group-hover:scale-110 transition-all duration-700 ease-in-out">
                    BANGKOK</p>
            </AnimatedContent>
            <div
                className="absolute z-20 inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20 pointer-events-none">
            </div>

        </section>
    )
}
