import { detectReactionType } from "@/utils/detectReactionType";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import ReactionsList from "../reactions/ReactionsList";
import { useMakeReact } from "../reactions/useMakeReact";
import { useTranslation } from "react-i18next";

interface ReactionButtonTypes {
  eventId: number;
  commentId: number;
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
  userReactionType: string;
}

function CommentReactionButton({
  eventId,
  commentId,
  userReactionType,
  setReactionObjState,
  reactionObjState,
}: ReactionButtonTypes) {
  const { t } = useTranslation("newsAndAdds");
  const { makeReactMutation } = useMakeReact(
    ["comments", eventId],
    setReactionObjState,
  );
  const [isShown, setIsShown] = useState(false);

  const { isReactedState, userReactionState } = reactionObjState;

  const showTimeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reactionType = detectReactionType(userReactionState);

  function handleHover() {
    if (hideTimeRef.current) clearTimeout(hideTimeRef.current);
    showTimeRef.current = setTimeout(function () {
      setIsShown(true);
    }, 1000);
  }

  function handleMouseLeave() {
    if (showTimeRef.current) clearTimeout(showTimeRef.current);
    hideTimeRef.current = setTimeout(function () {
      setIsShown(false);
    }, 500);
  }

  function handleClick() {
    if (isReactedState && userReactionState) {
      setReactionObjState((prevState) => ({
        isReactedState: false,
        userReactionState: "",
        currentReactionNumber: prevState.currentReactionNumber - 1,
      }));
      makeReactMutation({
        reaction: userReactionState ?? userReactionType,
        reactable_id: commentId,
        reactable_type: "comment",
      });
    } else {
      setReactionObjState((prevState) => ({
        isReactedState: true,
        userReactionState: "like",
        currentReactionNumber: prevState.currentReactionNumber + 1,
      }));
      makeReactMutation({
        reaction: "like",
        reactable_id: commentId,
        reactable_type: "comment",
      });
    }
  }

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
    >
      <button
        onClick={handleClick}
        className={`cursor-pointer capitalize hover:underline ${reactionType?.color}`}
      >
        {!isReactedState && !reactionType
          ? t("reactions.like")
          : t(`reactions.${userReactionState}`)}
      </button>
      <AnimatePresence mode="wait">
        {isShown && (
          <ReactionsList
            reactable_type="comment"
            iconSize="h-5 w-5"
            id={commentId}
            setReactionObjState={setReactionObjState}
            reactionObjState={reactionObjState}
            makeReactMutation={makeReactMutation}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default CommentReactionButton;
