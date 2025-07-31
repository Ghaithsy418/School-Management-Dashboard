import { Award, BookOpen } from "lucide-react";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface MarksProfile {
  marksRef?: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
  setSelectedSemester: Dispatch<SetStateAction<string>>;
  selectedSemester: string;
  needTitle?: boolean;
}

function MarksProfile({
  marksRef,
  children,
  selectedSemester,
  setSelectedSemester,
  needTitle = true,
}: MarksProfile) {
  const { t } = useTranslation("students");

  return (
    <div
      ref={marksRef}
      className="no-scrollbar w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
    >
      {needTitle && (
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-10 py-6">
          <div className="flex items-center space-x-3">
            <Award className="h-10 w-10 text-white" />
            <h1 className="text-3xl font-semibold text-white">
              {t("profileMarks.title")}
            </h1>
          </div>
        </div>
      )}

      <div className="space-y-6 p-6">
        <div>
          <label className="mb-3 block text-xl font-medium">
            {t("profileMarks.selectSemester")}
          </label>
          <div className="flex space-x-3">
            <button
              onClick={() => setSelectedSemester("First")}
              className={`flex-1 rounded-lg px-4 py-3 font-medium transition-all ${
                selectedSemester === "First"
                  ? "bg-gradient-to-tr from-indigo-700 to-violet-700 text-white shadow-md hover:from-indigo-800 hover:to-violet-800"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {t("profileMarks.firstSemester")}
            </button>
            <button
              onClick={() => setSelectedSemester("Second")}
              className={`flex-1 rounded-lg px-4 py-3 font-medium transition-all ${
                selectedSemester === "Second"
                  ? "bg-indigo-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t("profileMarks.secondSemester")}
            </button>
          </div>
        </div>
        {!selectedSemester ? (
          <div className="py-12 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-gray-300" />
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              {t("profileMarks.noSemester")}
            </h3>
            <p className="text-gray-500">{t("profileMarks.chooseSemester")}</p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default MarksProfile;
