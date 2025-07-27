import { getTeacher } from "@/services/apiTeachers";
import { useQuery } from "@tanstack/react-query";

export const useGetTeacher = function (id: number) {
  const {
    data,
    isLoading: isGettingTeacher,
    isError,
  } = useQuery({
    queryKey: ["teacher", id],
    queryFn: () => getTeacher({ teacher_id: id }),
  });

  return { teacher: data?.data, isGettingTeacher, isError };
};
