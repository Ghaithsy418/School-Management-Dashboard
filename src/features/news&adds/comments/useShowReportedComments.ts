import { showReportedComments } from "@/services/apiEvents";
import { useQuery } from "@tanstack/react-query";

export const useShowReportedComments = function () {
  const { data, isLoading } = useQuery({
    queryKey: ["reportedComments"],
    queryFn: showReportedComments,
  });

  return { reportedComments: data?.message, isLoading };
};
