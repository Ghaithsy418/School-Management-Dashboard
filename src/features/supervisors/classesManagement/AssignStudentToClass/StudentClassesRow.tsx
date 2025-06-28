import { useClassesUi } from "@/context/ClassesUi";
import Checkbox from "@/ui/Checkbox";

function StudentClassesRow({
  student,
}: {
  student: { full_name: string; student_id: number; class_name: string };
}) {
  const { full_name, student_id: id, class_name } = student;
  const { dispatch, studentId } = useClassesUi();

  const isChecked = id === studentId;

  function handleChange() {
    if (isChecked) {
      dispatch({ type: "changeStudentId", payload: null });
    } else {
      dispatch({ type: "changeStudentId", payload: id });
    }
  }

  return (
    <div className="flex w-full items-center justify-between gap-4 py-2">
      <div className="flex items-center justify-center gap-3">
        <span className="font-semibold">
          {class_name === "" ? "-" : class_name}
        </span>
        <p>{full_name}</p>
      </div>
      <Checkbox handleChange={handleChange} isChecked={isChecked} />
    </div>
  );
}

export default StudentClassesRow;
