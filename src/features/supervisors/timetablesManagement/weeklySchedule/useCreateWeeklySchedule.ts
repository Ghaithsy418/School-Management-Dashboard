import { CreateWeeklySchedule } from "@/services/apiTimeTables";
import { clearAll } from "@/slices/weeklyScheduleSlice";
import { ScheduleTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

interface DataTypes {
  classId: number;
  schedule: ScheduleTypes[];
}

export const useCreateWeeklySchedule = function () {
  const dispatch = useDispatch();
  const { mutate: createScheduleMutation, isPending: isCreatingSchedule } =
    useMutation({
      mutationFn: (data: DataTypes) => CreateWeeklySchedule(data),
      onSuccess: () => {
        toast.success("Schedule has been created Successfully!");
        dispatch(clearAll());
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { createScheduleMutation, isCreatingSchedule };
};
