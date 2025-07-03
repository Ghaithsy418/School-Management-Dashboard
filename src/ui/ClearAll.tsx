import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { TbEraser } from "react-icons/tb";
import Button from "./Button";
import Modal from "./Modal";

function ClearAll({ clearFunction }: ClearTypes) {
  return (
    <Modal>
      <Modal.Open name="clear">
        <Button size="big" primary={false}>
          Clear all
        </Button>
      </Modal.Open>
      <Modal.Window
        name="clear"
        icon={<TbEraser className={`h-8 w-8 transition-all duration-300`} />}
      >
        <ClearAllUi clearFunction={clearFunction} />
      </Modal.Window>
    </Modal>
  );
}

function ClearAllUi({ clearFunction, onCloseModal }: ClearTypes) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <HiOutlineExclamationTriangle className="h-10 w-10 text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-800">Clear All Data</h3>
        <p className="max-w-md text-slate-500">
          Are you sure you want to permanently clear the data
          <br />
          This action cannot be undone.
        </p>
      </div>

      <div className="mt-6 w-full max-w-xs">
        <Button
          onClick={() => {
            clearFunction();
            onCloseModal?.();
          }}
          color="text-white"
          backgroundColor="bg-red-600"
          backgroundHover="hover:bg-red-700"
          className="w-full justify-center"
        >
          <div className="flex items-center gap-2">
            <HiOutlineTrash className="h-5 w-5" />
            <span>Yes, Clear Data</span>
          </div>
        </Button>
      </div>
    </div>
  );
}

interface ClearTypes {
  clearFunction: () => void;
  onCloseModal?: () => void;
}

export default ClearAll;
