'use client'
import { useState } from 'react'
import React from 'react'
import Card from './Cerd'
import AnimatedContent from '../AnimatedContent'
import { Cerfiticates } from './../../datas/Cerfiticates';


export default function Certipage() {
    const [showAll, setShowAll] = useState(false); // ควบคุมการแสดงสินค้า

      // 🔹 เรียงข้อมูล A -> Z
  const sortedDatas = Cerfiticates.slice().sort((a, b) => a.title.localeCompare(b.title));

  // 🔹 แสดง 6 ชิ้นแรก ถ้า showAll เป็น false
  const displayedProducts = showAll ? sortedDatas : sortedDatas.slice(0, 6);

  return (
    <div>
      {/* 🔸 แสดงสินค้า */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-5 md:px-20  bt-5'>
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <AnimatedContent
              key={product.id}
              className=''
              distance={80}
              direction="vertical"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={300}>
                <Card data={product} />
            </AnimatedContent>
          ))
        ) : (
          <p className="md:col-span-2  text-center text-red-500 py-10">ไม่พบข้อมูลที่ตรงกัน</p>
        )}
      </div>

      {/* 🔻 ปุ่มดูเพิ่มเติม / แสดงน้อยลง */}
      {sortedDatas.length > 6 && (
        <div className="text-center my-5 hover:text-[#c1788b]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#0000] outline-[#FFFFF] outline-2 text-[#FFFFF] px-4 py-2 rounded-full">
            {showAll ? "แสดงน้อยลง" : "ดูเพิ่มเติม"}
          </button>
        </div>
      )}
      </div>
  )
}
