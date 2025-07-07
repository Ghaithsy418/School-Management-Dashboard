import { useClientTransform } from "@/hooks/useClientTransform";
import { getSupervisors } from "@/services/apiSupervisors";
import { useQuery } from "@tanstack/react-query";

export const useGetSupervisors = function () {
  const { data, isLoading: isGettingSupervisors } = useQuery({
    queryKey: ["supervisors"],
    queryFn: getSupervisors,
  });

  const finalSupervisors = useClientTransform(data?.data, "full_name");

  return { supervisors: finalSupervisors, isGettingSupervisors };
};
