import AssignStudentToClass from "./AssignStudentToClass/AssignStudentToClass";
import AssignTeacherToClasses from "./AssignTeacherToClasses/AssignTeacherToClasses";
import ClassesStatistics from "./ClassesStatistics";
import ClassesTable from "./ClassesTable";
import CreateNewClass from "./CreateNewClass";

function Classes() {
  return (
    <div className="grid h-[70vh] grid-cols-[1.3fr_1fr] grid-rows-[100px_100px_60px_100px] items-start gap-2">
      <ClassesTable />
      <ClassesStatistics />
      <CreateNewClass />
      <AssignStudentToClass />
      <AssignTeacherToClasses />
    </div>
  );
}

export default Classes;
