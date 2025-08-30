import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";

export const TagColorMap = [{
    tagColorMap: {
        "Graphic Design": "outline-blue-500",
        "Motion Graphic": "outline-pink-400",
        "UI/UX": "outline-green-500",
        "Font-end": "outline-yellow-400",
        "3D Modeling": "outline-amber-300",
        "Brand Design": "outline-red-500",
        "Drawing": "outline-purple-500",
        "Game Design": "outline-emerald-500",
        "Video Editor": "outline-cyan-500",
        "Visual Effect": "outline-sky-500",
        "Camera Man": "outline-teal-500",
        "Photography": "outline-rose-500",
        "AI": "outline-orange-500",
    },
},
{
    SkillColorMap: {
        "Adobe Illustrator": "outline-blue-500",
        "Adobe After Effects": "outline-pink-400",
        'Adobe Premiere Pro': "outline-cyan-500",
        "Adobe XD": "outline-rose-500",
        "Adobe Lightroom": "outline-green-500",
        "Blender": "outline-amber-300",
        "Figma": "outline-green-500",
        "Javascript": "outline-yellow-400",
        "Procreate": "outline-red-500",
        "Adobe Photoshop": "outline-purple-500",
        "Maya": "outline-emerald-500",
        "AI Generate": "outline-sky-500",

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
                className="flex flex-col outline-0 outline-blue-400 mt-10 mb-2 mx-auto h-auto md:min-h-[400px]  max-w-[300px] 2xl:max-w-[1320px] rounded-4xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:outline-2 hover:outline-blue-400 hover:outline-offset-4"
            >
                <img
                    className="rounded-lg object-cover h-50 md:h-44 lg:h-60 w-full max-h-[200px] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    src={data.img1}
                    alt={data.title}
                />
                <h3 className="text-[#FFFFF] text-start font-medium text-xl indent-8 pb-2 pt-6">
                    {data.title}
                </h3>

<hr/>
                {/* 🔹 ดึง tag แบบ dynamic */}
                <ul className="my-2 justify-start items-center px-2 flex flex-wrap md:flex text-sm md:flex-row gap-3">
                    <div className='flex flex-row items-center gap-1 py-3 pl-2'>
                        <MdOutlineDateRange className=' size-4' />
                        <h6 className='text-[10px] '>{data.date}</h6>
                    </div>
                    {data.tag &&
                        Object.values(data.tag).map((tagName, index) => (
                            <li key={index}>
                                <h6 className={`${textClassName} max-w-auto p-2 px-2 rounded-xl outline-2 ${tagColorMap[tagName] || " outline-gray-300"}`}>
                                    {tagName}
                                </h6>

                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}


