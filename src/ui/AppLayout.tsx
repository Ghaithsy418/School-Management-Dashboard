import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import ProtectedRoutes from "./ProtectedRoutes";

function AppLayout() {
  return (
    <ProtectedRoutes>
      <div className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[4.5rem_1fr]">
        <SideBar />
        <NavBar />
        <main className="row-start-2 row-end-3 overflow-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </ProtectedRoutes>
  );
}

export default AppLayout;
