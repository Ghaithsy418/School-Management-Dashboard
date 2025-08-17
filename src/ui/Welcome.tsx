import { format, getHours } from "date-fns";
import { motion, Variants } from "framer-motion";
import { LucideSchool2 } from "lucide-react";
import { useEffect, useState } from "react";

interface WelcomeTypes {
  grid: string;
  username: string;
}

function Welcome({ grid, username }: WelcomeTypes) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = getHours(currentTime);
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const particleVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.6, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`${grid} group relative flex h-[7rem] w-full flex-col items-start justify-center gap-1 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800 px-6 py-4 text-white shadow-lg`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -2,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
            variants={particleVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>
      <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm" />
      <div className="relative z-10 flex w-full items-center justify-between">
        <motion.div className="flex flex-col gap-1" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <LucideSchool2 className="h-5 w-5 text-white" />
            </motion.div>
            <div>
              <motion.h2
                className="text-2xl leading-tight font-bold text-white capitalize"
                variants={itemVariants}
              >
                {getGreeting()}, {username}
              </motion.h2>
              <motion.p
                className="text-sm font-light text-gray-300 transition-colors duration-300 group-hover:text-white"
                variants={itemVariants}
              >
                Ready to crush your goals today? 💪
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-end" variants={itemVariants}>
          <motion.div
            className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 backdrop-blur-sm"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-mono text-lg font-semibold text-gray-100">
              {format(currentTime, "h:mm a")}
            </span>
          </motion.div>
          <span className="mt-1 text-xs text-gray-400">
            {format(currentTime, "EE, MMM d")}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ width: 0 }}
        whileHover={{
          width: "100%",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      />

      <motion.div
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 blur"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.3 },
        }}
      />
    </motion.div>
  );
}

export default Welcome;
