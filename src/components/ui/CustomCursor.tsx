"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    let animationFrameId: number;
    const updateRing = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(updateRing);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.closest(".interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    animationFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Dot */}
      <div
        className="fixed pointer-events-none z-[99999] w-1.5 h-1.5 bg-[#2DD4BF] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      {/* Outer Spring Ring */}
      <div
        className={`fixed pointer-events-none z-[99998] rounded-full border border-[#2DD4BF]/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered
            ? "w-14 h-14 border-[#2DD4BF] bg-[#2DD4BF]/10 scale-110"
            : "w-8 h-8"
        }`}
        style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
      />
    </>
  );
}
