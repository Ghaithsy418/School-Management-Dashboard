import { changeTeacherId, useClassesUi } from "@/slices/classesUiSlice";
import Checkbox from "@/ui/Checkbox";
import { useDispatch } from "react-redux";
import UnassignButton from "./UnassignButton";

interface TeacherClassesTypes {
  full_name?: string;
  teacher_id: number;
  subject: string;
  user_info?: string;
}

function TeacherClassesRow({
  teacher,
  classId = 0,
  className = "",
}: {
  teacher: TeacherClassesTypes;
  classId?: number;
  className?: string;
}) {
  const { full_name, teacher_id: id, subject, user_info } = teacher;
  const { teacherId } = useClassesUi();
  const dispatch = useDispatch();

  const isChecked = id === teacherId;

  function handleChange() {
    if (isChecked) {
      dispatch(changeTeacherId(0));
    } else {
      dispatch(changeTeacherId(id));
    }
  }

  return (
    <div
      className={`flex w-full items-center justify-between gap-4 rounded-lg p-3 transition-colors duration-200 ${isChecked ? "bg-indigo-100" : "hover:bg-indigo-50"} `}
    >
      <p className="font-semibold text-slate-800">{user_info ?? full_name}</p>

      <div className="flex items-center justify-center gap-4">
        <span className="hidden rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 capitalize sm:block">
          {subject}
        </span>

        {user_info ? (
          <UnassignButton
            className={className}
            classId={classId}
            teacherId={id}
          />
        ) : (
          <Checkbox handleChange={handleChange} isChecked={isChecked} />
        )}
      </div>
    </div>
  );
}

export default TeacherClassesRow;
