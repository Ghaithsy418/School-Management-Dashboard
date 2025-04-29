import Table from "../../ui/Table";

function StudentsTable() {
  return (
    <Table columns="0.8fr 0.8fr 0.8fr 0.8fr 0.6fr 0.3fr">
      <Table.Header>
        <div>Name</div>
        <div>ID</div>
        <div>Parent Name</div>
        <div>City</div>
        <div>Grade</div>
        <div></div>
      </Table.Header>
    </Table>
  );
}

export default StudentsTable;
