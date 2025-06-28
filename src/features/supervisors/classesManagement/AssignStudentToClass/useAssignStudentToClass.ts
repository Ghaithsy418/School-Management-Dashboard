import { assignStudentToClass } from "@/services/apiClasses";
import { clearAll, useClassesUi } from "@/slices/classesUiSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export const useAssignStudentToClass = function () {
  const queryClient = useQueryClient();
  const { classId, studentId } = useClassesUi();
  const dispatch = useDispatch();
  const { mutate: assignStudentMutation, isPending: isAssigningStudent } =
    useMutation({
      mutationFn: () => assignStudentToClass({ classId, studentId }),
      onSuccess: () => {
        toast.success("Student has been Assigned Successfully");
        queryClient.invalidateQueries({ queryKey: ["classes"] });
        queryClient.invalidateQueries({ queryKey: ["students"] });
        dispatch(clearAll());
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { assignStudentMutation, isAssigningStudent };
};
