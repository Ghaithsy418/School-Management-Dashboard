import { useUser } from "@/slices/userSlice";
import StudentDetails from "@/features/students/StudentDetails";
import MainContainer from "@/ui/MainContainer";

function Student() {
  const {
    user: { role },
  } = useUser();

  return (
    <MainContainer title="" needsBackArrow={true} toPage={`/${role}/students`}>
      <StudentDetails />
    </MainContainer>
  );
}

export default Student;
