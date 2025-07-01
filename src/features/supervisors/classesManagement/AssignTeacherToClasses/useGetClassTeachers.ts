import { getClassTeachers } from "@/services/apiClasses";
import { useQuery } from "@tanstack/react-query";

export const useGetClassTeachers = function (classId: number) {
  const { data, isLoading: isGettingTeachers } = useQuery({
    queryKey: ["classTeacher", classId],
    queryFn: () => getClassTeachers({ class_id: classId }),
  });

  return { teachers: data?.data, isGettingTeachers };
};
