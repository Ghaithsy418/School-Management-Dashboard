import { assignTeacherToClass } from "@/services/apiClasses";
import { useClassesUi } from "@/slices/classesUiSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAssignTeacherToClass = function () {
  const { className, teacherId } = useClassesUi();
  const { mutate: assignTeacherMutation, isPending: isAssigningTeacher } =
    useMutation({
      mutationFn: () => assignTeacherToClass({ className, teacherId }),
      onSuccess: () => {
        toast.success("Teacher has been assigned Successfully");
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { assignTeacherMutation, isAssigningTeacher };
};
