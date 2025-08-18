import { useClientTransform } from "@/hooks/useClientTransform";
import { getUsersPermisions } from "@/services/apiOthers";
import { OtherUsersTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface UsersTypes {
  data: OtherUsersTypes[];
}

export const useGetUsersPermisions = function () {
  const { data, isLoading: isGettingOthers } = useQuery<UsersTypes>({
    queryKey: ["others"],
    queryFn: getUsersPermisions,
  });

  const others = useClientTransform(data?.data || [], "full_name");

  return { others, isGettingOthers };
};
