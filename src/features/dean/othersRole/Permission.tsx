import { PermissionTypes } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";

interface ChoosenPermissionTypes {
  permission: string;
  choosenBefore: boolean;
}

interface PropsTypes {
  permission: PermissionTypes;
  currentPermissions: string[];
  choosenPermission: ChoosenPermissionTypes;
  setChoosenPermission: Dispatch<SetStateAction<ChoosenPermissionTypes>>;
}

function Permission({
  permission,
  currentPermissions,
  choosenPermission,
  setChoosenPermission,
}: PropsTypes) {
  const isExist = currentPermissions.includes(permission.permission);

  function handleClick() {
    setChoosenPermission({
      permission: permission.permission,
      choosenBefore: isExist,
    });
  }

  return (
    <div
      onClick={handleClick}
      role="button"
      className={`flex w-66 cursor-pointer flex-col rounded-md px-4 py-3 ${choosenPermission.permission === permission.permission ? "ring-4" : "ring"} transition-colors ${isExist ? "bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-indigo-50 ring-gray-900/40 dark:ring-gray-500/40" : "ring-gray-700/30 hover:bg-gray-100 dark:ring-gray-400/30 hover:dark:bg-gray-700"} items-center justify-center gap-3`}
    >
      <h4 className="text-xl font-bold">{permission.permission}</h4>
      <p className="text-center font-light">{permission.description}</p>
    </div>
  );
}

export default Permission;
