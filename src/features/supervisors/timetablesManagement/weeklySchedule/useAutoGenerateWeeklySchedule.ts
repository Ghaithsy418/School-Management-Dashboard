import { autoGenerateWeeklySchedule } from "@/services/apiTimeTables";
import {
  clearScheduleCompletely,
  pushMultiValuesToSchedule,
} from "@/slices/weeklyScheduleSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const useAutoGenerateWeeklySchedule = function () {
  const dispatch = useDispatch();
  const { mutate: autoGenerateMutation, isPending: isGeneratingSchedule } =
    useMutation({
      mutationFn: (data: { className: string }) =>
        autoGenerateWeeklySchedule(data),
      onSuccess: (data) => {
        console.log(data);
        toast.success("Schedule has created Successfully!");
        dispatch(clearScheduleCompletely());
        dispatch(pushMultiValuesToSchedule(data?.schedule_data));
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { autoGenerateMutation, isGeneratingSchedule };
};
