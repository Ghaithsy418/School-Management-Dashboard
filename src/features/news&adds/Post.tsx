import { EventTypes } from "@/utils/types";
import React from "react";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHead from "./PostHead";

interface PostTypes {
  event: EventTypes;
}

function Post({ event }: PostTypes) {
  const { reaction_number, comment_number, id } = event;

  return (
    <div className="flex w-[38rem] flex-col bg-gray-50 pt-4">
      <PostHead event={event} />
      <PostBody event={event} />
      <PostFooter
        commentsNum={comment_number}
        reactionsNum={reaction_number}
        eventId={id}
      />
    </div>
  );
}

export default React.memo(Post);
