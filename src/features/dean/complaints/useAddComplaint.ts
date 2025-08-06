import { addComplaint } from "@/services/apiComplaints";
import { ComplaintTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddComplaint = function () {
  const queryClient = useQueryClient();
  const { mutate: addComplaintMutation, isPending: isAddingComplaint } =
    useMutation({
      mutationFn: (data: ComplaintTypes) => addComplaint(data),
      onSuccess: () => {
        toast.success("Complaint has been added Successfully");
        queryClient.invalidateQueries({ queryKey: ["previousComplaints"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { addComplaintMutation, isAddingComplaint };
};
