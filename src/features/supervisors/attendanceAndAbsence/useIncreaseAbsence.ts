import { increaseAbsence } from "@/services/apiAttendance";
import { useMutation } from "@tanstack/react-query";

export const useIncreaseAbsence = function () {
  const { mutateAsync: increaseAbsenceMutation } = useMutation({
    mutationFn: (data: { studentId: number }) => increaseAbsence(data),
  });

  return { increaseAbsenceMutation };
};
