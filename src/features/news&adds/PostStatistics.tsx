import { useEffect, useState } from "react";
import Modal from "@/ui/Modal";
import {
  detectReactionsArray,
  detectReactionType,
} from "@/utils/detectReactionType";
import { EventTypes } from "@/utils/types";
import { LuMessageCircle } from "react-icons/lu";
import CommentList from "./comments/CommentList";
import { useComments } from "@/slices/commentsSlice";
import ReportCommentForm from "./comments/ReportCommentForm";
import ReactionedUsers from "./reactions/ReactionedUsers";

interface PostStatisticsTypes {
  event: EventTypes;
  reactionObjState: {
    isReactedState: boolean;
    userReactionState: string;
    currentReactionNumber: number;
  };
}

function PostStatistics({ event, reactionObjState }: PostStatisticsTypes) {
  const {
    comment_number: commentsNum,
    reactions: { types },
    id: eventId,
  } = event;
  const { ui, commentId } = useComments();
  const { isReactedState, userReactionState, currentReactionNumber } =
    reactionObjState;

  const [reactions, setReactions] = useState(() =>
    detectReactionsArray(Object.keys(types)),
  );

  useEffect(() => {
    const baseReactions = detectReactionsArray(Object.keys(types));

    const isUserReactionInBase = baseReactions.some(
      (r) => r?.value === userReactionState,
    );

    if (userReactionState && !isUserReactionInBase) {
      const userReactionDetails = detectReactionType(userReactionState);
      if (userReactionDetails) {
        setReactions([userReactionDetails, ...baseReactions]);
      } else {
        setReactions(baseReactions);
      }
    } else {
      setReactions(baseReactions);
    }
  }, [userReactionState, types]);

  if (!commentsNum && !currentReactionNumber) return null;

  return (
    <Modal>
      <div
        className={`flex w-full items-center ${
          !currentReactionNumber && commentsNum !== 0
            ? "justify-end"
            : "justify-between"
        } px-5`}
      >
        {currentReactionNumber !== 0 && (
          <>
            <Modal.Open name="reactionsModal">
              <div className="flex cursor-pointer items-center justify-center gap-2 hover:text-indigo-600">
                <div className="flex items-center justify-center -space-x-1">
                  {reactions.map((reaction, index) =>
                    reaction?.icon ? (
                      <span
                        key={reaction.value || index}
                        style={{ zIndex: reactions.length - (index + 1) }}
                        className={`items-center justify-center rounded-full ${reaction.bgColor} p-1 ${reaction.color}`}
                      >
                        <reaction.icon className="h-3 w-3" />
                      </span>
                    ) : null,
                  )}
                </div>
                <span>
                  {isReactedState &&
                    currentReactionNumber - 1 !== 0 &&
                    `you & ${currentReactionNumber - 1}`}
                  {isReactedState && currentReactionNumber - 1 === 0 && `you`}
                  {!isReactedState && currentReactionNumber}
                </span>
              </div>
            </Modal.Open>
            <Modal.Window name="reactionsModal">
              <ReactionedUsers eventId={eventId} />
            </Modal.Window>
          </>
        )}
        {commentsNum !== 0 && (
          <>
            <Modal.Open name="secondCommentButton">
              <button className="flex cursor-pointer items-center justify-center gap-1 place-self-end font-light hover:text-indigo-700">
                <span className="transition-all duration-300">
                  {commentsNum}
                </span>
                <span className="transition-all duration-300">Comments</span>
              </button>
            </Modal.Open>
            <Modal.Window
              icon={<LuMessageCircle className="h-6 w-6" />}
              name="secondCommentButton"
            >
              {ui === "report" ? (
                <ReportCommentForm commentId={commentId} />
              ) : (
                <CommentList id={eventId} />
              )}
            </Modal.Window>
          </>
        )}
      </div>
    </Modal>
  );
}

export default PostStatistics;
