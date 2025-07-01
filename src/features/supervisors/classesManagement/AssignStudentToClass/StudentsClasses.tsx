import Empty from "@/ui/Empty";
import Search from "@/ui/Search";
import StudentsList from "./StudentsList";

interface StudentsClassesTypes {
  full_name: string;
  class_name: string;
  student_id: number;
}

function StudentsClasses({ students }: { students: StudentsClassesTypes[] }) {
  return (
    <div className="flex w-full flex-col gap-4">
      <Search size="w-56" />
      {students && students.length > 0 ? (
        <StudentsList students={students} />
      ) : (
        <Empty resource="students" />
      )}
    </div>
  );
}

export default StudentsClasses;
