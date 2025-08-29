import { endOfYear } from "@/services/apiAcademic";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEndOfYear = function () {
  const { mutate: endOfYearMutation, isPending } = useMutation({
    mutationFn: endOfYear,
    onSuccess: () => toast.success("Year has been ended"),
    onError: (err) => toast.error(err.message),
  });

  return { endOfYearMutation, isPending };
};
