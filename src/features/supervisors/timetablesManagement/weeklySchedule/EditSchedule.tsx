import { MdOutlineEditCalendar } from "react-icons/md";
import { useUpdateWeeklySchedule } from "./useUpdateWeeklySchedule";
import {
  useClassInfo,
  useConflicts,
  useSchedule,
} from "@/slices/weeklyScheduleSlice";
import SmallSpinner from "@/ui/SmallSpinner";

function EditSchedule() {
  const { classId } = useClassInfo();
  const schedule = useSchedule();
  const conflictingCells = useConflicts();
  const { updateScheduleMutation, isUpdatingSchedule } =
    useUpdateWeeklySchedule();

  return (
    <button
      disabled={conflictingCells.length > 0}
      onClick={() => updateScheduleMutation({ classId, schedule })}
      className="flex items-center space-x-2 rounded-xl bg-indigo-500 px-6 py-3 shadow-lg transition-all duration-200 hover:bg-indigo-600 hover:shadow-emerald-500/25 disabled:cursor-not-allowed"
    >
      {isUpdatingSchedule ? (
        <SmallSpinner />
      ) : (
        <>
          <MdOutlineEditCalendar className="h-5 w-5" />
          <span>
            {conflictingCells.length > 0 ? "Can't Edit" : "Edit Schedule"}
          </span>
        </>
      )}
    </button>
  );
}

export default EditSchedule;
