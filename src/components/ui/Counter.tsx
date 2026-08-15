"use client";

import { useMotionValue, useTransform, motion, animate, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function Counter({
  value,
  suffix = "",
  label,
  delay = 0,
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: reduce ? 0 : 2.5,
      delay: reduce ? 0 : delay,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [isInView, value, delay, motionValue, reduce]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <motion.span className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="font-sans text-xl md:text-2xl text-white/70">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60 font-medium">
        {label}
      </p>
    </div>
  );
}
