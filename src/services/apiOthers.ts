import { fetcher } from "./fetcher";

export async function getUsersPermisions() {
  return fetcher({ url: "/api/showAllUserPermissions", method: "GET" });
}
