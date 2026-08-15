"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(useTransform(mouseX, (v) => v * 0.3), springConfig);
  const y = useSpring(useTransform(mouseY, (v) => v * 0.3), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-[0_4px_24px_rgba(15,118,110,0.25)]",
    secondary:
      "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-white",
    ghost:
      "bg-transparent text-foreground hover:text-primary",
  };

  const inner = (
    <>
      <span>{children}</span>
      {variant === "primary" && (
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
            <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </>
  );

  const sharedClasses = `group relative inline-flex items-center gap-3 rounded-full px-8 py-4 font-sans font-medium text-sm tracking-wide uppercase transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] cursor-pointer ${variantClasses[variant]} ${className}`;

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={sharedClasses}>{inner}</a>
      ) : (
        <button onClick={onClick} className={sharedClasses}>{inner}</button>
      )}
    </motion.div>
  );
}
