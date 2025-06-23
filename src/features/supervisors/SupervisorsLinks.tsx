import { GiTeacher } from "react-icons/gi";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

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
        icon: <GiTeacher className="h-7 w-7" />,
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
