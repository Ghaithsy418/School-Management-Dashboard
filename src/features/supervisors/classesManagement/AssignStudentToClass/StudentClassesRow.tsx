import { changeStudentId, useClassesUi } from "@/slices/classesUiSlice";
import Checkbox from "@/ui/Checkbox";
import { useDispatch } from "react-redux";

function StudentClassesRow({
  student,
}: {
  student: { full_name: string; student_id: number; class_name: string };
}) {
  const { studentId } = useClassesUi();
  const dispatch = useDispatch();
  const { full_name, student_id: id, class_name } = student;

  const isChecked = id === studentId;

  function handleChange() {
    if (isChecked) {
      dispatch(changeStudentId(0));
    } else {
      dispatch(changeStudentId(id));
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
