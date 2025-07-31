import {
  detectReactionsArray,
  detectReactionType,
} from "@/utils/detectReactionType";
import { CommentsTypes } from "@/utils/types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface CommentReactionTypes {
  comment: CommentsTypes;
  reactionObjState: {
    isReactedState: boolean;
    userReactionState: string;
    currentReactionNumber: number;
  };
}

function CommentReactionCount({
  comment,
  reactionObjState,
}: CommentReactionTypes) {
  const { t } = useTranslation("newsAndAdds");
  const {
    reactions: { types },
  } = comment;
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

  if (!currentReactionNumber) return null;

  return (
    <>
      {currentReactionNumber !== 0 && (
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center -space-x-1">
            {reactions.map((reaction, index) =>
              reaction?.icon ? (
                <span
                  key={reaction.value || index}
                  style={{ zIndex: reactions.length - (index + 1) }}
                  className={`items-center justify-center rounded-full ${reaction.bgColor} p-1 ${reaction.color}`}
                >
                  <reaction.icon className="h-2 w-2" />
                </span>
              ) : null,
            )}
          </div>
          <span className="w-12">
            {isReactedState &&
              currentReactionNumber - 1 !== 0 &&
              `${t("main.you")} ${currentReactionNumber - 1}`}
            {isReactedState &&
              currentReactionNumber - 1 === 0 &&
              t("main.justYou")}
            {!isReactedState && currentReactionNumber}
          </span>
        </div>
      )}
    </>
  );
}

export default CommentReactionCount;
