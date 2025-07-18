import { editComment } from "@/services/apiEvents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEditComment = function (eventId: number) {
  const queryClient = useQueryClient();
  const { mutate: editCommentMutation, isPending: isEditing } = useMutation({
    mutationFn: (data: { commentId: number; content: string }) =>
      editComment(data),
    onSuccess: () => {
      toast.success("Comment has been edited Successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", eventId] });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { editCommentMutation, isEditing };
};
