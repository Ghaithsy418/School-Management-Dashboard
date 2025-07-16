import Cookies from "js-cookie";
import { fetcher } from "./fetcher";

interface PostWithoutFilesTypes {
  event_name: string;
  post: string;
}

export async function getAllEvents() {
  return fetcher({ url: "/api/getAllPublishedEvents", method: "GET" });
}

export async function deleteEvent(id: number) {
  return fetcher({ url: `/api/deleteEvent/${id}`, method: "DELETE" });
}

export async function getEventComments(id: number) {
  return fetcher({ url: `/api/getEventComments/${id}`, method: "GET" });
}

export async function addComment(body: {
  content: string;
  event_id: number;
  parent_id?: number;
}) {
  return fetcher({ url: "/api/addComment", method: "POST", body });
}

export async function createPost(body: {
  event_name: string;
  post: string;
  photos: FileList;
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
export async function editPost(body: {
  event_name: string;
  post: string;
  photos: FileList;
  deleted_media_ids: number[];
  id: number;
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

  if (body.deleted_media_ids.length !== 0) {
    body.deleted_media_ids.forEach((id) =>
      formData.append("deleted_media_ids[]", String(id)),
    );
  }

  try {
    const res = await fetch(
      import.meta.env.VITE_APP_URL + `/api/editEvent/${body.id}`,
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
