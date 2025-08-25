import { getUnSeenComplaints } from "@/services/apiComplaints";
import { useQuery } from "@tanstack/react-query";

interface UnSeenComplaintsTypes {
  count: number;
}

export const useGetUnSeenComplaints = function () {
  const { data } = useQuery<UnSeenComplaintsTypes>({
    queryKey: ["unseenComplaintsNumber"],
    queryFn: getUnSeenComplaints,
    staleTime: 20 * 1000,
  });

  return { unSeenComplaints: data?.count };
};
