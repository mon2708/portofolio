"use client";

import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function TransitionOverlay() {
  const { isTransitioning } = useLanguage();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-blue-600 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white font-black text-4xl italic tracking-tighter"
          >
            AFTERLIFE.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
