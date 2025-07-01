import Table from "@/ui/Table";
import { useGetSubjects } from "./useGetSubjects";
import SubjectsRow from "./SubjectsRow";
import Spinner from "@/ui/Spinner";
import Empty from "@/ui/Empty";

function SubjectsTable() {
  const { subjects, isGettingSubjects } = useGetSubjects();

  if (isGettingSubjects) return <Spinner />;
  if (!subjects?.length) return <Empty resource="subjects" />;

  return (
    <Table columns="1fr 1fr 1fr 1fr">
      <Table.Header>
        <span>Name</span>
        <span>Max Mark</span>
        <span>Min Mark</span>
      </Table.Header>
      <Table.Body
        data={subjects}
        render={(subject) => <SubjectsRow subject={subject} />}
      ></Table.Body>
    </Table>
  );
}

export default SubjectsTable;
