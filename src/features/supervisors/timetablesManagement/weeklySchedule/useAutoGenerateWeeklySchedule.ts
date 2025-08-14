import { autoGenerateWeeklySchedule } from "@/services/apiTimeTables";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAutoGenerateWeeklySchedule = function () {
  const { mutate: autoGenerateMutation, isPending: isGeneratingSchedule } =
    useMutation({
      mutationFn: (data: { className: string }) =>
        autoGenerateWeeklySchedule(data),
      onSuccess: (data) => {
        toast.success("Schedule has created Successfully!");
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { autoGenerateMutation, isGeneratingSchedule };
};
