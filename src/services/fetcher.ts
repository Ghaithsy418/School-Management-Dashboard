import Cookies from "js-cookie";
export const fetcher = async ({ url, method, body }: FetcherTypes) => {
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
    const errorMessage = errorData?.message;
    if (errorMessage === "Unauthorized") {
      Cookies.remove("token");
      Cookies.remove("role");
      window.location.href = "/login";
      throw new Error("Unauthorized");
    } else {
      let finalErrorMessage = "Something went Wrong!";
      if (typeof errorMessage === "string") finalErrorMessage = errorMessage;
      if (typeof errorMessage === "object" && errorMessage !== null) {
        const objectValues: string[] = Object.values(errorMessage);
        if (objectValues.length !== 0) finalErrorMessage = objectValues[0];
      }
      throw new Error(finalErrorMessage);
    }
  }
  const data = await res.json();
  return data;
};

interface FetcherTypes {
  url: string;
  method: string;
  body?: unknown;
}
