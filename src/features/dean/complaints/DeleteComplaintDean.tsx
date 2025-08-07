import { Trash2 } from "lucide-react";
import { useDeleteComplaintDean } from "./useDeleteComplaintDean";
import SmallSpinner from "@/ui/SmallSpinner";

const DeleteComplaintDean = ({ complaint_id }: { complaint_id: number }) => {
  const { deleteComplaintMutation, isDeletingComplaint } =
    useDeleteComplaintDean();
  const handleDelete = () => {
    deleteComplaintMutation({ complaint_id });
  };

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
        Delete Complaint
      </p>
      <button
        onClick={handleDelete}
        type="button"
        className={`mr-2 flex w-36 items-center justify-center gap-2 place-self-end rounded-md ${isDeletingComplaint ? "bg-red-400 hover:bg-red-500" : "bg-red-100 hover:bg-red-200"} px-3 py-2 text-sm font-semibold text-red-700 transition-colors dark:bg-red-900/40 dark:text-red-300 dark:hover:bg-red-900/60`}
        aria-label="Move to Trash"
      >
        {isDeletingComplaint ? (
          <SmallSpinner size="w-[20px] h-[20px]" />
        ) : (
          <>
            <Trash2 className="h-4 w-4" />
            <span>Move to Trash</span>
          </>
        )}
      </button>
    </div>
  );
};

export default DeleteComplaintDean;
