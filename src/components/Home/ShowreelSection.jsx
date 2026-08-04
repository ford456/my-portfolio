import React from 'react'
import AnimatedContent from '../AnimatedContent'

export default function ShowreelSection() {
    return (

        <section className='py-[80px] md:py-[100px] bg-[#eeedef]'>
            <div className='lg:max-w-[900px] xl:max-w-[1280px] 2xl:max-w-[1900px] min-h-screen xl:max-h-[900px] mx-auto px-[20px] md:px-[24px] transition-all duration-1000 opacity-100 translate-y-0'>
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
                    <div className='mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4'>
                        <div>
                            <span
                                className="font-bold text-label-caps text-blue-400  mb-2 block uppercase">Showcase</span>
                            <h2 className="font-semibold text-headline-lg text-[#1D3A51]">My Showreel</h2>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                            This is my most proud achievement that I would like to showcase specially.
                        </p>
                    </div>
                    <hr className='mb-10 text-[#1D3A51]' />
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
                    delay={300}>
                    <iframe className='relative group aspect-video w-full rounded-xl overflow-hidden shadow-2xl '
                        src="https://www.youtube.com/embed/fDwcXvyimLU?si=4cgotUUzdu-IFjGO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
                </AnimatedContent>
            </div>
        </section>

    )
}
