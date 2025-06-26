import { usePaginate } from "@/hooks/usePaginate";
import Empty from "@/ui/Empty";
import Pagination from "@/ui/Pagination";
import Spinner from "@/ui/Spinner";
import Table from "@/ui/Table";
import ClassesRow from "./ClassesRow";
import { useGetClasses } from "./useGetClasses";

function ClassesTable() {
  const { classes, isGettingClasses } = useGetClasses();
  const filteredData = usePaginate(classes, 7);

  if (isGettingClasses) return <Spinner />;
  if (!classes || classes?.length === 0)
    return <Empty className="text-center" resource="Class" />;

  return (
    <Table columns="2fr 2fr 2fr 1fr">
      <Table.Header>
        <span>Name</span>
        <span>Max Size</span>
        <span>Current Size</span>
        <span>Options</span>
      </Table.Header>
      <Table.Body
        data={filteredData}
        render={(classData) => (
          <Table.Row key={classData.id}>
            <ClassesRow classData={classData} />
          </Table.Row>
        )}
      />
      <Table.Tail>
        <Pagination dataLength={classes?.length} numberOfElements={7} />
      </Table.Tail>
    </Table>
  );
}

export default ClassesTable;
