import { fetcher } from "./fetcher";

export async function endOfFirstSemester() {
  return fetcher({ url: "/api/endOfTheFirstSemester", method: "GET" });
}

export async function startOfSecondSemester() {
  return fetcher({ url: "/api/startOfTheSecondSemester", method: "GET" });
}

export async function startOfYear() {
  return fetcher({ url: "/api/startOfTheYear", method: "GET" });
}

export async function endOfYear() {
  return fetcher({ url: "/api/endOfTheYear", method: "GET" });
}
