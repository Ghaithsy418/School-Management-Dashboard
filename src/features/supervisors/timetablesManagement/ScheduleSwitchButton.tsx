import { Link, useLocation } from "react-router-dom";

function ScheduleSwitchButton() {
  const { pathname } = useLocation();
  return (
    <div className="mr-1 flex w-[19.5rem] items-center justify-between rounded-md border border-gray-700/20 dark:border-gray-400/20">
      <Link
        to="/supervisor/timetables"
        className={`h-full rounded-lg px-4 py-2.5 ${pathname === "/supervisor/timetables" ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-indigo-50 hover:from-violet-700 hover:to-indigo-700" : ""} transition-colors duration-300 hover:bg-gray-200 hover:dark:bg-gray-800`}
      >
        Weekly Schedules
      </Link>
      <Link
        to="/supervisor/timetables/examSchedules"
        className={`h-full rounded-lg px-4 py-2.5 ${pathname === "/supervisor/timetables/examSchedules" ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-indigo-50 hover:from-violet-700 hover:to-indigo-700" : ""} transition-colors duration-300 hover:bg-gray-200 hover:dark:bg-gray-800`}
      >
        Exam Schedules
      </Link>
    </div>
  );
}

export default ScheduleSwitchButton;
