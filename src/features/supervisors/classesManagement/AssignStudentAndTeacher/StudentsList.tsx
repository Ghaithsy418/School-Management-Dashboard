import Empty from "@/ui/Empty";
import StudentClassesRow from "./StudentClassesRow";
import { usePaginate } from "@/hooks/usePaginate";

interface StudentsClassesTypes {
  full_name: string;
  class_name: string;
  student_id: number;
}

function StudentsList({ students }: { students: StudentsClassesTypes[] }) {
  const studentsPaginated = usePaginate(students, 15, "studentsPage");

  if (!students?.length) return <Empty resource="students" />;

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-1 divide-y-1 divide-gray-600/30">
        {studentsPaginated?.map((student) => (
          <StudentClassesRow student={student} key={student.student_id} />
        ))}
      </div>
    </div>
  );
}

export default StudentsList;
