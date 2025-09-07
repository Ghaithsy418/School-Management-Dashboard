import Spinner from "@/ui/Spinner";
import { useState } from "react";
import ComplaintItem from "./ComplaintItem";
import FilterComplaints from "./FilterComplaints";
import { useGetAllComplaints } from "./useGetAllComplaints";
import { useMarkAsSeen } from "./useMarkAsSeen";
import Empty from "@/ui/Empty";
import { useComplaints } from "@/slices/complaintsSlice";

const ComplaintLayout = () => {
  const { ui } = useComplaints();
  const [expandedId, setExpandedId] = useState(0);
  const { markSeenComplaintMutation } = useMarkAsSeen();
  const { complaints, isGettingComplaints } = useGetAllComplaints(
    ui === "withoutTrash" ? "no" : "yes",
  );

  const handleToggle = (id: number) => {
    const newExpandedId = expandedId === id ? 0 : id;
    setExpandedId(newExpandedId);
    if (id !== 0) markSeenComplaintMutation({ id });
  };

  if (isGettingComplaints)
    return (
      <div className="flex h-[25rem] flex-col items-center justify-center gap-2">
        <Spinner />
        <p className="text-sm font-light">Loading Complaints...</p>
      </div>
    );

  return (
    <div className="mx-auto my-10 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-gray-900">
      {ui === "withoutTrash" && <FilterComplaints />}
      <section className="flex flex-col gap-2 p-2">
        {complaints && complaints?.length !== 0 ? (
          complaints?.map((complaint) => (
            <ComplaintItem
              key={complaint.complaint_id}
              complaint={complaint}
              isExpanded={expandedId === complaint.complaint_id}
              onToggle={() => handleToggle(complaint.complaint_id)}
            />
          ))
        ) : (
          <Empty resource="complaints" className="border-white" />
        )}
      </section>
    </div>
  );
};

export default ComplaintLayout;
