import { unassignTeacherToClass } from "@/services/apiClasses";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUnassignTeacherToClass = function () {
  const { mutate: unassignTeacherMutation, isPending: isUnassigningTeacher } =
    useMutation({
      mutationFn: (data: { className: string; teacherId: number }) =>
        unassignTeacherToClass(data),
      onSuccess: () => {
        toast.success("The teacher has been UnAssigned Successfully");
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { unassignTeacherMutation, isUnassigningTeacher };
};
