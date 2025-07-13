import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHead from "./PostHead";

function Post() {
  return (
    <div className="flex w-[40rem] flex-col bg-gray-50 pt-4">
      <PostHead />
      <PostBody />
      <PostFooter />
    </div>
  );
}

export default Post;
