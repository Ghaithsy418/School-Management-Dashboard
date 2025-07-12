import SubmitButton from "@/ui/SubmitButton";
import { useGetEmptySheet } from "./useGetEmptySheet";
import { useMarks } from "@/slices/MarksManagementSlice";

function GetEmptySheetButton() {
  const { classId, semester, type } = useMarks();
  const { getEmptySheetMutation, isGettingEmptySheet } = useGetEmptySheet();

  return (
    <SubmitButton
      colorFrom="from-green-600"
      colorTo="to-green-700"
      colorHoverFrom="hover:from-green-700"
      colorHoverTo="hover:to-green-800"
      textColor="text-white"
      size="w-full"
      className="font-medium"
      disabled={!classId || !semester || !type}
      onClick={getEmptySheetMutation}
    >
      {isGettingEmptySheet ? "Getting Template..." : "Get Empty Sheet"}
    </SubmitButton>
  );
}

export default GetEmptySheetButton;
