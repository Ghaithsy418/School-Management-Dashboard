import { CommentsTypes } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import CommentReactionButton from "./CommentReactionButton";
import CommentReactionCount from "./CommentReactionsCount";
import { useTranslation } from "react-i18next";

interface CommentButtonsTypes {
  commentTime: string;
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
  const { t } = useTranslation("newsAndAdds");
  const [reactionObjState, setReactionObjState] = useState({
    isReactedState: is_reacted,
    userReactionState: user_reaction_type,
    currentReactionNumber: reaction_number,
  });

  return (
    <div className="flex items-center justify-center gap-4 text-[13px] font-light ltr:ml-2 rtl:mr-2">
      <div className="text-nowrap">{commentTime}</div>
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
        {t("main.reply")}
      </button>
      <CommentReactionCount
        comment={comment}
        reactionObjState={reactionObjState}
      />
    </div>
  );
}

export default CommentButtons;
