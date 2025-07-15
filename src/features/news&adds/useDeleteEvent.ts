import { deleteEvent } from "@/services/apiEvents";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteEvent = function () {
  const { mutate: deleteEventMutation, isPending: isDeletingEvent } =
    useMutation({
      mutationFn: (id: number) => deleteEvent(id),
      onSuccess: () =>
        toast.success("The event has been deleted Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { deleteEventMutation, isDeletingEvent };
};
