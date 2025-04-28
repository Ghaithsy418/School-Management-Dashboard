import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Students from "./pages/Students";
import Supervisors from "./pages/Supervisors";
import Teachers from "./pages/Teachers";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import { useUser } from "./context/UserContext";

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
              <Route path="teachers" element={<Teachers />} />
              <Route path="supervisors" element={<Supervisors />} />
              <Route path="students" element={<Students />} />
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
