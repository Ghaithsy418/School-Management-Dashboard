import CreatePost from "./CreatePost";
import Post from "./Post";

function NewsLayout() {
  return (
    <div className="my-4 flex w-[40rem] flex-col items-center justify-center gap-1 place-self-center rounded-sm bg-gray-300 outline outline-gray-700/20">
      <CreatePost />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default NewsLayout;
