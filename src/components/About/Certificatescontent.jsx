import React from 'react'
import { Cerfiticates } from '../../datas/Cerfiticates';
import AnimatedContent from '../AnimatedContent'


const data = Cerfiticates

export default function Certificatescontent() {
    return (
        <section className='relative py-section-gap-mobile md:py-section-gap-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto'>
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-12 text-center">Certificates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 max-2xl:max-w-5xl 2xl:max-w-[1920px] mx-auto">
                {data.map((item, i) => (

                     <AnimatedContent
                    distance={70}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 50, friction: 30 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={i*200}
                    key={i}
                >
                    <div 
                        className="p-6 h-full bg-white rounded-xl outline-2 outline-variant/30 hover:outline-electric-blue/30 transition-all shadow-sm ease-in-out duration-700">
                        <div className="max-w-[500px] w-full h-auto mb-4 mx-auto md:mx-0">
                            <img alt={item.alt}
                                className="w-full h-full object-contain"
                                src={item.img} />
                        </div>
                        <h3 className="font-label-caps text-label-caps text-deep-navy mb-2">{item.title}</h3>
                        <p className="font-body-md text-outline">{item.description}</p>
                    </div>
                    </AnimatedContent>
                ))}
            </div>
        </section>
    )
}
