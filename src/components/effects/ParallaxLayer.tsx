"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 0.3,
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const offset = reduce ? 0 : speed * 100;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-offset}px`, `${offset}px`]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
