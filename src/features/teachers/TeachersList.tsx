import Spinner from "@/ui/Spinner";
import Cards from "../../ui/Cards";
import { useGetTeachers } from "./useGetTeachers";
import Empty from "@/ui/Empty";
import Card from "@/ui/Card";

function TeachersList() {
  const { teachers, isGettingTeachers } = useGetTeachers();

  if (isGettingTeachers) return <Spinner />;
  if (!teachers?.length) return <Empty resource="teachers" />;

  return (
    <div>
      <Cards
        data={teachers}
        render={(item) => (
          <Card key={item.teacher_id} userType="teachers" data={item} />
        )}
      />
    </div>
  );
}

export default TeachersList;
