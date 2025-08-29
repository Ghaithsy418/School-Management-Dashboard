import { PiStudent } from "react-icons/pi";
import { useGetDeanStatistics } from "./useGetDeanStatistics";
import TeacherSvg from "@/ui/TeacherSvg";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import InformationCard from "@/ui/InformationCard";
import { motion, Variants } from "framer-motion";

function DeanStatistics() {
  const { infos } = useGetDeanStatistics();

  const data = [
    {
      title: "studnets",
      icon: <PiStudent className="h-7 w-7" />,
      value: infos?.students ?? "-",
    },
    {
      title: "teachers",
      icon: <TeacherSvg width="28" height="28" color="fill-gray-50" />,
      value: infos?.teachers ?? "-",
    },
    {
      title: "supervisors",
      icon: <MdOutlineSupervisorAccount className="h-7 w-7" />,
      value: infos?.supervisors ?? "-",
    },
    {
      title: "others",
      icon: <HiOutlineUserGroup className="h-7 w-7" />,
      value: infos?.others ?? "-",
    },
  ];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="col-start-1 col-end-3 flex w-full flex-wrap items-center justify-between gap-8"
    >
      {data.map((item) => (
        <InformationCard
          key={item.title}
          title={item.title}
          stats={item.value}
          icon={item.icon}
          variants={childrenVariants}
        />
      ))}
    </motion.div>
  );
}

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.2 },
  },
};

const childrenVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, staggerChildren: 0.6 },
  },
};

export default DeanStatistics;
