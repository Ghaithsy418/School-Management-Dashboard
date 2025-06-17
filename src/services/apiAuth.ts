export async function login(body: { email: string; password: string }) {
  const res = await fetch(import.meta.env.VITE_APP_URL + "/api/login", {
    method: "POST",
    headers,
    body: JSON.stringify({ ...body, deviceType: "web" }),
  });
  if (!res.ok) throw new Error("Something went wrong with the Login!");

  const data = await res.json();
  return data;
}

export async function sendResetPassword(body: { email: string }) {
  const res = await fetch(
    import.meta.env.VITE_APP_URL + "/api/sendForgetPasswordOtp",
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    },
  );
  if (!res.ok)
    throw new Error("Something went wrong with reseting the password!");
  const data = await res.json();

  return data;
}

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
