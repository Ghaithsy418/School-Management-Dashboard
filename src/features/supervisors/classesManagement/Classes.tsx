import AssignStudentToClass from "./AssignStudentToClass/AssignStudentToClass";
import AssignTeacherToClasses from "./AssignTeacherToClasses/AssignTeacherToClasses";
import ClassesStatistics from "./ClassesStatistics";
import ClassesTable from "./ClassesTable";
import CreateNewClass from "./CreateNewClass";

function Classes() {
  return (
    <div className="grid h-[70vh] grid-cols-[40rem_32rem] grid-rows-[100px_100px_60px_100px] items-start justify-center gap-2">
      <ClassesTable />
      <ClassesStatistics />
      <CreateNewClass />
      <AssignStudentToClass />
      <AssignTeacherToClasses />
    </div>
  );
}

export default Classes;
