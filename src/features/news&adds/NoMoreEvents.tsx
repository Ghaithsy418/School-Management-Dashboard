import { useTranslation } from "react-i18next";
import { PiSmileySadLight } from "react-icons/pi";

function NoMoreEvents() {
  const { t } = useTranslation("newsAndAdds");

  return (
    <div className="flex h-64 w-full flex-col items-center justify-center gap-4 bg-gray-50 p-12 text-center rtl:text-xl dark:bg-gray-900">
      <PiSmileySadLight className="h-20 w-20 text-slate-400 dark:text-slate-50" />
      {t("main.noMoreEvents")}
      <p className="text-xl font-semibold text-slate-600 dark:text-slate-200"></p>
    </div>
  );
}

export default NoMoreEvents;
