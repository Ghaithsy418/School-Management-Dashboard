import Modal from "@/ui/Modal";
import { LuMegaphone } from "react-icons/lu";
import ReportedCommentsLayout from "./ReportedCommentsLayout";

function ShowReportedCommentsButton() {
  return (
    <Modal>
      <Modal.Open name="reportedComments">
        <button className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-rose-600 px-4 py-2 text-rose-50 transition-colors duration-300 hover:bg-rose-700">
          <LuMegaphone className="h-5 w-5" />
          <span>Reported Comments</span>
        </button>
      </Modal.Open>
      <Modal.Window name="reportedComments">
        <ReportedCommentsLayout />
      </Modal.Window>
    </Modal>
  );
}

export default ShowReportedCommentsButton;
