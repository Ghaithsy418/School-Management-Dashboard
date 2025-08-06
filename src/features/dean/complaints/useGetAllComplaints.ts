import { getAllComplaints } from "@/services/apiComplaints";
import { AllComplaintTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface AllComplaintsTypes {
  data: {
    low: AllComplaintTypes[];
    medium: AllComplaintTypes[];
    high: AllComplaintTypes[];
  };
}

export const useGetAllComplaints = function (withTrash: boolean) {
  const { data, isLoading: isGettingComplaints } = useQuery<AllComplaintsTypes>(
    {
      queryKey: ["allComplaints", withTrash],
      queryFn: () => getAllComplaints({ withTrash }),
    },
  );

  return {
    complaints: data?.data ? Object.values(data.data).flat() : [],
    isGettingComplaints,
  };
};
