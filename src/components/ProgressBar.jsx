
'use client'
import React, { useState, useEffect, useRef } from 'react';


const ProgressBar = ({ progress,
  className = "",
  FontZise = "",
  level = ""

}) => {

 const [visible, setVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-row items-center gap-2" ref={barRef}>

      <div className={` bg-gray-200 rounded-full ${className} relative overflow-clip`}>
        <div
          style={{ width: visible ? `${progress}%` : '0%' }}
          className={` static bg-linear-to-r from-blue-900 to-[#62eeff] h-full rounded-full flex items-center justify-center transition-all delay-1000 duration-1000 ease-in-out`}

        />
        {/*${progress <= 'medium'? "text-black":"text-white" }*/}

        <div className={`${progress <= 50 ? "text-black" : "text-black sm:text-white"} ${FontZise} absolute top-0.5 left-4/12  z-10`}>
          {level}
        </div>
      </div>
      <h6 className={` ${FontZise} w-auto`}>
        {progress}%
      </h6>

    </div>
  );
};

export default ProgressBar;
