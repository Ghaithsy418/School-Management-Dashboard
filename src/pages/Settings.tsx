import MainContainer from "@/ui/MainContainer";
import SwitchLanguage from "@/ui/SwitchLanguage";
import { useTranslation } from "react-i18next";

function Settings() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start justify-center px-8 py-16">
      <MainContainer title={t("settings.title")}>
        <SwitchLanguage />
      </MainContainer>
    </div>
  );
}

export default Settings;
