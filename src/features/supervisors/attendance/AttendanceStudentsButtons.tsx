import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserCheck } from "lucide-react";
import SubmitDailyReport from "./SubmitDailyReport";

function AttendanceStudentsButtons() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Tooltip>
        <TooltipTrigger>
          <button className={buttonClassName}>
            <UserCheck className="h-5 w-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Check Students Absence</p>
        </TooltipContent>
      </Tooltip>
      <SubmitDailyReport />
    </div>
  );
}

const buttonClassName =
  "flex items-center justify-center h-10 w-10 rounded-md text-violet-50 bg-violet-600 hover:bg-violet-700 cursor-pointer transition-all duration-300 shadow-sm shadow-gray-700/30 hover:shadow-md active:shadow-xs";

export default AttendanceStudentsButtons;
