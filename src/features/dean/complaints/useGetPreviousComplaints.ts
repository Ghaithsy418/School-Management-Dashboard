import { getPreviousComplaints } from "@/services/apiComplaints";
import { ComplaintTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface PreviousComplaintsTypes {
  data: ComplaintTypes[];
}

export const useGetPreviousComplaints = function () {
  const { data, isLoading: isGettingComplaints } =
    useQuery<PreviousComplaintsTypes>({
      queryKey: ["previousComplaints"],
      queryFn: getPreviousComplaints,
    });

  return { complaints: data?.data, isGettingComplaints };
};
