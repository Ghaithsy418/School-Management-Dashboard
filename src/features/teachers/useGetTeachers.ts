import { useClientTransform } from "@/hooks/useClientTransform";
import { getTeachers } from "@/services/apiTeachers";
import { useQuery } from "@tanstack/react-query";

export const useGetTeachers = function () {
  const { data, isLoading: isGettingTeachers } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });

  const finalTeachers = useClientTransform(data?.data, "full_name");

  return { teachers: finalTeachers, isGettingTeachers };
};
