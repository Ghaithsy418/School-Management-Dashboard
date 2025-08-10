import ScheduleSelectClass from "./ScheduleSelectClass";
import ScheduleSelectGrade from "./ScheduleSelectGrade";

function ScheduleSelections() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-8 px-8 md:grid-cols-2">
      <ScheduleSelectGrade />
      <ScheduleSelectClass />
    </div>
  );
}

export default ScheduleSelections;
