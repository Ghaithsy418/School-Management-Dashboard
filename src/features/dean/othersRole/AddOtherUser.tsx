import MainContainer from "@/ui/MainContainer";
import { useState } from "react";
import AddByCSV from "../AddByCSV";
import AddTeachersSupervisorsForm from "../AddTeachersSupervisorsForm";
import { useTranslation } from "react-i18next";

interface CsvDataTypes {
  name: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

function AddOtherUser() {
  const { t } = useTranslation("others");
  const [csvData, setCsvData] = useState<CsvDataTypes>(initialCsvData);

  return (
    <MainContainer
      title={t("addOther.title")}
      needsBackArrow={true}
      toPage="/dean/others"
    >
      <AddByCSV setCsvData={setCsvData} />
      <AddTeachersSupervisorsForm role="other" csvData={csvData} />
    </MainContainer>
  );
}

const initialCsvData = {
  name: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export default AddOtherUser;
