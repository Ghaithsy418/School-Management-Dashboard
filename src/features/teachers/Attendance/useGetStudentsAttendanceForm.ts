import { studentsAttendanceForm } from "@/services/apiAttendance";
import { useQuery } from "@tanstack/react-query";

export const useGetStudentsAttendanceForm = function (className: string) {
  const { data, isLoading: isGettingAttendanceForm } = useQuery({
    queryKey: ["studentsAttendanceForm", className],
    queryFn: () => studentsAttendanceForm({ className }),
  });

  return { studentsAttendanceForm: data?.data, isGettingAttendanceForm };
};
