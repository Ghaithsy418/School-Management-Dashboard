import SmallSpinner from "@/ui/SmallSpinner";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "@/ui/Button";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useDeleteUser } from "./useDeleteUser";

interface DeleteUserTypes {
  name: string;
  role: string;
  user_id: number;
}

function DeleteUser({ name, role, user_id }: DeleteUserTypes) {
  const { deleteUserMutation, isDeletingUser } = useDeleteUser(role);

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <HiOutlineExclamationTriangle className="h-10 w-10 text-red-600" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-slate-800">
          Delete <span className="capitalize">{role}</span>
        </h3>
        <p className="max-w-md text-slate-500">
          Are you sure you want to permanently delete the {role}{" "}
          <strong className="font-semibold text-slate-700">{name}</strong>?
          <br />
          This action cannot be undone.
        </p>
      </div>

      <div className="mt-6 w-full max-w-xs">
        <Button
          onClick={() => deleteUserMutation({ user_id })}
          disabled={isDeletingUser}
          color="text-white"
          backgroundColor="bg-red-600"
          backgroundHover="hover:bg-red-700"
          className="w-full justify-center"
        >
          {isDeletingUser ? (
            <SmallSpinner />
          ) : (
            <div className="flex items-center gap-2">
              <HiOutlineTrash className="h-5 w-5" />
              <span>Yes, delete {role}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}

export default DeleteUser;
