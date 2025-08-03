import { useGetTeachers } from "@/features/teachers/useGetTeachers";
import { useClassesUi } from "@/slices/classesUiSlice";
import SmallSpinner from "@/ui/SmallSpinner";
import Spinner from "@/ui/Spinner";
import SubmitButton from "@/ui/SubmitButton";
import { HiPlus } from "react-icons/hi2";
import TeachersClasses from "./TeachersClasses";
import { useAssignTeacherToClass } from "./useAssignTeacherToClass";
import { useTranslation } from "react-i18next";

function ChooseTeacherToAssign({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
  const { t } = useTranslation("classes");
  const { className, teacherId } = useClassesUi();
  const { teachers, isGettingTeachers } = useGetTeachers();
  const { assignTeacherMutation, isAssigningTeacher } =
    useAssignTeacherToClass();

  function handleClick() {
    assignTeacherMutation(undefined, {
      onSuccess: () => onCloseModal?.(),
    });
  }

  if (isGettingTeachers)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
        <Spinner />
        <p className="text-lg font-semibold text-slate-600 dark:text-slate-200">
          {t("main.loadingTeachers")}
        </p>
      </div>
    );

  return (
    <div>
      <h3 className="truncate text-xl font-bold text-slate-800 dark:text-slate-100">
        {t("main.assignTeacher")}: {className}
      </h3>
      <TeachersClasses teachers={teachers as Teacher[]} />
      {teachers && teachers.length > 0 && (
        <div className="sticky bottom-0 bg-inherit p-3">
          <SubmitButton
            disabled={teacherId === 0 || isAssigningTeacher}
            onClick={handleClick}
            className="w-full justify-center text-sm"
          >
            {isAssigningTeacher ? (
              <SmallSpinner />
            ) : (
              <div className="flex items-center gap-2">
                <HiPlus className="h-5 w-5" />
                <span>{t("main.assign2")}</span>
              </div>
            )}
          </SubmitButton>
        </div>
      )}
    </div>
  );
}

interface Teacher {
  full_name?: string;
  teacher_id: number;
  subject: string;
  user_info?: string;
}

export default ChooseTeacherToAssign;
