import Pagination from "@/ui/Pagination";
import Search from "@/ui/Search";
import { useSearchParams } from "react-router-dom";
import StudentsList from "./StudentsList";

interface StudentsClassesTypes {
  full_name: string;
  class_name: string;
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
      <Search size="w-68" />
      <StudentsList students={searchedStudents} />
      <div className="flex items-center justify-between">
        <Pagination
          dataLength={students?.length}
          numberOfElements={15}
          pageName="studentsPage"
        />
      </div>
    </div>
  );
}

export default StudentsClasses;
