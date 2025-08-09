import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import AvatarGenerator from "./AvatarGenerator";
import { Link } from "react-router-dom";
import { useUser } from "@/slices/userSlice";

function Avatar() {
  const { currentUser, isGettingCurrentUser } = useGetCurrentUser();
  const {
    user: { role },
  } = useUser();

  if (isGettingCurrentUser)
    return <h3 className="font-semibold">Loading...</h3>;
  if (!currentUser?.full_name) return null;

  const fullName = currentUser.full_name.split(" ");

  return (
    <Link
      to={`${role}/myProfile`}
      className="transition-all duration-300 hover:text-indigo-700"
    >
      <div className="flex items-center justify-center gap-3">
        <AvatarGenerator name={currentUser.full_name} />
        <h3 className="font-semibold capitalize">
          {fullName[0] + " " + fullName[2]}
        </h3>
      </div>
    </Link>
  );
}

export default Avatar;
