import Search from "@/ui/Search";
import StudentClassesRow from "./StudentClassesRow";
import { useSearchParams } from "react-router-dom";
import Empty from "@/ui/Empty";

interface StudentsClassesTypes {
  full_name: string;
  student_id: number;
}

function StudentsClasses({ students }: { students: StudentsClassesTypes[] }) {
  const [searchParams] = useSearchParams();
  const searchResult = searchParams.get("search") || "";

  const searchedStudents = !searchResult
    ? students
    : students.filter((student) =>
        student.full_name.toLowerCase().includes(searchResult),
      );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end justify-between">
        <Search size="w-68" />
        {searchedStudents?.length && (
          <span className="text-sm text-violet-900">
            results: {searchedStudents?.length}
          </span>
        )}
      </div>
      {searchedStudents?.length ? (
        <div className="flex flex-col items-center justify-center gap-1 divide-y-1 divide-gray-600/30">
          {searchedStudents?.map((student) => (
            <StudentClassesRow student={student} key={student.student_id} />
          ))}
        </div>
      ) : (
        <Empty resource="students" />
      )}
    </div>
  );
}

export default StudentsClasses;
