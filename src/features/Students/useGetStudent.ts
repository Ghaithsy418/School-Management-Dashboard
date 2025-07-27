import { getStudent } from "@/services/apiStudents";
import { SpecificStudentTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface GetStudentTypes {
  data: SpecificStudentTypes;
}

export const useGetStudent = function (id: number) {
  const {
    data,
    isLoading: isGettingStudent,
    isError,
  } = useQuery<GetStudentTypes>({
    queryKey: ["student", id],
    queryFn: () => getStudent({ student_id: id }),
  });

  return { student: data?.data, isGettingStudent, isError };
};
