import React from "react";
import { motion } from "motion/react";

export default function ChatLoadingDots() {
  return (
    <div
      className="flex items-center p-4 absolute bottom-0 pb-8 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-full backdrop-blur-sm"
      role="status"
      aria-live="polite"
    >
      <motion.span
        className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="w-2.5 h-2.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mx-1 shadow-lg"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.span
        className="w-2.5 h-2.5 bg-gradient-to-r from-pink-400 to-red-500 rounded-full shadow-lg"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
