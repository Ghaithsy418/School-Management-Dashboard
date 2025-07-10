import SubmitButton from "@/ui/SubmitButton";
import { Users } from "lucide-react";
import "react-day-picker/dist/style.css";
import AbsenceDayPicker from "./AbsenceDayPicker";
import AbsenceSelectClassName from "./AbsenceSelectClassName";
import AbsenceSelectGrade from "./AbsenceSelectGrade";
import {
  changeUi,
  useSupervisorAttendance,
} from "@/slices/supervisorAttendanceSlice";
import { useDispatch } from "react-redux";

function AbsenceSheet() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="px-6 py-8">
        <div className="flex items-center space-x-3">
          <div className="rounded-full border border-slate-200 p-3">
            <Users className="h-6 w-6 text-slate-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Check Students Absence
            </h2>
            <p className="mt-1 text-slate-600">
              Track and manage student absences
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6 px-6 pb-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AbsenceSelectGrade />
          <AbsenceSelectClassName />
        </div>
        <AbsenceDayPicker />
        <SubmitAbsenceButton />
      </div>
    </div>
  );
}

function SubmitAbsenceButton() {
  const { className, day } = useSupervisorAttendance();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(changeUi("StudentsAbsence"));
  }

  return (
    <div className="flex justify-center pt-4">
      <SubmitButton
        disabled={!className || !day}
        onClick={handleClick}
        size="w-full"
        className="max-w-md"
      >
        Check Attendance
      </SubmitButton>
    </div>
  );
}

export default AbsenceSheet;
