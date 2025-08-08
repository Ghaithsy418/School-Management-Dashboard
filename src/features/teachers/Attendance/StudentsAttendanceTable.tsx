import {
  changeSelectAll,
  pushStudent,
  removeAllStudents,
  useAttendance,
} from "@/slices/AttendanceSlice";
import Empty from "@/ui/Empty";
import Spinner from "@/ui/Spinner";
import Table from "@/ui/Table";
import { MessageSquareWarning } from "lucide-react";
import { useDispatch } from "react-redux";
import StudentAttendanceRow from "./StudentAttendanceRow";
import { useGetStudentsAttendanceForm } from "./useGetStudentsAttendanceForm";
import { usePaginate } from "@/hooks/usePaginate";
import { StudentAttendaceTypes } from "@/utils/types";
import MiniPagination from "@/ui/MiniPagination";

function StudentsAttendanceTable() {
  const { selectAll, className } = useAttendance();
  const dispatch = useDispatch();
  const { studentsAttendanceForm, isGettingAttendanceForm } =
    useGetStudentsAttendanceForm(className);
  const students = usePaginate<StudentAttendaceTypes>(
    studentsAttendanceForm,
    9,
    "studentsPage",
  );

  function handleSelectAll() {
    if (selectAll) {
      dispatch(removeAllStudents());
    } else {
      studentsAttendanceForm.map((student: { studentId: number }) =>
        dispatch(pushStudent({ studentId: student.studentId })),
      );
    }
    dispatch(changeSelectAll());
  }

  if (isGettingAttendanceForm) return <Spinner />;

  if (!studentsAttendanceForm || studentsAttendanceForm?.length === 0)
    return <Empty resource="students" />;

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <h3 className="flex items-center gap-2 text-lg text-red-700">
        <MessageSquareWarning className="h-5 w-5" />
        <span>Make sure to choose the Absent Students only!!</span>
      </h3>
      <div className="w-full">
        <Table columns="1.5fr 0.9fr">
          <Table.Header>
            <span>Student Name</span>
            <span>Check Absence</span>
          </Table.Header>
          <Table.Body
            data={students}
            render={(student) => (
              <Table.Row key={student.studentId}>
                <StudentAttendanceRow student={student} />
              </Table.Row>
            )}
          />
          <Table.Tail>
            <div className="mr-3 flex w-full items-center justify-between p-2">
              <MiniPagination
                dataLength={studentsAttendanceForm?.length}
                numberOfElements={9}
                pageName="studentsPage"
              />
              <button
                onClick={handleSelectAll}
                className="rounded-md border border-gray-700/30 px-3 py-1 text-sm transition-all duration-300 hover:bg-gray-200"
              >
                {selectAll ? "UnSelect All" : "Select All"}
              </button>
            </div>
          </Table.Tail>
        </Table>
      </div>
    </div>
  );
}

export default StudentsAttendanceTable;
