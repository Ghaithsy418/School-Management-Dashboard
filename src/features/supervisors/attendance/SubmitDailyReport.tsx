import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ConfirmAction from "@/ui/ConfirmAction";
import Modal from "@/ui/Modal";
import { MdOutlineSummarize } from "react-icons/md";
import { useSubmitDailyReports } from "./useSubmitDailyReports";

function SubmitDailyReport() {
  const { submitReportsMutation, isSubmitingReports } = useSubmitDailyReports();

  return (
    <Modal>
      <Tooltip>
        <TooltipTrigger>
          <Modal.Open name="submitReport">
            <button className={buttonClassName}>
              <MdOutlineSummarize className="h-5 w-5" />
            </button>
          </Modal.Open>
        </TooltipTrigger>
        <TooltipContent>
          <p>Submit Daily Attendance Report</p>
        </TooltipContent>
      </Tooltip>
      <Modal.Window name="submitReport">
        <ConfirmAction
          title="Submit Daily Attendance Report"
          question="Are you sure you want to submit the current day's report?"
          buttonText="Submit Report"
          onConfirm={submitReportsMutation}
          isConfirming={isSubmitingReports}
        />
      </Modal.Window>
    </Modal>
  );
}

const buttonClassName =
  "flex items-center justify-center h-10 w-10 rounded-md text-violet-50 bg-violet-600 hover:bg-violet-700 cursor-pointer transition-all duration-300 shadow-sm shadow-gray-700/30 hover:shadow-md active:shadow-xs";

export default SubmitDailyReport;
