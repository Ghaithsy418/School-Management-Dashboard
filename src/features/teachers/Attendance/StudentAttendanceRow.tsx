import Checkbox from "@/ui/Checkbox";

interface StudentAttendaceTypes {
  studentName: string;
  studentId: number;
}

function StudentAttendanceRow({ student }: { student: StudentAttendaceTypes }) {
  return (
    <>
      <p>{student.studentName}</p>
      <div className="mr-2 place-self-end">
        <Checkbox isChecked={false} handleChange={() => {}} />
      </div>
    </>
  );
}

export default StudentAttendanceRow;
