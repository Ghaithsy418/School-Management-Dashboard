import { Outlet } from "react-router";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[5rem_1fr]">
      <SideBar />
      <NavBar />
      <main className="row-start-2 row-end-3 overflow-auto py-2">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
