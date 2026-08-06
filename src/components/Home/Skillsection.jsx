import React from 'react'
import { MdOutlineAutoAwesomeMotion, MdOutlineBrush, MdOutlineMovie, } from "react-icons/md";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { TbHexagon3D, TbCube3dSphere } from "react-icons/tb";

import { Skills } from '../../datas/Skills';
import AnimatedContent from '../AnimatedContent';


export default function Skillsection() {
  return (

    <section className="py-section-gap-mobile md:py-section-gap-desktop bg-[#e2e2e2] overflow-hidden" id="skills">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter transition-all duration-1000 opacity-100 translate-y-0">
        <div className="mb-16 text-center">
          <div className="font-label-caps text-label-caps text-blue-700 mb-2 block uppercase" >Expertise</div>
          <h2 className="font-headline-lg text-headline-lg text-deep-navy ">Technical Proficiency</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5">

          {Skills.map((item) => (
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={300}
              key={item.id}
            >
              <div data-id={item.id} className={`bg-white p-3 rounded-xl h-full text-deep-navy outline-1 outline-gray-500/20 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out skill-chip-hover cursor-default group`}>
                <div className="w-16 h-16 text-3xl rounded-full bg-gray-200 flex items-center justify-center overflow-clip">
                  {item.icon === 'MdOutlineBrush' && <MdOutlineBrush />}
                  {item.icon === 'MdOutlineAutoAwesomeMotion' && <MdOutlineAutoAwesomeMotion />}
                  {item.icon === 'MdOutlineMovie' && <MdOutlineMovie />}
                  {item.icon === 'DiPhotoshop' && <DiPhotoshop />}
                  {item.icon === 'DiIllustrator' && <DiIllustrator />}
                  {item.icon === 'TbHexagon3D' && <TbHexagon3D />}
                  {item.icon === 'TbCube3dSphere' && <TbCube3dSphere />}
                </div>
                <div className="font-headline-md text-[18px] text-center group-hover:text-white duration-300 ease-in-out">{item.Sname}</div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>

    </section>

  )
}
