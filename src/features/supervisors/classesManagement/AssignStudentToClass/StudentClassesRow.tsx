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
    <div
      className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2 transition-colors duration-200 ${isChecked ? "bg-indigo-100" : "hover:bg-indigo-50"} `}
    >
      <div className="flex items-center justify-center gap-3">
        <span
          className={`w-20 truncate rounded-full py-1 text-center text-xs font-semibold ${
            class_name
              ? "bg-indigo-200 text-indigo-800"
              : "bg-slate-200 text-slate-600"
          } `}
        >
          {class_name || "No Class"}
        </span>
        <p className="font-medium text-slate-800">{full_name}</p>
      </div>
      <Checkbox handleChange={handleChange} isChecked={isChecked} />
    </div>
  );
}

export default StudentClassesRow;
