import CheckStudentsAbsence from "./CheckStudentsAbsence";
import SubmitDailyReport from "./SubmitDailyReport";

function AttendanceStudentsButtons() {
  return (
    <div className="flex items-center justify-center gap-3">
      <CheckStudentsAbsence />
      <SubmitDailyReport />
    </div>
  );
}

export default AttendanceStudentsButtons;
