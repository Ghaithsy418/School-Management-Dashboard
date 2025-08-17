import SubmitButton from "@/ui/SubmitButton";
import { ChangeEvent, useRef } from "react";
import { useUploadExamFile } from "./useUploadExamFile";
import { useUploadExam } from "@/slices/examSlice";
import SmallSpinner from "@/ui/SmallSpinner";

function UploadExamFileButton() {
  const ref = useRef<HTMLInputElement | null>(null);
  const { uploadFileMutation, isUploadingFile } = useUploadExamFile();
  const { type, semester, grade } = useUploadExam();

  function handleSelect(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0])
      uploadFileMutation({
        schedule: e.target.files?.[0],
        type,
        semester,
        grade,
      });
    e.target.value = "";
  }

  return (
    <>
      <input
        onChange={(e) => handleSelect(e)}
        ref={ref}
        hidden
        type="file"
        accept=".pdf"
      />
      <SubmitButton
        colorFrom="from-red-600"
        colorTo="to-red-700"
        colorHoverFrom="hover:from-red-700"
        colorHoverTo="hover:to-red-800"
        textColor="text-white"
        size="w-full"
        className="font-medium"
        disabled={!type || !semester || !grade}
        onClick={() => ref?.current?.click()}
      >
        {isUploadingFile ? <SmallSpinner /> : "Upload Exam Schedule File"}
      </SubmitButton>
    </>
  );
}

export default UploadExamFileButton;
