import { getAllComplaints } from "@/services/apiComplaints";
import { AllComplaintTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useFilterComplaintsStatus } from "./useFilterComplaintsStatus";
import { useFilterComplaintsPriority } from "./useFilterComplaintsPriority";

interface AllComplaintsTypes {
  data: {
    low: AllComplaintTypes[];
    medium: AllComplaintTypes[];
    high: AllComplaintTypes[];
  };
}

export const useGetAllComplaints = function (withTrash: string) {
  const { data, isLoading: isGettingComplaints } = useQuery<AllComplaintsTypes>(
    {
      queryKey: ["allComplaints", withTrash],
      queryFn: () => getAllComplaints({ withTrash }),
      staleTime: 20 * 1000,
    },
  );

  const complaints = data?.data ? Object.values(data.data).flat() : [];
  const filteredStatusComplaints = useFilterComplaintsStatus(complaints);
  const filteredPriorityComplaints = useFilterComplaintsPriority(
    filteredStatusComplaints,
  );

  return {
    complaints: filteredPriorityComplaints,
    isGettingComplaints,
  };
};
