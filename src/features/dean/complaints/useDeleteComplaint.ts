import { deleteComplaint } from "@/services/apiComplaints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteComplaint = function () {
  const queryClient = useQueryClient();
  const { mutate: deleteComplaintMutation, isPending: isDeletingComplaint } =
    useMutation({
      mutationFn: (data: { complaintId: number }) => deleteComplaint(data),
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["previousComplaints"] }),
      onError: (err: Error) => toast.error(err.message),
    });

  return { deleteComplaintMutation, isDeletingComplaint };
};
