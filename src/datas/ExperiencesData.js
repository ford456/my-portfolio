import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, } from "react-icons/fa6";

export const ExperiencesData = [
  {
    title: "MAIDER CO.,Ltd",
    content: (
      <div>
        <p
          className=" text-xs md:text-sm font-normal ">
          Motion Graphics | 4 month
        </p>
        <p
          className=" text-xs md:text-sm font-normal mb-8">
          พฤษภาคม - สิงหาคม 2568
        </p>
        
        <li
          className=" text-xs md:text-sm font-normal ">
          ออกแบบและจัดทำสื่อภาพเคลื่อนไหว (motion graphic) โดยพัฒนาจากผลงาน Artwork ที่จัดทำโดยฝ่าย Graphic designer พร้อมทั้งดำเนินการปรับขนาดสื่อ (Resize) ให้เหมาะสมกับสัดส่วนและความละเอียดของจอ LED หลากหลายรูปแบบที่ใช้ในการนำเสนอผลงาน
        </li>
        <li
          className=" text-xs md:text-sm font-normal ">
          รับผิดชอบดูแลการอัปโหลดและจัดเรียงสื่อภาพเข้าสู่ระบบควบคุมการแสดงผล เพื่อให้การนำเสนอผ่านจอ LED เป็นไปอย่างมีประสิทธิภาพ
        </li>
        
        
        <div className="grid grid-cols-1 lg:grid  lg:grid-cols-2 gap-4 mt-5">
          <img
            src="https://img2.pic.in.th/pic/BK-F4-CAR.png"
            alt="BK F4 Car"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
          <img
            src="https://img5.pic.in.th/file/secure-sv1/SS-Bad-guy-2.png"
            alt="SS Bad guy 2"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
          <img
            src="https://img2.pic.in.th/pic/Mother-DAY.png"
            alt="Mather DAY"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
          <img
            src="https://img5.pic.in.th/file/secure-sv1/BK-TomJerry.png"
            alt="BK Tom&Jerry"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
        </div>
      </div >
    ),
  },
  {
    title: "The Pixel One Production Co.,Ltd",
    content: (
      <div>
        <p
          className=" text-xs md:text-sm font-normal ">
          Motion Graphics | 4 month
        </p>
        <p
          className=" text-xs md:text-sm font-normal mb-8">
          2567 - 2568
        </p>
        <li
          className=" text-xs md:text-sm font-normal ">
          Key Visual on Stage Event
        </li>
        <li
          className=" text-xs md:text-sm font-normal ">
          Motion Logo
        </li>
        <li
          className=" text-xs md:text-sm font-normal ">
          Motion Game
        </li>
        <div
          className=" text-xs md:text-sm font-normal mb-8 mt-5 flex flex-col gap-2">
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
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
          {/* <video
            src="/gif/KVLT01.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            alt="Kv Motion LinQTec"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" /> */}
          <iframe src="https://www.youtube.com/embed/Sj_YWC4ds_Q?si=myFDqoryIyPD1hAh&amp;controls=0" title="YouTube video player" allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" ></iframe>
          <iframe src="https://www.youtube.com/embed/IGq4hN6Xynw?si=uvsKJ3yaReL812Cm&amp;controls=0" title="YouTube video player" allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" ></iframe>
          <iframe src="https://www.youtube.com/embed/sh2nITCXpKE?si=ZB0OSVemnc75OEOU&amp;controls=0" title="YouTube video player" allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" ></iframe>
          {/* <video
            src="pj/VD/PX.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            alt="LOGO Motion Pixel One"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" /> */}
          {/* <video
            src="pj/VD/KVDM.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            disablePictureInPicture
            alt="Kv Motion LinQTec"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" /> */}

        </div>
      </div >
    ),
  },
  {
    title: "All in Design - CG Thesis Exibition 2024",
    content: (
      <div>
        <p
          className=" text-xs md:text-sm font-normal ">
          ฝ่ายแผนงานนิทรรศการ และฝ่ายสื่อสารองค์กร | 4 month
        </p>
        <p
          className=" text-xs md:text-sm font-normal mb-8">
          มิถุนายน - กันยายน 2567
        </p>
        <li
          className=" text-xs md:text-sm font-normal ">
          วางแผนการจัดนิทรรศการ แก้ไขปัญหาต่าง ๆ
        </li>
        <li
          className=" text-xs md:text-sm font-normal ">
          ช่วยออกแบบสื่อประชาสัมพันธ์ต่าง ๆ
        </li>
        <li
          className=" text-xs md:text-sm font-normal mb-8">
          ออกแบบเว็บไซต์นิทรรศการ
        </li>
        <div className="grid grid-cols-1 lg:grid  lg:grid-cols-2 gap-4">
          <img
            src="/pj/img/all1.jpeg"
            alt="All in Design"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
          <img
            src="/pj/img/all1-2.JPG"
            alt="All in Design"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
          {/* <video
                 src="/gif/KVLT01.mp4"
                 autoPlay
                 loop
                 muted
                 alt="Kv Motion LinQTec"
                 width={500}
                 height={500}
                 className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]" />
                */}
        </div>
      </div>
    ),
  },
]
