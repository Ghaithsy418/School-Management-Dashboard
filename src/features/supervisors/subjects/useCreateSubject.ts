import { createSubject } from "@/services/apiSubjects";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateSubject = function () {
  const queryClient = useQueryClient();
  const { mutate: createSubjectMutation, isPending: isCreatingSubject } =
    useMutation({
      mutationFn: (data: {
        subjectName: string;
        minMark: number;
        maxMark: number;
        grade: number;
      }) =>
        createSubject({
          ...data,
          subjectName: `${data.subjectName.slice(0, 1).toUpperCase()}${data.subjectName.slice(1).toLowerCase()}`,
        }),
      onSuccess: () => {
        toast.success("Subject has been created Successfully!");
        queryClient.invalidateQueries({ queryKey: ["subjects"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { createSubjectMutation, isCreatingSubject };
};
