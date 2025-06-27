import { getSupervisors } from "@/services/apiSupervisors";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export const useGetSupervisors = function () {
  const [searchParams] = useSearchParams();
  const { data, isLoading: isGettingSupervisors } = useQuery({
    queryKey: ["supervisors"],
    queryFn: getSupervisors,
  });

  const searchQuery = searchParams.get("search") || "";
  const searchedSupervisors = searchQuery
    ? data?.data?.filter((supervisor: { full_name: string }) =>
        supervisor?.full_name.toLowerCase().includes(searchQuery),
      )
    : data?.data;

  return { supervisors: searchedSupervisors, isGettingSupervisors };
};
