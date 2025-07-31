import AvatarGenerator from "@/ui/AvatarGenerator";
import { formatDistanceToNowStrict } from "date-fns";
import { enUS, arSA } from "date-fns/locale";
import PostMenus from "./PostMenus";
import { EventTypes } from "@/utils/types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PostHeadTypes {
  event: EventTypes;
}

function PostHead({ event }: PostHeadTypes) {
  const { i18n } = useTranslation();
  const { publisherName, created_at, user_id } = event;

  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center justify-center gap-2">
        <AvatarGenerator name={publisherName} />
        <div className="flex flex-col items-start justify-center leading-6">
          <Link
            to={`/news&adds/user_events/${user_id}`}
            className="cursor-pointer font-semibold"
          >
            {publisherName}
          </Link>
          <div>
            <span className="text-sm font-light">
              -{" "}
              {formatDistanceToNowStrict(created_at, {
                addSuffix: false,
                locale: i18n.language === "en" ? enUS : arSA,
              })}{" "}
              -
            </span>
          </div>
        </div>
      </div>
      <PostMenus event={event} />
    </div>
  );
}

export default PostHead;
