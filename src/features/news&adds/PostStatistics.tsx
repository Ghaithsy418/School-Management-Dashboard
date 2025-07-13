import { BiSolidLike } from "react-icons/bi";

function PostStatistics() {
  return (
    <div className="flex w-full items-center justify-between px-5">
      <div className="flex items-center justify-center gap-1">
        <span className="items-center justify-center rounded-full bg-indigo-600 p-1 text-indigo-50">
          <BiSolidLike className="h-3 w-3" />
        </span>
        <span>5</span>
      </div>
      <button className="flex cursor-pointer items-center justify-center gap-1 font-light hover:text-indigo-700">
        <span className="transition-all duration-300">10</span>
        <span className="transition-all duration-300">Comments</span>
      </button>
    </div>
  );
}

export default PostStatistics;
