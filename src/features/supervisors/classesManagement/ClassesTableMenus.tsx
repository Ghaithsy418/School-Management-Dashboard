import Menus from "@/ui/Menus";
import Modal from "@/ui/Modal";
import { ClassTypes } from "@/utils/types";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import UnassignTeacherToClass from "./AssignTeacherToClasses/UnassignTeacherToClass";
import DeleteClass from "./DeleteClass";
import EditClassForm from "./EditClassForm";
import ShowClassStudents from "./ShowStudentsForClass/ShowClassStudents";
import teacherIcon from "/images/teacherIcon.svg";

function ClassesTableMenus({ classData }: { classData: ClassTypes }) {
  return (
    <Modal>
      <Menus>
        <Menus.Toggle id="classesMenus">
          <HiMiniEllipsisVertical className="h-5 w-5 cursor-pointer place-self-center" />
        </Menus.Toggle>
        <Menus.List id="classesMenus">
          <Modal.Open name="studentsClass">
            <Menus.Button icon={<PiStudent className="h-5 w-5" />}>
              Students
            </Menus.Button>
          </Modal.Open>
          <Modal.Open name="teachersClass">
            <Menus.Button
              icon={
                <img className="h-5 w-5" src={teacherIcon} alt="teacher icon" />
              }
            >
              Teachers
            </Menus.Button>
          </Modal.Open>
          <Modal.Open name="editClass">
            <Menus.Button icon={<MdOutlineModeEdit className="h-5 w-5" />}>
              Edit
            </Menus.Button>
          </Modal.Open>
          <Modal.Open name="deleteClass">
            <Menus.Button icon={<MdDeleteOutline className="h-5 w-5" />}>
              Delete
            </Menus.Button>
          </Modal.Open>
        </Menus.List>
        <Modal.Window
          name="editClass"
          icon={
            <MdOutlineModeEdit
              className={`h-7 w-7 transition-all duration-300`}
            />
          }
        >
          <EditClassForm classData={classData} />
        </Modal.Window>
        <Modal.Window name="studentsClass" mode="sheet">
          <ShowClassStudents className={classData.className} />
        </Modal.Window>
        <Modal.Window name="teachersClass" mode="sheet">
          <UnassignTeacherToClass
            className={classData.className}
            classId={classData.id}
          />
        </Modal.Window>
        <Modal.Window
          icon={
            <MdDeleteOutline
              className={`h-8 w-8 transition-all duration-300`}
            />
          }
          name="deleteClass"
        >
          <DeleteClass className={classData.className} classId={classData.id} />
        </Modal.Window>
      </Menus>
    </Modal>
  );
}

export default ClassesTableMenus;
