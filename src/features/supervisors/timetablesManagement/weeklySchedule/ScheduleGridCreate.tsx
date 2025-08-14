import { DAYS, SESSIONS } from "@/utils/constants";
import { Clock } from "lucide-react";
import ScheduleCell from "./ScheduleCell";
import { useClassInfo } from "@/slices/weeklyScheduleSlice";
import { useGetTeachersAndSessions } from "./useGetTeachersAndSessions";
import { useGetClassWeeklySchedule } from "./useGetClassWeeklySchedule";
import SelectClassNameFirst from "./SelectClassNameFirst";

function ScheduleGridCreate() {
  const { className } = useClassInfo();
  const { teachersSessions } = useGetTeachersAndSessions(className);
  const { isGettingSchedule } = useGetClassWeeklySchedule(className);

  if (!className || isGettingSchedule)
    return (
      <div className="animate-pulse px-6 pb-8">
        <SelectClassNameFirst isGettingSchedule={isGettingSchedule} />
      </div>
    );

  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-32 rounded-tl-xl border border-gray-200 bg-gradient-to-br from-slate-100 to-gray-100 p-4 font-bold text-gray-700">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-indigo-600" />
                  <span>Time</span>
                </div>
              </th>
              {DAYS.map((day, index) => (
                <th
                  key={day}
                  className={`min-w-48 border border-gray-200 bg-gradient-to-br from-slate-100 to-gray-100 p-4 font-bold text-gray-700 ${index === DAYS.length - 1 ? "rounded-tr-xl" : ""}`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-indigo-500" />
                    <span className="capitalize">{day}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SESSIONS.map((session, sessionIndex) => (
              <tr key={session.title}>
                <td
                  className={`border border-gray-200 bg-gradient-to-r from-slate-50 to-gray-50 p-4 text-center font-semibold text-gray-700 ${sessionIndex === SESSIONS.length - 1 ? "rounded-bl-xl" : ""}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold">{session.title}</span>
                  </div>
                </td>
                {DAYS.map((day, dayIndex) => (
                  <ScheduleCell
                    key={`${dayIndex}-${sessionIndex}`}
                    day={day}
                    session={session}
                    dayIndex={dayIndex}
                    sessionIndex={sessionIndex}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleGridCreate;
