import OthersLayout from "@/features/dean/othersRole/OthersLayout";
import MainContainer from "@/ui/MainContainer";

function Others() {
  const options = [{ title: "Sort by", value: "" }];

  return (
    <MainContainer title="Other Roles">
      <MainContainer.MainPageHeader>
        <MainContainer.Controls
          options={options}
          linkTo="add-other-user"
          linkTitle="Add Other User"
        />
      </MainContainer.MainPageHeader>
      <OthersLayout />
    </MainContainer>
  );
}

export default Others;
