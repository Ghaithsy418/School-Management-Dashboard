import { getStudentsForClasses } from "@/services/apiClasses";
import { useQuery } from "@tanstack/react-query";

export const useGetStudentsForClasses = function (className: string) {
  const { data, isLoading: isGettingStudents } = useQuery({
    queryKey: ["studentsClasses", className],
    queryFn: getStudentsForClasses,
  });

  const studentsClasses = data?.data?.find(
    (classData: { class_name: string }) => classData.class_name === className,
  );

  return { studentsClasses, isGettingStudents };
};
