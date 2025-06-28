import { useGetTeachers } from "@/features/teachers/useGetTeachers";
import SubmitButton from "@/ui/SubmitButton";
import { useAssignTeacherToClass } from "./useAssignTeacherToClass";
import Spinner from "@/ui/Spinner";
import SmallSpinner from "@/ui/SmallSpinner";
import TeachersClasses from "./TeachersClasses";
import { useClassesUi } from "@/slices/classesUiSlice";

function ChooseTeacherToAssign({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
  const { className } = useClassesUi();
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
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <Spinner />
        <p className="text-lg font-semibold">Loading Students...</p>
      </div>
    );

  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-8 px-2 pb-12">
      <div className="flex w-full flex-col gap-8">
        <h3 className="place-self-start text-2xl font-semibold">
          Choose a Teacher:
        </h3>
        <TeachersClasses teachers={teachers} />
      </div>
      <div className="sticky bottom-0">
        <SubmitButton onClick={handleClick}>
          {isAssigningTeacher ? (
            <SmallSpinner />
          ) : (
            `Assign the Student to class ${className}`
          )}
        </SubmitButton>
      </div>
    </div>
  );
}

export default ChooseTeacherToAssign;
