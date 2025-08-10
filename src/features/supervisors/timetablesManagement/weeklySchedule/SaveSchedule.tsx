import { useClassInfo, useSchedule } from "@/slices/weeklyScheduleSlice";
import { LuSave, LuSaveOff } from "react-icons/lu";
import { useCreateWeeklySchedule } from "./useCreateWeeklySchedule";

function SaveSchedule() {
  const { classId } = useClassInfo();
  const schedule = useSchedule();
  const { createScheduleMutation, isCreatingSchedule } =
    useCreateWeeklySchedule();

  const cantSave = !classId || schedule.length !== 35;
  function handleSaveSchedule() {
    if (cantSave) return;
    else createScheduleMutation({ classId, schedule });
  }

  return (
    <button
      onClick={handleSaveSchedule}
      disabled={cantSave}
      className="flex items-center space-x-2 rounded-xl bg-emerald-500 px-6 py-3 shadow-lg transition-all duration-200 hover:bg-emerald-600 hover:shadow-emerald-500/25 disabled:cursor-not-allowed"
    >
      {cantSave ? (
        <LuSaveOff className="h-5 w-5" />
      ) : (
        <LuSave className="h-5 w-5" />
      )}
      {isCreatingSchedule ? (
        <span className="font-medium">Saving...</span>
      ) : (
        <span className="font-medium">
          {cantSave ? "Can't Save" : "Save Schedule"}
        </span>
      )}
    </button>
  );
}

export default SaveSchedule;
