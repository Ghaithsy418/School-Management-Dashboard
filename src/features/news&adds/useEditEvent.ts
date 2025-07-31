import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editPost } from "@/services/apiEvents";
import toast from "react-hot-toast";

type DataTypes = {
  event_name: string;
  post: string;
  photos: FileList;
  deleted_media_ids: number[];
  id: number;
};

export const useEditEvent = function () {
  const queryClient = useQueryClient();
  const { mutate: editEventMutation, isPending: isEditingEvent } = useMutation({
    mutationFn: (data: DataTypes) => editPost(data),
    onSuccess: () => {
      toast.success("Post has been edited Successfully!");
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { editEventMutation, isEditingEvent };
};
