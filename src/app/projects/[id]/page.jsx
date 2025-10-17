'use client'
import * as React from 'react'
import { useEffect } from 'react';

import { MdOutlineDateRange } from "react-icons/md";

import Link from 'next/link';

import ProjectDatas from '../../../datas/ProjectData'; // นำเข้าข้อมูลจาก ProjectData';

import { TagColorMap } from '../../../components/Card';
import AnimatedContent from '../../../components/AnimatedContent';
// import { useRouter } from 'next/router'; // ใช้สำหรับการนำทาง
// import { useParams } from 'next/navigation'; // ใช้สำหรับดึง params จาก URL   

export default function Details({ params }) {


    const { id } = React.use(params)
    const product = ProjectDatas.find((p) => p.id === id); // ค้นหาข้อมูลที่ตรงกับ id

    if (!product) return <h1 className='cursor-default text-6xl font-bold mt-20 py-30 p-10 flex justify-center ' >PROJECT NOT FOUND </h1>;

    // 🔹 รวมข้อมูลของผู้จัดทำเป็น Array และกรองเฉพาะคนที่มีชื่อ
    const creators = [
        { name: product.title, img: product.img1 },
        { name: product.title, img: product.img2 },
        { name: product.title, img: product.img3 },
        { name: product.title, img: product.img4 },
        { name: product.title, img: product.img5 },
        { name: product.title, img: product.img6 },
        { name: product.title, img: product.img7 },
    ].filter(person => person.img); // ลบค่าที่เป็น undefined หรือ ""
    const Video = [
        { name: product.title, vd: product.video },
        { name: product.title, vd: product.video2 },

    ].filter(person => person.vd); // ค่าที่เป็น undefined หรือ ""
    // 🔹 กำหนด grid-cols ตามจำนวนผู้จัดทำ
    const gridCols = creators.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3";
    const VideoNum = Video.length === 0 ? "hidden" : "";
    const VDgridCols = Video.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2";

    const tagColorMap = TagColorMap[0].tagColorMap;
    const skillColorMap = TagColorMap[1].SkillColorMap;

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);
    return (

        <div className="relative mx-auto p-5 md:p-20 max-w-[1320px] pt-25">
            <AnimatedContent
                className=''
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={300}>
                <h1 className="cursor-default text-lg md:text-3xl font-medium mb-5 md:mx-2 indent-15 whitespace-pre-line md:pt-15">{product.title}</h1></AnimatedContent>

            <AnimatedContent
                className=''
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={400}>
                <ul className="py-5 justify-start mx-auto px-5 flex flex-wrap md:flex text-sm md:flex-row gap-5">
                    {product.tag &&
                        Object.values(product.tag).map((tagName, index) => (
                            <li key={index}>
                                <h6 className={`max-w-auto p-2 px-2 rounded-xl outline-2 ${tagColorMap[tagName] || " outline-gray-300"}`}>
                                    {tagName}
                                </h6>

                            </li>
                        ))}
                    {/* แสดงวันที่สร้างผลงาน */}
                    <div className="flex flex-row items-center gap-2 mt-2 md:mt-0">
                        <MdOutlineDateRange className=' size-6' />
                        <h6 className="cursor-default text-gray-100 text-md md:text-xl  text-justify "  > {product.date}</h6>
                    </div>

                </ul></AnimatedContent>

            <AnimatedContent
                className=''
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={450}>
                <div className={`cursor-default grid ${gridCols} gap-10 md:gap-5 justify-center p-5`}>
                    {creators.map((creator, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img className="w-5/6 h-auto  object-cover mb-3 rounded-2xl shadow-md" src={creator.img} alt={creator.name} />
                        </div>
                    ))}

                    <div className={`grid ${VDgridCols} gap-2 items-center`}>
                        {Video.map((Vd, index) => (
                            <div key={index} className={`${VideoNum} bg-none max-w-4xl mx-auto rounded-4xl overflow-clip my-5`}>
                                <video className='w-full h-auto object-cover max-h-[450px]'
                                    autoPlay
                                    loop
                                    playsInline
                                    controls
                                    controlsList="nodownload"
                                    disablePictureInPicture
                                    src={Vd.vd} />
                            </div>))}
                    </div>

                </div></AnimatedContent>



            {/* แสดงรายละเอียด */}
            <AnimatedContent
                className=''
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={300}>
                <h6 className="cursor-default text-gray-300 text-md md:text-xl my-10 indent-15 text-justify whitespace-pre-line hyphens-auto" lang="th" >{product.description}</h6>
            </AnimatedContent>
            <AnimatedContent
                className=''
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={300}>
                {product.content}
            </AnimatedContent>
            <AnimatedContent
                className=''
                distance={80}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={300}>
                <h3 className='cursor-default text-lg md:text-3xl font-medium mb-3 md:mx-2  whitespace-pre-line pt-20'>Skills</h3>
                <hr className='pb-2' />
                <ul className="py-5 justify-start mx-auto px-5 flex flex-wrap md:flex text-sm md:flex-row gap-5">
                    {product.skill &&
                        Object.values(product.skill).sort((a, b) => a.localeCompare(b)).map((skillName, index) => (
                            <li key={index}>
                                <h6 className={`max-w-auto p-2 px-2 rounded-xl outline-2 ${skillColorMap[skillName] || " outline-gray-300"}`}>
                                    {skillName}
                                </h6>

                            </li>
                        ))}
                </ul>
            </AnimatedContent>
            {/* ปุ่มกลับ */}
            <div className='flex flex-row justify-center items-center  '>
                <Link href={`/projects`} className=" mt-6 hover:bg-blue-600 hover:outline-0 px-4 py-2 rounded-md outline-2 text-white ">Go Back</Link>
            </div>

        </div>
    )
}
