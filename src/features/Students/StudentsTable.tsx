import { usePaginate } from "@/hooks/usePaginate";
import Empty from "@/ui/Empty";
import Pagination from "@/ui/Pagination";
import Spinner from "@/ui/Spinner";
import Table from "../../ui/Table";
import { StudentTypes } from "../../utils/types";
import StudentsRow from "./StudentsRow";
import { useGetStudents } from "./useGetStudents";
import { useClientTransform } from "@/hooks/useClientTransform";
import { useTranslation } from "react-i18next";
import { useUser } from "@/slices/userSlice";

function StudentsTable() {
  const { t } = useTranslation("students");
  const {
    user: { role },
  } = useUser();
  const { students, isGettingStudents } = useGetStudents();
  const finalStudents = useClientTransform(students, "full_name");
  const filteredStudents = usePaginate(finalStudents, 10);

  const HeaderTitles = [
    t("main.name"),
    t("main.id"),
    t("main.class"),
    role === "supervisor" ? t("main.absenceNumber") : t("main.gpa"),
    t("main.contact"),
  ];

  if (isGettingStudents) return <Spinner />;
  if (!students?.length) return <Empty resource="students" />;

  return (
    <Table columns="0.8fr 0.4fr 0.4fr 0.4fr 0.3fr 0.3fr">
      <Table.Header>
        {HeaderTitles.map((title) => (
          <div key={title}>{title}</div>
        ))}
      </Table.Header>

      <Table.Body
        data={filteredStudents}
        render={(student: StudentTypes) => (
          <Table.Row key={student?.student_id}>
            <StudentsRow student={student} />
          </Table.Row>
        )}
      />

      <Table.Tail>
        <Pagination dataLength={students?.length} numberOfElements={10} />
      </Table.Tail>
    </Table>
  );
}

export default StudentsTable;
