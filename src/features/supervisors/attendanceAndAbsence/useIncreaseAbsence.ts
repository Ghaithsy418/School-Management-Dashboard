import { increaseAbsence } from "@/services/apiAttendance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useIncreaseAbsence = function () {
  const queryClient = useQueryClient();
  const { mutateAsync: increaseAbsenceMutation } = useMutation({
    mutationFn: (data: { studentId: number }) => increaseAbsence(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["students"] }),
  });

  return { increaseAbsenceMutation };
};
