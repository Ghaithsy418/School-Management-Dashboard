import { deleteSubject } from "@/services/apiSubjects";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteSubject = function (subjectName: string) {
  const queryClient = useQueryClient();
  const { mutate: deleteSubjectMutation, isPending: isDeletingSubject } =
    useMutation({
      mutationFn: ({ id }: { id: number }) => deleteSubject({ id }),
      onSuccess: () => {
        toast.success(`${subjectName} has been deleted Successfully!`);
        queryClient.invalidateQueries({ queryKey: ["subjects"] });
      },
    });

  return { deleteSubjectMutation, isDeletingSubject };
};
