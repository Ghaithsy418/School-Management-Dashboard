import { CreateWeeklySchedule } from "@/services/apiTimeTables";
import { clearAll } from "@/slices/weeklyScheduleSlice";
import { ScheduleTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface DataTypes {
  classId: number;
  schedule: ScheduleTypes[];
}

export const useCreateWeeklySchedule = function () {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { mutate: createScheduleMutation, isPending: isCreatingSchedule } =
    useMutation({
      mutationFn: (data: DataTypes) => CreateWeeklySchedule(data),
      onSuccess: () => {
        toast.success("Schedule has been created Successfully!");
        dispatch(clearAll());
        queryClient.invalidateQueries({ queryKey: ["teachersAndSessions"] });
        queryClient.invalidateQueries({ queryKey: ["weeklySchedule"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { createScheduleMutation, isCreatingSchedule };
};
