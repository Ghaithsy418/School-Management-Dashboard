import { assignPermission } from "@/services/apiOthers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAssignPermission = function () {
  const queryClient = useQueryClient();
  const { mutate: assignPermissionMutation, isPending: isAssigningPermission } =
    useMutation({
      mutationFn: (data: { user_id: number; permission: string }) =>
        assignPermission(data),
      onSuccess: () => {
        toast.success("Permission has been assigned Successfully!");
        queryClient.invalidateQueries({ queryKey: ["others"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { assignPermissionMutation, isAssigningPermission };
};
