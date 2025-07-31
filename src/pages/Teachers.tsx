import { useEffect } from "react";
import TeachersList from "../features/teachers/TeachersList";
import MainContainer from "../ui/MainContainer";
import { useTranslation } from "react-i18next";

//Responsible: for the teachers routes operators
function Teachers() {
  const { t } = useTranslation("teachers");

  useEffect(function () {
    document.title = "Teachers";
  }, []);

  const options = [
    { title: t("main.sortBy"), value: "" },
    { title: t("main.asc"), value: "asc-full_name" },
    { title: t("main.desc"), value: "desc-full_name" },
  ];

  return (
    <MainContainer title={t("main.mainTitle")}>
      <MainContainer.MainPageHeader>
        <MainContainer.Controls
          options={options}
          linkTo="add-a-teacher"
          linkTitle={t("main.addTeacher")}
        />
      </MainContainer.MainPageHeader>
      <TeachersList />
    </MainContainer>
  );
}

export default Teachers;
