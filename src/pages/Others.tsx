import OthersLayout from "@/features/dean/othersRole/OthersLayout";
import MainContainer from "@/ui/MainContainer";

function Others() {
  const options = [
    { title: "Sort by", value: "" },
    { title: "Name (A-Z)", value: "asc-full_name" },
    { title: "Name (Z-A)", value: "desc-full_name" },
    { title: "Less Permissions", value: "asc-permission" },
    { title: "More Permissions", value: "desc-permission" },
  ];

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
