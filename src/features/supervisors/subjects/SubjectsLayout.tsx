import { useSubjectsUi } from "@/slices/SubjectUiSlice";
import ChooseGrade from "./ChooseGrade";
import CreateSubject from "./CreateSubject";
import SubjectsTable from "./SubjectsTable";
import EditSubject from "./EditSubject";

function SubjectsLayout() {
  const { ui } = useSubjectsUi();
  return (
    <div className="grid grid-cols-[1.4fr_1fr] grid-rows-[205px_1fr] gap-6 py-6">
      <div className="row-start-1 row-end-3">
        <SubjectsTable />
      </div>
      <ChooseGrade />
      {ui === "create" && <CreateSubject />}
      {ui === "edit" && <EditSubject />}
    </div>
  );
}

export default SubjectsLayout;
