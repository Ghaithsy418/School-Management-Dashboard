import Classes from "@/features/supervisors/classesManagement/Classes";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function ClassManagment() {
  const { t } = useTranslation("classes");

  useEffect(function () {
    document.title = "Classes";
  }, []);

  const options = [
    { title: t("main.sortBy"), value: "" },
    { title: t("main.classNameAsc"), value: "asc-className" },
    { title: t("main.classNameDesc"), value: "desc-className" },
    { title: t("main.maxSizeAsc"), value: "asc-studentsNum" },
    { title: t("main.maxSizeDesc"), value: "desc-studentsNum" },
    { title: t("main.studentsNoAsc"), value: "desc-currentStudentNumber" },
    { title: t("main.studentsNoDesc"), value: "asc-currentStudentNumber" },
  ];

  return (
    <MainContainer title={t("main.mainTitle")}>
      <div className="ltr:pr-6 rtl:pl-7">
        <MainContainer.MainPageHeader>
          <MainContainer.Controls options={options} width="w-56" />
        </MainContainer.MainPageHeader>
      </div>
      <Classes />
    </MainContainer>
  );
}

export default ClassManagment;
