import { useSearchParams } from "react-router-dom";

function PriorityFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParams =
    searchParams.get("complaintPriority") || "no priority";

  function handleClick(priority: string) {
    searchParams.set("complaintPriority", priority);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {buttons.map((button) => (
        <button
          onClick={() => handleClick(button)}
          className={`cursor-pointer rounded-sm border ${currentSearchParams === button ? "bg-slate-600 text-white" : "hover:bg-slate-200"} border-gray-700/40 px-3 py-1.5 text-xs font-semibold capitalize transition-all duration-300`}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

const buttons = ["no priority", "low", "medium", "high"];

export default PriorityFilter;
