import PostButtons from "./PostButtons";
import PostStatistics from "./PostStatistics";

function PostFooter() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-sm">
      <PostStatistics />
      <PostButtons />
    </div>
  );
}

export default PostFooter;
