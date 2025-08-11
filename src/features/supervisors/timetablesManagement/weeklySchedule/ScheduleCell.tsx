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
}

function ScheduleCell({ day, session, sessionIndex, dayIndex }: CellTypes) {
  const schedule = useSchedule();
  const currentCell = useCurrentCell();
  const { grade } = useClassInfo();
  const dispatch = useDispatch();

  const isSelected =
    currentCell.day === day && currentCell.session === session.value;

  const currentCellContent = schedule.find(
    (cell) => cell.day === day && cell.session === session.value,
  );

  const hasContent = currentCellContent?.subject ? true : false;

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
      key={`${day}-${session}`}
      className={`overflow-hidden border border-gray-200 p-0 ${sessionIndex === SESSIONS.length - 1 && dayIndex === DAYS.length - 1 ? "rounded-br-xl" : ""}`}
    >
      <div
        className={`h-28 cursor-pointer p-4 transition-all duration-300 ${
          isSelected
            ? "scale-105 bg-gradient-to-br from-indigo-100 to-purple-100 shadow-lg"
            : hasContent
              ? "bg-gradient-to-br from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 hover:shadow-md"
              : "bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 hover:shadow-sm"
        }`}
        onClick={selectCell}
      >
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
      </div>
    </td>
  );
}

export default memo(ScheduleCell);
