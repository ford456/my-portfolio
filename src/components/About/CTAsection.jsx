import React from 'react'
import AnimatedContent from '../AnimatedContent'

export default function CTAsection() {
    return (

        <section className="py-section-gap-mobile md:py-section-gap-desktop relative text-center bg-[#0 FAFAFA]">
            <div className="px-margin-mobile md:px-gutter max-w-4xl mx-auto">
                <AnimatedContent
                    distance={70}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 30 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={500}

                >
                <h2
                    className="font-display-hero-mobile md:font-headline-lg text-display-hero-mobile md:text-headline-lg text-deep-navy mb-8">
                    Ready to bring your vision to life?</h2></AnimatedContent>
                    <AnimatedContent
                    distance={70}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 30 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={600}

                >
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a className="w-full md:w-auto bg-primary text-white font-label-caps text-label-caps px-12 py-5 rounded-lg hover:bg-electric-blue transition-all duration-500 transform hover:-translate-y-1 shadow-lg"
                        href="/contact">Start a Conversation</a>
                    <a className="w-full md:w-auto bg-white text-primary border-2 border-primary font-label-caps text-label-caps px-12 py-5 rounded-lg hover:bg-primary hover:text-white transition-all duration-500"
                        href="https://res.cloudinary.com/donnu2idb/image/upload/v1774361260/CV_xxxkvs.pdf"
                        target="_blank">Download Resume</a>
                </div></AnimatedContent>
            </div>
        </section>
    )
}
