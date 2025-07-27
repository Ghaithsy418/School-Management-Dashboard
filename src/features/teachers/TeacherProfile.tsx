import AvatarGenerator from "@/ui/AvatarGenerator";
import Empty from "@/ui/Empty";
import InfoItem from "@/ui/InfoItem";
import Spinner from "@/ui/Spinner";
import { motion, Variants } from "framer-motion";
import { BookOpen, DollarSign } from "lucide-react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useGetTeacher } from "./useGetTeacher";
import { useUser } from "@/slices/userSlice";

function TeacherProfile() {
  const { id } = useParams();
  const { teacher, isGettingTeacher, isError } = useGetTeacher(Number(id));
  const {
    user: { role },
  } = useUser();

  if (isGettingTeacher)
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Spinner />
      </div>
    );
  if (isError || !teacher) return <Empty resource="teacher" />;

  const { full_name, email, phone, salary, subject } = teacher;

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex w-full overflow-hidden rounded-md bg-slate-100 font-sans shadow-md transition-all duration-300 hover:shadow-lg">
      <motion.div
        className="hidden w-[23rem] flex-col items-center justify-center gap-8 bg-gradient-to-b from-slate-800 to-slate-900 p-8 text-white lg:flex"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <AvatarGenerator
            name={full_name}
            size={150}
            className="bg-slate-700 text-5xl ring-4 ring-indigo-500"
          />
        </motion.div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">{full_name}</h1>
        </div>
      </motion.div>

      <div className="w-full overflow-y-auto px-4 py-6 lg:w-2/3 lg:px-6 lg:py-12">
        <div className="mb-8 text-center lg:hidden">
          <h1 className="text-3xl font-bold text-slate-800">{full_name}</h1>
        </div>

        <motion.div
          className="w-full"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-800">
            Teacher Information
          </h2>

          <motion.div
            className="rounded-xl bg-white p-4 shadow-sm sm:p-6"
            variants={itemVariants}
          >
            <div className="divide-y divide-slate-200">
              <InfoItem icon={<HiOutlineMail />} label="Email Address">
                {email}
              </InfoItem>
              <InfoItem icon={<HiOutlinePhone />} label="Phone Number">
                {phone}
              </InfoItem>
              <InfoItem icon={<BookOpen />} label="Subject">
                {subject}
              </InfoItem>
              {role === "dean" && (
                <InfoItem icon={<DollarSign />} label="Salary">
                  {salary}
                </InfoItem>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TeacherProfile;
