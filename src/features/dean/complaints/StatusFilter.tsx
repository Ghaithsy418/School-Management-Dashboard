import { useSearchParams } from "react-router-dom";
import { useGetUnSeenComplaints } from "./useGetUnSeenComplaints";

function StatusFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { unSeenComplaints } = useGetUnSeenComplaints();

  const currentSearchParams = searchParams.get("complaintStatus") || "all";

  function handleClick(status: string) {
    searchParams.set("complaintStatus", status);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {buttons.map((button) => (
        <button
          onClick={() => handleClick(button.title)}
          className={`rounded-sm border border-gray-700/40 transition-all duration-300 ${currentSearchParams === button.title ? `${button.color} text-white` : "bg-transparent text-gray-900 hover:bg-gray-200"} cursor-pointer px-3 py-1.5 text-xs font-semibold capitalize`}
        >
          {button.title === "pending"
            ? `New (${unSeenComplaints})`
            : button.title}
        </button>
      ))}
    </div>
  );
}

const buttons = [
  { title: "all", color: "bg-slate-600" },
  { title: "pending", color: "bg-blue-600" },
  { title: "processing", color: "bg-amber-600" },
  { title: "resolved", color: "bg-green-600" },
  { title: "rejected", color: "bg-red-600" },
];

export default StatusFilter;
