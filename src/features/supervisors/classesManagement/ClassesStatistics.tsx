import { FaSchoolCircleCheck } from "react-icons/fa6";
import { PiListPlusBold } from "react-icons/pi";
import { useGetClasses } from "./useGetClasses";
import { ClassTypes } from "@/utils/types";
import { useTranslation } from "react-i18next";

function ClassesStatistics() {
  const { classes, isGettingClasses } = useGetClasses();
  const { t } = useTranslation("classes");

  return (
    <div className="flex items-center justify-center gap-6">
      <div className="flex justify-center gap-5 rounded-md border-1 border-emerald-900/30 p-5 dark:border-emerald-900">
        <PiListPlusBold className="h-14 w-14 rounded-full bg-emerald-600 p-4 text-white" />
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg text-gray-500 rtl:text-base">
            {t("main.totalClasses")}
          </h3>
          <p className="text-lg font-semibold">
            {isGettingClasses || !classes ? "-" : classes?.length}
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-5 rounded-md border-1 border-yellow-900/30 p-5 dark:border-yellow-900">
        <FaSchoolCircleCheck className="h-14 w-14 rounded-full bg-yellow-500 p-4 text-white" />
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg text-gray-500 rtl:text-base">
            {t("main.fullClasses")}
          </h3>
          <p className="text-lg font-semibold">
            {isGettingClasses || !classes
              ? "-"
              : classes?.filter(
                  (classData: ClassTypes) =>
                    classData.currentStudentNumber === classData.studentsNum,
                ).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClassesStatistics;
