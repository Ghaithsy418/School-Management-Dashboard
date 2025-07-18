import { EventTypes } from "@/utils/types";
import PostButtons from "./postButtons/PostButtons";
import PostStatistics from "./PostStatistics";
import { useState } from "react";

interface PostFooterTypes {
  event: EventTypes;
}

function PostFooter({ event }: PostFooterTypes) {
  const {
    is_reacted,
    user_reaction_type,
    reactions: { reaction_number },
  } = event;

  const [reactionObjState, setReactionObjState] = useState({
    isReactedState: is_reacted,
    userReactionState: user_reaction_type,
    currentReactionNumber: reaction_number,
  });
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-sm">
      <PostStatistics reactionObjState={reactionObjState} event={event} />
      <PostButtons
        reactionObjState={reactionObjState}
        setReactionObjState={setReactionObjState}
        event={event}
      />
    </div>
  );
}

export default PostFooter;
