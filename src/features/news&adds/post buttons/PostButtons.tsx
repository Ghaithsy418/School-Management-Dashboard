import { BiLike } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";
import CopyButton from "./CopyButton";

function PostButtons({ eventId }: { eventId: number }) {
  return (
    <div className="flex w-full items-center justify-between px-5 pb-2">
      <button className={buttonClassName}>
        <BiLike className="h-6 w-6" /> <span>Like</span>
      </button>
      <button className={buttonClassName}>
        <LuMessageCircle className="h-6 w-6" /> <span>Comment</span>
      </button>
      <CopyButton eventId={eventId} />
    </div>
  );
}

const buttonClassName =
  "cursor-pointer flex items-center justify-center gap-1 rounded-sm px-4 py-2 transition-all duration-300 hover:bg-gray-300/50 w-full";

export default PostButtons;
