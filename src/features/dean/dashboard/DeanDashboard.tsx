import { useUser } from "@/slices/userSlice";
import Welcome from "@/ui/Welcome";
import DeanStatistics from "./DeanStatistics";

function DeanDashboard() {
  const {
    user: { name, lastName },
  } = useUser();
  return (
    <div className="grid grid-cols-2 gap-10">
      <Welcome grid="col-start-1 col-end-3" username={`${name} ${lastName}`} />
      <DeanStatistics />
    </div>
  );
}

export default DeanDashboard;
