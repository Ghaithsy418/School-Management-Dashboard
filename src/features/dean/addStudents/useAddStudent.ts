import { addStudent } from "@/services/apiAuth";
import { RootState } from "@/store";
import { AddStudentTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const useAddStudent = function () {
  const token = useSelector((state: RootState) => state.user.token);
  const { mutate: addStudentMutation, isPending: isAddingStudent } =
    useMutation({
      mutationFn: (data: AddStudentTypes) => addStudent(data, token),
      onSuccess: (data: unknown) => {
        toast.success("Student has been added Successfully");
        console.log(data);
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { addStudentMutation, isAddingStudent };
};
