import { modifyComplaint } from "@/services/apiComplaints";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DataTypes {
  complaint_id: number;
  status?: string;
  priority?: string;
}

export const useModifyComplaint = function () {
  const queryClient = useQueryClient();
  const { mutate: modifyComplaintMutation, isPending: isModifyingComplaint } =
    useMutation({
      mutationFn: (data: DataTypes) => modifyComplaint(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["allComplaints"] });
      },
      onError: (err: Error) => console.error(err.message),
    });

  return { modifyComplaintMutation, isModifyingComplaint };
};
