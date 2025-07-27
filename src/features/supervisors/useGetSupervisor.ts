import { getSupervisor } from "@/services/apiSupervisors";
import { useQuery } from "@tanstack/react-query";

export const useGetSupervisor = function (id: number) {
  const {
    data,
    isLoading: isGettingSupervisor,
    isError,
  } = useQuery({
    queryKey: ["supervisor", id],
    queryFn: () => getSupervisor({ supervisor_id: id }),
  });

  return { supervisor: data?.data, isGettingSupervisor, isError };
};
