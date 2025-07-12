import { ClipboardCheck, Newspaper } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";
import MarksIcon from "/images/MarksIcon.svg";

function TeachersLinks() {
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
        title: "Attendance",
        value: "attendance",
        icon: <ClipboardCheck className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: "Marks",
        value: "marks",
        icon: (
          <img src={MarksIcon} alt="marks icon" className="h-[30px] w-[29px]" />
        ),
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
  return <NavList buttons={buttons} role="teacher" />;
}

export default TeachersLinks;
