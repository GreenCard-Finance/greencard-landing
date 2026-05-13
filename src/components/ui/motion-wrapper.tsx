"use client";

import { HTMLMotionProps, motion, type Variants } from "framer-motion";

interface MotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  variants,
  className,
  delay = 0,
}: MotionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
