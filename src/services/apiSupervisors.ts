import { fetcher } from "./fetcher";

export async function getSupervisors() {
  return fetcher({ url: "/api/getAllSupervisors", method: "GET" });
}

export async function getSupervisor(body: { supervisor_id: number }) {
  return fetcher({ url: "/api/getSpecificSupervisor", method: "POST", body });
}
