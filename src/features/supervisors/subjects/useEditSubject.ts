import { editSubject } from "@/services/apiSubjects";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEditSubject = function () {
  const queryClient = useQueryClient();
  const { mutate: editSubjectMutation, isPending: isEditingSubject } =
    useMutation({
      mutationFn: (data: { id: number; maxMark: number; minMark: number }) =>
        editSubject(data),
      onSuccess: () => {
        toast.success("Subject has been edited Successfully!");
        queryClient.invalidateQueries({ queryKey: ["subjects"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { editSubjectMutation, isEditingSubject };
};
