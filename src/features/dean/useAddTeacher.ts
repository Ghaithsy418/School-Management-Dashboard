import { addTeacher } from "@/services/apiAuth";
import { useUser } from "@/slices/userSlice";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddTeacher = function () {
  const { token } = useUser();
  const queryClient = useQueryClient();
  const { mutate: addTeacherMutation, isPending: isAddingTeacher } =
    useMutation({
      mutationFn: (data: TeacherSupervisorTypes) => addTeacher(data, token),
      onSuccess: () => {
        toast.success("Teacher has been added Successfully");
        queryClient.invalidateQueries({ queryKey: ["teachers"] });
      },
      onError: (err: Error) => toast.error(err.message),
    });

  return { addTeacherMutation, isAddingTeacher };
};
