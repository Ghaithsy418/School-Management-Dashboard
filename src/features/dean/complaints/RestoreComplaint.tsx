import SmallSpinner from "@/ui/SmallSpinner";
import { useRestoreComplaint } from "./useRestoreComplaint";

function RestoreComplaint({ complaint_id }: { complaint_id: number }) {
  const { restoreComplaintMutation, isRestoringComplaint } =
    useRestoreComplaint();

  function handleClick() {
    restoreComplaintMutation({ complaint_id });
  }

  return (
    <div className="flex items-center justify-end gap-3">
      <p className="font-semibold text-slate-800">Restore this Complaint?</p>
      <button
        onClick={handleClick}
        className={`flex w-20 items-center justify-center rounded-md border ${isRestoringComplaint ? "bg-blue-600" : "bg-transparent"} border-gray-700/40 px-3 py-0.5 transition-all duration-300 hover:bg-blue-600 hover:text-white`}
      >
        {isRestoringComplaint ? <SmallSpinner /> : "Restore"}
      </button>
    </div>
  );
}

export default RestoreComplaint;
