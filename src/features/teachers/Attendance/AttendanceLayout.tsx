import { useAttendance } from "@/slices/AttendanceSlice";
import ChooseAttendanceClass from "./ChooseAttendanceClass";
import ChooseSession from "./ChooseSession";
import StudentsAttendanceTable from "./StudentsAttendanceTable";
import SubmitAttendance from "./SubmitAttendance";
import SelectClassFirst from "./SelectClassFirst";

function AttendanceLayout() {
  const { className } = useAttendance();

  return (
    <div className="grid grid-cols-[0.8fr_1fr] grid-rows-[200px_200px_200px] gap-8 pt-6">
      {!className ? (
        <div className="col-start-1 col-end-2 row-start-1 row-end-4">
          <SelectClassFirst />
        </div>
      ) : (
        <StudentsAttendanceTable />
      )}
      <ChooseAttendanceClass />
      <ChooseSession />
      <SubmitAttendance />
    </div>
  );
}

export default AttendanceLayout;
