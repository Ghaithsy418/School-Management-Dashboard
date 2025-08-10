import { clearScheduleCompletely } from "@/slices/weeklyScheduleSlice";
import { ClearAllUi } from "@/ui/ClearAll";
import Modal from "@/ui/Modal";
import { RotateCcw } from "lucide-react";
import { useDispatch } from "react-redux";

function ClearScheduleInputs() {
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearScheduleCompletely());
  }

  return (
    <Modal>
      <Modal.Open name="clearScheduleInputs">
        <div
          role="button"
          className="flex items-center space-x-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
        >
          <RotateCcw className="h-4 w-4" />
          <span className="font-medium">Clear All</span>
        </div>
      </Modal.Open>
      <Modal.Window name="clearScheduleInputs">
        <ClearAllUi clearFunction={handleClear} />
      </Modal.Window>
    </Modal>
  );
}

export default ClearScheduleInputs;
