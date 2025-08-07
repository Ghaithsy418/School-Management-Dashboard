import { AllComplaintTypes } from "@/utils/types";
import { useSearchParams } from "react-router-dom";

export const useFilterComplaintsStatus = function (
  complaints: AllComplaintTypes[],
) {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get("complaintStatus") || "all";

  if (statusFilter === "all") return complaints;
  return complaints?.filter((complaint) => statusFilter === complaint.status);
};
