import { showStudents } from "@/services/apiStudents";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetStudents = function () {
  const [searchParams] = useSearchParams();
  const {
    data,
    isLoading: isGettingStudents,
    error: studentsError,
  } = useQuery({
    queryKey: ["students"],
    queryFn: () => showStudents(),
  });

  const searchQuery = searchParams.get("search") || "";
  const searchedStudents =
    searchQuery === ""
      ? data?.data
      : data?.data?.filter((student: { full_name: string }) =>
          student?.full_name.toLowerCase().includes(searchQuery),
        );

  return {
    students: searchedStudents,
    isGettingStudents,
    studentsError,
  };
};
