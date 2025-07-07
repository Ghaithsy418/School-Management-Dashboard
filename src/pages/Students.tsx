import { useEffect } from "react";
import StudentsTable from "../features/students/StudentsTable";
import MainContainer from "../ui/MainContainer";

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
        />
      </MainContainer.MainPageHeader>
      <StudentsTable />
    </MainContainer>
  );
}

const options = [
  { title: "Sort by", value: "" },
  { title: "Ascending (A-Z)", value: "asc-full_name" },
  { title: "Descending (Z-A)", value: "desc-full_name" },
];

export default Students;
