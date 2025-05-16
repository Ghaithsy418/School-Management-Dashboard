import { HiMiniEllipsisVertical } from "react-icons/hi2";
import AvatarGenerator from "../../ui/AvatarGenerator";
import Table from "../../ui/Table";
import Contact from "../../ui/Contact";

function StudentsTable() {
  return (
    <Table columns="0.8fr 0.4fr 0.7fr 0.4fr 0.4fr 0.3fr 0.3fr">
      <Table.Header>
        <div>Name</div>
        <div>ID</div>
        <div>Address</div>
        <div>Contact</div>
        <div>Class</div>
        <div>GPA</div>
        <div></div>
      </Table.Header>
      <Table.Row>
        <div className="flex items-center gap-4">
          <span>
            <AvatarGenerator name="Ahmad" size={35} />
          </span>{" "}
          Ahmad Mohamad Syria
        </div>
        <div>100200333</div>
        <div>Damascus, Mazzeh</div>
        <div>
          <Contact />
        </div>
        <div>1/10</div>
        <div>4.6</div>
        <div className="flex cursor-pointer items-center justify-center">
          <HiMiniEllipsisVertical className="h-5 w-5" />
        </div>
      </Table.Row>
    </Table>
  );
}

export default StudentsTable;
