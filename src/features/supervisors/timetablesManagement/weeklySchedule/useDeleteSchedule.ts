import { deleteWeeklySchedule } from "@/services/apiTimeTables";
import { clearScheduleCompletely } from "@/slices/weeklyScheduleSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const useDeleteSchedule = function () {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate: deleteScheduleMutation, isPending: isDeletingSchedule } =
    useMutation({
      mutationFn: (data: { className: string }) => deleteWeeklySchedule(data),
      onSuccess: () => {
        toast.success("Schedule has been deleted Successfully!");
        queryClient.invalidateQueries({ queryKey: ["weeklySchedule"] });
        queryClient.invalidateQueries({ queryKey: ["teachersAndSessions"] });
        dispatch(clearScheduleCompletely());
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { deleteScheduleMutation, isDeletingSchedule };
};
