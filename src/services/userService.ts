import api from "./api";
import type { BalanceModel } from "@models/BalanceModel";

export async function getBalanceUserService(
  token: string,
  date: string,
): Promise<BalanceModel[]> {
  const response = await api.get("/balance", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
