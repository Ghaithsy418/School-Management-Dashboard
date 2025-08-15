import { CreateWeeklySchedule } from "@/services/apiTimeTables";
import { ScheduleTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface DataTypes {
  classId: number;
  schedule: ScheduleTypes[];
}

export const useUpdateWeeklySchedule = function () {
  const queryClient = useQueryClient();
  const { mutate: updateScheduleMutation, isPending: isUpdatingSchedule } =
    useMutation({
      mutationFn: (data: DataTypes) => CreateWeeklySchedule(data),
      onSuccess: () => {
        toast.success("Schedule has been updated Successfully!");
        queryClient.invalidateQueries({ queryKey: ["teachersAndSessions"] });
        queryClient.invalidateQueries({ queryKey: ["weeklySchedule"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { updateScheduleMutation, isUpdatingSchedule };
};
