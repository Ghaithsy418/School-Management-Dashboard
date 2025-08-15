import ExamSchedulesLayout from "@/features/supervisors/timetablesManagement/examSchedules/ExamSchedulesLayout";
import ScheduleSwitchButton from "@/features/supervisors/timetablesManagement/ScheduleSwitchButton";
import { useUser } from "@/slices/userSlice";
import MainContainer from "@/ui/MainContainer";

function ExamSchedules() {
  const {
    user: { role },
  } = useUser();
  return (
    <MainContainer
      title="Exam Schedules"
      parallelChild={role === "supervisor" ? <ScheduleSwitchButton /> : null}
    >
      <ExamSchedulesLayout />
    </MainContainer>
  );
}

export default ExamSchedules;
