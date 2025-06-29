import { useGetStudents } from "@/features/students/useGetStudents";
import { useClassesUi } from "@/slices/classesUiSlice";
import SmallSpinner from "@/ui/SmallSpinner";
import Spinner from "@/ui/Spinner";
import SubmitButton from "@/ui/SubmitButton";
import StudentsClasses from "./StudentsClasses";
import { useAssignStudentToClass } from "./useAssignStudentToClass";

function ChooseStudentToAssign({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
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
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <Spinner />
        <p className="text-lg font-semibold">Loading Students...</p>
      </div>
    );

  return (
    <div className="flex h-full w-full flex-col items-center justify-between gap-8 px-2 pb-12">
      <div className="flex w-full flex-col gap-8">
        <h3 className="place-self-start text-2xl font-semibold">
          Choose a Student:
        </h3>
        <StudentsClasses students={filteredStudents} />
      </div>
      {students?.length && (
        <div className="sticky bottom-0">
          <SubmitButton disabled={!studentId} onClick={handleClick}>
            {isAssigningStudent ? (
              <SmallSpinner />
            ) : (
              `Assign the Student to class ${className}`
            )}
          </SubmitButton>
        </div>
      )}
    </div>
  );
}

export default ChooseStudentToAssign;
