import TeacherProfile from "@/features/teachers/TeacherProfile";
import { useUser } from "@/slices/userSlice";
import MainContainer from "@/ui/MainContainer";

function Teacher() {
  const {
    user: { role },
  } = useUser();
  return (
    <MainContainer title="" needsBackArrow={true} toPage={`/${role}/teachers`}>
      <div>
        <TeacherProfile />
      </div>
    </MainContainer>
  );
}

export default Teacher;
