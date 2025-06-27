import Pagination from "@/ui/Pagination";
import Search from "@/ui/Search";
import StudentsList from "./StudentsList";
import Empty from "@/ui/Empty";

interface StudentsClassesTypes {
  full_name: string;
  class_name: string;
  student_id: number;
}

function StudentsClasses({ students }: { students: StudentsClassesTypes[] }) {
  if (!students?.length) return <Empty resource="students" />;

  return (
    <div className="flex h-full w-full flex-col items-start gap-8 px-2 pb-12">
      <Search size="w-68" />
      <StudentsList students={students} />
      <div className="flex w-full items-center justify-between">
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
