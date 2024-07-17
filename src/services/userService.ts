import api from "./api";
import type { BalanceModel } from "@models/BalanceModel";

export async function getBalanceUserService(
  date: string,
): Promise<BalanceModel[]> {
  const response = await api.get("/balance", {
    params: {
      date,
    },
  });
  return response.data;
}
