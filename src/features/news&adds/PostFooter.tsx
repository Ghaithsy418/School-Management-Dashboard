import PostButtons from "./PostButtons";
import PostStatistics from "./PostStatistics";

interface PostFooterTypes {
  commentsNum: number;
  reactionsNum: number;
}

function PostFooter({ commentsNum, reactionsNum }: PostFooterTypes) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-sm">
      <PostStatistics commentsNum={commentsNum} reactionsNum={reactionsNum} />
      <PostButtons />
    </div>
  );
}

export default PostFooter;
