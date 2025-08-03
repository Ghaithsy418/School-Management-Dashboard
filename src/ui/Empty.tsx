import { useTranslation } from "react-i18next";
import { HiOutlineInbox } from "react-icons/hi2";

function Empty({
  resource,
  className,
}: {
  resource: string;
  className?: string;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-slate-200 p-12 text-center dark:border-slate-600 ${className}`}
    >
      <HiOutlineInbox className="h-16 w-16 text-slate-400 dark:text-slate-300" />

      <p className="text-lg font-semibold text-slate-600 dark:text-slate-200">
        {t("empty.no")} {resource} {t("empty.message")}
      </p>
    </div>
  );
}

export default Empty;
