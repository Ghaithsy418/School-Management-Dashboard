import { usePaginate } from "@/hooks/usePaginate";
import Pagination from "@/ui/Pagination";
import TeacherClassesRow from "./TeacherClassesRow";
import Search from "@/ui/Search";

interface TeachersClassesTypes {
  full_name: string;
  teacher_id: number;
  subject: string;
}

function TeachersClasses({ teachers }: { teachers: TeachersClassesTypes[] }) {
  const paginatedTeachers = usePaginate(teachers, 15, "teachersPage");
  return (
    <div className="flex h-full w-full flex-col items-start gap-8 pb-12">
      <Search size="w-68" />
      <div className="flex w-full flex-col items-center justify-center gap-3 divide-y-1 divide-gray-600/30">
        {paginatedTeachers?.map((teacher) => (
          <TeacherClassesRow teacher={teacher} key={teacher.teacher_id} />
        ))}
      </div>
      <div className="flex w-full items-center justify-between">
        <Pagination
          dataLength={teachers?.length}
          numberOfElements={15}
          pageName="studentsPage"
        />
      </div>
    </div>
  );
}

export default TeachersClasses;
