import Button from "@/ui/Button";
import SmallSpinner from "@/ui/SmallSpinner";
import { HiOutlineExclamationTriangle, HiOutlineTrash } from "react-icons/hi2";
import { useDeleteClass } from "./useDeleteClass";
import { useTranslation } from "react-i18next";

interface DeleteClassTypes {
  className: string;
  classId: number;
  onCloseModal?: () => void;
}

function DeleteClass({ className, classId, onCloseModal }: DeleteClassTypes) {
  const { t } = useTranslation("classes");
  const { deleteClassMutation, isDeletingClass } = useDeleteClass();

  const handleDelete = () => {
    deleteClassMutation({ classId }, { onSuccess: () => onCloseModal?.() });
  };

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <HiOutlineExclamationTriangle className="h-10 w-10 text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-800">
          {t("deleteClass.title")}
        </h3>
        <p className="max-w-md text-slate-500">
          {t("deleteClass.warning")}{" "}
          <strong className="font-semibold text-slate-700">{className}</strong>
          {t("deleteClass.question")}
          <br />
          {t("deleteClass.undoneAction")}
        </p>
      </div>

      <div className="mt-6 w-full max-w-xs">
        <Button
          onClick={handleDelete}
          disabled={isDeletingClass}
          color="text-white"
          backgroundColor="bg-red-600"
          backgroundHover="hover:bg-red-700"
          className="w-full justify-center"
        >
          {isDeletingClass ? (
            <SmallSpinner />
          ) : (
            <div className="flex items-center gap-2">
              <HiOutlineTrash className="h-5 w-5" />
              <span>{t("deleteClass.yesButton")}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}

export default DeleteClass;
