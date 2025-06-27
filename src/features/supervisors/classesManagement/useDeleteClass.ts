import { deleteClass } from "@/services/apiClasses";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteClass = function () {
  const queryClient = useQueryClient();
  const { mutate: deleteClassMutation, isPending: isDeletingClass } =
    useMutation({
      mutationFn: (data: { classId: number }) => deleteClass(data),
      onSuccess: () => {
        toast.success("The class has been deleted Successfully");
        queryClient.invalidateQueries({ queryKey: ["classes"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { deleteClassMutation, isDeletingClass };
};
