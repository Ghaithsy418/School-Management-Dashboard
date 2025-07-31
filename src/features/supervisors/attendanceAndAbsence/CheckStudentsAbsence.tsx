import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSupervisorAttendance } from "@/slices/supervisorAttendanceSlice";
import Modal from "@/ui/Modal";
import { ListChecks } from "lucide-react";
import AbsenceListLayout from "./AbsenceListLayout";
import AttendanceSheet from "./AbsenceSheet";
import { useTranslation } from "react-i18next";

function CheckStudentsAbsence() {
  const { ui } = useSupervisorAttendance();
  const { t } = useTranslation("students");

  return (
    <Modal>
      <Tooltip>
        <TooltipTrigger>
          <Modal.Open name="studentsAbsence">
            <div className={buttonClassName}>
              <ListChecks className="h-5 w-5" />
            </div>
          </Modal.Open>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("attendance.tooltipCheckAbsence")}</p>
        </TooltipContent>
      </Tooltip>
      <Modal.Window mode="sheet" name="studentsAbsence">
        {ui === "StudentsAbsence" ? <AbsenceListLayout /> : <AttendanceSheet />}
      </Modal.Window>
    </Modal>
  );
}

const buttonClassName =
  "flex items-center justify-center h-10 w-11 rounded-md text-violet-50 bg-violet-600 hover:bg-violet-700 cursor-pointer transition-all duration-300 shadow-sm shadow-gray-700/30 hover:shadow-md active:shadow-xs";

export default CheckStudentsAbsence;
