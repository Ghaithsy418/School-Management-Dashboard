import MainContainer from "@/ui/MainContainer";
import AddStudentsForm from "./AddStudentsForm";

function AddStudents() {
  return (
    <MainContainer title="Add Students" needsBackArrow={true}>
      <AddStudentsForm />
    </MainContainer>
  );
}

export default AddStudents;
