import { useEffect } from "react";
import SupervisorsList from "../features/supervisors/SupervisorsList";
import MainContainer from "../ui/MainContainer";
import { useTranslation } from "react-i18next";

//Responsible: for the supervisors routes operators
function Supervisors() {
  const { t } = useTranslation("supervisors");

  useEffect(function () {
    document.title = "Supervisors";
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
          linkTo="add-a-supervisor"
          linkTitle={t("main.addSupervisor")}
        />
      </MainContainer.MainPageHeader>
      <SupervisorsList />
    </MainContainer>
  );
}

export default Supervisors;
