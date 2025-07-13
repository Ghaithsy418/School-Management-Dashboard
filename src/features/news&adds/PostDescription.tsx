import { useState } from "react";

function PostDescription({ description }: { description: string }) {
  const [showMore, setShowMore] = useState(description.length <= 400);

  return (
    <div className="flex flex-col items-start justify-center gap-2 px-4">
      <p className="px-1">
        {showMore ? description : `${description.slice(0, 250)}...`}
      </p>
      {description.length > 400 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="cursor-pointer place-self-end transition-all duration-300 hover:text-indigo-700"
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default PostDescription;
