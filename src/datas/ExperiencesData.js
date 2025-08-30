import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, } from "react-icons/fa6";

export const ExperiencesData = [
  {
    title: "MAIDER",
    content: (
      <div>
        <p
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          Motion Graphics | 4 month
        </p>
        <p
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          พฤษภาคม - สิงหาคม 2568
        </p>
        
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          ออกแบบและจัดทำสื่อภาพเคลื่อนไหว (motion graphic) โดยพัฒนาจากผลงาน Artwork ที่จัดทำโดยฝ่าย Graphic designer พร้อมทั้งดำเนินการปรับขนาดสื่อ (Resize) ให้เหมาะสมกับสัดส่วนและความละเอียดของจอ LED หลากหลายรูปแบบที่ใช้ในการนำเสนอผลงาน
        </li>
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          รับผิดชอบดูแลการอัปโหลดและจัดเรียงสื่อภาพเข้าสู่ระบบควบคุมการแสดงผล เพื่อให้การนำเสนอผ่านจอ LED เป็นไปอย่างมีประสิทธิภาพ
        </li>
        
        
        <div className="grid grid-cols-1 lg:grid  lg:grid-cols-2 gap-4">
          <iframe className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' 
          src="https://www.youtube.com/embed/CL4FeuiAmjk?si=0wQPsMKaM3caBVuf" 
          title="YouTube video player" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
          <iframe className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' 
          src="https://www.youtube.com/embed/uKjj6--QaoM?si=lBVwbhf6iu9YHRUa" 
          title="YouTube video player" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
          
          <iframe className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' 
          src="https://www.youtube.com/embed/Q5moevzm9oE?si=WY8tpAg7f_cV7hvU" 
          title="YouTube video player" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
          <iframe className='rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' 
          src="https://www.youtube.com/embed/X0Sx3ryleXQ?si=z2JmQUnx2BPQ4meG" 
          title="YouTube video player" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
          </div>
      </div >
    ),
  },
  {
    title: "The Pixel One Production Co.,Ltd",
    content: (
      <div>
        <p
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          Motion Graphics | 4 month
        </p>
        <p
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          2567 - 2568
        </p>
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          Key Visual on Stage Event
        </li>
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          Motion Logo
        </li>
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          Motion Game
        </li>
        <div
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 mt-5 flex flex-col gap-2">
          <h1 className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal ">
            Contact:
            </h1>


          <Link href="https://web.facebook.com/PX1EVENT" target='_blank' className='hover:text-blue-400 hover:underline hover:underline-offset-5 indent-2 ' >
            <div className="flex flex-row ">
              <FaFacebook className="text-xl " />
              PIXEL1EVENT </div>
          </Link>

          
            <Link href="https://web.facebook.com/boostup.entertraining" target='_blank' className='hover:text-blue-400 hover:underline hover:underline-offset-5 indent-2 ' >
              <div className="flex flex-row ">
                <FaFacebook className="text-xl" /> Boostup Entertraining</div>
            </Link>
          
        </div >
        <div className="grid grid-cols-1 lg:grid  lg:grid-cols-2 gap-4">
          <img
            src="/gif/MotionBU.gif"
            alt="Motione Logo BoostUp"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <video
            src="/gif/KVLT01.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            alt="Kv Motion LinQTec"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <video
            src="pj/VD/PX.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            alt="Kv Motion LinQTec"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <video
            src="pj/VD/KVDM.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            alt="Kv Motion LinQTec"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />

        </div>
      </div >
    ),
  },
  {
    title: "All in Design - CG Thesis Exibition 2024",
    content: (
      <div>
        <p
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          ฝ่ายแผนงานนิทรรศการ และฝ่ายสื่อสารองค์กร | 4 month
        </p>
        <p
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          มิถุนายน - กันยายน 2567
        </p>
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          วางแผนการจัดนิทรรศการ แก้ไขปัญหาต่าง ๆ
        </li>
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal ">
          ช่วยออกแบบสื่อประชาสัมพันธ์ต่าง ๆ
        </li>
        <li
          className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          ออกแบบเว็บไซต์นิทรรศการ
        </li>
        <div className="grid grid-cols-1 lg:grid  lg:grid-cols-2 gap-4">
          <img
            src="/pj/img/all1.jpeg"
            alt="All in Design"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          <img
            src="/pj/img/all1-2.JPG"
            alt="All in Design"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          {/* <video
                 src="/gif/KVLT01.mp4"
                 autoPlay
                 loop
                 muted
                 alt="Kv Motion LinQTec"
                 width={500}
                 height={500}
                 className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
                */}
        </div>
      </div>
    ),
  },
]
