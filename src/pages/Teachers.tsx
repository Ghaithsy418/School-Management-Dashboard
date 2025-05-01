import TeachersList from "../features/teachers/TeachersList";
import Controls from "../ui/Controls";
import MainContainer from "../ui/MainContainer";
import MainPageHeader from "../ui/MainPageHeader";

function Teachers() {
  return (
    <MainContainer title="Teachers">
      <MainPageHeader>
        <Controls
          options={options}
          linkTo="add-a-teacher"
          linkTitle="Add a Teacher"
        />
      </MainPageHeader>
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
