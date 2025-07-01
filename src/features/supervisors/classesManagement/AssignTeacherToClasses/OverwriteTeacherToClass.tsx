import toast, { Toast } from "react-hot-toast";
import Button from "@/ui/Button";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useOverwriteTeacherToClass } from "./useOverwriteTeacherToClass";
import SmallSpinner from "@/ui/SmallSpinner";

interface OverwriteTypes {
  t: Toast;
  errorMessage: string;
}

function OverwriteTeacherToClass({ t, errorMessage }: OverwriteTypes) {
  const { overwriteTeacherMutation, isOverwritingTeacher } =
    useOverwriteTeacherToClass(t);
  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <div className="flex items-start justify-start gap-5">
        <MdOutlineErrorOutline className="h-8 w-18 text-rose-600" />
        <h4 className="text-lg font-semibold">
          {errorMessage}
          {"."}
        </h4>
      </div>
      <div className="flex items-center justify-center gap-5 place-self-end">
        <Button
          onClick={overwriteTeacherMutation}
          color="text-rose-50"
          backgroundColor="bg-rose-700"
          backgroundHover="hover:bg-rose-800"
        >
          {isOverwritingTeacher ? <SmallSpinner /> : "Yes, Sure"}
        </Button>
        <Button primary={false} onClick={() => toast.dismiss(t.id)}>
          No, Cancel
        </Button>
      </div>
    </div>
  );
}

export default OverwriteTeacherToClass;
