import SmallSpinner from "@/ui/SmallSpinner";
import SubmitButton from "@/ui/SubmitButton";
import { ChangeEvent, useRef } from "react";
import { useUploadExcelSheet } from "./useUploadExcelSheet";

function ExportSheetButton() {
  const ref = useRef<HTMLInputElement | null>(null);
  const { uploadExcelMutation, isUploadingExcel } = useUploadExcelSheet();

  function handleSelect(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.[0])
      uploadExcelMutation({ excel_file: e.target.files?.[0] });
    e.target.value = "";
  }

  return (
    <>
      <input
        onChange={(e) => handleSelect(e)}
        ref={ref}
        hidden
        type="file"
        accept=".xlsx"
      />
      <SubmitButton
        colorFrom="from-rose-600"
        colorTo="to-rose-700"
        colorHoverFrom="hover:from-rose-700"
        colorHoverTo="hover:to-rose-800"
        textColor="text-white"
        size="w-full"
        className="font-medium"
        onClick={() => ref?.current?.click()}
      >
        {isUploadingExcel ? <SmallSpinner /> : "Upload Excel Sheet"}
      </SubmitButton>
    </>
  );
}

export default ExportSheetButton;
