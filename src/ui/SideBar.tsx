import Logout from "@/features/auth/Logout";
import { useUser } from "@/slices/userSlice";
import { useTranslation } from "react-i18next";
import DeanLinks from "../features/dean/DeanLinks";
import SupervisorsLinks from "../features/supervisors/SupervisorsLinks";
import TeachersLinks from "../features/teachers/TeachersLinks";

function SideBar() {
  const {
    user: { role },
  } = useUser();
  const { t } = useTranslation();
  return (
    <nav className="row-start-1 row-end-3 flex flex-col justify-between border-r-1 border-r-gray-300/30 bg-gray-100/20 px-4 pt-10 pb-8 font-semibold">
      <div className="space-y-10">
        <h1 className="text-center text-2xl">{t("sidebar.title")}</h1>
        {role === "dean" && <DeanLinks />}
        {role === "supervisor" && <SupervisorsLinks />}
        {role === "teacher" && <TeachersLinks />}
      </div>
      <Logout />
    </nav>
  );
}

export default SideBar;
