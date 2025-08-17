import { useUser } from "@/slices/userSlice";
import Welcome from "@/ui/Welcome";

function DeanDashboard() {
  const {
    user: { name, lastName },
  } = useUser();
  return (
    <div className="grid grid-cols-2">
      <Welcome grid="col-start-1 col-end-3" username={`${name} ${lastName}`} />
    </div>
  );
}

export default DeanDashboard;
