export async function showStudents(token: string, page: number) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_APP_URL}/api/getPaginateStudents?page=${page}`,
      {
        method: "GET",
        headers: { ...headers, Authorization: `Bearer ${token}` },
      },
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message ||
          "Something went wrong while getting Students data!",
      );
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
