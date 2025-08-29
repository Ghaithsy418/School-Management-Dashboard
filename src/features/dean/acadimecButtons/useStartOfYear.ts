import { startOfYear } from "@/services/apiAcademic";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useStartOfYear = function () {
  const { mutate: startOfYearMutation, isPending } = useMutation({
    mutationFn: startOfYear,
    onSuccess: () => toast.success("New Year has been started"),
    onError: (err) => toast.error(err.message),
  });

  return { startOfYearMutation, isPending };
};
