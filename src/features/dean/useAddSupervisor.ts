import { addSupervisor } from "@/services/apiAuth";
import { useUser } from "@/slices/userSlice";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useAddSupervisor = function () {
  const { token } = useUser();
  const { mutate: addSupervisorMutation, isPending: isAddingSupervisor } =
    useMutation({
      mutationFn: (data: TeacherSupervisorTypes) => addSupervisor(data, token),
      onSuccess: () => toast.success("Supervisor has been added Successfully"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { addSupervisorMutation, isAddingSupervisor };
};
