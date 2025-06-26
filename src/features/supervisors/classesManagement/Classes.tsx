import AssignStudentToClass from "./AssignStudentToClass";
import ClassesStatistics from "./ClassesStatistics";
import ClassesTable from "./ClassesTable";
import CreateNewClass from "./CreateNewClass";

function Classes() {
  return (
    <div className="grid grid-cols-[1.2fr_1fr] grid-rows-[100px_100px_60px_100px] items-start gap-2 py-6">
      <ClassesTable />
      <ClassesStatistics />
      <CreateNewClass />
      <AssignStudentToClass />
    </div>
  );
}

export default Classes;
