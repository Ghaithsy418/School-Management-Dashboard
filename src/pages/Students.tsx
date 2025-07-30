import { useEffect } from "react";
import StudentsTable from "@/features/students/StudentsTable";
import MainContainer from "@/ui/MainContainer";
import AttendanceStudentsButtons from "@/features/supervisors/attendanceAndAbsence/AttendanceStudentsButtons";

//Responsible: for the students routes operators
function Students() {
  useEffect(function () {
    document.title = "Students";
  }, []);

  return (
    <MainContainer title="Students">
      <MainContainer.MainPageHeader>
        <MainContainer.Controls
          options={options}
          linkTo="add-a-student"
          linkTitle="Add a Student"
        >
          <AttendanceStudentsButtons />
        </MainContainer.Controls>
      </MainContainer.MainPageHeader>
      <StudentsTable />
    </MainContainer>
  );
}

const options = [
  { title: "Sort by", value: "" },
  { title: "Ascending (A-Z)", value: "asc-full_name" },
  { title: "Descending (Z-A)", value: "desc-full_name" },
  { title: "GPA (Lower First)", value: "asc-gpa" },
  { title: "GPA (Greater First)", value: "desc-gpa" },
];

export default Students;
