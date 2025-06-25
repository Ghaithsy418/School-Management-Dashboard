import Menus from "@/ui/Menus";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import EditClass from "./EditClass";
import { ClassTypes } from "@/utils/types";
import { MdOutlineModeEdit } from "react-icons/md";
import Modal from "@/ui/Modal";

function ClassesTableMenus({ classData }: { classData: ClassTypes }) {
  return (
    <Modal>
      <Menus>
        <Menus.Toggle id="classesMenus">
          <HiMiniEllipsisVertical className="h-5 w-5 cursor-pointer place-self-center" />
        </Menus.Toggle>
        <Menus.List id="classesMenus">
          <Modal.Open name="editClass">
            <Menus.Button icon={<MdOutlineModeEdit className="h-5 w-5" />}>
              <button className="flex h-6 w-6 cursor-pointer items-center justify-center">
                Edit
              </button>
            </Menus.Button>
          </Modal.Open>
          <EditClass classData={classData} />
        </Menus.List>
      </Menus>
    </Modal>
  );
}

export default ClassesTableMenus;
