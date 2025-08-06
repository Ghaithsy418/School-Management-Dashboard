import { markComplaintAsSeen } from "@/services/apiComplaints";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useMarkAsSeen = function () {
  const queryClient = useQueryClient();
  const { mutate: markSeenComplaintMutation } = useMutation({
    mutationFn: (data: { id: number }) => markComplaintAsSeen(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["unseenComplaintsNumber"] });
      queryClient.invalidateQueries({ queryKey: ["allComplaints"] });
    },
    onError: (err: Error) => console.error(err.message),
  });

  return { markSeenComplaintMutation };
};
