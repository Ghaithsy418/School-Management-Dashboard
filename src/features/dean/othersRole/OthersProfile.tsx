import AvatarGenerator from "@/ui/AvatarGenerator";
import Empty from "@/ui/Empty";
import InfoItem from "@/ui/InfoItem";
import Spinner from "@/ui/Spinner";
import { motion, Variants } from "framer-motion";
import { DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useGetSpecificOther } from "./useGetSpecificOther";
import MainContainer from "@/ui/MainContainer";

function OthersProfile() {
  const params = useParams();
  const { user, isGettingUser } = useGetSpecificOther(Number(params.id));
  const { t } = useTranslation("supervisors");

  if (isGettingUser) return <Spinner />;
  if (!user) return <Empty resource="user" />;

  const { full_name, email, phone, salary } = user;

  return (
    <MainContainer needsBackArrow toPage="/dean/others">
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
              User Profile
            </h2>

            <motion.div
              className="rounded-xl bg-white p-4 shadow-sm sm:p-6"
              variants={itemVariants}
            >
              <div className="divide-y divide-slate-200">
                <InfoItem icon={<HiOutlineMail />} label={t("profile.email")}>
                  {email}
                </InfoItem>
                <InfoItem icon={<HiOutlinePhone />} label={t("profile.phone")}>
                  {phone}
                </InfoItem>
                <InfoItem icon={<DollarSign />} label={t("profile.salary")}>
                  {salary}
                </InfoItem>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainContainer>
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

export default OthersProfile;
