import { BookOpen, Newspaper } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCalendarDays, HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
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
        title: "TimeTables",
        value: "timetables",
        icon: <HiOutlineCalendarDays className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.classes"),
        value: "classes",
        icon: <img src={classIcon} className="h-8 w-7" alt="class icon" />,
        immediateLink: false,
      },
      {
        title: "Subjects",
        value: "subjects",
        icon: <BookOpen className="h-6.5 w-7.5" />,
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
  return <NavList buttons={buttons} role="supervisor" />;
}

export default SupervisorsLinks;
