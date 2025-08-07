import { AllComplaintTypes } from "@/utils/types";
import { useSearchParams } from "react-router-dom";

export const useFilterComplaintsPriority = function (
  complaints: AllComplaintTypes[],
) {
  const [searchParams] = useSearchParams();
  const filterPriority = searchParams.get("complaintPriority") || "no priority";

  if (filterPriority === "no priority") return complaints;
  return complaints?.filter(
    (complaint) => complaint.priority === filterPriority,
  );
};
