import Table from "@/ui/Table";
import { useGetSubjects } from "./useGetSubjects";
import SubjectsRow from "./SubjectsRow";
import Spinner from "@/ui/Spinner";
import Empty from "@/ui/Empty";
import { SubjectTypes } from "@/utils/types";

function SubjectsTable() {
  const { subjects, isGettingSubjects } = useGetSubjects();

  if (isGettingSubjects) return <Spinner />;
  if (!subjects?.length) return <Empty resource="subjects" />;

  return (
    <Table columns="1fr 1fr 1fr 0.6fr">
      <Table.Header>
        <span>Name</span>
        <span>Min Mark</span>
        <span>Max Mark</span>
      </Table.Header>
      <Table.Body
        data={subjects}
        render={(subject: SubjectTypes) => (
          <Table.Row key={subject.id}>
            <SubjectsRow subject={subject} />
          </Table.Row>
        )}
      ></Table.Body>
    </Table>
  );
}

export default SubjectsTable;
