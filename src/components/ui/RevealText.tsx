"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function RevealText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      )).reduce<React.ReactNode[]>((acc, el, i) => {
        // Add actual space characters between words
        if (i > 0) acc.push(" ");
        acc.push(el);
        return acc;
      }, [])}
    </Tag>
  );
}
