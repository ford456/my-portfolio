'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import { SkillData } from '../datas/SkillData';

import ProgressBar from './ProgressBar';
import AnimatedContent from './AnimatedContent';
import GradientText from './GradientText';

export default function HomeHeader() {
  const [showbar, setShowbar] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const target = event.target.closest(".skill-item");
      if (target) {
        setShowbar(target.dataset.id);
      } else {
        setShowbar(null);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header className='bg-linear-to-b from-black to-black/0 ax-w-auto min-h-[400px] h-auto pt-10 py-10 overflow-clip'>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={300}
      >

        <div className='container justify-center mx-auto px-5 p-5 pt-3 md:pt-0'>

          <h1 className='text-2xl md:text-4xl font-semibold text-center lg:pr-8 pt-4'>
            My <span className='text-blue-500'>Skills</span>
          </h1>

          <div className='grid grid-cols-1 lg:grid-cols-3 px-5 2xl:px-30'>
            <div className='grid grid-cols-2 col-span-2 md:grid md:grid-cols-3 gap-5 lg:gap-10 px-5 lg:px-20 pt-5 justify-center '>
              {SkillData.map(item => (
                <div
                  key={item.id}
                  data-id={item.id}
                  className={`${showbar === String(item.id) ? "scale-110 " : "scale-100 "} transition-scale duration-200 ease-in-out skill-item bg-none w-auto h-auto md:max-h-auto md:max-w-[150px] mb-10 mt-5 mx-auto md:mx-0 pt-5 container flex flex-col items-center  `}>
                  <img
                    src={item.img || "/default-image.png"}
                    alt={item.Sname}
                    className='h-auto w-[80px] md:h-auto md:w-[100px] rounded-2xl sm:rounded-4xl'
                  />
                  <ul className={`${showbar === String(item.id) ? "translate-y-0 flex " : "translate-y-full hidden "}  transition-transform duration-300 flex-col items-center justify-center`}>
                    <h1 className='text-white text-xs lg:text-sm 2xl:text-base m-2'>{item.Sname}</h1>
                    <ProgressBar
                      progress={item.quality}
                      level={item.level}
                      className='w-20 h-5 md:w-30 md:h-5'
                      FontZise='text-xs md:text-sm font-bold'
                    />
                  </ul>
                </div>
              ))}

            </div>
            <div className='mt-15'>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={true}
                className="max-h-[400px]  lg:mt-15 lg:mr-5 2xl:mr-20 2xl:right-5"
              >
                <div className=' container flex flex-col bg-none outline-2 outline-offset-4 md:max-h-[600px] lg:h-[400px] max-w-[300px] rounded-4xl p-5 mx-auto my-10 lg:my-10 2xl:m-10 justify-center items-center' >
                  <div className='pr-0 2xl:pr-0 '>
                    <div className='text-2xl lg:text-3xl 2xl:text-4xl text-center'>
                      <h2>Less than <br /><span className='text-4xl lg:text-7xl 2xl:text-8xl font-bold'>1</span> <br />Year <br />Experience Working, but eager to learn.</h2>
                    </div>

                  </div>
                </div>
              </GradientText>
            </div>

          </div>
        </div>
      </AnimatedContent>
    </header >
  );
}

