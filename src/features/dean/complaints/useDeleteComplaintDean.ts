import { deleteComplaintDean } from "@/services/apiComplaints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteComplaintDean = function () {
  const queryClient = useQueryClient();
  const { mutate: deleteComplaintMutation, isPending: isDeletingComplaint } =
    useMutation({
      mutationFn: (data: { complaint_id: number }) => deleteComplaintDean(data),
      onSuccess: () => {
        toast.success("Complaint has been deleted Successfully!");
        queryClient.invalidateQueries({ queryKey: ["allComplaints"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { deleteComplaintMutation, isDeletingComplaint };
};
