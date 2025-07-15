import PostButtons from "./postButtons/PostButtons";
import PostStatistics from "./PostStatistics";

interface PostFooterTypes {
  commentsNum: number;
  reactionsNum: number;
  eventId: number;
}

function PostFooter({ commentsNum, reactionsNum, eventId }: PostFooterTypes) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-sm">
      <PostStatistics commentsNum={commentsNum} reactionsNum={reactionsNum} />
      <PostButtons eventId={eventId} />
    </div>
  );
}

export default PostFooter;
