import { decreaseAbsence } from "@/services/apiAttendance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDecreaseAbsence = function () {
  const queryClient = useQueryClient();
  const { mutateAsync: decreaseAbsenceMutation } = useMutation({
    mutationFn: (data: { studentId: number }) => decreaseAbsence(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["students"] }),
  });

  return { decreaseAbsenceMutation };
};
