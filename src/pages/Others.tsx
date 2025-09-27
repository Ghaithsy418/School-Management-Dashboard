import OthersLayout from "@/features/dean/othersRole/OthersLayout";
import MainContainer from "@/ui/MainContainer";
import { useTranslation } from "react-i18next";

function Others() {
  const { t } = useTranslation("others");

  const options = [
    { title: t("filters.sortBy"), value: "" },
    { title: t("filters.nameAsc"), value: "asc-full_name" },
    { title: t("filters.nameDesc"), value: "desc-full_name" },
    { title: t("filters.permissionLess"), value: "asc-permission" },
    { title: t("filters.permissionMore"), value: "desc-permission" },
  ];

  return (
    <MainContainer title="Other Roles">
      <MainContainer.MainPageHeader>
        <MainContainer.Controls
          options={options}
          linkTo="add-other-user"
          linkTitle={t("main.AddButton")}
        />
      </MainContainer.MainPageHeader>
      <OthersLayout />
    </MainContainer>
  );
}

export default Others;
