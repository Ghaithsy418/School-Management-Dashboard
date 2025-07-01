import { useGetTeachers } from "@/features/teachers/useGetTeachers";
import { useClassesUi } from "@/slices/classesUiSlice";
import SmallSpinner from "@/ui/SmallSpinner";
import Spinner from "@/ui/Spinner";
import SubmitButton from "@/ui/SubmitButton";
import { HiPlus } from "react-icons/hi2";
import TeachersClasses from "./TeachersClasses";
import { useAssignTeacherToClass } from "./useAssignTeacherToClass";

function ChooseTeacherToAssign({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
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
        <p className="text-lg font-semibold text-slate-600">
          Loading Teachers...
        </p>
      </div>
    );

  return (
    <div>
      <h3 className="truncate text-xl font-bold text-slate-800">
        Assign Teacher to: {className}
      </h3>
      <TeachersClasses teachers={teachers} />
      {teachers && teachers.length > 0 && (
        <div className="sticky bottom-0 bg-white/90 p-3 backdrop-blur-sm">
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
                <span>Assign Teacher</span>
              </div>
            )}
          </SubmitButton>
        </div>
      )}
    </div>
  );
}

export default ChooseTeacherToAssign;
