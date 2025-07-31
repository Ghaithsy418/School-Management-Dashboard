import { usePaginate } from "@/hooks/usePaginate";
import Empty from "@/ui/Empty";
import MiniPagination from "@/ui/MiniPagination";
import Spinner from "@/ui/Spinner";
import Table from "@/ui/Table";
import ClassesRow from "./ClassesRow";
import { useGetClasses } from "./useGetClasses";
import { useTranslation } from "react-i18next";

function ClassesTable() {
  const { classes, isGettingClasses } = useGetClasses();
  const filteredData = usePaginate(classes, 7);
  const { t } = useTranslation("classes");

  if (isGettingClasses) return <Spinner />;
  if (!classes || classes?.length === 0)
    return <Empty className="text-center" resource="Class" />;

  return (
    <Table columns="2fr 2fr 2fr 1fr">
      <Table.Header>
        <span>{t("table.name")}</span>
        <span>{t("table.maxStudents")}</span>
        <span>{t("table.currentStudents")}</span>
        <span>{t("table.options")}</span>
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
        <MiniPagination dataLength={classes?.length} numberOfElements={7} />
      </Table.Tail>
    </Table>
  );
}

export default ClassesTable;
