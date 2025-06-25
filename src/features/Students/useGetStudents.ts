import { useUser } from "@/context/UserContext";
import { showStudents } from "@/services/apiStudents";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetStudents = function () {
  const [searchParams] = useSearchParams();
  const { token } = useUser();
  const {
    data: students,
    isLoading: isGettingStudents,
    error: studentsError,
  } = useQuery({
    queryKey: ["students", searchParams.get("page") || 1],
    queryFn: () => showStudents(token, Number(searchParams.get("page")) || 1),
  });

  return {
    students: students?.data?.items,
    isGettingStudents,
    studentsError,
    total: students?.data?.total,
  };
};
