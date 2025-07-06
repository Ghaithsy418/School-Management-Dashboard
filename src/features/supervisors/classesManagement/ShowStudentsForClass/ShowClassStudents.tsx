import Empty from "@/ui/Empty";
import Search from "@/ui/Search";
import Spinner from "@/ui/Spinner";
import { useGetStudentsForClass } from "./useGetStudentsForClass";

interface StudentsClassTypes {
  student_id: number;
  full_name: string;
}

function ShowClassStudents({ className }: { className: string }) {
  const { students, isGettingStudents } = useGetStudentsForClass(className);

  if (isGettingStudents) return <Spinner />;

  return (
    <div className="flex w-full flex-col items-start gap-8 pb-4">
      <h3 className="text-2xl font-semibold">{className} students:</h3>
      {students?.length ? (
        <div className="flex w-full flex-col gap-5">
          <Search size="w-68" />
          <div className="flex w-full flex-col items-start justify-center gap-2 divide-y-1 divide-gray-600/20">
            {students.map((student: StudentsClassTypes) => (
              <div className="flex w-full items-center justify-start gap-3 p-4">
                <span className="font-bold">-</span>
                <p className="font-semibold">{student.student_id}</p>
                <p>{student.full_name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Empty resource="students" />
      )}
    </div>
  );
}

export default ShowClassStudents;
