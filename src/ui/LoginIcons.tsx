import { BiBusSchool } from "react-icons/bi";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { LuBookHeart } from "react-icons/lu";
import { motion } from "framer-motion";

function LoginIcons() {
  return (
    <>
      <motion.span
        variants={variants}
        initial="hidden"
        animate="icon2"
        className="absolute top-[15%] rotate-[-10deg] text-xl text-amber-600/70 ltr:left-[-25px] rtl:right-[-25px]"
      >
        <LuBookHeart className="h-14 w-14" />
      </motion.span>
      <motion.span
        variants={variants}
        initial="hidden"
        animate="icon1"
        className="absolute top-[45%] text-xl text-amber-600/70 ltr:left-[-28px] rtl:right-[-28px]"
      >
        <LiaPencilRulerSolid className="h-14 w-14" />
      </motion.span>
      <motion.span
        variants={variants}
        initial="hidden"
        animate="icon3"
        className="absolute top-[75%] rotate-[5deg] text-xl text-amber-600/70 ltr:left-[-28px] rtl:right-[-28px]"
      >
        <BiBusSchool className="h-14 w-14" />
      </motion.span>
    </>
  );
}

const variants = {
  hidden: { opacity: 0 },
  icon1: { opacity: 1, rotate: "-360deg", transition: { duration: 1.5 } },
  icon2: {
    opacity: 1,
    rotate: ["25deg", "-25deg", "0"],
    transition: { duration: 2 },
  },
  icon3: {
    opacity: 1,
    rotate: ["-35deg", "35deg", "0"],
    transition: { duration: 1.5 },
  },
};

export default LoginIcons;
