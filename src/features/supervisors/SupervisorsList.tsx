import Cards from "@/ui/Cards";
import { useGetSupervisors } from "./useGetSupervisors";
import Spinner from "@/ui/Spinner";
import Empty from "@/ui/Empty";
import Card from "@/ui/Card";

function SupervisorsList() {
  const { supervisors, isGettingSupervisors } = useGetSupervisors();

  if (isGettingSupervisors) return <Spinner />;
  if (!supervisors?.length) return <Empty resource="supervisors" />;

  return (
    <div>
      <Cards
        data={supervisors}
        render={(supervisor) => (
          <Card
            key={supervisor.supervisor_id}
            userType="supervisors"
            data={supervisor}
          />
        )}
      />
    </div>
  );
}

export default SupervisorsList;
