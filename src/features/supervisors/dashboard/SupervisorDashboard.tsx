import { useUser } from "@/slices/userSlice";
import Welcome from "@/ui/Welcome";
import SupervisorStatistics from "./SupervisorStatistics";

function SupervisorDashboard() {
  const {
    user: { name, lastName },
  } = useUser();

  return (
    <div className="grid grid-cols-2 gap-10">
      <Welcome grid="col-start-1 col-end-3" username={`${name} ${lastName}`} />
      <SupervisorStatistics />
    </div>
  );
}

export default SupervisorDashboard;
