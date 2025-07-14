import { addStudent } from "@/services/apiAuth";
import { useUser } from "@/slices/userSlice";
import { AddStudentTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddStudent = function () {
  const { token } = useUser();
  const queryClient = useQueryClient();
  const { mutate: addStudentMutation, isPending: isAddingStudent } =
    useMutation({
      mutationFn: (data: AddStudentTypes) => addStudent(data, token),
      onSuccess: () => {
        toast.success("Student has been added Successfully");
        queryClient.invalidateQueries({ queryKey: ["students"] });
      },

      onError: (err: Error) => toast.error(err.message),
    });

  return { addStudentMutation, isAddingStudent };
};
