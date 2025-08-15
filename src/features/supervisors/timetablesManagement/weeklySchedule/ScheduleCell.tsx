import {
  setCurrentCell,
  useClassInfo,
  useCurrentCell,
  useSchedule,
} from "@/slices/weeklyScheduleSlice";
import { DAYS, SESSIONS } from "@/utils/constants";
import { memo } from "react";
import toast from "react-hot-toast";
import { IoWarningOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

interface CellTypes {
  day: string;
  session: { title: string; value: number };
  sessionIndex: number;
  dayIndex: number;
  hasConflict: boolean;
}

function ScheduleCell({
  day,
  session,
  sessionIndex,
  dayIndex,
  hasConflict,
}: CellTypes) {
  const schedule = useSchedule();
  const currentCell = useCurrentCell();
  const { grade } = useClassInfo();
  const dispatch = useDispatch();

  const isSelected =
    currentCell.day === day && currentCell.session === session.value;

  const currentCellContent = schedule.find(
    (cell) => cell.day === day && Number(cell.session) === session.value,
  );

  const hasContent = !!currentCellContent?.subject;

  function detectCellColor() {
    if (isSelected)
      return "scale-105 bg-gradient-to-br from-indigo-200 to-purple-200 shadow-lg";
    if (hasConflict)
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
        "You must select a Grade first to avoid deleting all the sessions!",
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
        className={`h-28 cursor-pointer p-4 transition-all ${hasConflict ? "flex items-center" : ""} duration-300 ${detectCellColor()}`}
        onClick={selectCell}
      >
        {hasConflict ? (
          <div className="flex items-center justify-center gap-1">
            <IoWarningOutline className="h-4 w-4 text-red-700" />
            <p className="text-xs text-red-500">
              {currentCellContent?.subject}'s Teacher is busy
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col justify-center space-y-2">
            <div
              className={`truncate text-sm font-bold capitalize ${
                currentCellContent?.subject ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {currentCellContent?.subject || "Click to add"}
            </div>
          </div>
        )}
      </div>
    </td>
  );
}

export default memo(ScheduleCell);
