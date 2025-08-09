import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { Variants, motion } from "framer-motion";
import { BookOpen, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUserCircle,
} from "react-icons/hi";
import AvatarGenerator from "./AvatarGenerator";
import InfoItem from "./InfoItem";
import Spinner from "./Spinner";

function MyProfile() {
  const { currentUser, isGettingCurrentUser } = useGetCurrentUser();
  const { t } = useTranslation("students");

  if (isGettingCurrentUser) return <Spinner />;

  const {
    full_name,
    email,
    phone,
    role,
    profile_data: { subject, salary },
  } = currentUser;

  return (
    <div className="col-start-1 col-end-2 flex max-h-[40rem] w-full overflow-hidden rounded-md bg-slate-100 font-sans shadow-md transition-all duration-300 hover:shadow-lg">
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

      <div className="w-full px-4 py-6 lg:w-2/3 lg:px-6 lg:py-12">
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
            {t("profile.myProfileTitle")}
          </h2>

          <motion.div
            className="rounded-xl bg-white p-4 shadow-sm sm:p-6"
            variants={itemVariants}
          >
            <div className="space-y-2 divide-y divide-slate-200">
              <InfoItem icon={<HiOutlineMail />} label={t("profile.email")}>
                {email}
              </InfoItem>
              <InfoItem icon={<HiOutlinePhone />} label={t("profile.phone")}>
                {phone}
              </InfoItem>
              <div className="capitalize">
                <InfoItem
                  icon={<HiOutlineUserCircle />}
                  label={t("profile.role")}
                >
                  {role}
                </InfoItem>
              </div>
              {subject && (
                <div className="capitalize">
                  <InfoItem icon={<BookOpen />} label={t("profile.subject")}>
                    {subject}
                  </InfoItem>
                </div>
              )}
              <InfoItem icon={<DollarSign />} label={t("profile.salary")}>
                {salary}
              </InfoItem>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

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

export default MyProfile;
