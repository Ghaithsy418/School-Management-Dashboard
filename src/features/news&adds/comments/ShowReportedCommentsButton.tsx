import Modal from "@/ui/Modal";
import { LuMegaphone } from "react-icons/lu";
import ReportedCommentsLayout from "./ReportedCommentsLayout";
import { useUser } from "@/slices/userSlice";

function ShowReportedCommentsButton() {
  const {
    user: { role },
  } = useUser();

  if (role !== "supervisor") return null;

  return (
    <Modal>
      <Modal.Open name="reportedComments">
        <button className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-rose-600 px-4 py-2 text-rose-50 transition-colors duration-300 hover:bg-rose-700">
          <LuMegaphone className="h-5 w-5" />
          <span>Reported Comments</span>
        </button>
      </Modal.Open>
      <Modal.Window mode="sheet" name="reportedComments">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center gap-3 px-3">
            <LuMegaphone className="h-8 w-8 text-gray-900 dark:text-gray-100" />
            <h3 className="text-xl">Reported Comments</h3>
          </div>
          <ReportedCommentsLayout />
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default ShowReportedCommentsButton;
