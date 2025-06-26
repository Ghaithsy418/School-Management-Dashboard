import { useClassesUi } from "@/context/ClassesUi";
import { useEffect, useState } from "react";

function StudentClassesRow({
  student,
}: {
  student: { full_name: string; student_id: number };
}) {
  const { dispatch, studentId } = useClassesUi();
  const [isChecked, setIsChecked] = useState(studentId === student?.student_id);

  useEffect(
    function () {
      if (student?.student_id !== 0 && student?.student_id !== studentId)
        setIsChecked(false);
    },
    [studentId, student?.student_id],
  );

  function handleChange() {
    setIsChecked((c) => !c);
    dispatch({ type: "changeStudentId", payload: student.student_id });
  }

  return (
    <div className="flex w-full items-center justify-between gap-4 py-2">
      <div className="flex items-center justify-center gap-3">
        <span className="font-semibold">
          {student.student_id < 10
            ? "0" + student.student_id
            : student.student_id}
        </span>
        <p>{student.full_name}</p>
      </div>
      <label className="custom-checkbox">
        <input
          onChange={handleChange}
          checked={isChecked}
          name="dummy"
          type="checkbox"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default StudentClassesRow;
