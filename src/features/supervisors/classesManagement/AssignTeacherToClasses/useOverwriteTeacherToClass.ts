import { overwriteTeacherToClass } from "@/services/apiClasses";
import { useClassesUi } from "@/slices/classesUiSlice";
import { useMutation } from "@tanstack/react-query";
import toast, { Toast } from "react-hot-toast";

export const useOverwriteTeacherToClass = function (t: Toast) {
  const { className, teacherId } = useClassesUi();
  const { mutate: overwriteTeacherMutation, isPending: isOverwritingTeacher } =
    useMutation({
      mutationFn: () => overwriteTeacherToClass({ className, teacherId }),
      onSuccess: () => {
        toast.dismiss(t.id);
        toast.success("Teacher has been assigned Successfully");
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { overwriteTeacherMutation, isOverwritingTeacher };
};
