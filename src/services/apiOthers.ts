import { fetcher } from "./fetcher";

export async function getUsersPermisions() {
  return fetcher({ url: "/api/getAllOthers", method: "GET" });
}

export async function showPermissions() {
  return fetcher({ url: "/api/showPermissions", method: "GET" });
}

export async function assignPermission(body: {
  user_id: number;
  permission: string;
}) {
  return fetcher({ url: "/api/assignPermission", method: "POST", body });
}

export async function unassignPermission(body: {
  user_id: number;
  permission: string;
}) {
  return fetcher({
    url: "/api/deleteAssignPermission",
    method: "DELETE",
    body,
  });
}

export async function getSpecificOther(body: { other_id: number }) {
  return fetcher({ url: "/api/getSpecificOther", method: "POST", body });
}

// export async function unAssignPermission(body: {});
