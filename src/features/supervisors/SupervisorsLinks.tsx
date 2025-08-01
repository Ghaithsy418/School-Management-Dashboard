import { BookOpen, Newspaper } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineCalendarDays, HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiHouseLineBold, PiStudent } from "react-icons/pi";
import NavList from "../../ui/NavList";

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
        icon: (
          <svg
            className="fill-gray-950 stroke-gray-950 dark:fill-gray-50 dark:stroke-gray-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 640"
            width="28"
            height="30"
            x="0px"
            y="0px"
          >
            <path d="M56,264H456a7.99539,7.99539,0,0,0,8-8V224a7.99539,7.99539,0,0,0-8-8H440V24a7.99539,7.99539,0,0,0-8-8H80a7.99539,7.99539,0,0,0-8,8V216H56a7.99539,7.99539,0,0,0-8,8v32A7.99539,7.99539,0,0,0,56,264ZM88,32H424V216H216V184a7.99539,7.99539,0,0,0-8-8H144a7.99539,7.99539,0,0,0-8,8v32H88ZM200,216H152V192h48ZM64,232H448v16H64Z" />
            <rect x="160" y="312" width="32" height="16" />
            <rect x="320" y="312" width="32" height="16" />
            <path d="M472,296H386.75293l-3.08887-10.29688A8.00666,8.00666,0,0,0,376,280H296a8.00666,8.00666,0,0,0-7.66406,5.70312L285.24707,296H226.75293l-3.08887-10.29688A8.00666,8.00666,0,0,0,216,280H136a8.00666,8.00666,0,0,0-7.66406,5.70312L125.24707,296H40a7.99539,7.99539,0,0,0-8,8v32a7.99539,7.99539,0,0,0,8,8h8V488a7.99539,7.99539,0,0,0,8,8H72a7.99489,7.99489,0,0,0,7.95312-7.16406L95.19922,344h15.64746l-6.51074,21.70312A8.12882,8.12882,0,0,0,104,368v24a23.95073,23.95073,0,0,0,16.63135,22.72217l7.40771,74.07471A8.00132,8.00132,0,0,0,136,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312L167.24072,416h17.51856l7.27978,72.79688A8.00132,8.00132,0,0,0,200,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312l7.40722-74.07471A23.95008,23.95008,0,0,0,248,392V368a8.12882,8.12882,0,0,0-.33594-2.29688L241.15332,344h29.69336l-6.51074,21.70312A8.12882,8.12882,0,0,0,264,368v24a23.95073,23.95073,0,0,0,16.63135,22.72217l7.40771,74.07471A8.00132,8.00132,0,0,0,296,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312L327.24072,416h17.51856l7.27978,72.79688A8.00132,8.00132,0,0,0,360,496h16a8.00132,8.00132,0,0,0,7.96094-7.20312l7.40722-74.07471A23.95008,23.95008,0,0,0,408,392V368a8.12882,8.12882,0,0,0-.33594-2.29688L401.15332,344h15.64746l15.2461,144.83594A7.99489,7.99489,0,0,0,440,496h16a7.99539,7.99539,0,0,0,8-8V344h8a7.99539,7.99539,0,0,0,8-8V304A7.99539,7.99539,0,0,0,472,296ZM64.79688,480H64V344H79.1167ZM48,328V312h72.44678L115.647,328Zm96.75781,152h-1.51562l-6.40137-64h14.31836Zm62.48438,0-6.40137-64h14.31836l-6.40137,64ZM232,392a8.00541,8.00541,0,0,1-8,8H128a8.00541,8.00541,0,0,1-8-8V369.17188L141.95312,296h68.09376L232,369.17188Zm4.353-64-4.79981-16h48.89356L275.647,328Zm68.40478,152h-1.51562l-6.40137-64h14.31836Zm62.48438,0-6.40137-64h14.31836l-6.40137,64ZM392,392a8.00541,8.00541,0,0,1-8,8H288a8.00541,8.00541,0,0,1-8-8V369.17188L301.95312,296h68.09376L392,369.17188Zm56,88h-.79688L432.8833,344H448Zm16-152H396.353l-4.79981-16H464Z" />
          </svg>
        ),
        immediateLink: false,
      },
      {
        title: t("sidebar.timeTables"),
        value: "timetables",
        icon: <HiOutlineCalendarDays className="h-7 w-7" />,
        immediateLink: false,
      },
      {
        title: t("sidebar.classes"),
        value: "classes",
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
              stroke-width="5"
            />
            <text
              x="30"
              y="42"
              font-family="Arial, Helvetica, sans-serif"
              font-size="28"
              font-weight="bold"
            >
              A+
            </text>
            <line x1="25" y1="60" x2="75" y2="60" stroke-width="5" />
            <line x1="25" y1="70" x2="75" y2="70" stroke-width="5" />
            <line x1="25" y1="80" x2="55" y2="80" stroke-width="5" />
          </svg>
        ),
        immediateLink: false,
      },
      {
        title: t("sidebar.subjects"),
        value: "subjects",
        icon: <BookOpen className="h-6.5 w-7.5" />,
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
  return <NavList buttons={buttons} role="supervisor" />;
}

export default SupervisorsLinks;
