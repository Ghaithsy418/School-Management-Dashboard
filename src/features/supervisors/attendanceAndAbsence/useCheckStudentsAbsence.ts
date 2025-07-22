import { checkStudentsAbsence } from "@/services/apiAttendance";
import { useQuery } from "@tanstack/react-query";

interface StudentsAbsenceTypes {
  className: string;
  date: string;
}

export const useCheckStudentsAbsence = function ({
  className,
  date,
}: StudentsAbsenceTypes) {
  const { data, isLoading: isCheckingAbsence } = useQuery({
    queryKey: ["studentsAbsence", className],
    queryFn: () => checkStudentsAbsence({ class: className, date }),
  });

  return { studentsAbsence: data?.data, isCheckingAbsence };
};
