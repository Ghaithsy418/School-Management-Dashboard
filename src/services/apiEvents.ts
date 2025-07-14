import Cookies from "js-cookie";
import { fetcher } from "./fetcher";

interface PostWithoutFilesTypes {
  event_name: string;
  post: string;
  user_id: number;
}

export async function createPost(body: {
  event_name: string;
  post: string;
  photos: FileList;
  user_id: number;
}) {
  const token = Cookies.get("token") || "";
  const formData = new FormData();
  const bodyData = ["event_name", "post"];

  bodyData.forEach((bd) => {
    if (bd as keyof PostWithoutFilesTypes)
      formData.append(bd, body[bd as keyof PostWithoutFilesTypes] as string);
  });

  formData.append("is_published", "1");

  const theFiles = [...body.photos];
  if (theFiles.length > 0) {
    theFiles.forEach((file) => {
      formData.append("photos[]", file);
    });
  }

  try {
    const res = await fetch(import.meta.env.VITE_APP_URL + "/api/addEvent", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      if (errorData?.error === "Unauthorized") {
        Cookies.remove("token");
        Cookies.remove("userData");
        window.location.href = "/login";
        throw new Error("Unauthorized");
      } else {
        throw new Error(
          errorData?.message || "Something went wrong with adding the event",
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

export async function getAllEvents() {
  return fetcher({ url: "/api/getAllPublishedEvents", method: "GET" });
}
