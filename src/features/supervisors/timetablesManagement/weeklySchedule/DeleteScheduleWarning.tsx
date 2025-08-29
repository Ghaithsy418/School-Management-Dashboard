import { HiOutlineTrash } from "react-icons/hi";
import Button from "@/ui/Button";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import SmallSpinner from "@/ui/SmallSpinner";
import { useDeleteSchedule } from "./useDeleteSchedule";

function DeleteScheduleWarning({
  className,
  onCloseModal,
}: {
  className: string;
  onCloseModal?: () => void;
}) {
  const { deleteScheduleMutation, isDeletingSchedule } = useDeleteSchedule();
  const { t } = useTranslation("timetables");

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <HiOutlineExclamationTriangle className="h-10 w-10 text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-50">
          {t("deleteSchedule.title")}
        </h3>
        <p className="max-w-md text-nowrap text-slate-500 dark:text-slate-300">
          {t("deleteSchedule.warning")}{" "}
          <strong className="font-semibold text-slate-700 dark:text-slate-100">
            {className}
          </strong>
          {t("deleteSchedule.question")}
          <br />
          {t("deleteSchedule.undoneAction")}
        </p>
      </div>

      <div className="mt-6 w-full max-w-xs">
        <Button
          onClick={() =>
            deleteScheduleMutation(
              { className },
              { onSuccess: () => onCloseModal?.() },
            )
          }
          disabled={isDeletingSchedule}
          color="text-white"
          backgroundColor="bg-red-600"
          backgroundHover="hover:bg-red-700"
          className="w-full justify-center"
        >
          {isDeletingSchedule ? (
            <SmallSpinner />
          ) : (
            <div className="flex items-center gap-2">
              <HiOutlineTrash className="h-5 w-5" />
              <span>{t("deleteSchedule.yesButton")}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}

export default DeleteScheduleWarning;
