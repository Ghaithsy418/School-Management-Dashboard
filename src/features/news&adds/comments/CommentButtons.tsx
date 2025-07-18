import { CommentsTypes } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";
import { BiSolidLike } from "react-icons/bi";

interface CommentButtonsTypes {
  commentTime: string[];
  comment: CommentsTypes;
  setIsReplying: Dispatch<SetStateAction<boolean>>;
}

function CommentButtons({
  commentTime,
  comment,
  setIsReplying,
}: CommentButtonsTypes) {
  const { reaction_number } = comment;
  return (
    <div className="ml-2 flex items-center justify-center gap-4 text-[13px] font-light">
      <span>{commentTime?.[0] + commentTime?.[1]?.slice(0, 1)}</span>
      <button className="cursor-pointer hover:text-indigo-600 hover:underline">
        Like
      </button>
      <button
        onClick={() => setIsReplying(true)}
        className="cursor-pointer hover:text-indigo-600 hover:underline"
      >
        Reply
      </button>
      {reaction_number !== 0 && (
        <div className="flex items-center justify-center gap-1">
          <span className="items-center justify-center rounded-full bg-indigo-600 p-0.5 text-indigo-50">
            <BiSolidLike className="h-2 w-2" />
          </span>
          <span>{reaction_number}</span>
        </div>
      )}
    </div>
  );
}

export default CommentButtons;
