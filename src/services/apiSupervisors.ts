import { fetcher } from "./fetcher";

export async function getSupervisors() {
  return fetcher({ url: "/api/getAllSupervisors", method: "GET" });
}
