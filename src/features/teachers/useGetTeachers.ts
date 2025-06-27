import { getTeachers } from "@/services/apiTeachers";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetTeachers = function () {
  const [searchParmas] = useSearchParams();
  const { data, isLoading: isGettingTeachers } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });

  const searchQuery = searchParmas.get("search") || "";
  const searchedTeachers = searchQuery
    ? data?.data?.filter((teacher: { full_name: string }) =>
        teacher?.full_name.toLowerCase().includes(searchQuery),
      )
    : data?.data;

  return { teachers: searchedTeachers, isGettingTeachers };
};
