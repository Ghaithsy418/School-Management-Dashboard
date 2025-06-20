import MainContainer from "@/ui/MainContainer";
import AddByCSV from "./AddByCSV";
import AddTeachersSupervisorsForm from "./AddTeachersSupervisorsForm";

function AddSupervisors() {
  return (
    <MainContainer title="Add Supervisors">
      <AddByCSV />
      <AddTeachersSupervisorsForm role="supervisor" />
    </MainContainer>
  );
}

export default AddSupervisors;
