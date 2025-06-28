import { changeTeacherId, useClassesUi } from "@/slices/classesUiSlice";
import Checkbox from "@/ui/Checkbox";
import { useDispatch } from "react-redux";

interface TeacherClassesTypes {
  full_name: string;
  teacher_id: number;
  subject: string;
}

function TeacherClassesRow({ teacher }: { teacher: TeacherClassesTypes }) {
  const { full_name, teacher_id: id, subject } = teacher;
  const { teacherId } = useClassesUi();
  const dispatch = useDispatch();

  const isChecked = id === teacherId;

  function handleChange() {
    if (isChecked) {
      dispatch(changeTeacherId(0));
    } else {
      dispatch(changeTeacherId(0));
    }
  }

  return (
    <div className="flex w-full items-center justify-between gap-4 py-2">
      <p className="font-semibold">{full_name}</p>
      <div className="flex items-center justify-center gap-3">
        <span>{subject}</span>
        <Checkbox handleChange={handleChange} isChecked={isChecked} />
      </div>
    </div>
  );
}

export default TeacherClassesRow;
