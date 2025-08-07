import { Check, X } from "lucide-react";
import { useModifyComplaint } from "./useModifyComplaint";

interface MarkAsButtonsTypes {
  complaint_id: number;
}

function MarkAsButtons({ complaint_id }: MarkAsButtonsTypes) {
  const { modifyComplaintMutation, isModifyingComplaint } =
    useModifyComplaint();

  function handleClick(status: string) {
    modifyComplaintMutation({ complaint_id, status });
  }

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
        Actions
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleClick("resolved")}
          disabled={isModifyingComplaint}
          className="flex items-center gap-2 rounded-md bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed"
        >
          <Check className="h-4 w-4" />
          Mark as Resolved
        </button>
        <button
          onClick={() => handleClick("rejected")}
          disabled={isModifyingComplaint}
          className="flex items-center gap-2 rounded-md bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 shadow-sm transition-colors hover:bg-red-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed"
        >
          <X className="h-4 w-4" />
          Mark as Rejected
        </button>
      </div>
    </div>
  );
}

export default MarkAsButtons;
