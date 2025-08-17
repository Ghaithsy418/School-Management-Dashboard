import DeanDashboard from "@/features/dean/dashboard/DeanDashboard";
import SupervisorDashboard from "@/features/supervisors/dashboard/SupervisorDashboard";
import TeacherDashboard from "@/features/teachers/dashboard/TeacherDashboard";
import { useUser } from "@/slices/userSlice";
import { useEffect } from "react";

function Dashboard() {
  const {
    user: { role },
  } = useUser();

  useEffect(function () {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      {role === "dean" && <DeanDashboard />}{" "}
      {role === "supervisor" && <SupervisorDashboard />}
      {role === "teacher" && <TeacherDashboard />}
    </>
  );
}

export default Dashboard;
