import StudentsTable from "../features/students/StudentsTable";
import MainContainer from "../ui/MainContainer";

//Responsible: for the students routes operators
function Students() {
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
  { title: "Ascending (A-Z)", value: "asc" },
  { title: "Descending (Z-A)", value: "desc" },
];

export default Students;
