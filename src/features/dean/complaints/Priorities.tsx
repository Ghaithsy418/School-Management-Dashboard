import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useModifyComplaint } from "./useModifyComplaint";

interface PrioritiesTypes {
  priority: string;
  complaint_id: number;
  status: string;
}

function Priorities({ priority, complaint_id, status }: PrioritiesTypes) {
  const [thePriority, setThePriority] = useState(priority);
  const queryClient = useQueryClient();
  const { modifyComplaintMutation } = useModifyComplaint();

  function handleClick(p: string) {
    setThePriority(p);
    modifyComplaintMutation(
      { complaint_id, priority: p, status },
      {
        onSuccess: () =>
          queryClient.invalidateQueries({ queryKey: ["allComplaints"] }),
        onError: () => {
          setThePriority(priority);
        },
      },
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
        Set Priority
      </p>
      <div className="flex flex-wrap gap-3">
        {(["low", "medium", "high"] as const).map((p) => (
          <button
            key={p}
            onClick={() => handleClick(p)}
            className={`rounded-md px-4 py-2 text-sm font-semibold capitalize transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
              thePriority === p
                ? "bg-slate-800 text-white shadow-sm dark:bg-blue-600"
                : "bg-white text-slate-700 ring-1 ring-slate-300 ring-inset hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-600"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Priorities;
