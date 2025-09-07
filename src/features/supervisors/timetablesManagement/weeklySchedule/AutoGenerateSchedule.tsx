import { useClassInfo } from "@/slices/weeklyScheduleSlice";
import { MdAutoFixHigh } from "react-icons/md";
import { useAutoGenerateWeeklySchedule } from "./useAutoGenerateWeeklySchedule";
import SmallSpinner from "@/ui/SmallSpinner";

function AutoGenerateSchedule() {
  const { className } = useClassInfo();
  const { autoGenerateMutation, isGeneratingSchedule } =
    useAutoGenerateWeeklySchedule();

  return (
    <button
      onClick={() => autoGenerateMutation({ className })}
      className="flex cursor-pointer items-center justify-center gap-3 rounded-lg bg-emerald-600 px-4 py-2 text-emerald-50 transition-colors duration-300 hover:bg-emerald-700 dark:bg-emerald-100 dark:text-emerald-900 hover:dark:bg-emerald-50"
    >
      {isGeneratingSchedule ? (
        <SmallSpinner />
      ) : (
        <>
          <MdAutoFixHigh className="h-5 w-5" />{" "}
          <span>Auto Generate Schedule</span>
        </>
      )}
    </button>
  );
}

export default AutoGenerateSchedule;
