import Cookies from "js-cookie";
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

export async function uploadExcelSheet(
  body: { excel_file: File },
  token: string,
) {
  const formData = new FormData();

  if (body.excel_file) {
    formData.append("excel_file", body.excel_file);
  }

  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + "/api/uploadMarkExcelCheat",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      if (errorData?.error === "Unauthorized") {
        Cookies.remove("token");
        Cookies.remove("userData");
        window.location.href = "/login";
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          errorData?.message || "Something went wrong with adding a Student",
        );
      }
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getMarksProfile(body: {
  student_id: number;
  semester: string;
}) {
  return fetcher({ url: "/api/getMarksProfile", method: "POST", body });
}

export async function getClassMarks(body: {
  semester: string;
  class_id: number;
}) {
  return fetcher({ url: "/api/getClassMarks", method: "POST", body });
}
