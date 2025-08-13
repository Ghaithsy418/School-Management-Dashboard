import ShowReportedCommentsButton from "@/features/news&adds/comments/ShowReportedCommentsButton";
import NewsLayout from "@/features/news&adds/NewsLayout";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";

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
  console.log(format(Date.now(), "EEEE"));
  return (
    <MainContainer title={t("main.title")}>
      <MainContainer.MainPageHeader>
        <div className="flex items-center gap-5">
          <MainContainer.Controls options={options} wantsLink={false} />
          <ShowReportedCommentsButton />
        </div>
      </MainContainer.MainPageHeader>
      <NewsLayout />
    </MainContainer>
  );
}

export default NewsAndEvents;
