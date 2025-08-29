import { useClassInfo } from "@/slices/weeklyScheduleSlice";
import Modal from "@/ui/Modal";
import { TbTrash } from "react-icons/tb";
import DeleteScheduleWarning from "./DeleteScheduleWarning";

function DeleteSchedule() {
  const { className } = useClassInfo();

  return (
    <Modal>
      <Modal.Open name="deleteSchedule">
        <button className="flex items-center space-x-2 rounded-xl bg-rose-600 px-6 py-3 text-rose-50 transition-all duration-300 hover:bg-rose-700">
          <>
            <TbTrash className="h-5 w-5" />
            <span className="font-medium">Delete Schedule</span>
          </>
        </button>
      </Modal.Open>
      <Modal.Window name="deleteSchedule">
        <DeleteScheduleWarning className={className} />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteSchedule;
