import React from 'react'
import {Skills} from "../../datas/Skills"

export default function SkillsAbout() {
    return (
        <section className="bg-primary py-section-gap-mobile md:py-section-gap-desktop text-white" id="skills">
            <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
                <div className="text-center mb-16">
                    <span className="font-label-caps text-label-caps text-electric-blue mb-4 block">Expertise</span>
                    <h2 className="font-headline-lg text-headline-lg">Core Skills &amp; Tools</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {Skills.map((item, i) => (
                        <div key={i}
                            className="skill-chip px-8 py-3 bg-white/10 rounded-full font-label-caps text-label-caps hover:bg-electric-blue transition-all cursor-default">
                            {item.Sname}</div>
                    ))}

                </div>
            </div>
        </section>
    )
}
