import Cookies from "js-cookie";
export const fetcher = async ({
  url,
  method,
  body,
  errorName = "",
}: FetcherTypes) => {
  const token = Cookies.get("token") || "";

  const res = await fetch(`${import.meta.env.VITE_APP_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    if (errorData?.error === "Unauthorized") {
      Cookies.remove("token");
      Cookies.remove("role");
      window.location.href = "/login";
      throw new Error("Unauthorized");
    } else {
      throw new Error(
        errorData?.message[errorName] ||
          errorData?.message ||
          "Something went Wrong!",
      );
    }
  }
  const data = await res.json();

  return data;
};

interface FetcherTypes {
  url: string;
  method: string;
  body?: unknown;
  errorName?: string;
}
