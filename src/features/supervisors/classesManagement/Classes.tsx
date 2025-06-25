import ClassesStatistics from "./ClassesStatistics";
import ClassesTable from "./ClassesTable";

function Classes() {
  return (
    <div className="grid grid-cols-[1.2fr_1fr] items-start gap-4 py-6">
      <ClassesTable />
      <ClassesStatistics />
    </div>
  );
}

export default Classes;
