import { Dispatch, SetStateAction, useRef, useState } from "react";
import { BiLike } from "react-icons/bi";
import ReactionsList from "../reactions/ReactionsList";
import { AnimatePresence } from "framer-motion";
import { useMakeReact } from "../reactions/useMakeReact";
import { detectReactionType } from "@/utils/detectReactionType";

interface ReactionButtonTypes {
  eventId: number;
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

function ReactionButton({
  eventId,
  userReactionType,
  setReactionObjState,
  reactionObjState,
}: ReactionButtonTypes) {
  const { makeReactMutation } = useMakeReact(setReactionObjState);
  const [isShown, setIsShown] = useState(false);

  const { isReactedState, userReactionState } = reactionObjState;

  const showTimeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reactionType = detectReactionType(userReactionState);
  const Icon = reactionType?.icon || BiLike;

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
        reactable_id: eventId,
        reactable_type: "event",
      });
    } else {
      setReactionObjState((prevState) => ({
        isReactedState: true,
        userReactionState: "like",
        currentReactionNumber: prevState.currentReactionNumber + 1,
      }));
      makeReactMutation({
        reaction: "like",
        reactable_id: eventId,
        reactable_type: "event",
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
        className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm px-4 py-2 transition-all duration-300 hover:bg-gray-300/50"
      >
        {!isReactedState && !reactionType ? (
          <BiLike className="h-6 w-6" />
        ) : (
          <Icon className={`h-6 w-6 ${reactionType?.color}`} />
        )}{" "}
        <span className={`capitalize ${reactionType?.color}`}>
          {!isReactedState && !reactionType ? "Like" : userReactionState}
        </span>
      </button>
      <AnimatePresence mode="wait">
        {isShown && (
          <ReactionsList
            id={eventId}
            setReactionObjState={setReactionObjState}
            reactionObjState={reactionObjState}
            makeReactMutation={makeReactMutation}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ReactionButton;
