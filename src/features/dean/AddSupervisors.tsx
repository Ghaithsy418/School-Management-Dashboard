import MainContainer from "@/ui/MainContainer";
import AddByCSV from "./AddByCSV";
import AddTeachersSupervisorsForm from "./AddTeachersSupervisorsForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CsvDataTypes {
  name: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

function AddSupervisors() {
  const { t } = useTranslation("supervisors");
  const [csvData, setCsvData] = useState<CsvDataTypes>(initialCsvData);

  return (
    <MainContainer
      title={t("addSupervisor.title")}
      needsBackArrow={true}
      toPage="/dean/supervisors"
    >
      <AddByCSV setCsvData={setCsvData} />
      <AddTeachersSupervisorsForm role="supervisor" csvData={csvData} />
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

export default AddSupervisors;
