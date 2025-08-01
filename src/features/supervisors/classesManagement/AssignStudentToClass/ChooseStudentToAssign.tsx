import { useGetStudents } from "@/features/students/useGetStudents";
import { useClassesUi } from "@/slices/classesUiSlice";
import SmallSpinner from "@/ui/SmallSpinner";
import Spinner from "@/ui/Spinner";
import SubmitButton from "@/ui/SubmitButton";
import { HiPlus } from "react-icons/hi2";
import StudentsClasses from "./StudentsClasses";
import { useAssignStudentToClass } from "./useAssignStudentToClass";
import { useTranslation } from "react-i18next";

function ChooseStudentToAssign({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
  const { t } = useTranslation("classes");
  const { className, studentId } = useClassesUi();
  const { students, isGettingStudents } = useGetStudents();
  const { assignStudentMutation, isAssigningStudent } =
    useAssignStudentToClass();

  function handleClick() {
    assignStudentMutation(undefined, {
      onSuccess: () => onCloseModal?.(),
    });
  }

  const filteredStudents = students?.filter(
    (student: { class_name: string }) => student.class_name !== className,
  );

  if (isGettingStudents)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
        <Spinner />
        <p className="text-lg font-semibold text-slate-600">
          {t("main.loading")}
        </p>
      </div>
    );

  return (
    <div>
      <div className="py-4">
        <h3 className="text-xl font-bold text-slate-800">
          {t("main.assignStudent")}: {className}
        </h3>
      </div>
      <div>
        <StudentsClasses students={filteredStudents} />
      </div>
      {filteredStudents && filteredStudents.length > 0 && (
        <div className="sticky bottom-0 bg-white/90 p-3 backdrop-blur-sm">
          <SubmitButton
            disabled={!studentId || isAssigningStudent}
            onClick={handleClick}
            className="w-full justify-center text-sm"
          >
            {isAssigningStudent ? (
              <SmallSpinner />
            ) : (
              <div className="flex items-center gap-2">
                <HiPlus className="h-5 w-5" />
                <span className="rtl:text-lg">{t("main.assign2")}</span>
              </div>
            )}
          </SubmitButton>
        </div>
      )}
    </div>
  );
}

export default ChooseStudentToAssign;
