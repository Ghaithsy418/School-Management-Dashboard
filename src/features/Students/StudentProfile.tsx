import AvatarGenerator from "@/ui/AvatarGenerator";
import InfoItem from "@/ui/InfoItem";
import { gpaLevel } from "@/utils/marksCalculations";
import { SpecificStudentTypes } from "@/utils/types";
import { motion, Variants } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  HiOutlineClipboardCheck,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

interface StudentProfileTypes {
  student: SpecificStudentTypes;
  informationsRef: React.RefObject<HTMLDivElement | null>;
}

function StudentProfile({ student, informationsRef }: StudentProfileTypes) {
  const { full_name, email, phone, GPA, class_name } = student;
  const { t } = useTranslation("students");
  const { className: totalGpaClassName, message: totalGpaMessage } = gpaLevel(
    GPA?.GPA_final,
    t,
  );
  const { className: firstGpaClassName, message: firstGpaMessage } = gpaLevel(
    GPA?.GPA_1,
    t,
  );
  const { className: secondGpaClassName, message: secondGpaMessage } = gpaLevel(
    GPA?.GPA_2,
    t,
  );

  return (
    <div
      ref={informationsRef}
      className="col-start-1 col-end-2 flex h-[40rem] w-full overflow-hidden rounded-md bg-slate-100 shadow-md transition-all duration-300 hover:shadow-lg dark:border dark:border-gray-500/40 dark:bg-gradient-to-bl dark:from-slate-900 dark:to-gray-900"
    >
      <motion.div
        className="hidden w-[23rem] flex-col items-center justify-center gap-8 bg-gradient-to-b from-slate-800 to-slate-900 p-8 text-white lg:flex dark:to-slate-800"
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
          <p className="mt-2 text-xl text-indigo-400">{class_name}</p>
        </div>
      </motion.div>

      <div className="w-full px-4 py-6 lg:w-2/3 lg:px-6 lg:py-12">
        <div className="mb-8 text-center lg:hidden">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
            {full_name}
          </h1>
          <p className="mt-1 text-lg text-indigo-600">{class_name}</p>
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
            className="rounded-xl bg-white p-4 shadow-sm sm:p-6 dark:bg-gray-300"
            variants={itemVariants}
          >
            <div className="space-y-2 divide-y divide-slate-200 dark:divide-slate-600">
              <InfoItem icon={<HiOutlineMail />} label={t("profile.email")}>
                {email}
              </InfoItem>
              <InfoItem icon={<HiOutlinePhone />} label={t("profile.phone")}>
                {phone}
              </InfoItem>
              <InfoItem
                icon={<HiOutlineClipboardCheck />}
                label={t("profile.totalGpa")}
                isHighlight
                badge={
                  GPA?.GPA_final && (
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${totalGpaClassName}`}
                    >
                      {totalGpaMessage}
                    </span>
                  )
                }
              >
                {GPA?.GPA_final ?? "-"}
              </InfoItem>
              <InfoItem
                icon={<HiOutlineClipboardCheck />}
                label={t("profile.firstGpa")}
                isHighlight
                badge={
                  GPA?.GPA_1 && (
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${firstGpaClassName}`}
                    >
                      {firstGpaMessage}
                    </span>
                  )
                }
              >
                {GPA?.GPA_1 ?? "-"}
              </InfoItem>
              <InfoItem
                icon={<HiOutlineClipboardCheck />}
                label={t("profile.secondGpa")}
                isHighlight
                badge={
                  GPA?.GPA_2 && (
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${secondGpaClassName}`}
                    >
                      {secondGpaMessage}
                    </span>
                  )
                }
              >
                {GPA?.GPA_2 ?? "-"}
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

export default StudentProfile;
