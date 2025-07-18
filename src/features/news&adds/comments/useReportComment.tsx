import { reportComment } from "@/services/apiEvents";
import { useComments } from "@/slices/commentsSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useReportComment = function () {
  const { commentId } = useComments();
  const { mutate: reportCommentMutation, isPending: isReporting } = useMutation(
    {
      mutationFn: (data: { reason: string }) =>
        reportComment({ ...data, comment_id: commentId }),
      onSuccess: () =>
        toast.success("the comment has been reported Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    },
  );

  return { reportCommentMutation, isReporting };
};
