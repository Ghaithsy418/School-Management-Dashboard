import { useUser } from "@/context/UserContext";
import { addTeacher } from "@/services/apiAuth";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddTeacher = function () {
  const { token } = useUser();
  const { mutate: addTeacherMutation, isPending: isAddingTeacher } =
    useMutation({
      mutationFn: (data: TeacherSupervisorTypes) => addTeacher(data, token),
      onSuccess: () => toast.success("Teacher has been added Successfully"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { addTeacherMutation, isAddingTeacher };
};
