"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  delay?: number;
  priority?: boolean;
  animate?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  delay = 0,
  priority = false,
  animate: useAnimate = false,
}: ImageRevealProps) {
  const reduce = useReducedMotion();

  // For above-the-fold: use animate (fires on mount)
  // For below-fold: use whileInView (fires on scroll)
  const animationProps = useAnimate
    ? {
        initial: reduce ? false : { opacity: 0, scale: 1.08 },
        animate: { opacity: 1, scale: 1 },
      }
    : {
        initial: reduce ? false : { opacity: 0, scale: 1.08 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        {...animationProps}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
