import { updateComplaint } from "@/services/apiComplaints";
import { ComplaintTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateComplaint = function () {
  const queryClient = useQueryClient();
  const { mutate: updateComplaintMutation, isPending: isUpdatingComplaint } =
    useMutation({
      mutationFn: (data: ComplaintTypes) =>
        updateComplaint({ ...data, complaint_id: data.id || 0 }),
      onSuccess: () => {
        toast.success("Complaint has been updated Successfully!");
        queryClient.invalidateQueries({ queryKey: ["previousComplaints"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { updateComplaintMutation, isUpdatingComplaint };
};
