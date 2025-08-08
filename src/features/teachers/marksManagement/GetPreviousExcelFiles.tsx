import { useMarks } from "@/slices/MarksManagementSlice";
import SubmitButton from "@/ui/SubmitButton";
import { useGetPreviousExcel } from "./useGetPreviousExcel";

function GetPreviousExcelFiles() {
  const { classId } = useMarks();
  const { previousExcelMutation, isGettingPreviousExcel } =
    useGetPreviousExcel();

  return (
    <SubmitButton
      colorFrom="from-slate-600"
      colorTo="to-slate-700"
      colorHoverFrom="hover:from-slate-700"
      colorHoverTo="hover:to-slate-800"
      textColor="text-white"
      size="w-full"
      className="font-medium"
      disabled={!classId}
      onClick={() => previousExcelMutation({ classId })}
    >
      {isGettingPreviousExcel
        ? "Getting Files..."
        : "Or Get Previous Excel Files"}
    </SubmitButton>
  );
}

export default GetPreviousExcelFiles;
