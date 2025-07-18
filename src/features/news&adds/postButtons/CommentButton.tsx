import { useComments } from "@/slices/commentsSlice";
import Modal from "@/ui/Modal";
import { LuMessageCircle } from "react-icons/lu";
import CommentList from "../comments/CommentList";
import ReportCommentForm from "../comments/ReportCommentForm";

function CommentButton({ eventId }: { eventId: number }) {
  const { ui, commentId } = useComments();
  return (
    <Modal>
      <Modal.Open name={`commentsButton${eventId}`}>
        <button className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-sm px-4 py-2 transition-all duration-300 hover:bg-gray-300/50">
          <LuMessageCircle className="h-6 w-6" /> <span>Comment</span>
        </button>
      </Modal.Open>
      <Modal.Window
        mode="sheet"
        icon={<LuMessageCircle className="h-6 w-6" />}
        name={`commentsButton${eventId}`}
      >
        {ui === "report" ? (
          <ReportCommentForm commentId={commentId} />
        ) : (
          <CommentList id={eventId} />
        )}
      </Modal.Window>
    </Modal>
  );
}

export default CommentButton;
