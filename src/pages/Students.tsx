import StudentsTable from "../features/Students/StudentsTable";
import Controls from "../ui/Controls";
import MainContainer from "../ui/MainContainer";
import MainPageHeader from "../ui/MainPageHeader";

function Students() {
  return (
    <MainContainer title="Students">
      <MainPageHeader>
        <Controls
          options={options}
          linkTo="add-a-student"
          linkTitle="Add a Student"
        />
      </MainPageHeader>
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
