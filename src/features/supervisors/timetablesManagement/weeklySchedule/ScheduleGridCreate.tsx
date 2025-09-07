import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { DAYS, SESSIONS } from "@/utils/constants";
import { Clock } from "lucide-react";
import ScheduleCell from "./ScheduleCell";
import {
  setConflicts,
  useClassInfo,
  useConflicts,
  useSchedule,
} from "@/slices/weeklyScheduleSlice";
import { useGetTeachersAndSessions } from "./useGetTeachersAndSessions";
import { useGetClassWeeklySchedule } from "./useGetClassWeeklySchedule";
import SelectClassNameFirst from "./SelectClassNameFirst";

function ScheduleGridCreate() {
  const dispatch = useDispatch();
  const { className } = useClassInfo();
  const schedule = useSchedule();
  const conflictingCells = useConflicts();

  const { teachersSessions } = useGetTeachersAndSessions(className);
  const { isGettingSchedule } = useGetClassWeeklySchedule(className);

  const conflictsSet = useMemo(
    () => new Set(conflictingCells),
    [conflictingCells],
  );

  useEffect(() => {
    if (!schedule || !teachersSessions || !className) {
      dispatch(setConflicts([]));
      return;
    }

    const conflicts = [];
    const scheduleObject = teachersSessions?.[0];

    for (const cell of schedule) {
      if (!cell.subject) continue;

      const subjectKey = cell.subject.toLowerCase();
      const sessionsForSubject = scheduleObject?.[subjectKey];

      const hasConflict = sessionsForSubject?.some(
        (teacherSession) =>
          teacherSession.day === cell.day &&
          Number(teacherSession.session) === Number(cell.session) &&
          teacherSession.className !== className,
      );

      if (hasConflict) {
        conflicts.push(`${cell.day}-${cell.session}`);
      }
    }

    dispatch(setConflicts(conflicts));
  }, [schedule, teachersSessions, className, dispatch]);

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
              <th className="w-32 rounded-tl-xl border border-gray-200 bg-gradient-to-br from-slate-100 to-gray-100 p-4 font-bold text-gray-700 dark:rounded-none dark:border-gray-600 dark:from-slate-600 dark:to-gray-600 dark:text-gray-200">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>Time</span>
                </div>
              </th>
              {DAYS.map((day, index) => (
                <th
                  key={day}
                  className={`min-w-48 border border-gray-200 bg-gradient-to-br from-slate-100 to-gray-100 p-4 font-bold text-gray-700 dark:rounded-none dark:border-gray-600 dark:from-slate-600 dark:to-gray-600 dark:text-gray-200 ${index === DAYS.length - 1 ? "rounded-tr-xl" : ""}`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-indigo-500 dark:bg-indigo-300" />
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
                  className={`border border-gray-200 bg-gradient-to-r from-slate-50 to-gray-50 p-4 text-center font-semibold text-gray-700 dark:rounded-none dark:border-gray-600 dark:from-slate-700/80 dark:to-gray-700/80 dark:text-gray-200 ${sessionIndex === SESSIONS.length - 1 ? "rounded-bl-xl" : ""}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold">{session.title}</span>
                  </div>
                </td>
                {DAYS.map((day, dayIndex) => {
                  const cellKey = `${day}-${session.value}`;
                  const hasConflict = conflictsSet.has(cellKey);

                  return (
                    <ScheduleCell
                      key={`${dayIndex}-${sessionIndex}`}
                      day={day}
                      session={session}
                      dayIndex={dayIndex}
                      sessionIndex={sessionIndex}
                      hasConflict={hasConflict}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleGridCreate;
