import Empty from "@/ui/Empty";
import Search from "@/ui/Search";
import TeachersList from "./TeachersList";

interface Teacher {
  full_name?: string;
  teacher_id: number;
  subject: string;
  user_info?: string;
}

interface TeachersClassesProps {
  teachers: Teacher[];
}

function TeachersClasses({ teachers }: TeachersClassesProps) {
  return (
    <div className="mt-4 flex w-full flex-col gap-4">
      <Search size="w-56" />
      {teachers && teachers.length > 0 ? (
        <TeachersList teachers={teachers} />
      ) : (
        <Empty resource="teachers" />
      )}
    </div>
  );
}

export default TeachersClasses;
