import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ConfirmAction from "@/ui/ConfirmAction";
import Modal from "@/ui/Modal";
import { UserCheck } from "lucide-react";
import { useSubmitDailyReports } from "./useSubmitDailyReports";
import { useTranslation } from "react-i18next";

function SubmitDailyReport() {
  const { submitReportsMutation, isSubmitingReports } = useSubmitDailyReports();
  const { t } = useTranslation("students");

  return (
    <Modal>
      <Tooltip>
        <TooltipTrigger>
          <Modal.Open name="submitReport">
            <div className={buttonClassName}>
              <UserCheck className="h-5 w-5" />
            </div>
          </Modal.Open>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("attendance.tooltipDailyReport")}</p>
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
  "flex items-center justify-center h-10 w-11 rounded-md text-violet-50 bg-violet-600 hover:bg-violet-700 cursor-pointer transition-all duration-300 shadow-sm shadow-gray-700/30 hover:shadow-md active:shadow-xs";

export default SubmitDailyReport;
