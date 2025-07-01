import Button from "@/ui/Button";
import { useUnassignTeacherToClass } from "./useUnassignTeacherToClass";
import SmallSpinner from "@/ui/SmallSpinner";
import { useQueryClient } from "@tanstack/react-query";

interface UnassignButton {
  className: string;
  classId: number;
  teacherId: number;
}

function UnassignButton({ className, classId, teacherId }: UnassignButton) {
  const queryClient = useQueryClient();
  const { unassignTeacherMutation, isUnassigningTeacher } =
    useUnassignTeacherToClass();
  return (
    <Button
      color="text-violet-50"
      backgroundColor="bg-violet-600"
      backgroundHover="hover:bg-violet-700"
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
      {isUnassigningTeacher ? <SmallSpinner /> : "UnAssign"}
    </Button>
  );
}

export default UnassignButton;
