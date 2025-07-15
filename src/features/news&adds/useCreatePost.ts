import { createPost } from "@/services/apiEvents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreatePost = function () {
  const queryClient = useQueryClient();
  const { mutate: createPostMutation, isPending: isCreatingPost } = useMutation(
    {
      mutationFn: (data: {
        event_name: string;
        post: string;
        photos: FileList;
      }) => createPost(data),
      onSuccess: () => {
        toast.success("Post Created Successfully!");
        queryClient.invalidateQueries({ queryKey: ["events"] });
      },
      onError: (err: Error) => toast.error(err.message),
    },
  );

  return { createPostMutation, isCreatingPost };
};
