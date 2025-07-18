import { addComment } from "@/services/apiEvents";
import { useUser } from "@/slices/userSlice";
import { CommentsTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface DataTypes {
  content: string;
  event_id: number;
  parent_id?: number;
}

interface CachedComments {
  data: CommentsTypes[];
}

export const useAddComment = function (id: number, parentId?: number) {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: addCommentMutation, isPending: isAddingComment } =
    useMutation({
      mutationFn: (data: DataTypes) => addComment(data),

      onMutate: async (newComment) => {
        if (parentId) return;

        await queryClient.cancelQueries({ queryKey: ["comments", id] });
        const previousComments = queryClient.getQueryData<CachedComments>([
          "comments",
          id,
        ]);

        queryClient.setQueryData<CachedComments>(["comments", id], (old) => {
          const newOptimisticComment: CommentsTypes = {
            ...newComment,
            id: Date.now(),
            user_id: user.id,
            name: user.name,
            middle_name: user.middleName,
            last_name: user.lastName,
            role: user.role,
            created_at: new Date().toISOString(),
            reaction_number: 0,
            replies: [],
          };

          if (!old?.data) {
            return { data: [newOptimisticComment] };
          }

          return {
            ...old,
            data: [...old.data, newOptimisticComment],
          };
        });

        return { previousComments };
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["comments", id] });
        queryClient.invalidateQueries({ queryKey: ["events"] });
      },
      onError: (err: Error, _newComment, context) => {
        toast.error(err.message);
        if (context?.previousComments) {
          queryClient.setQueryData(["comments", id], context.previousComments);
        }
      },
    });

  return { addCommentMutation, isAddingComment };
};
