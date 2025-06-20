import MainContainer from "@/ui/MainContainer";
import AddTeachersSupervisorsForm from "./AddTeachersSupervisorsForm";
import AddByCSV from "./AddByCSV";

function AddTeachers() {
  return (
    <>
      <MainContainer title="Add Teachers">
        <AddByCSV />
        <AddTeachersSupervisorsForm role="teacher" />
      </MainContainer>
    </>
  );
}

export default AddTeachers;
