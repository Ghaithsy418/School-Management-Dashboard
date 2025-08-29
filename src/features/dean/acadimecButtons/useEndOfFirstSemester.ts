import { endOfFirstSemester } from "@/services/apiAcademic";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEndOfFirstSemester = function () {
  const { mutate: endOfFirstSemesterMutation, isPending } = useMutation({
    mutationFn: endOfFirstSemester,
    onSuccess: () => toast.success("First Semester has been ended"),
    onError: (err) => toast.error(err.message),
  });

  return { endOfFirstSemesterMutation, isPending };
};
