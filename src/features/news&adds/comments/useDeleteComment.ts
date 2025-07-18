import { deleteComment } from "@/services/apiEvents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteComment = function (eventId: number) {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteCommentMutation, isPending: isDeleting } =
    useMutation({
      mutationFn: (data: { commentId: number }) => deleteComment(data),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["comments", eventId] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { deleteCommentMutation, isDeleting };
};
