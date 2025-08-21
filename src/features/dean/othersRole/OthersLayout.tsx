import Empty from "@/ui/Empty";
import Spinner from "@/ui/Spinner";
import OthersCard from "./OthersCard";
import { useGetUsersPermisions } from "./useGetUsersPermisions";
import { useShowPermissions } from "./useShowPermissions";

function OthersLayout() {
  const { others, isGettingOthers } = useGetUsersPermisions();
  useShowPermissions();

  if (isGettingOthers) return <Spinner />;

  if (!others?.length && others?.length === 0)
    return <Empty resource="users" />;

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {others?.map((user) => (
        <OthersCard key={user.user_id} user={user} />
      ))}
    </div>
  );
}

export default OthersLayout;
