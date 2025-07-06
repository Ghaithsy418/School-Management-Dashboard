import { changeUi, setSubject } from "@/slices/SubjectUiSlice";
import Modal from "@/ui/Modal";
import { SubjectTypes } from "@/utils/types";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import DeleteSubject from "./DeleteSubject";

interface SubjectsRowTypes {
  subject: SubjectTypes;
}

function SubjectsRow({ subject }: SubjectsRowTypes) {
  const { subjectName, minMark, maxMark } = subject;
  const dispatch = useDispatch();
  return (
    <>
      <h4 className="font-semibold capitalize">{subjectName}</h4>
      <p>{minMark}</p>
      <p>{maxMark}</p>
      <div className="flex items-center justify-center gap-4">
        <MdOutlineModeEdit
          onClick={() => {
            dispatch(changeUi("edit"));
            dispatch(setSubject(subject));
          }}
          className="h-5.5 w-5.5 cursor-pointer text-indigo-700"
        />
        <Modal>
          <Modal.Open name="deleteSubject">
            <MdDeleteOutline className="h-5.5 w-5.5 cursor-pointer text-red-600" />
          </Modal.Open>
          <Modal.Window name="deleteSubject">
            <DeleteSubject id={subject.id} subjectName={subjectName} />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default SubjectsRow;
