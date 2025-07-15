import NewsLayout from "@/features/news&adds/NewsLayout";
import MainContainer from "@/ui/MainContainer";

function NewsAndEvents() {
  return (
    <MainContainer title="News & Adds">
      <MainContainer.MainPageHeader>
        <MainContainer.Controls options={options} wantsLink={false} />
      </MainContainer.MainPageHeader>
      <NewsLayout />
    </MainContainer>
  );
}

const options = [
  { title: "Sort by", value: "" },
  { title: "Time (Oldest first)", value: "asc-created_at" },
  { title: "Time (Most recent)", value: "desc-created_at" },
];

export default NewsAndEvents;
