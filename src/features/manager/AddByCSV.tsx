import { useRef } from "react";
import ParsingCSV from "../../ui/ParsingCSV";
import PrimaryButton from "../../ui/Button";

function AddByCSV() {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <PrimaryButton
        color="text-violet-50"
        backgroundColor="bg-violet-600"
        backgroundHover="hover:bg-violet-700/90"
        size="big"
        onClick={() => ref.current?.click()}
      >
        Add CSV File
      </PrimaryButton>
      <ParsingCSV ref={ref} />
    </div>
  );
}

export default AddByCSV;
