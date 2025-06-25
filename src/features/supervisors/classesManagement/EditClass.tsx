import Modal from "@/ui/Modal";
import { ClassTypes } from "@/utils/types";
import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import EditClassForm from "./EditClassForm";

function EditClass({ classData }: { classData: ClassTypes }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Modal.Window
      name="editClass"
      icon={
        <MdOutlineModeEdit
          className={`h-7 w-7 transition-all duration-300 ${isHover ? "h-9 w-9 text-indigo-600" : ""}`}
        />
      }
    >
      <EditClassForm classData={classData} setIsHover={setIsHover} />
    </Modal.Window>
  );
}

export default EditClass;
