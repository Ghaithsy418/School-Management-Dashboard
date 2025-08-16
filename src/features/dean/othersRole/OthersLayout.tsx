import OthersCard from "./OthersCard";
import { useGetUsersPermisions } from "./useGetUsersPermisions";

function OthersLayout() {
  useGetUsersPermisions();
  return (
    <div className="grid grid-cols-4 gap-6">
      <OthersCard />
    </div>
  );
}

export default OthersLayout;
