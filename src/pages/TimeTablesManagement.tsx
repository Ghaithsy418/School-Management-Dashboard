import ScheduleSwitchButton from "@/features/supervisors/timetablesManagement/ScheduleSwitchButton";
import TimeTablesLayout from "@/features/supervisors/timetablesManagement/weeklySchedule/TimeTablesLayout";

function TimeTablesManagement() {
  return (
    <div className="flex flex-col items-end justify-center gap-8 px-8">
      <ScheduleSwitchButton />
      <TimeTablesLayout />
    </div>
  );
}

export default TimeTablesManagement;
