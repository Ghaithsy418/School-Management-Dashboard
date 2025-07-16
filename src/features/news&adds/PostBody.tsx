import { EventTypes } from "@/utils/types";
import ImagesContainer from "./ImagesContainer";
import PostDescription from "./PostDescription";

interface PostBodyTypes {
  event: EventTypes;
}

function PostBody({ event }: PostBodyTypes) {
  const { event_name, post, media, created_at, id } = event;
  return (
    <div className="flex w-full flex-col items-start justify-center space-y-3 py-3">
      <PostDescription eventTitle={event_name} description={post} />
      <ImagesContainer media={media} createdAt={created_at} id={id} />
    </div>
  );
}

export default PostBody;
