import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TitleTypes {
  children: ReactNode;
  size?: string;
  secondaryTitle: string;
  importantWord?: string;
}

function Title({
  children,
  size = "text-7xl",
  secondaryTitle,
  importantWord = "",
}: TitleTypes) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <motion.h1
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 110, damping: 6 },
        }}
        className={`bg-gradient-to-br from-indigo-600/80 via-indigo-700/90 to-violet-900/90 bg-clip-text dark:from-indigo-400/80 dark:via-indigo-500/90 dark:to-violet-700/90 ${size} font-bold text-transparent`}
      >
        {children}
      </motion.h1>
      <p className="w-96 text-center text-gray-950/90 dark:text-gray-50/90">
        {secondaryTitle} <strong>{importantWord}</strong>
      </p>
    </div>
  );
}

export default Title;
