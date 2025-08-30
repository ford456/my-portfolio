'use client'

import { React, useState } from 'react'

import ProjectDatas from '../../datas/ProjectData'; // นำเข้าข้อมูลจาก ProjectData

import Card from '../../components/Card'; // นำเข้าคอมโพเนนต์ Card

import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import AnimatedContent from '../../components/AnimatedContent';



export default function ArtPro() {

  const Datas = ProjectDatas; // นำเข้าข้อมูลจาก ProjectData
  const [showAll, setShowAll] = useState(false); // ควบคุมการแสดงสินค้า
  const [searchTerm, setSearchTerm] = useState(""); // เก็บค่าค้นหา
  const [filterType, setFilterType] = useState("all");
  // 🔸 ประกาศ state
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");

  // 🔹 ดึง tag ทั้งหมด
  const allTags = Array.from(
    new Set(
      Datas.flatMap(data => Object.values(data.tag || {}))
    )
  );
  const allskills = Array.from(
    new Set(
      Datas.flatMap(data => Object.values(data.skill || {}))
    )
  );

  // 🔸 ฟิลเตอร์ข้อมูลตาม search และ tag
  const searchedProducts = Datas.filter((product) => {
    const search = searchTerm.toLowerCase();
    const tags = Object.values(product.tag || {}).map(t => t.toLowerCase());

    const tagMatch = selectedTag === "all" || tags.includes(selectedTag.toLowerCase());

    const skills = Object.values(product.skill || {}).map(t => t.toLowerCase());

    const skillMatch = selectedSkill === "all" || skills.includes(selectedSkill.toLowerCase());

    const keywordMatch =
      product.title?.toLowerCase().includes(search) ||
      tags.some(tag => tag.includes(search)) ||
      skills.some(skill => skill.includes(search));

    return tagMatch && skillMatch && keywordMatch;
  });

  // 🔹 เรียงข้อมูล A -> Z
  const sortedDatas = searchedProducts.slice().sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number);
    const [dayB, monthB, yearB] = b.date.split('/').map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA); // month ต้อง -1 เพราะ JS นับเดือนจาก 0
    const dateB = new Date(yearB, monthB - 1, dayB);

    return dateB - dateA; // ใหม่ → เก่า
  });
  {/*const sortedSkill = searchedProducts.slice().sort((a, b) => a.skill.localeCompare(b.skill)); //// เรียงข้อมูลตามชื่อ*/ }

  // 🔹 แสดง 6 ชิ้นแรก ถ้า showAll เป็น false
  const displayedProducts = showAll ? sortedDatas : sortedDatas.slice(0, 6);

  return (




    <div className='bg-none container mx-auto max-w-fit 2xl:max-w-[1320px] pt-20'>
      <AnimatedContent
        className=''
        distance={80}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={200}>
        <h1 className="text-7xl font-medium text-center p-3 pb-6 my-10" >Projects</h1>
        {/* 🔍 กล่องค้นหา */}
        <div className='flex flex-row justify-center items-center my-2'>
          <IoSearch className='pointer-events-none relative left-8 text-xl fill-gray-400' />
          <input
            className="static text-gray-300 w-[85%] h-[40px] border-2 border-gray-300 rounded-xl p-2 pl-10 focus:outline-[#c1788b] focus:outline-offset-2"
            type="text"
            placeholder='ค้นหาด้วยชื่อผลงาน หรือประเภท หรือ Skills'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedTag("all");     // 🔹 reset tag
              setSelectedSkill("all");   // 🔹 reset skill
            }}
          />
        </div></AnimatedContent>

      <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6  px-5 md:px-0 bt-5">
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
          delay={500}>
          <div className='px-5 pl-10 2xl:pl-0 pr-5 md:border-r-2 2xl:pr-10 pt-3 my-10'>


            {/* 🔸 ปุ่มกรองประเภท */}
            <div className='flex justify-center flex-wrap gap-2 mt-5  md:px-0'>
              {["all", ...allTags].map((type) => (
                <button
                  key={type}
                  onClick={() => { setSelectedTag(type); setSelectedSkill("all"); }}
                  className={`text-xs lg:text-sm px-4 py-2 rounded-full  ${filterType === type ? " outline-2 outline-white focus:outline-blue-400 text-white focus:text-blue-400" : " outline-2 outline-white focus:outline-blue-400 text-white focus:text-blue-400"
                    }`}
                >
                  {type === "all" ? "ทั้งหมด" : type}
                </button>
              ))}
            </div>
            {/* 🔸 ปุ่มกรองประเภท skill */}
            <div className="">
              <div className=" pt-15 ">
                <h2 className="text-xl">Skills</h2>
              </div>
              <hr />
            </div>

            <div className='flex justify-center flex-wrap gap-2 mt-3  md:px-0'>
              {[...allskills].map((type) => (
                <button
                  key={type}
                  onClick={() => { setSelectedSkill(type); setSelectedTag("all"); }}
                  className={`text-xs lg:text-sm px-4 py-2 rounded-full border ${filterType === type ? "outline-2 outline-white focus:outline-pink-400 text-white focus:text-pink-400" : "outline-2 outline-white focus:outline-pink-400 text-white focus:text-pink-400"
                    }`}
                >
                  {type === "all" ? "ทั้งหมด" : type}
                </button>
              ))}
            </div>
          </div>
        </AnimatedContent>
        <sup className='md:col-span-3 lg:col-span-5 max-w-auto px-3'>

          {/* 🔸 แสดงสินค้า  */}
          <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-x-6 px-5 mt-10'>
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <AnimatedContent
                  key={product.id}
                  className=''
                  distance={80}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={500}>
                  <Link href={`/projects/${product.id}`} target='_parent'>
                    <Card data={product} 
                    textClassName='text-xs'/>
                  </Link></AnimatedContent>
              ))
            ) : (
              <p className="md:col-2 text-center text-red-500 py-10">ไม่พบข้อมูลที่ตรงกับ "{searchTerm}"</p>
            )}
          </div>

          {/* 🔻 ปุ่มดูเพิ่มเติม / แสดงน้อยลง */}
          {
            sortedDatas.length > 6 && (
              <div className="text-center my-5  hover:text-blue-500">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-[#0000] outline-[#FFFFF] cursor-pointer outline-2 text-[#FFFFF] px-4 py-4 rounded-full">
                  {showAll ? "แสดงน้อยลง" : "ดูเพิ่มเติม"}
                </button>
              </div>
            )
          }
        </sup>
      </main>
    </div >
  );
}

;
