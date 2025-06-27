import { getStudentsForClasses } from "@/services/apiClasses";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetStudentsForClass = function (className: string) {
  const [searchParams] = useSearchParams();
  const { data, isLoading: isGettingStudents } = useQuery({
    queryKey: ["studentsClasses", className],
    queryFn: getStudentsForClasses,
  });

  const studentsClasses = data?.data?.find(
    (classData: { class_name: string }) => classData.class_name === className,
  );

  const searchQuery = searchParams.get("search") || "";
  const searchedStudents = searchQuery
    ? studentsClasses?.students?.filter((student: { full_name: string }) =>
        student.full_name.toLowerCase().includes(searchQuery),
      )
    : studentsClasses?.students;

  return { students: searchedStudents, isGettingStudents };
};
