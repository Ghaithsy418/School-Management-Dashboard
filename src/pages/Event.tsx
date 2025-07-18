import ShareEvent from "@/features/news&adds/ShareEvent";
import MainContainer from "@/ui/MainContainer";
import { useEffect } from "react";

function Event() {
  useEffect(function () {
    document.title = "Event";
  }, []);

  return (
    <MainContainer
      title="News & Adds"
      needsBackArrow={true}
      toPage="/news&adds"
    >
      <div className="mt-12 w-[38rem] place-self-center rounded-sm outline outline-gray-700/20">
        <ShareEvent />
      </div>
    </MainContainer>
  );
}

export default Event;
