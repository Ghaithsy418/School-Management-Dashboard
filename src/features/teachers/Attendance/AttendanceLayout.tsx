import { useAttendance } from "@/slices/AttendanceSlice";
import ChooseAttendanceClass from "./ChooseAttendanceClass";
import ChooseSession from "./ChooseSession";
import SelectClassFirst from "./SelectClassFirst";
import StudentsAttendanceTable from "./StudentsAttendanceTable";
import SubmitAttendance from "./SubmitAttendance";

function AttendanceLayout() {
  const { className } = useAttendance();

  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-3 gap-x-8 gap-y-6 pt-6">
      <div className="col-start-1 col-end-2 row-start-1 row-end-4">
        {!className ? <SelectClassFirst /> : <StudentsAttendanceTable />}
      </div>
      <ChooseAttendanceClass />
      <ChooseSession />
      <SubmitAttendance />
    </div>
  );
}

export default AttendanceLayout;
