import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiBooks, PiHouseLineBold, PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";
import classIcon from "/images/classIcon.svg";
import teacherIcon from "/images/teacherIcon.svg";

function SupervisorsLinks() {
  const { t } = useTranslation();
  const buttons = useMemo(
    () => [
      {
        title: t("sidebar.dashboard"),
        value: "dashboard",
        icon: <PiHouseLineBold className="h-7 w-7" />,
      },
      {
        title: t("sidebar.students"),
        value: "students",
        icon: <PiStudent className="h-7 w-7" />,
      },
      {
        title: t("sidebar.teachers"),
        value: "teachers",
        icon: <img src={teacherIcon} className="h-7 w-7" alt="teacher icon" />,
      },
      {
        title: t("sidebar.classes"),
        value: "classes",
        icon: <img src={classIcon} className="h-8 w-7" alt="class icon" />,
      },
      {
        title: "Subjects",
        value: "subjects",
        icon: <PiBooks className="h-7 w-7" />,
      },
      {
        title: t("sidebar.settings"),
        value: "settings",
        icon: <HiOutlineCog8Tooth className="h-7 w-7" />,
      },
    ],
    [t],
  );
  return <NavList buttons={buttons} role="supervisor" />;
}

export default SupervisorsLinks;
