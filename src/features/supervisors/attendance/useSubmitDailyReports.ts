import { submitDailyReports } from "@/services/apiAttendance";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useSubmitDailyReports = function () {
  const { mutate: submitReportsMutation, isPending: isSubmitingReports } =
    useMutation({
      mutationFn: submitDailyReports,
      onSuccess: () => toast.success("report has been submited Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { submitReportsMutation, isSubmitingReports };
};
