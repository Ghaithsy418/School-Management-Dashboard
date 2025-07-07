import Classes from "@/features/supervisors/classesManagement/Classes";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";

function ClassManagment() {
  useEffect(function () {
    document.title = "Classes";
  }, []);

  return (
    <MainContainer title="Classes Management">
      <div className="pr-6">
        <MainContainer.MainPageHeader>
          <MainContainer.Controls options={options} width="w-56" />
        </MainContainer.MainPageHeader>
      </div>
      <Classes />
    </MainContainer>
  );
}

const options = [
  { title: "Sort By :", value: "" },
  { title: "Class Name (A-Z)", value: "asc-className" },
  { title: "Class Name (Z-A)", value: "desc-className" },
  { title: "Max Size (Low First)", value: "asc-studentsNum" },
  { title: "Max Size (Many First)", value: "desc-studentsNum" },
  { title: "Students No. (Low First)", value: "asc-currentStudentNum" },
  { title: "Students No. (Many First)", value: "desc-currentStudentNum" },
];

export default ClassManagment;
