import {
  setCurrentCell,
  useClassInfo,
  useCurrentCell,
  useSchedule,
} from "@/slices/weeklyScheduleSlice";
import { DAYS, SESSIONS } from "@/utils/constants";
import { ScheduleTypes } from "@/utils/types";
import { memo, useCallback } from "react";
import toast from "react-hot-toast";
import { IoWarningOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface CellTypes {
  day: string;
  session: { title: string; value: number };
  sessionIndex: number;
  dayIndex: number;
  teachersSessions: [Record<string, ScheduleTypes[]>];
}

function ScheduleCell({
  day,
  session,
  sessionIndex,
  dayIndex,
  teachersSessions,
}: CellTypes) {
  const schedule = useSchedule();
  const currentCell = useCurrentCell();
  const { grade, className } = useClassInfo();
  const dispatch = useDispatch();

  const isSelected =
    currentCell.day === day && currentCell.session === session.value;

  const currentCellContent = schedule.find(
    (cell) => cell.day === day && Number(cell.session) === session.value,
  );

  const hasContent = currentCellContent?.subject ? true : false;
  const errorSession = findSession(
    teachersSessions,
    currentCellContent,
    session,
    day,
    className,
  );

  const hasError = useCallback(
    function hasError() {
      if (!currentCellContent?.subject) return false;
      if (errorSession) return true;
    },
    [errorSession, currentCellContent],
  );

  function detectCellColor() {
    if (isSelected)
      return "scale-105 bg-gradient-to-br from-indigo-200 to-purple-200 shadow-lg";
    if (hasError())
      return "bg-gradient-to-br from-rose-100 to-red-100 hover:from-rose-200 hover:to-red-200 hover:shadow-md";
    if (hasContent)
      return "bg-gradient-to-br from-emerald-100 to-green-100 hover:from-emerald-200 hover:to-green-200 hover:shadow-md";
    else
      return "bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 hover:shadow-sm";
  }

  function selectCell() {
    dispatch(setCurrentCell({ day, session: session.value }));
    if (!grade)
      toast(
        "You must Select a Grade first to avoid deleting all the sessions!",
        {
          icon: (
            <IoWarningOutline className="h-10 w-10 rounded-full bg-yellow-100 p-2 text-yellow-700" />
          ),
        },
      );
  }

  return (
    <td
      className={`overflow-hidden border border-gray-200 p-0 ${sessionIndex === SESSIONS.length - 1 && dayIndex === DAYS.length - 1 ? "rounded-br-xl" : ""}`}
    >
      <div
        className={`h-28 cursor-pointer p-4 transition-all ${hasError() ? "flex items-center" : ""} duration-300 ${detectCellColor()}`}
        onClick={selectCell}
      >
        {hasError() ? (
          <div className="flex items-center justify-center gap-1">
            <IoWarningOutline className="h-4 w-4 text-red-700" />
            <p className="text-xs text-red-500">
              {currentCellContent?.subject}'s Teacher is busy
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col justify-center space-y-2">
            <div
              className={`truncate text-sm font-bold ${
                currentCellContent?.subject ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {currentCellContent?.subject || "Click to add"}
            </div>
            {/* {schedule[day][session].instructor && (
            <div className="truncate rounded-md bg-white/50 px-2 py-1 text-xs text-gray-600">
              👨‍🏫 {schedule[day][session].instructor}
            </div>
          )} */}
          </div>
        )}
      </div>
    </td>
  );
}

function findSession(
  teachersSessions: [Record<string, ScheduleTypes[]>],
  currentCellContent: ScheduleTypes | null | undefined,
  session: { value: number },
  day: string,
  className: string,
): ScheduleTypes | undefined {
  const subjectKey = currentCellContent?.subject?.toLowerCase();
  let foundSession: ScheduleTypes | undefined;

  if (subjectKey) {
    const scheduleObject = teachersSessions?.[0];
    const sessionsForSubject = scheduleObject?.[subjectKey];
    foundSession = sessionsForSubject?.find(
      (teacherSession) =>
        Number(teacherSession.session) === session.value &&
        teacherSession.day === day &&
        teacherSession?.className !== className,
    );
  }
  return foundSession;
}

export default memo(ScheduleCell);
