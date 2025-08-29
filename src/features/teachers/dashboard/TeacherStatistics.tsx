import { LuCalendarHeart } from "react-icons/lu";
import { useGetTeacherStatistics } from "./useGetTeacherStatistics";
import ClassSvg from "@/utils/ClassSvg";
import { PiStudent } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { Variants, motion } from "framer-motion";
import InformationCard from "@/ui/InformationCard";
import { formatDistanceToNow } from "date-fns";

function TeacherStatistics() {
  const { infos } = useGetTeacherStatistics();

  const data = [
    {
      title: "Sessions per Week",
      icon: <LuCalendarHeart className="h-6.5 w-6.5" />,
      value: infos?.sessionCount ?? "-",
    },
    {
      title: "Classes",
      icon: (
        <ClassSvg width="28" height="34" color="fill-gray-50 strok-gray-50" />
      ),
      value: infos?.teacherClassesCount ?? "-",
    },
    {
      title: "Students",
      icon: <PiStudent className="h-7 w-7" />,
      value: infos?.teacherStudentCount ?? "-",
    },
    {
      title: "At school",
      icon: <GrWorkshop className="h-7 w-7" />,
      value: infos?.userCreatedAT
        ? formatDistanceToNow(infos.userCreatedAT)
        : "-",
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

export default TeacherStatistics;
