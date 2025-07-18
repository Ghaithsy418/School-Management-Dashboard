import UserEventsLayout from "@/features/news&adds/UserEventsLayout";
import MainContainer from "@/ui/MainContainer";
import { useEffect, useState } from "react";

function UserEvents() {
  const [username, setUsername] = useState("");
  useEffect(function () {
    document.title = "User Events";
  }, []);

  return (
    <MainContainer
      title={
        username
          ? `${username.split(" ")?.[0]} ${username.split(" ")?.[2]}'s Events`
          : "News & Adds"
      }
      needsBackArrow={true}
      toPage="/news&adds"
    >
      <div className="my-4 flex w-[38rem] flex-col items-center justify-center gap-1 place-self-center rounded-sm bg-gray-300 outline outline-gray-700/20">
        <UserEventsLayout setUsername={setUsername} />
      </div>
    </MainContainer>
  );
}

export default UserEvents;
