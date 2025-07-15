import { useUser } from "@/slices/userSlice";
import CreatePost from "./CreatePost";
import RenderEvents from "./RenderEvents";
import { useGetAllEvents } from "./useGetAllEvents";
import PostsLoading from "./PostsLoading";
import NoMoreEvents from "./NoMoreEvents";

function NewsLayout() {
  const {
    user: { role },
  } = useUser();
  const { events, isGettingEvents } = useGetAllEvents();

  return (
    <div
      className={`my-4 flex w-[38rem] flex-col items-center justify-center gap-1 place-self-center rounded-sm bg-gray-300 outline outline-gray-700/20`}
    >
      {role === "supervisor" && <CreatePost />}
      {isGettingEvents ? (
        <>
          <PostsLoading />
          <PostsLoading />
        </>
      ) : (
        <RenderEvents events={events} />
      )}
      {events?.length !== 0 && <NoMoreEvents />}
    </div>
  );
}

export default NewsLayout;
