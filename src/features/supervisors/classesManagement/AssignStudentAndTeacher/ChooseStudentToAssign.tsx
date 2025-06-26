import { useClassesUi } from "@/context/ClassesUi";
import SmallSpinner from "@/ui/SmallSpinner";
import Spinner from "@/ui/Spinner";
import SubmitButton from "@/ui/SubmitButton";
import StudentsClasses from "./StudentsClasses";
import { useAssignStudentToClass } from "./useAssignStudentToClass";
import { useGetStudents } from "@/features/students/useGetStudents";

function ChooseStudentToAssign({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
  const { className } = useClassesUi();
  const { students, isGettingStudents } = useGetStudents();
  const { assignStudentMutation, isAssigningStudent } =
    useAssignStudentToClass();

  const filteredStudents = students?.filter(
    (student: { class_name: string }) => student.class_name === null,
  );

  function handleClick() {
    assignStudentMutation(undefined, {
      onSuccess: () => onCloseModal?.(),
    });
  }

  if (isGettingStudents)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <Spinner />
        <p className="text-lg font-semibold">Loading Students...</p>
      </div>
    );

  return (
    <div className="no-scrollbar flex h-full w-full flex-col items-center justify-between gap-8 overflow-y-auto px-2 pb-16">
      <div className="flex w-full flex-col gap-8">
        <h3 className="place-self-start text-2xl font-semibold">
          Choose a Student:
        </h3>
        <StudentsClasses students={filteredStudents} />
      </div>
      <SubmitButton onClick={handleClick}>
        {isAssigningStudent ? (
          <SmallSpinner />
        ) : (
          `Assign the Student to class ${className}`
        )}
      </SubmitButton>
    </div>
  );
}

export default ChooseStudentToAssign;
