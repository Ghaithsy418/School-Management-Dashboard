import MainContainer from "@/ui/MainContainer";
import AddStudentsForm from "./AddStudentsForm";
import AddByCSV from "../AddByCSV";

function AddStudents() {
  return (
    <MainContainer title="Add Students">
      <AddByCSV />
      <AddStudentsForm />
    </MainContainer>
  );
}

export default AddStudents;
