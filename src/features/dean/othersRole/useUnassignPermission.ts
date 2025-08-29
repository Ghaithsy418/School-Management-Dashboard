import { unassignPermission } from "@/services/apiOthers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUnassignPermission = function () {
  const queryClient = useQueryClient();
  const {
    mutate: unassignPermissionMutation,
    isPending: isUnassigningPermission,
  } = useMutation({
    mutationFn: (data: { user_id: number; permission: string }) =>
      unassignPermission(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["others"] });
      toast.success("Permission has been unassigned Successfully!");
    },
    onError: (err) => toast.error(err.message),
  });

  return { unassignPermissionMutation, isUnassigningPermission };
};
