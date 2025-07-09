import { useSubjectsUi } from "@/slices/SubjectUiSlice";
import ChooseGrade from "./ChooseGrade";
import CreateSubject from "./CreateSubject";
import SubjectsTable from "./SubjectsTable";
import EditSubject from "./EditSubject";
import { useSearchParams } from "react-router-dom";
import SelectGradeFirst from "./SelectGradeFirst";

function SubjectsLayout() {
  const { ui } = useSubjectsUi();
  const [searchParams] = useSearchParams();

  const grade = Number(searchParams.get("grade") || 0);

  return (
    <div className="grid grid-cols-[1.4fr_1fr] grid-rows-[205px_1fr] gap-7 py-6">
      <div className="row-start-1 row-end-3">
        {grade && grade <= 12 && grade > 0 ? (
          <SubjectsTable />
        ) : (
          <SelectGradeFirst />
        )}
      </div>
      <ChooseGrade />
      {ui === "create" && <CreateSubject />}
      {ui === "edit" && <EditSubject />}
    </div>
  );
}

export default SubjectsLayout;
