import { fetcher } from "./fetcher";

export async function getEmptySheet(body: {
  classId: number;
  semester: string;
  type: string;
}) {
  return fetcher({
    url: "/api/getEmptyExcelCheatForMarks",
    method: "POST",
    body: { ...body, classID: body.classId },
  });
}
