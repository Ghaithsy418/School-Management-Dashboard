import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Modal from "@/ui/Modal";
import { ClassTypes } from "@/utils/types";
import { MdOutlineModeEdit } from "react-icons/md";
import EditClassForm from "./EditClassForm";

function EditClass({ classData }: { classData: ClassTypes }) {
  return (
    <Modal>
      <Tooltip>
        <TooltipTrigger asChild>
          <Modal.Open name="editClass">
            <button className="flex h-6 w-6 items-center justify-center">
              <MdOutlineModeEdit className="h-5 w-5 cursor-pointer" />
            </button>
          </Modal.Open>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit Class</p>
        </TooltipContent>
      </Tooltip>
      <Modal.Window
        name="editClass"
        icon={<MdOutlineModeEdit className="h-8 w-8" />}
      >
        <EditClassForm classData={classData} />
      </Modal.Window>
    </Modal>
  );
}

export default EditClass;
