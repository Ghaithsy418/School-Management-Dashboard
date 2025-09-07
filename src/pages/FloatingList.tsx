import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FloatingListTypes {
  className?: string;
  children: ReactNode;
}

function FloatingList({ className, children }: FloatingListTypes) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`no-scrollbar absolute top-[4rem] z-30 min-h-[24rem] w-[24rem] overflow-y-auto rounded-md border border-gray-700/20 bg-white shadow-lg shadow-gray-700/30 dark:border-gray-400 dark:bg-gray-800 ${className}`}
    >
      {children}
    </motion.div>
  );
}

const variants: Variants = {
  hidden: {
    scale: 0.9,
    top: "2rem",
  },
  visible: {
    scale: 1,
    top: "4rem",
    transition: {
      duration: 0.35,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    top: "2rem",
    transition: {
      duration: 0.35,
    },
  },
};

export default FloatingList;
