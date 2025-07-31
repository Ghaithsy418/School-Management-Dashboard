import NewsLayout from "@/features/news&adds/NewsLayout";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function NewsAndEvents() {
  const { t } = useTranslation("newsAndAdds");

  useEffect(function () {
    document.title = "News & Adds";
  }, []);

  const options = [
    { title: t("main.sortBy"), value: "" },
    { title: t("main.ascTime"), value: "asc-created_at" },
    { title: t("main.descTime"), value: "desc-created_at" },
  ];

  return (
    <MainContainer title={t("main.title")}>
      <MainContainer.MainPageHeader>
        <MainContainer.Controls options={options} wantsLink={false} />
      </MainContainer.MainPageHeader>
      <NewsLayout />
    </MainContainer>
  );
}

export default NewsAndEvents;
