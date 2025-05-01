import SupervisorsList from "../features/supervisors/SupervisorsList";
import Controls from "../ui/Controls";
import MainContainer from "../ui/MainContainer";
import MainPageHeader from "../ui/MainPageHeader";

function Supervisors() {
  return (
    <MainContainer title="Supervisors">
      <MainPageHeader>
        <Controls
          options={options}
          linkTo="add-a-supervisor"
          linkTitle="Add a Supervisor"
        />
      </MainPageHeader>
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
