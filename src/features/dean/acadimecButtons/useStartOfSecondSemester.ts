import { startOfSecondSemester } from "@/services/apiAcademic";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useStartOfSecondSemester = function () {
  const { mutate: startOfSecondSemesterMutation, isPending } = useMutation({
    mutationFn: startOfSecondSemester,
    onSuccess: () => toast.success("Second Semester has been started"),
    onError: (err) => toast.error(err.message),
  });

  return { startOfSecondSemesterMutation, isPending };
};
