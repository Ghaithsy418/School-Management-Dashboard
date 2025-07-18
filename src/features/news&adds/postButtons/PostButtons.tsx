import { EventTypes } from "@/utils/types";
import CommentButton from "./CommentButton";
import CopyButton from "./CopyButton";
import ReactionButton from "./ReactionButton";
import { Dispatch, SetStateAction } from "react";

interface PostButtonsTypes {
  event: EventTypes;
  reactionObjState: {
    isReactedState: boolean;
    userReactionState: string;
    currentReactionNumber: number;
  };
  setReactionObjState: Dispatch<
    SetStateAction<{
      isReactedState: boolean;
      userReactionState: string;
      currentReactionNumber: number;
    }>
  >;
}

function PostButtons({
  event,
  reactionObjState,
  setReactionObjState,
}: PostButtonsTypes) {
  const { id: eventId, user_reaction_type } = event;
  return (
    <div className="flex w-full items-center justify-between px-5 pb-2">
      <ReactionButton
        eventId={eventId}
        reactionObjState={reactionObjState}
        setReactionObjState={setReactionObjState}
        userReactionType={user_reaction_type}
      />
      <CommentButton eventId={eventId} />
      <CopyButton eventId={eventId} />
    </div>
  );
}

export default PostButtons;
