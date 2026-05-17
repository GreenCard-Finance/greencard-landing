"use client";

import { motion } from "framer-motion";

const text = "GreenCard";

export default function AnimatedText() {
  return (
    <div className="flex">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.2,
            duration: 0.05,
          }}
          className="text-[#145932]"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
