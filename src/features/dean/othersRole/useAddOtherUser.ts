import { addOthers } from "@/services/apiAuth";
import { useUser } from "@/slices/userSlice";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddOtherUser = function () {
  const { token } = useUser();
  const queryClient = useQueryClient();
  const { mutate: addOtherUserMutation, isPending: isAddingOtherUser } =
    useMutation({
      mutationFn: (data: TeacherSupervisorTypes) => addOthers(data, token),
      onSuccess: () => {
        toast.success("User has been created Successfully");
        queryClient.invalidateQueries({ queryKey: ["others"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { addOtherUserMutation, isAddingOtherUser };
};
