'use client'

import { useSprings, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

 function SplitText  ({
  text = [],
  className = "",
  delay = 120,
  animationFrom = { opacity: 0, transform: "translateY(20px)" },
  animationTo = { opacity: 1, transform: "translateY(0px)" },
  animationExit = { opacity: 0, transform: "translateY(-20px)" },
  easing = "easeInCubic",
  repeatDelay = 3000, // ⏳ เวลาที่รอเปลี่ยนข้อความใหม่
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(text[0]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [renderKey, setRenderKey] = useState(1);

useEffect(() => {
    console.log("เริ่มแสดงข้อความ:", displayedText);

    const textLength = displayedText.length;
    const totalAnimationTime = textLength * delay + 600; // คำนวณเวลาที่ต้องรอให้ Animation จบ

    const timeout = setTimeout(() => {
      setIsAnimating(false); // 🎬 เริ่ม animation ออก

      setTimeout(() => {
        const nextIndex = (currentTextIndex + 1) % text.length;
        setCurrentTextIndex(nextIndex);
        setDisplayedText(text[nextIndex]); // เปลี่ยนข้อความใหม่
        setIsAnimating(true); // 🎬 เริ่ม animation เข้าใหม่
        setRenderKey((prev) => prev + 1); // 🔄 บังคับ React รีเรนเดอร์ใหม่

        console.log("เปลี่ยนเป็นข้อความใหม่:", text[nextIndex]);
      }, totalAnimationTime);
    }, repeatDelay);

    return () => clearTimeout(timeout);
  }, [currentTextIndex, repeatDelay, delay, text, displayedText]);

  const words = displayedText.split(" ").map((word) => word.split(""));
  const letters = words.flat();

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: isAnimating ? animationTo : animationExit,
      delay: i * delay ,
      config: { easing },
    }))
  );

  return (
    <p
      key={renderKey} // 🔄 รีเซ็ตทุกครั้งที่ข้อความเปลี่ยน
      className={`split-text inline-block ${className}`}
      style={{ textAlign: "center", whiteSpace: "normal" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.map((letter, letterIndex) => {
            const index = words
              .slice(0, wordIndex)
              .reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <animated.span
                key={index}
                style={springs[index]}
                className="inline-block"
              >
                {letter}
              </animated.span>
            );
          })}
          <span style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
