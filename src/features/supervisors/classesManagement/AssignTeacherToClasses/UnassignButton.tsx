import Button from "@/ui/Button";
import { useUnassignTeacherToClass } from "./useUnassignTeacherToClass";
import SmallSpinner from "@/ui/SmallSpinner";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

interface UnassignButton {
  className: string;
  classId: number;
  teacherId: number;
}

function UnassignButton({ className, classId, teacherId }: UnassignButton) {
  const { t } = useTranslation("classes");
  const queryClient = useQueryClient();
  const { unassignTeacherMutation, isUnassigningTeacher } =
    useUnassignTeacherToClass();
  return (
    <Button
      color="text-violet-50"
      backgroundColor="bg-violet-600"
      backgroundHover="hover:bg-violet-700"
      className="rtl:text-xs rtl:text-nowrap"
      size="small"
      onClick={() =>
        unassignTeacherMutation(
          { className, teacherId },
          {
            onSuccess: () =>
              queryClient.invalidateQueries({
                queryKey: ["classTeacher", classId],
              }),
          },
        )
      }
    >
      {isUnassigningTeacher ? <SmallSpinner /> : t("main.unAssign")}
    </Button>
  );
}

export default UnassignButton;
