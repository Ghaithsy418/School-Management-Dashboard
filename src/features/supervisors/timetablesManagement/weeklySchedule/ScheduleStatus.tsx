import { useClassInfo } from "@/slices/weeklyScheduleSlice";
import AutoGenerateSchedule from "./AutoGenerateSchedule";

function ScheduleStatus() {
  const { className } = useClassInfo();
  return (
    <div className="animate-in slide-in-from-top mt-6 rounded-xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-4 duration-300">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
            <svg
              className="h-4 w-4 text-white"
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
          <p className="font-semibold text-emerald-800">
            Creating schedule for:{" "}
            <span className="font-bold text-emerald-900">{className}</span>{" "}
          </p>
        </div>
        <AutoGenerateSchedule />
      </div>
    </div>
  );
}

export default ScheduleStatus;
