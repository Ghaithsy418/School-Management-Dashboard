import { deleteUser } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteUser = function (personType: string) {
  const queryClient = useQueryClient();
  const { mutate: deleteUserMutation, isPending: isDeletingUser } = useMutation(
    {
      mutationFn: (data: { user_id: number }) => deleteUser(data),
      onSuccess: () => {
        toast.success(`${personType} has been deleted Successfully`);
        queryClient.invalidateQueries({ queryKey: [`${personType}s`] });
      },
      onError: (err: Error) => toast.error(err.message),
    },
  );

  return { deleteUserMutation, isDeletingUser };
};
