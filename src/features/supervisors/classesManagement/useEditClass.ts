import { editClass } from "@/services/apiClasses";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEditClass = function () {
  const { mutate: editClassMutation, isPending: isEditingClass } = useMutation({
    mutationFn: (data: {
      studentsNum: number;
      className: string;
      classId: number;
      currentStudentNumber: number;
    }) => editClass(data),
    onSuccess: () => toast.success("Class has been edited Successfully!"),
    onError: (err: Error) => toast.error(err.message),
  });
  return { editClassMutation, isEditingClass };
};
