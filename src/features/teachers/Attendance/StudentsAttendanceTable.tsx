import { useAttendance } from "@/slices/AttendanceSlice";
import SelectClassFirst from "./SelectClassFirst";
import Table from "@/ui/Table";
import { MessageSquareWarning } from "lucide-react";
import StudentAttendanceRow from "./StudentAttendanceRow";

function StudentsAttendanceTable() {
  const { className } = useAttendance();

  if (!className)
    return (
      <div className="col-start-1 col-end-2 row-start-1 row-end-4">
        <SelectClassFirst />
      </div>
    );

  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-4 flex flex-col items-start justify-start gap-4">
      <h3 className="flex items-center gap-2 text-lg text-red-700">
        <MessageSquareWarning className="h-5 w-5" />
        <span>Make sure to choose the Absent Students only!!</span>
      </h3>
      <div className="w-full">
        <Table columns="1.5fr 0.9fr">
          <Table.Header>
            <span>Student Name</span>
            <span>Check Attendance</span>
          </Table.Header>
          <Table.Body
            data={[
              { studentName: "GG", studentId: 0 },
              { studentName: "Majd", studentId: 1 },
            ]}
            render={(student) => (
              <Table.Row>
                <StudentAttendanceRow student={student} />
              </Table.Row>
            )}
          />
        </Table>
      </div>
    </div>
  );
}

export default StudentsAttendanceTable;
