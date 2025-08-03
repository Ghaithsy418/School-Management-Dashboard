import { checkStudentWarnings } from "@/services/apiAttendance";
import { useQuery } from "@tanstack/react-query";

interface CheckTypes {
  data: { warning: number; student_id: number };
}

export const useCheckStudentWarnings = function (studentId: number) {
  const { refetch } = useQuery<CheckTypes>({
    queryKey: ["studentWarnings", studentId],
    queryFn: () => checkStudentWarnings({ studentId }),
    enabled: false,
  });

  return { refetch };
};
