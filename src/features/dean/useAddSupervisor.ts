import { addSupervisor } from "@/services/apiAuth";
import { RootState } from "@/store";
import { TeacherSupervisorTypes } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export const useAddSupervisor = function () {
  const token = useSelector((state: RootState) => state.user.token);
  const { mutate: addSupervisorMutation, isPending: isAddingSupervisor } =
    useMutation({
      mutationFn: (data: TeacherSupervisorTypes) => addSupervisor(data, token),
      onSuccess: () => toast.success("Supervisor has been added Successfully"),
      onError: (err: Error) => toast.error(err.message),
    });

  return { addSupervisorMutation, isAddingSupervisor };
};
