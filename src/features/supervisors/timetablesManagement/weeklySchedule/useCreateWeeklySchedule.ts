import { CreateWeeklySchedule } from "@/services/apiTimeTables";
import { ScheduleTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface DataTypes {
  classId: number;
  schedule: ScheduleTypes[];
}

export const useCreateWeeklySchedule = function () {
  const { mutate: createScheduleMutation, isPending: isCreatingSchedule } =
    useMutation({
      onMutate: (data: DataTypes) => CreateWeeklySchedule(data),
      onSuccess: () => toast.success("Schedule has been created Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { createScheduleMutation, isCreatingSchedule };
};
