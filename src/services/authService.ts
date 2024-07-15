import api from "./api";

export async function createUserService(
  name: string,
  email: string,
  password: string,
) {
  const response = await api.post("/users", { name, email, password });
  return response;
}

export async function authUserService(email: string, password: string) {
  const response = await api.post("/login", { email, password });
  return response.data;
}

export async function userDetailService(token: string) {
  const response = await api.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
