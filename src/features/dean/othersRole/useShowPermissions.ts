import { showPermissions } from "@/services/apiOthers";
import { PermissionTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface PermissionsTypes {
  permissions: PermissionTypes[];
}

export const useShowPermissions = function () {
  const { data, isLoading: isGettingPermissions } = useQuery<PermissionsTypes>({
    queryKey: ["permissions"],
    queryFn: showPermissions,
  });

  return { permissions: data?.permissions, isGettingPermissions };
};
