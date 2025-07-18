import AvatarGenerator from "@/ui/AvatarGenerator";
import { EventTypes } from "@/utils/types";
import { formatDistanceToNowStrict } from "date-fns";
import { enUS } from "date-fns/locale";
import EditPostForm from "./EditPostForm";

interface EditPostTypes {
  event: EventTypes;
  onCloseModal?: () => void;
}

function EditPost({ event, onCloseModal }: EditPostTypes) {
  const { publisherName, created_at } = event;

  return (
    <div className="flex w-full flex-col items-start justify-center gap-5">
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
      <EditPostForm event={event} onCloseModal={onCloseModal} />
    </div>
  );
}

export default EditPost;
