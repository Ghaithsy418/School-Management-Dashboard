import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
