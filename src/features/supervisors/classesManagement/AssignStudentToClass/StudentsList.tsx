import { usePaginate } from "@/hooks/usePaginate";
import StudentClassesRow from "./StudentClassesRow";

interface StudentsClassesTypes {
  full_name: string;
  class_name: string;
  student_id: number;
}

function StudentsList({ students }: { students: StudentsClassesTypes[] }) {
  const studentsPaginated = usePaginate(students, 15, "studentsPage");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 divide-y-1 divide-gray-600/30">
      {studentsPaginated?.map((student) => (
        <StudentClassesRow student={student} key={student.student_id} />
      ))}
    </div>
  );
}

export default StudentsList;
