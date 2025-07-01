import { useSearchParams } from "react-router-dom";
import ChooseGrade from "./ChooseGrade";
import SubjectsTable from "./SubjectsTable";

function SubjectsLayout() {
  const [searchParams] = useSearchParams();

  const grade = Number(searchParams.get("grade")) || 0;

  if (!grade || grade > 12 || grade <= 0) return <ChooseGrade />;

  return (
    <div className="gap-2 px-8 py-6">
      <SubjectsTable />
    </div>
  );
}

export default SubjectsLayout;
