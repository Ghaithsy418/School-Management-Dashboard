import { createSubject } from "@/services/apiSubjects";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateSubject = function () {
  const { mutate: createSubjectMutation, isPending: isCreatingSubject } =
    useMutation({
      mutationFn: (data: {
        subjectName: string;
        minMark: number;
        maxMark: number;
        grade: number;
      }) => createSubject(data),
      onSuccess: () => toast.success("Subject has been created Successfully!"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { createSubjectMutation, isCreatingSubject };
};
