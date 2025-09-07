import Spinner from "@/ui/Spinner";
import { MessageSquareWarning } from "lucide-react";

function SelectClassNameFirst({
  isGettingSchedule,
}: {
  isGettingSchedule: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-slate-200 p-12 text-center">
      {isGettingSchedule ? (
        <Spinner size="80" />
      ) : (
        <MessageSquareWarning className="h-16 w-16 text-slate-400" />
      )}
      <p className="text-lg font-semibold text-slate-600 dark:text-slate-100">
        Choose a grade and a className so you can create or see any Schedule
      </p>
    </div>
  );
}

export default SelectClassNameFirst;
