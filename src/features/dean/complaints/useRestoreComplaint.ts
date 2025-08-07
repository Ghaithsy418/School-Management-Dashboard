import { restoreComplaint } from "@/services/apiComplaints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useRestoreComplaint = function () {
  const queryClient = useQueryClient();
  const { mutate: restoreComplaintMutation, isPending: isRestoringComplaint } =
    useMutation({
      mutationFn: (data: { complaint_id: number }) => restoreComplaint(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["allComplaints"] });
        toast.success("Complaint has been restored Successfully!");
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { restoreComplaintMutation, isRestoringComplaint };
};
