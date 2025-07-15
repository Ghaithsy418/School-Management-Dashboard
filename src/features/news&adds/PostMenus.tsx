import { useUser } from "@/slices/userSlice";
import Menus from "@/ui/Menus";
import Modal from "@/ui/Modal";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import DeletePostCaution from "./DeletePostCaution";
import EditPost from "./EditPost";
import { EventTypes } from "@/utils/types";

interface PostMenusTypes {
  event: EventTypes;
}

function PostMenus({ event }: PostMenusTypes) {
  const {
    user: { role, id },
  } = useUser();

  const { user_id: userId, id: eventId } = event;

  if (role !== "supervisor" && id !== userId) return null;

  return (
    <Modal>
      <Menus>
        <Menus.Toggle id="postMenu">
          <span>
            <HiMiniEllipsisVertical className="h-9 w-9 cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-300" />
          </span>
        </Menus.Toggle>
        <Menus.List id="postMenu">
          <Modal.Open name="editPost">
            <Menus.Button icon={<MdOutlineModeEdit className="h-5.5 w-5.5" />}>
              Edit
            </Menus.Button>
          </Modal.Open>
          <Modal.Open name="deletePost">
            <Menus.Button icon={<MdDeleteOutline className="h-5.5 w-5.5" />}>
              Delete
            </Menus.Button>
          </Modal.Open>
        </Menus.List>
        <Modal.Window
          mode="sheet"
          name="editPost"
          icon={<MdOutlineModeEdit className="h-6 w-6" />}
        >
          <EditPost event={event} />
        </Modal.Window>
        <Modal.Window name="deletePost">
          <DeletePostCaution eventId={eventId} />
        </Modal.Window>
      </Menus>
    </Modal>
  );
}

export default PostMenus;
