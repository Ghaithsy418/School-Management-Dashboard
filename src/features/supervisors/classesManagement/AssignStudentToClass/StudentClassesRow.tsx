import { changeStudentId, useClassesUi } from "@/slices/classesUiSlice";
import Checkbox from "@/ui/Checkbox";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

function StudentClassesRow({
  student,
}: {
  student: { full_name: string; student_id: number; class_name: string };
}) {
  const { t } = useTranslation("classes");
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
      className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2 transition-colors duration-200 ${isChecked ? "bg-indigo-100 dark:bg-slate-600/80" : "hover:bg-slate-50 dark:hover:bg-slate-600"} `}
    >
      <div className="flex items-center justify-center gap-3">
        <span
          className={`w-20 truncate rounded-full py-1 text-center text-xs font-semibold ${
            class_name
              ? "bg-indigo-200 text-indigo-800"
              : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200"
          } `}
        >
          {class_name || t("main.noClass")}
        </span>
        <p className="font-medium text-slate-800 dark:text-slate-100">
          {full_name}
        </p>
      </div>
      <Checkbox handleChange={handleChange} isChecked={isChecked} />
    </div>
  );
}

export default StudentClassesRow;
