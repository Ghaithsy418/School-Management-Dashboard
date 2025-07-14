import { useUser } from "@/slices/userSlice";
import CreatePost from "./CreatePost";
import RenderEvents from "./RenderEvents";
import { useGetAllEvents } from "./useGetAllEvents";

function NewsLayout() {
  const {
    user: { role },
  } = useUser();
  const { events, isGettingEvents } = useGetAllEvents();

  if (isGettingEvents) return null;

  return (
    <div className="my-4 flex w-[38rem] flex-col items-center justify-center gap-1 place-self-center rounded-sm bg-gray-300 outline outline-gray-700/20">
      {role === "supervisor" && <CreatePost />}
      <RenderEvents events={events ?? []} />
    </div>
  );
}

export default NewsLayout;
