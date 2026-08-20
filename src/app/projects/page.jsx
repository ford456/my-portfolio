'use client'

import { React, useState, useEffect } from 'react'

// import ProjectDatas from '../../datas/ProjectData'; // นำเข้าข้อมูลจาก ProjectData

import Card from '../../components/Card'; // นำเข้าคอมโพเนนต์ Card

import { useSearchParams, useRouter } from 'next/navigation';

import { IoSearch } from "react-icons/io5";
import Link from 'next/link';
import AnimatedContent from '../../components/AnimatedContent';


// 👇 helper ฟังก์ชันเรียงลำดับ
const sortKeepAllFirst = (arr) =>
  [...arr].sort((a, b) => {
    const A = String(a);
    const B = String(b);

    // 1. 'all' ต้องอยู่ก่อนเสมอ
    if (A.toLowerCase() === "all") return -1;
    if (B.toLowerCase() === "all") return 1;

    const isNumA = /^\d+/.test(A);
    const isNumB = /^\d+/.test(B);

    // 2. ถ้า A เป็นตัวเลข แต่ B ไม่ใช่ → A ไปท้าย
    if (isNumA && !isNumB) return 1;
    if (!isNumA && isNumB) return -1;

    // 3. ถ้า A และ B เป็นเลขทั้งคู่ → เรียงตามค่าตัวเลขจริง
    if (isNumA && isNumB) {
      return parseInt(A, 10) - parseInt(B, 10);
    }

    // 4. ตัวอักษร → เรียง A-Z
    return A.localeCompare(B, undefined, { sensitivity: "base" });
  });

//เลื่อนขึ้นบนแบบนุ่มนวล

// เลื่อนไปที่การ์ดตัวแรกแบบ ease-in-out จริง ๆ
const scrollToFirstCard = () => {
  if (typeof window === "undefined") return;

  const target = document.getElementById("first-card");
  if (!target) return;

  const headerOffset = 80; // ปรับตามความสูง navbar
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const distance = end - start;
  const duration = 600; // ms
  let startTime = null;
  if (Math.abs(distance) < 4) return; // แทบไม่ต้องเลื่อน
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (ts) => {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};



export default function ArtPro() {
  const [loading, setLoading] = useState(true)
  const [projectDatas, setProjectDatas] = useState([]);


  useEffect(() => {
    async function getProjects() {
      
      try {
        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const result = await response.json();


        // ถ้า API ส่ง { data: [...] }
        setProjectDatas(result.data);

        // ถ้า API ส่ง [...] โดยตรง ให้ใช้:
        // setProjectDatas(result);
      } catch (error) {
        console.error(error);
      }  finally {
      setLoading(false)
    }
    }

    getProjects();
  }, []);


  const Datas = projectDatas; // นำเข้าข้อมูลจาก ProjectData
  const [showAll, setShowAll] = useState(false); // ควบคุมการแสดงสินค้า

  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedTag = searchParams.get("tag") || "all";
  const selectedSkill = searchParams.get("skill") || "all";
  const searchTerm = searchParams.get("search") || "";
  const deslugify = (str) =>
    str?.replace(/-/g, " ").toLowerCase();



  // 🔹 ดึง tag ทั้งหมด
  const allTags = Array.from(
    new Set(
      Datas.flatMap(data => Object.values(data.tags || {}))
    )
  );
  const allskills = Array.from(
    new Set(
      Datas.flatMap(data => Object.values(data.skills || {}))
    )
  );
  const slugify = (str) =>
    str.toLowerCase().replace(/\s+/g, "-");
  const tagSlug = selectedTag !== "all" ? slugify(selectedTag) : "";
  const skillSlug = selectedSkill !== "all" ? slugify(selectedSkill) : "";

  // 🔸 ฟิลเตอร์ข้อมูลตาม search และ tag
  const searchedProducts = Datas.filter((product) => {
    const search = searchTerm.toLowerCase();
    const tags = Object.values(product.tags || {}).map(t => t.toLowerCase());

    const tagMatch = selectedTag === "all" || tags.includes(selectedTag.toLowerCase());

    const skills = Object.values(product.skills || {}).map(t => t.toLowerCase());

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
  const displayedProducts = showAll ? sortedDatas : sortedDatas.slice(0, 12);

  const tagBtnBase =
    "text-xs lg:text-sm px-6 py-1.5 rounded-full border border-1 lg:border-2 transition-all duration-200 ease-out transform will-change-[transform,opacity]";

  const updateFilters = (updates) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    router.push(`/projects?${params.toString()}`, { scroll: false });
  };



if (loading) return <div className='h-dvh w-h-dvh'></div>
  
  return (



    <div className='bg-primary'>
      <div className='pt-32 pb-section-gap-desktop max-w-container-max mx-auto px-margin-mobile md:px-gutter '>
        <header className="mb-17">
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white mb-unit-4 max-w-4xl">
            Curated <span className="text-electric-blue">Masterpieces</span> of Digital Design.
          </h1>
          <p className="font-body-lg text-body-lg text-gray-100/60 max-w-2xl">
            A selection of my professional work ranging from high-fidelity motion graphics to strategic brand identities and interactive media.
          </p>
        </header>
        {/* 🔍 กล่องค้นหา */}
        <div className='flex flex-row items-center my-3'>
          <IoSearch className='pointer-events-none relative left-8 text-xl fill-white' />
          <input
            className="static text-white w-full h-[40px] border-2 border-white rounded-xl p-2 pl-10 focus:outline-blue-400 focus:outline-offset-4"
            type="text"
            placeholder='ค้นหาด้วยชื่อผลงาน หรือประเภท หรือ Skills'
            value={searchTerm}
            onChange={(e) => {
              updateFilters({
                search: e.target.value,
                tag: "all",
                skill: "all",
              });
            }}
          />
        </div>

        <div className='pl-5 '>


          {/* 🔸 ปุ่มกรองประเภท */}
          <div className='flex flex-wrap gap-2 mt-7  md:px-0'>
            {sortKeepAllFirst(["all", ...allTags]).map((type, index) => {
              const isActive = selectedTag === type;
              return (
                <AnimatedContent
                  className=''
                  distance={10}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 60, friction: 20 }}
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={index * 100}
                  key={type}>
                  <button

                    onClick={() => {
                      updateFilters({
                        tag: type,
                        skill: "all",
                      });
                      requestAnimationFrame(scrollToFirstCard);
                    }}
                    className={`${tagBtnBase} ` +
                      (isActive
                        ? " bg-blue-700 text-white border-white opacity-100 scale-100 "
                        : "bg-transparent text-white border-white hover:bg-white/10  scale-95")
                    }
                    aria-pressed={isActive}
                  >
                    {type === "all" ? "All" : type}
                  </button>
                </AnimatedContent>
              )
            })}
          </div>
          {/* 🔸 ปุ่มกรองประเภท skill
            <div className="">
              <div className=" pt-15 ">
                <h2 className="text-xl">Skills</h2>
              </div>
              <hr />
            </div>

            <div className='flex justify-center flex-wrap gap-2 mt-3  md:px-0'>
              {[...allskills].sort((a, b) => a.localeCompare(b)).map((type) => {
                const isActive = selectedSkill === type;
                return (
                  <button
                    key={type}
                    onClick={() => {
                      updateFilters({
                        skill: type,
                        tag: "all",
                      });
                      requestAnimationFrame(scrollToFirstCard);
                    }}
                    className={`${tagBtnBase} ` +
                      (isActive
                        ? " text-pink-700 border-pink-700 opacity-100 scale-100 "
                        : "bg-transparent border-black hover:text-pink-400 hover:border-pink-400 scale-95")
                    }
                    aria-pressed={isActive}
                  >
                    {type === "all" ? "ทั้งหมด" : type}
                  </button>
                )
              })}
            </div> */}
        </div>


        <main className="relative">



          {/* 🔸 แสดงสินค้า  */}
          <div className='grid max-md:grid-cols-1 max-lg:grid-cols-3 lg:grid-cols-4  gap-x-6 px-5 mt-10'>
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product, index) => {
                const path = product.slug

                return (
                  <div id={index === 0 ? "first-card" : undefined} key={product.id}>
                    <AnimatedContent
                      key={product.id}
                      className=''
                      distance={30}
                      direction="vertical"
                      reverse={false}
                      config={{ tension: 80, friction: 20 }}
                      initialOpacity={0}
                      animateOpacity
                      scale={1.1}
                      threshold={0.2}
                      delay={300}>
                      <Link href={`/projects/${path}`} target='_parent'>
                        <Card data={product}
                          textClassName='text-xs' />
                      </Link></AnimatedContent>
                  </div>
                );
              })
            ) : (
              <p className=" md:col-span-4 text-center text-red-500 py-10">ไม่พบข้อมูลที่ตรงกับ " {searchTerm} "</p>
            )}
          </div>

          {/* 🔻 ปุ่มดูเพิ่มเติม / แสดงน้อยลง */}
          {
            sortedDatas.length > 12 && (
              <div className="text-center pt-5  ">
                <button
                  onClick={() => {
                    const wasShowingAll = showAll;     // เก็บค่าเดิมไว้ก่อน
                    setShowAll(prev => !prev);

                    // เลื่อนขึ้นเฉพาะตอนที่ปุ่มกำลังแสดง "แสดงน้อยลง" (showAll === true)
                    if (wasShowingAll) {
                      // รอ React อัปเดต DOM ก่อนแล้วค่อยเลื่อน
                      requestAnimationFrame(() => requestAnimationFrame(scrollToFirstCard));
                    }
                  }}
                  className="bg-[#0000] outline-white cursor-pointer outline-2 text-white px-4 py-2 rounded-full hover:bg-blue-700 duration-600 ">
                  {showAll ? "แสดงน้อยลง" : "ดูเพิ่มเติม"}
                </button>
              </div>
            )
          }

        </main>
      </div >
    </div>
  );
}

;
