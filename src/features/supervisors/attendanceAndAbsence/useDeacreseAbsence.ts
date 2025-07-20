import { decreaseAbsence } from "@/services/apiAttendance";
import { useMutation } from "@tanstack/react-query";

export const useDecreaseAbsence = function () {
  const { mutateAsync: decreaseAbsenceMutation } = useMutation({
    mutationFn: (data: { studentId: number }) => decreaseAbsence(data),
  });

  return { decreaseAbsenceMutation };
};
