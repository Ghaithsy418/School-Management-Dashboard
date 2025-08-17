import { ClipboardCheck, Newspaper } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";
import { GrSchedule } from "react-icons/gr";

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
        title: t("sidebar.attendance"),
        value: "attendance",
        icon: <ClipboardCheck className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.marks"),
        value: "marks",
        icon: (
          <svg
            viewBox="6 0 90 90"
            width="28"
            height="32"
            className="fill-gray-950 stroke-gray-950 dark:fill-gray-50 dark:stroke-gray-50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15"
              y="10"
              width="70"
              height="80"
              rx="4"
              ry="4"
              fill="none"
              strokeWidth="5"
            />
            <text
              x="30"
              y="42"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="28"
              fontWeight="bold"
            >
              A+
            </text>
            <line x1="25" y1="60" x2="75" y2="60" strokeWidth="5" />
            <line x1="25" y1="70" x2="75" y2="70" strokeWidth="5" />
            <line x1="25" y1="80" x2="55" y2="80" strokeWidth="5" />
          </svg>
        ),
        immediateLink: false,
      },
      {
        title: t("sidebar.exam"),
        value: "timetables/examSchedules",
        icon: <GrSchedule className="h-6 w-6" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.newsAndAdds"),
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
