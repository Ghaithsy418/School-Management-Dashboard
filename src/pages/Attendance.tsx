import AttendanceLayout from "@/features/teachers/attendance/AttendanceLayout";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";

function Attendance() {
  useEffect(function () {
    document.title = "Attendance";
  }, []);

  return (
    <MainContainer title="Attendance Management">
      <AttendanceLayout />
    </MainContainer>
  );
}

export default Attendance;
