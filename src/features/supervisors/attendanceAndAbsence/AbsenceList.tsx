import { useSupervisorAttendance } from "@/slices/supervisorAttendanceSlice";
import { useCheckStudentsAbsence } from "./useCheckStudentsAbsence";
import Spinner from "@/ui/Spinner";
import Empty from "@/ui/Empty";
import { isToday } from "date-fns";
import AbsenceDashboard from "./StudentsAbsenceItems";

function AbsenceList() {
  const { className, day } = useSupervisorAttendance();
  const { studentsAbsence, isCheckingAbsence } = useCheckStudentsAbsence({
    className,
    date: day,
  });

  if (isCheckingAbsence) return <Spinner />;
  if (studentsAbsence?.length === 0)
    return (
      <Empty resource={`absences ${isToday(day) ? "today" : `in ${day}`}`} />
    );

  return <AbsenceDashboard absences={studentsAbsence} />;
}

export default AbsenceList;
