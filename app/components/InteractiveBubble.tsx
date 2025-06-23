"use client";

import { useEffect, useRef, useState } from "react";
import "../style/background.css";

export default function InteractiveBubble() {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const target = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };

    const animate = () => {
      setCurX((prevX) => prevX + (target.current.x - prevX) / 6);
      setCurY((prevY) => prevY + (target.current.y - prevY) / 6);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      className="interactive"
      style={{
        transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`,
      }}
    />
  );
}
