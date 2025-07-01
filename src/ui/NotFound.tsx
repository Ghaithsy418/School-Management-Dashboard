import { useUser } from "@/slices/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi2";

function NotFound() {
  const navigate = useNavigate();
  const {
    token,
    user: { role },
  } = useUser();

  useEffect(
    function () {
      if (!role || !token) navigate("/login", { replace: true });
    },
    [role, token, navigate],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-slate-900 text-white">
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-25 blur-[100px] filter" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-violet-700 to-indigo-700 opacity-25 blur-[100px] filter" />

      <motion.div
        className="z-10 flex flex-col items-center justify-center gap-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center">
          <motion.h1
            variants={itemVariants}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl"
          >
            4
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl"
          >
            0
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl"
          >
            4
          </motion.h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl text-slate-300 md:text-2xl"
        >
          Oops! The page you're looking for has vanished.
        </motion.p>

        <motion.div variants={itemVariants}>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg text-slate-100 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
          >
            <HiArrowLeft />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default NotFound;
