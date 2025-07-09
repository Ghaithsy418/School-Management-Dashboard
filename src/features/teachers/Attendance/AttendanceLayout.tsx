import ChooseAttendanceClass from "./ChooseAttendanceClass";
import ChooseSession from "./ChooseSession";
import StudentsAttendanceTable from "./StudentsAttendanceTable";
import SubmitAttendance from "./SubmitAttendance";

function AttendanceLayout() {
  return (
    <div className="grid grid-cols-[0.8fr_1fr] grid-rows-[200px_200px_200px] gap-8 pt-6">
      <StudentsAttendanceTable />
      <ChooseAttendanceClass />
      <ChooseSession />
      <SubmitAttendance />
    </div>
  );
}

export default AttendanceLayout;
