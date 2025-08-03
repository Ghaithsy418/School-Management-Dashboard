import { useMarks } from "@/slices/MarksManagementSlice";
import ChooseAttendanceClass from "./ChooseAttendanceClass";
import ChooseSession from "./ChooseSession";
import SelectClassFirst from "./SelectClassFirst";
import StudentsAttendanceTable from "./StudentsAttendanceTable";
import SubmitAttendance from "./SubmitAttendance";

function AttendanceLayout() {
  const { className } = useMarks();

  return (
    <div className="grid grid-cols-[0.8fr_1fr] grid-rows-[200px_200px_200px] gap-8 pt-6">
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
