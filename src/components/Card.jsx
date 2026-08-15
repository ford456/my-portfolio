import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";

export const TagColorMap = [{
    tagColorMap: {
        "Graphic Design": "text-blue-500",
        "Motion Graphic": "text-pink-400",
        "UI/UX": "text-green-500",
        "Font-end": "text-yellow-400",
        "3D Modeling": "text-amber-300",
        "Brand Design": "text-red-500",
        "Drawing": "text-purple-500",
        "Game Design": "text-emerald-500",
        "Video Editor": "text-cyan-500",
        "Visual Effect": "text-sky-500",
        "Camera Man": "text-teal-500",
        "Photography": "text-rose-500",
        "Ganerative AI": "text-orange-500",
        "Animation": "text-fuchsia-500",
        "Web Design": "text-lime-500",
    },
},
{
    SkillColorMap: {
        "Adobe Illustrator": "text-blue-500",
        "Adobe After Effects": "text-pink-400",
        'Adobe Premiere Pro': "text-cyan-500",
        "Adobe XD": "text-rose-500",
        "Adobe Lightroom": "text-green-500",
        "Blender": "text-amber-300",
        "Figma": "text-green-500",
        "Javascript": "text-yellow-400",
        "Procreate": "text-red-500",
        "Adobe Photoshop": "text-purple-500",
        "Maya": "text-emerald-500",
        "AI Generate": "text-sky-500",

    }
}
]

export default function Card({
    data,
    textClassName = '',
}) {

    const tagColorMap = TagColorMap[0].tagColorMap; // ดึง tagColorMap จาก props

    return (
        <div>
            <div
                key={data.id}
                className="flex flex-col outline-0 outline-blue-400 mt-10 mb-2 mx-auto h-fit md:min-h-[400px]  max-w-[300px] 2xl:max-w-[1320px]
                 rounded-xl overflow-hidden hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:outline-2 hover:outline-blue-400 hover:outline-offset-4 group"
            >
                <img
                    className="rounded-lg object-cover h-50 md:h-44 lg:h-60 w-full max-h-[200px] shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                    src={data.thumbnail}
                    alt={data.title}
                />
                <div className='flex flex-row items-center gap-1 py-3 px-2 text-white'>
                        <MdOutlineDateRange className=' size-4' />
                        <h6 className='text-[10px] '>{data.date}</h6>
                    </div>
                <ul className="mb-2 justify-start items-center px-1 flex flex-wrap md:flex text-sm md:flex-row gap-x-1">
                    
                    {/* 🔹 ดึง tag แบบ dynamic */}
                    {data.tags &&
                        Object.values(data.tags)
                            .sort((a, b) => a.localeCompare(b))
                            .map((tagName, index) => (
                                <li key={index}>
                                    <h6 className={`${textClassName} text-[10px] max-w-auto py-0.5 px-2  ${tagColorMap[tagName] || " text-gray-100"}`}>
                                        {tagName}
                                    </h6>

                                </li>
                            ))}
                </ul>
                <h3 className=" text-white text-start font-medium text-xl indent-8 pb-2 pt-2 px-2 group-hover:text-blue-500 ">
                    {data.title}
                </h3>

            </div>
        </div>
    );
}


