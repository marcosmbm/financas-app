export function formattedMoney(value?: number): string {
  const currentValue = value ? value : 0;

  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currentValue);
}
