'use client'
import * as React from 'react'
import {useState} from 'react'
 

import { MdOutlineDateRange } from "react-icons/md";

import Link from 'next/link';





import AnimatedContent from '../../../components/AnimatedContent';
import ProjectOverview from '../../../components/Projects/ProjectOverview';
import HeroProject from "../../../components/Projects/Heroproject"
import SectionRenderer from '../../../components/Projects/SectionRenderer';
// import { useRouter } from 'next/router'; // ใช้สำหรับการนำทาง
// import { useParams } from 'next/navigation'; // ใช้สำหรับดึง params จาก URL   

import ProjectViewTracker from "../../../components/Analytics/ProjectViewTracker";


export default function ProjectClient({ product }) {




    // // 🔹 รวมข้อมูลของผู้จัดทำเป็น Array และกรองเฉพาะคนที่มีชื่อ
    // const creators = [
    //     { name: product.title, img: product.thumbnail },

    // ].filter(person => person.img); // ลบค่าที่เป็น undefined หรือ ""
    // const Video = [
    //     { name: product.title, vd: product.video },
    //     { name: product.title, vd: product.video2 },

    // ].filter(person => person.vd); // ค่าที่เป็น undefined หรือ ""
    // // 🔹 กำหนด grid-cols ตามจำนวนผู้จัดทำ
    // const gridCols = creators.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3";
    // const VideoNum = Video.length === 0 ? "hidden" : "";
    // const VDgridCols = Video.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2";





    return (
        <>
        <ProjectViewTracker project={product} />
        <div className='bg-primary text-white font-body-md overflow-x-hidden'>
            <main className='py-20'>
                
                <HeroProject section={product} />
                
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 100, friction: 50 }}
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.2}
                    delay={600}>
                    <ProjectOverview data={product} />
                </AnimatedContent>
                {Array.isArray(product?.section) &&
                product.section?.filter(section => section != null)
                .map((section, index) => (

                    <SectionRenderer
                        key={section.id ?? index}
                        section={section}
                    />
                ))}

                <div className='flex flex-row justify-center items-center  '>
                    <Link href={`/projects`} className=" mt-6 hover:bg-blue-600 hover:outline-0 px-4 py-2 rounded-md outline-2 text-gray-700 hover:text-white duration-500 ease-in-out ">Go Back</Link>
                </div>
            </main>
        </div>
        </>
    )
}
