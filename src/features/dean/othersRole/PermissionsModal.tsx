import Empty from "@/ui/Empty";
import { useShowPermissions } from "./useShowPermissions";
import Spinner from "@/ui/Spinner";
import Permission from "./Permission";
import { useState } from "react";
import SubmitButton from "@/ui/SubmitButton";
import { useAssignPermission } from "./useAssignPermission";
import { useUnassignPermission } from "./useUnassignPermission";

interface ModalTypes {
  currentPermissions: string[];
  full_name: string;
  user_id: number;
  onCloseModal?: () => void;
}

function PermissionsModal({
  currentPermissions,
  full_name,
  user_id,
  onCloseModal,
}: ModalTypes) {
  const { permissions, isGettingPermissions } = useShowPermissions();
  const { assignPermissionMutation, isAssigningPermission } =
    useAssignPermission();
  const { unassignPermissionMutation, isUnassigningPermission } =
    useUnassignPermission();
  const [choosenPermission, setChoosenPermission] = useState({
    permission: "",
    choosenBefore: false,
  });

  function handleClick() {
    if (!choosenPermission.permission) return;
    if (!choosenPermission.choosenBefore)
      assignPermissionMutation(
        {
          permission: choosenPermission.permission,
          user_id,
        },
        { onSuccess: () => onCloseModal?.() },
      );
    else
      unassignPermissionMutation(
        {
          permission: choosenPermission.permission,
          user_id,
        },
        { onSuccess: () => onCloseModal?.() },
      );
  }

  const assignButtonText = isAssigningPermission
    ? "Assigning..."
    : "Assining the Permission";
  const unassignButtonText = isUnassigningPermission
    ? "Unassigning..."
    : "Unassign the Permission";

  if (isGettingPermissions) return <Spinner />;

  if (!permissions?.length || permissions?.length === 0)
    return <Empty resource="permissions" />;

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-bold">{full_name}'s Permissions</h3>
      <div className="flex flex-wrap justify-center gap-5">
        {permissions?.map((permission) => (
          <Permission
            key={permission.id}
            permission={permission}
            currentPermissions={currentPermissions}
            choosenPermission={choosenPermission}
            setChoosenPermission={setChoosenPermission}
          />
        ))}
      </div>
      <div className="place-self-center">
        {choosenPermission.permission !== "" && (
          <SubmitButton
            onClick={handleClick}
            colorFrom={
              choosenPermission.choosenBefore
                ? "from-rose-500"
                : "from-indigo-500"
            }
            colorTo={
              choosenPermission.choosenBefore ? "to-red-600" : "to-violet-600"
            }
            colorHoverFrom={
              choosenPermission.choosenBefore
                ? "hover:from-rose-600"
                : "hover:from-indigo-600"
            }
            colorHoverTo={
              choosenPermission.choosenBefore
                ? "hover:to-red-700"
                : "hover:to-violet-700"
            }
          >
            {!choosenPermission.choosenBefore
              ? assignButtonText
              : unassignButtonText}
          </SubmitButton>
        )}
      </div>
    </div>
  );
}

export default PermissionsModal;
