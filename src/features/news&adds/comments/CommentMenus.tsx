import { changeUi, setCommentId } from "@/slices/commentsSlice";
import { useUser } from "@/slices/userSlice";
import Menus from "@/ui/Menus";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useDeleteComment } from "./useDeleteComment";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

function CommentMenus({
  commentId,
  user_id,
  eventId,
}: {
  commentId: number;
  user_id: number;
  eventId: number;
}) {
  const { deleteCommentMutation } = useDeleteComment(eventId);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    user: { id, role },
  } = useUser();

  function handleDelete() {
    const promise = deleteCommentMutation({ commentId });

    toast.promise(promise, {
      loading: "Deleting...",
      success: "Comment has been deleted Successfully!",
      error: (err: Error) => `${err.message}`,
    });
  }

  return (
    <Menus>
      <Menus.Toggle id="commentMenus">
        <span>
          <HiMiniEllipsisVertical className="h-4 w-4 cursor-pointer rounded-full" />
        </span>
      </Menus.Toggle>
      <Menus.List id="commentMenus">
        {id !== user_id && (
          <Menus.Button
            onClick={() => {
              dispatch(changeUi("report"));
              dispatch(setCommentId(commentId));
            }}
            icon={<TbMessageReport className="h-5 w-5 text-inherit" />}
          >
            {t("menuButtons.report")}
          </Menus.Button>
        )}
        {id === user_id && (
          <Menus.Button
            onClick={() => dispatch(changeUi(`edit${commentId}`))}
            icon={<MdOutlineModeEdit className="h-5 w-5" />}
          >
            {t("menuButtons.edit")}
          </Menus.Button>
        )}
        {(id === user_id || role === "supervisor") && (
          <Menus.Button
            onClick={handleDelete}
            icon={<MdDeleteOutline className="h-5 w-5" />}
          >
            {t("menuButtons.delete")}
          </Menus.Button>
        )}
      </Menus.List>
    </Menus>
  );
}

export default CommentMenus;
