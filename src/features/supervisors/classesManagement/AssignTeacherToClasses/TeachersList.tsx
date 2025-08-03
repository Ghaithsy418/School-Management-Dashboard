import TeacherClassesRow from "./TeacherClassesRow";

// Assuming a standard Teacher type for your application
interface Teacher {
  full_name?: string;
  teacher_id: number;
  subject: string;
  user_info?: string;
}

interface TeachersListProps {
  teachers: Teacher[];
}

function TeachersList({ teachers }: TeachersListProps) {
  return (
    <div className="flex w-full flex-col gap-2 divide-y divide-slate-100 dark:divide-slate-500/60">
      {teachers?.map((teacher) => (
        <TeacherClassesRow teacher={teacher} key={teacher.teacher_id} />
      ))}
    </div>
  );
}

export default TeachersList;
