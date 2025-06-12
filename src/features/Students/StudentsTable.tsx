import Table from "../../ui/Table";
import { StudentTypes } from "../../utils/types";
import StudentsRow from "./StudentsRow";

function StudentsTable() {
  return (
    <Table columns="0.8fr 0.4fr 0.7fr 0.4fr 0.4fr 0.3fr 0.3fr">
      <Table.Header>
        {HeaderTitles.map((title) => (
          <div key={title}>{title}</div>
        ))}
      </Table.Header>
      <Table.Body
        data={FakeStudents}
        render={(student: StudentTypes) => (
          <Table.Row key={student.id}>
            <StudentsRow student={student} />
          </Table.Row>
        )}
      />
    </Table>
  );
}

const FakeStudents = [
  {
    name: "Ahmad Mohamad Syria",
    id: "100200322",
    address: "Damascus, Syria",
    grade: "10/1",
    GPA: 4.6,
    email: "ghaithsy418@gmail.com",
    phoneNumber: "+963996240804",
  },
];

const HeaderTitles = ["Name", "ID", "Address", "Class", "GPA", "Contact"];

export default StudentsTable;
