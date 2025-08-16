import { getUsersPermisions } from "@/services/apiOthers";
import { useQuery } from "@tanstack/react-query";

export const useGetUsersPermisions = function () {
  const { data, isLoading } = useQuery({
    queryKey: ["others"],
    queryFn: getUsersPermisions,
  });

  return { data, isLoading };
};
