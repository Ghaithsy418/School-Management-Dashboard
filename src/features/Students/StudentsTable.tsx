import Pagination from "@/ui/Pagination";
import Table from "../../ui/Table";
import { StudentTypes } from "../../utils/types";
import StudentsRow from "./StudentsRow";
import { useGetStudents } from "./useGetStudents";
import Spinner from "@/ui/Spinner";
import Modal from "@/ui/Modal";
import Menus from "@/ui/Menus";
import Empty from "@/ui/Empty";
import { usePaginate } from "@/hooks/usePaginate";

function StudentsTable() {
  const { students, isGettingStudents } = useGetStudents();
  const filteredStudents = usePaginate(students, 10);

  if (isGettingStudents) return <Spinner />;
  if (!students?.length) return <Empty resource="students" />;

  return (
    <Table columns="0.8fr 0.4fr 0.4fr 0.4fr 0.3fr 0.3fr">
      <Table.Header>
        {HeaderTitles.map((title) => (
          <div key={title}>{title}</div>
        ))}
      </Table.Header>
      <Modal>
        <Menus>
          <Table.Body
            data={filteredStudents}
            render={(student: StudentTypes) => (
              <Table.Row key={student.student_id}>
                <StudentsRow student={student} />
              </Table.Row>
            )}
          />
        </Menus>
      </Modal>
      <Table.Tail>
        <Pagination dataLength={students?.length} numberOfElements={10} />
      </Table.Tail>
    </Table>
  );
}

const HeaderTitles = ["Name", "ID", "Class", "GPA", "Contact"];

export default StudentsTable;
