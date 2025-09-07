import { useUser } from "@/slices/userSlice";
import AvatarGenerator from "@/ui/AvatarGenerator";
import Empty from "@/ui/Empty";
import InfoItem from "@/ui/InfoItem";
import Spinner from "@/ui/Spinner";
import { motion, Variants } from "framer-motion";
import { BookOpen, DollarSign } from "lucide-react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useGetTeacher } from "./useGetTeacher";
import { useTranslation } from "react-i18next";

function TeacherProfile() {
  const { id } = useParams();
  const { teacher, isGettingTeacher, isError } = useGetTeacher(Number(id));
  const { t } = useTranslation("teachers");
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

  const { full_name, email, phone, salary, subject, classes } = teacher;

  return (
    <div className="flex w-full overflow-hidden rounded-md bg-slate-100 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-900">
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
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
            {full_name}
          </h1>
        </div>

        <motion.div
          className="w-full"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="mb-6 text-3xl font-bold text-slate-800 dark:text-slate-200">
            {t("profile.title")}
          </h2>

          <motion.div
            className="rounded-xl bg-white p-4 shadow-sm sm:p-6 dark:bg-gray-400"
            variants={itemVariants}
          >
            <div className="divide-y divide-slate-200 dark:divide-slate-600">
              <InfoItem icon={<HiOutlineMail />} label={t("profile.email")}>
                {email}
              </InfoItem>
              <InfoItem icon={<HiOutlinePhone />} label={t("profile.phone")}>
                {phone}
              </InfoItem>
              <div className="capitalize">
                <InfoItem icon={<BookOpen />} label={t("profile.subject")}>
                  {subject}
                </InfoItem>
              </div>
              {role === "dean" && (
                <InfoItem icon={<DollarSign />} label={t("profile.salary")}>
                  {salary}
                </InfoItem>
              )}
              <InfoItem
                icon={
                  <svg
                    className="h-8 w-8 fill-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 640"
                    x="0px"
                    y="0px"
                  >
                    <path d="M56,264H456a7.99539,7.99539,0,0,0,8-8V224a7.99539,7.99539,0,0,0-8-8H440V24a7.99539,7.99539,0,0,0-8-8H80a7.99539,7.99539,0,0,0-8,8V216H56a7.99539,7.99539,0,0,0-8,8v32A7.99539,7.99539,0,0,0,56,264ZM88,32H424V216H216V184a7.99539,7.99539,0,0,0-8-8H144a7.99539,7.99539,0,0,0-8,8v32H88ZM200,216H152V192h48ZM64,232H448v16H64Z" />
                    <rect x="160" y="312" width="32" height="16" />
                    <rect x="320" y="312" width="32" height="16" />
                    <path d="M472,296H386.75293l-3.08887-10.29688A8.00666,8.00666,0,0,0,376,280H296a8.00666,8.00666,0,0,0-7.66406,5.70312L285.24707,296H226.75293l-3.08887-10.29688A8.00666,8.00666,0,0,0,216,280H136a8.00666,8.00666,0,0,0-7.66406,5.70312L125.24707,296H40a7.99539,7.99539,0,0,0-8,8v32a7.99539,7.99539,0,0,0,8,8h8V488a7.99539,7.99539,0,0,0,8,8H72a7.99489,7.99489,0,0,0,7.95312-7.16406L95.19922,344h15.64746l-6.51074,21.70312A8.12882,8.12882,0,0,0,104,368v24a23.95073,23.95073,0,0,0,16.63135,22.72217l7.40771,74.07471A8.00132,8.00132,0,0,0,136,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312L167.24072,416h17.51856l7.27978,72.79688A8.00132,8.00132,0,0,0,200,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312l7.40722-74.07471A23.95008,23.95008,0,0,0,248,392V368a8.12882,8.12882,0,0,0-.33594-2.29688L241.15332,344h29.69336l-6.51074,21.70312A8.12882,8.12882,0,0,0,264,368v24a23.95073,23.95073,0,0,0,16.63135,22.72217l7.40771,74.07471A8.00132,8.00132,0,0,0,296,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312L327.24072,416h17.51856l7.27978,72.79688A8.00132,8.00132,0,0,0,360,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312l7.40722-74.07471A23.95008,23.95008,0,0,0,408,392V368a8.12882,8.12882,0,0,0-.33594-2.29688L401.15332,344h15.64746l15.2461,144.83594A7.99489,7.99489,0,0,0,440,496h16a7.99539,7.99539,0,0,0,8-8V344h8a7.99539,7.99539,0,0,0,8-8V304A7.99539,7.99539,0,0,0,472,296ZM64.79688,480H64V344H79.1167ZM48,328V312h72.44678L115.647,328Zm96.75781,152h-1.51562l-6.40137-64h14.31836Zm62.48438,0-6.40137-64h14.31836l-6.40137,64ZM232,392a8.00541,8.00541,0,0,1-8,8H128a8.00541,8.00541,0,0,1-8-8V369.17188L141.95312,296h68.09376L232,369.17188Zm4.353-64-4.79981-16h48.89356L275.647,328Zm68.40478,152h-1.51562l-6.40137-64h14.31836Zm62.48438,0-6.40137-64h14.31836l-6.40137,64ZM392,392a8.00541,8.00541,0,0,1-8,8H288a8.00541,8.00541,0,0,1-8-8V369.17188L301.95312,296h68.09376L392,369.17188Zm56,88h-.79688L432.8833,344H448Zm16-152H396.353l-4.79981-16H464Z" />
                  </svg>
                }
                label={t("profile.studyingClasses")}
              >
                {classes?.length !== 0
                  ? classes.join(" | ")
                  : t("profile.noClasses")}
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

export default TeacherProfile;
