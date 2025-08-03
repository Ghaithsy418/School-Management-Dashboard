import { useDirection } from "@/hooks/useDirection";
import { regularOpacityVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { useEffect } from "react";
import LoginContainer from "../features/auth/LoginContainer";
import LoginIcons from "../ui/LoginIcons";
import loginPhoto from "/images/login-photo.jpg";

function Login() {
  useDirection();
  useEffect(function () {
    document.title = "Login";
  }, []);

  return (
    <motion.div
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex h-[100vh] items-center justify-center"
    >
      <LoginContainer />
      <div className="relative z-20 flex h-full flex-3/5 items-center justify-center rounded-bl-[4rem] border-l-1 border-l-indigo-200/20 bg-indigo-100 dark:border-l-indigo-800/20 dark:bg-gray-700">
        <img
          src={loginPhoto}
          alt="school login-photo"
          className="mix-blend-multiply"
        />
        <LoginIcons />
      </div>
    </motion.div>
  );
}

export default Login;
