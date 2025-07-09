import { MessageSquareWarning } from "lucide-react";

function SelectClassFirst() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-slate-200 p-12 text-center">
      <MessageSquareWarning className="h-16 w-16 text-slate-400" />
      <p className="text-lg font-semibold text-slate-600">
        Choose a class to see the students.
      </p>
    </div>
  );
}

export default SelectClassFirst;
