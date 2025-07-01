import { motion } from "framer-motion";
import { HiArrowPath, HiOutlineShieldExclamation } from "react-icons/hi2";

function Error({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    // The background classes are now identical to the NotFound component.
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Animated background blobs, now matching NotFound exactly. */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-25 blur-[100px] filter" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-violet-700 to-indigo-700 opacity-25 blur-[100px] filter" />

      <motion.div
        className="z-10 flex w-full max-w-lg flex-col items-center justify-center gap-5 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <HiOutlineShieldExclamation className="h-20 w-20 text-red-400" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold text-slate-100"
        >
          Something went wrong
        </motion.h1>

        <motion.pre
          variants={itemVariants}
          className="w-full rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-left font-mono text-sm text-red-300"
        >
          {error.message}
        </motion.pre>

        <motion.div variants={itemVariants} className="mt-4">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg text-slate-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
          >
            <HiArrowPath />
            Try Again
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Error;
