import { EventTypes } from "@/utils/types";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHead from "./PostHead";
import React from "react";

interface PostTypes {
  event: EventTypes;
}

function Post({ event }: PostTypes) {
  const {
    created_at,
    publisherName,
    media,
    post,
    event_name,
    reaction_number,
    comment_number,
  } = event;

  return (
    <div className="flex w-[38rem] flex-col bg-gray-50 pt-4">
      <PostHead created_at={created_at} publisherName={publisherName} />
      <PostBody media={media} post={post} event_name={event_name} />
      <PostFooter commentsNum={comment_number} reactionsNum={reaction_number} />
    </div>
  );
}

export default React.memo(Post);
