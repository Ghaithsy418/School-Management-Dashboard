import { Dispatch, SetStateAction, useRef } from "react";
import ParsingCSV from "../../ui/ParsingCSV";
import PrimaryButton from "../../ui/Button";
import { useTranslation } from "react-i18next";

interface AddCsvTypes<T> {
  setCsvData: Dispatch<SetStateAction<T>>;
}

function AddByCSV<T>({ setCsvData }: AddCsvTypes<T>) {
  const ref = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation("supervisors");

  return (
    <div>
      <PrimaryButton
        color="text-violet-50"
        backgroundColor="bg-violet-600"
        backgroundHover="hover:bg-violet-700/90"
        size="big"
        onClick={() => ref.current?.click()}
      >
        {t("addSupervisor.addCsv")}
      </PrimaryButton>
      <ParsingCSV<T> ref={ref} setCsvData={setCsvData} />
    </div>
  );
}

export default AddByCSV;
