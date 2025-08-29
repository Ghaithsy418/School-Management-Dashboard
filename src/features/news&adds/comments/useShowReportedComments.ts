import { showReportedComments } from "@/services/apiEvents";
import { useQuery } from "@tanstack/react-query";

export const useShowReportedComments = function () {
  const { data, isLoading } = useQuery({
    queryKey: ["reportedComments"],
    queryFn: showReportedComments,
  });

  let reportedComments;
  if (data?.message) {
    const values = Object.values(data?.message);
    reportedComments = values.flat();
  }

  return { reportedComments: reportedComments ?? [], isLoading };
};
