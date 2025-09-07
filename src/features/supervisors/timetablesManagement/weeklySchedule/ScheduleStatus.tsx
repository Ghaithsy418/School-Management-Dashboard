import { useClassInfo } from "@/slices/weeklyScheduleSlice";
import AutoGenerateSchedule from "./AutoGenerateSchedule";
import { useGetClassWeeklySchedule } from "./useGetClassWeeklySchedule";

function ScheduleStatus() {
  const { className } = useClassInfo();
  const { scheduleExists } = useGetClassWeeklySchedule(className);

  if (scheduleExists) return null;

  return (
    <div className="animate-in slide-in-from-top mt-6 rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-4 duration-300 dark:border-emerald-900 dark:from-emerald-800 dark:to-green-800">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 dark:bg-emerald-200">
            <svg
              className="h-4 w-4 text-white dark:text-emerald-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="font-semibold text-emerald-800 dark:text-emerald-50">
            Creating schedule for:{" "}
            <span className="font-bold text-emerald-900 dark:text-emerald-100">
              {className}
            </span>{" "}
          </p>
        </div>
        <AutoGenerateSchedule />
      </div>
    </div>
  );
}

export default ScheduleStatus;
