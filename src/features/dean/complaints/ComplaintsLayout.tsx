import { useState } from "react";
import ComplaintItem from "./ComplaintItem";
import { useGetUnSeenComplaints } from "./useGetUnSeenComplaints";
import { useGetAllComplaints } from "./useGetAllComplaints";
import Spinner from "@/ui/Spinner";
import { useMarkAsSeen } from "./useMarkAsSeen";

const ComplaintLayout = () => {
  const [expandedId, setExpandedId] = useState(0);
  const { unSeenComplaints } = useGetUnSeenComplaints();
  const { markSeenComplaintMutation } = useMarkAsSeen();
  const { complaints, isGettingComplaints } = useGetAllComplaints(false);

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
    <div className="mx-auto my-10 w-full overflow-hidden rounded-xl border border-slate-200 bg-white font-sans shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-200 p-5">
        <h1 className="text-xl font-bold text-slate-800">
          Complaint Management
        </h1>
        <div className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
          New ({unSeenComplaints})
        </div>
      </header>

      <main className="p-2">
        {complaints?.map((complaint) => (
          <ComplaintItem
            key={complaint.complaint_id}
            complaint={complaint}
            isExpanded={expandedId === complaint.complaint_id}
            onToggle={() => handleToggle(complaint.complaint_id)}
          />
        ))}
      </main>
    </div>
  );
};

export default ComplaintLayout;
