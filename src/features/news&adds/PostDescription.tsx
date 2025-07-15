import { detectLanguage } from "@/utils/detectLanguage";
import { useState } from "react";

function PostDescription({
  description,
  eventTitle,
}: {
  description: string;
  eventTitle: string;
}) {
  const [showMore, setShowMore] = useState(description?.length <= 400);

  const titleLang = detectLanguage(eventTitle);
  const postLang = detectLanguage(description);

  return (
    <div className="flex w-full flex-col items-start justify-center gap-2 px-5">
      <div className="flex w-full flex-col items-start justify-center">
        <div
          className="w-full"
          dir={titleLang === "Arabic" || titleLang === "Mixed" ? "rtl" : "ltr"}
        >
          <h5 className="mb-1 text-xl font-bold text-gray-800 dark:text-gray-100">
            {eventTitle}
          </h5>
        </div>
        <div
          className="w-full"
          dir={postLang === "Arabic" || postLang === "Mixed" ? "rtl" : "ltr"}
        >
          <p className="px-1">
            {showMore ? description : `${description?.slice(0, 250)}...`}
          </p>
        </div>
      </div>
      {description?.length > 400 && (
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
