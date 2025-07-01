import { useEffect } from "react";
import SupervisorsList from "../features/supervisors/SupervisorsList";
import MainContainer from "../ui/MainContainer";

//Responsible: for the supervisors routes operators
function Supervisors() {
  useEffect(function () {
    document.title = "Supervisors";
  }, []);

  return (
    <MainContainer title="Supervisors">
      <MainContainer.MainPageHeader>
        <MainContainer.Controls
          options={options}
          linkTo="add-a-supervisor"
          linkTitle="Add a Supervisor"
        />
      </MainContainer.MainPageHeader>
      <SupervisorsList />
    </MainContainer>
  );
}

const options = [
  { title: "Sort by", value: "" },
  { title: "Ascending (A-Z)", value: "asc" },
  { title: "Descending (Z-A)", value: "desc" },
];

export default Supervisors;
