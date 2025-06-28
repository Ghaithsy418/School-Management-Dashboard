import { addTeacher } from "@/services/apiAuth";
import { RootState } from "@/store";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const useAddTeacher = function () {
  const token = useSelector((state: RootState) => state.user.token);
  const { mutate: addTeacherMutation, isPending: isAddingTeacher } =
    useMutation({
      mutationFn: (data: TeacherSupervisorTypes) => addTeacher(data, token),
      onSuccess: () => toast.success("Teacher has been added Successfully"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { addTeacherMutation, isAddingTeacher };
};
