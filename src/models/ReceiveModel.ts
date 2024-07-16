export interface ReceiveModel {
  id?: string;
  description: string;
  type: "receita" | "despesa";
  date: string;
  value: number;
}
