import { AxiosError } from "axios";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function getErrorMessage(error: any): string {
  if (error instanceof AxiosError) {
    return error.response?.data.error;
  }

  return "Algo inesperado aconteceu. Tente novamente mais tarde!";
}
