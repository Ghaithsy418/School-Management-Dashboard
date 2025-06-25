import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import CreateClassForm from "./CreateClassForm";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useState } from "react";

function CreateNewClass() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-[28rem] place-self-center">
      <div className="flex items-center justify-around rounded-md border-1 border-gray-500/50 px-4 py-3">
        <h3 className="font-semibold">Try creating a new Class 😊</h3>
        <Modal>
          <Modal.Open name="createClass">
            <Button>Create</Button>
          </Modal.Open>
          <Modal.Window
            name="createClass"
            icon={
              <MdOutlineAddCircleOutline
                className={`h-7 w-7 transition-all duration-300 ${isHover ? "h-9 w-9 text-indigo-600" : ""}`}
              />
            }
          >
            <CreateClassForm setIsHover={setIsHover} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default CreateNewClass;
