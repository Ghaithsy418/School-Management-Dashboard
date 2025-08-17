import SubmitButton from "@/ui/SubmitButton";

function GetExamFileButton() {
  return (
    <SubmitButton
      colorFrom="from-purple-600"
      colorTo="to-purple-700"
      colorHoverFrom="hover:from-purple-700"
      colorHoverTo="hover:to-purple-800"
      textColor="text-white"
      size="w-full"
      className="font-medium"
    >
      Get Exam File
    </SubmitButton>
  );
}

export default GetExamFileButton;
