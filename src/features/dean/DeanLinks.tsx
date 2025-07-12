import { Newspaper } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";
import teacherIcon from "/images/teacherIcon.svg";

function DeanLinks() {
  const { t } = useTranslation();
  const buttons = useMemo(
    () => [
      {
        title: t("sidebar.dashboard"),
        value: "dashboard",
        icon: <PiHouseLineBold className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.students"),
        value: "students",
        icon: <PiStudent className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.teachers"),
        value: "teachers",
        icon: <img src={teacherIcon} className="h-7 w-7" alt="teacher icon" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.supervisors"),
        value: "supervisors",
        icon: <MdOutlineSupervisorAccount className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: "News & Adds",
        value: "news&adds",
        icon: <Newspaper className="h-6.5 w-6.5" />,
        immediateLink: true,
      },
      {
        title: t("sidebar.settings"),
        value: "settings",
        icon: <HiOutlineCog8Tooth className="h-7 w-7" />,
        immediateLink: false,
      },
    ],
    [t],
  );

  return <NavList buttons={buttons} role="dean" />;
}

export default DeanLinks;
