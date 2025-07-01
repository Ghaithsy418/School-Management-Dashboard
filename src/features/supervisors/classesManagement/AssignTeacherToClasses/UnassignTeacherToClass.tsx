import Spinner from "@/ui/Spinner";
import TeacherClassesRow from "./TeacherClassesRow";
import { useGetClassTeachers } from "./useGetClassTeachers";
import Empty from "@/ui/Empty";

function UnassignTeacherToClass({
  className,
  classId,
}: {
  className: string;
  classId: number;
}) {
  const { teachers, isGettingTeachers } = useGetClassTeachers(classId);

  if (isGettingTeachers)
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <Spinner />
        <p className="text-lg font-semibold">Loading Teachers...</p>
      </div>
    );

  return (
    <div className="flex w-full flex-col gap-8">
      <h3 className="place-self-start text-2xl font-semibold">
        ({className}) teachers:
      </h3>
      {teachers?.length ? (
        <div className="flex w-full flex-col items-center justify-center gap-3 divide-y-1 divide-gray-600/30">
          {teachers?.map(
            (teacher: {
              teacher_id: number;
              user_info: string;
              subject: string;
            }) => (
              <TeacherClassesRow
                teacher={teacher}
                className={className}
                classId={classId}
                key={teacher.teacher_id}
              />
            ),
          )}
        </div>
      ) : (
        <Empty resource="teachers" />
      )}
    </div>
  );
}

export default UnassignTeacherToClass;
