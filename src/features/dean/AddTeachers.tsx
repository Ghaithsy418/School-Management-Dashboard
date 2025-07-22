import MainContainer from "@/ui/MainContainer";
import AddTeachersSupervisorsForm from "./AddTeachersSupervisorsForm";
import AddByCSV from "./AddByCSV";
import { useState } from "react";

interface CsvDataTypes {
  name: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

function AddTeachers() {
  const [csvData, setCsvData] = useState<CsvDataTypes>(initialCsvData);
  return (
    <>
      <MainContainer
        title="Add Teachers"
        needsBackArrow={true}
        toPage="/dean/teachers"
      >
        <AddByCSV<CsvDataTypes> setCsvData={setCsvData} />
        <AddTeachersSupervisorsForm role="teacher" csvData={csvData} />
      </MainContainer>
    </>
  );
}

const initialCsvData = {
  name: "",
  middleName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

export default AddTeachers;
