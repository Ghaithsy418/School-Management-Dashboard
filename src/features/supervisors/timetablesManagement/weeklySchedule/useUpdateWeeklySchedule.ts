import { updateSchedule } from "@/services/apiTimeTables";
import { clearScheduleCompletely } from "@/slices/weeklyScheduleSlice";
import { ScheduleTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface DataTypes {
  classId: number;
  schedule: ScheduleTypes[];
}

export const useUpdateWeeklySchedule = function () {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { mutate: updateScheduleMutation, isPending: isUpdatingSchedule } =
    useMutation({
      mutationFn: (data: DataTypes) => updateSchedule(data),
      onSuccess: () => {
        toast.success("Schedule has been updated Successfully!");
        dispatch(clearScheduleCompletely());
        queryClient.invalidateQueries({ queryKey: ["teachersAndSessions"] });
        queryClient.invalidateQueries({ queryKey: ["weeklySchedule"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { updateScheduleMutation, isUpdatingSchedule };
};
