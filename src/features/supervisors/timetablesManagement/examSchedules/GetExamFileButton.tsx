import { useGetExam } from "@/slices/examSlice";
import SubmitButton from "@/ui/SubmitButton";
import { useGetExamSchedule } from "./useGetExamSchedule";

function GetExamFileButton() {
  const { grade, type, semester } = useGetExam();
  const { getExamScheduleMutation, isGettingExamSchedule } =
    useGetExamSchedule();

  function handleClick() {
    if (!grade || !type || !semester) return;
    getExamScheduleMutation({ grade, type, semester });
  }

  return (
    <SubmitButton
      colorFrom="from-purple-600"
      colorTo="to-purple-700"
      colorHoverFrom="hover:from-purple-700"
      colorHoverTo="hover:to-purple-800"
      textColor="text-white"
      size="w-full"
      className="font-medium"
      onClick={handleClick}
      disabled={!grade || !type || !semester}
    >
      {isGettingExamSchedule ? "Getting File..." : "Get Exam File"}
    </SubmitButton>
  );
}

export default GetExamFileButton;
