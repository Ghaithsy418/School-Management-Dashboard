import AvatarGenerator from "@/ui/AvatarGenerator";
import { detectLanguage } from "@/utils/detectLanguage";
import { CommentsTypes } from "@/utils/types";
import { formatDistanceToNowStrict } from "date-fns";
import { useState } from "react";
import CommentButtons from "./CommentButtons";
import Reply from "./Reply";
import CommentMenus from "./CommentMenus";
import { useComments } from "@/slices/commentsSlice";
import EditComment from "./EditComment";

interface CommentProps {
  comment: CommentsTypes;
  depth?: number;
  eventId: number;
}

function Comment({ comment, depth = 0, eventId }: CommentProps) {
  const [showReplies, setShowReplies] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const { ui } = useComments();
  const { id, name, last_name, content, created_at, replies, user_id, role } =
    comment;
  const fullName = `${name} ${last_name}`;

  const contentLang = detectLanguage(content);
  const fullNameLang = detectLanguage(fullName);
  const commentTime = formatDistanceToNowStrict(new Date(created_at), {
    addSuffix: false,
  }).split(" ");

  const hasReplies = replies && replies.length > 0;
  const isNested = depth > 0;

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  const renderComment = () => (
    <>
      <div className="flex items-start justify-start gap-2">
        <div>
          <AvatarGenerator size={isNested ? 32 : 36} name={fullName} />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <div className="flex flex-col items-start justify-center gap-2 rounded-md bg-gray-200 px-3 py-2 shadow-sm">
            <div className="flex w-full items-center justify-between gap-3">
              <div className="flex items-end justify-center gap-1">
                <p
                  dir={fullNameLang === "English" ? "ltr" : "rtl"}
                  className="w-full text-sm font-bold"
                >
                  {fullName}
                </p>
                <span className="text-[9px] font-light">{role}</span>
              </div>
              <CommentMenus
                eventId={eventId}
                commentId={id}
                user_id={user_id}
              />
            </div>
            {ui === `edit${id}` ? (
              <EditComment eventId={eventId} content={content} commentId={id} />
            ) : (
              <p
                dir={contentLang === "English" ? "ltr" : "rtl"}
                className="w-full"
              >
                {content}
              </p>
            )}
          </div>
          <CommentButtons
            eventId={eventId}
            commentTime={commentTime}
            comment={comment}
            setIsReplying={setIsReplying}
            commentId={id}
          />
          {hasReplies && (
            <button
              onClick={toggleReplies}
              className="mt-1 ml-2 flex cursor-pointer items-center gap-1 text-[13px] font-light text-indigo-600 hover:text-indigo-800 hover:underline"
            >
              <span>{showReplies ? "▼" : "▶"}</span>
              <span>
                {showReplies ? "Hide" : "Show"} {replies.length}{" "}
                {replies.length === 1 ? "reply" : "replies"}
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="relative">
      {isNested && (
        <span
          className="absolute -top-18 left-4 h-full w-0.5 bg-gray-700/40"
          aria-hidden="true"
        />
      )}
      <div className={isNested ? "pt-2 pl-8" : ""}>
        {renderComment()}
        {isReplying && (
          <Reply
            eventId={eventId}
            parentId={id}
            setIsReplying={setIsReplying}
          />
        )}
        {showReplies && hasReplies && (
          <div className="mt-2 space-y-2">
            {replies.map((reply) => (
              <Comment
                eventId={eventId}
                key={reply.id}
                comment={reply}
                depth={depth + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
