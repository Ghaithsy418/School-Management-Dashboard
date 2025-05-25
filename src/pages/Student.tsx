import StudentDetails from "../features/students/StudentDetails";
import MainContainer from "../ui/MainContainer";

function Student() {
  return (
    <MainContainer title="Student Details">
      <div>
        <StudentDetails />
      </div>
    </MainContainer>
  );
}

export default Student;
