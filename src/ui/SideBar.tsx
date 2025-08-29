import Logout from "@/features/auth/Logout";
import { useUser } from "@/slices/userSlice";
import { useState } from "react";
import DeanLinks from "../features/dean/DeanLinks";
import SupervisorsLinks from "../features/supervisors/SupervisorsLinks";
import TeachersLinks from "../features/teachers/TeachersLinks";
import { useTranslation } from "react-i18next";
import Logo from "@/utils/Logo";

function SideBar() {
  const {
    user: { role },
  } = useUser();
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <nav
      onMouseEnter={() => setIsExpanded(false)}
      onMouseLeave={() => setIsExpanded(true)}
      className={`row-start-1 row-end-3 flex transition-all duration-300 ${!isExpanded ? "w-[16rem]" : "w-[5rem]"} flex-col justify-between border-r-1 border-r-gray-300/30 bg-gray-100/20 p-4 pt-0 font-semibold dark:border-r-gray-500/30 dark:bg-gray-950/20`}
    >
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-start -space-y-2">
          <Logo />
          <h1 className="text-center text-lg font-bold text-indigo-900/80">
            {t("sidebar.title")}
          </h1>
        </div>

        {role === "dean" && <DeanLinks />}
        {role === "supervisor" && <SupervisorsLinks />}
        {role === "teacher" && <TeachersLinks />}
      </div>
      <Logout />
    </nav>
  );
}

export default SideBar;
