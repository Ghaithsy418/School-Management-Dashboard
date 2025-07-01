import { assignTeacherToClass } from "@/services/apiClasses";
import { useClassesUi } from "@/slices/classesUiSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import OverwriteTeacherToClass from "./OverwriteTeacherToClass";

export const useAssignTeacherToClass = function () {
  const { className, teacherId } = useClassesUi();
  const { mutate: assignTeacherMutation, isPending: isAssigningTeacher } =
    useMutation({
      mutationFn: () => assignTeacherToClass({ className, teacherId }),
      onSuccess: () => {
        toast.success("Teacher has been assigned Successfully");
      },
      onError: (err: Error) => {
        if (
          err.message ===
          "there is already another teacher assigned for the same class with the same subject but if you want we can overwrite it"
        ) {
          toast(
            (t) => <OverwriteTeacherToClass errorMessage={err.message} t={t} />,
            { duration: 10000 },
          );
        } else toast.error(err.message);
      },
    });

  return { assignTeacherMutation, isAssigningTeacher };
};
