import Spinner from "@/ui/Spinner";
import OthersCard from "./OthersCard";
import { useGetUsersPermisions } from "./useGetUsersPermisions";
import Empty from "@/ui/Empty";

function OthersLayout() {
  const { others, isGettingOthers } = useGetUsersPermisions();

  if (isGettingOthers) return <Spinner />;

  if (!others?.length && others?.length === 0)
    return <Empty resource="users" />;

  return (
    <div className="grid grid-cols-4 gap-6">
      {others?.map((user) => (
        <OthersCard key={user.user_id} user={user} />
      ))}
    </div>
  );
}

export default OthersLayout;
