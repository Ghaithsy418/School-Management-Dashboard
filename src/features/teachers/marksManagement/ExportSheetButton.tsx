import SubmitButton from "@/ui/SubmitButton";
import { useRef } from "react";

function ExportSheetButton() {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <input ref={ref} hidden type="file" accept=".xlsx" />
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
        Upload Excel Sheet
      </SubmitButton>
    </>
  );
}

export default ExportSheetButton;
