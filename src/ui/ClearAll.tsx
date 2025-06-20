import { TbEraser } from "react-icons/tb";
import Button from "./Button";
import Modal from "./Modal";
import { Dispatch, SetStateAction, useState } from "react";

function ClearAll({ clearFunction }: ClearTypes) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Modal>
      <Modal.Open name="clear">
        <Button size="big" primary={false}>
          Clear all
        </Button>
      </Modal.Open>
      <Modal.Window
        name="clear"
        icon={
          <TbEraser
            className={`${isHover ? "h-10 w-10 text-red-700" : "h-9 w-9"} transition-all duration-300`}
          />
        }
      >
        <ClearAllUi clearFunction={clearFunction} setIsHover={setIsHover} />
      </Modal.Window>
    </Modal>
  );
}

function ClearAllUi({ onCloseModal, clearFunction, setIsHover }: ClearUi) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="flex text-xl">Do you really want to clear all data?</h3>
      <div className="flex items-center justify-end gap-5">
        <Button
          primary={false}
          setIsHover={setIsHover}
          onClick={() => {
            clearFunction();
            onCloseModal?.();
          }}
        >
          Yes, sure!
        </Button>
        <Button
          color="text-red-50"
          backgroundColor="bg-red-700"
          backgroundHover="hover:bg-red-800/90"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

interface ClearTypes {
  clearFunction: () => void;
}

interface ClearUi {
  onCloseModal?: () => void;
  clearFunction: () => void;
  setIsHover: Dispatch<SetStateAction<boolean>>;
}

export default ClearAll;
