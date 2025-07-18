import { useParams } from "react-router-dom";
import { useGetUserEvents } from "./useGetUserEvents";
import Post from "./Post";
import Empty from "@/ui/Empty";
import PostsLoading from "./PostsLoading";
import { Dispatch, SetStateAction, useEffect } from "react";

function UserEventsLayout({
  setUsername,
}: {
  setUsername: Dispatch<SetStateAction<string>>;
}) {
  const { userId } = useParams();
  const { events, isGettingEvents } = useGetUserEvents(Number(userId));

  useEffect(
    function () {
      if (events?.[0]?.publisherName) setUsername(events?.[0]?.publisherName);
    },
    [setUsername, events],
  );

  if (isGettingEvents)
    return (
      <>
        <PostsLoading />
        <PostsLoading />
      </>
    );

  if (events?.length === 0) return <Empty resource="events" />;

  return <>{events?.map((event) => <Post event={event} />)}</>;
}

export default UserEventsLayout;
