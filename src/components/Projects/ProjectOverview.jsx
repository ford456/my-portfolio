import React from 'react'
import { TbTags } from "react-icons/tb";

import { TagColorMap } from '../../components/Card';

function ProjectOverview({ data }) {

        const tagColorMap = TagColorMap[0].tagColorMap;
    const skillColorMap = TagColorMap[1].SkillColorMap;

    return (
        <section
            className="mt-section-gap-mobile md:mt-section-gap-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto bg-[#0a2c43] py-20 rounded-3xl border border-white/5">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-16 px-6">
                {/* <!-- The Challenge --> */}
                <div className="space-y-6 col-span-2">
                    <div className="w-12 h-1 bg-electric-blue"></div>
                    <h3 className="font-headline-md text-headline-md text-white">Project Overview</h3>
                    <p className="font-body-md text-body-md text-soft-gray indent-12 px-5">
                        {data.description}
                    </p>

                </div>
                {/* <!-- The Solution --> */}

                <div>
                    <ul className="space-y-4 pt-4 ">
                        {data.tags?.map((items, index) => (
                            <li key={index} className={`flex items-start gap-2 ${tagColorMap[items] || " outline-gray-300"}`}>
                                <TbTags className="self-center text-xl" />
                                <span className="">{items}</span>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className=''>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {data.skills?.map((skill, i) => (
                            <div key={i}
                                className="bg-primary p-6 rounded-xl border border-white/5">
                                <div className={`${skillColorMap[skill] || " outline-gray-300"} font-bold text-center text-xl `}>{skill}</div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectOverview
