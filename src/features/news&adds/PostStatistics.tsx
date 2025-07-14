import { BiSolidLike } from "react-icons/bi";

interface PostStatisticsTypes {
  commentsNum: number;
  reactionsNum: number;
}

function PostStatistics({ reactionsNum, commentsNum }: PostStatisticsTypes) {
  if (!commentsNum && !reactionsNum) return null;

  return (
    <div
      className={`flex w-full items-center ${!reactionsNum && commentsNum !== 0 ? "justify-end" : "justify-between"} px-5`}
    >
      {reactionsNum !== 0 && (
        <div className="flex items-center justify-center gap-1">
          <span className="items-center justify-center rounded-full bg-indigo-600 p-1 text-indigo-50">
            <BiSolidLike className="h-3 w-3" />
          </span>
          <span>{reactionsNum}</span>
        </div>
      )}
      {commentsNum && (
        <button className="flex cursor-pointer items-center justify-center gap-1 place-self-end font-light hover:text-indigo-700">
          <span className="transition-all duration-300">{commentsNum}</span>
          <span className="transition-all duration-300">Comments</span>
        </button>
      )}
    </div>
  );
}

export default PostStatistics;
