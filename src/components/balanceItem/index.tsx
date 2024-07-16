import { useMemo } from "react";

import { Container, Label, Balance } from "./styles";

import type { BalanceModel } from "@models/BalanceModel";
import { config } from "src/styles/config";

import { formattedMoney } from "@utils/numbersFunctions";

interface BalanceItemProps {
  balance: BalanceModel;
}

export function BalanceItem({ balance }: BalanceItemProps) {
  const labelName = useMemo(() => {
    if (balance.tag === "saldo") {
      return {
        label: "Saldo atual",
        color: config.colors.blue,
      };
    }

    if (balance.tag === "receita") {
      return {
        label: "Entradas de hoje",
        color: config.colors.green,
      };
    }

    return {
      label: "Saídas de hoje",
      color: config.colors.red,
    };
  }, [balance]);

  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>

      <Balance>{formattedMoney(balance.saldo)}</Balance>
    </Container>
  );
}
