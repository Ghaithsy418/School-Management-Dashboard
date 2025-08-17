import { FaSchoolCircleCheck } from "react-icons/fa6";
import { PiListPlusBold } from "react-icons/pi";
import { useGetClasses } from "./useGetClasses";
import { ClassTypes } from "@/utils/types";
import { useTranslation } from "react-i18next";
import SmallStatsCard from "@/ui/SmallStatsCard";

function ClassesStatistics() {
  const { classes, isGettingClasses } = useGetClasses();
  const { t } = useTranslation("classes");

  return (
    <div className="flex items-center justify-center gap-6">
      <SmallStatsCard
        icon={
          <PiListPlusBold className="h-14 w-14 rounded-full bg-emerald-600 p-4 text-white" />
        }
        title={t("main.totalClasses")}
        stats={isGettingClasses || !classes ? "-" : classes?.length}
        borderColor="border-emerald-900/30 p-5 dark:border-emerald-900"
      />
      <SmallStatsCard
        icon={
          <FaSchoolCircleCheck className="h-14 w-14 rounded-full bg-yellow-500 p-4 text-white" />
        }
        title={t("main.fullClasses")}
        stats={
          isGettingClasses || !classes
            ? "-"
            : classes?.filter(
                (classData: ClassTypes) =>
                  classData.currentStudentNumber === classData.studentsNum,
              ).length
        }
        borderColor="border-yellow-900/30 p-5 dark:border-yellow-900"
      />
    </div>
  );
}

export default ClassesStatistics;
