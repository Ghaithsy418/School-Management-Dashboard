import IconNumber from "@/ui/IconNumber";
import TeacherSvg from "@/utils/TeacherSvg";
import { Newspaper } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";
import NavList from "../../ui/NavList";
import { useGetUnSeenComplaints } from "./complaints/useGetUnSeenComplaints";
import { GrSchedule } from "react-icons/gr";

function DeanLinks() {
  const { t } = useTranslation();
  const { unSeenComplaints } = useGetUnSeenComplaints();
  console.log(unSeenComplaints);

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
        icon: <TeacherSvg width="28" height="28" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.supervisors"),
        value: "supervisors",
        icon: <MdOutlineSupervisorAccount className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.others"),
        value: "others",
        icon: <HiOutlineUserGroup className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.exam"),
        value: "timetables/examSchedules",
        icon: <GrSchedule className="h-6 w-6" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.complaints"),
        value: "complaints",
        icon: (
          <IconNumber
            number={unSeenComplaints || 0}
            className="h-6 w-6"
            numberOffset="-right-2 -top-1.5"
          >
            <VscFeedback className="h-6 w-6" />
          </IconNumber>
        ),
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
    [t, unSeenComplaints],
  );

  return <NavList buttons={buttons} role="dean" />;
}

export default DeanLinks;
