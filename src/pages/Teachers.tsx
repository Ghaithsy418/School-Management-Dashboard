import TeachersList from "../features/teachers/TeachersList";
import MainContainer from "../ui/MainContainer";

//Responsible: for the teachers routes operators
function Teachers() {
  return (
    <MainContainer title="Teachers">
      <MainContainer.MainPageHeader>
        <MainContainer.Controls
          options={options}
          linkTo="add-a-teacher"
          linkTitle="Add a Teacher"
        />
      </MainContainer.MainPageHeader>
      <TeachersList />
    </MainContainer>
  );
}

const options = [
  { title: "Sort by", value: "" },
  { title: "Ascending (A-Z)", value: "asc" },
  { title: "Descending (Z-A)", value: "desc" },
];

export default Teachers;
