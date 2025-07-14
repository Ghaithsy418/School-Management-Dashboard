import AvatarGenerator from "@/ui/AvatarGenerator";
import { formatDistanceToNowStrict } from "date-fns";
import { enUS } from "date-fns/locale";
import { HiMiniEllipsisVertical } from "react-icons/hi2";

interface PostHeadTypes {
  publisherName: string;
  created_at: string;
}

function PostHead({ publisherName, created_at }: PostHeadTypes) {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex items-center justify-center gap-2">
        <AvatarGenerator name="Ghaith Shabakji" />
        <div className="flex flex-col items-start justify-center leading-6">
          <h5 className="cursor-pointer font-semibold">{publisherName}</h5>
          <div>
            <span className="text-sm font-light">
              -{" "}
              {formatDistanceToNowStrict(created_at, {
                addSuffix: false,
                locale: enUS,
              })}{" "}
              -
            </span>
          </div>
        </div>
      </div>
      <span>
        <HiMiniEllipsisVertical className="h-9 w-9 cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-300" />
      </span>
    </div>
  );
}

export default PostHead;
