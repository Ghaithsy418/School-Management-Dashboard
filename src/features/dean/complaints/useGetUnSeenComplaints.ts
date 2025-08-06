import { getUnSeenComplaints } from "@/services/apiComplaints";
import { useQuery } from "@tanstack/react-query";

interface UnSeenComplaintsTypes {
  count: number;
}

export const useGetUnSeenComplaints = function () {
  const { data } = useQuery<UnSeenComplaintsTypes>({
    queryKey: ["unseenComplaintsNumber"],
    queryFn: getUnSeenComplaints,
  });

  return { unSeenComplaints: data?.count };
};
