import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Supervisors from "./pages/Supervisors";
import Teachers from "./pages/Teachers";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import { useUser } from "./context/UserContext";
import AddTeachers from "./features/teachers/AddTeachers";
import AddSupervisors from "./features/supervisors/AddSupervisors";
import AddStudents from "./features/students/AddStudents";

//nothing scary just defining the entire App's routes
function App() {
  const { role } = useUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={`${role}`} />} />
          {role === "manager" && (
            <Route path="manager">
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="teachers">
                <Route index element={<Teachers />} />
                <Route path="add-a-teacher" element={<AddTeachers />} />
              </Route>
              <Route path="supervisors">
                <Route index element={<Supervisors />} />
                <Route path="add-a-supervisor" element={<AddSupervisors />} />
              </Route>
              <Route path="students">
                <Route index element={<Students />} />
                <Route path="add-a-student" element={<AddStudents />} />
              </Route>
            </Route>
          )}
          {role === "supervisors" && (
            <Route path="supervisors">
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="students" element={<Students />} />
            </Route>
          )}
          {role === "teachers" && (
            <Route path="teachers">
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
            </Route>
          )}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
