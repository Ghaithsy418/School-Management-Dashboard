import {
  pushStudent,
  removeStudent,
  useAttendance,
} from "@/slices/AttendanceSlice";
import Checkbox from "@/ui/Checkbox";
import { StudentAttendaceTypes } from "@/utils/types";
import { useDispatch } from "react-redux";

function StudentAttendanceRow({ student }: { student: StudentAttendaceTypes }) {
  const { students } = useAttendance();
  const dispatch = useDispatch();

  const { studentId, studentName } = student;
  const isChecked = students.some(
    (s: { studentId: number }) => s.studentId === studentId,
  );

  function handleChange() {
    if (isChecked) dispatch(removeStudent(studentId));
    if (!isChecked) dispatch(pushStudent({ studentId }));
  }

  return (
    <>
      <p>{studentName}</p>
      <div className="mr-2 place-self-end">
        <Checkbox isChecked={isChecked} handleChange={handleChange} />
      </div>
    </>
  );
}

export default StudentAttendanceRow;
