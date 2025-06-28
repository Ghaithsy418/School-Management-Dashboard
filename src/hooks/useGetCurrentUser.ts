import { getCurrentUser } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = function () {
  const { data, isLoading: isGettingCurrentUser } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  return { currentUser: data?.data, isGettingCurrentUser };
};
