import Empty from "@/ui/Empty";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { useShareEvent } from "./useShareEvent";
import PostsLoading from "./PostsLoading";

function ShareEvent() {
  const { postId } = useParams();
  const { sharedEvent, isGettingEvent } = useShareEvent(Number(postId));

  if (isGettingEvent) return <PostsLoading />;

  if (!sharedEvent?.length) return <Empty resource="event" />;

  return <Post event={sharedEvent[0]} />;
}

export default ShareEvent;
