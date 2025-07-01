import { HiOutlineInbox } from "react-icons/hi2";

function Empty({
  resource,
  className,
}: {
  resource: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-slate-200 p-12 text-center ${className}`}
    >
      <HiOutlineInbox className="h-16 w-16 text-slate-400" />

      <p className="text-lg font-semibold text-slate-600">
        No {resource} could be found.
      </p>
    </div>
  );
}

export default Empty;
