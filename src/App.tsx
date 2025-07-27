import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AddStudents from "./features/dean/addStudents/AddStudents";
import AddSupervisors from "./features/dean/AddSupervisors";
import AddTeachers from "./features/dean/AddTeachers";
import Attendance from "./pages/Attendance";
import ClassManagment from "./pages/ClassManagment";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MarksManagement from "./pages/MarksManagement";
import NewsAndEvents from "./pages/NewsAndEvents";
import Settings from "./pages/Settings";
import Student from "./pages/Student";
import Students from "./pages/Students";
import Subjects from "./pages/Subjects";
import Supervisors from "./pages/Supervisors";
import Teachers from "./pages/Teachers";
import { useUser } from "./slices/userSlice";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import Event from "./pages/Event";
import UserEvents from "./pages/UserEvents";
import Supervisor from "./pages/Supervisor";
import Teacher from "./pages/Teacher";
import ClassesMarks from "./pages/ClassesMarks";
import TimeTablesManagement from "./pages/TimeTablesManagement";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

//nothing scary just defining the entire App's routes
function App() {
  const {
    user: { role },
  } = useUser();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoutes>
                <AppLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate replace to={`${role}`} />} />
            {role === "dean" && (
              <Route path="dean">
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="teachers">
                  <Route index element={<Teachers />} />
                  <Route path="add-a-teacher" element={<AddTeachers />} />
                  <Route path=":id" element={<Teacher />} />
                </Route>
                <Route path="supervisors">
                  <Route index element={<Supervisors />} />
                  <Route path="add-a-supervisor" element={<AddSupervisors />} />
                  <Route path=":id" element={<Supervisor />} />
                </Route>
                <Route path="students">
                  <Route index element={<Students />} />
                  <Route path="add-a-student" element={<AddStudents />} />
                  <Route path=":id" element={<Student />} />
                </Route>
                <Route path="settings" element={<Settings />} />
              </Route>
            )}
            {role === "supervisor" && (
              <Route path="supervisor">
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="teachers">
                  <Route index element={<Teachers />} />
                  <Route path=":id" element={<Teacher />} />
                </Route>
                <Route path="students">
                  <Route index element={<Students />} />
                  <Route path=":id" element={<Student />} />
                </Route>
                <Route path="settings" element={<Settings />} />
                <Route path="timetables" element={<TimeTablesManagement />} />
                <Route path="classes" element={<ClassManagment />} />
                <Route path="subjects" element={<Subjects />} />
              </Route>
            )}
            {role === "teacher" && (
              <Route path="teacher">
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="students">
                  <Route index element={<Students />} />
                  <Route path=":id" element={<Student />} />
                </Route>
                <Route path="attendance" element={<Attendance />} />
                <Route path="marks">
                  <Route index element={<MarksManagement />} />
                  <Route path="classesMarks" element={<ClassesMarks />} />
                </Route>
                <Route path="settings" element={<Settings />} />
              </Route>
            )}
            <Route path="news&adds">
              <Route index element={<NewsAndEvents />} />
              <Route path=":postId" element={<Event />} />
              <Route path="user_events/:userId" element={<UserEvents />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          success: { duration: 4000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-violet-50)",
            color: "var(--color-gray-950)",
          },
        }}
      />
      <ReactQueryDevtools
        initialIsOpen={false}
        buttonPosition="bottom-left"
        position="bottom"
      />
    </QueryClientProvider>
  );
}

export default App;
