import { CommentsTypes } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import CommentReactionButton from "./CommentReactionButton";
import CommentReactionCount from "./CommentReactionsCount";

interface CommentButtonsTypes {
  commentTime: string[];
  comment: CommentsTypes;
  setIsReplying: Dispatch<SetStateAction<boolean>>;
  commentId: number;
  eventId: number;
}

function CommentButtons({
  commentTime,
  comment,
  setIsReplying,
  commentId,
  eventId,
}: CommentButtonsTypes) {
  const {
    is_reacted,
    user_reaction_type,
    reactions: { reaction_number },
  } = comment;

  const [reactionObjState, setReactionObjState] = useState({
    isReactedState: is_reacted,
    userReactionState: user_reaction_type,
    currentReactionNumber: reaction_number,
  });

  return (
    <div className="ml-2 flex items-center justify-center gap-4 text-[13px] font-light">
      <span>{commentTime?.[0] + commentTime?.[1]?.slice(0, 1)}</span>
      <CommentReactionButton
        eventId={eventId}
        commentId={commentId}
        reactionObjState={reactionObjState}
        setReactionObjState={setReactionObjState}
        userReactionType={user_reaction_type}
      />
      <button
        onClick={() => setIsReplying(true)}
        className="cursor-pointer hover:text-indigo-600 hover:underline"
      >
        Reply
      </button>
      <CommentReactionCount
        comment={comment}
        reactionObjState={reactionObjState}
      />
    </div>
  );
}

export default CommentButtons;
