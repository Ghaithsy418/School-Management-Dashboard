import { useUser } from "@/context/UserContext";
import { addStudent } from "@/services/apiAuth";
import { StudentTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddStudent = function () {
  const { token } = useUser();
  const { mutate: addStudentMutation, isPending: isAddingStudent } =
    useMutation({
      mutationFn: (data: StudentTypes) => addStudent(data, token),
      onSuccess: (data: unknown) => {
        toast.success("Student has been added Successfully");
        console.log(data);
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { addStudentMutation, isAddingStudent };
};
