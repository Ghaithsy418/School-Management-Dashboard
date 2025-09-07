import ScheduleHeader from "@/features/supervisors/timetablesManagement/weeklySchedule/ScheduleHeader";
import Empty from "@/ui/Empty";
import WeeklyScheduleGrid from "./WeeklyScheduleGrid";
import { useGetTeacherWeeklySchedule } from "./useGetTeacherWeeklySchedule";
import Spinner from "@/ui/Spinner";

function WeeklyScheduleLayout() {
  const { isError, isGettingSchedule, weeklySchedule } =
    useGetTeacherWeeklySchedule();

  if (isGettingSchedule)
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <Spinner />
        <p className="text-lg font-bold">Loading Your Schedule...</p>
      </div>
    );

  if (isError || weeklySchedule?.length === 0)
    return (
      <div className="w-full">
        <Empty resource="schedule" className="border-slate-400" />
      </div>
    );

  return (
    <div className="w-full rounded-md bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:rounded-sm dark:bg-gray-800">
      <div className="overflow-hidden rounded-t-2xl bg-white/80 shadow-xl backdrop-blur-sm dark:rounded-md dark:bg-gray-800">
        <ScheduleHeader
          colors="from-indigo-600 via-purple-700 to-pink-700"
          description="Take a look at your teaching schedule"
        />
        <WeeklyScheduleGrid weeklySchedule={weeklySchedule || []} />
      </div>
    </div>
  );
}

export default WeeklyScheduleLayout;
