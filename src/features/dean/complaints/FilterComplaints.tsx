import PriorityFilter from "./PriorityFilter";
import StatusFilter from "./StatusFilter";

function FilterComplaints() {
  return (
    <header className="flex items-center justify-start gap-5 divide-x divide-gray-700/40 border-b border-slate-200 p-5">
      <div className="flex items-center justify-start gap-5 pr-3">
        <h4 className="text-xl font-bold text-slate-800">Status:</h4>
        <StatusFilter />
      </div>
      <div className="flex items-center justify-start gap-5">
        <h4 className="text-xl font-bold text-slate-800">Priority:</h4>
        <PriorityFilter />
      </div>
    </header>
  );
}

export default FilterComplaints;
