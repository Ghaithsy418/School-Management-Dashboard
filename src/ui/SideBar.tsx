import { TbLogout2 } from "react-icons/tb";
import { useUser } from "../context/UserContext";
import ManagerLinks from "../features/manager/ManagerLinks";
import SupervisorsLinks from "../features/supervisors/SupervisorsLinks";
import TeachersLinks from "../features/teachers/TeachersLinks";

function SideBar() {
  const { role } = useUser();
  return (
    <nav className="row-start-1 row-end-3 flex flex-col justify-between border-r-1 border-r-indigo-200/20 bg-indigo-100/20 px-4 pt-10 pb-8 font-semibold">
      <div className="space-y-10">
        <h1 className="text-center text-2xl">School Dashboard</h1>
        {role === "manager" && <ManagerLinks />}
        {role === "supervisors" && <SupervisorsLinks />}
        {role === "teachers" && <TeachersLinks />}
      </div>
      <button className="flex cursor-pointer items-center gap-5 rounded-lg px-4 py-2 text-rose-500 transition-all duration-300 hover:bg-rose-200/50">
        <TbLogout2 className="h-7 w-7" /> Logout
      </button>
    </nav>
  );
}

export default SideBar;
