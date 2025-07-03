import { assignTeacherToClass } from "@/services/apiClasses";
import { clearAll, useClassesUi } from "@/slices/classesUiSlice";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import OverwriteTeacherToClass from "./OverwriteTeacherToClass";
import { useDispatch } from "react-redux";

export const useAssignTeacherToClass = function () {
  const { className, teacherId } = useClassesUi();
  const dispatch = useDispatch();
  const { mutate: assignTeacherMutation, isPending: isAssigningTeacher } =
    useMutation({
      mutationFn: () => assignTeacherToClass({ className, teacherId }),
      onSuccess: () => {
        toast.success("Teacher has been assigned Successfully");
        dispatch(clearAll());
      },
      onError: (err: Error) => {
        if (
          err.message ===
          "there is already another teacher assigned for the same class with the same subject but if you want we can overwrite it"
        ) {
          toast(
            (t) => <OverwriteTeacherToClass errorMessage={err.message} t={t} />,
            { duration: Infinity },
          );
        } else toast.error(err.message);
      },
    });

  return { assignTeacherMutation, isAssigningTeacher };
};
