import api from "./api";
import type { ReceiveModel } from "@models/ReceiveModel";

interface ReceiveRegisterProps {
  receive: ReceiveModel;
}

export async function registerReceiveService({
  receive,
}: ReceiveRegisterProps) {
  await api.post("/receive", {
    description: receive.description,
    value: receive.value,
    type: receive.type,
    date: receive.date,
  });
}

export async function getReceivesService(date: string) {
  const response = await api.get("/receives", {
    params: {
      date,
    },
  });

  return response.data;
}
