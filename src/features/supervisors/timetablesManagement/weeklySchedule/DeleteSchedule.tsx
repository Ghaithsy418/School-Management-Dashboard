import { TbTrash } from "react-icons/tb";
import { useDeleteSchedule } from "./useDeleteSchedule";
import { useClassInfo } from "@/slices/weeklyScheduleSlice";
import SmallSpinner from "@/ui/SmallSpinner";

function DeleteSchedule() {
  const { className } = useClassInfo();
  const { deleteScheduleMutation, isDeletingSchedule } = useDeleteSchedule();

  return (
    <button
      onClick={() => deleteScheduleMutation({ className })}
      className="flex items-center space-x-2 rounded-xl bg-rose-600 px-6 py-3 text-rose-50 transition-all duration-300 hover:bg-rose-700"
    >
      {isDeletingSchedule ? (
        <SmallSpinner />
      ) : (
        <>
          <TbTrash className="h-5 w-5" />
          <span className="font-medium">Delete Schedule</span>
        </>
      )}
    </button>
  );
}

export default DeleteSchedule;
