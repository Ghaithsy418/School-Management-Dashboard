import Table from "@/ui/Table";
import { useGetSubjects } from "./useGetSubjects";
import SubjectsRow from "./SubjectsRow";
import Spinner from "@/ui/Spinner";
import Empty from "@/ui/Empty";
import SelectGradeFirst from "./SelectGradeFirst";

function SubjectsTable() {
  const { subjects, isGettingSubjects, grade } = useGetSubjects();

  if (!grade || grade > 12 || grade <= 0) return <SelectGradeFirst />;
  if (isGettingSubjects) return <Spinner />;
  if (!subjects?.length) return <Empty resource="subjects" />;

  return (
    <Table columns="1fr 1fr 1fr 0.6fr">
      <Table.Header>
        <span>Name</span>
        <span>Max Mark</span>
        <span>Min Mark</span>
      </Table.Header>
      <Table.Body
        data={subjects}
        render={(subject) => (
          <Table.Row>
            <SubjectsRow subject={subject} />
          </Table.Row>
        )}
      ></Table.Body>
    </Table>
  );
}

export default SubjectsTable;
