import { getExamSchedule } from "@/services/apiTimeTables";
import { useMutation } from "@tanstack/react-query";

interface DataTypes {
  className: string;
  type: string;
  semester: string;
}

export const useGetExamSchedule = function () {
  const { mutate: getExamScheduleMutation, isPending: isGettingExamSchedule } =
    useMutation({
      mutationFn: (data: DataTypes) => getExamSchedule(data),
      onSuccess: (data) => console.log(data),
      onError: (err) => console.log(err.message),
    });

  return { getExamScheduleMutation, isGettingExamSchedule };
};
