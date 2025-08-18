import { getSpecificOther } from "@/services/apiOthers";
import { OtherUsersTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface SpecificOtherTypes {
  data: OtherUsersTypes;
}

export const useGetSpecificOther = function (user_id: number) {
  const { data, isLoading: isGettingUser } = useQuery<SpecificOtherTypes>({
    queryKey: ["other", user_id],
    queryFn: () => getSpecificOther({ other_id: user_id }),
  });

  return { user: data?.data, isGettingUser };
};
