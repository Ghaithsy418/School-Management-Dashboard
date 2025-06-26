import { useClassesUi } from "@/context/ClassesUi";
import { assignStudentToClass } from "@/services/apiClasses";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAssignStudentToClass = function () {
  const queryClient = useQueryClient();
  const { className, studentId } = useClassesUi();
  const { mutate: assignStudentMutation, isPending: isAssigningStudent } =
    useMutation({
      mutationFn: () => assignStudentToClass({ className, studentId }),
      onSuccess: () => {
        toast.success("Student has been Assigned Successfully");
        queryClient.invalidateQueries({ queryKey: ["classes"] });
        queryClient.invalidateQueries({
          queryKey: ["students", "1"],
        });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { assignStudentMutation, isAssigningStudent };
};
